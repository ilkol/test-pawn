// Generated from .\src\antlr\generated\pawn.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { pawnListener } from "./pawnListener";
import { pawnVisitor } from "./pawnVisitor";


export class pawnParser extends Parser {
	public static readonly OPEN_PARENTHESIS = 1;
	public static readonly CLOSE_PARENTHESIS = 2;
	public static readonly CURLY_OPEN_BRACKET = 3;
	public static readonly CURLY_CLOSE_BRACKET = 4;
	public static readonly SQUARE_OPEN_BRACKET = 5;
	public static readonly SQUARE_CLOSE_BRACKET = 6;
	public static readonly COMA = 7;
	public static readonly SEMI = 8;
	public static readonly ASSIGMENT = 9;
	public static readonly ASSIGMENT_PLUS = 10;
	public static readonly ASSIGMENT_MINUS = 11;
	public static readonly ASSIGMENT_MULT = 12;
	public static readonly ASSIGMENT_DIV = 13;
	public static readonly ASSIGMENT_REMAINDE = 14;
	public static readonly ASSIGMENT_AND = 15;
	public static readonly ASSIGMENT_OR = 16;
	public static readonly ASSIGMENT_XOR = 17;
	public static readonly ASSIGMENT_RIGHT = 18;
	public static readonly ASSIGMENT_RIGHT_LOG = 19;
	public static readonly ASSIGMENT_LEFT = 20;
	public static readonly PLUS = 21;
	public static readonly MINUS = 22;
	public static readonly MULTY = 23;
	public static readonly DIV = 24;
	public static readonly REMAINDE = 25;
	public static readonly INCREMENTS = 26;
	public static readonly DECREMENTS = 27;
	public static readonly EQUAL = 28;
	public static readonly NOTEQUAL = 29;
	public static readonly LESS = 30;
	public static readonly LARGER = 31;
	public static readonly LESSEQ = 32;
	public static readonly LARGEREQ = 33;
	public static readonly QUESTION = 34;
	public static readonly COLON = 35;
	public static readonly OR = 36;
	public static readonly AND = 37;
	public static readonly NOT = 38;
	public static readonly BIT_AND = 39;
	public static readonly BIT_OR = 40;
	public static readonly BIT_XOR = 41;
	public static readonly BIT_COMPLEMEN = 42;
	public static readonly BIT_RIGHT = 43;
	public static readonly BIT_LEFT = 44;
	public static readonly BIT_RIGHT_LOG = 45;
	public static readonly PERIOD = 46;
	public static readonly PERIOD_FUNC = 47;
	public static readonly ASSERT = 48;
	public static readonly EXIT = 49;
	public static readonly GOTO = 50;
	public static readonly SLEEP = 51;
	public static readonly STATE = 52;
	public static readonly RETURN = 53;
	public static readonly NEW = 54;
	public static readonly ENUM = 55;
	public static readonly CONST = 56;
	public static readonly STATIC = 57;
	public static readonly STOCK = 58;
	public static readonly FORWARD = 59;
	public static readonly NATIVE = 60;
	public static readonly PUBLIC = 61;
	public static readonly OPERATOR = 62;
	public static readonly IF = 63;
	public static readonly ELSE = 64;
	public static readonly SWITCH = 65;
	public static readonly CASE = 66;
	public static readonly DEFAULT = 67;
	public static readonly WHILE = 68;
	public static readonly FOR = 69;
	public static readonly DO = 70;
	public static readonly CONTINUE = 71;
	public static readonly BREAK = 72;
	public static readonly CHAR = 73;
	public static readonly DEFINED = 74;
	public static readonly SIZEOF = 75;
	public static readonly TAGOF = 76;
	public static readonly DEFINE = 77;
	public static readonly ELSEIF = 78;
	public static readonly EMIT = 79;
	public static readonly ENDIF = 80;
	public static readonly ENDINPUT = 81;
	public static readonly ENDSCRIPT = 82;
	public static readonly FILE = 83;
	public static readonly INCLUDE = 84;
	public static readonly LINE = 85;
	public static readonly PRAGMA = 86;
	public static readonly SECTION = 87;
	public static readonly TRYINCLUDE = 88;
	public static readonly UNDEF = 89;
	public static readonly DYNAMIC = 90;
	public static readonly WARNING = 91;
	public static readonly TRUE = 92;
	public static readonly FALSE = 93;
	public static readonly SHARPSTRING = 94;
	public static readonly STRING = 95;
	public static readonly IDENTIFIER = 96;
	public static readonly HEX = 97;
	public static readonly INTEGER = 98;
	public static readonly FLOAT = 99;
	public static readonly Whitespace = 100;
	public static readonly Newline = 101;
	public static readonly DocBlock = 102;
	public static readonly DocLine = 103;
	public static readonly BlockComment = 104;
	public static readonly LineComment = 105;
	public static readonly RULE_file = 0;
	public static readonly RULE_declaration = 1;
	public static readonly RULE_enum = 2;
	public static readonly RULE_enumMember = 3;
	public static readonly RULE_enumIterator = 4;
	public static readonly RULE_var_definition = 5;
	public static readonly RULE_functionDecl = 6;
	public static readonly RULE_operatorOverload = 7;
	public static readonly RULE_nativeAssigment = 8;
	public static readonly RULE_tag = 9;
	public static readonly RULE_variable = 10;
	public static readonly RULE_arrayIndex = 11;
	public static readonly RULE_funcDeclModif = 12;
	public static readonly RULE_funcModif = 13;
	public static readonly RULE_statement = 14;
	public static readonly RULE_controlStatments = 15;
	public static readonly RULE_assigment = 16;
	public static readonly RULE_arrayInit = 17;
	public static readonly RULE_arrayInitMember = 18;
	public static readonly RULE_assigments = 19;
	public static readonly RULE_grouping = 20;
	public static readonly RULE_constGrouping = 21;
	public static readonly RULE_expresion = 22;
	public static readonly RULE_constExpresion = 23;
	public static readonly RULE_ternarOperator = 24;
	public static readonly RULE_preOperators = 25;
	public static readonly RULE_operation = 26;
	public static readonly RULE_varOrLiteral = 27;
	public static readonly RULE_declParams = 28;
	public static readonly RULE_ellipse = 29;
	public static readonly RULE_reference = 30;
	public static readonly RULE_varModifires = 31;
	public static readonly RULE_rValue = 32;
	public static readonly RULE_constRValue = 33;
	public static readonly RULE_sizeof = 34;
	public static readonly RULE_number = 35;
	public static readonly RULE_integer = 36;
	public static readonly RULE_float = 37;
	public static readonly RULE_hex = 38;
	public static readonly RULE_operator = 39;
	public static readonly RULE_canBeOverloaded = 40;
	public static readonly RULE_arefmeticOperator = 41;
	public static readonly RULE_logicOperator = 42;
	public static readonly RULE_compareOperator = 43;
	public static readonly RULE_bitwiseOperator = 44;
	public static readonly RULE_if_statement = 45;
	public static readonly RULE_else_statement = 46;
	public static readonly RULE_switch = 47;
	public static readonly RULE_case = 48;
	public static readonly RULE_default = 49;
	public static readonly RULE_case_list = 50;
	public static readonly RULE_range = 51;
	public static readonly RULE_condition = 52;
	public static readonly RULE_codeBlock = 53;
	public static readonly RULE_return = 54;
	public static readonly RULE_cycles = 55;
	public static readonly RULE_do = 56;
	public static readonly RULE_while = 57;
	public static readonly RULE_for = 58;
	public static readonly RULE_cycleBody = 59;
	public static readonly RULE_cycleKeywords = 60;
	public static readonly RULE_literal = 61;
	public static readonly RULE_bool_const = 62;
	public static readonly RULE_string = 63;
	public static readonly RULE_functionCall = 64;
	public static readonly RULE_docs = 65;
	public static readonly RULE_docBlock = 66;
	public static readonly RULE_docLine = 67;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"file", "declaration", "enum", "enumMember", "enumIterator", "var_definition", 
		"functionDecl", "operatorOverload", "nativeAssigment", "tag", "variable", 
		"arrayIndex", "funcDeclModif", "funcModif", "statement", "controlStatments", 
		"assigment", "arrayInit", "arrayInitMember", "assigments", "grouping", 
		"constGrouping", "expresion", "constExpresion", "ternarOperator", "preOperators", 
		"operation", "varOrLiteral", "declParams", "ellipse", "reference", "varModifires", 
		"rValue", "constRValue", "sizeof", "number", "integer", "float", "hex", 
		"operator", "canBeOverloaded", "arefmeticOperator", "logicOperator", "compareOperator", 
		"bitwiseOperator", "if_statement", "else_statement", "switch", "case", 
		"default", "case_list", "range", "condition", "codeBlock", "return", "cycles", 
		"do", "while", "for", "cycleBody", "cycleKeywords", "literal", "bool_const", 
		"string", "functionCall", "docs", "docBlock", "docLine",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'", "'{'", "'}'", "'['", "']'", "','", "';'", "'='", 
		"'+='", "'-='", "'*='", "'/='", "'%='", "'&='", "'|='", "'^='", "'>>='", 
		"'>>>='", "'<<='", "'+'", "'-'", "'*'", "'/'", "'%'", "'++'", "'--'", 
		"'=='", "'!='", "'<'", "'>'", "'<='", "'>='", "'?'", "':'", "'||'", "'&&'", 
		"'!'", "'&'", "'|'", "'^'", "'~'", "'>>'", "'<<'", "'>>>'", "'..'", "'...'", 
		"'assert'", "'exit'", "'goto'", "'sleep'", "'state'", "'return'", "'new'", 
		"'enum'", "'const'", "'static'", "'stock'", "'forward'", "'native'", "'public'", 
		"'operator'", "'if'", "'else'", "'switch'", "'case'", "'default'", "'while'", 
		"'for'", "'do'", "'continue'", "'break'", "'char'", "'defined'", "'sizeof'", 
		"'tagof'", "'define'", "'elseif'", "'emit'", "'endif'", "'endinput'", 
		"'endscript'", "'file'", "'include'", "'line'", "'pragma'", "'section'", 
		"'tryinclude'", "'undef'", "'dynamic'", "'warning'", "'true'", "'false'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "OPEN_PARENTHESIS", "CLOSE_PARENTHESIS", "CURLY_OPEN_BRACKET", 
		"CURLY_CLOSE_BRACKET", "SQUARE_OPEN_BRACKET", "SQUARE_CLOSE_BRACKET", 
		"COMA", "SEMI", "ASSIGMENT", "ASSIGMENT_PLUS", "ASSIGMENT_MINUS", "ASSIGMENT_MULT", 
		"ASSIGMENT_DIV", "ASSIGMENT_REMAINDE", "ASSIGMENT_AND", "ASSIGMENT_OR", 
		"ASSIGMENT_XOR", "ASSIGMENT_RIGHT", "ASSIGMENT_RIGHT_LOG", "ASSIGMENT_LEFT", 
		"PLUS", "MINUS", "MULTY", "DIV", "REMAINDE", "INCREMENTS", "DECREMENTS", 
		"EQUAL", "NOTEQUAL", "LESS", "LARGER", "LESSEQ", "LARGEREQ", "QUESTION", 
		"COLON", "OR", "AND", "NOT", "BIT_AND", "BIT_OR", "BIT_XOR", "BIT_COMPLEMEN", 
		"BIT_RIGHT", "BIT_LEFT", "BIT_RIGHT_LOG", "PERIOD", "PERIOD_FUNC", "ASSERT", 
		"EXIT", "GOTO", "SLEEP", "STATE", "RETURN", "NEW", "ENUM", "CONST", "STATIC", 
		"STOCK", "FORWARD", "NATIVE", "PUBLIC", "OPERATOR", "IF", "ELSE", "SWITCH", 
		"CASE", "DEFAULT", "WHILE", "FOR", "DO", "CONTINUE", "BREAK", "CHAR", 
		"DEFINED", "SIZEOF", "TAGOF", "DEFINE", "ELSEIF", "EMIT", "ENDIF", "ENDINPUT", 
		"ENDSCRIPT", "FILE", "INCLUDE", "LINE", "PRAGMA", "SECTION", "TRYINCLUDE", 
		"UNDEF", "DYNAMIC", "WARNING", "TRUE", "FALSE", "SHARPSTRING", "STRING", 
		"IDENTIFIER", "HEX", "INTEGER", "FLOAT", "Whitespace", "Newline", "DocBlock", 
		"DocLine", "BlockComment", "LineComment",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(pawnParser._LITERAL_NAMES, pawnParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return pawnParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "pawn.g4"; }

