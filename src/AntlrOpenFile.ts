import { TextDocument } from "vscode";
import { AbstractOpenFile } from "./AbstractOpenFile";
import { FileManager } from "./Managers/FileManager";

import { CharStreams, CommonTokenStream } from "antlr4ts";
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker'
import { pawnLexer } from "./antlr/generated/pawnLexer";
import { pawnParser } from "./antlr/generated/pawnParser";
import { pawnListener } from "./antlr/generated/pawnListener";
import { PawnListener } from "./antlr/PawnListener";
import { ASTNode } from "./antlr/AST/ASTNode";
import { DiagnosticMessage } from "./antlr/diagnostic/DiagnosticMessage";
import { Analyzer } from "./antlr/AST/visitor/Analyzer";
import { Declarations } from "./antlr/AST/Declarations";

export class AntrlOpenFile extends AbstractOpenFile
{
	private AST: ASTNode | null = null;
	public constructor(file: TextDocument, fileManager: FileManager)
	{
		super(file, fileManager);
	}

	public tryParse(): void
	{
		const lexer = this.tryLex();
		const tokenStream = new CommonTokenStream(lexer);
		const parser = new pawnParser(tokenStream);
		const ruleContext = parser.file();
		const listener: pawnListener = new PawnListener();
		
		ParseTreeWalker.DEFAULT.walk(listener, ruleContext);

		let listen = (<PawnListener>listener);
		this.AST = <Declarations>listen.Root;

		let analyzer = new Analyzer(listen.diagnostics);
		try {
			this.AST.accept(analyzer);
		}
		catch(e) {
			console.error("Error on tree visit")
			console.error(e);
		}
		console.log("Обход дерева окончен");

		this.diagnostic(listen.diagnostics);
	}

	private tryLex(): pawnLexer
	{
		const stream = CharStreams.fromString(this.file.getText());
		return new pawnLexer(stream);
	}

	private diagnostic(diagnostics: DiagnosticMessage[])
	{
		diagnostics.forEach(element => {
			this.diagnositcManager.addDiagnostic(element.message, element.type, this.file.uri.path, element.pos);
		});
	}

}