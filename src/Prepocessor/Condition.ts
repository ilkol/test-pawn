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
	public checkCondition(file: TextDocument, defines: Map<string, Define>)
	{
		let match;
		if(match = /(?=\s*)(!)?(?:\s*)defined\s+(\w+)?/.exec(this.rest)) {
			const macro = match[2];
			if(defines.has(macro)) {
				this.conditionResult = true;
			}			
			if(match[1]) {
				this.conditionResult = !this.conditionResult;
			}
		}
	}
}