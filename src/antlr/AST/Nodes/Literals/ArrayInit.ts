import { Literal } from "./Literal";

export class ArrayInit extends Literal<any[]> {
	protected _value: any[] = [];	
}