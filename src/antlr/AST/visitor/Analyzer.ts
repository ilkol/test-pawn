import { DiagnosticError } from "../../diagnostic/DiagnosticError";
import { DiagnosticMessage } from "../../diagnostic/DiagnosticMessage";
import { BaseVisitor } from "./BaseVisitor";
import { Declarations } from "../Nodes/Declarations";
import { VarDeclaration } from "../Nodes/VarDeclaration";
import { DiagnosticWarning } from "../../diagnostic/DiagnosticWarning";
import { EnumDeclaration } from "../Nodes/EnumDeclaration";
import { EnumMember } from "../Nodes/EnumMember";
import { FunctionParameter } from "../Nodes/Functions/FunctionParameter";
import { CodeBlock } from "../Nodes/CodeBlock";
import { ReturnStatement } from "../Nodes/ReturnStatement";
import { BinarOperator } from "../Nodes/Operators/BinarOperator";
import { IntLiteral } from "../Nodes/Literals/IntLiteral";
import { UnarOperator } from "../Nodes/Operators/UnarOperator";
import { OperatorNew } from "../Nodes/Operators/OperatorNew";
import { DiagnosticUnused } from "../../diagnostic/DiagnosticUnused";
import { FunctionDeclaration } from "../Nodes/Functions/FunctionDeclaration";
import { FunctionCall } from "../Nodes/Functions/FunctionCall";
import { VariableInit } from "../Nodes/VariableInit";
import { IScope } from "../../Scopes/IScope";
import { Scope } from "../../Scopes/Scope";
import { IHasID } from "../Nodes/IHasID";
import { Declaration } from "../Nodes/Declaration";

export class Analyzer extends BaseVisitor
{
	private curScope: IScope = new Scope();

	beforeVisitVarInit(node: VariableInit): void {

	}
	afterVisitVarInit(node: VariableInit): void {
		this.checkUsed(node, (variable: VariableInit) => this.curScope.addVar(variable));
	}
	beforeVisitFunctionCall(node: FunctionCall): void {

	}
	afterVisitFunctionCall(node: FunctionCall): void {
		let func = this.curScope.findFunction(node.id);
		if(func)
			func.used = true;
		else 
			this.addDiagnostic(new DiagnosticUnused("Функция \"" + node.id + "\" ненайдена", node.idPos));
		// this.UnUsedFunctions.delete(node.id);
	}
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
		this.curScope = new Scope(this.curScope);
	}
	afterVisitCodeBlock(node: CodeBlock): void {
		this.checkIds(this.curScope.variables());
		if(this.curScope.parent)
			this.curScope = this.curScope.parent;
		// console.log(node.statements.statements);
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
		this.checkIds(this.curScope.identifires());
	}
	
	beforeVisitFunctionDeclaration(node: FunctionDeclaration): void {
		if(node.id != "main") {
			this.checkUsed(node, (variable: FunctionDeclaration) => this.curScope.addFunction(variable));
		}
			
	}
	afterVisitFunctionDeclaration(node: FunctionDeclaration): void {
		// throw new Error("Method not implemented.");
	}
	
	beforeVisitVariableDeclaration(node: VarDeclaration): void {
		// throw new Error("Method not implemented.");
	}
	afterVisitVariableDeclaration(node: VarDeclaration): void {
		this.checkUsed(node, (variable: VarDeclaration) => this.curScope.addVar(variable));
	}
	
	private UnUsedFunctions: Map<string, FunctionDeclaration> = new Map<string, FunctionDeclaration>();
	
	constructor(public readonly diagnostics: DiagnosticMessage[]) {
		super();
	}
	
	private addDiagnostic(msg: DiagnosticMessage) {
		this.diagnostics.push(msg);
	}

	private checkIds(ids: Map<string, Declaration>) {
		ids.forEach((element, key) => {
			if(!element.used)
				this.addDiagnostic(new DiagnosticUnused("Идентификатор \"" + key + "\" нигде не используется", element.pos));
		});
	}

	private checkUsed<T extends Declaration>(node: T, callback: (variable: T) => void) {
		let id = this.curScope.find(node.id);
		if (id) {
			this.addDiagnostic(new DiagnosticError(`Идентификатор "${node.id}" уже занят`, node.pos));
		} else {
			callback(node);
		}
	}
}