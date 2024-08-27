import { l10n } from "vscode";
import { IVisitor } from "../../visitor/IVisitor";
import { ASTNode } from "../ASTNode";

export class Docs extends ASTNode
{
	public accept(visitor: IVisitor): void {
		throw new Error("Method not implemented.");
	}

	private _text: string;

	constructor(text: string)
	{
		super();
		text = this.prepareText(text);
		this._text = text;
	}
	

	private prepareText(text: string): string
	{
		if(text.match(/<\w+>/)) {
			return this.prepareTextOld(text);
		}
		else {
			return this.prepareTextNew(text);
		}
	}

	private prepareTextOld(text: string): string
	{
		var result = "### " + l10n.t("Outdated documentation") +"!\r\n";

		var match = text.match(/(?<=<summary>)(.*)(?=<\/summary>)/si);
		if(match)
		{
			result += match[1];
		}

		const paramReg = /<param name="(.*?)">(.+?)<\/param>/sig

		while((match = paramReg.exec(text)) !== null)
		{
			result += "\n\r@param __" + match[1] +"__" + ` — ${match[2]}`;
		}
		match = text.match(/(?<=<returns>)(.*)(?=<\/returns>)/si);
		if(match)
		{
			result += "\n\r@return — " +  match[1];
		}

		return result;
	}

	private prepareTextNew(comment: string): string {
		comment = comment.replace(/^\/\*\*[\r\n]*/, '').replace(/\*\/$/, '');

		// Разбиваем на строки
		const lines = comment.split('\n');

		let result: string[] = [];

		lines.forEach(line => {
			// Убираем ведущие * и пробелы
			line = line.replace(/^\s*\*\s?/, '');
			line = line.replace(/\r/, '');

			// Проверяем, если линия начинается с @
			if (line.startsWith('@')) {
				// Если до этого были собраны строки текста, объединяем их в одну строку
				const match = line.match(/@(\w+)(?:\s+(\w+))?(?:\s+(\w+))?(.+?)/);
				if(match) {
					line = "@" + match[1];
					if(match[1] === "return") {
						line += " `" + match[2] + "`" + ` — ${match[3]}`;
					}
					else if(match[1] === "param") {
						line += " `" + match[2] + "`" + " __" + match[3] + "__" + ` — ${match[4]}`;
					}
				}
				result.push(line);
			} else {
				
				// Собираем обычный текст
				if(result.length !== 0) {
					result[result.length - 1] += " " + line;
				}
				else {
					result.push(line);
		
				}
			}
		});

		// Объединяем все строки обратно
		return result.join('\n\r');
	}


	get text(): string 
	{
		return this._text;
	}
}