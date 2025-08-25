import { _, _Connection, Position as LSPPosition} from 'vscode-languageserver';
import { InlineCompletionFeatureShape } from 'vscode-languageserver/lib/common/inlineCompletion.proposed';

export type LSPConnection = _Connection<_, _, _, _, _, _, InlineCompletionFeatureShape, _>;

export class Position {

	readonly line: number;
	readonly character: number;


	constructor(line: number, character: number) {
		this.line = line;
		this.character = character;
	}

	static fromLSP(pos: LSPPosition): Position {
		return new Position(pos.line, pos.character);
	}

	isBefore(other: Position): boolean {
		return this.line < other.line || (this.line === other.line && this.character < other.character);
	}
	isBeforeOrEqual(other: Position): boolean {
		return this.isEqual(other) || this.isBefore(other);
	}
	isAfter(other: Position): boolean {
		return this.line > other.line || (this.line === other.line && this.character > other.character);
	}
	isAfterOrEqual(other: Position): boolean {
		return this.isEqual(other) || this.isAfter(other);
	}
	isEqual(other: Position): boolean {
		return this.line === other.line && this.character === other.character;
	}

	translate(change: {
		lineDelta?: number;
		characterDelta?: number;
	}): Position {
		const newLine = this.line + (change.lineDelta ?? 0);
		const newCharacter = this.character + (change.characterDelta ?? 0);
		if (newLine < 0 || newCharacter < 0) {
			throw new Error('Translated position cannot have negative line or character');
		}
		return new Position(newLine, newCharacter);
	}

	with(change: {
		line?: number;
		character?: number;
	}): Position {
		return new Position(change.line ?? this.line, change.character ?? this.character);
	}
}

export class Range {

	readonly start: Position;
	readonly end: Position;

	constructor(start: Position, end: Position)
	constructor(startLine: number, startCharacter: number, endLine: number, endCharacter: number)
	constructor(startLine: number|Position, startCharacter: number|Position, endLine?: number, endCharacter?: number) {
		if(typeof startLine == "number" && typeof startCharacter == "number" && endLine && endCharacter) {
			this.start = new Position(startLine, startCharacter);
			this.end = new Position(endLine, endCharacter);
		} else if(startLine instanceof Position && startCharacter instanceof Position) {
			this.start = startLine;
			this.end = startCharacter;
		} else {
			throw new Error()			
		}
	}

	get isEmpty(): boolean {
		return this.start.isEqual(this.end);
	}

	get isSingleLine(): boolean {
		return this.start.line === this.end.line;
	}

	contains(positionOrRange: Position | Range): boolean {
		if (positionOrRange instanceof Range) {
			return this.start.isBeforeOrEqual(positionOrRange.start) && this.end.isAfterOrEqual(positionOrRange.end);
		}
		return this.start.isBeforeOrEqual(positionOrRange) && this.end.isAfterOrEqual(positionOrRange);
	}

	isEqual(other: Range): boolean {
		return this.start.isEqual(other.start) && this.end.isEqual(other.end);
	}

	intersection(range: Range): Range | undefined {
		const start = this.start.isAfter(range.start) ? this.start : range.start;
		const end = this.end.isBefore(range.end) ? this.end : range.end;

		if (start.isAfter(end)) {
			return undefined;
		}

		return new Range(start, end);
	}

	union(other: Range): Range {
		return new Range(
			this.start.isBeforeOrEqual(other.start) ? this.start : other.start,
			this.end.isAfterOrEqual(other.end) ? this.end : other.end
		);
	}
	
	with(change: {
		start?: Position;
		end?: Position;
	}): Range {
		return new Range(change.start ?? this.start, change.end ?? this.end);
	}
}