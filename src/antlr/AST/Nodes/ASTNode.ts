import { Position, Range } from "vscode";
import { Token } from "antlr4ts";
import { IVisitor } from "../visitor/IVisitor";
import { Serializable } from "../../../cache/Serializable";

export abstract class ASTNode implements Serializable {
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
	toJSON() {
		return {
			__type: 'ASTNode',
			_pos: {
				start: {
					line: this._pos.start.line,
					character: this._pos.start.character
				},
				end: {
					line: this._pos.end.line,
					character: this._pos.end.character
				}
			}
		}

	}
	fromJSON(json: any): ASTNode {
		throw new Error("Нельзя инстанцировать абстрактный класс");
	}
	
	/**
	 * Позиция узла
	 */
	public get pos() : Range {
		return this._pos;
	}
	
	/**
	 * Установка позиции узла
	 * @param start Начальная позиция узла
	 * @param end Конечная позиция узла
	 */
	public setPos(start: Token, end: Token) {
		this._pos = new Range(start.line - 1, start.charPositionInLine, end.line - 1, end.charPositionInLine);
	}
	public setRange(start: Position, end: Position) {
		this._pos = new Range(start, end);
	}
	public set range(range: Range) {
		this._pos = range;
	}
	
	public abstract accept(visitor: IVisitor): void;
}