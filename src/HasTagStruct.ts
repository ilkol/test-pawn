import { Range } from "vscode";
import { AbstractStruct } from "./Strucutres/AbstractStruct";
export class HasTagStruct extends AbstractStruct {
	protected tag: string = "int";
	constructor(pos: Range) {
		super(pos);
	}
	public getTag(): string {
		return this.tag;
	}
	public setTag(tag: string){
		this.tag = tag;
	}
	
}