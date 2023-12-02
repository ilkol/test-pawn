import { LiteralStruct } from "./LiteralStruct";
import { TokenInt } from "../../Tokens/literals/withTags/TokenInt";
import { TokenStruct } from "../TokensStruct";

export class CharStruct extends LiteralStruct<TokenStruct> {
	constructor(value: TokenStruct) {
		super(new TokenInt(0, value.getPos()), value);
	}
}