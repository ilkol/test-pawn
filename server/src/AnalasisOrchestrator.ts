import { Connection, WorkDoneProgressServerReporter } from "vscode-languageserver";
import { Preprocessor } from "./Preprocessor/Preprocessor";
import { SymbolManager } from "./SymbolSystem";
import { AbstractOpenFile, ParsingStep } from "./AbstractOpenFile";
import { Logger } from "./Logger/Logger";
import { CacheManager } from "./cache/CacheManager";
import { Serialization } from "./cache/Serialization";
import { ASTNode } from "./antlr/AST/Nodes/ASTNode";
import { Parser } from "./Parser/Parser";

export class AnalasisOrchestrator {
	constructor(
		private connection: Connection,
		private preprocessor: Preprocessor,
		private symbolManager: SymbolManager
	) {}

	public async analyze(document: AbstractOpenFile) {
		if (document.isAnalyzing) return document.waitForAnalysis();

		document.isAnalyzing = true;
		const reporter = await this.connection.window.createWorkDoneProgress();
		
		try {
			Logger.log(`Analyze ${document.relativePath}`);
			reporter.begin(`Analyzing ${document.relativePath}`, 0, "Initializing...");
			await this.handleCacheInitial(document);
			reporter.report(1, "Preprocessing");
			Logger.log(`Preprocess ${document.relativePath}`);
			await this.preprocessDocument(document, reporter);
			reporter.report(40, "Parsing");
			Logger.log(`Parse ${document.relativePath}`);
			await this.parseDocument(document);
            reporter.report(70, "Analyze AST");
			Logger.log(`Analyze ${document.relativePath}`);
			await this.analyzeDocumentAST(document);
			reporter.report(100, "Complete");
			Logger.log(`AST complete for ${document.relativePath}`);

			this.connection.sendDiagnostics({
				uri: document.URI,
				diagnostics: document.diagnostics
			});
		} catch(e) {
			console.error(e);
			Logger.error(`Ошибка в пайплайне для ${document.path}: ${e}`);
		} finally {
            document.isAnalyzing = false;
            document.completeAnalysis();
            reporter.done();
        }
	}

	private async handleCacheInitial(document: AbstractOpenFile) {
        document.cache = await CacheManager.getFileCache(document.path);
        const textHash = CacheManager.hashText(document.text);

        if (document.cache && document.cache.cacheVersion >= CacheManager.VERSION) {
            if (document.cache.texttHash !== textHash) {
                document.cache = undefined;
                Logger.log(`Кэш устарел для ${document.path}`);
            } else {
                Logger.log(`Найден валидный кэш для ${document.path}`);
                if (document.cache.diagnostics) {
                    document.diagnostics.push(...document.cache.diagnostics);
                }
            }
        } else {
            document.cache = undefined;
        }
        document.parsinState = ParsingStep.textHashed;
		CacheManager.setFileCache(document.cache);
    }

	private async preprocessDocument(document: AbstractOpenFile, reporter: WorkDoneProgressServerReporter) {
		if (document.parsinState < ParsingStep.preprocessed) {
			this.symbolManager.resetAllFileSymbols(document.path);
			let last = 0;
			await this.preprocessor.processFile(document, this.symbolManager, localPercent => { 
				reporter.report(10, `Preprocessing: ${Math.round(localPercent)}%`);
			});
			
			// Проверяем кэш AST после препроцессора (твоя старая логика)
			if (document.cache?.rootAST && !document.AST) {
				document.AST = Serialization.Deserialize.object<ASTNode>(document.cache.rootAST);
				document.parsinState = ParsingStep.parsed;
				// document.processedCode = "";
			} else {
				document.parsinState = ParsingStep.preprocessed;
			}
		}
	}

	private async parseDocument(document: AbstractOpenFile) {
		if (document.parsinState < ParsingStep.parsed) {
			await Parser.parseFile(document);
			document.parsinState = ParsingStep.parsed;
			
			// Сохраняем AST в кэш (твоя старая логика из onFileParsed)
			if (document.AST && document.cache) {
				try {
					document.cache.rootAST = Serialization.Serialize.toString(document.AST);
				} catch (e) {
					Logger.error("Ошибка сериализации AST");
				}
			}
		}
	}

	private async analyzeDocumentAST(document: AbstractOpenFile) {
		if (document.parsinState < ParsingStep.astWalked) {
			await Parser.walkAST(document, this.symbolManager);
			document.parsinState = ParsingStep.astWalked;
			
			if (document.cache) {
				document.cache.processCode = "";
				await CacheManager.writeFileCache(document.cache);
			}
		}
	}
}