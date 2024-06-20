import { DiagnosticSeverity, DocumentSymbol, Position, Range, SymbolKind, Uri, commands, workspace } from "vscode";
import { Environment, FuncModifires, Modifires, argsData, enumElData, saveData } from "./Environment";
import { Token } from "./Token";
import { CantAssignToConst, FunctionAlreadyHaveImplementation, FunctionHeadDifferentFromPrototype, FunctionImplementationBeforeDeclaration, SymbolAlredyDefined, TypeMismatch, TypeMismatchOperator, UndefinedVariable } from "../Errors";
import { OpenedFile } from "../OpenedFile";
import { DiagnosticManager } from "../Managers/diagnostic";
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
import { FileManager } from "../Managers/FileManager";
import { TokenEnd, TokenKeyword } from "../Tokens/TokenLiteral";
import { VarsDefenitionsStruct } from "../Strucutres/memory/VarsDefinitions";
import { WhileCycle } from "../Strucutres/cycle/WhileCycle";
import { IncludeStruct, IncludeType } from "../Strucutres/preprocessor/IncludeStruct";
import { SimplePreprocessorStruct } from "../Strucutres/preprocessor/SimplePreprocessorStruct";
import { DefineStruct } from "../Strucutres/preprocessor/DefineStruct";
import { TokenInt } from "../Tokens/literals/withTags/TokenInt";
import { AbstractOpenFile } from "../AbstractOpenFile";


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
		this.file.tokensManager.refresh();
		this.file.symbolsManager.refresh();
	}
	public async evaluate(exp: TokenStruct, env: Environment) {
		if(exp instanceof LiteralStruct ) {
			switch(exp.getTag()) {
				case "bool":
					env.symbols.push(new DocumentSymbol(exp.getValue() ? "true" : "false", "", SymbolKind.Boolean, exp.getPos(), exp.getPos()));
			}
			return exp;
		}
		if(exp instanceof TokenString) {
			// this.file.tokensManager.addToken(exp.getPos(), "string");
			return exp;
		}
		if(exp instanceof TokenKeyword) {
			return exp;
		}
		if(exp instanceof FunctionDeclaration || exp instanceof FunctionImplementation) {
			let symbol: undefined | DocumentSymbol = undefined;
			try {
				env.defineFunc(exp);
				symbol = this.file.symbolsManager.createSymbol(exp.name, "", SymbolKind.Function, exp.getPos(), exp.getPos());
				
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
				for(const element of exp.args) {
					try {
						if(element instanceof VarStruct) {
							newEnv.define(new VarDefenitionStruct(element));
							// if(symbol)
							// 	newEnv.symbols.push(this.file.symbolsManager.createSymbol(element.name, "", SymbolKind.TypeParameter, element.getPos(), element.getPos()));
						}
							
					} catch(e) {
						if(e instanceof SymbolAlredyDefined) {
							this.addDiagnostic(e.message, DiagnosticSeverity.Error, e.pos);
						}
						else console.error(e);
					}
				}

				await this.evaluate(exp.prog, newEnv);
				if(symbol)
					symbol.children = newEnv.symbols;
			}
			if(symbol)
				env.symbols.push(symbol);
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
				this.file.tokensManager.addToken(exp.head.getPos(), "enum");
			
			} catch(e) {
				if(e instanceof SymbolAlredyDefined) {
					this.addDiagnostic(e.message, DiagnosticSeverity.Error, e.pos);
				}
				else console.error(e);
			}
			exp.getElements().forEach(eleement => {
				try {
					eleement.setEnum(exp);
					this.file.tokensManager.addToken(eleement.variable.getPos(), "enumMember");
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
				// this.file.symbolsManager.addSymbol(exp.name, "", SymbolKind.Function, exp.getPos(), exp.getPos());
				
				
				// if(callable instanceof FunctionDeclaration && callable.word != "native") {
				// 	this.addDiagnostic(`Can't call function "${callable.name}" without implementation`, DiagnosticSeverity.Error, exp.getPos());
				// }
				if(callable.args.length != exp.args.length) {
					this.addDiagnostic(`Несоответствие количества аргументов (требуется: ${callable.args.length}, найдено: ${exp.args.length})`, DiagnosticSeverity.Error, exp.getPos());
				}
				let last = 0;
				for(const elements of exp.args)
				 {
					let arg = await this.evaluate(elements, env);
					let need = callable.args.at(last++);
					if(need) {
						
						if(!this.isOneTag(elements, need))
							this.addDiagnostic(`Несовпадение типов (ожидается: ${this.getTag(need)}, найден: ${this.getTag(elements)})`, DiagnosticSeverity.Error, elements.getPos());
					}
				}
				
			} catch(e) {
				if(e instanceof UndefinedVariable) {
					try {
						let macro = env.getDefine(exp.name);

						console.log(macro);
					}catch(e) {
						if(e instanceof UndefinedVariable)
							this.addDiagnostic(`Undefined functin "${exp.name}"`, DiagnosticSeverity.Error, exp.getPos());
					}
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
				if(exp.struct instanceof ArrayStruct) {
					await this.evaluate(exp.struct, env);
					
				}
				await env.define(exp);
				
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
					let declare = await env.get(exp.name);
					if(!(declare.struct instanceof ArrayStruct))
						this.addDiagnostic("\""+exp.name+"\" не является массивом", DiagnosticSeverity.Error, exp.getPos());
					else {
						let ar = declare.struct;
						if(exp.size.length != ar.size.length) 
							this.addDiagnostic("Несовпадение размеров массива", DiagnosticSeverity.Error, exp.getPos());
						else { 
							let last = 0;
							let indexes = exp.size;
							for(const element of ar.size) {
								let index = indexes.at(last++);
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
									try {
										let enuma = env.getEnum(element.name);
									if(!(index instanceof VarStruct))
										this.addDiagnostic(`Ожидается константа из enum "${enuma.head.getValue()}"`, DiagnosticSeverity.Error, index.getPos()); 
									else {
										if(!enuma.getElements().has(index.name))
											this.addDiagnostic(`Ожидается константа из enum "${enuma.head.getValue()}"`, DiagnosticSeverity.Error, index.getPos()); 
									}
									}
									catch(e) {
										if(e instanceof UndefinedVariable) {
											this.addDiagnostic(`Не получилось найти ${e.varName}`, DiagnosticSeverity.Error, exp.getPos());
										}
									}
									
									
								}
								else this.addDiagnostic("Ожидался индекс, а получиили хз", DiagnosticSeverity.Error, index.getPos());
							}
							
						}
					}
				} catch(e) {
					if(e instanceof UndefinedVariable) {
						this.addDiagnostic(`Undefined variable "${exp.name}"`, DiagnosticSeverity.Error, exp.getPos());
					}
					else console.error(e);
				}
				
				
			}
			
			let newSize: TokenStruct[] = [];
			for(let element of exp.size) {
				if(!isDeclare) {
					if(!(element instanceof VarStruct || element instanceof IntStruct || element instanceof CallFunctionStruct)) {
					
						this.addDiagnostic("Жду индекс крч", DiagnosticSeverity.Error, element.getPos());
					}
				}
				else {
					
					let canBeSize: boolean = element instanceof IntStruct;
					if(!canBeSize) {
						if(element instanceof VarStruct) {
							try {
								env.getEnum(element.name);
								canBeSize = true;
							} catch(e) {
								if(e instanceof UndefinedVariable) {
									try {
										let result = await env.getDefine(element.name);
										
										canBeSize = true;
										if(!(result.value instanceof IntStruct)) {
											element = result;
											this.addDiagnostic("Возможны ошибки из-за неконстантного define", DiagnosticSeverity.Warning, element.getPos());
										}
										else element = result.value;
										
									} catch(e) {
										if(e instanceof UndefinedVariable) {
											
										} else console.error(e);
									}
								} else console.error(e);
							}
						}
						else if(element instanceof BinaryOperator) {
							const el = await this.evalBinarOper(element, env);
							if(el.constant) {
								canBeSize = true;
								if(this.getTag(el) != "int") {
									this.addDiagnostic("Необходима целочисленная контсанта!", DiagnosticSeverity.Error, element.getPos());
								}
							}
						}
					}
	
					
					if(!canBeSize)
						this.addDiagnostic("В качестве размера может быть только целочисленная константна или enum", DiagnosticSeverity.Error, element.getPos());
				}
				newSize.push(element);
			}
			exp.size = newSize;
			return exp;
		}
		if(exp instanceof IncludeStruct) {
			let symbl = undefined;
			
			let path = exp.path;
			let fileStr = path.path;
			let oneDir = false;
			let pos = exp.linkRange;
			
			
			if(!this.fileManager.includePath)
				throw new Error("Не найдена папка инклудов");
			let res = await this.tryFindFileUri(this.fileManager.includePath, fileStr);
			if(res) {
				env.extendEnv(pos, res.getURI(), res.getEnv());
			}
			else {
				switch (path.type) {
					case IncludeType.none:
					case IncludeType.default: {
						let res = await this.tryFindFileUri(Uri.parse(this.currentFilePath), fileStr);
						if(res) {
							env.extendEnv(exp.getPos(), res.getURI(), res.getEnv());
						}
						else {
							this.addDiagnostic(`Невозможно открыть файл (${fileStr}) ${Uri.parse(this.currentFilePath)}`, DiagnosticSeverity.Error, exp.getPos());
							this.diagnostic.updateDiagnostic();
						}
						break;
					}
					default: {
						this.addDiagnostic(`Невозможно открыть файл (${fileStr})  ${Uri.parse(this.currentFilePath)}`, DiagnosticSeverity.Error, exp.getPos());
						this.diagnostic.updateDiagnostic();
						break;
					}
						
				}
			}
			symbl = this.file.symbolsManager.createSymbol(path.path, "", SymbolKind.File, exp.getPos(), exp.getPos());
			if(symbl)
				env.symbols.push(symbl);
			return exp;
		}
		if(exp instanceof DefineStruct) {
			let symbl = undefined;
			try {
				env.defineDef(exp);
				symbl = this.file.symbolsManager.createSymbol(exp.what, "", SymbolKind.Constant, exp.getPos(), exp.getPos());
			} catch(e) {
				if(e instanceof SymbolAlredyDefined) {
					this.addDiagnostic(e.message, DiagnosticSeverity.Error, e.pos);
				}
				else console.error(e);
			}
			if(symbl)
				env.symbols.push(symbl);
			return exp;
		}
		if(exp instanceof SimplePreprocessorStruct)
			return exp;

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
				let value: any = await this.evaluate(exp.right, env);
				
				
				if(variable instanceof VarDefenitionStruct && value) {
					if(!this.isOneTag(value, variable))
						this.addDiagnostic(`Ожидается тип "${this.getTag(variable)}", а найден "${this.getTag(value)}"`, DiagnosticSeverity.Error, value.getPos());
				}
			}
			
			return exp;
		}
		if(exp instanceof VarStruct) {
			try {
				let variable = env.get(exp.name);
				this.file.tokensManager.addToken(exp.pos, "variable");
				env.symbols.push(new DocumentSymbol(exp.name, "", SymbolKind.Variable, exp.getPos(), exp.getPos()));
				return variable;
			} catch(e) {
				if(e instanceof UndefinedVariable) {
					try {
						let variable = env.getDefine(exp.name);
						this.file.tokensManager.addToken(exp.pos, "variable");
						env.symbols.push(new DocumentSymbol(exp.name, "", SymbolKind.Constant, exp.getPos(), exp.getPos()));
						// this.file.symbolsManager.addSymbol(exp.name, "", SymbolKind.Constant, exp.getPos(), exp.getPos());
				
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
			return this.evalBinarOper(exp, env);
			
		}
		if(exp instanceof NegationStruct) {
			await this.evaluate(exp.value, env);
			return exp;
		}
		if(exp instanceof ForCycle) {
			let newEnv = env.extend();
			await this.evaluate(exp.preProg, newEnv);
			await this.evaluate(exp.cond, newEnv);
			await this.evaluate(exp.postProg, newEnv);
			await this.evaluate(exp.prog, newEnv);
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
		console.error("Невозможно обработать (evaluate) структуру:");
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
	private async evalBinarOper(exp: BinaryOperator, env: Environment): Promise<BinaryOperator> {
		let first: any = await this.evaluate(exp.left, env);
		let second: any = await this.evaluate(exp.right, env);
		if(!first || !second)
			throw new Error("Kek");
		
		if(first instanceof DefineStruct) {
			
			if(first.value === undefined)
				this.addDiagnostic(`Данный define не имеет константного значения`, DiagnosticSeverity.Warning, exp.getPos());
			else first = first.value;
		}
		if(second instanceof DefineStruct) {
			if(second.value === undefined)
				this.addDiagnostic(`Данный define не имеет константного значения`, DiagnosticSeverity.Warning, exp.getPos());
			else second = second.value;
		}
			
		exp.left = first;
		exp.right = second;

		if(!this.isOneTag(first, second))
			this.addDiagnostic(`Несовпадение типов (${this.getTag(first)}, ${this.getTag(second)})`, DiagnosticSeverity.Error, exp.getPos());
		
		exp.setTag(first.getTag());

		if(first instanceof LiteralStruct) {
			if(second instanceof LiteralStruct)
				exp.constant = true;
			else if(second instanceof VarStruct) {
				try {
					let result = env.getDefine(second.name);
					
					if(result.value instanceof LiteralStruct)
						exp.constant = true;
				} catch(e) {
					
				}
			}
		}
		else if(first instanceof VarStruct) {
			try {
				let result = env.getDefine(first.name);
				if(result.value instanceof LiteralStruct) {
					if(second instanceof LiteralStruct)
						exp.constant = true;
					else if(second instanceof VarStruct) {
						try {
							let result = env.getDefine(second.name);
							
							if(result.value instanceof LiteralStruct)
								exp.constant = true;
						} catch(e) {
							
						}
					}
				}
					
			} catch(e) {
				
			}
		}
		
		return exp;
	}
	private async findInclude(fileStr: string): Promise<AbstractOpenFile | undefined> {
		
		let uri = Uri.parse("file:" + fileStr);
		// this.addDiagnostic(uri.path, DiagnosticSeverity.Error, new Range(0,0,1,1));
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
		const postfix = [
			"",
			".pwn",
			".inc"
		];
		let res: undefined | OpenedFile;
		for(let i = 0; i < postfix.length; i++) {
			// res = await this.findInclude(fileStr + postfix[i]);
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