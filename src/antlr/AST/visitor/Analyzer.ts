import { DiagnosticError } from "../../diagnostic/DiagnosticError";
import { DiagnosticMessage } from "../../diagnostic/DiagnosticMessage";
import { BaseVisitor } from "./BaseVisitor";
import { Declarations } from "../Declarations";
import { FunctionDeclaration } from "../FunctionDeclaration";
import { VarDeclaration } from "../VarDeclaration";
import { DiagnosticWarning } from "../../diagnostic/DiagnosticWarning";
import { EnumDeclaration } from "../EnumDeclaration";
import { EnumMember } from "../EnumMember";
import { FunctionParameter } from "../FunctionParameter";
import { CodeBlock } from "../CodeBlock";
import { ReturnStatement } from "../ReturnStatement";
import { BinarOperator } from "../Operators/BinarOperator";
import { IntLiteral } from "../Literals/IntLiteral";
import { UnarOperator } from "../Operators/UnarOperator";
import { OperatorNew } from "../Operators/OperatorNew";

export class Analyzer extends BaseVisitor
{
	beforeVisitOperatorNew(node: OperatorNew): void {
	
	}
	afterVisitOperatorNew(node: OperatorNew): void {
	
	}
	beforeVisitUnarOperator(node: UnarOperator): void {

	}
	afterVisitUnarOperator(node: UnarOperator): void {

	}
	beforeVisitIntLiteral(node: IntLiteral): void {
	
	}
	afterVisitIntLiteral(node: IntLiteral): void {
	
	}
	beforeVisitBinarOperator(node: BinarOperator): void {
	
	}
	afterVisitBinarOperator(node: BinarOperator): void {
	
	}
	beforeVisitReturn(node: ReturnStatement): void {
	
	}
	afterVisitReturn(node: ReturnStatement): void {
	
	}
	beforeVisitCodeBlock(node: CodeBlock): void {
	
	}
	afterVisitCodeBlock(node: CodeBlock): void {
		console.log(node.statements.statements);
	}
	beforeVisitFunctionParameter(node: FunctionParameter): void {
	
	}
	afterVisitFunctionParameter(node: FunctionParameter): void {
	
	}
	beforeVisitEnumMember(node: EnumMember): void {
		// throw new Error("Method not implemented.");
	}
	afterVisitEnumMember(node: EnumMember): void {
		// throw new Error ("Method not implemented.");
	}
	beforeVisitEnumDeclaration(node: EnumDeclaration): void {
		
	}
	afterVisitEnumDeclaration(node: EnumDeclaration): void {
		// throw new Error("Method not implemented.");
	}
	
	beforeVisitDeclarations(declaration: Declarations): void {
		// throw new Error("Method not implemented.");
	}
	afterVisitDeclarations(declaration: Declarations): void {
		this.UnUsedFunctions.forEach(element => {
			this.addDiagnostic(new DiagnosticWarning("Функция \"" + element.id + "\" нигде не используется", element.idPos));
		});
	}
	
	beforeVisitFunctionDeclaration(node: FunctionDeclaration): void {
		this.UnUsedFunctions.push(node);
	}
	afterVisitFunctionDeclaration(node: FunctionDeclaration): void {
		// throw new Error("Method not implemented.");
	}
	
	beforeVisitVariableDeclaration(node: VarDeclaration): void {
		// throw new Error("Method not implemented.");
	}
	afterVisitVariableDeclaration(node: VarDeclaration): void {
		// throw new Error("Method not implemented.");
	}
	
	private UnUsedFunctions: FunctionDeclaration[] = [];
	
	constructor(public readonly diagnostics: DiagnosticMessage[]) {
		super();
	}
	
	private addDiagnostic(msg: DiagnosticMessage) {
		this.diagnostics.push(msg);
	}
}