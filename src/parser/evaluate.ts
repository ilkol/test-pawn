import { DiagnosticSeverity, Position, Range, Uri, commands, workspace } from "vscode";
import { Environment, FuncModifires, Modifires, argsData, enumElData, saveData } from "./Environment";
import { Token } from "./Token";
import { CantAssignToConst, FunctionAlreadyHaveImplementation, FunctionHeadDifferentFromPrototype, FunctionImplementationBeforeDeclaration, SymbolAlredyDefined, TypeMismatch, TypeMismatchOperator, UndefinedVariable } from "../Errors";
import { OpenedFile } from "../OpenedFile";
import { DiagnosticManager } from "../diagnostic";
import { ReturnToken } from "../Tokens/ReturnToken";
import { TokenStruct } from "../Strucutres/TokensStruct";
import { FunctionDeclaration } from "../Strucutres/functions/FunctionDeclaration";
import { EnumStruct } from "../Strucutres/memory/EnumStruct";
import { AssignOperator } from "../Strucutres/operators/AssignOperator";
import { VarStruct } from "../Strucutres/memory/VarStruct";
import { FunctionImplementation } from "../Strucutres/functions/FunctionImplementation";
import { CallFunctionStruct } from "../Strucutres/functions/CallFunctionStruct";
import { ConditionStruct } from "../Strucutres/conditions/ConditionStruct";
import { SubProgrammStruct } from "../Strucutres/SubProgrammStruct";
import { ReturnStruct } from "../Strucutres/functions/ReturnStruct";
import { VarDefenitionStruct } from "../Strucutres/memory/VarDefenitionStruct";
import { PreprocessorScrut } from "../Strucutres/PreprocessorStruct";
import { SwitchStruct } from "../Strucutres/conditions/SwitchStruct";
import { CaseStruct } from "../Strucutres/conditions/CaseStruct";
import { BinaryOperator } from "../Strucutres/operators/BinaryOperator";
import { ConstantStruct } from "../Strucutres/memory/ConstantStruct";
import { ArrayStruct } from "../Strucutres/memory/ArrayStruct";
import { LiteralStruct } from "../Strucutres/literals/LiteralStruct";
import { TokenString } from "../Tokens/literals/TokenString";
import { IntStruct } from "../Strucutres/literals/IntStruct";
import { HasTagStruct } from "../HasTagStruct";
import { NegationStruct } from "../Strucutres/operators/NegationStruct";
import { ForCycle } from "../Strucutres/cycle/ForCycle";
import { UnarOperator } from "../Strucutres/operators/UnarOperator";
import { FileManager } from "../FileManager";
import { TokenEnd } from "../Tokens/TokenLiteral";
import { VarsDefenitionsStruct } from "../Strucutres/memory/VarsDefinitions";
import { WhileCycle } from "../Strucutres/cycle/WhileCycle";

export class Evaluater {
	private diagnostic: DiagnosticManager;
	private currentFilePath: string;
	private fileManager: FileManager;

	private static types = {
		"error": DiagnosticSeverity.Error,
		"hint": DiagnosticSeverity.Hint,
		"warning": DiagnosticSeverity.Warning,
		"info": DiagnosticSeverity.Information
	}
	
