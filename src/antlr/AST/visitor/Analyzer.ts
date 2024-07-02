/* eslint-disable curly */
import { DiagnosticError } from "../../diagnostic/DiagnosticError";
import { DiagnosticMessage } from "../../diagnostic/DiagnosticMessage";
import { BaseVisitor } from "./BaseVisitor";
import { Declarations } from "../Nodes/Declarations";
import { DiagnosticWarning } from "../../diagnostic/DiagnosticWarning";
import { EnumDeclaration } from "../Nodes/EnumDeclaration";
import { EnumMember } from "../Nodes/EnumMember";
import { FunctionParameter } from "../Nodes/Functions/FunctionParameter";
import { CodeBlock } from "../Nodes/CodeBlock";
import { ReturnStatement } from "../Nodes/ReturnStatement";
import { BinarOperator } from "../Nodes/Operators/BinarOperator";
import { IntLiteral } from "../Nodes/Literals/IntLiteral";
import { UnarOperator } from "../Nodes/Operators/UnarOperator";
import { OperatorNew, VariableModifire } from "../Nodes/Operators/OperatorNew";
import { DiagnosticUnused } from "../../diagnostic/DiagnosticUnused";
import { FunctionDeclaration, FunctionModifire } from "../Nodes/Functions/FunctionDeclaration";
import { FunctionCall } from "../Nodes/Functions/FunctionCall";
import { VariableInit } from "../Nodes/VariableInit";
import { IScope } from "../../Scopes/IScope";
import { Scope } from "../../Scopes/Scope";
import { IHasID } from "../Nodes/IHasID";
import { Declaration } from "../Nodes/Declaration";
import { Variable } from "../Nodes/Variable";
import { FunctionDeclarationParameter } from "../Nodes/Functions/FunctionDeclarationParameter";
import { SemanticTokensManager } from "../../../Managers/SemanticTokensManager";
import { StringLiteral } from "../Nodes/Literals/StringLiteral";
import { DiagnosticTag } from "vscode";
import { WhileCycle } from "../Nodes/Cycles/WhileCycle";
import { ForCycle } from "../Nodes/Cycles/ForCycle";
import { VarDeclaration } from "../Nodes/Variables/VarDeclaration";
import { ArrayDeclaration } from "../Nodes/Variables/ArrayDeclaration";
import { Expresion } from "../Nodes/Expresion";
import { AssigmentOperator } from "../Nodes/Operators/AssigmentOperator";

