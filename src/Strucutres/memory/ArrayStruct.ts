import { Range } from "vscode";
import { VarStruct } from "./VarStruct";
import { TokenStruct } from "../TokensStruct";

export class ArrayStruct extends VarStruct {
	protected size: TokenStruct[] = [];
	protected define: boolean = false;

	constructor(name: VarStruct, pos: Range, size: TokenStruct) {
		super(name.name, pos, name.getTag());
		this.extend(size);
	}
	public extend(size: TokenStruct) {
		this.size.push(size);
	}
	public getSize(): TokenStruct[] {
		return this.size;	
	}
	public declarate(): void {
		this.define = true;
	}
	public isDeclaration(): boolean {
		return this.define;
	}
}