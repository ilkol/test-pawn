import { Position, Range } from "vscode";
import { FunctionDeclaration } from "./Strucutres/functions/FunctionDeclaration";
import { FunctionImplementation } from "./Strucutres/functions/FunctionImplementation";


export class UnexpSemicolon extends  Error {
	constructor() {
		super("Unexpected semicolon in define");
		this.name = "Unexpected semicolon";
	}
}


export class EmptyStatment extends  Error {
	constructor() {
		super("Dublicate semicolon");
		this.name = "Dubl_semi";
	}
}

export class EndInput extends  Error {
	constructor() {
		super("Founded end of file by define #endinput");
		this.name = "End of file";
	}
}

export class UndefinedVariable extends Error {
	constructor(public readonly varName: string) {
		super("Variable \"" + varName + "\" is undefined!");
		this.name = "undefined variable";
	}
}
export class CantAssignToConst extends Error {
	constructor() {
		super("Cannot assign a value to a constant");
		this.name = "CantAssignToConst";
	}
}
export class TypeMismatch extends Error {
	constructor(name: string, type: string, erType: string, public readonly pos: Range) {
		super("Variable \"" + name + "\" have tag \"" + type +"\", but you are trying to assign \"" + erType + "\"!");
		this.name = "type mismatch";
	}
}

export class UnhandleCharacter extends Error {
	constructor(public readonly char: string, public readonly line: number, public readonly col: number) {
		super("Can't handle characte: \"" + char + "\"");
		this.name = "UnhandleCharacter";
	}
}

export class TypeMismatchOperator extends Error {
	constructor(op: string, type: string, erType: string) {
		super("It is impossible to apply the operator "+ op +" to different types (" + type + ", " + erType + ")");
		this.name = "operator type mismatch";
	}
}
export class SymbolIsNeverUsed extends Error {
	public readonly pawnCode = 203;

	constructor(symb: string) {
		super("symbol is never used \""+ symb +"\"");
		this.name = "symbol is never used";
	}
}

export class SymbolAlredyDefined extends Error {
	constructor(symb: string, public readonly pos: Range) {
		super("Symbol \"" + symb +"\" already defined");
		this.name = "symbol already defined";
	}
}
export class FunctionAlreadyHaveImplementation extends Error {
	public pos: Range;
	constructor(funct: FunctionDeclaration | FunctionImplementation) {
		super("Function \"" + funct.name +"\" already have implementation");
		this.name = "symbol already defined";
		this.pos = funct.getPos();
	}
}
export class FunctionImplementationBeforeDeclaration extends Error {
	public pos: Range;
	constructor(funct: FunctionDeclaration | FunctionImplementation) {
		super("Function implementation \"" + funct.name +"\" founded before declaration");
		this.name = "symbol already defined";
		this.pos = funct.getPos();
	}
}
export class FunctionHeadDifferentFromPrototype extends Error {
	public pos: Range;
	constructor(funct: FunctionDeclaration | FunctionImplementation) {
		super(`Function heading differs from prototype`);
		this.name = "symbol already defined";
		this.pos = funct.getPos();
	}
}
export class ExtraDefault extends Error {
	public pos: Range;
	constructor(startPos: Position) {
		super(`Выше уже найден default`);
		this.name = "extra default";
		this.pos = new Range(new Position(startPos.line, startPos.character - "default".length), startPos);
	}
}
export class CaseAfterDefault extends Error {
	public pos: Range;
	constructor(startPos: Position) {
		super(`Значение по умолчанию должно находится ниже всех case`);
		this.name = "extra default";
		this.pos = new Range(startPos, new Position(startPos.line, startPos.character - "case".length));
	}
}
export class InputError extends Error {
	constructor(msg: string, public readonly pos: Range) {
		super(msg);
	}
}

export class CannotOpenFile extends Error {
	constructor() {
		super("Can't open file");
	}
}