import { DefineToken } from "../../Tokens/preprocessor/DefineToken";
import { DefineStruct } from "./DefineStruct";

export class MacroStruct extends DefineStruct {
	constructor(code: DefineToken, res: RegExpMatchArray) {
		super(code, false)

		let pattern = res[0];
		let funcName = res[1];
		let funcParams = res[2];

		pattern = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
		pattern = pattern.replace(/%[0-9]/g, "\\s*(.+)\\s*");

		let regPattern = new RegExp(pattern);
		this.name = funcName;
	}
}