	// @Override
	public get ruleNames(): string[] { return pawnParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return pawnParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(pawnParser._ATN, this);
	}
	// @RuleVersion(0)
	public file(): FileContext {
		let _localctx: FileContext = new FileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, pawnParser.RULE_file);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 139;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 136;
					this.docs();
					}
					}
				}
				this.state = 141;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 145;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pawnParser.CURLY_OPEN_BRACKET || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (pawnParser.NEW - 54)) | (1 << (pawnParser.ENUM - 54)) | (1 << (pawnParser.CONST - 54)) | (1 << (pawnParser.STATIC - 54)) | (1 << (pawnParser.STOCK - 54)) | (1 << (pawnParser.FORWARD - 54)) | (1 << (pawnParser.NATIVE - 54)) | (1 << (pawnParser.PUBLIC - 54)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (pawnParser.IDENTIFIER - 96)) | (1 << (pawnParser.DocBlock - 96)) | (1 << (pawnParser.DocLine - 96)))) !== 0)) {
				{
				{
				this.state = 142;
				this.declaration();
				}
				}
				this.state = 147;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 148;
			this.match(pawnParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, pawnParser.RULE_declaration);
		let _la: number;
		try {
			this.state = 164;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.CURLY_OPEN_BRACKET:
			case pawnParser.NEW:
			case pawnParser.CONST:
			case pawnParser.STATIC:
			case pawnParser.STOCK:
			case pawnParser.FORWARD:
			case pawnParser.NATIVE:
			case pawnParser.PUBLIC:
			case pawnParser.IDENTIFIER:
			case pawnParser.DocBlock:
			case pawnParser.DocLine:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 153;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === pawnParser.DocBlock || _la === pawnParser.DocLine) {
					{
					{
					this.state = 150;
					this.docs();
					}
					}
					this.state = 155;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 161;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
				case 1:
					{
					this.state = 156;
					this.functionDecl();
					}
					break;

				case 2:
					{
					this.state = 157;
					this.operatorOverload();
					}
					break;

				case 3:
					{
					this.state = 158;
					this.var_definition();
					this.state = 159;
					this.match(pawnParser.SEMI);
					}
					break;
				}
				}
				break;
			case pawnParser.ENUM:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 163;
				this.enum();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enum(): EnumContext {
		let _localctx: EnumContext = new EnumContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, pawnParser.RULE_enum);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 166;
			this.match(pawnParser.ENUM);
			this.state = 168;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.IDENTIFIER) {
				{
				this.state = 167;
				this.match(pawnParser.IDENTIFIER);
				}
			}

			this.state = 171;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.OPEN_PARENTHESIS) {
				{
				this.state = 170;
				this.enumIterator();
				}
			}

			this.state = 173;
			this.match(pawnParser.CURLY_OPEN_BRACKET);
			this.state = 185;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.CURLY_OPEN_BRACKET || _la === pawnParser.IDENTIFIER) {
				{
				this.state = 174;
				this.enumMember();
				this.state = 179;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 175;
						this.match(pawnParser.COMA);
						this.state = 176;
						this.enumMember();
						}
						}
					}
					this.state = 181;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
				}
				this.state = 183;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === pawnParser.COMA) {
					{
					this.state = 182;
					this.match(pawnParser.COMA);
					}
				}

				}
			}

			this.state = 187;
			this.match(pawnParser.CURLY_CLOSE_BRACKET);
			this.state = 189;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.SEMI) {
				{
				this.state = 188;
				this.match(pawnParser.SEMI);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumMember(): EnumMemberContext {
		let _localctx: EnumMemberContext = new EnumMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, pawnParser.RULE_enumMember);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 191;
			this.variable();
			this.state = 194;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.ASSIGMENT) {
				{
				this.state = 192;
				this.match(pawnParser.ASSIGMENT);
				this.state = 193;
				this.expresion();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumIterator(): EnumIteratorContext {
		let _localctx: EnumIteratorContext = new EnumIteratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, pawnParser.RULE_enumIterator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 196;
			this.match(pawnParser.OPEN_PARENTHESIS);
			this.state = 197;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.ASSIGMENT_PLUS) | (1 << pawnParser.ASSIGMENT_MULT) | (1 << pawnParser.ASSIGMENT_LEFT))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 198;
			this.match(pawnParser.INTEGER);
			this.state = 199;
			this.match(pawnParser.CLOSE_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public var_definition(): Var_definitionContext {
		let _localctx: Var_definitionContext = new Var_definitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, pawnParser.RULE_var_definition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 213;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.NEW:
				{
				{
				this.state = 201;
				this.match(pawnParser.NEW);
				this.state = 205;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (pawnParser.CONST - 56)) | (1 << (pawnParser.STATIC - 56)) | (1 << (pawnParser.STOCK - 56)) | (1 << (pawnParser.PUBLIC - 56)))) !== 0)) {
					{
					{
					this.state = 202;
					this.varModifires();
					}
					}
					this.state = 207;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				break;
			case pawnParser.CONST:
			case pawnParser.STATIC:
			case pawnParser.STOCK:
			case pawnParser.PUBLIC:
				{
				{
				this.state = 209;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 208;
					this.varModifires();
					}
					}
					this.state = 211;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (pawnParser.CONST - 56)) | (1 << (pawnParser.STATIC - 56)) | (1 << (pawnParser.STOCK - 56)) | (1 << (pawnParser.PUBLIC - 56)))) !== 0));
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 217;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				{
				this.state = 215;
				this.variable();
				}
				break;

			case 2:
				{
				this.state = 216;
				this.assigment();
				}
				break;
			}
			this.state = 226;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pawnParser.COMA) {
				{
				{
				this.state = 219;
				this.match(pawnParser.COMA);
				this.state = 222;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
				case 1:
					{
					this.state = 220;
					this.variable();
					}
					break;

				case 2:
					{
					this.state = 221;
					this.assigment();
					}
					break;
				}
				}
				}
				this.state = 228;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionDecl(): FunctionDeclContext {
		let _localctx: FunctionDeclContext = new FunctionDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, pawnParser.RULE_functionDecl);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 230;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (pawnParser.STOCK - 58)) | (1 << (pawnParser.FORWARD - 58)) | (1 << (pawnParser.NATIVE - 58)) | (1 << (pawnParser.PUBLIC - 58)))) !== 0)) {
				{
				this.state = 229;
				this.funcDeclModif();
				}
			}

			this.state = 233;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				{
				this.state = 232;
				this.tag();
				}
				break;
			}
			this.state = 235;
			this.match(pawnParser.IDENTIFIER);
			this.state = 236;
			this.match(pawnParser.OPEN_PARENTHESIS);
			this.state = 248;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.CURLY_OPEN_BRACKET || _la === pawnParser.BIT_AND || _la === pawnParser.CONST || _la === pawnParser.IDENTIFIER) {
				{
				this.state = 237;
				this.declParams();
				this.state = 242;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 238;
						this.match(pawnParser.COMA);
						this.state = 239;
						this.declParams();
						}
						}
					}
					this.state = 244;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
				}
				this.state = 246;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === pawnParser.COMA) {
					{
					this.state = 245;
					this.ellipse();
					}
				}

				}
			}

			this.state = 250;
			this.match(pawnParser.CLOSE_PARENTHESIS);
			this.state = 254;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.SEMI:
				{
				this.state = 251;
				this.match(pawnParser.SEMI);
				}
				break;
			case pawnParser.CURLY_OPEN_BRACKET:
			case pawnParser.RETURN:
			case pawnParser.NEW:
			case pawnParser.CONST:
			case pawnParser.STATIC:
			case pawnParser.STOCK:
			case pawnParser.PUBLIC:
			case pawnParser.IF:
			case pawnParser.SWITCH:
			case pawnParser.WHILE:
			case pawnParser.FOR:
			case pawnParser.DO:
			case pawnParser.IDENTIFIER:
				{
				this.state = 252;
				this.codeBlock();
				}
				break;
			case pawnParser.ASSIGMENT:
				{
				this.state = 253;
				this.nativeAssigment();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operatorOverload(): OperatorOverloadContext {
		let _localctx: OperatorOverloadContext = new OperatorOverloadContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, pawnParser.RULE_operatorOverload);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 256;
			this.funcDeclModif();
			}
			this.state = 258;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.CURLY_OPEN_BRACKET || _la === pawnParser.IDENTIFIER) {
				{
				this.state = 257;
				this.tag();
				}
			}

			this.state = 260;
			this.match(pawnParser.OPERATOR);
			this.state = 261;
			this.canBeOverloaded();
			this.state = 262;
			this.match(pawnParser.OPEN_PARENTHESIS);
			this.state = 274;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.CURLY_OPEN_BRACKET || _la === pawnParser.BIT_AND || _la === pawnParser.CONST || _la === pawnParser.IDENTIFIER) {
				{
				this.state = 263;
				this.declParams();
				this.state = 268;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 264;
						this.match(pawnParser.COMA);
						this.state = 265;
						this.declParams();
						}
						}
					}
					this.state = 270;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
				}
				this.state = 272;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === pawnParser.COMA) {
					{
					this.state = 271;
					this.ellipse();
					}
				}

				}
			}

			this.state = 276;
			this.match(pawnParser.CLOSE_PARENTHESIS);
			this.state = 280;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.SEMI:
				{
				this.state = 277;
				this.match(pawnParser.SEMI);
				}
				break;
			case pawnParser.CURLY_OPEN_BRACKET:
			case pawnParser.RETURN:
			case pawnParser.NEW:
			case pawnParser.CONST:
			case pawnParser.STATIC:
			case pawnParser.STOCK:
			case pawnParser.PUBLIC:
			case pawnParser.IF:
			case pawnParser.SWITCH:
			case pawnParser.WHILE:
			case pawnParser.FOR:
			case pawnParser.DO:
			case pawnParser.IDENTIFIER:
				{
				this.state = 278;
				this.codeBlock();
				}
				break;
			case pawnParser.ASSIGMENT:
				{
				this.state = 279;
				this.nativeAssigment();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nativeAssigment(): NativeAssigmentContext {
		let _localctx: NativeAssigmentContext = new NativeAssigmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, pawnParser.RULE_nativeAssigment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 282;
			this.match(pawnParser.ASSIGMENT);
			this.state = 283;
			this.match(pawnParser.IDENTIFIER);
			this.state = 284;
			this.match(pawnParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tag(): TagContext {
		let _localctx: TagContext = new TagContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, pawnParser.RULE_tag);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 297;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.IDENTIFIER:
				{
				this.state = 286;
				this.match(pawnParser.IDENTIFIER);
				}
				break;
			case pawnParser.CURLY_OPEN_BRACKET:
				{
				{
				this.state = 287;
				this.match(pawnParser.CURLY_OPEN_BRACKET);
				this.state = 288;
				this.match(pawnParser.IDENTIFIER);
				this.state = 293;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === pawnParser.COMA) {
					{
					{
					this.state = 289;
					this.match(pawnParser.COMA);
					this.state = 290;
					this.match(pawnParser.IDENTIFIER);
					}
					}
					this.state = 295;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 296;
				this.match(pawnParser.CURLY_CLOSE_BRACKET);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 299;
			this.match(pawnParser.COLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variable(): VariableContext {
		let _localctx: VariableContext = new VariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, pawnParser.RULE_variable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 302;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				{
				this.state = 301;
				this.tag();
				}
				break;
			}
			this.state = 304;
			this.match(pawnParser.IDENTIFIER);
			this.state = 308;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pawnParser.SQUARE_OPEN_BRACKET) {
				{
				{
				this.state = 305;
				this.arrayIndex();
				}
				}
				this.state = 310;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayIndex(): ArrayIndexContext {
		let _localctx: ArrayIndexContext = new ArrayIndexContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, pawnParser.RULE_arrayIndex);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 311;
			this.match(pawnParser.SQUARE_OPEN_BRACKET);
			this.state = 313;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.OPEN_PARENTHESIS) | (1 << pawnParser.CURLY_OPEN_BRACKET) | (1 << pawnParser.MINUS) | (1 << pawnParser.INCREMENTS) | (1 << pawnParser.DECREMENTS))) !== 0) || _la === pawnParser.NOT || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (pawnParser.SIZEOF - 75)) | (1 << (pawnParser.TRUE - 75)) | (1 << (pawnParser.FALSE - 75)) | (1 << (pawnParser.SHARPSTRING - 75)) | (1 << (pawnParser.STRING - 75)) | (1 << (pawnParser.IDENTIFIER - 75)) | (1 << (pawnParser.HEX - 75)) | (1 << (pawnParser.INTEGER - 75)) | (1 << (pawnParser.FLOAT - 75)))) !== 0)) {
				{
				this.state = 312;
				this.expresion();
				}
			}

			this.state = 315;
			this.match(pawnParser.SQUARE_CLOSE_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public funcDeclModif(): FuncDeclModifContext {
		let _localctx: FuncDeclModifContext = new FuncDeclModifContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, pawnParser.RULE_funcDeclModif);
		try {
			this.state = 320;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.STOCK:
			case pawnParser.PUBLIC:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 317;
				this.funcModif();
				}
				break;
			case pawnParser.FORWARD:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 318;
				this.match(pawnParser.FORWARD);
				}
				break;
			case pawnParser.NATIVE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 319;
				this.match(pawnParser.NATIVE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public funcModif(): FuncModifContext {
		let _localctx: FuncModifContext = new FuncModifContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, pawnParser.RULE_funcModif);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 322;
			_la = this._input.LA(1);
			if (!(_la === pawnParser.STOCK || _la === pawnParser.PUBLIC)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, pawnParser.RULE_statement);
		try {
			this.state = 333;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.CURLY_OPEN_BRACKET:
			case pawnParser.RETURN:
			case pawnParser.NEW:
			case pawnParser.CONST:
			case pawnParser.STATIC:
			case pawnParser.STOCK:
			case pawnParser.PUBLIC:
			case pawnParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 328;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
				case 1:
					{
					this.state = 324;
					this.var_definition();
					}
					break;

				case 2:
					{
					this.state = 325;
					this.assigment();
					}
					break;

				case 3:
					{
					this.state = 326;
					this.functionCall();
					}
					break;

				case 4:
					{
					this.state = 327;
					this.return();
					}
					break;
				}
				this.state = 330;
				this.match(pawnParser.SEMI);
				}
				}
				break;
			case pawnParser.IF:
			case pawnParser.SWITCH:
			case pawnParser.WHILE:
			case pawnParser.FOR:
			case pawnParser.DO:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 332;
				this.controlStatments();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public controlStatments(): ControlStatmentsContext {
		let _localctx: ControlStatmentsContext = new ControlStatmentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, pawnParser.RULE_controlStatments);
		try {
			this.state = 338;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.IF:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 335;
				this.if_statement();
				}
				break;
			case pawnParser.WHILE:
			case pawnParser.FOR:
			case pawnParser.DO:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 336;
				this.cycles();
				}
				break;
			case pawnParser.SWITCH:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 337;
				this.switch();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assigment(): AssigmentContext {
		let _localctx: AssigmentContext = new AssigmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, pawnParser.RULE_assigment);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 340;
			this.variable();
			this.state = 341;
			this.assigments();
			this.state = 344;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				{
				this.state = 342;
				this.expresion();
				}
				break;

			case 2:
				{
				this.state = 343;
				this.arrayInit();
				}
				break;
			}
			this.state = 353;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.ASSIGMENT) | (1 << pawnParser.ASSIGMENT_PLUS) | (1 << pawnParser.ASSIGMENT_MINUS) | (1 << pawnParser.ASSIGMENT_MULT) | (1 << pawnParser.ASSIGMENT_DIV) | (1 << pawnParser.ASSIGMENT_REMAINDE) | (1 << pawnParser.ASSIGMENT_AND) | (1 << pawnParser.ASSIGMENT_OR) | (1 << pawnParser.ASSIGMENT_XOR) | (1 << pawnParser.ASSIGMENT_RIGHT) | (1 << pawnParser.ASSIGMENT_RIGHT_LOG) | (1 << pawnParser.ASSIGMENT_LEFT))) !== 0)) {
				{
				{
				this.state = 346;
				this.assigments();
				this.state = 349;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
				case 1:
					{
					this.state = 347;
					this.expresion();
					}
					break;

				case 2:
					{
					this.state = 348;
					this.arrayInit();
					}
					break;
				}
				}
				}
				this.state = 355;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayInit(): ArrayInitContext {
		let _localctx: ArrayInitContext = new ArrayInitContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, pawnParser.RULE_arrayInit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 356;
			this.match(pawnParser.CURLY_OPEN_BRACKET);
			this.state = 357;
			this.arrayInitMember();
			this.state = 362;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pawnParser.COMA) {
				{
				{
				this.state = 358;
				this.match(pawnParser.COMA);
				this.state = 359;
				this.arrayInitMember();
				}
				}
				this.state = 364;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 365;
			this.match(pawnParser.CURLY_CLOSE_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayInitMember(): ArrayInitMemberContext {
		let _localctx: ArrayInitMemberContext = new ArrayInitMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, pawnParser.RULE_arrayInitMember);
		try {
			this.state = 376;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 368;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
				case 1:
					{
					this.state = 367;
					this.tag();
					}
					break;
				}
				this.state = 373;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case pawnParser.IDENTIFIER:
					{
					this.state = 370;
					this.match(pawnParser.IDENTIFIER);
					}
					break;
				case pawnParser.MINUS:
				case pawnParser.HEX:
				case pawnParser.INTEGER:
				case pawnParser.FLOAT:
					{
					this.state = 371;
					this.number();
					}
					break;
				case pawnParser.SHARPSTRING:
				case pawnParser.STRING:
					{
					this.state = 372;
					this.string();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 375;
				this.arrayInit();
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assigments(): AssigmentsContext {
		let _localctx: AssigmentsContext = new AssigmentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, pawnParser.RULE_assigments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 378;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.ASSIGMENT) | (1 << pawnParser.ASSIGMENT_PLUS) | (1 << pawnParser.ASSIGMENT_MINUS) | (1 << pawnParser.ASSIGMENT_MULT) | (1 << pawnParser.ASSIGMENT_DIV) | (1 << pawnParser.ASSIGMENT_REMAINDE) | (1 << pawnParser.ASSIGMENT_AND) | (1 << pawnParser.ASSIGMENT_OR) | (1 << pawnParser.ASSIGMENT_XOR) | (1 << pawnParser.ASSIGMENT_RIGHT) | (1 << pawnParser.ASSIGMENT_RIGHT_LOG) | (1 << pawnParser.ASSIGMENT_LEFT))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public grouping(): GroupingContext {
		let _localctx: GroupingContext = new GroupingContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, pawnParser.RULE_grouping);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 381;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.CURLY_OPEN_BRACKET || _la === pawnParser.IDENTIFIER) {
				{
				this.state = 380;
				this.tag();
				}
			}

			this.state = 383;
			this.match(pawnParser.OPEN_PARENTHESIS);
			this.state = 384;
			this.expresion();
			this.state = 385;
			this.match(pawnParser.CLOSE_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constGrouping(): ConstGroupingContext {
		let _localctx: ConstGroupingContext = new ConstGroupingContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, pawnParser.RULE_constGrouping);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 388;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.CURLY_OPEN_BRACKET || _la === pawnParser.IDENTIFIER) {
				{
				this.state = 387;
				this.tag();
				}
			}

			this.state = 390;
			this.match(pawnParser.OPEN_PARENTHESIS);
			this.state = 391;
			this.constExpresion();
			this.state = 392;
			this.match(pawnParser.CLOSE_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expresion(): ExpresionContext {
		let _localctx: ExpresionContext = new ExpresionContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, pawnParser.RULE_expresion);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 395;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				{
				this.state = 394;
				this.preOperators();
				}
				break;
			}
			this.state = 403;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
			case 1:
				{
				this.state = 397;
				this.rValue();
				this.state = 399;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (pawnParser.PLUS - 21)) | (1 << (pawnParser.MINUS - 21)) | (1 << (pawnParser.MULTY - 21)) | (1 << (pawnParser.DIV - 21)) | (1 << (pawnParser.REMAINDE - 21)) | (1 << (pawnParser.INCREMENTS - 21)) | (1 << (pawnParser.DECREMENTS - 21)) | (1 << (pawnParser.EQUAL - 21)) | (1 << (pawnParser.NOTEQUAL - 21)) | (1 << (pawnParser.LESS - 21)) | (1 << (pawnParser.LARGER - 21)) | (1 << (pawnParser.LESSEQ - 21)) | (1 << (pawnParser.LARGEREQ - 21)) | (1 << (pawnParser.OR - 21)) | (1 << (pawnParser.AND - 21)) | (1 << (pawnParser.NOT - 21)) | (1 << (pawnParser.BIT_AND - 21)) | (1 << (pawnParser.BIT_OR - 21)) | (1 << (pawnParser.BIT_XOR - 21)) | (1 << (pawnParser.BIT_COMPLEMEN - 21)) | (1 << (pawnParser.BIT_RIGHT - 21)) | (1 << (pawnParser.BIT_LEFT - 21)) | (1 << (pawnParser.BIT_RIGHT_LOG - 21)))) !== 0)) {
					{
					this.state = 398;
					this.operation();
					}
				}

				}
				break;

			case 2:
				{
				this.state = 401;
				this.grouping();
				}
				break;

			case 3:
				{
				this.state = 402;
				this.ternarOperator();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constExpresion(): ConstExpresionContext {
		let _localctx: ConstExpresionContext = new ConstExpresionContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, pawnParser.RULE_constExpresion);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 406;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
			case 1:
				{
				this.state = 405;
				this.preOperators();
				}
				break;
			}
			this.state = 414;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
			case 1:
				{
				this.state = 408;
				this.varOrLiteral();
				this.state = 410;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (pawnParser.PLUS - 21)) | (1 << (pawnParser.MINUS - 21)) | (1 << (pawnParser.MULTY - 21)) | (1 << (pawnParser.DIV - 21)) | (1 << (pawnParser.REMAINDE - 21)) | (1 << (pawnParser.INCREMENTS - 21)) | (1 << (pawnParser.DECREMENTS - 21)) | (1 << (pawnParser.EQUAL - 21)) | (1 << (pawnParser.NOTEQUAL - 21)) | (1 << (pawnParser.LESS - 21)) | (1 << (pawnParser.LARGER - 21)) | (1 << (pawnParser.LESSEQ - 21)) | (1 << (pawnParser.LARGEREQ - 21)) | (1 << (pawnParser.OR - 21)) | (1 << (pawnParser.AND - 21)) | (1 << (pawnParser.NOT - 21)) | (1 << (pawnParser.BIT_AND - 21)) | (1 << (pawnParser.BIT_OR - 21)) | (1 << (pawnParser.BIT_XOR - 21)) | (1 << (pawnParser.BIT_COMPLEMEN - 21)) | (1 << (pawnParser.BIT_RIGHT - 21)) | (1 << (pawnParser.BIT_LEFT - 21)) | (1 << (pawnParser.BIT_RIGHT_LOG - 21)))) !== 0)) {
					{
					this.state = 409;
					this.operation();
					}
				}

				}
				break;

			case 2:
				{
				this.state = 412;
				this.constGrouping();
				}
				break;

			case 3:
				{
				this.state = 413;
				this.arrayInit();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ternarOperator(): TernarOperatorContext {
		let _localctx: TernarOperatorContext = new TernarOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, pawnParser.RULE_ternarOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 421;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
			case 1:
				{
				this.state = 416;
				this.rValue();
				this.state = 418;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (pawnParser.PLUS - 21)) | (1 << (pawnParser.MINUS - 21)) | (1 << (pawnParser.MULTY - 21)) | (1 << (pawnParser.DIV - 21)) | (1 << (pawnParser.REMAINDE - 21)) | (1 << (pawnParser.INCREMENTS - 21)) | (1 << (pawnParser.DECREMENTS - 21)) | (1 << (pawnParser.EQUAL - 21)) | (1 << (pawnParser.NOTEQUAL - 21)) | (1 << (pawnParser.LESS - 21)) | (1 << (pawnParser.LARGER - 21)) | (1 << (pawnParser.LESSEQ - 21)) | (1 << (pawnParser.LARGEREQ - 21)) | (1 << (pawnParser.OR - 21)) | (1 << (pawnParser.AND - 21)) | (1 << (pawnParser.NOT - 21)) | (1 << (pawnParser.BIT_AND - 21)) | (1 << (pawnParser.BIT_OR - 21)) | (1 << (pawnParser.BIT_XOR - 21)) | (1 << (pawnParser.BIT_COMPLEMEN - 21)) | (1 << (pawnParser.BIT_RIGHT - 21)) | (1 << (pawnParser.BIT_LEFT - 21)) | (1 << (pawnParser.BIT_RIGHT_LOG - 21)))) !== 0)) {
					{
					this.state = 417;
					this.operation();
					}
				}

				}
				break;

			case 2:
				{
				this.state = 420;
				this.grouping();
				}
				break;
			}
			this.state = 423;
			this.match(pawnParser.QUESTION);
			this.state = 424;
			this.expresion();
			this.state = 425;
			this.match(pawnParser.COLON);
			this.state = 426;
			this.expresion();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public preOperators(): PreOperatorsContext {
		let _localctx: PreOperatorsContext = new PreOperatorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, pawnParser.RULE_preOperators);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 428;
			_la = this._input.LA(1);
			if (!(((((_la - 22)) & ~0x1F) === 0 && ((1 << (_la - 22)) & ((1 << (pawnParser.MINUS - 22)) | (1 << (pawnParser.INCREMENTS - 22)) | (1 << (pawnParser.DECREMENTS - 22)) | (1 << (pawnParser.NOT - 22)))) !== 0) || _la === pawnParser.SIZEOF)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operation(): OperationContext {
		let _localctx: OperationContext = new OperationContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, pawnParser.RULE_operation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 430;
			this.operator();
			this.state = 432;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.OPEN_PARENTHESIS) | (1 << pawnParser.CURLY_OPEN_BRACKET) | (1 << pawnParser.MINUS) | (1 << pawnParser.INCREMENTS) | (1 << pawnParser.DECREMENTS))) !== 0) || _la === pawnParser.NOT || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (pawnParser.SIZEOF - 75)) | (1 << (pawnParser.TRUE - 75)) | (1 << (pawnParser.FALSE - 75)) | (1 << (pawnParser.SHARPSTRING - 75)) | (1 << (pawnParser.STRING - 75)) | (1 << (pawnParser.IDENTIFIER - 75)) | (1 << (pawnParser.HEX - 75)) | (1 << (pawnParser.INTEGER - 75)) | (1 << (pawnParser.FLOAT - 75)))) !== 0)) {
				{
				this.state = 431;
				this.expresion();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public varOrLiteral(): VarOrLiteralContext {
		let _localctx: VarOrLiteralContext = new VarOrLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, pawnParser.RULE_varOrLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 436;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 56, this._ctx) ) {
			case 1:
				{
				this.state = 434;
				this.literal();
				}
				break;

			case 2:
				{
				this.state = 435;
				this.variable();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declParams(): DeclParamsContext {
		let _localctx: DeclParamsContext = new DeclParamsContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, pawnParser.RULE_declParams);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 439;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.CONST) {
				{
				this.state = 438;
				this.match(pawnParser.CONST);
				}
			}

			this.state = 442;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.BIT_AND) {
				{
				this.state = 441;
				this.reference();
				}
			}

			this.state = 444;
			this.variable();
			this.state = 457;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.ASSIGMENT) {
				{
				this.state = 445;
				this.match(pawnParser.ASSIGMENT);
				this.state = 455;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 60, this._ctx) ) {
				case 1:
					{
					this.state = 446;
					this.constExpresion();
					}
					break;

				case 2:
					{
					{
					this.state = 447;
					this.sizeof();
					this.state = 453;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case pawnParser.CURLY_OPEN_BRACKET:
					case pawnParser.IDENTIFIER:
						{
						this.state = 448;
						this.variable();
						}
						break;
					case pawnParser.OPEN_PARENTHESIS:
						{
						this.state = 449;
						this.match(pawnParser.OPEN_PARENTHESIS);
						this.state = 450;
						this.variable();
						this.state = 451;
						this.match(pawnParser.CLOSE_PARENTHESIS);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
					break;
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ellipse(): EllipseContext {
		let _localctx: EllipseContext = new EllipseContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, pawnParser.RULE_ellipse);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 459;
			this.match(pawnParser.COMA);
			this.state = 461;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.CURLY_OPEN_BRACKET || _la === pawnParser.IDENTIFIER) {
				{
				this.state = 460;
				this.tag();
				}
			}

			this.state = 463;
			this.match(pawnParser.PERIOD_FUNC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public reference(): ReferenceContext {
		let _localctx: ReferenceContext = new ReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, pawnParser.RULE_reference);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 465;
			this.match(pawnParser.BIT_AND);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public varModifires(): VarModifiresContext {
		let _localctx: VarModifiresContext = new VarModifiresContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, pawnParser.RULE_varModifires);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 467;
			_la = this._input.LA(1);
			if (!(((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (pawnParser.CONST - 56)) | (1 << (pawnParser.STATIC - 56)) | (1 << (pawnParser.STOCK - 56)) | (1 << (pawnParser.PUBLIC - 56)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rValue(): RValueContext {
		let _localctx: RValueContext = new RValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, pawnParser.RULE_rValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 472;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 63, this._ctx) ) {
			case 1:
				{
				this.state = 469;
				this.varOrLiteral();
				}
				break;

			case 2:
				{
				this.state = 470;
				this.functionCall();
				}
				break;

			case 3:
				{
				this.state = 471;
				this.grouping();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constRValue(): ConstRValueContext {
		let _localctx: ConstRValueContext = new ConstRValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, pawnParser.RULE_constRValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 476;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 64, this._ctx) ) {
			case 1:
				{
				this.state = 474;
				this.varOrLiteral();
				}
				break;

			case 2:
				{
				this.state = 475;
				this.constGrouping();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sizeof(): SizeofContext {
		let _localctx: SizeofContext = new SizeofContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, pawnParser.RULE_sizeof);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 478;
			this.match(pawnParser.SIZEOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, pawnParser.RULE_number);
		try {
			this.state = 483;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 65, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 480;
				this.integer();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 481;
				this.float();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 482;
				this.hex();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public integer(): IntegerContext {
		let _localctx: IntegerContext = new IntegerContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, pawnParser.RULE_integer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 486;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.MINUS) {
				{
				this.state = 485;
				this.match(pawnParser.MINUS);
				}
			}

			this.state = 488;
			this.match(pawnParser.INTEGER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public float(): FloatContext {
		let _localctx: FloatContext = new FloatContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, pawnParser.RULE_float);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 491;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.MINUS) {
				{
				this.state = 490;
				this.match(pawnParser.MINUS);
				}
			}

			this.state = 493;
			this.match(pawnParser.FLOAT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public hex(): HexContext {
		let _localctx: HexContext = new HexContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, pawnParser.RULE_hex);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 495;
			this.match(pawnParser.HEX);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operator(): OperatorContext {
		let _localctx: OperatorContext = new OperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, pawnParser.RULE_operator);
		try {
			this.state = 500;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.PLUS:
			case pawnParser.MINUS:
			case pawnParser.MULTY:
			case pawnParser.DIV:
			case pawnParser.REMAINDE:
			case pawnParser.INCREMENTS:
			case pawnParser.DECREMENTS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 497;
				this.arefmeticOperator();
				}
				break;
			case pawnParser.EQUAL:
			case pawnParser.NOTEQUAL:
			case pawnParser.LESS:
			case pawnParser.LARGER:
			case pawnParser.LESSEQ:
			case pawnParser.LARGEREQ:
			case pawnParser.OR:
			case pawnParser.AND:
			case pawnParser.NOT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 498;
				this.logicOperator();
				}
				break;
			case pawnParser.BIT_AND:
			case pawnParser.BIT_OR:
			case pawnParser.BIT_XOR:
			case pawnParser.BIT_COMPLEMEN:
			case pawnParser.BIT_RIGHT:
			case pawnParser.BIT_LEFT:
			case pawnParser.BIT_RIGHT_LOG:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 499;
				this.bitwiseOperator();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public canBeOverloaded(): CanBeOverloadedContext {
		let _localctx: CanBeOverloadedContext = new CanBeOverloadedContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, pawnParser.RULE_canBeOverloaded);
		try {
			this.state = 505;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.PLUS:
			case pawnParser.MINUS:
			case pawnParser.MULTY:
			case pawnParser.DIV:
			case pawnParser.REMAINDE:
			case pawnParser.INCREMENTS:
			case pawnParser.DECREMENTS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 502;
				this.arefmeticOperator();
				}
				break;
			case pawnParser.EQUAL:
			case pawnParser.NOTEQUAL:
			case pawnParser.LESS:
			case pawnParser.LARGER:
			case pawnParser.LESSEQ:
			case pawnParser.LARGEREQ:
			case pawnParser.NOT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 503;
				this.compareOperator();
				}
				break;
			case pawnParser.ASSIGMENT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 504;
				this.match(pawnParser.ASSIGMENT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arefmeticOperator(): ArefmeticOperatorContext {
		let _localctx: ArefmeticOperatorContext = new ArefmeticOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, pawnParser.RULE_arefmeticOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 507;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.PLUS) | (1 << pawnParser.MINUS) | (1 << pawnParser.MULTY) | (1 << pawnParser.DIV) | (1 << pawnParser.REMAINDE) | (1 << pawnParser.INCREMENTS) | (1 << pawnParser.DECREMENTS))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public logicOperator(): LogicOperatorContext {
		let _localctx: LogicOperatorContext = new LogicOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, pawnParser.RULE_logicOperator);
		try {
			this.state = 512;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.OR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 509;
				this.match(pawnParser.OR);
				}
				break;
			case pawnParser.AND:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 510;
				this.match(pawnParser.AND);
				}
				break;
			case pawnParser.EQUAL:
			case pawnParser.NOTEQUAL:
			case pawnParser.LESS:
			case pawnParser.LARGER:
			case pawnParser.LESSEQ:
			case pawnParser.LARGEREQ:
			case pawnParser.NOT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 511;
				this.compareOperator();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compareOperator(): CompareOperatorContext {
		let _localctx: CompareOperatorContext = new CompareOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, pawnParser.RULE_compareOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 514;
			_la = this._input.LA(1);
			if (!(((((_la - 28)) & ~0x1F) === 0 && ((1 << (_la - 28)) & ((1 << (pawnParser.EQUAL - 28)) | (1 << (pawnParser.NOTEQUAL - 28)) | (1 << (pawnParser.LESS - 28)) | (1 << (pawnParser.LARGER - 28)) | (1 << (pawnParser.LESSEQ - 28)) | (1 << (pawnParser.LARGEREQ - 28)) | (1 << (pawnParser.NOT - 28)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bitwiseOperator(): BitwiseOperatorContext {
		let _localctx: BitwiseOperatorContext = new BitwiseOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, pawnParser.RULE_bitwiseOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 516;
			_la = this._input.LA(1);
			if (!(((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (pawnParser.BIT_AND - 39)) | (1 << (pawnParser.BIT_OR - 39)) | (1 << (pawnParser.BIT_XOR - 39)) | (1 << (pawnParser.BIT_COMPLEMEN - 39)) | (1 << (pawnParser.BIT_RIGHT - 39)) | (1 << (pawnParser.BIT_LEFT - 39)) | (1 << (pawnParser.BIT_RIGHT_LOG - 39)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public if_statement(): If_statementContext {
		let _localctx: If_statementContext = new If_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, pawnParser.RULE_if_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 518;
			this.match(pawnParser.IF);
			this.state = 519;
			this.condition();
			this.state = 520;
			this.codeBlock();
			this.state = 522;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 71, this._ctx) ) {
			case 1:
				{
				this.state = 521;
				this.else_statement();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public else_statement(): Else_statementContext {
		let _localctx: Else_statementContext = new Else_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, pawnParser.RULE_else_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 524;
			this.match(pawnParser.ELSE);
			this.state = 527;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 72, this._ctx) ) {
			case 1:
				{
				this.state = 525;
				this.if_statement();
				}
				break;

			case 2:
				{
				this.state = 526;
				this.codeBlock();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switch(): SwitchContext {
		let _localctx: SwitchContext = new SwitchContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, pawnParser.RULE_switch);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 529;
			this.match(pawnParser.SWITCH);
			this.state = 530;
			this.condition();
			this.state = 531;
			this.match(pawnParser.CURLY_OPEN_BRACKET);
			this.state = 535;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pawnParser.CASE) {
				{
				{
				this.state = 532;
				this.case();
				}
				}
				this.state = 537;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 539;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.DEFAULT) {
				{
				this.state = 538;
				this.default();
				}
			}

			this.state = 541;
			this.match(pawnParser.CURLY_CLOSE_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public case(): CaseContext {
		let _localctx: CaseContext = new CaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, pawnParser.RULE_case);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 543;
			this.match(pawnParser.CASE);
			this.state = 544;
			this.case_list();
			this.state = 549;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pawnParser.COMA) {
				{
				{
				this.state = 545;
				this.match(pawnParser.COMA);
				this.state = 546;
				this.case_list();
				}
				}
				this.state = 551;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 552;
			this.match(pawnParser.COLON);
			this.state = 553;
			this.codeBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public default(): DefaultContext {
		let _localctx: DefaultContext = new DefaultContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, pawnParser.RULE_default);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 555;
			this.match(pawnParser.DEFAULT);
			this.state = 556;
			this.match(pawnParser.COLON);
			this.state = 557;
			this.codeBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public case_list(): Case_listContext {
		let _localctx: Case_listContext = new Case_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, pawnParser.RULE_case_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 561;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.IDENTIFIER:
				{
				this.state = 559;
				this.match(pawnParser.IDENTIFIER);
				}
				break;
			case pawnParser.MINUS:
			case pawnParser.HEX:
			case pawnParser.INTEGER:
			case pawnParser.FLOAT:
				{
				this.state = 560;
				this.number();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 564;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.PERIOD) {
				{
				this.state = 563;
				this.range();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public range(): RangeContext {
		let _localctx: RangeContext = new RangeContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, pawnParser.RULE_range);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 566;
			this.match(pawnParser.PERIOD);
			this.state = 569;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.IDENTIFIER:
				{
				this.state = 567;
				this.match(pawnParser.IDENTIFIER);
				}
				break;
			case pawnParser.MINUS:
			case pawnParser.HEX:
			case pawnParser.INTEGER:
			case pawnParser.FLOAT:
				{
				this.state = 568;
				this.number();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public condition(): ConditionContext {
		let _localctx: ConditionContext = new ConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, pawnParser.RULE_condition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 571;
			this.match(pawnParser.OPEN_PARENTHESIS);
			this.state = 572;
			this.expresion();
			this.state = 573;
			this.match(pawnParser.CLOSE_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public codeBlock(): CodeBlockContext {
		let _localctx: CodeBlockContext = new CodeBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, pawnParser.RULE_codeBlock);
		let _la: number;
		try {
			this.state = 584;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 80, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 575;
				this.match(pawnParser.CURLY_OPEN_BRACKET);
				this.state = 579;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === pawnParser.CURLY_OPEN_BRACKET || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (pawnParser.RETURN - 53)) | (1 << (pawnParser.NEW - 53)) | (1 << (pawnParser.CONST - 53)) | (1 << (pawnParser.STATIC - 53)) | (1 << (pawnParser.STOCK - 53)) | (1 << (pawnParser.PUBLIC - 53)) | (1 << (pawnParser.IF - 53)) | (1 << (pawnParser.SWITCH - 53)) | (1 << (pawnParser.WHILE - 53)) | (1 << (pawnParser.FOR - 53)) | (1 << (pawnParser.DO - 53)))) !== 0) || _la === pawnParser.IDENTIFIER) {
					{
					{
					this.state = 576;
					this.statement();
					}
					}
					this.state = 581;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 582;
				this.match(pawnParser.CURLY_CLOSE_BRACKET);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 583;
				this.statement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public return(): ReturnContext {
		let _localctx: ReturnContext = new ReturnContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, pawnParser.RULE_return);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 586;
			this.match(pawnParser.RETURN);
			this.state = 588;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.OPEN_PARENTHESIS) | (1 << pawnParser.CURLY_OPEN_BRACKET) | (1 << pawnParser.MINUS) | (1 << pawnParser.INCREMENTS) | (1 << pawnParser.DECREMENTS))) !== 0) || _la === pawnParser.NOT || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (pawnParser.SIZEOF - 75)) | (1 << (pawnParser.TRUE - 75)) | (1 << (pawnParser.FALSE - 75)) | (1 << (pawnParser.SHARPSTRING - 75)) | (1 << (pawnParser.STRING - 75)) | (1 << (pawnParser.IDENTIFIER - 75)) | (1 << (pawnParser.HEX - 75)) | (1 << (pawnParser.INTEGER - 75)) | (1 << (pawnParser.FLOAT - 75)))) !== 0)) {
				{
				this.state = 587;
				this.expresion();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cycles(): CyclesContext {
		let _localctx: CyclesContext = new CyclesContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, pawnParser.RULE_cycles);
		try {
			this.state = 593;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.WHILE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 590;
				this.while();
				}
				break;
			case pawnParser.FOR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 591;
				this.for();
				}
				break;
			case pawnParser.DO:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 592;
				this.do();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public do(): DoContext {
		let _localctx: DoContext = new DoContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, pawnParser.RULE_do);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 595;
			this.match(pawnParser.DO);
			this.state = 596;
			this.cycleBody();
			this.state = 599;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 83, this._ctx) ) {
			case 1:
				{
				this.state = 597;
				this.match(pawnParser.WHILE);
				this.state = 598;
				this.condition();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public while(): WhileContext {
		let _localctx: WhileContext = new WhileContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, pawnParser.RULE_while);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 601;
			this.match(pawnParser.WHILE);
			this.state = 602;
			this.condition();
			this.state = 603;
			this.cycleBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public for(): ForContext {
		let _localctx: ForContext = new ForContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, pawnParser.RULE_for);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 605;
			this.match(pawnParser.FOR);
			this.state = 606;
			this.match(pawnParser.OPEN_PARENTHESIS);
			this.state = 607;
			this.var_definition();
			this.state = 608;
			this.match(pawnParser.SEMI);
			this.state = 609;
			this.expresion();
			this.state = 610;
			this.match(pawnParser.SEMI);
			this.state = 611;
			this.expresion();
			this.state = 612;
			this.match(pawnParser.CLOSE_PARENTHESIS);
			this.state = 613;
			this.cycleBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cycleBody(): CycleBodyContext {
		let _localctx: CycleBodyContext = new CycleBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, pawnParser.RULE_cycleBody);
		let _la: number;
		try {
			this.state = 626;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 86, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 615;
				this.cycleKeywords();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 616;
				this.match(pawnParser.CURLY_OPEN_BRACKET);
				this.state = 621;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === pawnParser.CURLY_OPEN_BRACKET || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (pawnParser.RETURN - 53)) | (1 << (pawnParser.NEW - 53)) | (1 << (pawnParser.CONST - 53)) | (1 << (pawnParser.STATIC - 53)) | (1 << (pawnParser.STOCK - 53)) | (1 << (pawnParser.PUBLIC - 53)) | (1 << (pawnParser.IF - 53)) | (1 << (pawnParser.SWITCH - 53)) | (1 << (pawnParser.WHILE - 53)) | (1 << (pawnParser.FOR - 53)) | (1 << (pawnParser.DO - 53)) | (1 << (pawnParser.CONTINUE - 53)) | (1 << (pawnParser.BREAK - 53)))) !== 0) || _la === pawnParser.IDENTIFIER) {
					{
					this.state = 619;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case pawnParser.CURLY_OPEN_BRACKET:
					case pawnParser.RETURN:
					case pawnParser.NEW:
					case pawnParser.CONST:
					case pawnParser.STATIC:
					case pawnParser.STOCK:
					case pawnParser.PUBLIC:
					case pawnParser.IF:
					case pawnParser.SWITCH:
					case pawnParser.WHILE:
					case pawnParser.FOR:
					case pawnParser.DO:
					case pawnParser.IDENTIFIER:
						{
						this.state = 617;
						this.statement();
						}
						break;
					case pawnParser.CONTINUE:
					case pawnParser.BREAK:
						{
						this.state = 618;
						this.cycleKeywords();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 623;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 624;
				this.match(pawnParser.CURLY_CLOSE_BRACKET);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 625;
				this.statement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cycleKeywords(): CycleKeywordsContext {
		let _localctx: CycleKeywordsContext = new CycleKeywordsContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, pawnParser.RULE_cycleKeywords);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 628;
			_la = this._input.LA(1);
			if (!(_la === pawnParser.CONTINUE || _la === pawnParser.BREAK)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 629;
			this.match(pawnParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, pawnParser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 632;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.CURLY_OPEN_BRACKET || _la === pawnParser.IDENTIFIER) {
				{
				this.state = 631;
				this.tag();
				}
			}

			this.state = 637;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.SHARPSTRING:
			case pawnParser.STRING:
				{
				this.state = 634;
				this.string();
				}
				break;
			case pawnParser.MINUS:
			case pawnParser.HEX:
			case pawnParser.INTEGER:
			case pawnParser.FLOAT:
				{
				this.state = 635;
				this.number();
				}
				break;
			case pawnParser.TRUE:
			case pawnParser.FALSE:
				{
				this.state = 636;
				this.bool_const();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bool_const(): Bool_constContext {
		let _localctx: Bool_constContext = new Bool_constContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, pawnParser.RULE_bool_const);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 639;
			_la = this._input.LA(1);
			if (!(_la === pawnParser.TRUE || _la === pawnParser.FALSE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public string(): StringContext {
		let _localctx: StringContext = new StringContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, pawnParser.RULE_string);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 641;
			_la = this._input.LA(1);
			if (!(_la === pawnParser.SHARPSTRING || _la === pawnParser.STRING)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 645;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 89, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 642;
					this.string();
					}
					}
				}
				this.state = 647;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 89, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionCall(): FunctionCallContext {
		let _localctx: FunctionCallContext = new FunctionCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, pawnParser.RULE_functionCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 649;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 90, this._ctx) ) {
			case 1:
				{
				this.state = 648;
				this.tag();
				}
				break;
			}
			this.state = 651;
			this.match(pawnParser.IDENTIFIER);
			this.state = 652;
			this.match(pawnParser.OPEN_PARENTHESIS);
			this.state = 661;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.OPEN_PARENTHESIS) | (1 << pawnParser.CURLY_OPEN_BRACKET) | (1 << pawnParser.MINUS) | (1 << pawnParser.INCREMENTS) | (1 << pawnParser.DECREMENTS))) !== 0) || _la === pawnParser.NOT || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (pawnParser.SIZEOF - 75)) | (1 << (pawnParser.TRUE - 75)) | (1 << (pawnParser.FALSE - 75)) | (1 << (pawnParser.SHARPSTRING - 75)) | (1 << (pawnParser.STRING - 75)) | (1 << (pawnParser.IDENTIFIER - 75)) | (1 << (pawnParser.HEX - 75)) | (1 << (pawnParser.INTEGER - 75)) | (1 << (pawnParser.FLOAT - 75)))) !== 0)) {
				{
				this.state = 653;
				this.expresion();
				this.state = 658;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === pawnParser.COMA) {
					{
					{
					this.state = 654;
					this.match(pawnParser.COMA);
					this.state = 655;
					this.expresion();
					}
					}
					this.state = 660;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 663;
			this.match(pawnParser.CLOSE_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public docs(): DocsContext {
		let _localctx: DocsContext = new DocsContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, pawnParser.RULE_docs);
		try {
			this.state = 667;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.DocBlock:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 665;
				this.docBlock();
				}
				break;
			case pawnParser.DocLine:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 666;
				this.docLine();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public docBlock(): DocBlockContext {
		let _localctx: DocBlockContext = new DocBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, pawnParser.RULE_docBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 669;
			this.match(pawnParser.DocBlock);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public docLine(): DocLineContext {
		let _localctx: DocLineContext = new DocLineContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, pawnParser.RULE_docLine);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 671;
			this.match(pawnParser.DocLine);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03k\u02A4\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x03" +
		"\x02\x07\x02\x8C\n\x02\f\x02\x0E\x02\x8F\v\x02\x03\x02\x07\x02\x92\n\x02" +
		"\f\x02\x0E\x02\x95\v\x02\x03\x02\x03\x02\x03\x03\x07\x03\x9A\n\x03\f\x03" +
		"\x0E\x03\x9D\v\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\xA4" +
		"\n\x03\x03\x03\x05\x03\xA7\n\x03\x03\x04\x03\x04\x05\x04\xAB\n\x04\x03" +
		"\x04\x05\x04\xAE\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04\xB4\n\x04" +
		"\f\x04\x0E\x04\xB7\v\x04\x03\x04\x05\x04\xBA\n\x04\x05\x04\xBC\n\x04\x03" +
		"\x04\x03\x04\x05\x04\xC0\n\x04\x03\x05\x03\x05\x03\x05\x05\x05\xC5\n\x05" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x07\x07\xCE\n" +
		"\x07\f\x07\x0E\x07\xD1\v\x07\x03\x07\x06\x07\xD4\n\x07\r\x07\x0E\x07\xD5" +
		"\x05\x07\xD8\n\x07\x03\x07\x03\x07\x05\x07\xDC\n\x07\x03\x07\x03\x07\x03" +
		"\x07\x05\x07\xE1\n\x07\x07\x07\xE3\n\x07\f\x07\x0E\x07\xE6\v\x07\x03\b" +
		"\x05\b\xE9\n\b\x03\b\x05\b\xEC\n\b\x03\b\x03\b\x03\b\x03\b\x03\b\x07\b" +
		"\xF3\n\b\f\b\x0E\b\xF6\v\b\x03\b\x05\b\xF9\n\b\x05\b\xFB\n\b\x03\b\x03" +
		"\b\x03\b\x03\b\x05\b\u0101\n\b\x03\t\x03\t\x05\t\u0105\n\t\x03\t\x03\t" +
		"\x03\t\x03\t\x03\t\x03\t\x07\t\u010D\n\t\f\t\x0E\t\u0110\v\t\x03\t\x05" +
		"\t\u0113\n\t\x05\t\u0115\n\t\x03\t\x03\t\x03\t\x03\t\x05\t\u011B\n\t\x03" +
		"\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v\u0126\n\v\f\v" +
		"\x0E\v\u0129\v\v\x03\v\x05\v\u012C\n\v\x03\v\x03\v\x03\f\x05\f\u0131\n" +
		"\f\x03\f\x03\f\x07\f\u0135\n\f\f\f\x0E\f\u0138\v\f\x03\r\x03\r\x05\r\u013C" +
		"\n\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0143\n\x0E\x03\x0F\x03" +
		"\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u014B\n\x10\x03\x10\x03\x10" +
		"\x03\x10\x05\x10\u0150\n\x10\x03\x11\x03\x11\x03\x11\x05\x11\u0155\n\x11" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u015B\n\x12\x03\x12\x03\x12\x03" +
		"\x12\x05\x12\u0160\n\x12\x07\x12\u0162\n\x12\f\x12\x0E\x12\u0165\v\x12" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x07\x13\u016B\n\x13\f\x13\x0E\x13\u016E" +
		"\v\x13\x03\x13\x03\x13\x03\x14\x05\x14\u0173\n\x14\x03\x14\x03\x14\x03" +
		"\x14\x05\x14\u0178\n\x14\x03\x14\x05\x14\u017B\n\x14\x03\x15\x03\x15\x03" +
		"\x16\x05\x16\u0180\n\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x05\x17" +
		"\u0187\n\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x05\x18\u018E\n\x18" +
		"\x03\x18\x03\x18\x05\x18\u0192\n\x18\x03\x18\x03\x18\x05\x18\u0196\n\x18" +
		"\x03\x19\x05\x19\u0199\n\x19\x03\x19\x03\x19\x05\x19\u019D\n\x19\x03\x19" +
		"\x03\x19\x05\x19\u01A1\n\x19\x03\x1A\x03\x1A\x05\x1A\u01A5\n\x1A\x03\x1A" +
		"\x05\x1A\u01A8\n\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03" +
		"\x1B\x03\x1C\x03\x1C\x05\x1C\u01B3\n\x1C\x03\x1D\x03\x1D\x05\x1D\u01B7" +
		"\n\x1D\x03\x1E\x05\x1E\u01BA\n\x1E\x03\x1E\x05\x1E\u01BD\n\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E" +
		"\u01C8\n\x1E\x05\x1E\u01CA\n\x1E\x05\x1E\u01CC\n\x1E\x03\x1F\x03\x1F\x05" +
		"\x1F\u01D0\n\x1F\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03\"\x03\"\x03\"" +
		"\x05\"\u01DB\n\"\x03#\x03#\x05#\u01DF\n#\x03$\x03$\x03%\x03%\x03%\x05" +
		"%\u01E6\n%\x03&\x05&\u01E9\n&\x03&\x03&\x03\'\x05\'\u01EE\n\'\x03\'\x03" +
		"\'\x03(\x03(\x03)\x03)\x03)\x05)\u01F7\n)\x03*\x03*\x03*\x05*\u01FC\n" +
		"*\x03+\x03+\x03,\x03,\x03,\x05,\u0203\n,\x03-\x03-\x03.\x03.\x03/\x03" +
		"/\x03/\x03/\x05/\u020D\n/\x030\x030\x030\x050\u0212\n0\x031\x031\x031" +
		"\x031\x071\u0218\n1\f1\x0E1\u021B\v1\x031\x051\u021E\n1\x031\x031\x03" +
		"2\x032\x032\x032\x072\u0226\n2\f2\x0E2\u0229\v2\x032\x032\x032\x033\x03" +
		"3\x033\x033\x034\x034\x054\u0234\n4\x034\x054\u0237\n4\x035\x035\x035" +
		"\x055\u023C\n5\x036\x036\x036\x036\x037\x037\x077\u0244\n7\f7\x0E7\u0247" +
		"\v7\x037\x037\x057\u024B\n7\x038\x038\x058\u024F\n8\x039\x039\x039\x05" +
		"9\u0254\n9\x03:\x03:\x03:\x03:\x05:\u025A\n:\x03;\x03;\x03;\x03;\x03<" +
		"\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03=\x03=\x03=\x03=\x07" +
		"=\u026E\n=\f=\x0E=\u0271\v=\x03=\x03=\x05=\u0275\n=\x03>\x03>\x03>\x03" +
		"?\x05?\u027B\n?\x03?\x03?\x03?\x05?\u0280\n?\x03@\x03@\x03A\x03A\x07A" +
		"\u0286\nA\fA\x0EA\u0289\vA\x03B\x05B\u028C\nB\x03B\x03B\x03B\x03B\x03" +
		"B\x07B\u0293\nB\fB\x0EB\u0296\vB\x05B\u0298\nB\x03B\x03B\x03C\x03C\x05" +
		"C\u029E\nC\x03D\x03D\x03E\x03E\x03E\x02\x02\x02F\x02\x02\x04\x02\x06\x02" +
		"\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A" +
		"\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x02" +
		"4\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02" +
		"P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02" +
		"l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84" +
		"\x02\x86\x02\x88\x02\x02\r\x05\x02\f\f\x0E\x0E\x16\x16\x04\x02<<??\x03" +
		"\x02\v\x16\x06\x02\x18\x18\x1C\x1D((MM\x04\x02:<??\x03\x02\x17\x1D\x04" +
		"\x02\x1E#((\x03\x02)/\x03\x02IJ\x03\x02^_\x03\x02`a\x02\u02CF\x02\x8D" +
		"\x03\x02\x02\x02\x04\xA6\x03\x02\x02\x02\x06\xA8\x03\x02\x02\x02\b\xC1" +
		"\x03\x02\x02\x02\n\xC6\x03\x02\x02\x02\f\xD7\x03\x02\x02\x02\x0E\xE8\x03" +
		"\x02\x02\x02\x10\u0102\x03\x02\x02\x02\x12\u011C\x03\x02\x02\x02\x14\u012B" +
		"\x03\x02\x02\x02\x16\u0130\x03\x02\x02\x02\x18\u0139\x03\x02\x02\x02\x1A" +
		"\u0142\x03\x02\x02\x02\x1C\u0144\x03\x02\x02\x02\x1E\u014F\x03\x02\x02" +
		"\x02 \u0154\x03\x02\x02\x02\"\u0156\x03\x02\x02\x02$\u0166\x03\x02\x02" +
		"\x02&\u017A\x03\x02\x02\x02(\u017C\x03\x02\x02\x02*\u017F\x03\x02\x02" +
		"\x02,\u0186\x03\x02\x02\x02.\u018D\x03\x02\x02\x020\u0198\x03\x02\x02" +
		"\x022\u01A7\x03\x02\x02\x024\u01AE\x03\x02\x02\x026\u01B0\x03\x02\x02" +
		"\x028\u01B6\x03\x02\x02\x02:\u01B9\x03\x02\x02\x02<\u01CD\x03\x02\x02" +
		"\x02>\u01D3\x03\x02\x02\x02@\u01D5\x03\x02\x02\x02B\u01DA\x03\x02\x02" +
		"\x02D\u01DE\x03\x02\x02\x02F\u01E0\x03\x02\x02\x02H\u01E5\x03\x02\x02" +
		"\x02J\u01E8\x03\x02\x02\x02L\u01ED\x03\x02\x02\x02N\u01F1\x03\x02\x02" +
		"\x02P\u01F6\x03\x02\x02\x02R\u01FB\x03\x02\x02\x02T\u01FD\x03\x02\x02" +
		"\x02V\u0202\x03\x02\x02\x02X\u0204\x03\x02\x02\x02Z\u0206\x03\x02\x02" +
		"\x02\\\u0208\x03\x02\x02\x02^\u020E\x03\x02\x02\x02`\u0213\x03\x02\x02" +
		"\x02b\u0221\x03\x02\x02\x02d\u022D\x03\x02\x02\x02f\u0233\x03\x02\x02" +
		"\x02h\u0238\x03\x02\x02\x02j\u023D\x03\x02\x02\x02l\u024A\x03\x02\x02" +
		"\x02n\u024C\x03\x02\x02\x02p\u0253\x03\x02\x02\x02r\u0255\x03\x02\x02" +
		"\x02t\u025B\x03\x02\x02\x02v\u025F\x03\x02\x02\x02x\u0274\x03\x02\x02" +
		"\x02z\u0276\x03\x02\x02\x02|\u027A\x03\x02\x02\x02~\u0281\x03\x02\x02" +
		"\x02\x80\u0283\x03\x02\x02\x02\x82\u028B\x03\x02\x02\x02\x84\u029D\x03" +
		"\x02\x02\x02\x86\u029F\x03\x02\x02\x02\x88\u02A1\x03\x02\x02\x02\x8A\x8C" +
		"\x05\x84C\x02\x8B\x8A\x03\x02\x02\x02\x8C\x8F\x03\x02\x02\x02\x8D\x8B" +
		"\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\x93\x03\x02\x02\x02\x8F\x8D" +
		"\x03\x02\x02\x02\x90\x92\x05\x04\x03\x02\x91\x90\x03\x02\x02\x02\x92\x95" +
		"\x03\x02\x02\x02\x93\x91\x03\x02\x02\x02\x93\x94\x03\x02\x02\x02\x94\x96" +
		"\x03\x02\x02\x02\x95\x93\x03\x02\x02\x02\x96\x97\x07\x02\x02\x03\x97\x03" +
		"\x03\x02\x02\x02\x98\x9A\x05\x84C\x02\x99\x98\x03\x02\x02\x02\x9A\x9D" +
		"\x03\x02\x02\x02\x9B\x99\x03\x02\x02\x02\x9B\x9C\x03\x02\x02\x02\x9C\xA3" +
		"\x03\x02\x02\x02\x9D\x9B\x03\x02\x02\x02\x9E\xA4\x05\x0E\b\x02\x9F\xA4" +
		"\x05\x10\t\x02\xA0\xA1\x05\f\x07\x02\xA1\xA2\x07\n\x02\x02\xA2\xA4\x03" +
		"\x02\x02\x02\xA3\x9E\x03\x02\x02\x02\xA3\x9F\x03\x02\x02\x02\xA3\xA0\x03" +
		"\x02\x02\x02\xA4\xA7\x03\x02\x02\x02\xA5\xA7\x05\x06\x04\x02\xA6\x9B\x03" +
		"\x02\x02\x02\xA6\xA5\x03\x02\x02\x02\xA7\x05\x03\x02\x02\x02\xA8\xAA\x07" +
		"9\x02\x02\xA9\xAB\x07b\x02\x02\xAA\xA9\x03\x02\x02\x02\xAA\xAB\x03\x02" +
		"\x02\x02\xAB\xAD\x03\x02\x02\x02\xAC\xAE\x05\n\x06\x02\xAD\xAC\x03\x02" +
		"\x02\x02\xAD\xAE\x03\x02\x02\x02\xAE\xAF\x03\x02\x02\x02\xAF\xBB\x07\x05" +
		"\x02\x02\xB0\xB5\x05\b\x05\x02\xB1\xB2\x07\t\x02\x02\xB2\xB4\x05\b\x05" +
		"\x02\xB3\xB1\x03\x02\x02\x02\xB4\xB7\x03\x02\x02\x02\xB5\xB3\x03\x02\x02" +
		"\x02\xB5\xB6\x03\x02\x02\x02\xB6\xB9\x03\x02\x02\x02\xB7\xB5\x03\x02\x02" +
		"\x02\xB8\xBA\x07\t\x02\x02\xB9\xB8\x03\x02\x02\x02\xB9\xBA\x03\x02\x02" +
		"\x02\xBA\xBC\x03\x02\x02\x02\xBB\xB0\x03\x02\x02\x02\xBB\xBC\x03\x02\x02" +
		"\x02\xBC\xBD\x03\x02\x02\x02\xBD\xBF\x07\x06\x02\x02\xBE\xC0\x07\n\x02" +
		"\x02\xBF\xBE\x03\x02\x02\x02\xBF\xC0\x03\x02\x02\x02\xC0\x07\x03\x02\x02" +
		"\x02\xC1\xC4\x05\x16\f\x02\xC2\xC3\x07\v\x02\x02\xC3\xC5\x05.\x18\x02" +
		"\xC4\xC2\x03\x02\x02\x02\xC4\xC5\x03\x02\x02\x02\xC5\t\x03\x02\x02\x02" +
		"\xC6\xC7\x07\x03\x02\x02\xC7\xC8\t\x02\x02\x02\xC8\xC9\x07d\x02\x02\xC9" +
		"\xCA\x07\x04\x02\x02\xCA\v\x03\x02\x02\x02\xCB\xCF\x078\x02\x02\xCC\xCE" +
		"\x05@!\x02\xCD\xCC\x03\x02\x02\x02\xCE\xD1\x03\x02\x02\x02\xCF\xCD\x03" +
		"\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0\xD8\x03\x02\x02\x02\xD1\xCF\x03" +
		"\x02\x02\x02\xD2\xD4\x05@!\x02\xD3\xD2\x03\x02\x02\x02\xD4\xD5\x03\x02" +
		"\x02\x02\xD5\xD3\x03\x02\x02\x02\xD5\xD6\x03\x02\x02\x02\xD6\xD8\x03\x02" +
		"\x02\x02\xD7\xCB\x03\x02\x02\x02\xD7\xD3\x03\x02\x02\x02\xD8\xDB\x03\x02" +
		"\x02\x02\xD9\xDC\x05\x16\f\x02\xDA\xDC\x05\"\x12\x02\xDB\xD9\x03\x02\x02" +
		"\x02\xDB\xDA\x03\x02\x02\x02\xDC\xE4\x03\x02\x02\x02\xDD\xE0\x07\t\x02" +
		"\x02\xDE\xE1\x05\x16\f\x02\xDF\xE1\x05\"\x12\x02\xE0\xDE\x03\x02\x02\x02" +
		"\xE0\xDF\x03\x02\x02\x02\xE1\xE3\x03\x02\x02\x02\xE2\xDD\x03\x02\x02\x02" +
		"\xE3\xE6\x03\x02\x02\x02\xE4\xE2\x03\x02\x02\x02\xE4\xE5\x03\x02\x02\x02" +
		"\xE5\r\x03\x02\x02\x02\xE6\xE4\x03\x02\x02\x02\xE7\xE9\x05\x1A\x0E\x02" +
		"\xE8\xE7\x03\x02\x02\x02\xE8\xE9\x03\x02\x02\x02\xE9\xEB\x03\x02\x02\x02" +
		"\xEA\xEC\x05\x14\v\x02\xEB\xEA\x03\x02\x02\x02\xEB\xEC\x03\x02\x02\x02" +
		"\xEC\xED\x03\x02\x02\x02\xED\xEE\x07b\x02\x02\xEE\xFA\x07\x03\x02\x02" +
		"\xEF\xF4\x05:\x1E\x02\xF0\xF1\x07\t\x02\x02\xF1\xF3\x05:\x1E\x02\xF2\xF0" +
		"\x03\x02\x02\x02\xF3\xF6\x03\x02\x02\x02\xF4\xF2\x03\x02\x02\x02\xF4\xF5" +
		"\x03\x02\x02\x02\xF5\xF8\x03\x02\x02\x02\xF6\xF4\x03\x02\x02\x02\xF7\xF9" +
		"\x05<\x1F\x02\xF8\xF7\x03\x02\x02\x02\xF8\xF9\x03\x02\x02\x02\xF9\xFB" +
		"\x03\x02\x02\x02\xFA\xEF\x03\x02\x02\x02\xFA\xFB\x03\x02\x02\x02\xFB\xFC" +
		"\x03\x02\x02\x02\xFC\u0100\x07\x04\x02\x02\xFD\u0101\x07\n\x02\x02\xFE" +
		"\u0101\x05l7\x02\xFF\u0101\x05\x12\n\x02\u0100\xFD\x03\x02\x02\x02\u0100" +
		"\xFE\x03\x02\x02\x02\u0100\xFF\x03\x02\x02\x02\u0101\x0F\x03\x02\x02\x02" +
		"\u0102\u0104\x05\x1A\x0E\x02\u0103\u0105\x05\x14\v\x02\u0104\u0103\x03" +
		"\x02\x02\x02\u0104\u0105\x03\x02\x02\x02\u0105\u0106\x03\x02\x02\x02\u0106" +
		"\u0107\x07@\x02\x02\u0107\u0108\x05R*\x02\u0108\u0114\x07\x03\x02\x02" +
		"\u0109\u010E\x05:\x1E\x02\u010A\u010B\x07\t\x02\x02\u010B\u010D\x05:\x1E" +
		"\x02\u010C\u010A\x03\x02\x02\x02\u010D\u0110\x03\x02\x02\x02\u010E\u010C" +
		"\x03\x02\x02\x02\u010E\u010F\x03\x02\x02\x02\u010F\u0112\x03\x02\x02\x02" +
		"\u0110\u010E\x03\x02\x02\x02\u0111\u0113\x05<\x1F\x02\u0112\u0111\x03" +
		"\x02\x02\x02\u0112\u0113\x03\x02\x02\x02\u0113\u0115\x03\x02\x02\x02\u0114" +
		"\u0109\x03\x02\x02\x02\u0114\u0115\x03\x02\x02\x02\u0115\u0116\x03\x02" +
		"\x02\x02\u0116\u011A\x07\x04\x02\x02\u0117\u011B\x07\n\x02\x02\u0118\u011B" +
		"\x05l7\x02\u0119\u011B\x05\x12\n\x02\u011A\u0117\x03\x02\x02\x02\u011A" +
		"\u0118\x03\x02\x02\x02\u011A\u0119\x03\x02\x02\x02\u011B\x11\x03\x02\x02" +
		"\x02\u011C\u011D\x07\v\x02\x02\u011D\u011E\x07b\x02\x02\u011E\u011F\x07" +
		"\n\x02\x02\u011F\x13\x03\x02\x02\x02\u0120\u012C\x07b\x02\x02\u0121\u0122" +
		"\x07\x05\x02\x02\u0122\u0127\x07b\x02\x02\u0123\u0124\x07\t\x02\x02\u0124" +
		"\u0126\x07b\x02\x02\u0125\u0123\x03\x02\x02\x02\u0126\u0129\x03\x02\x02" +
		"\x02\u0127\u0125\x03\x02\x02\x02\u0127\u0128\x03\x02\x02\x02\u0128\u012A" +
		"\x03\x02\x02\x02\u0129\u0127\x03\x02\x02\x02\u012A\u012C\x07\x06\x02\x02" +
		"\u012B\u0120\x03\x02\x02\x02\u012B\u0121\x03\x02\x02\x02\u012C\u012D\x03" +
		"\x02\x02\x02\u012D\u012E\x07%\x02\x02\u012E\x15\x03\x02\x02\x02\u012F" +
		"\u0131\x05\x14\v\x02\u0130\u012F\x03\x02\x02\x02\u0130\u0131\x03\x02\x02" +
		"\x02\u0131\u0132\x03\x02\x02\x02\u0132\u0136\x07b\x02\x02\u0133\u0135" +
		"\x05\x18\r\x02\u0134\u0133\x03\x02\x02\x02\u0135\u0138\x03\x02\x02\x02" +
		"\u0136\u0134\x03\x02\x02\x02\u0136\u0137\x03\x02\x02\x02\u0137\x17\x03" +
		"\x02\x02\x02\u0138\u0136\x03\x02\x02\x02\u0139\u013B\x07\x07\x02\x02\u013A" +
		"\u013C\x05.\x18\x02\u013B\u013A\x03\x02\x02\x02\u013B\u013C\x03\x02\x02" +
		"\x02\u013C\u013D\x03\x02\x02\x02\u013D\u013E\x07\b\x02\x02\u013E\x19\x03" +
		"\x02\x02\x02\u013F\u0143\x05\x1C\x0F\x02\u0140\u0143\x07=\x02\x02\u0141" +
		"\u0143\x07>\x02\x02\u0142\u013F\x03\x02\x02\x02\u0142\u0140\x03\x02\x02" +
		"\x02\u0142\u0141\x03\x02\x02\x02\u0143\x1B\x03\x02\x02\x02\u0144\u0145" +
		"\t\x03\x02\x02\u0145\x1D\x03\x02\x02\x02\u0146\u014B\x05\f\x07\x02\u0147" +
		"\u014B\x05\"\x12\x02\u0148\u014B\x05\x82B\x02\u0149\u014B\x05n8\x02\u014A" +
		"\u0146\x03\x02\x02\x02\u014A\u0147\x03\x02\x02\x02\u014A\u0148\x03\x02" +
		"\x02\x02\u014A\u0149\x03\x02\x02\x02\u014B\u014C\x03\x02\x02\x02\u014C" +
		"\u014D\x07\n\x02\x02\u014D\u0150\x03\x02\x02\x02\u014E\u0150\x05 \x11" +
		"\x02\u014F\u014A\x03\x02\x02\x02\u014F\u014E\x03\x02\x02\x02\u0150\x1F" +
		"\x03\x02\x02\x02\u0151\u0155\x05\\/\x02\u0152\u0155\x05p9\x02\u0153\u0155" +
		"\x05`1\x02\u0154\u0151\x03\x02\x02\x02\u0154\u0152\x03\x02\x02\x02\u0154" +
		"\u0153\x03\x02\x02\x02\u0155!\x03\x02\x02\x02\u0156\u0157\x05\x16\f\x02" +
		"\u0157\u015A\x05(\x15\x02\u0158\u015B\x05.\x18\x02\u0159\u015B\x05$\x13" +
		"\x02\u015A\u0158\x03\x02\x02\x02\u015A\u0159\x03\x02\x02\x02\u015B\u0163" +
		"\x03\x02\x02\x02\u015C\u015F\x05(\x15\x02\u015D\u0160\x05.\x18\x02\u015E" +
		"\u0160\x05$\x13\x02\u015F\u015D\x03\x02\x02\x02\u015F\u015E\x03\x02\x02" +
		"\x02\u0160\u0162\x03\x02\x02\x02\u0161\u015C\x03\x02\x02\x02\u0162\u0165" +
		"\x03\x02\x02\x02\u0163\u0161\x03\x02\x02\x02\u0163\u0164\x03\x02\x02\x02" +
		"\u0164#\x03\x02\x02\x02\u0165\u0163\x03\x02\x02\x02\u0166\u0167\x07\x05" +
		"\x02\x02\u0167\u016C\x05&\x14\x02\u0168\u0169\x07\t\x02\x02\u0169\u016B" +
		"\x05&\x14\x02\u016A\u0168\x03\x02\x02\x02\u016B\u016E\x03\x02\x02\x02" +
		"\u016C\u016A\x03\x02\x02\x02\u016C\u016D\x03\x02\x02\x02\u016D\u016F\x03" +
		"\x02\x02\x02\u016E\u016C\x03\x02\x02\x02\u016F\u0170\x07\x06\x02\x02\u0170" +
		"%\x03\x02\x02\x02\u0171\u0173\x05\x14\v\x02\u0172\u0171\x03\x02\x02\x02" +
		"\u0172\u0173\x03\x02\x02\x02\u0173\u0177\x03\x02\x02\x02\u0174\u0178\x07" +
		"b\x02\x02\u0175\u0178\x05H%\x02\u0176\u0178\x05\x80A\x02\u0177\u0174\x03" +
		"\x02\x02\x02\u0177\u0175\x03\x02\x02\x02\u0177\u0176\x03\x02\x02\x02\u0178" +
		"\u017B\x03\x02\x02\x02\u0179\u017B\x05$\x13\x02\u017A\u0172\x03\x02\x02" +
		"\x02\u017A\u0179\x03\x02\x02\x02\u017B\'\x03\x02\x02\x02\u017C\u017D\t" +
		"\x04\x02\x02\u017D)\x03\x02\x02\x02\u017E\u0180\x05\x14\v\x02\u017F\u017E" +
		"\x03\x02\x02\x02\u017F\u0180\x03\x02\x02\x02\u0180\u0181\x03\x02\x02\x02" +
		"\u0181\u0182\x07\x03\x02\x02\u0182\u0183\x05.\x18\x02\u0183\u0184\x07" +
		"\x04\x02\x02\u0184+\x03\x02\x02\x02\u0185\u0187\x05\x14\v\x02\u0186\u0185" +
		"\x03\x02\x02\x02\u0186\u0187\x03\x02\x02\x02\u0187\u0188\x03\x02\x02\x02" +
		"\u0188\u0189\x07\x03\x02\x02\u0189\u018A\x050\x19\x02\u018A\u018B\x07" +
		"\x04\x02\x02\u018B-\x03\x02\x02\x02\u018C\u018E\x054\x1B\x02\u018D\u018C" +
		"\x03\x02\x02\x02\u018D\u018E\x03\x02\x02\x02\u018E\u0195\x03\x02\x02\x02" +
		"\u018F\u0191\x05B\"\x02\u0190\u0192\x056\x1C\x02\u0191\u0190\x03\x02\x02" +
		"\x02\u0191\u0192\x03\x02\x02\x02\u0192\u0196\x03\x02\x02\x02\u0193\u0196" +
		"\x05*\x16\x02\u0194\u0196\x052\x1A\x02\u0195\u018F\x03\x02\x02\x02\u0195" +
		"\u0193\x03\x02\x02\x02\u0195\u0194\x03\x02\x02\x02\u0196/\x03\x02\x02" +
		"\x02\u0197\u0199\x054\x1B\x02\u0198\u0197\x03\x02\x02\x02\u0198\u0199" +
		"\x03\x02\x02\x02\u0199\u01A0\x03\x02\x02\x02\u019A\u019C\x058\x1D\x02" +
		"\u019B\u019D\x056\x1C\x02\u019C\u019B\x03\x02\x02\x02\u019C\u019D\x03" +
		"\x02\x02\x02\u019D\u01A1\x03\x02\x02\x02\u019E\u01A1\x05,\x17\x02\u019F" +
		"\u01A1\x05$\x13\x02\u01A0\u019A\x03\x02\x02\x02\u01A0\u019E\x03\x02\x02" +
		"\x02\u01A0\u019F\x03\x02\x02\x02\u01A11\x03\x02\x02\x02\u01A2\u01A4\x05" +
		"B\"\x02\u01A3\u01A5\x056\x1C\x02\u01A4\u01A3\x03\x02\x02\x02\u01A4\u01A5" +
		"\x03\x02\x02\x02\u01A5\u01A8\x03\x02\x02\x02\u01A6\u01A8\x05*\x16\x02" +
		"\u01A7\u01A2\x03\x02\x02\x02\u01A7\u01A6\x03\x02\x02\x02\u01A8\u01A9\x03" +
		"\x02\x02\x02\u01A9\u01AA\x07$\x02\x02\u01AA\u01AB\x05.\x18\x02\u01AB\u01AC" +
		"\x07%\x02\x02\u01AC\u01AD\x05.\x18\x02\u01AD3\x03\x02\x02\x02\u01AE\u01AF" +
		"\t\x05\x02\x02\u01AF5\x03\x02\x02\x02\u01B0\u01B2\x05P)\x02\u01B1\u01B3" +
		"\x05.\x18\x02\u01B2\u01B1\x03\x02\x02\x02\u01B2\u01B3\x03\x02\x02\x02" +
		"\u01B37\x03\x02\x02\x02\u01B4\u01B7\x05|?\x02\u01B5\u01B7\x05\x16\f\x02" +
		"\u01B6\u01B4\x03\x02\x02\x02\u01B6\u01B5\x03\x02\x02\x02\u01B79\x03\x02" +
		"\x02\x02\u01B8\u01BA\x07:\x02\x02\u01B9\u01B8\x03\x02\x02\x02\u01B9\u01BA" +
		"\x03\x02\x02\x02\u01BA\u01BC\x03\x02\x02\x02\u01BB\u01BD\x05> \x02\u01BC" +
		"\u01BB\x03\x02\x02\x02\u01BC\u01BD\x03\x02\x02\x02\u01BD\u01BE\x03\x02" +
		"\x02\x02\u01BE\u01CB\x05\x16\f\x02\u01BF\u01C9\x07\v\x02\x02\u01C0\u01CA" +
		"\x050\x19\x02\u01C1\u01C7\x05F$\x02\u01C2\u01C8\x05\x16\f\x02\u01C3\u01C4" +
		"\x07\x03\x02\x02\u01C4\u01C5\x05\x16\f\x02\u01C5\u01C6\x07\x04\x02\x02" +
		"\u01C6\u01C8\x03\x02\x02\x02\u01C7\u01C2\x03\x02\x02\x02\u01C7\u01C3\x03" +
		"\x02\x02\x02\u01C8\u01CA\x03\x02\x02\x02\u01C9\u01C0\x03\x02\x02\x02\u01C9" +
		"\u01C1\x03\x02\x02\x02\u01CA\u01CC\x03\x02\x02\x02\u01CB\u01BF\x03\x02" +
		"\x02\x02\u01CB\u01CC\x03\x02\x02\x02\u01CC;\x03\x02\x02\x02\u01CD\u01CF" +
		"\x07\t\x02\x02\u01CE\u01D0\x05\x14\v\x02\u01CF\u01CE\x03\x02\x02\x02\u01CF" +
		"\u01D0\x03\x02\x02\x02\u01D0\u01D1\x03\x02\x02\x02\u01D1\u01D2\x071\x02" +
		"\x02\u01D2=\x03\x02\x02\x02\u01D3\u01D4\x07)\x02\x02\u01D4?\x03\x02\x02" +
		"\x02\u01D5\u01D6\t\x06\x02\x02\u01D6A\x03\x02\x02\x02\u01D7\u01DB\x05" +
		"8\x1D\x02\u01D8\u01DB\x05\x82B\x02\u01D9\u01DB\x05*\x16\x02\u01DA\u01D7" +
		"\x03\x02\x02\x02\u01DA\u01D8\x03\x02\x02\x02\u01DA\u01D9\x03\x02\x02\x02" +
		"\u01DBC\x03\x02\x02\x02\u01DC\u01DF\x058\x1D\x02\u01DD\u01DF\x05,\x17" +
		"\x02\u01DE\u01DC\x03\x02\x02\x02\u01DE\u01DD\x03\x02\x02\x02\u01DFE\x03" +
		"\x02\x02\x02\u01E0\u01E1\x07M\x02\x02\u01E1G\x03\x02\x02\x02\u01E2\u01E6" +
		"\x05J&\x02\u01E3\u01E6\x05L\'\x02\u01E4\u01E6\x05N(\x02\u01E5\u01E2\x03" +
		"\x02\x02\x02\u01E5\u01E3\x03\x02\x02\x02\u01E5\u01E4\x03\x02\x02\x02\u01E6" +
		"I\x03\x02\x02\x02\u01E7\u01E9\x07\x18\x02\x02\u01E8\u01E7\x03\x02\x02" +
		"\x02\u01E8\u01E9\x03\x02\x02\x02\u01E9\u01EA\x03\x02\x02\x02\u01EA\u01EB" +
		"\x07d\x02\x02\u01EBK\x03\x02\x02\x02\u01EC\u01EE\x07\x18\x02\x02\u01ED" +
		"\u01EC\x03\x02\x02\x02\u01ED\u01EE\x03\x02\x02\x02\u01EE\u01EF\x03\x02" +
		"\x02\x02\u01EF\u01F0\x07e\x02\x02\u01F0M\x03\x02\x02\x02\u01F1\u01F2\x07" +
		"c\x02\x02\u01F2O\x03\x02\x02\x02\u01F3\u01F7\x05T+\x02\u01F4\u01F7\x05" +
		"V,\x02\u01F5\u01F7\x05Z.\x02\u01F6\u01F3\x03\x02\x02\x02\u01F6\u01F4\x03" +
		"\x02\x02\x02\u01F6\u01F5\x03\x02\x02\x02\u01F7Q\x03\x02\x02\x02\u01F8" +
		"\u01FC\x05T+\x02\u01F9\u01FC\x05X-\x02\u01FA\u01FC\x07\v\x02\x02\u01FB" +
		"\u01F8\x03\x02\x02\x02\u01FB\u01F9\x03\x02\x02\x02\u01FB\u01FA\x03\x02" +
		"\x02\x02\u01FCS\x03\x02\x02\x02\u01FD\u01FE\t\x07\x02\x02\u01FEU\x03\x02" +
		"\x02\x02\u01FF\u0203\x07&\x02\x02\u0200\u0203\x07\'\x02\x02\u0201\u0203" +
		"\x05X-\x02\u0202\u01FF\x03\x02\x02\x02\u0202\u0200\x03\x02\x02\x02\u0202" +
		"\u0201\x03\x02\x02\x02\u0203W\x03\x02\x02\x02\u0204\u0205\t\b\x02\x02" +
		"\u0205Y\x03\x02\x02\x02\u0206\u0207\t\t\x02\x02\u0207[\x03\x02\x02\x02" +
		"\u0208\u0209\x07A\x02\x02\u0209\u020A\x05j6\x02\u020A\u020C\x05l7\x02" +
		"\u020B\u020D\x05^0\x02\u020C\u020B\x03\x02\x02\x02\u020C\u020D\x03\x02" +
		"\x02\x02\u020D]\x03\x02\x02\x02\u020E\u0211\x07B\x02\x02\u020F\u0212\x05" +
		"\\/\x02\u0210\u0212\x05l7\x02\u0211\u020F\x03\x02\x02\x02\u0211\u0210" +
		"\x03\x02\x02\x02\u0212_\x03\x02\x02\x02\u0213\u0214\x07C\x02\x02\u0214" +
		"\u0215\x05j6\x02\u0215\u0219\x07\x05\x02\x02\u0216\u0218\x05b2\x02\u0217" +
		"\u0216\x03\x02\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"\u0218\u021B\x03\x02\x02\x02\u0219\u0217\x03\x02\x02\x02\u0219\u021A\x03" +
		"\x02\x02\x02\u021A\u021D\x03\x02\x02\x02\u021B\u0219\x03\x02\x02\x02\u021C" +
		"\u021E\x05d3\x02\u021D\u021C\x03\x02\x02\x02\u021D\u021E\x03\x02\x02\x02" +
		"\u021E\u021F\x03\x02\x02\x02\u021F\u0220\x07\x06\x02\x02\u0220a\x03\x02" +
		"\x02\x02\u0221\u0222\x07D\x02\x02\u0222\u0227\x05f4\x02\u0223\u0224\x07" +
		"\t\x02\x02\u0224\u0226\x05f4\x02\u0225\u0223\x03\x02\x02\x02\u0226\u0229" +
		"\x03\x02\x02\x02\u0227\u0225\x03\x02\x02\x02\u0227\u0228\x03\x02\x02\x02" +
		"\u0228\u022A\x03\x02\x02\x02\u0229\u0227\x03\x02\x02\x02\u022A\u022B\x07" +
		"%\x02\x02\u022B\u022C\x05l7\x02\u022Cc\x03\x02\x02\x02\u022D\u022E\x07" +
		"E\x02\x02\u022E\u022F\x07%\x02\x02\u022F\u0230\x05l7\x02\u0230e\x03\x02" +
		"\x02\x02\u0231\u0234\x07b\x02\x02\u0232\u0234\x05H%\x02\u0233\u0231\x03" +
		"\x02\x02\x02\u0233\u0232\x03\x02\x02\x02\u0234\u0236\x03\x02\x02\x02\u0235" +
		"\u0237\x05h5\x02\u0236\u0235\x03\x02\x02\x02\u0236\u0237\x03\x02\x02\x02" +
		"\u0237g\x03\x02\x02\x02\u0238\u023B\x070\x02\x02\u0239\u023C\x07b\x02" +
		"\x02\u023A\u023C\x05H%\x02\u023B\u0239\x03\x02\x02\x02\u023B\u023A\x03" +
		"\x02\x02\x02\u023Ci\x03\x02\x02\x02\u023D\u023E\x07\x03\x02\x02\u023E" +
		"\u023F\x05.\x18\x02\u023F\u0240\x07\x04\x02\x02\u0240k\x03\x02\x02\x02" +
		"\u0241\u0245\x07\x05\x02\x02\u0242\u0244\x05\x1E\x10\x02\u0243\u0242\x03" +
		"\x02\x02\x02\u0244\u0247\x03\x02\x02\x02\u0245\u0243\x03\x02\x02\x02\u0245" +
		"\u0246\x03\x02\x02\x02\u0246\u0248\x03\x02\x02\x02\u0247\u0245\x03\x02" +
		"\x02\x02\u0248\u024B\x07\x06\x02\x02\u0249\u024B\x05\x1E\x10\x02\u024A" +
		"\u0241\x03\x02\x02\x02\u024A\u0249\x03\x02\x02\x02\u024Bm\x03\x02\x02" +
		"\x02\u024C\u024E\x077\x02\x02\u024D\u024F\x05.\x18\x02\u024E\u024D\x03" +
		"\x02\x02\x02\u024E\u024F\x03\x02\x02\x02\u024Fo\x03\x02\x02\x02\u0250" +
		"\u0254\x05t;\x02\u0251\u0254\x05v<\x02\u0252\u0254\x05r:\x02\u0253\u0250" +
		"\x03\x02\x02\x02\u0253\u0251\x03\x02\x02\x02\u0253\u0252\x03\x02\x02\x02" +
		"\u0254q\x03\x02\x02\x02\u0255\u0256\x07H\x02\x02\u0256\u0259\x05x=\x02" +
		"\u0257\u0258\x07F\x02\x02\u0258\u025A\x05j6\x02\u0259\u0257\x03\x02\x02" +
		"\x02\u0259\u025A\x03\x02\x02\x02\u025As\x03\x02\x02\x02\u025B\u025C\x07" +
		"F\x02\x02\u025C\u025D\x05j6\x02\u025D\u025E\x05x=\x02\u025Eu\x03\x02\x02" +
		"\x02\u025F\u0260\x07G\x02\x02\u0260\u0261\x07\x03\x02\x02\u0261\u0262" +
		"\x05\f\x07\x02\u0262\u0263\x07\n\x02\x02\u0263\u0264\x05.\x18\x02\u0264" +
		"\u0265\x07\n\x02\x02\u0265\u0266\x05.\x18\x02\u0266\u0267\x07\x04\x02" +
		"\x02\u0267\u0268\x05x=\x02\u0268w\x03\x02\x02\x02\u0269\u0275\x05z>\x02" +
		"\u026A\u026F\x07\x05\x02\x02\u026B\u026E\x05\x1E\x10\x02\u026C\u026E\x05" +
		"z>\x02\u026D\u026B\x03\x02\x02\x02\u026D\u026C\x03\x02\x02\x02\u026E\u0271" +
		"\x03\x02\x02\x02\u026F\u026D\x03\x02\x02\x02\u026F\u0270\x03\x02\x02\x02" +
		"\u0270\u0272\x03\x02\x02\x02\u0271\u026F\x03\x02\x02\x02\u0272\u0275\x07" +
		"\x06\x02\x02\u0273\u0275\x05\x1E\x10\x02\u0274\u0269\x03\x02\x02\x02\u0274" +
		"\u026A\x03\x02\x02\x02\u0274\u0273\x03\x02\x02\x02\u0275y\x03\x02\x02" +
		"\x02\u0276\u0277\t\n\x02\x02\u0277\u0278\x07\n\x02\x02\u0278{\x03\x02" +
		"\x02\x02\u0279\u027B\x05\x14\v\x02\u027A\u0279\x03\x02\x02\x02\u027A\u027B" +
		"\x03\x02\x02\x02\u027B\u027F\x03\x02\x02\x02\u027C\u0280\x05\x80A\x02" +
		"\u027D\u0280\x05H%\x02\u027E\u0280\x05~@\x02\u027F\u027C\x03\x02\x02\x02" +
		"\u027F\u027D\x03\x02\x02\x02\u027F\u027E\x03\x02\x02\x02\u0280}\x03\x02" +
		"\x02\x02\u0281\u0282\t\v\x02\x02\u0282\x7F\x03\x02\x02\x02\u0283\u0287" +
		"\t\f\x02\x02\u0284\u0286\x05\x80A\x02\u0285\u0284\x03\x02\x02\x02\u0286" +
		"\u0289\x03\x02\x02\x02\u0287\u0285\x03\x02\x02\x02\u0287\u0288\x03\x02" +
		"\x02\x02\u0288\x81\x03\x02\x02\x02\u0289\u0287\x03\x02\x02\x02\u028A\u028C" +
		"\x05\x14\v\x02\u028B\u028A\x03\x02\x02\x02\u028B\u028C\x03\x02\x02\x02" +
		"\u028C\u028D\x03\x02\x02\x02\u028D\u028E\x07b\x02\x02\u028E\u0297\x07" +
		"\x03\x02\x02\u028F\u0294\x05.\x18\x02\u0290\u0291\x07\t\x02\x02\u0291" +
		"\u0293\x05.\x18\x02\u0292\u0290\x03\x02\x02\x02\u0293\u0296\x03\x02\x02" +
		"\x02\u0294\u0292\x03\x02\x02\x02\u0294\u0295\x03\x02\x02\x02\u0295\u0298" +
		"\x03\x02\x02\x02\u0296\u0294\x03\x02\x02\x02\u0297\u028F\x03\x02\x02\x02" +
		"\u0297\u0298\x03\x02\x02\x02\u0298\u0299\x03\x02\x02\x02\u0299\u029A\x07" +
		"\x04\x02\x02\u029A\x83\x03\x02\x02\x02\u029B\u029E\x05\x86D\x02\u029C" +
		"\u029E\x05\x88E\x02\u029D\u029B\x03\x02\x02\x02\u029D\u029C\x03\x02\x02" +
		"\x02\u029E\x85\x03\x02\x02\x02\u029F\u02A0\x07h\x02\x02\u02A0\x87\x03" +
		"\x02\x02\x02\u02A1\u02A2\x07i\x02\x02\u02A2\x89\x03\x02\x02\x02`\x8D\x93" +
		"\x9B\xA3\xA6\xAA\xAD\xB5\xB9\xBB\xBF\xC4\xCF\xD5\xD7\xDB\xE0\xE4\xE8\xEB" +
		"\xF4\xF8\xFA\u0100\u0104\u010E\u0112\u0114\u011A\u0127\u012B\u0130\u0136" +
		"\u013B\u0142\u014A\u014F\u0154\u015A\u015F\u0163\u016C\u0172\u0177\u017A" +
		"\u017F\u0186\u018D\u0191\u0195\u0198\u019C\u01A0\u01A4\u01A7\u01B2\u01B6" +
		"\u01B9\u01BC\u01C7\u01C9\u01CB\u01CF\u01DA\u01DE\u01E5\u01E8\u01ED\u01F6" +
		"\u01FB\u0202\u020C\u0211\u0219\u021D\u0227\u0233\u0236\u023B\u0245\u024A" +
		"\u024E\u0253\u0259\u026D\u026F\u0274\u027A\u027F\u0287\u028B\u0294\u0297" +
		"\u029D";
	public static readonly _serializedATN: string = Utils.join(
		[
			pawnParser._serializedATNSegment0,
			pawnParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!pawnParser.__ATN) {
			pawnParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(pawnParser._serializedATN));
		}

		return pawnParser.__ATN;
	}

}

export class FileContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(pawnParser.EOF, 0); }
	public docs(): DocsContext[];
	public docs(i: number): DocsContext;
	public docs(i?: number): DocsContext | DocsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DocsContext);
		} else {
			return this.getRuleContext(i, DocsContext);
		}
	}
	public declaration(): DeclarationContext[];
	public declaration(i: number): DeclarationContext;
	public declaration(i?: number): DeclarationContext | DeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationContext);
		} else {
			return this.getRuleContext(i, DeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_file; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterFile) {
			listener.enterFile(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitFile) {
			listener.exitFile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitFile) {
			return visitor.visitFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	public functionDecl(): FunctionDeclContext | undefined {
		return this.tryGetRuleContext(0, FunctionDeclContext);
	}
	public operatorOverload(): OperatorOverloadContext | undefined {
		return this.tryGetRuleContext(0, OperatorOverloadContext);
	}
	public var_definition(): Var_definitionContext | undefined {
		return this.tryGetRuleContext(0, Var_definitionContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(pawnParser.SEMI, 0); }
	public docs(): DocsContext[];
	public docs(i: number): DocsContext;
	public docs(i?: number): DocsContext | DocsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DocsContext);
		} else {
			return this.getRuleContext(i, DocsContext);
		}
	}
	public enum(): EnumContext | undefined {
		return this.tryGetRuleContext(0, EnumContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_declaration; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitDeclaration) {
			listener.exitDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitDeclaration) {
			return visitor.visitDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumContext extends ParserRuleContext {
	public ENUM(): TerminalNode { return this.getToken(pawnParser.ENUM, 0); }
	public CURLY_OPEN_BRACKET(): TerminalNode { return this.getToken(pawnParser.CURLY_OPEN_BRACKET, 0); }
	public CURLY_CLOSE_BRACKET(): TerminalNode { return this.getToken(pawnParser.CURLY_CLOSE_BRACKET, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(pawnParser.IDENTIFIER, 0); }
	public enumIterator(): EnumIteratorContext | undefined {
		return this.tryGetRuleContext(0, EnumIteratorContext);
	}
	public enumMember(): EnumMemberContext[];
	public enumMember(i: number): EnumMemberContext;
	public enumMember(i?: number): EnumMemberContext | EnumMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumMemberContext);
		} else {
			return this.getRuleContext(i, EnumMemberContext);
		}
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(pawnParser.SEMI, 0); }
	public COMA(): TerminalNode[];
	public COMA(i: number): TerminalNode;
	public COMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pawnParser.COMA);
		} else {
			return this.getToken(pawnParser.COMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_enum; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterEnum) {
			listener.enterEnum(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitEnum) {
			listener.exitEnum(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitEnum) {
			return visitor.visitEnum(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumMemberContext extends ParserRuleContext {
	public variable(): VariableContext {
		return this.getRuleContext(0, VariableContext);
	}
	public ASSIGMENT(): TerminalNode | undefined { return this.tryGetToken(pawnParser.ASSIGMENT, 0); }
	public expresion(): ExpresionContext | undefined {
		return this.tryGetRuleContext(0, ExpresionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_enumMember; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterEnumMember) {
			listener.enterEnumMember(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitEnumMember) {
			listener.exitEnumMember(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitEnumMember) {
			return visitor.visitEnumMember(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumIteratorContext extends ParserRuleContext {
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(pawnParser.OPEN_PARENTHESIS, 0); }
	public INTEGER(): TerminalNode { return this.getToken(pawnParser.INTEGER, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(pawnParser.CLOSE_PARENTHESIS, 0); }
	public ASSIGMENT_PLUS(): TerminalNode | undefined { return this.tryGetToken(pawnParser.ASSIGMENT_PLUS, 0); }
	public ASSIGMENT_MULT(): TerminalNode | undefined { return this.tryGetToken(pawnParser.ASSIGMENT_MULT, 0); }
	public ASSIGMENT_LEFT(): TerminalNode | undefined { return this.tryGetToken(pawnParser.ASSIGMENT_LEFT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_enumIterator; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterEnumIterator) {
			listener.enterEnumIterator(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitEnumIterator) {
			listener.exitEnumIterator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitEnumIterator) {
			return visitor.visitEnumIterator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Var_definitionContext extends ParserRuleContext {
	public variable(): VariableContext[];
	public variable(i: number): VariableContext;
	public variable(i?: number): VariableContext | VariableContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableContext);
		} else {
			return this.getRuleContext(i, VariableContext);
		}
	}
	public assigment(): AssigmentContext[];
	public assigment(i: number): AssigmentContext;
	public assigment(i?: number): AssigmentContext | AssigmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssigmentContext);
		} else {
			return this.getRuleContext(i, AssigmentContext);
		}
	}
	public COMA(): TerminalNode[];
	public COMA(i: number): TerminalNode;
	public COMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pawnParser.COMA);
		} else {
			return this.getToken(pawnParser.COMA, i);
		}
	}
	public NEW(): TerminalNode | undefined { return this.tryGetToken(pawnParser.NEW, 0); }
	public varModifires(): VarModifiresContext[];
	public varModifires(i: number): VarModifiresContext;
	public varModifires(i?: number): VarModifiresContext | VarModifiresContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VarModifiresContext);
		} else {
			return this.getRuleContext(i, VarModifiresContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_var_definition; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterVar_definition) {
			listener.enterVar_definition(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitVar_definition) {
			listener.exitVar_definition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitVar_definition) {
			return visitor.visitVar_definition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDeclContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(pawnParser.IDENTIFIER, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(pawnParser.OPEN_PARENTHESIS, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(pawnParser.CLOSE_PARENTHESIS, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(pawnParser.SEMI, 0); }
	public codeBlock(): CodeBlockContext | undefined {
		return this.tryGetRuleContext(0, CodeBlockContext);
	}
	public nativeAssigment(): NativeAssigmentContext | undefined {
		return this.tryGetRuleContext(0, NativeAssigmentContext);
	}
	public funcDeclModif(): FuncDeclModifContext | undefined {
		return this.tryGetRuleContext(0, FuncDeclModifContext);
	}
	public tag(): TagContext | undefined {
		return this.tryGetRuleContext(0, TagContext);
	}
	public declParams(): DeclParamsContext[];
	public declParams(i: number): DeclParamsContext;
	public declParams(i?: number): DeclParamsContext | DeclParamsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclParamsContext);
		} else {
			return this.getRuleContext(i, DeclParamsContext);
		}
	}
	public COMA(): TerminalNode[];
	public COMA(i: number): TerminalNode;
	public COMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pawnParser.COMA);
		} else {
			return this.getToken(pawnParser.COMA, i);
		}
	}
	public ellipse(): EllipseContext | undefined {
		return this.tryGetRuleContext(0, EllipseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_functionDecl; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterFunctionDecl) {
			listener.enterFunctionDecl(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitFunctionDecl) {
			listener.exitFunctionDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitFunctionDecl) {
			return visitor.visitFunctionDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperatorOverloadContext extends ParserRuleContext {
	public OPERATOR(): TerminalNode { return this.getToken(pawnParser.OPERATOR, 0); }
	public canBeOverloaded(): CanBeOverloadedContext {
		return this.getRuleContext(0, CanBeOverloadedContext);
	}
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(pawnParser.OPEN_PARENTHESIS, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(pawnParser.CLOSE_PARENTHESIS, 0); }
	public funcDeclModif(): FuncDeclModifContext | undefined {
		return this.tryGetRuleContext(0, FuncDeclModifContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(pawnParser.SEMI, 0); }
	public codeBlock(): CodeBlockContext | undefined {
		return this.tryGetRuleContext(0, CodeBlockContext);
	}
	public nativeAssigment(): NativeAssigmentContext | undefined {
		return this.tryGetRuleContext(0, NativeAssigmentContext);
	}
	public tag(): TagContext | undefined {
		return this.tryGetRuleContext(0, TagContext);
	}
	public declParams(): DeclParamsContext[];
	public declParams(i: number): DeclParamsContext;
	public declParams(i?: number): DeclParamsContext | DeclParamsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclParamsContext);
		} else {
			return this.getRuleContext(i, DeclParamsContext);
		}
	}
	public COMA(): TerminalNode[];
	public COMA(i: number): TerminalNode;
	public COMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pawnParser.COMA);
		} else {
			return this.getToken(pawnParser.COMA, i);
		}
	}
	public ellipse(): EllipseContext | undefined {
		return this.tryGetRuleContext(0, EllipseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_operatorOverload; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterOperatorOverload) {
			listener.enterOperatorOverload(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitOperatorOverload) {
			listener.exitOperatorOverload(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitOperatorOverload) {
			return visitor.visitOperatorOverload(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NativeAssigmentContext extends ParserRuleContext {
	public ASSIGMENT(): TerminalNode { return this.getToken(pawnParser.ASSIGMENT, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(pawnParser.IDENTIFIER, 0); }
	public SEMI(): TerminalNode { return this.getToken(pawnParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_nativeAssigment; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterNativeAssigment) {
			listener.enterNativeAssigment(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitNativeAssigment) {
			listener.exitNativeAssigment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitNativeAssigment) {
			return visitor.visitNativeAssigment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(pawnParser.COLON, 0); }
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pawnParser.IDENTIFIER);
		} else {
			return this.getToken(pawnParser.IDENTIFIER, i);
		}
	}
	public CURLY_OPEN_BRACKET(): TerminalNode | undefined { return this.tryGetToken(pawnParser.CURLY_OPEN_BRACKET, 0); }
	public CURLY_CLOSE_BRACKET(): TerminalNode | undefined { return this.tryGetToken(pawnParser.CURLY_CLOSE_BRACKET, 0); }
	public COMA(): TerminalNode[];
	public COMA(i: number): TerminalNode;
	public COMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pawnParser.COMA);
		} else {
			return this.getToken(pawnParser.COMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_tag; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterTag) {
			listener.enterTag(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitTag) {
			listener.exitTag(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitTag) {
			return visitor.visitTag(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(pawnParser.IDENTIFIER, 0); }
	public tag(): TagContext | undefined {
		return this.tryGetRuleContext(0, TagContext);
	}
	public arrayIndex(): ArrayIndexContext[];
	public arrayIndex(i: number): ArrayIndexContext;
	public arrayIndex(i?: number): ArrayIndexContext | ArrayIndexContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArrayIndexContext);
		} else {
			return this.getRuleContext(i, ArrayIndexContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_variable; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterVariable) {
			listener.enterVariable(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitVariable) {
			listener.exitVariable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitVariable) {
			return visitor.visitVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayIndexContext extends ParserRuleContext {
	public SQUARE_OPEN_BRACKET(): TerminalNode { return this.getToken(pawnParser.SQUARE_OPEN_BRACKET, 0); }
	public SQUARE_CLOSE_BRACKET(): TerminalNode { return this.getToken(pawnParser.SQUARE_CLOSE_BRACKET, 0); }
	public expresion(): ExpresionContext | undefined {
		return this.tryGetRuleContext(0, ExpresionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_arrayIndex; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterArrayIndex) {
			listener.enterArrayIndex(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitArrayIndex) {
			listener.exitArrayIndex(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitArrayIndex) {
			return visitor.visitArrayIndex(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncDeclModifContext extends ParserRuleContext {
	public funcModif(): FuncModifContext | undefined {
		return this.tryGetRuleContext(0, FuncModifContext);
	}
	public FORWARD(): TerminalNode | undefined { return this.tryGetToken(pawnParser.FORWARD, 0); }
	public NATIVE(): TerminalNode | undefined { return this.tryGetToken(pawnParser.NATIVE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_funcDeclModif; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterFuncDeclModif) {
			listener.enterFuncDeclModif(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitFuncDeclModif) {
			listener.exitFuncDeclModif(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitFuncDeclModif) {
			return visitor.visitFuncDeclModif(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncModifContext extends ParserRuleContext {
	public STOCK(): TerminalNode | undefined { return this.tryGetToken(pawnParser.STOCK, 0); }
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(pawnParser.PUBLIC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_funcModif; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterFuncModif) {
			listener.enterFuncModif(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitFuncModif) {
			listener.exitFuncModif(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitFuncModif) {
			return visitor.visitFuncModif(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(pawnParser.SEMI, 0); }
	public var_definition(): Var_definitionContext | undefined {
		return this.tryGetRuleContext(0, Var_definitionContext);
	}
	public assigment(): AssigmentContext | undefined {
		return this.tryGetRuleContext(0, AssigmentContext);
	}
	public functionCall(): FunctionCallContext | undefined {
		return this.tryGetRuleContext(0, FunctionCallContext);
	}
	public return(): ReturnContext | undefined {
		return this.tryGetRuleContext(0, ReturnContext);
	}
	public controlStatments(): ControlStatmentsContext | undefined {
		return this.tryGetRuleContext(0, ControlStatmentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_statement; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ControlStatmentsContext extends ParserRuleContext {
	public if_statement(): If_statementContext | undefined {
		return this.tryGetRuleContext(0, If_statementContext);
	}
	public cycles(): CyclesContext | undefined {
		return this.tryGetRuleContext(0, CyclesContext);
	}
	public switch(): SwitchContext | undefined {
		return this.tryGetRuleContext(0, SwitchContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_controlStatments; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterControlStatments) {
			listener.enterControlStatments(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitControlStatments) {
			listener.exitControlStatments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitControlStatments) {
			return visitor.visitControlStatments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssigmentContext extends ParserRuleContext {
	public variable(): VariableContext {
		return this.getRuleContext(0, VariableContext);
	}
	public assigments(): AssigmentsContext[];
	public assigments(i: number): AssigmentsContext;
	public assigments(i?: number): AssigmentsContext | AssigmentsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssigmentsContext);
		} else {
			return this.getRuleContext(i, AssigmentsContext);
		}
	}
	public expresion(): ExpresionContext[];
	public expresion(i: number): ExpresionContext;
	public expresion(i?: number): ExpresionContext | ExpresionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpresionContext);
		} else {
			return this.getRuleContext(i, ExpresionContext);
		}
	}
	public arrayInit(): ArrayInitContext[];
	public arrayInit(i: number): ArrayInitContext;
	public arrayInit(i?: number): ArrayInitContext | ArrayInitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArrayInitContext);
		} else {
			return this.getRuleContext(i, ArrayInitContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_assigment; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterAssigment) {
			listener.enterAssigment(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitAssigment) {
			listener.exitAssigment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitAssigment) {
			return visitor.visitAssigment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayInitContext extends ParserRuleContext {
	public CURLY_OPEN_BRACKET(): TerminalNode { return this.getToken(pawnParser.CURLY_OPEN_BRACKET, 0); }
	public arrayInitMember(): ArrayInitMemberContext[];
	public arrayInitMember(i: number): ArrayInitMemberContext;
	public arrayInitMember(i?: number): ArrayInitMemberContext | ArrayInitMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArrayInitMemberContext);
		} else {
			return this.getRuleContext(i, ArrayInitMemberContext);
		}
	}
	public CURLY_CLOSE_BRACKET(): TerminalNode { return this.getToken(pawnParser.CURLY_CLOSE_BRACKET, 0); }
	public COMA(): TerminalNode[];
	public COMA(i: number): TerminalNode;
	public COMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pawnParser.COMA);
		} else {
			return this.getToken(pawnParser.COMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_arrayInit; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterArrayInit) {
			listener.enterArrayInit(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitArrayInit) {
			listener.exitArrayInit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitArrayInit) {
			return visitor.visitArrayInit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayInitMemberContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(pawnParser.IDENTIFIER, 0); }
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public tag(): TagContext | undefined {
		return this.tryGetRuleContext(0, TagContext);
	}
	public arrayInit(): ArrayInitContext | undefined {
		return this.tryGetRuleContext(0, ArrayInitContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_arrayInitMember; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterArrayInitMember) {
			listener.enterArrayInitMember(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitArrayInitMember) {
			listener.exitArrayInitMember(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitArrayInitMember) {
			return visitor.visitArrayInitMember(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssigmentsContext extends ParserRuleContext {
	public ASSIGMENT(): TerminalNode | undefined { return this.tryGetToken(pawnParser.ASSIGMENT, 0); }
	public ASSIGMENT_PLUS(): TerminalNode | undefined { return this.tryGetToken(pawnParser.ASSIGMENT_PLUS, 0); }
	public ASSIGMENT_MINUS(): TerminalNode | undefined { return this.tryGetToken(pawnParser.ASSIGMENT_MINUS, 0); }
	public ASSIGMENT_MULT(): TerminalNode | undefined { return this.tryGetToken(pawnParser.ASSIGMENT_MULT, 0); }
	public ASSIGMENT_DIV(): TerminalNode | undefined { return this.tryGetToken(pawnParser.ASSIGMENT_DIV, 0); }
	public ASSIGMENT_REMAINDE(): TerminalNode | undefined { return this.tryGetToken(pawnParser.ASSIGMENT_REMAINDE, 0); }
	public ASSIGMENT_AND(): TerminalNode | undefined { return this.tryGetToken(pawnParser.ASSIGMENT_AND, 0); }
	public ASSIGMENT_OR(): TerminalNode | undefined { return this.tryGetToken(pawnParser.ASSIGMENT_OR, 0); }
	public ASSIGMENT_XOR(): TerminalNode | undefined { return this.tryGetToken(pawnParser.ASSIGMENT_XOR, 0); }
	public ASSIGMENT_RIGHT(): TerminalNode | undefined { return this.tryGetToken(pawnParser.ASSIGMENT_RIGHT, 0); }
	public ASSIGMENT_RIGHT_LOG(): TerminalNode | undefined { return this.tryGetToken(pawnParser.ASSIGMENT_RIGHT_LOG, 0); }
	public ASSIGMENT_LEFT(): TerminalNode | undefined { return this.tryGetToken(pawnParser.ASSIGMENT_LEFT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_assigments; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterAssigments) {
			listener.enterAssigments(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitAssigments) {
			listener.exitAssigments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitAssigments) {
			return visitor.visitAssigments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupingContext extends ParserRuleContext {
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(pawnParser.OPEN_PARENTHESIS, 0); }
	public expresion(): ExpresionContext {
		return this.getRuleContext(0, ExpresionContext);
	}
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(pawnParser.CLOSE_PARENTHESIS, 0); }
	public tag(): TagContext | undefined {
		return this.tryGetRuleContext(0, TagContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_grouping; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterGrouping) {
			listener.enterGrouping(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitGrouping) {
			listener.exitGrouping(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitGrouping) {
			return visitor.visitGrouping(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstGroupingContext extends ParserRuleContext {
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(pawnParser.OPEN_PARENTHESIS, 0); }
	public constExpresion(): ConstExpresionContext {
		return this.getRuleContext(0, ConstExpresionContext);
	}
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(pawnParser.CLOSE_PARENTHESIS, 0); }
	public tag(): TagContext | undefined {
		return this.tryGetRuleContext(0, TagContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_constGrouping; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterConstGrouping) {
			listener.enterConstGrouping(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitConstGrouping) {
			listener.exitConstGrouping(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitConstGrouping) {
			return visitor.visitConstGrouping(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpresionContext extends ParserRuleContext {
	public rValue(): RValueContext | undefined {
		return this.tryGetRuleContext(0, RValueContext);
	}
	public grouping(): GroupingContext | undefined {
		return this.tryGetRuleContext(0, GroupingContext);
	}
	public ternarOperator(): TernarOperatorContext | undefined {
		return this.tryGetRuleContext(0, TernarOperatorContext);
	}
	public preOperators(): PreOperatorsContext | undefined {
		return this.tryGetRuleContext(0, PreOperatorsContext);
	}
	public operation(): OperationContext | undefined {
		return this.tryGetRuleContext(0, OperationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_expresion; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterExpresion) {
			listener.enterExpresion(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitExpresion) {
			listener.exitExpresion(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitExpresion) {
			return visitor.visitExpresion(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstExpresionContext extends ParserRuleContext {
	public varOrLiteral(): VarOrLiteralContext | undefined {
		return this.tryGetRuleContext(0, VarOrLiteralContext);
	}
	public constGrouping(): ConstGroupingContext | undefined {
		return this.tryGetRuleContext(0, ConstGroupingContext);
	}
	public arrayInit(): ArrayInitContext | undefined {
		return this.tryGetRuleContext(0, ArrayInitContext);
	}
	public preOperators(): PreOperatorsContext | undefined {
		return this.tryGetRuleContext(0, PreOperatorsContext);
	}
	public operation(): OperationContext | undefined {
		return this.tryGetRuleContext(0, OperationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_constExpresion; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterConstExpresion) {
			listener.enterConstExpresion(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitConstExpresion) {
			listener.exitConstExpresion(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitConstExpresion) {
			return visitor.visitConstExpresion(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TernarOperatorContext extends ParserRuleContext {
	public QUESTION(): TerminalNode { return this.getToken(pawnParser.QUESTION, 0); }
	public expresion(): ExpresionContext[];
	public expresion(i: number): ExpresionContext;
	public expresion(i?: number): ExpresionContext | ExpresionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpresionContext);
		} else {
			return this.getRuleContext(i, ExpresionContext);
		}
	}
	public COLON(): TerminalNode { return this.getToken(pawnParser.COLON, 0); }
	public rValue(): RValueContext | undefined {
		return this.tryGetRuleContext(0, RValueContext);
	}
	public grouping(): GroupingContext | undefined {
		return this.tryGetRuleContext(0, GroupingContext);
	}
	public operation(): OperationContext | undefined {
		return this.tryGetRuleContext(0, OperationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_ternarOperator; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterTernarOperator) {
			listener.enterTernarOperator(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitTernarOperator) {
			listener.exitTernarOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitTernarOperator) {
			return visitor.visitTernarOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PreOperatorsContext extends ParserRuleContext {
	public NOT(): TerminalNode | undefined { return this.tryGetToken(pawnParser.NOT, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(pawnParser.MINUS, 0); }
	public INCREMENTS(): TerminalNode | undefined { return this.tryGetToken(pawnParser.INCREMENTS, 0); }
	public DECREMENTS(): TerminalNode | undefined { return this.tryGetToken(pawnParser.DECREMENTS, 0); }
	public SIZEOF(): TerminalNode | undefined { return this.tryGetToken(pawnParser.SIZEOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_preOperators; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterPreOperators) {
			listener.enterPreOperators(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitPreOperators) {
			listener.exitPreOperators(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitPreOperators) {
			return visitor.visitPreOperators(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperationContext extends ParserRuleContext {
	public operator(): OperatorContext {
		return this.getRuleContext(0, OperatorContext);
	}
	public expresion(): ExpresionContext | undefined {
		return this.tryGetRuleContext(0, ExpresionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_operation; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterOperation) {
			listener.enterOperation(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitOperation) {
			listener.exitOperation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitOperation) {
			return visitor.visitOperation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarOrLiteralContext extends ParserRuleContext {
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public variable(): VariableContext | undefined {
		return this.tryGetRuleContext(0, VariableContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_varOrLiteral; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterVarOrLiteral) {
			listener.enterVarOrLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitVarOrLiteral) {
			listener.exitVarOrLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitVarOrLiteral) {
			return visitor.visitVarOrLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclParamsContext extends ParserRuleContext {
	public variable(): VariableContext[];
	public variable(i: number): VariableContext;
	public variable(i?: number): VariableContext | VariableContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableContext);
		} else {
			return this.getRuleContext(i, VariableContext);
		}
	}
	public CONST(): TerminalNode | undefined { return this.tryGetToken(pawnParser.CONST, 0); }
	public reference(): ReferenceContext | undefined {
		return this.tryGetRuleContext(0, ReferenceContext);
	}
	public ASSIGMENT(): TerminalNode | undefined { return this.tryGetToken(pawnParser.ASSIGMENT, 0); }
	public constExpresion(): ConstExpresionContext | undefined {
		return this.tryGetRuleContext(0, ConstExpresionContext);
	}
	public sizeof(): SizeofContext | undefined {
		return this.tryGetRuleContext(0, SizeofContext);
	}
	public OPEN_PARENTHESIS(): TerminalNode | undefined { return this.tryGetToken(pawnParser.OPEN_PARENTHESIS, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode | undefined { return this.tryGetToken(pawnParser.CLOSE_PARENTHESIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_declParams; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterDeclParams) {
			listener.enterDeclParams(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitDeclParams) {
			listener.exitDeclParams(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitDeclParams) {
			return visitor.visitDeclParams(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EllipseContext extends ParserRuleContext {
	public COMA(): TerminalNode { return this.getToken(pawnParser.COMA, 0); }
	public PERIOD_FUNC(): TerminalNode { return this.getToken(pawnParser.PERIOD_FUNC, 0); }
	public tag(): TagContext | undefined {
		return this.tryGetRuleContext(0, TagContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_ellipse; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterEllipse) {
			listener.enterEllipse(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitEllipse) {
			listener.exitEllipse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitEllipse) {
			return visitor.visitEllipse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReferenceContext extends ParserRuleContext {
	public BIT_AND(): TerminalNode { return this.getToken(pawnParser.BIT_AND, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_reference; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterReference) {
			listener.enterReference(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitReference) {
			listener.exitReference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitReference) {
			return visitor.visitReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarModifiresContext extends ParserRuleContext {
	public CONST(): TerminalNode | undefined { return this.tryGetToken(pawnParser.CONST, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(pawnParser.STATIC, 0); }
	public STOCK(): TerminalNode | undefined { return this.tryGetToken(pawnParser.STOCK, 0); }
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(pawnParser.PUBLIC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_varModifires; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterVarModifires) {
			listener.enterVarModifires(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitVarModifires) {
			listener.exitVarModifires(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitVarModifires) {
			return visitor.visitVarModifires(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RValueContext extends ParserRuleContext {
	public varOrLiteral(): VarOrLiteralContext | undefined {
		return this.tryGetRuleContext(0, VarOrLiteralContext);
	}
	public functionCall(): FunctionCallContext | undefined {
		return this.tryGetRuleContext(0, FunctionCallContext);
	}
	public grouping(): GroupingContext | undefined {
		return this.tryGetRuleContext(0, GroupingContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_rValue; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterRValue) {
			listener.enterRValue(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitRValue) {
			listener.exitRValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitRValue) {
			return visitor.visitRValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstRValueContext extends ParserRuleContext {
	public varOrLiteral(): VarOrLiteralContext | undefined {
		return this.tryGetRuleContext(0, VarOrLiteralContext);
	}
	public constGrouping(): ConstGroupingContext | undefined {
		return this.tryGetRuleContext(0, ConstGroupingContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_constRValue; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterConstRValue) {
			listener.enterConstRValue(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitConstRValue) {
			listener.exitConstRValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitConstRValue) {
			return visitor.visitConstRValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SizeofContext extends ParserRuleContext {
	public SIZEOF(): TerminalNode { return this.getToken(pawnParser.SIZEOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_sizeof; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterSizeof) {
			listener.enterSizeof(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitSizeof) {
			listener.exitSizeof(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitSizeof) {
			return visitor.visitSizeof(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	public integer(): IntegerContext | undefined {
		return this.tryGetRuleContext(0, IntegerContext);
	}
	public float(): FloatContext | undefined {
		return this.tryGetRuleContext(0, FloatContext);
	}
	public hex(): HexContext | undefined {
		return this.tryGetRuleContext(0, HexContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_number; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitNumber) {
			return visitor.visitNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntegerContext extends ParserRuleContext {
	public INTEGER(): TerminalNode { return this.getToken(pawnParser.INTEGER, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(pawnParser.MINUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_integer; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterInteger) {
			listener.enterInteger(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitInteger) {
			listener.exitInteger(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitInteger) {
			return visitor.visitInteger(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FloatContext extends ParserRuleContext {
	public FLOAT(): TerminalNode { return this.getToken(pawnParser.FLOAT, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(pawnParser.MINUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_float; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterFloat) {
			listener.enterFloat(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitFloat) {
			listener.exitFloat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitFloat) {
			return visitor.visitFloat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HexContext extends ParserRuleContext {
	public HEX(): TerminalNode { return this.getToken(pawnParser.HEX, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_hex; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterHex) {
			listener.enterHex(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitHex) {
			listener.exitHex(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitHex) {
			return visitor.visitHex(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperatorContext extends ParserRuleContext {
	public arefmeticOperator(): ArefmeticOperatorContext | undefined {
		return this.tryGetRuleContext(0, ArefmeticOperatorContext);
	}
	public logicOperator(): LogicOperatorContext | undefined {
		return this.tryGetRuleContext(0, LogicOperatorContext);
	}
	public bitwiseOperator(): BitwiseOperatorContext | undefined {
		return this.tryGetRuleContext(0, BitwiseOperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_operator; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterOperator) {
			listener.enterOperator(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitOperator) {
			listener.exitOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitOperator) {
			return visitor.visitOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CanBeOverloadedContext extends ParserRuleContext {
	public arefmeticOperator(): ArefmeticOperatorContext | undefined {
		return this.tryGetRuleContext(0, ArefmeticOperatorContext);
	}
	public compareOperator(): CompareOperatorContext | undefined {
		return this.tryGetRuleContext(0, CompareOperatorContext);
	}
	public ASSIGMENT(): TerminalNode | undefined { return this.tryGetToken(pawnParser.ASSIGMENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_canBeOverloaded; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterCanBeOverloaded) {
			listener.enterCanBeOverloaded(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitCanBeOverloaded) {
			listener.exitCanBeOverloaded(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitCanBeOverloaded) {
			return visitor.visitCanBeOverloaded(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArefmeticOperatorContext extends ParserRuleContext {
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(pawnParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(pawnParser.MINUS, 0); }
	public MULTY(): TerminalNode | undefined { return this.tryGetToken(pawnParser.MULTY, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(pawnParser.DIV, 0); }
	public REMAINDE(): TerminalNode | undefined { return this.tryGetToken(pawnParser.REMAINDE, 0); }
	public INCREMENTS(): TerminalNode | undefined { return this.tryGetToken(pawnParser.INCREMENTS, 0); }
	public DECREMENTS(): TerminalNode | undefined { return this.tryGetToken(pawnParser.DECREMENTS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_arefmeticOperator; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterArefmeticOperator) {
			listener.enterArefmeticOperator(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitArefmeticOperator) {
			listener.exitArefmeticOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitArefmeticOperator) {
			return visitor.visitArefmeticOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogicOperatorContext extends ParserRuleContext {
	public OR(): TerminalNode | undefined { return this.tryGetToken(pawnParser.OR, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(pawnParser.AND, 0); }
	public compareOperator(): CompareOperatorContext | undefined {
		return this.tryGetRuleContext(0, CompareOperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_logicOperator; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterLogicOperator) {
			listener.enterLogicOperator(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitLogicOperator) {
			listener.exitLogicOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitLogicOperator) {
			return visitor.visitLogicOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompareOperatorContext extends ParserRuleContext {
	public NOT(): TerminalNode | undefined { return this.tryGetToken(pawnParser.NOT, 0); }
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(pawnParser.EQUAL, 0); }
	public NOTEQUAL(): TerminalNode | undefined { return this.tryGetToken(pawnParser.NOTEQUAL, 0); }
	public LESS(): TerminalNode | undefined { return this.tryGetToken(pawnParser.LESS, 0); }
	public LARGER(): TerminalNode | undefined { return this.tryGetToken(pawnParser.LARGER, 0); }
	public LESSEQ(): TerminalNode | undefined { return this.tryGetToken(pawnParser.LESSEQ, 0); }
	public LARGEREQ(): TerminalNode | undefined { return this.tryGetToken(pawnParser.LARGEREQ, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_compareOperator; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterCompareOperator) {
			listener.enterCompareOperator(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitCompareOperator) {
			listener.exitCompareOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitCompareOperator) {
			return visitor.visitCompareOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BitwiseOperatorContext extends ParserRuleContext {
	public BIT_AND(): TerminalNode | undefined { return this.tryGetToken(pawnParser.BIT_AND, 0); }
	public BIT_OR(): TerminalNode | undefined { return this.tryGetToken(pawnParser.BIT_OR, 0); }
	public BIT_RIGHT(): TerminalNode | undefined { return this.tryGetToken(pawnParser.BIT_RIGHT, 0); }
	public BIT_LEFT(): TerminalNode | undefined { return this.tryGetToken(pawnParser.BIT_LEFT, 0); }
	public BIT_XOR(): TerminalNode | undefined { return this.tryGetToken(pawnParser.BIT_XOR, 0); }
	public BIT_COMPLEMEN(): TerminalNode | undefined { return this.tryGetToken(pawnParser.BIT_COMPLEMEN, 0); }
	public BIT_RIGHT_LOG(): TerminalNode | undefined { return this.tryGetToken(pawnParser.BIT_RIGHT_LOG, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_bitwiseOperator; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterBitwiseOperator) {
			listener.enterBitwiseOperator(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitBitwiseOperator) {
			listener.exitBitwiseOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitBitwiseOperator) {
			return visitor.visitBitwiseOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class If_statementContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(pawnParser.IF, 0); }
	public condition(): ConditionContext {
		return this.getRuleContext(0, ConditionContext);
	}
	public codeBlock(): CodeBlockContext {
		return this.getRuleContext(0, CodeBlockContext);
	}
	public else_statement(): Else_statementContext | undefined {
		return this.tryGetRuleContext(0, Else_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_if_statement; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterIf_statement) {
			listener.enterIf_statement(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitIf_statement) {
			listener.exitIf_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitIf_statement) {
			return visitor.visitIf_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Else_statementContext extends ParserRuleContext {
	public ELSE(): TerminalNode { return this.getToken(pawnParser.ELSE, 0); }
	public if_statement(): If_statementContext | undefined {
		return this.tryGetRuleContext(0, If_statementContext);
	}
	public codeBlock(): CodeBlockContext | undefined {
		return this.tryGetRuleContext(0, CodeBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_else_statement; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterElse_statement) {
			listener.enterElse_statement(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitElse_statement) {
			listener.exitElse_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitElse_statement) {
			return visitor.visitElse_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchContext extends ParserRuleContext {
	public SWITCH(): TerminalNode { return this.getToken(pawnParser.SWITCH, 0); }
	public condition(): ConditionContext {
		return this.getRuleContext(0, ConditionContext);
	}
	public CURLY_OPEN_BRACKET(): TerminalNode { return this.getToken(pawnParser.CURLY_OPEN_BRACKET, 0); }
	public CURLY_CLOSE_BRACKET(): TerminalNode { return this.getToken(pawnParser.CURLY_CLOSE_BRACKET, 0); }
	public case(): CaseContext[];
	public case(i: number): CaseContext;
	public case(i?: number): CaseContext | CaseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CaseContext);
		} else {
			return this.getRuleContext(i, CaseContext);
		}
	}
	public default(): DefaultContext | undefined {
		return this.tryGetRuleContext(0, DefaultContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_switch; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterSwitch) {
			listener.enterSwitch(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitSwitch) {
			listener.exitSwitch(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitSwitch) {
			return visitor.visitSwitch(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CaseContext extends ParserRuleContext {
	public CASE(): TerminalNode { return this.getToken(pawnParser.CASE, 0); }
	public case_list(): Case_listContext[];
	public case_list(i: number): Case_listContext;
	public case_list(i?: number): Case_listContext | Case_listContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Case_listContext);
		} else {
			return this.getRuleContext(i, Case_listContext);
		}
	}
	public COLON(): TerminalNode { return this.getToken(pawnParser.COLON, 0); }
	public codeBlock(): CodeBlockContext {
		return this.getRuleContext(0, CodeBlockContext);
	}
	public COMA(): TerminalNode[];
	public COMA(i: number): TerminalNode;
	public COMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pawnParser.COMA);
		} else {
			return this.getToken(pawnParser.COMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_case; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterCase) {
			listener.enterCase(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitCase) {
			listener.exitCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitCase) {
			return visitor.visitCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefaultContext extends ParserRuleContext {
	public DEFAULT(): TerminalNode { return this.getToken(pawnParser.DEFAULT, 0); }
	public COLON(): TerminalNode { return this.getToken(pawnParser.COLON, 0); }
	public codeBlock(): CodeBlockContext {
		return this.getRuleContext(0, CodeBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_default; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterDefault) {
			listener.enterDefault(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitDefault) {
			listener.exitDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitDefault) {
			return visitor.visitDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Case_listContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(pawnParser.IDENTIFIER, 0); }
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public range(): RangeContext | undefined {
		return this.tryGetRuleContext(0, RangeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_case_list; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterCase_list) {
			listener.enterCase_list(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitCase_list) {
			listener.exitCase_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitCase_list) {
			return visitor.visitCase_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RangeContext extends ParserRuleContext {
	public PERIOD(): TerminalNode { return this.getToken(pawnParser.PERIOD, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(pawnParser.IDENTIFIER, 0); }
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_range; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterRange) {
			listener.enterRange(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitRange) {
			listener.exitRange(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitRange) {
			return visitor.visitRange(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionContext extends ParserRuleContext {
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(pawnParser.OPEN_PARENTHESIS, 0); }
	public expresion(): ExpresionContext {
		return this.getRuleContext(0, ExpresionContext);
	}
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(pawnParser.CLOSE_PARENTHESIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_condition; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterCondition) {
			listener.enterCondition(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitCondition) {
			listener.exitCondition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitCondition) {
			return visitor.visitCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CodeBlockContext extends ParserRuleContext {
	public CURLY_OPEN_BRACKET(): TerminalNode | undefined { return this.tryGetToken(pawnParser.CURLY_OPEN_BRACKET, 0); }
	public CURLY_CLOSE_BRACKET(): TerminalNode | undefined { return this.tryGetToken(pawnParser.CURLY_CLOSE_BRACKET, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_codeBlock; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterCodeBlock) {
			listener.enterCodeBlock(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitCodeBlock) {
			listener.exitCodeBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitCodeBlock) {
			return visitor.visitCodeBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnContext extends ParserRuleContext {
	public RETURN(): TerminalNode { return this.getToken(pawnParser.RETURN, 0); }
	public expresion(): ExpresionContext | undefined {
		return this.tryGetRuleContext(0, ExpresionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_return; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterReturn) {
			listener.enterReturn(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitReturn) {
			listener.exitReturn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitReturn) {
			return visitor.visitReturn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CyclesContext extends ParserRuleContext {
	public while(): WhileContext | undefined {
		return this.tryGetRuleContext(0, WhileContext);
	}
	public for(): ForContext | undefined {
		return this.tryGetRuleContext(0, ForContext);
	}
	public do(): DoContext | undefined {
		return this.tryGetRuleContext(0, DoContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_cycles; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterCycles) {
			listener.enterCycles(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitCycles) {
			listener.exitCycles(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitCycles) {
			return visitor.visitCycles(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DoContext extends ParserRuleContext {
	public DO(): TerminalNode { return this.getToken(pawnParser.DO, 0); }
	public cycleBody(): CycleBodyContext {
		return this.getRuleContext(0, CycleBodyContext);
	}
	public WHILE(): TerminalNode | undefined { return this.tryGetToken(pawnParser.WHILE, 0); }
	public condition(): ConditionContext | undefined {
		return this.tryGetRuleContext(0, ConditionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_do; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterDo) {
			listener.enterDo(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitDo) {
			listener.exitDo(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitDo) {
			return visitor.visitDo(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileContext extends ParserRuleContext {
	public WHILE(): TerminalNode { return this.getToken(pawnParser.WHILE, 0); }
	public condition(): ConditionContext {
		return this.getRuleContext(0, ConditionContext);
	}
	public cycleBody(): CycleBodyContext {
		return this.getRuleContext(0, CycleBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_while; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterWhile) {
			listener.enterWhile(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitWhile) {
			listener.exitWhile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitWhile) {
			return visitor.visitWhile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(pawnParser.FOR, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(pawnParser.OPEN_PARENTHESIS, 0); }
	public var_definition(): Var_definitionContext {
		return this.getRuleContext(0, Var_definitionContext);
	}
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pawnParser.SEMI);
		} else {
			return this.getToken(pawnParser.SEMI, i);
		}
	}
	public expresion(): ExpresionContext[];
	public expresion(i: number): ExpresionContext;
	public expresion(i?: number): ExpresionContext | ExpresionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpresionContext);
		} else {
			return this.getRuleContext(i, ExpresionContext);
		}
	}
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(pawnParser.CLOSE_PARENTHESIS, 0); }
	public cycleBody(): CycleBodyContext {
		return this.getRuleContext(0, CycleBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_for; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterFor) {
			listener.enterFor(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitFor) {
			listener.exitFor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitFor) {
			return visitor.visitFor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CycleBodyContext extends ParserRuleContext {
	public cycleKeywords(): CycleKeywordsContext[];
	public cycleKeywords(i: number): CycleKeywordsContext;
	public cycleKeywords(i?: number): CycleKeywordsContext | CycleKeywordsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CycleKeywordsContext);
		} else {
			return this.getRuleContext(i, CycleKeywordsContext);
		}
	}
	public CURLY_OPEN_BRACKET(): TerminalNode | undefined { return this.tryGetToken(pawnParser.CURLY_OPEN_BRACKET, 0); }
	public CURLY_CLOSE_BRACKET(): TerminalNode | undefined { return this.tryGetToken(pawnParser.CURLY_CLOSE_BRACKET, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_cycleBody; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterCycleBody) {
			listener.enterCycleBody(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitCycleBody) {
			listener.exitCycleBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitCycleBody) {
			return visitor.visitCycleBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CycleKeywordsContext extends ParserRuleContext {
	public SEMI(): TerminalNode { return this.getToken(pawnParser.SEMI, 0); }
	public BREAK(): TerminalNode | undefined { return this.tryGetToken(pawnParser.BREAK, 0); }
	public CONTINUE(): TerminalNode | undefined { return this.tryGetToken(pawnParser.CONTINUE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_cycleKeywords; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterCycleKeywords) {
			listener.enterCycleKeywords(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitCycleKeywords) {
			listener.exitCycleKeywords(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitCycleKeywords) {
			return visitor.visitCycleKeywords(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public bool_const(): Bool_constContext | undefined {
		return this.tryGetRuleContext(0, Bool_constContext);
	}
	public tag(): TagContext | undefined {
		return this.tryGetRuleContext(0, TagContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_literal; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Bool_constContext extends ParserRuleContext {
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(pawnParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(pawnParser.FALSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_bool_const; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterBool_const) {
			listener.enterBool_const(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitBool_const) {
			listener.exitBool_const(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitBool_const) {
			return visitor.visitBool_const(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	public STRING(): TerminalNode | undefined { return this.tryGetToken(pawnParser.STRING, 0); }
	public SHARPSTRING(): TerminalNode | undefined { return this.tryGetToken(pawnParser.SHARPSTRING, 0); }
	public string(): StringContext[];
	public string(i: number): StringContext;
	public string(i?: number): StringContext | StringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringContext);
		} else {
			return this.getRuleContext(i, StringContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_string; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitString) {
			return visitor.visitString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(pawnParser.IDENTIFIER, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(pawnParser.OPEN_PARENTHESIS, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(pawnParser.CLOSE_PARENTHESIS, 0); }
	public tag(): TagContext | undefined {
		return this.tryGetRuleContext(0, TagContext);
	}
	public expresion(): ExpresionContext[];
	public expresion(i: number): ExpresionContext;
	public expresion(i?: number): ExpresionContext | ExpresionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpresionContext);
		} else {
			return this.getRuleContext(i, ExpresionContext);
		}
	}
	public COMA(): TerminalNode[];
	public COMA(i: number): TerminalNode;
	public COMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pawnParser.COMA);
		} else {
			return this.getToken(pawnParser.COMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_functionCall; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterFunctionCall) {
			listener.enterFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitFunctionCall) {
			listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DocsContext extends ParserRuleContext {
	public docBlock(): DocBlockContext | undefined {
		return this.tryGetRuleContext(0, DocBlockContext);
	}
	public docLine(): DocLineContext | undefined {
		return this.tryGetRuleContext(0, DocLineContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_docs; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterDocs) {
			listener.enterDocs(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitDocs) {
			listener.exitDocs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitDocs) {
			return visitor.visitDocs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DocBlockContext extends ParserRuleContext {
	public DocBlock(): TerminalNode { return this.getToken(pawnParser.DocBlock, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_docBlock; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterDocBlock) {
			listener.enterDocBlock(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitDocBlock) {
			listener.exitDocBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitDocBlock) {
			return visitor.visitDocBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DocLineContext extends ParserRuleContext {
	public DocLine(): TerminalNode { return this.getToken(pawnParser.DocLine, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_docLine; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterDocLine) {
			listener.enterDocLine(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitDocLine) {
			listener.exitDocLine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitDocLine) {
			return visitor.visitDocLine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


