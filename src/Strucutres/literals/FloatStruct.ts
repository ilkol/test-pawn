import { TokenFloat } from "../../Tokens/literals/withTags/TokenFloat";
import { LiteralStruct } from "./LiteralStruct";

export class FloatStruct extends LiteralStruct<number> {
	constructor(value: TokenFloat) {
		super(value, value.getValue());
	}
}