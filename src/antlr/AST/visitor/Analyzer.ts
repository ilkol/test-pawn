import { DiagnosticError } from "../../diagnostic/DiagnosticError";
import { DiagnosticMessage } from "../../diagnostic/DiagnosticMessage";
import { BaseVisitor } from "./BaseVisitor";
import { Declarations } from "../Declarations";
import { FunctionDeclaration } from "../FunctionDeclaration";
import { VarDeclaration } from "../VarDeclaration";
import { DiagnosticWarning } from "../../diagnostic/DiagnosticWarning";

export class Analyzer extends BaseVisitor
{
	private UsedFunctions: FunctionDeclaration[] = [];

	constructor(public readonly diagnostics: DiagnosticMessage[]) {
		super();
	}

	private addDiagnostic(msg: DiagnosticMessage) {
		this.diagnostics.push(msg);
	}

	beforeVisitDeclarations(declaration: Declarations): void {
		// throw new Error("Method not implemented.");
	}
	afterVisitDeclarations(declaration: Declarations): void {
		this.UsedFunctions.forEach(element => {
			this.addDiagnostic(new DiagnosticWarning("Функция \"" + element.id + "\" нигде не используется", element.idPos));
		});
	}

	beforeVisitFunctionDeclaration(functiondeclaration: FunctionDeclaration): void {
		this.UsedFunctions.push(functiondeclaration);
	}
	afterVisitFunctionDeclaration(functiondeclaration: FunctionDeclaration): void {
		// throw new Error("Method not implemented.");
	}

	beforeVisitVariableDeclaration(node: VarDeclaration): void {
		// throw new Error("Method not implemented.");
	}
	afterVisitVariableDeclaration(node: VarDeclaration): void {
		// throw new Error("Method not implemented.");
	}
	
}