	constructor(private file: OpenedFile) {
		this.diagnostic = file.getDiagnosticManager();
		this.currentFilePath = file.getPath();
		this.fileManager = file.fileManager;
	}
	public async evaluate(exp: TokenStruct, env: Environment) {
		if(exp instanceof LiteralStruct || exp instanceof TokenString)
			return exp;
		if(exp instanceof FunctionDeclaration || exp instanceof FunctionImplementation) {
			try {
				env.defineFunc(exp);
				
			} catch(e) {
				if(e instanceof SymbolAlredyDefined || e instanceof FunctionAlreadyHaveImplementation 
					|| e instanceof FunctionImplementationBeforeDeclaration || e instanceof FunctionHeadDifferentFromPrototype) {
					this.addDiagnostic(e.message, DiagnosticSeverity.Error, e.pos);
				}
				else console.error(e);
			}
			if(exp instanceof FunctionImplementation) {
				let newEnv = env.extend()
				newEnv.retValue = exp.getTag();

				exp.args.forEach(element => {
					try {
						if(element instanceof VarStruct)
							newEnv.define(new VarDefenitionStruct(element));
					} catch(e) {
						if(e instanceof SymbolAlredyDefined) {
							this.addDiagnostic(e.message, DiagnosticSeverity.Error, e.pos);
						}
						else console.error(e);
					}
				});

				await this.evaluate(exp.prog, newEnv);
			}
			return exp;
		}
		if(exp instanceof SubProgrammStruct) {
			for(const element of exp.value) {
				await this.evaluate(element, env);
			}
			return exp;
		}
		if(exp instanceof EnumStruct) {
			try {
				env.defineEnum(exp);
			} catch(e) {
				if(e instanceof SymbolAlredyDefined) {
					this.addDiagnostic(e.message, DiagnosticSeverity.Error, e.pos);
				}
				else console.error(e);
			}
			exp.getElements().forEach(eleement => {
				try {
					eleement.setEnum(exp);
					env.define(new VarDefenitionStruct(eleement));
				} catch(e) {
					if(e instanceof SymbolAlredyDefined) {
						this.addDiagnostic(e.message, DiagnosticSeverity.Error, e.pos);
					}
					else console.error(e);
				}
			});
			return exp;
		}
		if(exp instanceof VarsDefenitionsStruct) {
			for(const element of exp.struct) {
				await this.evaluate(element, env);
			}
			return exp;
		}
		if(exp instanceof CallFunctionStruct) {
			try {
				let callable = env.getFunction(exp.name).func;
				if(callable instanceof FunctionDeclaration && callable.word != "native") {
					this.addDiagnostic(`Can't call function "${callable.name}" without implementation`, DiagnosticSeverity.Error, exp.getPos());
				}
				if(callable.args.length != exp.args.length) {
					this.addDiagnostic(`Несоответствие количества аргументов (требуется: ${callable.args.length}, найдено: ${exp.args.length})`, DiagnosticSeverity.Error, exp.getPos());
				}
				let last = 0;
				for(const elements of exp.args)
				 {
					let arg = await this.evaluate(elements, env);
					let need = callable.args.at(last++);
					if(need) {
						// console.log(need, elements);
						// console.log(this.getTag(elements));
						
						if(!this.isOneTag(elements, need))
							this.addDiagnostic(`Несовпадение типов (ожидается: ${this.getTag(need)}, найден: ${this.getTag(elements)})`, DiagnosticSeverity.Error, elements.getPos());
					}
				}
				
			} catch(e) {
				if(e instanceof UndefinedVariable) {
					this.addDiagnostic(`Undefined functin "${exp.name}"`, DiagnosticSeverity.Error, exp.getPos());
				}
			} 
			return exp;
		}	
		if(exp instanceof ReturnStruct) {
			await this.evaluate(exp.value, env).then(token => {
				let tag = this.getTag(exp.value);
				if(tag != env.retValue) {
					this.addDiagnostic(`Функция должна вернуть "${env.retValue}", а возвращает "${tag}"`, DiagnosticSeverity.Error, exp.getPos());
					this.diagnostic.updateDiagnostic();
				}
			});
			

			return exp;
		}
		if(exp instanceof VarDefenitionStruct) {
			try {
				if(exp.struct instanceof ArrayStruct)
					await this.evaluate(exp.struct, env);
				env.define(exp);
				
			} catch(e) {
				if(e instanceof SymbolAlredyDefined) {
					this.addDiagnostic(e.message, DiagnosticSeverity.Error, e.pos);
				}
				else console.error(e);
			}
			return exp;
		}
		if(exp instanceof ArrayStruct) {
			let isDeclare = exp.isDeclaration();

			if(!isDeclare) {
				try {
					let declare = env.get(exp.name);
					if(!(declare.struct instanceof ArrayStruct))
						this.addDiagnostic("\""+exp.name+"\" не является массивом", DiagnosticSeverity.Error, exp.getPos());
					else {
						let ar = declare.struct;
						if(exp.getSize().length != ar.getSize().length) 
							this.addDiagnostic("Несовпадение размеров массива", DiagnosticSeverity.Error, exp.getPos());
						else { 
							let last = 0;
							let indexes = exp.getSize();
							ar.getSize().forEach(async element => {
								let index = indexes.at(last++);
								// console.log(element);
								if(!index)
									return;
								if(element instanceof IntStruct) {
									if(!(index instanceof IntStruct)) {
										if(!(index instanceof VarStruct || index instanceof CallFunctionStruct))
											this.addDiagnostic("Ожидается целое число", DiagnosticSeverity.Error, index.getPos()); 
										else await this.evaluate(index, env);
									}
										
									else {
										if(index.getValue() < 0)
											this.addDiagnostic(`Невозможно обратиться к отрицательному индексу`, DiagnosticSeverity.Error, index.getPos());
										if(element.getValue() <= index.getValue())
											this.addDiagnostic(`Неверный индекс ( ${element.getValue()} <= ${index.getValue()} )`, DiagnosticSeverity.Error, index.getPos());
									} 
								}
								else if(element instanceof VarStruct) {
									let enuma = env.getEnum(element.name);
									if(!(index instanceof VarStruct))
										this.addDiagnostic(`Ожидается константа из enum "${enuma.head.getValue()}"`, DiagnosticSeverity.Error, index.getPos()); 
									else {
										if(!enuma.getElements().has(index.name))
											this.addDiagnostic(`Ожидается константа из enum "${enuma.head.getValue()}"`, DiagnosticSeverity.Error, index.getPos()); 
									}
									
									
								}
								else this.addDiagnostic("Ожидался индекс, а получиили хз", DiagnosticSeverity.Error, index.getPos());
							});
						}
					}
				} catch(e) {
					if(e instanceof UndefinedVariable) {
						this.addDiagnostic(`Undefined variable "${exp.name}"`, DiagnosticSeverity.Error, exp.getPos());
					}
					else console.error(e);
				}
				
				
			}
			exp.getSize().forEach(element => {
				if(!isDeclare) {
					if(!(element instanceof VarStruct || element instanceof IntStruct || element instanceof CallFunctionStruct)) {
					
						this.addDiagnostic("Жду индекс крч", DiagnosticSeverity.Error, element.getPos());
					}
				}
				else {
					let canBeSize: boolean = element instanceof IntStruct;
					if(!canBeSize && element instanceof VarStruct) {
						try {
							env.getEnum(element.name);
							canBeSize = true;
						} catch(e) {
							if(e instanceof UndefinedVariable) {
								
							} else console.error(e);
						}
					}
					
					if(!canBeSize)
						this.addDiagnostic("В качестве размера может быть только целочисленная константна или enum", DiagnosticSeverity.Error, element.getPos());
				}
			});
			return exp;
		}
		if(exp instanceof PreprocessorScrut) {
			if(exp.code.getValue() == "define") {
				try {
				
					env.defineDef(exp);
				} catch(e) {
					if(e instanceof SymbolAlredyDefined) {
						this.addDiagnostic(e.message, DiagnosticSeverity.Error, e.pos);
					}
					else console.error(e);
				}
			}
			else if(exp.code.getValue() == "include") {
				let fileStr = exp.code.getWhat();
				// console.log("including into", this.file.getPath());
				let oneDir = false;
				let pos = exp.getPos();
				pos = new Range(new Position(pos.start.line, pos.end.character - fileStr.length), pos.end);
				if(fileStr[0] == '<' || fileStr[0] == '"') {
					if(fileStr[0] == '"') oneDir = true;
					fileStr = fileStr.substring(1, fileStr.length - 1);
				}
				
				if(!this.fileManager.includePath)
					throw new Error("Не найдена папка инклудов");
				let res = await this.tryFindFileUri(this.fileManager.includePath, fileStr);
				if(res) {
					env.extendEnv(pos, res.getURI(), res.getEnv());
				}
				else {
					if(oneDir) {
						let res = await this.tryFindFileUri(Uri.parse(this.currentFilePath), fileStr);
						if(res) {
							env.extendEnv(exp.getPos(), res.getURI(), res.getEnv());
						}
						else {
							this.addDiagnostic(`Невозможно открыть файл (${fileStr})`, DiagnosticSeverity.Error, exp.getPos());
							this.diagnostic.updateDiagnostic();
						}
					}
					else {
						this.addDiagnostic(`Невозможно открыть файл (${fileStr})`, DiagnosticSeverity.Error, exp.getPos());
						this.diagnostic.updateDiagnostic();
					}
				}

			}
			return exp;
		}
		if(exp instanceof ConditionStruct) {
			await this.evaluate(exp.condition, env);
			let newEnv = env.extend()
			newEnv.retValue = env.retValue;
			await this.evaluate(exp.then, newEnv);
			return exp;
		}
		if(exp instanceof SwitchStruct) {
			await this.evaluate(exp.cond, env);

			let haveDafault = false;
			for(const element of exp.cases) {
				if(element.isDefault) {
					if(haveDafault) {
						this.addDiagnostic("Выше обнаружен default", DiagnosticSeverity.Error, element.getPos());
						return;
					}
					haveDafault = true;
				}
				
				await this.evaluate(element, env);
			}
			return exp;
		}
		if(exp instanceof CaseStruct) {
			let newEnv = env.extend()
			newEnv.retValue = env.retValue;
			await this.evaluate(exp.prog, newEnv);
			return exp;
		}
		if(exp instanceof AssignOperator) {
			if(exp.left instanceof FunctionDeclaration && exp.right instanceof VarStruct) {
				try {
					let funct = await this.evaluate(exp.left, env);
					let implFunc = await env.getFunction(exp.right.name);
				} catch(e) {
					if(e instanceof UndefinedVariable) {
						this.addDiagnostic(`Ожидается имя функции`, DiagnosticSeverity.Error, exp.right.getPos());
					}
				}
				
			}
			else {
				let variable = await this.evaluate(exp.left, env);
				let value = await this.evaluate(exp.right, env);
				if(variable instanceof VarDefenitionStruct && value) {
					if(!this.isOneTag(value, variable))
						this.addDiagnostic(`Ожидается тип "${this.getTag(variable)}", а найден "${this.getTag(value)}"`, DiagnosticSeverity.Error, value.getPos());
					// console.log(value, variable);
				}
			}
			
			return exp;
		}
		if(exp instanceof VarStruct) {
			try {
				let variable = env.get(exp.name);
				return variable;
			} catch(e) {
				if(e instanceof UndefinedVariable) {
					try {
						let variable = env.getDefine(exp.name);
						return variable;
					}catch(e) {
						if(e instanceof UndefinedVariable) {
							this.addDiagnostic(`Undefined variable "${exp.name}"`, DiagnosticSeverity.Error, exp.getPos());
						}
						else console.error(e);
					}
				}
				else console.error(e);
			}
			return exp;
		}
		if(exp instanceof BinaryOperator) {
			let first = await this.evaluate(exp.left, env);
			let second = await this.evaluate(exp.right, env);
			if(!first || !second)
				throw new Error("Kek");
			if(!this.isOneTag(first, second))
				this.addDiagnostic(`Несовпадение типов (${this.getTag(first)}, ${this.getTag(second)})`, DiagnosticSeverity.Error, exp.getPos());
			return exp;
		}
		if(exp instanceof NegationStruct) {
			await this.evaluate(exp.value, env);
			return exp;
		}
		if(exp instanceof ForCycle) {
			await this.evaluate(exp.preProg, env);
			await this.evaluate(exp.cond, env);
			await this.evaluate(exp.postProg, env);
			await this.evaluate(exp.prog, env);
			return exp;
		}
		if(exp instanceof WhileCycle) {
			await this.evaluate(exp.cond, env);
			await this.evaluate(exp.prog, env);
			return exp;
		}
		if(exp instanceof UnarOperator) {
			if(exp.getTag() != "int")
				this.addDiagnostic(`Ожидается целочисленное значение`, DiagnosticSeverity.Error, exp.getPos());
			await this.evaluate(exp.value, env);
			return exp;
		}
		if(exp instanceof TokenEnd) {
			return exp;
		}
		console.error(exp);
	}
	private isOneTag(first: TokenStruct, second: TokenStruct):boolean {
		return isOneTag(this.getTag(first), this.getTag(second));
	}
	private getTag(exp: TokenStruct): string {
		if(exp instanceof TokenString) return "int";
		if(exp instanceof CallFunctionStruct || exp instanceof FunctionDeclaration || exp instanceof FunctionDeclaration ||
			exp instanceof HasTagStruct || exp instanceof VarDefenitionStruct || exp instanceof VarStruct)
			return exp.getTag();
		console.error(exp);
		throw new Error("У данной структуры не может быть тега");
	}

	private async findInclude(fileStr: string): Promise<OpenedFile | undefined> {
		let uri = Uri.parse("file:" + fileStr);
		if(!this.fileManager.openedFiles.has(uri.path))
			await this.fileManager.openFile(fileStr);
		return this.fileManager.openedFiles.get(uri.path);
	}
	private addDiagnostic(msg: string, type: DiagnosticSeverity, pos: Range) {
		this.diagnostic.addDiagnostic(msg, type, this.file.getPathFile(), pos);
	}
	private async tryFindFileUri(dir: Uri, fileStr: string): Promise<OpenedFile | undefined> {
		let tmp_uri = Uri.joinPath(dir,  "/" + fileStr);
		fileStr = tmp_uri.path;
		console.error(fileStr);
		const postfix = [
			"",
			".pwn",
			".inc"
		];
		let res: undefined | OpenedFile;
		for(let i = 0; i < postfix.length; i++) {
			res = await this.findInclude(fileStr + postfix[i]);
			if(res != undefined) break;
		} 
		return res;
		
	}
	
}

export function isOneTag(first: string, second: string): boolean {
	if(first == second) return true;
	if((first == "hex" && second == "int") || (second == "hex" && first == "int")) return true;
	return false;
}