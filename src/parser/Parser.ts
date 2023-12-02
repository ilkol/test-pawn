import { CaseAfterDefault, EmptyStatment, ExtraDefault, TypeMismatch, UnexpSemicolon } from "../Errors";
import { TokenStream } from "./TokenStream";
import { InputStream } from "./InputStream";
import { Position, Range, commands } from "vscode";
import { TokenEnd, TokenIdentificator, TokenKeyword, TokenOperator, TokenPunc } from "../Tokens/TokenLiteral";
import { ReturnStruct } from "../Strucutres/functions/ReturnStruct";
import { EnumStruct } from "../Strucutres/memory/EnumStruct";
import { ConstantStruct } from "../Strucutres/memory/ConstantStruct";
import { SubProgrammStruct } from "../Strucutres/SubProgrammStruct";
import { TokenStruct } from "../Strucutres/TokensStruct";
import { ConditionStruct } from "../Strucutres/conditions/ConditionStruct";
import { NegationStruct } from "../Strucutres/operators/NegationStruct";
import { PreprocessorScrut } from "../Strucutres/PreprocessorStruct";
import { Token, TokenNumber } from "./Token";
import { BinaryOperator } from "../Strucutres/operators/BinaryOperator";
import { VarStruct } from "../Strucutres/memory/VarStruct";
import { CallFunctionStruct } from "../Strucutres/functions/CallFunctionStruct";
import { FunctionDeclaration } from "../Strucutres/functions/FunctionDeclaration";
import { FunctionImplementation } from "../Strucutres/functions/FunctionImplementation";
import { UnarOperator } from "../Strucutres/operators/UnarOperator";
import { AssignOperator } from "../Strucutres/operators/AssignOperator";
import { AbstractCycle } from "../Strucutres/cycle/AbstractCycle";
import { ArrayStruct } from "../Strucutres/memory/ArrayStruct";
import { VarDefenitionStruct } from "../Strucutres/memory/VarDefenitionStruct";
import { CaseStruct } from "../Strucutres/conditions/CaseStruct";
import { SwitchStruct } from "../Strucutres/conditions/SwitchStruct";
import { ForCycle } from "../Strucutres/cycle/ForCycle";
import { WhileCycle } from "../Strucutres/cycle/WhileCycle";
import { HasTagStruct } from "../HasTagStruct";
import { IntStruct } from "../Strucutres/literals/IntStruct";
import { TokenInt } from "../Tokens/literals/withTags/TokenInt";
import { LiteralStruct } from "../Strucutres/literals/LiteralStruct";
import { TokenFloat } from "../Tokens/literals/withTags/TokenFloat";
import { TokenHex } from "../Tokens/literals/withTags/TokenHex";
import { TokenBoolean } from "../Tokens/literals/withTags/TokenBoolean";
import { TokenString } from "../Tokens/literals/TokenString";
import { CharStruct } from "../Strucutres/literals/CharStruct";
import { isDefaultTag } from "../utils";
import { RangeToken } from "../Tokens/literals/RangeToken";
import { InitArrayStruct } from "../Strucutres/memory/InitArrayStruct";
import { TernarOperator } from "../Strucutres/operators/TernarOperator";
import { TokenPreprocessor } from "../Tokens/TokenPreprocessor";
import { VarsDefenitionsStruct } from "../Strucutres/memory/VarsDefinitions";

interface IPrecedence {
	[key: string]: number;
}

export class Parser {

	private precedence: IPrecedence =
	{ // приоритет действий
		"=": 1, "+=": 1, "-=": 1, "*=": 1, "/=": 1, "&=": 1, "%=": 1, "|=": 1,
		"||": 2,
		"&&": 3,
		"<": 7, ">": 7, "<=": 7, ">=": 7, "==": 7, "!=": 7,
        "+": 10, "-": 10, "++": 9, "--": 9,
        "*": 20, "/": 20, "%": 20, "&": 20, "|": 20, "^": 20, "<<": 20, ">>": 20,
	}
	private ternar = false;
	
