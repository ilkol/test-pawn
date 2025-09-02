import { Range } from "../../types";

export abstract class AbstractSymbol {
	public readonly id: number;
	public readonly name: string;
	public readonly kind: number;
	public readonly range: Range;
	public readonly modifiers: number[];

	constructor(id: number, name: string, kind: number, range: Range, modifiers: number[] = []) {
		this.id = id;
		this.name = name;
		this.kind = kind;
		this.range = range;
		this.modifiers = modifiers;
	}
}