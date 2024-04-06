import { DiagnosticSeverity, Position, Range } from "vscode";

export class DiagnosticMessage
{
	public readonly message: string;
	public readonly type: DiagnosticSeverity;
	public readonly pos: Range;

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
}