	constructor(private input: TokenStream) {

	}
	public parse() {
		let prog: TokenStruct[] = [];
		while(!this.input.end()) {
			let progr = this.parseExpression(this);
			prog.push(progr);
			if(!this.input.end())  {
				if(progr instanceof PreprocessorScrut) {
					if(this.isPunc(';'))
						throw new UnexpSemicolon();
				}
				else {
					if(progr instanceof EnumStruct) {
						let cur = this.input.peek();
						if(cur instanceof TokenPunc && cur.getValue() == ";")
							this.trySkipPunc();
					}
					else if(progr instanceof ConditionStruct || progr instanceof AbstractCycle 
						|| progr instanceof FunctionImplementation || progr instanceof FunctionDeclaration || (progr instanceof AssignOperator && progr.left instanceof FunctionDeclaration)) {}
					else this.trySkipPunc();

				}
			}
		}
		return {
			type: "prog",
			prg: prog
		}
	}
	private trySkipPunc() {
		this.skipPunc(";");
		if(this.isPunc(';')) {
			throw new EmptyStatment();
		}
	}
	private maybeCall(expr: ()=>TokenStruct, inc: Parser = this): TokenStruct {
		let result: TokenStruct = expr();
		if(inc.isPunc("(")) {
			if(result instanceof VarStruct )
				return this.parseCall(result.name);
			if( result instanceof IntStruct)
				return this.parseCall(result.getValue().toString());
			else throw new Error("Надо переменнуд");
		}
		return result;
	}
	private isPunc(char: string) {
		var token: Token = this.input.peek();
		return token instanceof TokenPunc && (!char || token.getValue() == char);
        // return token && token.type == TokenTypes.punc && (!char || token.value == char) && token;
	}
	private parseCall(expr: string, inc: Parser = this): CallFunctionStruct | FunctionImplementation | AssignOperator {
		let posa = inc.input.input.position()
		
		let arg = inc.delimited("(", ")", ",", inc.parseExpression, inc);
		let res = new CallFunctionStruct(expr, new Range(
				new Position(posa.line, posa.character - expr.length - 1), 
				new Position(posa.line, posa.character - 1)
			), arg);
		if(inc.isPunc(";")) {
			// this.trySkipPunc();
			return res;
		}
		if((inc.isPunc("{") || !inc.isPunc(";")) && !inc.isPunc(")") && !inc.isPunc(",") && !inc.isOperator()) {
			let cur = inc.input.peek();
			if(cur instanceof TokenOperator && cur.getValue() == "=") {
				inc.input.next();
				let proga: TokenStruct = inc.parseAtom();
				if(proga instanceof VarStruct)
					return new AssignOperator(new FunctionDeclaration(res), proga);
				else throw new Error("Чет пошло не так");
			}
			let prog = inc.parseCondLineProg(inc);
			
			return new FunctionImplementation(res, prog);
		}
		else {
			if(this.isPunc(';')) {
				this.trySkipPunc();
			}
			return res;
		}
		
	}
	private delimited(start: string, end: string, separator: string, parser: Function, inc: Parser = this, skipLast = true): Array<TokenStruct> {
		if(start != "") this.skipPunc(start);
		
		var a: TokenStruct[] = [];
		var first = true;
		var last: TokenStruct;
		let startPos, endPos;
		while (!this.input.end()) {
			if (this.isPunc(end)) break;
			if (first) first = false;
			
            if (this.isPunc(end)) break;
			startPos = inc.input.input.position();
			if(separator == ";") {
				do {
					if(inc.isPunc(","))
						inc.skipPunc(",");
					last = parser(inc);
					endPos = inc.input.input.position();
					a.push(last);
				}
				while(inc.isPunc(","));	
			}
			else {
				last = parser(inc);
				a.push(last);
			}
			if (this.isPunc(end)) break;
			if(!(last instanceof ConditionStruct || last instanceof AbstractCycle || last instanceof SwitchStruct || last instanceof SubProgrammStruct)) inc.skipPunc(separator);
		}
		// if(separator == ";" && inc.isPunc(";"))
		if(skipLast) inc.skipPunc(end);
		return a;
	}
	private skipPunc(char: string) {
       	if (this.isPunc(char)) this.input.next();
		else this.input.input.except("Expecting punctuation: \"" + char + "\", but found \"" + this.input.peek().getValue() + "\"");
    }
	private parseExpression(inc: Parser = this): TokenStruct {
		return inc.maybeCall(function() {
			let token = inc.parseAtom(inc);
			if (inc.isPunc(":") && token instanceof SubProgrammStruct) {
				inc.skipPunc(":");
				var variable = inc.parseAtom();
				return variable;
			}
			if(token instanceof HasTagStruct)
				return inc.maybeBinary(token, 0, inc);
			
			return token;
		}, inc);
	}
	private parseTernar(left: TokenStruct, inc: Parser): TernarOperator {
		inc.input.next();
		this.ternar = true;
		let ifTrue = inc.parseExpression();
		this.ternar = false;
		inc.skipPunc(":");
		let ifFalse = inc.parseExpression();
		
		return new TernarOperator(left, ifTrue, ifFalse);
	}
	private parseAtom(inc: Parser = this): TokenStruct {
		return inc.maybeCall(function(): TokenStruct {
			if (inc.isKw("native") || inc.isKw("forward") || inc.isKw("public") || inc.isKw("stock") || inc.isKw("publics")) {
				let word = inc.parseDefinition();
				let func = inc.parseExpression();
				if(inc.isPunc(";") && !(func instanceof InitArrayStruct)) 
					inc.trySkipPunc();
				if(func instanceof FunctionImplementation) {
					func.word = word;
					return func;
				}
					
				else if(func instanceof CallFunctionStruct) {
					let funct = new FunctionDeclaration(func);
					funct.word = word;
					return funct;
				}
					
				return func;
			}
			if(inc.isKw("sizeof")) {
				let start = inc.input.input.position();
				inc.skipKw("sizeof");
				let par = inc.parseExpression();
				return new CallFunctionStruct("sizeof", new Range(start, inc.input.input.position()), [par]);
			}
			if (inc.isKw("new")) return inc.parseNew();
            if (inc.isKw("enum")) return inc.parseEnum();
            if (inc.isKw("return")) return inc.parseReturn();
            if (inc.isKw("const")) return inc.parseConstant();
			if (inc.isKw("switch")) return inc.parseSwitch();
			if(inc.isKw("operator")) {
				let start = inc.input.input.position();
				inc.skipKw("operator");
				let op = inc.isOperator();
				inc.input.next();
				if(!op)
					throw new Error("Ожидается оператор для перегрузки");
				let func = inc.parseCall(`operator${op.getValue()}`, inc);
				if(func instanceof AssignOperator)
					return func;
				return new FunctionDeclaration(func);
			}
			if (inc.isNegation()) return inc.parseNegation();
			
            if (inc.isPunc("(")) {
				inc.input.next();
                var exp = inc.parseExpression(inc);
				inc.skipPunc(")");
                return exp;
            }
            if (inc.isPunc("{")) {
				return inc.parseProg();
			}
            if (inc.isKw("if")) return inc.parseIf();
			if (inc.isKw("for")) return inc.parseFor();
			if (inc.isKw("while")) return inc.parseOneCondCycle("while", inc); 
			if (inc.isKw("foreach")) return inc.parseForeach(inc); 
			if (inc.isKw("tforeach")) return inc.parseOneCondCycle("tforeach", inc); 
			
			// if (inc.isKw("true") || inc.isKw("false")) return inc.parseBool();

			let token = inc.input.next();
			if(token instanceof TokenPreprocessor)
				return new PreprocessorScrut(token);
			if(token instanceof TokenOperator && token.getValue() == "-") {
				let start = token.getPos();
				token = inc.input.peek();
				if(token instanceof TokenInt || token instanceof TokenFloat) {
					inc.input.next();
					token.negate();
				}
				else {
					let right = inc.parseExpression();
					if(right instanceof LiteralStruct || right instanceof  CallFunctionStruct)
						return new BinaryOperator("*", new TokenInt(-1, start), right);
				}
					
			}
			
			if(token instanceof TokenPunc && token.getValue() == "...") {
				return new VarStruct(token.getValue(), token.getPos())
			}
			if(token instanceof TokenIdentificator) {
				let res = new VarStruct(token.getValue(), token.getPos())
				while(inc.isPunc("{")) {
					inc.skipPunc("{");
					var size: TokenStruct | undefined;
					if(!inc.isPunc("}")) {
						size = inc.parseExpression();
						if(inc.isKw("char")) {
							size = new CharStruct(size);
							inc.skipKw("char");
						}
					}
					inc.skipPunc("}");
					if(!size) {
						size = new TokenInt(0, new Range(inc.input.input.position(), inc.input.input.position()));
					}
					let tmp = new ArrayStruct(res, new Range(res.pos.start, inc.input.input.position()), size);
					return inc.maybeBinary(tmp, 0);
				}
				while(inc.isPunc("[")) {
					inc.skipPunc("[");
					var size: TokenStruct | undefined;
					if(!inc.isPunc("]")) {
						size = inc.parseExpression();
						if(inc.isKw("char")) {
							size = new CharStruct(size);
							inc.skipKw("char");
						}
					}
					
					inc.skipPunc("]");
					if(!size) {
						size = new TokenInt(0, new Range(inc.input.input.position(), inc.input.input.position()));
					}
						
					let tmp = new ArrayStruct(res, new Range(res.pos.start, inc.input.input.position()), size);

					return inc.maybeBinary(tmp, 0);
				}
				return res;
			}
			if (token instanceof TokenOperator && token.getValue() == "&") {
				let right = inc.parseExpression();
				if(!(right instanceof HasTagStruct))
					throw new Error("Оиждалось чет с тегом");
				return new UnarOperator("&", right);
			} 
			if (token instanceof TokenInt) 
				return new IntStruct(token);
			if (token instanceof TokenFloat) 
				return new LiteralStruct<number>(token, token.getValue());
			if (token instanceof TokenHex) 
				return new LiteralStruct<string>(token, token.getValue());
			if (token instanceof TokenBoolean) 
				return new LiteralStruct<boolean>(token, token.getValue());
			if(token instanceof TokenString) {
				while(inc.input.peek() instanceof TokenIdentificator || inc.input.peek() instanceof TokenPreprocessor) {
					let def = inc.input.next();
					let nextStr = inc.input.next();
					token = new TokenString(token.getValue() + '"' + def.getValue() + '"' + nextStr.getValue(), new Range( token.getPos().start, nextStr.getPos().end));
				}
				return token;
			}
			if (token instanceof TokenEnd || token instanceof TokenKeyword || token instanceof RangeToken)
                return token;
			console.error(token);
			throw inc.unexpected();
        }, inc);
	}
	private unexpected() {
		// console.error();
        this.input.input.except("Unexpected token: " + JSON.stringify(this.input.peek()));
    }
	private parseProg(inc: Parser = this): SubProgrammStruct {
		let start = inc.input.input.position();
        var prog = this.delimited("{", "}", ";", this.parseExpression, inc);
		return new SubProgrammStruct(prog, new Range(start, inc.input.input.position()));
    }
	private maybeBinary(left: HasTagStruct | TokenString, my_prec: number, inc: Parser = this): TokenStruct {
        var token: TokenOperator | false = inc.isOperator();
		if (token) {
			if(token.getValue() == "++" || token.getValue() == "--") {
				inc.input.next();
				if(left instanceof TokenString) 
					throw new Error("Ожидалась тег");
				return new UnarOperator(token.getValue(), left);
			}
			let value = token.getValue();
			var his_prec: number = inc.precedence[value];
            if (his_prec > my_prec) {
                inc.input.next();
				let tmp = inc.parseExpression();
				if(!(tmp instanceof HasTagStruct || tmp instanceof TokenString)) {
					if(token instanceof TokenOperator && token.getValue() == "=") {
						if(left instanceof ArrayStruct && tmp instanceof SubProgrammStruct) {
							return new InitArrayStruct(left, tmp)
						}
						if(!(left instanceof VarStruct))
							throw new Error("Ожидалась переменная");
						if(tmp instanceof TokenString) 
							return new AssignOperator(left, tmp); 
					}
					
					throw new Error("Ожидался тег");
				}
					
				let right = inc.maybeBinary(tmp, his_prec, inc);
				if(!(right instanceof LiteralStruct || right instanceof VarStruct || right instanceof  CallFunctionStruct 
					|| right instanceof  NegationStruct || right instanceof  TernarOperator || right instanceof  BinaryOperator || right instanceof TokenString)) {
						console.error(right);
						console.error(token);
						throw new Error("Чет пошло не так");
					}
					
				let resaaaalt: TokenStruct;
				if(!(right instanceof HasTagStruct || right instanceof TokenString))
					throw new Error("kek");
				if(value == "=") {
					if(!(left instanceof VarStruct || left instanceof FunctionDeclaration)) 
						throw new Error("Ожидалась переменная");
					else resaaaalt = new AssignOperator(left, right);
				}
					
					
				else {
					
					resaaaalt = new BinaryOperator(value, left, right);
				}
					
				return inc.maybeBinary(resaaaalt, my_prec);
            }
        }
		
		if(inc.isOperator("?")) 
			return inc.parseTernar(left, inc);
		if (inc.isPunc("[") && left instanceof ArrayStruct) {
			this.skipPunc("[");
			var size: TokenStruct | undefined;
			if(!this.isPunc("]")) {
				size = inc.parseExpression();
				if(this.isKw("char")) {
					size = new CharStruct(size);
					inc.skipKw("char");
				}
			}
			
			this.skipPunc("]");
			if(!size) {
				size = new TokenInt(0, new Range(inc.input.input.position(), inc.input.input.position()));
			}
				
			left.extend(size);
			
			return inc.maybeBinary(left, my_prec);
		}
		// if (inc.isPunc("{") && left instanceof ArrayStruct) {
		// 	this.skipPunc("{");
		// 	var size: TokenStruct | undefined;
		// 	if(!this.isPunc("}")) {
		// 		size = inc.parseExpression();
		// 		if(this.isKw("char")) {
		// 			size = new CharStruct(size);
		// 			inc.skipKw("char");
		// 		}
		// 	}
			
		// 	this.skipPunc("}");
		// 	if(!size) {
		// 		size = new TokenInt(0, new Range(InputStream.position(), InputStream.position()));
		// 	}
				
		// 	left.extend(size);
			
		// 	return inc.maybeBinary(left, my_prec);
		// }
		// if (inc.isPunc("{")) {
		// 	if(!(left instanceof CallFunctionStruct))
		// 		throw new Error("Оиждалось имя массива");
		// 	this.skipPunc("{");
		// 	var size;
		// 	if(!this.isPunc("}")) {
		// 		size = inc.parseExpression();
		// 	}
		// 	this.skipPunc("}");
		// 	return inc.maybeBinary(new ArrayStruct(left, new Range(left.pos.start, InputStream.position()), size), my_prec);
		// }
		
		if (inc.isPunc(":") && (left instanceof VarStruct) && !this.ternar) {
			inc.skipPunc(":");
			if(left.name == "_") 
				left.setTag("int");
			var variable = inc.parseExpression();
			if(variable instanceof AssignOperator) {
				if(!(variable.left instanceof VarStruct || variable.left instanceof FunctionDeclaration))
					throw new Error("Ожидается переменная");
				variable.left.setTag(left.name);
			}
			else if(variable instanceof VarStruct){
				variable.setTag(left.name);
			}
			else if(variable instanceof CallFunctionStruct){
				if(isDefaultTag(left.name))
					variable.setTag(left.name);
			}
			return variable;
		}
		// if (inc.isKw("char")) {
		// 	left.tag = inc.input.next();
		// 	return left;
		// }
        return left;
    }
	private isOperator(operator: string | undefined = undefined): TokenOperator | false {
        var token: Token = this.input.peek();
		if(token instanceof TokenOperator && (!operator || token.getValue() == operator)) 
			return token;
		else return false;
    }
	private isMacro(operator: string | undefined = undefined): TokenPreprocessor | false {
        var token: Token = this.input.peek();
		if(token instanceof TokenPreprocessor && (!operator || token.getValue() == operator)) 
			return token;
		else return false;
	}
	private isKw(kw: string): boolean {
		var token: Token = this.input.peek();
		return token instanceof TokenKeyword && (!kw || token.getValue() == kw);
	}
	private isNegation(): boolean {
		var token: Token = this.input.peek();
        return token instanceof TokenOperator && token.getValue() == "!";
	}
	private skipKw(kw: string) {
		if (this.isKw(kw)) this.input.next();
        else this.input.except("Expecting keyword: \"" + kw + "\", but found \"" + this.input.peek().getValue() + "\"");
	}
	private parseReturn(inc: Parser = this): ReturnStruct {
		let start = inc.input.input.position();
		inc.skipKw("return");
		let func: TokenStruct = inc.parseExpression(inc);
		if(func instanceof HasTagStruct)
			return new ReturnStruct(func, new Range(start, inc.input.input.position()));
		console.error(func);
		throw new Error("Нельзя вернуть безтеговое значение");
	}
	private parseEnum(inc: Parser = this): EnumStruct {
		let start = inc.input.input.position();
		inc.skipKw("enum");
		var name = inc.input.next();
		if(!(name instanceof TokenIdentificator))
			throw new Error("kek");
		var prog: TokenStruct[] = this.delimited("{", "}", ",", this.parseExpression, inc);

		var constatns: (VarStruct | AssignOperator)[] = [];
		prog.forEach(element => {
			if(!(element instanceof AssignOperator) && !(element instanceof VarStruct))
				throw new Error("Ждали присвоение или контсанту");
				constatns.push(element);
		});

		return new EnumStruct(name, new Range(start, inc.input.input.position()), constatns);	
	}
	private parseNew(inc: Parser = this): TokenStruct {
		inc.skipKw("new");
		let func = inc.delimited("", ";", ",", inc.parseExpression, inc, false);
		// let func: TokenStruct = inc.parseExpression(inc);
		let vars: (VarDefenitionStruct | AssignOperator)[] = [];
		func.forEach(element => {
			if(element instanceof VarStruct) {
				if(element instanceof ArrayStruct)
					element.declarate();
				return vars.push(new VarDefenitionStruct(element));
			}
			if(element instanceof AssignOperator) {
				if(element.left instanceof FunctionDeclaration)
					throw new Error("Ожидалась переменная");
				return vars.push(new AssignOperator(new VarDefenitionStruct(element.left), element.right));
			}
			throw new Error("Ожидалась переменная");
		});
		
		return new VarsDefenitionsStruct(vars);
		
	}
	private parseNegation(inc: Parser = this): NegationStruct | TokenString {
		let start = inc.input.input.position();;
		inc.input.next();
		let token = inc.parseExpression(inc);
		if(token instanceof HasTagStruct)
			return new NegationStruct(token, new Range(start, inc.input.input.position()));
		else if(token instanceof TokenString) {
			token.pack();
			return token;
		}
		console.error(token);
		throw new Error("Нельзя отрицать то, что без тега");
	}
	private parseSwitch(inc: Parser = this): SwitchStruct {
		inc.skipKw("switch");
		inc.skipPunc("(");
		var cond = inc.parseExpression(inc);
		inc.skipPunc(")");
		
		inc.skipPunc("{");
		
		var prog: CaseStruct[] = [];

		var def: boolean = false;

		while(inc.isKw("case") || inc.isKw("default")) {
			if(inc.isKw("case")) {
				
				if(def) throw new CaseAfterDefault(inc.input.input.position());
				inc.skipKw("case");
				var Case = inc.input.next();
				if(inc.isPunc(",")) {
					let arg = this.delimited(",", ":", ",", this.parseExpression, inc);
				}
				else inc.skipPunc(":");
				let proga = inc.parseCondLineProg(inc);
				prog.push(new CaseStruct(proga, new Range(Case.getPos().start, proga.getPos().end), Case));
			}
			else if(inc.isKw("default")) {
				let start = inc.input.input.position();
				if(def) throw new ExtraDefault(start);
				inc.skipKw("default");
				inc.skipPunc(":");
				prog.push(new CaseStruct(inc.parseCondLineProg(inc), new Range(start, inc.input.input.position())));
				def = true;
			}
		}
		

		inc.skipPunc("}");
	
		return new SwitchStruct(cond, prog, new Range(cond.getPos().start, inc.input.input.position()));
	}
	private parseConstant(inc: Parser = this): ConstantStruct {
		inc.skipKw("const");
		let func: TokenStruct = inc.parseExpression(inc);
		if(func instanceof VarStruct)
		return new ConstantStruct(func,new IntStruct(new TokenInt(0, func.getPos())), func.getPos());
		if(func instanceof AssignOperator) {
			// if(func.left.getTag() != func.right.getTag())
				// throw new TypeMismatch(func.left.name, func.left.getTag(), func.right.getTag(), func.getPos());
			if(func.left instanceof FunctionDeclaration)
				throw new Error("Ожидалась переменная");
			return new ConstantStruct(func.left, func.right, func.left.getPos());
		}
		throw new Error("Ожидалась переменная");
		
	}
	private parseDefinition(inc: Parser = this): string{
		let kw = inc.input.peek();
		let word = "";
		if(!(kw instanceof TokenKeyword))
			throw new Error("Ждали модификатор");
		inc.skipKw(kw.getValue());

		word = kw.getValue();
		if(kw.getValue() == "publics" && inc.isPunc(":")) {
			inc.skipPunc(":");
			word += ":";
		}
		return word;
		/*let start = InputStream.position();
		let func: TokenStruct = inc.parseExpression(inc);
		if(!(func instanceof CallFunctionStruct)) {
			throw Error("Expecting function define");
		}
		let res = new FunctionDeclaration(func);
		res.setModefire(kw.getValue());
		if(inc.isPunc(";"))
			return res;
		let prog = inc.parseCondLineProg(inc);
		return new FunctionImplementation(res, prog);*/

	}

