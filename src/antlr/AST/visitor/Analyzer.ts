/* eslint-disable curly */
import { DiagnosticError } from "../../diagnostic/DiagnosticError";
import { DiagnosticMessage } from "../../diagnostic/DiagnosticMessage";
import { BaseVisitor } from "./BaseVisitor";
import { Declarations } from "../Nodes/Declarations";
import { DiagnosticWarning } from "../../diagnostic/DiagnosticWarning";
import { EnumDeclaration } from "../Nodes/enum/EnumDeclaration";
import { EnumMember } from "../Nodes/enum/EnumMember";
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
import { Array } from "../Nodes/Variables/Array";
import { SemanticTokens, SemanticTokensModifires } from "../../../SemanticTokens";

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
		
		this.tokens.addToken(node.idPos, SemanticTokens.variable, this.checkVarModifires(node.modifires).concat([SemanticTokensModifires.declaration]));

		let index = -1;
		node.indexes = node.indexes.map(el => {
			index++;
			if(el instanceof Expresion) {
				if(el.expresion instanceof IntLiteral) {
					node.pushSize(index, el.expresion.value);
					return el.expresion;
				}
				if(el.expresion instanceof Variable) {
					const variable = this.curScope.findVar(el.expresion.id);
					if(variable) {
						if(!(variable instanceof EnumDeclaration)) {
							this.addDiagnostic(new DiagnosticError("Ожидается целочисленная константа или перечисление, а найдено \""+el.expresion.name+"\"", el.pos));
						}
						else {
							variable.used = true;
							this.tokens.addToken(el.expresion.idPos, SemanticTokens.enum);
							return variable;
						}
					}
				}
				// else
				// 	this.addDiagnostic(new DiagnosticError("Ожидается целочисленная константа, а найдено пустое вырожение", el.pos));
			}
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
		this.tokens.addToken(node.idPos, SemanticTokens.parameter, this.checkVarModifires(node.modifires).concat([SemanticTokensModifires.declaration]));
	}
	beforeVisitVariable(node: Variable): void {
	
	}
	afterVisitVariable(node: Variable): void {
		const variable = this.curScope.findVar(node.id);
		if(variable) {
			variable.used = true;
			if(variable instanceof ArrayDeclaration) {
				if(!(node instanceof Array))
					this.addDiagnostic(new DiagnosticError("\"" + node.id + "\" является массивом", node.idPos));
				else {
					if(variable.indexes.length != node.indexes.length) {
						this.addDiagnostic(new DiagnosticError("Несовпадение размерности массива", node.pos));
					}
					else {
						let iter = -1;
						node.indexes = node.indexes.map(el => {
							iter++;
							if(el.expresion instanceof IntLiteral) {
								const size = variable.size.at(iter);
								if(!size)
									this.addDiagnostic(new DiagnosticError("Ожидается константа", el.pos));
								else {
									const val = el.expresion.value;
									if(val < 0) {
										this.addDiagnostic(new DiagnosticError("Индекс не может быть отрицательным", el.pos));
									}
									else if(val >= size) {
										this.addDiagnostic(new DiagnosticError(`Выход за границы массива. Максимальный индекс ${size-1}`, el.pos));
									}
								}
								return el.expresion;
							}
							if(el.expresion instanceof Variable) {
								const enumer = variable.indexes.at(iter);
								const checkVar = this.curScope.findVar(el.expresion.id);
								if(!(enumer instanceof EnumDeclaration)) {
									variable.used = true;
								} else {
									if(checkVar instanceof EnumMember) {
										if(enumer !== checkVar.parent)
											this.addDiagnostic(new DiagnosticError("Ожидается константа из перечисления \""+enumer.id+"\"", el.pos));
									}
									else {
										this.addDiagnostic(new DiagnosticError("Ожидается константа из перечисления \""+enumer.id+"\"", el.pos));
									}
								}
							}
							// else
							// 	this.addDiagnostic(new DiagnosticError("Ожидается целочисленная константа, а найдено пустое вырожение", el.pos));
							return el;
						});
					}
				}
			}
			else {
				if(node instanceof Array)
					this.addDiagnostic(new DiagnosticError("\"" + node.id + "\" не является массивом", node.idPos));
			}
			this.tokens.addToken(node.idPos, SemanticTokens.variable, this.checkVarModifires(variable.modifires));
		}
		else {	
			const func = this.curScope.findFunction(node.id);
			if(func) {
				this.tokens.addToken(node.idPos, SemanticTokens.function);
				this.addDiagnostic(new DiagnosticError("\"" + node.id + "\" является функцией", node.idPos));
		
			}
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
		this.tokens.addToken(node.idPos, SemanticTokens.function);
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
		if(node.value) {
			if(node.value.tag.id !== this.curScope.returnTag?.id) {
				if(node.value.expresion instanceof Variable) {
					const variable = this.curScope.findVar(node.value.expresion.id);
					if(variable?.tag.id !== this.curScope.returnTag?.id) {
						this.addDiagnostic(new DiagnosticError(`Возвращаемое вырожение должно быть с тэгом "${this.curScope.returnTag?.id}", а найден тэг "${variable?.tag.id}"`, node.value.pos));
					}
				}
				else this.addDiagnostic(new DiagnosticError(`Возвращаемое вырожение должно быть с тэгом "${this.curScope.returnTag?.id}", а найден тэг "${node.value.tag.id}"`, node.value.pos));
			}
		}
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

	}
	afterVisitEnumMember(node: EnumMember): void {	
		this.checkUsed(node, (variable: EnumMember) => this.curScope.addVar(variable));
		this.tokens.addToken(node.idPos, SemanticTokens.enumMember, [SemanticTokensModifires.const, SemanticTokensModifires.declaration]);
	}
	beforeVisitEnumDeclaration(node: EnumDeclaration): void {
		
	}
	afterVisitEnumDeclaration(node: EnumDeclaration): void {
		this.checkUsed(node, (variable: EnumDeclaration) => this.curScope.addVar(variable));		
		this.tokens.addToken(node.idPos, SemanticTokens.enum, [SemanticTokensModifires.declaration]);
	}
	
	beforeVisitDeclarations(declaration: Declarations): void {

	}
	afterVisitDeclarations(declaration: Declarations): void {
		this.checkIds(this.curScope.identifires());
	}
	
	beforeVisitFunctionDeclaration(node: FunctionDeclaration): void {
		if(node.id !== "main") {
			this.checkUsed(node, (variable: FunctionDeclaration) => this.curScope.addFunction(variable));
		}
		this.extendScope();
		this.curScope.returnTag = node.tag;
	}
	afterVisitFunctionDeclaration(node: FunctionDeclaration): void {
		this.restrictScope();
		const modif = [SemanticTokensModifires.declaration];
		if(node.code != undefined)
			modif.push(SemanticTokensModifires.declaration);

		this.tokens.addToken(node.idPos, SemanticTokens.function, modif);			
	}
	
	beforeVisitVariableDeclaration(node: VarDeclaration): void {

	}
	afterVisitVariableDeclaration(node: VarDeclaration): void {
		this.checkUsed(node, (variable: VarDeclaration) => this.curScope.addVar(variable));		
		this.tokens.addToken(node.idPos, SemanticTokens.variable, this.checkVarModifires(node.modifires).concat(SemanticTokensModifires.declaration));
	}
		
	constructor(public readonly diagnostics: DiagnosticMessage[], public readonly tokens: SemanticTokensManager) {
		super();
	}
	
	private addDiagnostic(msg: DiagnosticMessage) {
		this.diagnostics.push(msg);
	}

	private checkIds(ids: Map<string, Declaration>) {
		ids.forEach((element, key) => {
			if(!element.used && !element.native) {
				let diagnostic: DiagnosticMessage, diagnosticMsg: string;
				let stock = element.stock;
				if(element instanceof FunctionDeclaration) {
					diagnosticMsg = "Функция";
					if(element.modifire !== FunctionModifire.none)
						stock = true;
				}
				else {
					diagnosticMsg = "Переменная";
				}
				
				if(!stock) {
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

	private checkVarModifires(modifires: VariableModifire[]): SemanticTokensModifires[] {
		const tokens: SemanticTokensModifires[] = [];
		modifires.forEach(value => {
			switch(value) {
				case VariableModifire.const: 
					tokens.push(SemanticTokensModifires.const);
					break;
				case VariableModifire.static:
					tokens.push(SemanticTokensModifires.static);
					break;
				// case VariableModifire.stock:
				// 	tokens.push(SemanticTokensModifires.);
				// 	break;
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