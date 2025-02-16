import * as vscode from 'vscode';
import { defaultEvents } from './list';

export interface IDefaultEvent {
	name: string
	description?: string
	wiki?: string
	code?: string
	args?: string
	deprecated?: boolean
}

export function getDefaultComplitions(): vscode.CompletionItem[] {
	let complitions: vscode.CompletionItem[] = [];
	let insertText: string = "";
	defaultEvents.forEach(eventNames => {

		insertText = ` ${eventNames.name}(${eventNames.args !== undefined ? eventNames.args : ""})`;

		const event: vscode.CompletionItem = new vscode.CompletionItem(eventNames.name);
		
		event.documentation = new vscode.MarkdownString(eventNames.description);
		event.documentation.isTrusted = true;
		event.documentation.supportThemeIcons = true;
		event.documentation.appendCodeblock("forward" + insertText, "pawn");
		event.documentation.supportHtml = true;
		event.documentation.appendMarkdown(eventNames.wiki !== undefined ?  eventNames.wiki : "");

		if(eventNames.deprecated) {
			event.tags = [vscode.CompletionItemTag.Deprecated];
		}
		event.kind = vscode.CompletionItemKind.Event;
		event.insertText =  new vscode.SnippetString("public" + insertText + " {\n\t$0\n\treturn 1\n}");;
		
		complitions.push(event);
	});

	let compl = new vscode.CompletionItem("stock", vscode.CompletionItemKind.Keyword);
	compl.documentation = new vscode.MarkdownString("Функции и переменные, помеченные этим ключвым словом, не будут включены в итоговую программу, если они нигде не используются.");
	
	complitions.push(compl);

	complitions.push(new vscode.CompletionItem("for", vscode.CompletionItemKind.Keyword));
	complitions.push(new vscode.CompletionItem("while", vscode.CompletionItemKind.Keyword));
	complitions.push(new vscode.CompletionItem("do", vscode.CompletionItemKind.Keyword));
	complitions.push(new vscode.CompletionItem("switch", vscode.CompletionItemKind.Keyword));
	complitions.push(new vscode.CompletionItem("case", vscode.CompletionItemKind.Keyword));
	complitions.push(new vscode.CompletionItem("default", vscode.CompletionItemKind.Keyword));
	complitions.push(new vscode.CompletionItem("public", vscode.CompletionItemKind.Keyword));
	complitions.push(new vscode.CompletionItem("break", vscode.CompletionItemKind.Keyword));
	complitions.push(new vscode.CompletionItem("continue", vscode.CompletionItemKind.Keyword));
	complitions.push(new vscode.CompletionItem("else", vscode.CompletionItemKind.Keyword));
	complitions.push(new vscode.CompletionItem("return", vscode.CompletionItemKind.Keyword));
	complitions.push(new vscode.CompletionItem("const", vscode.CompletionItemKind.Keyword));
	complitions.push(new vscode.CompletionItem("enum", vscode.CompletionItemKind.Keyword));
	complitions.push(new vscode.CompletionItem("native", vscode.CompletionItemKind.Keyword));
	complitions.push(new vscode.CompletionItem("operator", vscode.CompletionItemKind.Keyword));

	complitions.push(new vscode.CompletionItem("char", vscode.CompletionItemKind.Operator));
	complitions.push(new vscode.CompletionItem("sizeof", vscode.CompletionItemKind.Operator));
	complitions.push(new vscode.CompletionItem("tagof", vscode.CompletionItemKind.Operator));


	/*DefaultFunctionsComplitions.forEach(func => {

		let details = "";
		let argsStr = "";
		let argsInsStr = "";
		let i = 0;
		if(func.args) {
			func.args.forEach(arg => {
				argsStr += arg.string + ", ";
				argsInsStr += "${"+ (++i) + ":" + arg.name + "}, ";
				if(arg.doc) {
					details += "@param `" + arg.name + "` — " + arg.doc + "\n\r";
				}
			});
			argsStr = argsStr.slice(0, argsStr.length - 2);
			argsInsStr = argsInsStr.slice(0, argsInsStr.length - 2);
			details = details.slice(0, details.length - 2);
		}
		// ${4:args}

		const event: vscode.CompletionItem = new vscode.CompletionItem(func.name, vscode.CompletionItemKind.Function);
		
		event.documentation = new vscode.MarkdownString(func.description);
		event.documentation.appendCodeblock(`${func.name}(${argsStr})`, "pawn");
		details += func.detail ?? "";
		event.documentation.appendMarkdown(details);
		event.insertText =  new vscode.SnippetString(`${func.name}(${argsInsStr})`);
		event.detail = "a_samp";
		
		complitions.push(event);
	});
	*/
	return complitions;
}