	private parseFor(inc: Parser = this): ForCycle {
		let start = inc.input.input.position();
		inc.skipKw("for");
		inc.skipPunc("(");
		var preCycle = inc.parseExpression();
		inc.skipPunc(";");
		let cond: TokenStruct = inc.parseExpression(inc);
		inc.skipPunc(";");
		let postCond: TokenStruct = inc.parseExpression(inc);
		inc.skipPunc(")");
		var body = inc.parseCondLineProg(inc);

		return new ForCycle(cond, new SubProgrammStruct([postCond], postCond.getPos()), new SubProgrammStruct([postCond], postCond.getPos()), body);
	}
	private parseForeach(inc: Parser = this): WhileCycle {
		inc.skipKw("foreach");
		inc.skipPunc("(");
		inc.skipKw("new");
		var cond = inc.parseExpression();
		inc.skipPunc(")");
		var body = inc.parseCondLineProg(inc);
		if(!(cond instanceof VarStruct ))
			throw new Error("Ban");
		return new WhileCycle(new VarsDefenitionsStruct([new VarDefenitionStruct(cond)]), body);

	}
	private parseOneCondCycle(kw: string, inc: Parser = this): WhileCycle {
		let start = inc.input.input.position();
		inc.skipKw(kw);
		inc.skipPunc("(");
		let cond: TokenStruct = inc.parseExpression(inc);
		inc.skipPunc(")");
		var then = inc.parseCondLineProg(inc);
		
		return new WhileCycle(cond, then);

		/*var ret: CodePice = { 
			type: kw, 
			cond: cond, 
			toDo: then,
			pos: new Range(start, InputStream.position())
		};
		return {
			type: "cycle",
			value: ret,
			pos: ret.pos
		};*/
	}
	private parseIf(inc: Parser = this): ConditionStruct {
		let start = inc.input.input.position();
		inc.skipKw("if");
		let cond: TokenStruct = inc.parseExpression(inc);
		var then: SubProgrammStruct = inc.parseCondLineProg(inc);

		let res = new ConditionStruct(cond, then, new Range(start, inc.input.input.position()));
		
		if(inc.isKw("else")) {
			this.skipKw("else");
			let el: ConditionStruct | SubProgrammStruct;
			if(inc.isKw("if")) {
				el = this.parseIf(inc);
			}
			else {
				el = inc.parseCondLineProg(inc);
			}
			res.setElse(el);
		}

		return res;
	}
	private parseCondLineProg(inc: Parser): SubProgrammStruct {
		var then: TokenStruct = inc.parseExpression(inc);
		if(then instanceof SubProgrammStruct)
			return then;
		let proga: TokenStruct[] = [];
		proga.push(then);
		while(inc.isPunc(",")) {
			inc.input.next();
			proga.push(inc.parseExpression(inc));
		}
		if(inc.isPunc(";"))
			inc.skipPunc(";");
		return new SubProgrammStruct(proga, then.getPos());
	}
}
