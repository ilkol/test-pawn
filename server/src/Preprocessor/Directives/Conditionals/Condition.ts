import { Serialization } from "../../../cache/Serialization";
import { Range } from "../../../types";
import { Define } from "../Defining";
import { PreprocessorDirective } from "../PreprocessorDirective";
import { Else } from "./Else";
import { Endif } from "./Endif";

export class Condition extends PreprocessorDirective
{
	public endIf?: Endif;
	// public endIfEndIndex: number = -1;
	// public endIfStartIndex: number = -1;
	
	public elseBlock?: Else;
	// public elseEndIndex: number = -1;
	// public elseStartIndex: number = -1;
	
	public endRange?: Range;
	public elseRange?: Range;
	public conditionResult: boolean = false;

	constructor(range: Range, private rest: string, startIndex: number, endIndex: number)
	{
		super(range, startIndex, endIndex);

	}
	public checkCondition(checkFunc: (pattern: string, pos: number, defines: Map<string, Define[]>) => boolean)
	{
		return false;
		// let condition = this.rest;
		// if (!condition) {
		// 	return false;
		// }
	
		// condition = condition.trim();
	
		// // Проверка на defined/!defined
		// if (condition.startsWith("defined")) {
		// 	const macroName = condition.substring("defined".length).trim();
		// 	if(macroName.startsWith("("))
		// 	{
		// 		const name = macroName.substring(1, macroName.length - 1).trim();
		// 		return checkFunc(name, this.startIndex);
		// 	}
		// 	return checkFunc(macroName, this.startIndex);
		// } else if (condition.startsWith("!defined")) {
		// 	const macroName = condition.substring("!defined".length).trim();
		// 	if(macroName.startsWith("("))
		// 	{
		// 		const name = macroName.substring(1, macroName.length - 1).trim();
		// 		return !checkFunc(name, this.startIndex);
		// 	}
		// 	return !checkFunc(macroName, this.startIndex);
		// }
	
		// try {
		// 	// Попытка вычислить как числовое выражение
		// 	const result = eval(condition); // Использование eval для простых константных выражений
		// 	if (typeof result === 'number') {
		// 		return result !== 0;
		// 	} else if (typeof result === 'boolean') {
		// 		return result;
		// 	}
		// } catch (error) {
		// 	// Обработка ошибок вычисления выражения
		// 	console.error(`Error evaluating condition: ${condition}`, error);
		// }
		// return false;
	}

	static fromJSON(json: Serialization.Preprocessor.IfCache): Condition {
		const instance = new Condition(
			Serialization.Deserialize.range(json.range),
			json.rest,
			json.startIndex,
			json.endIndex
		);	

		return instance;
	}

	toJSON(): Serialization.Preprocessor.IfCache {
		return {
			...super.toJSON(),
			rest: this.rest,
		}
	}
}