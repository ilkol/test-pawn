import { Range, TextDocument } from "vscode";
import { PreprocessorDirective } from "./PreprocessorDirective";
import { Define } from "./Define";
import { Endif } from "./Endif";
import { Else } from "./Else";

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

	constructor(file: TextDocument, private rest: string, startIndex: number, private readonly restIndex: number, endIndex: number)
	{
		super(file, startIndex, endIndex);

	}
	public checkCondition(defines: Map<string, Define>)
	{
		let condition = this.rest;
		if (!condition) {
			return false;
		}
	
		condition = condition.trim();
	
		// Проверка на defined/!defined
		if (condition.startsWith("defined")) {
			const macroName = condition.substring("defined".length).trim();
			if(macroName.startsWith("("))
			{
				const name = macroName.substring(1, macroName.length - 1).trim();
				return defines.has(name);
			}
			return defines.has(macroName);
		} else if (condition.startsWith("!defined")) {
			const macroName = condition.substring("!defined".length).trim();
			if(macroName.startsWith("("))
			{
				const name = macroName.substring(1, macroName.length - 1).trim();
				return !defines.has(name);
			}
			return !defines.has(macroName);
		}
	
		try {
			// Попытка вычислить как числовое выражение
			const result = eval(condition); // Использование eval для простых константных выражений
			if (typeof result === 'number') {
				return result !== 0;
			} else if (typeof result === 'boolean') {
				return result;
			}
		} catch (error) {
			// Обработка ошибок вычисления выражения
			console.error(`Error evaluating condition: ${condition}`, error);
		}
		return false;
	}
}