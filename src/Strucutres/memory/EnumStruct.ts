import { Range } from "vscode";
import { AbstractStruct } from "../AbstractStruct";
import { AssignOperator } from "../operators/AssignOperator";
import { VarStruct } from "./VarStruct";
import { ConstantStruct } from "./ConstantStruct";
import { TokenIdentificator } from "../../Tokens/TokenLiteral";
import { IntStruct } from "../literals/IntStruct";
import { TokenInt } from "../../Tokens/literals/withTags/TokenInt";
import { LiteralStruct } from "../literals/LiteralStruct";
import { BinaryOperator } from "../operators/BinaryOperator";

export class EnumStruct extends AbstractStruct {
	private elements: Map<string, ConstantStruct> = new Map<string, ConstantStruct>;
	constructor(public readonly head: TokenIdentificator, pos: Range, prog: (AssignOperator | VarStruct)[]) {
		super(pos);

		let last = -1;
		prog.forEach(element => {
			let name;
			
			if(element instanceof AssignOperator) {
				name = element.left;
				if(element.right instanceof IntStruct)
					last = element.right.getValue();
				else if(element.right instanceof BinaryOperator) {
					let res = element.right.value;
					last = res;
				}
				else if(element.right instanceof LiteralStruct)
					last = element.right.getValue() === true ? 1 : 0;
				else {
					console.error(element.right);
					throw new Error("Неожиданное значени при задание константы в ENUM");
				}
			}
			else {
				name = element;
				last++;
			}
			if(name instanceof VarStruct)
			this.elements.set(name.name, new ConstantStruct(name, new IntStruct(new TokenInt(last, element.getPos())), element.getPos()));
		});
	}
	public getElements(): Map<string, ConstantStruct> {
		return this.elements;
	}
}