import { CompletionItem, CompletionItemKind, CompletionItemTag, InsertTextFormat, MarkupKind } from 'vscode-languageserver';
import { defaultEvents } from './list';
import { Locale } from '../Locale';
// import { Locale } from 'vscode';

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
					'```cpp',
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
		{label: "new", insertText: "new", detail: Locale.t("new `identifire`;"), documentation: (Locale.t("The keyword `new` declares a new variable."))},
		{label: "new", kind: CompletionItemKind.Struct, insertText: "new ${0};", detail: Locale.t("new `identifire`;"), documentation: (Locale.t("The keyword `new` declares a new variable."))},
		{label: "if", insertText: "if", detail: Locale.t("if (`conditional expression`) `statement`"), documentation: (Locale.t("The `if` keyword divides the command execution flow into two cases. If the condition is met, the following code is executed. Otherwise, the code is skipped."))},
		{label: "if", kind: CompletionItemKind.Struct, insertText: "if ($1)$0", detail: Locale.t("if (`conditional expression`) `statement`"), documentation: (Locale.t("The `if` keyword divides the command execution flow into two cases. If the condition is met, the following code is executed. Otherwise, the code is skipped."))},
		{label: "else", insertText: "else $0", detail: Locale.t("else `statement`"), documentation: (Locale.t("The `else` keyword must follow the `if` statement. The code after `else` is executed if the condition in `if` is equal logically \"true\". When `if` statements are nested and `else` clauses are present, a given `else` is associated with the closest preceding if statement in the same block."))},
		{label: "return", insertText: "return", detail: Locale.t("return `expression`;"), documentation: (Locale.t("Terminates the current function and moves program control to the statement following the calling statement. The value of the expression is returned as the function result."))},
		{label: "return", kind: CompletionItemKind.Struct, insertText: "return $0;", detail: Locale.t("return `expression`;"), documentation: (Locale.t("Terminates the current function and moves program control to the statement following the calling statement. The value of the expression is returned as the function result."))},
		{label: "true", detail: "true", documentation: Locale.t("Constant equal 1, but tagged as bool:")},
		{label: "false", detail: "false", documentation: Locale.t("Constant equal 0, but tagged as bool:")},
		{label: "switch", insertText: "switch", detail: Locale.t("switch (`expression`) { `case list` }"), documentation: Locale.t("Transfers control to different statements within the switch body de pending on the value of the switch expression. The body of the switch statement is a compound statement, which contains a series of “case clauses”.")},
		{label: "switch", insertText: "switch ($1)\r\n{\r\n\tcase $2:\r\n\t{\r\n\t\t$3\r\n\t}\r\n\tdefault:\r\n\t{\r\n\t\t$0\r\n\t}\r\n}", kind: CompletionItemKind.Struct, detail: Locale.t("switch (`expression`) { `case list` }"), documentation: Locale.t("Transfers control to different statements within the switch body de pending on the value of the switch expression. The body of the switch statement is a compound statement, which contains a series of “case clauses”.")},
		{label: "for", detail: Locale.t("for (`expression 1`; `expression 2`; `expression 3`) statement")},
		{label: "while", detail: Locale.t("while (`expression`) statement")},
		{label: "case", insertText: "case $0"},
		{label: "case", insertText: "case $1:\r\n{\r\n\t$0\r\n}", kind: CompletionItemKind.Struct, detail: Locale.t("Case Statement")},
		{label: "default", insertText: "default"},
		{label: "default", insertText: "default:\r\n{\r\n\t$0\r\n}", kind: CompletionItemKind.Struct, detail: Locale.t("Default Statement")},
		{label: "break", insertText: "break;\r\n$0"},
		{label: "continue", insertText: "continue;\r\n$0"},
		{label: "enum", insertText: "enum $1 {\r\n\t$0\r\n}"},
		{label: "stock", insertText: "stock $0"},
		{label: "forward", insertText: "forward $0", detail: Locale.t("forward ")},
		{label: "public", insertText: "public $0"},
		{label: "const", insertText: "const $0"},
		{label: "static", insertText: "static $0"},
		{label: "char"},
		{label: "native", insertText: "native $0"},
		{label: "operator"}
	].map(keyword => {completions.push({ 
		label: keyword.label, 
		kind: keyword.kind ?? CompletionItemKind.Keyword,
		insertTextFormat: keyword.insertText ? InsertTextFormat.Snippet : undefined,
		insertText: keyword.insertText,
		detail: keyword.detail,
		documentation: keyword.documentation ? {
			kind: MarkupKind.Markdown,
			value: keyword.documentation
		} : undefined,

	})});
	
	[
		{label: "char", doc: Locale.t("Results in the number of cells needed to store a packed array of characters")},
		{label: "sizeof", doc: Locale.t("Returns the size of the array (number of cells)")},
		{label: "tagof", doc: Locale.t("Returns the tag ID")},
	].map(keyword => {completions.push({ 
		label: keyword.label, 
		kind: CompletionItemKind.Operator,
		documentation: {
			kind: MarkupKind.PlainText,
			value: keyword.doc
		},
	})});

	[
		{label: "cellbits", doc: Locale.t("The size of a cell in bits; usually `32`.")},
		{label: "cellmax", doc: Locale.t("The largest valid positive value that a cell can hold; usually `214748364`.")},
		{label: "cellmin", doc: Locale.t("The largest valid negative value that a cell can hold; usually `-214748364`.")},
		{label: "charbits", doc: Locale.t("The size of a packed character in bits; usually `8`.")},
		{label: "charmax", doc: Locale.t("The largest valid packed character value; a packed character is usually 8-bit and the maximum valid value isthus `25`")},
	].map(completion => {
		completions.push({ 
			label: completion.label, 
			kind: CompletionItemKind.Constant, 
			documentation: {
				kind: MarkupKind.PlainText,
				value: completion.doc
			},
			detail: "define"
		});
	});

	return completions;
}