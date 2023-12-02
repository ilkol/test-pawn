import { Range } from "vscode";

export class IToken<T> {
	constructor(private pos: Range, protected value: T) {
		
	}
	public getPos(): Range {
		return this.pos;
	}
	public getValue(): T {
		return this.value;
	}
}