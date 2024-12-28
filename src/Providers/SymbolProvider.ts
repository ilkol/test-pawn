import { CancellationToken, DocumentSymbol, DocumentSymbolProvider, Position, ProviderResult, Range, SymbolInformation, SymbolKind, TextDocument } from "vscode";
import { FileManager } from "../Managers/FileManager";
import { OpenedFile } from "../OpenedFile";
import { AbstractOpenFile } from "../AbstractOpenFile";



export class SymbolProvider implements DocumentSymbolProvider {

	constructor(private readonly fileManager: FileManager) {

	}

	provideDocumentSymbols(document: TextDocument, token: CancellationToken): ProviderResult<SymbolInformation[] | DocumentSymbol[]> {
		let items: DocumentSymbol[] = [];
		
		const file: AbstractOpenFile | undefined = this.fileManager.openedFiles.get(document.uri);
		if(file) {
			items = file.symbolsManager.symbols;
			// file.tokens.forEach((value) => {
			// 	// tokensBuilder.push(value.pos, value.type, value.modifers);
			// });
		}
		// items.push(new DocumentSymbol("test","asdasd", SymbolKind.Function, new Range(new Position(1,1), new Position(2,5)), new Range(new Position(1,1), new Position(1,5))));
		
		// let i = new SymbolInformation("test", SymbolKind.Function, "abs", new Location(document.uri, new Range(new Position(1,1), new Position(1,2))));
		return items;
	}

}