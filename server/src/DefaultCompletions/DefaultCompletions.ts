import { CompletionItem, CompletionItemKind, CompletionItemTag, InsertTextFormat, MarkupKind } from 'vscode-languageserver';
import { defaultEvents } from './list';

export interface IDefaultEvent {
	name: string
	description?: string
	wiki?: string
	code?: string
	args?: string
	deprecated?: boolean
}

export function getDefaultCompletions(): CompletionItem[] {
	const completions: CompletionItem[] = [];
	defaultEvents.forEach(eventNames => {

		let insertText = ` ${eventNames.name}(${eventNames.args !== undefined ? eventNames.args : ""})`;

		const event: CompletionItem = {
			label: eventNames.name,
			kind: CompletionItemKind.Event,
			insertTextFormat: InsertTextFormat.Snippet,
			insertText: `public${insertText} {\n\t$0\n\treturn 1;\n}`,
			documentation: {
				kind: MarkupKind.Markdown,
				value: [
					eventNames.description ?? "",
					'```pawn',
					`forward${insertText}`,
					'```',
					eventNames.wiki ?? '',
				].join('\n'),
			}
		}; 
		if(eventNames.deprecated) {
			event.tags = [CompletionItemTag.Deprecated];
		}
		
		completions.push(event);
	});
	
	completions.push(
		{ 
			label: "stock", 
			kind: CompletionItemKind.Keyword,
			documentation: {
				kind: MarkupKind.Markdown,
				value: "Функции и переменные, помеченные этим ключвым словом, не будут включены в итоговую программу, если они нигде не используются."
			}
		},
	);

	[
		"for",
		"while",
		"do",
		"switch",
		"case",
		"default",
		"public",
		"break",
		"continue",
		"else",
		"return",
		"const",
		"enum",
		"native",
		"operator"
	].map(keyword => {completions.push({ label: keyword, kind: CompletionItemKind.Keyword })});
	
	[
		"char",
		"sizeof",
		"tagof",
	].map(keyword => {completions.push({ label: keyword, kind: CompletionItemKind.Operator })});

	return completions;
}