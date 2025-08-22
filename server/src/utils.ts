import { Position, Range } from "vscode"


export function toLSPRange(range: Range) {
	return {
		start: toLSPPosition(range.start),
		end: toLSPPosition(range.end)
	};
}

export function toLSPPosition(position: { line: number, character: number }) {
	return {
		line: position.line,
		character: position.character
	};
}

export function toVSCodeRange(range: { start: { line: number, character: number }, end: { line: number, character: number } }) {
	return new Range(
		range.start.line,
		range.start.character,
		range.end.line,
		range.end.character
	);
}
export function toVSCodePosition(position: { line: number, character: number }) {
	return new Position(
		position.line,
		position.character
	);
}