import { Token } from "antlr4ts";
import { IVisitor } from "../visitor/IVisitor";
import { Serialization } from "../../../cache/Serialization";
import { Position, Range } from "../../../types";

export abstract class ASTNode implements Serialization.Serializable {
	/**
	 * Позиция узла
	 */
	protected _pos: Range = new Range(0,0,0,0);
	
	/**
	 * Техническое наименование
	 */
	public name: string = "Node";



	public constructor() {

	}
	
	/**
	 * Позиция узла
	 */
	public get pos() : Range {
		return this._pos;
	}
	
	/**
	 * Вычисление конечной позиции узла по последнему токену
	 * @param end последний токен узла
	 * @returns объект с конечной позицией узла (строкой и символом в строке)
	 */
	private calculateEndTokenPos(end: Token) {
		let endLine = end.line;
		let endCharacter = end.charPositionInLine;

		const stopText = end.text || '';
		if (stopText.includes('\n')) {
			const lines = stopText.split('\n');
			const lineCount = lines.length;
			const lastLine = lines[lineCount - 1];

			endLine = end.line + (lineCount - 1);
			endCharacter = lastLine.length;
		} else {
			endCharacter += stopText.length;
		}
		return { endLine, endCharacter };
	}

	/**
	 * Установка позиции узла
	 * @param start Начальная позиция узла
	 * @param end Конечная позиция узла
	 */
	public setPos(start: Token, end: Token) {
		const { endLine, endCharacter } = this.calculateEndTokenPos(end);

		this._pos = new Range(start.line - 1, start.charPositionInLine,endLine - 1, endCharacter);
	}
	public setRange(start: Position, end: Position) {
		this._pos = new Range(start, end);
	}
	public set range(range: Range) {
		this._pos = range;
	}
	public get range(): Range {
		return this._pos;
	}
	
	public abstract accept(visitor: IVisitor): void;




	toJSON(): Serialization.Nodes.Node {
		return {
			// eslint-disable-next-line @typescript-eslint/naming-convention
			__type: Serialization.NodeList.Undefined,
			pos: Serialization.Serialize.range(this._pos),
		};
	}
	static fromJSON(json: Serialization.Nodes.Node): ASTNode {
		throw new Error("Method not implemented.");
	}

	protected prepareFromJSON(json: Serialization.Nodes.Node) {
		this.range = Serialization.Deserialize.range(json.pos);
	}
}