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
		text = this.trimFirstAndLastLine(text);
		this._text = text;
	}
	

	private trimFirstAndLastLine(comment: string): string {
		comment = comment.replace(/^\/\*\*[\r\n]*/, '').replace(/\*\/$/, '');

		// Разбиваем на строки
		const lines = comment.split('\n');

		let result: string[] = [];

		lines.forEach(line => {
			// Убираем ведущие * и пробелы
			const last = result.length - 1;
			line = line.replace(/^\s*\*\s?/, '');

			// Проверяем, если линия начинается с @
			if (line.startsWith('@')) {
				// Если до этого были собраны строки текста, объединяем их в одну строку
				result.push(line);
			} else {
				// Собираем обычный текст
				if(last !== -1) {
					result[last] += " " + line;
				}
				else {
					result.push(line);
		
				}
			}
		});


		// Объединяем все строки обратно
		return result.join('\n');
	}


	get text(): string 
	{
		return this._text;
	}
}