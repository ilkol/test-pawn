import { Position, Range } from "vscode";
import { InputError, UnhandleCharacter } from "../Errors";

export class InputStream {
	private pos: number = 0;
	private line: number = 0;
	private col: number = 0;

	constructor(private input: string) {
	
	}
	public next(): string {
		var char = this.input.charAt(this.pos++);
		if(char == "\n") {
			this.line++;
			this.col = 0;
		}
		// else if(char == "\t") {
		// 	InputStream.col += 4;
		// }
		else this.col++;
		return char;
	}
	public peek(): string {
		return this.input.charAt(this.pos);
	}
	public end(): boolean {
		return this.peek() == "" || this.peek() == null;
	}
	public except(message: string) {
		// throw new UnhandleCharacter(message, InputStream.line, InputStream.col);
		throw new InputError(message, new Range(this.line, this.col, this.line, this.col + 1));
	} 
	public position(): Position {
		return new Position(this.line, this.col);
	} 
	public reset() {
		this.line = 0;
		this.col = 0;
		this.pos = 0;
	}
}