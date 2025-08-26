import { DiagnosticSeverity, DiagnosticTag } from "vscode-languageserver";
import { Position, Range } from "../../types";

export class DiagnosticMessage
{
	public readonly message: string;
	public readonly type: DiagnosticSeverity;
	public readonly pos: Range;
	private _tags?: DiagnosticTag[];

	constructor(message: string, type: DiagnosticSeverity, pos: Range);
	constructor(message: string, type: DiagnosticSeverity, start: Position, end: Position);
	constructor(message: string, type: DiagnosticSeverity, startLine: number, startChar: number, endLine: number, endChar: number);
	constructor(message: string, type: DiagnosticSeverity, pos: Range | Position| number, end?: number | Position, endLine?: number, endChar?: number) 
	{
		this.message = message;
		this.type = type;
		
		if(typeof pos === "number") {
			this.pos = new Range(pos, <number>end, <number>endLine, <number>endChar);
		}
		else if(pos instanceof Range) {
			this.pos = pos;
		}
		else {
			this.pos = new Range(pos, <Position>end);
		}
	}

	public get tags() : DiagnosticTag[] | undefined {
		return this._tags;
	}
	
	public set tags(v : DiagnosticTag[]) {
		this._tags = v;
	}
	
}