export class Analyzer extends BaseVisitor
{
	beforeVisitAssigment(node: AssigmentOperator): void {

	}
	afterVisitAssigment(node: AssigmentOperator): void {

	}
	beforeVisitArrayDeclaration(node: ArrayDeclaration): void {

	}
	afterVisitArrayDeclaration(node: ArrayDeclaration): void {
		this.checkUsed(node, (variable: VarDeclaration) => this.curScope.addVar(variable));
		
		this.tokens.addToken(node.idPos, "variable", this.checkVarModifires(node.modifires));

		node.indexes = node.indexes.map(el => {
			if(el instanceof Expresion && el.expresion instanceof IntLiteral) {
				node.pushSize(el.expresion.value);
				return el.expresion;
			}
			this.addDiagnostic(new DiagnosticError("Ожидается целочисленная константа, а найдена \""+el.name+"\"", el.pos));
			return el;
		});
	}
	beforeVisitFor(node: ForCycle): void {
		this.extendScope();
	}
	afterVisitFor(node: ForCycle): void {
		this.restrictScope();
	}
	beforeVisitWhile(node: WhileCycle): void {
		this.extendScope();
	}
	afterVisitWhile(node: WhileCycle): void {
		this.restrictScope();
	}
	beforeVisitString(node: StringLiteral): void {

	}
	afterVisitString(node: StringLiteral): void {

	}
	beforeVisitFunctionDeclarationParameter(node: FunctionDeclarationParameter): void {
	}
	afterVisitFunctionDeclarationParameter(node: FunctionDeclarationParameter): void {
		this.checkUsed(node, (variable: FunctionDeclarationParameter) => this.curScope.addVar(variable));
		this.tokens.addToken(node.idPos, "variable", this.checkVarModifires(node.modifires));
	}
	beforeVisitVariable(node: Variable): void {
	
	}
	afterVisitVariable(node: Variable): void {
		const variable = this.curScope.findVar(node.id);
		if(variable) {
			variable.used = true;
			this.tokens.addToken(node.idPos, "variable", this.checkVarModifires(variable.modifires));

		}
		else {	
			const func = this.curScope.findFunction(node.id);
			if(func)
				this.addDiagnostic(new DiagnosticError("\"" + node.id + "\" является функцией", node.idPos));
			else this.addDiagnostic(new DiagnosticError("Переменная \"" + node.id + "\" ненайдена", node.idPos));
		}
	}
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
			this.addDiagnostic(new DiagnosticError("Функция \"" + node.id + "\" ненайдена", node.idPos));
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
		this.extendScope();
	}
	afterVisitCodeBlock(node: CodeBlock): void {
		this.restrictScope();
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
		if(node.id !== "main") {
			this.checkUsed(node, (variable: FunctionDeclaration) => this.curScope.addFunction(variable));
		}
		this.extendScope();
	}
	afterVisitFunctionDeclaration(node: FunctionDeclaration): void {
		this.restrictScope();
	}
	
	beforeVisitVariableDeclaration(node: VarDeclaration): void {
		// throw new Error("Method not implemented.");
	}
	afterVisitVariableDeclaration(node: VarDeclaration): void {
		this.checkUsed(node, (variable: VarDeclaration) => this.curScope.addVar(variable));
		
		this.tokens.addToken(node.idPos, "variable", this.checkVarModifires(node.modifires));
	}
		
	constructor(public readonly diagnostics: DiagnosticMessage[], public readonly tokens: SemanticTokensManager) {
		super();
	}
	
	private addDiagnostic(msg: DiagnosticMessage) {
		this.diagnostics.push(msg);
	}

	private checkIds(ids: Map<string, Declaration>) {
		ids.forEach((element, key) => {
			if(!element.used) {
				let diagnostic: DiagnosticMessage, diagnosticMsg: string;
				if(element instanceof FunctionDeclaration) {
					diagnosticMsg = "Функция";
				}
				else 
					diagnosticMsg = "Переменная";
				
				if(!element.stock) {
					diagnostic = new DiagnosticWarning(`${diagnosticMsg} "${key}" нигде не используется`, element.idPos);
					diagnostic.tags = [DiagnosticTag.Unnecessary];
				}
				else
					diagnostic = new DiagnosticUnused(`${diagnosticMsg} "${key}" нигде не используется`, element.idPos);
				this.addDiagnostic(diagnostic);
			}
		});
	}

	private checkUsed<T extends Declaration>(node: T, callback: (variable: T) => void) {
		let id = this.curScope.find(node.id);
		if (id) {
			this.addDiagnostic(new DiagnosticError(`Идентификатор "${node.id}" уже занят`, node.idPos));
		} else {
			callback(node);
		}
	}

	private checkVarModifires(modifires: VariableModifire[]): string[] {
		const tokens: string[] = [];
		modifires.forEach(value => {
			switch(value) {
				case VariableModifire.const: 
					tokens.push("readonly");
					break;
				case VariableModifire.static:
					tokens.push("static");
					break;
				case VariableModifire.stock:
					tokens.push("stock");
					break;
			}
		});
		return tokens;
	}

	private extendScope() {
		this.curScope = new Scope(this.curScope);
	}
	private restrictScope() {
		this.checkIds(this.curScope.variables());
		if(this.curScope.parent)
			this.curScope = this.curScope.parent;
	}
}