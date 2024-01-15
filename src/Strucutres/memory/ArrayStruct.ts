import { Range } from "vscode";
import { VarStruct } from "./VarStruct";
import { TokenStruct } from "../TokensStruct";

export class ArrayStruct extends VarStruct {
	protected _size: TokenStruct[] = [];
	protected define: boolean = false;

	constructor(name: VarStruct, pos: Range, size: TokenStruct) {
		super(name.name, pos, name.getTag());
		this.extend(size);
	}
	public extend(size: TokenStruct) {
		this._size.push(size);
	}
	get size(): TokenStruct[] {
		return this._size;	
	}
	set size(v: TokenStruct[]) {
		this._size = v;	
	}
	public declarate(): void {
		this.define = true;
	}
	public isDeclaration(): boolean {
		return this.define;
	}
}