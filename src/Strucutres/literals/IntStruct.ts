import { LiteralStruct } from "./LiteralStruct";
import { TokenInt } from "../../Tokens/literals/withTags/TokenInt";

export class IntStruct extends LiteralStruct<number> {
	constructor(value: TokenInt) {
		super(value, value.getValue());
	}
}