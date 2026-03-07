// Generated from ./server/src/antlr/generated/pawn.g4 by ANTLR 4.9.0-SNAPSHOT


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
	public static readonly T__0 = 1;
	public static readonly OPEN_PARENTHESIS = 2;
	public static readonly CLOSE_PARENTHESIS = 3;
	public static readonly CURLY_OPEN_BRACKET = 4;
	public static readonly CURLY_CLOSE_BRACKET = 5;
	public static readonly SQUARE_OPEN_BRACKET = 6;
	public static readonly SQUARE_CLOSE_BRACKET = 7;
	public static readonly COMA = 8;
	public static readonly SEMI = 9;
	public static readonly ASSIGMENT = 10;
	public static readonly ASSIGMENT_PLUS = 11;
	public static readonly ASSIGMENT_MINUS = 12;
	public static readonly ASSIGMENT_MULT = 13;
	public static readonly ASSIGMENT_DIV = 14;
	public static readonly ASSIGMENT_REMAINDE = 15;
	public static readonly ASSIGMENT_AND = 16;
	public static readonly ASSIGMENT_OR = 17;
	public static readonly ASSIGMENT_XOR = 18;
	public static readonly ASSIGMENT_RIGHT = 19;
	public static readonly ASSIGMENT_RIGHT_LOG = 20;
	public static readonly ASSIGMENT_LEFT = 21;
	public static readonly PLUS = 22;
	public static readonly MINUS = 23;
	public static readonly MULTY = 24;
	public static readonly DIV = 25;
	public static readonly REMAINDE = 26;
	public static readonly INCREMENTS = 27;
	public static readonly DECREMENTS = 28;
	public static readonly EQUAL = 29;
	public static readonly NOTEQUAL = 30;
	public static readonly LESS = 31;
	public static readonly LARGER = 32;
	public static readonly LESSEQ = 33;
	public static readonly LARGEREQ = 34;
	public static readonly QUESTION = 35;
	public static readonly COLON = 36;
	public static readonly OR = 37;
	public static readonly AND = 38;
	public static readonly NOT = 39;
	public static readonly BIT_AND = 40;
	public static readonly BIT_OR = 41;
	public static readonly BIT_XOR = 42;
	public static readonly BIT_COMPLEMEN = 43;
	public static readonly BIT_RIGHT = 44;
	public static readonly BIT_LEFT = 45;
	public static readonly BIT_RIGHT_LOG = 46;
	public static readonly PERIOD = 47;
	public static readonly PERIOD_FUNC = 48;
	public static readonly ASSERT = 49;
	public static readonly EXIT = 50;
	public static readonly GOTO = 51;
	public static readonly SLEEP = 52;
	public static readonly STATE = 53;
	public static readonly RETURN = 54;
	public static readonly NEW = 55;
	public static readonly ENUM = 56;
	public static readonly CONST = 57;
	public static readonly STATIC = 58;
	public static readonly STOCK = 59;
	public static readonly FORWARD = 60;
	public static readonly NATIVE = 61;
	public static readonly PUBLIC = 62;
	public static readonly OPERATOR = 63;
	public static readonly IF = 64;
	public static readonly THEN = 65;
	public static readonly ELSE = 66;
	public static readonly SWITCH = 67;
	public static readonly CASE = 68;
	public static readonly DEFAULT = 69;
	public static readonly WHILE = 70;
	public static readonly FOR = 71;
	public static readonly DO = 72;
	public static readonly CONTINUE = 73;
	public static readonly BREAK = 74;
	public static readonly CHAR = 75;
	public static readonly DEFINED = 76;
	public static readonly SIZEOF = 77;
	public static readonly TAGOF = 78;
	public static readonly TRUE = 79;
	public static readonly FALSE = 80;
	public static readonly CELLBITS = 81;
	public static readonly CELLMAX = 82;
	public static readonly CELLMIN = 83;
	public static readonly CHARBITS = 84;
	public static readonly CHARMAX = 85;
	public static readonly CHARMIN = 86;
	public static readonly DEBUG = 87;
	public static readonly LINE = 88;
	public static readonly PAWN = 89;
	public static readonly UCHARMAX = 90;
	public static readonly SHARPSTRING = 91;
	public static readonly STRING = 92;
	public static readonly CHAR_STRING = 93;
	public static readonly IDENTIFIER = 94;
	public static readonly SKIP_PARAM = 95;
	public static readonly BINARY = 96;
	public static readonly HEX = 97;
	public static readonly INTEGER = 98;
	public static readonly FLOAT = 99;
	public static readonly RATIONAL = 100;
	public static readonly BACKSLAH = 101;
	public static readonly Whitespace = 102;
	public static readonly Newline = 103;
	public static readonly DocBlock = 104;
	public static readonly BlockComment = 105;
	public static readonly LineComment = 106;
	public static readonly RULE_file = 0;
	public static readonly RULE_processorLabel = 1;
	public static readonly RULE_declaration = 2;
	public static readonly RULE_enum = 3;
	public static readonly RULE_enumMember = 4;
	public static readonly RULE_enumIterator = 5;
	public static readonly RULE_varDeclaration = 6;
	public static readonly RULE_variableDeclaration = 7;
	public static readonly RULE_functionDecl = 8;
	public static readonly RULE_operatorOverload = 9;
	public static readonly RULE_functionDeclarationParams = 10;
	public static readonly RULE_nativeAssigment = 11;
	public static readonly RULE_tag = 12;
	public static readonly RULE_pluralTag = 13;
	public static readonly RULE_arrayIndex = 14;
	public static readonly RULE_funcDeclModif = 15;
	public static readonly RULE_funcModif = 16;
	public static readonly RULE_statement = 17;
	public static readonly RULE_compoundStatment = 18;
	public static readonly RULE_assert = 19;
	public static readonly RULE_exit = 20;
	public static readonly RULE_goto = 21;
	public static readonly RULE_sleep = 22;
	public static readonly RULE_ifStatement = 23;
	public static readonly RULE_elseStatement = 24;
	public static readonly RULE_return = 25;
	public static readonly RULE_condition = 26;
	public static readonly RULE_switch = 27;
	public static readonly RULE_case = 28;
	public static readonly RULE_default = 29;
	public static readonly RULE_case_list = 30;
	public static readonly RULE_arrayInit = 31;
	public static readonly RULE_arrayInitMember = 32;
	public static readonly RULE_assigments = 33;
	public static readonly RULE_declParams = 34;
	public static readonly RULE_ellipse = 35;
	public static readonly RULE_reference = 36;
	public static readonly RULE_varModifires = 37;
	public static readonly RULE_number = 38;
	public static readonly RULE_float = 39;
	public static readonly RULE_integer = 40;
	public static readonly RULE_hex = 41;
	public static readonly RULE_rational = 42;
	public static readonly RULE_binary = 43;
	public static readonly RULE_canBeOverloaded = 44;
	public static readonly RULE_arefmeticOperator = 45;
	public static readonly RULE_compareOperator = 46;
	public static readonly RULE_cycles = 47;
	public static readonly RULE_do = 48;
	public static readonly RULE_while = 49;
	public static readonly RULE_for = 50;
	public static readonly RULE_forFirstExp = 51;
	public static readonly RULE_cycleKeywords = 52;
	public static readonly RULE_literal = 53;
	public static readonly RULE_bool_const = 54;
	public static readonly RULE_predefinedConstants = 55;
	public static readonly RULE_string = 56;
	public static readonly RULE_docs = 57;
	public static readonly RULE_docBlock = 58;
	public static readonly RULE_assigmentExpression = 59;
	public static readonly RULE_ternaryExpression = 60;
	public static readonly RULE_logicalOrExpression = 61;
	public static readonly RULE_logicalAndExpression = 62;
	public static readonly RULE_equalOrNotExpression = 63;
	public static readonly RULE_compareExpression = 64;
	public static readonly RULE_bitOrExpression = 65;
	public static readonly RULE_xorExpression = 66;
	public static readonly RULE_bitAndExpression = 67;
	public static readonly RULE_bitShiftExpression = 68;
	public static readonly RULE_additiveExpression = 69;
	public static readonly RULE_multiplicativeExpression = 70;
	public static readonly RULE_prefixExpression = 71;
	public static readonly RULE_postfixExpression = 72;
	public static readonly RULE_functionOrArrayExpression = 73;
	public static readonly RULE_primaryExpression = 74;
	public static readonly RULE_literalOrSymbol = 75;
	public static readonly RULE_compoundExpression = 76;
	public static readonly RULE_expresion = 77;
	public static readonly RULE_functionCallOperator = 78;
	public static readonly RULE_functionArgument = 79;
	public static readonly RULE_symbol = 80;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"file", "processorLabel", "declaration", "enum", "enumMember", "enumIterator", 
		"varDeclaration", "variableDeclaration", "functionDecl", "operatorOverload", 
		"functionDeclarationParams", "nativeAssigment", "tag", "pluralTag", "arrayIndex", 
		"funcDeclModif", "funcModif", "statement", "compoundStatment", "assert", 
		"exit", "goto", "sleep", "ifStatement", "elseStatement", "return", "condition", 
		"switch", "case", "default", "case_list", "arrayInit", "arrayInitMember", 
		"assigments", "declParams", "ellipse", "reference", "varModifires", "number", 
		"float", "integer", "hex", "rational", "binary", "canBeOverloaded", "arefmeticOperator", 
		"compareOperator", "cycles", "do", "while", "for", "forFirstExp", "cycleKeywords", 
		"literal", "bool_const", "predefinedConstants", "string", "docs", "docBlock", 
		"assigmentExpression", "ternaryExpression", "logicalOrExpression", "logicalAndExpression", 
		"equalOrNotExpression", "compareExpression", "bitOrExpression", "xorExpression", 
		"bitAndExpression", "bitShiftExpression", "additiveExpression", "multiplicativeExpression", 
		"prefixExpression", "postfixExpression", "functionOrArrayExpression", 
		"primaryExpression", "literalOrSymbol", "compoundExpression", "expresion", 
		"functionCallOperator", "functionArgument", "symbol",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'.'", "'('", "')'", "'{'", "'}'", "'['", "']'", "','", "';'", 
		"'='", "'+='", "'-='", "'*='", "'/='", "'%='", "'&='", "'|='", "'^='", 
		"'>>='", "'>>>='", "'<<='", "'+'", "'-'", "'*'", "'/'", "'%'", "'++'", 
		"'--'", "'=='", "'!='", "'<'", "'>'", "'<='", "'>='", "'?'", "':'", "'||'", 
		"'&&'", "'!'", "'&'", "'|'", "'^'", "'~'", "'>>'", "'<<'", "'>>>'", "'..'", 
		"'...'", "'assert'", "'exit'", "'goto'", "'sleep'", "'state'", "'return'", 
		"'new'", "'enum'", "'const'", "'static'", "'stock'", "'forward'", "'native'", 
		"'public'", "'operator'", "'if'", "'*then'", "'else'", "'switch'", "'case'", 
		"'default'", "'while'", "'for'", "'do'", "'continue'", "'break'", "'char'", 
		"'defined'", "'sizeof'", "'tagof'", "'true'", "'false'", "'cellbits'", 
		"'cellmax'", "'cellmin'", "'charbits'", "'charmax'", "'charmin'", "'debug'", 
		"'__line'", "'__Pawn'", "'ucharmax'", undefined, undefined, undefined, 
		undefined, "'_'", undefined, undefined, undefined, undefined, undefined, 
		"'\\'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, "OPEN_PARENTHESIS", "CLOSE_PARENTHESIS", "CURLY_OPEN_BRACKET", 
		"CURLY_CLOSE_BRACKET", "SQUARE_OPEN_BRACKET", "SQUARE_CLOSE_BRACKET", 
		"COMA", "SEMI", "ASSIGMENT", "ASSIGMENT_PLUS", "ASSIGMENT_MINUS", "ASSIGMENT_MULT", 
		"ASSIGMENT_DIV", "ASSIGMENT_REMAINDE", "ASSIGMENT_AND", "ASSIGMENT_OR", 
		"ASSIGMENT_XOR", "ASSIGMENT_RIGHT", "ASSIGMENT_RIGHT_LOG", "ASSIGMENT_LEFT", 
		"PLUS", "MINUS", "MULTY", "DIV", "REMAINDE", "INCREMENTS", "DECREMENTS", 
		"EQUAL", "NOTEQUAL", "LESS", "LARGER", "LESSEQ", "LARGEREQ", "QUESTION", 
		"COLON", "OR", "AND", "NOT", "BIT_AND", "BIT_OR", "BIT_XOR", "BIT_COMPLEMEN", 
		"BIT_RIGHT", "BIT_LEFT", "BIT_RIGHT_LOG", "PERIOD", "PERIOD_FUNC", "ASSERT", 
		"EXIT", "GOTO", "SLEEP", "STATE", "RETURN", "NEW", "ENUM", "CONST", "STATIC", 
		"STOCK", "FORWARD", "NATIVE", "PUBLIC", "OPERATOR", "IF", "THEN", "ELSE", 
		"SWITCH", "CASE", "DEFAULT", "WHILE", "FOR", "DO", "CONTINUE", "BREAK", 
		"CHAR", "DEFINED", "SIZEOF", "TAGOF", "TRUE", "FALSE", "CELLBITS", "CELLMAX", 
		"CELLMIN", "CHARBITS", "CHARMAX", "CHARMIN", "DEBUG", "LINE", "PAWN", 
		"UCHARMAX", "SHARPSTRING", "STRING", "CHAR_STRING", "IDENTIFIER", "SKIP_PARAM", 
		"BINARY", "HEX", "INTEGER", "FLOAT", "RATIONAL", "BACKSLAH", "Whitespace", 
		"Newline", "DocBlock", "BlockComment", "LineComment",
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
			this.state = 176;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 162;
				this.processorLabel();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 166;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 163;
						this.docs();
						}
						}
					}
					this.state = 168;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
				}
				this.state = 172;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (pawnParser.NEW - 55)) | (1 << (pawnParser.ENUM - 55)) | (1 << (pawnParser.CONST - 55)) | (1 << (pawnParser.STATIC - 55)) | (1 << (pawnParser.STOCK - 55)) | (1 << (pawnParser.FORWARD - 55)) | (1 << (pawnParser.NATIVE - 55)) | (1 << (pawnParser.PUBLIC - 55)) | (1 << (pawnParser.OPERATOR - 55)))) !== 0) || _la === pawnParser.IDENTIFIER || _la === pawnParser.DocBlock) {
					{
					{
					this.state = 169;
					this.declaration();
					}
					}
					this.state = 174;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				this.state = 175;
				this.match(pawnParser.EOF);
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
	public processorLabel(): ProcessorLabelContext {
		let _localctx: ProcessorLabelContext = new ProcessorLabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, pawnParser.RULE_processorLabel);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 178;
			this.match(pawnParser.IDENTIFIER);
			this.state = 179;
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
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, pawnParser.RULE_declaration);
		let _la: number;
		try {
			this.state = 195;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 184;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === pawnParser.DocBlock) {
					{
					{
					this.state = 181;
					this.docs();
					}
					}
					this.state = 186;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 192;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
				case 1:
					{
					this.state = 187;
					this.functionDecl();
					}
					break;

				case 2:
					{
					this.state = 188;
					this.operatorOverload();
					}
					break;

				case 3:
					{
					this.state = 189;
					this.varDeclaration();
					this.state = 190;
					this.match(pawnParser.SEMI);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 194;
				this.enum();
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
	public enum(): EnumContext {
		let _localctx: EnumContext = new EnumContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, pawnParser.RULE_enum);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 198;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.STATIC) {
				{
				this.state = 197;
				this.match(pawnParser.STATIC);
				}
			}

			this.state = 200;
			this.match(pawnParser.ENUM);
			this.state = 202;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				{
				this.state = 201;
				this.tag();
				}
				break;
			}
			this.state = 205;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.IDENTIFIER) {
				{
				this.state = 204;
				this.match(pawnParser.IDENTIFIER);
				}
			}

			this.state = 208;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.OPEN_PARENTHESIS) {
				{
				this.state = 207;
				this.enumIterator();
				}
			}

			this.state = 210;
			this.match(pawnParser.CURLY_OPEN_BRACKET);
			this.state = 222;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.IDENTIFIER) {
				{
				this.state = 211;
				this.enumMember();
				this.state = 216;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 212;
						this.match(pawnParser.COMA);
						this.state = 213;
						this.enumMember();
						}
						}
					}
					this.state = 218;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
				}
				this.state = 220;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === pawnParser.COMA) {
					{
					this.state = 219;
					this.match(pawnParser.COMA);
					}
				}

				}
			}

			this.state = 224;
			this.match(pawnParser.CURLY_CLOSE_BRACKET);
			this.state = 226;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				{
				this.state = 225;
				this.match(pawnParser.SEMI);
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
	public enumMember(): EnumMemberContext {
		let _localctx: EnumMemberContext = new EnumMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, pawnParser.RULE_enumMember);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 229;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				{
				this.state = 228;
				this.tag();
				}
				break;
			}
			this.state = 231;
			this.match(pawnParser.IDENTIFIER);
			this.state = 236;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.SQUARE_OPEN_BRACKET) {
				{
				this.state = 232;
				this.match(pawnParser.SQUARE_OPEN_BRACKET);
				this.state = 233;
				this.expresion();
				this.state = 234;
				this.match(pawnParser.SQUARE_CLOSE_BRACKET);
				}
			}

			this.state = 240;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.ASSIGMENT) {
				{
				this.state = 238;
				this.match(pawnParser.ASSIGMENT);
				this.state = 239;
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
		this.enterRule(_localctx, 10, pawnParser.RULE_enumIterator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 242;
			this.match(pawnParser.OPEN_PARENTHESIS);
			this.state = 243;
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
			this.state = 244;
			this.match(pawnParser.INTEGER);
			this.state = 245;
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
	public varDeclaration(): VarDeclarationContext {
		let _localctx: VarDeclarationContext = new VarDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, pawnParser.RULE_varDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 259;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.NEW:
				{
				this.state = 247;
				this.match(pawnParser.NEW);
				this.state = 251;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (pawnParser.CONST - 57)) | (1 << (pawnParser.STATIC - 57)) | (1 << (pawnParser.STOCK - 57)) | (1 << (pawnParser.PUBLIC - 57)))) !== 0)) {
					{
					{
					this.state = 248;
					this.varModifires();
					}
					}
					this.state = 253;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case pawnParser.CONST:
			case pawnParser.STATIC:
			case pawnParser.STOCK:
			case pawnParser.PUBLIC:
				{
				this.state = 255;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 254;
					this.varModifires();
					}
					}
					this.state = 257;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (pawnParser.CONST - 57)) | (1 << (pawnParser.STATIC - 57)) | (1 << (pawnParser.STOCK - 57)) | (1 << (pawnParser.PUBLIC - 57)))) !== 0));
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 261;
			this.variableDeclaration();
			this.state = 266;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pawnParser.COMA) {
				{
				{
				this.state = 262;
				this.match(pawnParser.COMA);
				this.state = 263;
				this.variableDeclaration();
				}
				}
				this.state = 268;
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
	public variableDeclaration(): VariableDeclarationContext {
		let _localctx: VariableDeclarationContext = new VariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, pawnParser.RULE_variableDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 270;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				{
				this.state = 269;
				this.tag();
				}
				break;
			}
			this.state = 272;
			this.match(pawnParser.IDENTIFIER);
			this.state = 279;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pawnParser.SQUARE_OPEN_BRACKET) {
				{
				{
				this.state = 273;
				this.match(pawnParser.SQUARE_OPEN_BRACKET);
				this.state = 274;
				this.expresion();
				this.state = 275;
				this.match(pawnParser.SQUARE_CLOSE_BRACKET);
				}
				}
				this.state = 281;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 287;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.ASSIGMENT) {
				{
				this.state = 282;
				this.match(pawnParser.ASSIGMENT);
				this.state = 285;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case pawnParser.OPEN_PARENTHESIS:
				case pawnParser.MINUS:
				case pawnParser.INCREMENTS:
				case pawnParser.DECREMENTS:
				case pawnParser.NOT:
				case pawnParser.BIT_COMPLEMEN:
				case pawnParser.STATE:
				case pawnParser.DEFINED:
				case pawnParser.SIZEOF:
				case pawnParser.TAGOF:
				case pawnParser.TRUE:
				case pawnParser.FALSE:
				case pawnParser.CELLBITS:
				case pawnParser.CELLMAX:
				case pawnParser.CELLMIN:
				case pawnParser.CHARBITS:
				case pawnParser.CHARMAX:
				case pawnParser.CHARMIN:
				case pawnParser.DEBUG:
				case pawnParser.LINE:
				case pawnParser.PAWN:
				case pawnParser.UCHARMAX:
				case pawnParser.SHARPSTRING:
				case pawnParser.STRING:
				case pawnParser.CHAR_STRING:
				case pawnParser.IDENTIFIER:
				case pawnParser.BINARY:
				case pawnParser.HEX:
				case pawnParser.INTEGER:
				case pawnParser.FLOAT:
				case pawnParser.RATIONAL:
					{
					this.state = 283;
					this.expresion();
					}
					break;
				case pawnParser.CURLY_OPEN_BRACKET:
					{
					this.state = 284;
					this.arrayInit();
					}
					break;
				default:
					throw new NoViableAltException(this);
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
	public functionDecl(): FunctionDeclContext {
		let _localctx: FunctionDeclContext = new FunctionDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, pawnParser.RULE_functionDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 290;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (pawnParser.STOCK - 59)) | (1 << (pawnParser.FORWARD - 59)) | (1 << (pawnParser.NATIVE - 59)) | (1 << (pawnParser.PUBLIC - 59)))) !== 0)) {
				{
				this.state = 289;
				this.funcDeclModif();
				}
			}

			this.state = 293;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				{
				this.state = 292;
				this.tag();
				}
				break;
			}
			this.state = 295;
			this.match(pawnParser.IDENTIFIER);
			this.state = 296;
			this.functionDeclarationParams();
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
		this.enterRule(_localctx, 18, pawnParser.RULE_operatorOverload);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 299;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (pawnParser.STOCK - 59)) | (1 << (pawnParser.FORWARD - 59)) | (1 << (pawnParser.NATIVE - 59)) | (1 << (pawnParser.PUBLIC - 59)))) !== 0)) {
				{
				this.state = 298;
				this.funcDeclModif();
				}
			}

			this.state = 302;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.IDENTIFIER) {
				{
				this.state = 301;
				this.tag();
				}
			}

			this.state = 304;
			this.match(pawnParser.OPERATOR);
			this.state = 305;
			this.canBeOverloaded();
			this.state = 306;
			this.functionDeclarationParams();
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
	public functionDeclarationParams(): FunctionDeclarationParamsContext {
		let _localctx: FunctionDeclarationParamsContext = new FunctionDeclarationParamsContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, pawnParser.RULE_functionDeclarationParams);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 308;
			this.match(pawnParser.OPEN_PARENTHESIS);
			this.state = 317;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				{
				this.state = 309;
				this.declParams();
				this.state = 314;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 310;
						this.match(pawnParser.COMA);
						this.state = 311;
						this.declParams();
						}
						}
					}
					this.state = 316;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
				}
				}
				break;
			}
			this.state = 320;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.CURLY_OPEN_BRACKET || _la === pawnParser.COMA || _la === pawnParser.PERIOD_FUNC || _la === pawnParser.IDENTIFIER) {
				{
				this.state = 319;
				this.ellipse();
				}
			}

			this.state = 322;
			this.match(pawnParser.CLOSE_PARENTHESIS);
			this.state = 326;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				{
				this.state = 323;
				this.match(pawnParser.SEMI);
				}
				break;

			case 2:
				{
				this.state = 324;
				this.statement();
				}
				break;

			case 3:
				{
				this.state = 325;
				this.nativeAssigment();
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
	public nativeAssigment(): NativeAssigmentContext {
		let _localctx: NativeAssigmentContext = new NativeAssigmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, pawnParser.RULE_nativeAssigment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 328;
			this.match(pawnParser.ASSIGMENT);
			this.state = 329;
			this.match(pawnParser.IDENTIFIER);
			this.state = 330;
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
		this.enterRule(_localctx, 24, pawnParser.RULE_tag);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 332;
			this.match(pawnParser.IDENTIFIER);
			this.state = 333;
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
	public pluralTag(): PluralTagContext {
		let _localctx: PluralTagContext = new PluralTagContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, pawnParser.RULE_pluralTag);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 335;
			this.match(pawnParser.CURLY_OPEN_BRACKET);
			this.state = 336;
			this.match(pawnParser.IDENTIFIER);
			this.state = 341;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pawnParser.COMA) {
				{
				{
				this.state = 337;
				this.match(pawnParser.COMA);
				this.state = 338;
				this.match(pawnParser.IDENTIFIER);
				}
				}
				this.state = 343;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 344;
			this.match(pawnParser.CURLY_CLOSE_BRACKET);
			}
			this.state = 346;
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
	public arrayIndex(): ArrayIndexContext {
		let _localctx: ArrayIndexContext = new ArrayIndexContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, pawnParser.RULE_arrayIndex);
		let _la: number;
		try {
			this.state = 364;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.SQUARE_OPEN_BRACKET:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 348;
				this.match(pawnParser.SQUARE_OPEN_BRACKET);
				this.state = 353;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.OPEN_PARENTHESIS) | (1 << pawnParser.MINUS) | (1 << pawnParser.INCREMENTS) | (1 << pawnParser.DECREMENTS))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (pawnParser.NOT - 39)) | (1 << (pawnParser.BIT_COMPLEMEN - 39)) | (1 << (pawnParser.STATE - 39)))) !== 0) || ((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (pawnParser.DEFINED - 76)) | (1 << (pawnParser.SIZEOF - 76)) | (1 << (pawnParser.TAGOF - 76)) | (1 << (pawnParser.TRUE - 76)) | (1 << (pawnParser.FALSE - 76)) | (1 << (pawnParser.CELLBITS - 76)) | (1 << (pawnParser.CELLMAX - 76)) | (1 << (pawnParser.CELLMIN - 76)) | (1 << (pawnParser.CHARBITS - 76)) | (1 << (pawnParser.CHARMAX - 76)) | (1 << (pawnParser.CHARMIN - 76)) | (1 << (pawnParser.DEBUG - 76)) | (1 << (pawnParser.LINE - 76)) | (1 << (pawnParser.PAWN - 76)) | (1 << (pawnParser.UCHARMAX - 76)) | (1 << (pawnParser.SHARPSTRING - 76)) | (1 << (pawnParser.STRING - 76)) | (1 << (pawnParser.CHAR_STRING - 76)) | (1 << (pawnParser.IDENTIFIER - 76)) | (1 << (pawnParser.BINARY - 76)) | (1 << (pawnParser.HEX - 76)) | (1 << (pawnParser.INTEGER - 76)) | (1 << (pawnParser.FLOAT - 76)) | (1 << (pawnParser.RATIONAL - 76)))) !== 0)) {
					{
					this.state = 349;
					this.expresion();
					this.state = 351;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === pawnParser.CHAR) {
						{
						this.state = 350;
						this.match(pawnParser.CHAR);
						}
					}

					}
				}

				this.state = 355;
				this.match(pawnParser.SQUARE_CLOSE_BRACKET);
				}
				}
				break;
			case pawnParser.CURLY_OPEN_BRACKET:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 356;
				this.match(pawnParser.CURLY_OPEN_BRACKET);
				this.state = 361;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.OPEN_PARENTHESIS) | (1 << pawnParser.MINUS) | (1 << pawnParser.INCREMENTS) | (1 << pawnParser.DECREMENTS))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (pawnParser.NOT - 39)) | (1 << (pawnParser.BIT_COMPLEMEN - 39)) | (1 << (pawnParser.STATE - 39)))) !== 0) || ((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (pawnParser.DEFINED - 76)) | (1 << (pawnParser.SIZEOF - 76)) | (1 << (pawnParser.TAGOF - 76)) | (1 << (pawnParser.TRUE - 76)) | (1 << (pawnParser.FALSE - 76)) | (1 << (pawnParser.CELLBITS - 76)) | (1 << (pawnParser.CELLMAX - 76)) | (1 << (pawnParser.CELLMIN - 76)) | (1 << (pawnParser.CHARBITS - 76)) | (1 << (pawnParser.CHARMAX - 76)) | (1 << (pawnParser.CHARMIN - 76)) | (1 << (pawnParser.DEBUG - 76)) | (1 << (pawnParser.LINE - 76)) | (1 << (pawnParser.PAWN - 76)) | (1 << (pawnParser.UCHARMAX - 76)) | (1 << (pawnParser.SHARPSTRING - 76)) | (1 << (pawnParser.STRING - 76)) | (1 << (pawnParser.CHAR_STRING - 76)) | (1 << (pawnParser.IDENTIFIER - 76)) | (1 << (pawnParser.BINARY - 76)) | (1 << (pawnParser.HEX - 76)) | (1 << (pawnParser.INTEGER - 76)) | (1 << (pawnParser.FLOAT - 76)) | (1 << (pawnParser.RATIONAL - 76)))) !== 0)) {
					{
					this.state = 357;
					this.expresion();
					this.state = 359;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === pawnParser.CHAR) {
						{
						this.state = 358;
						this.match(pawnParser.CHAR);
						}
					}

					}
				}

				this.state = 363;
				this.match(pawnParser.CURLY_CLOSE_BRACKET);
				}
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
	public funcDeclModif(): FuncDeclModifContext {
		let _localctx: FuncDeclModifContext = new FuncDeclModifContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, pawnParser.RULE_funcDeclModif);
		try {
			this.state = 369;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.STOCK:
			case pawnParser.PUBLIC:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 366;
				this.funcModif();
				}
				break;
			case pawnParser.FORWARD:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 367;
				this.match(pawnParser.FORWARD);
				}
				break;
			case pawnParser.NATIVE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 368;
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
		this.enterRule(_localctx, 32, pawnParser.RULE_funcModif);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 371;
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
		this.enterRule(_localctx, 34, pawnParser.RULE_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 392;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				{
				{
				this.state = 382;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
				case 1:
					{
					this.state = 373;
					this.varDeclaration();
					}
					break;

				case 2:
					{
					this.state = 374;
					this.enum();
					}
					break;

				case 3:
					{
					this.state = 375;
					this.goto();
					}
					break;

				case 4:
					{
					this.state = 376;
					this.return();
					}
					break;

				case 5:
					{
					this.state = 377;
					this.cycleKeywords();
					}
					break;

				case 6:
					{
					this.state = 378;
					this.exit();
					}
					break;

				case 7:
					{
					this.state = 379;
					this.assert();
					}
					break;

				case 8:
					{
					this.state = 380;
					this.sleep();
					}
					break;

				case 9:
					{
					this.state = 381;
					this.compoundExpression();
					}
					break;
				}
				this.state = 384;
				this.match(pawnParser.SEMI);
				}
				}
				break;

			case 2:
				{
				this.state = 386;
				this.match(pawnParser.SEMI);
				}
				break;

			case 3:
				{
				this.state = 387;
				this.processorLabel();
				}
				break;

			case 4:
				{
				this.state = 388;
				this.compoundStatment();
				}
				break;

			case 5:
				{
				this.state = 389;
				this.ifStatement();
				}
				break;

			case 6:
				{
				this.state = 390;
				this.cycles();
				}
				break;

			case 7:
				{
				this.state = 391;
				this.switch();
				}
				break;
			}
			this.state = 395;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				{
				this.state = 394;
				this.match(pawnParser.BACKSLAH);
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
	public compoundStatment(): CompoundStatmentContext {
		let _localctx: CompoundStatmentContext = new CompoundStatmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, pawnParser.RULE_compoundStatment);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 397;
			this.match(pawnParser.CURLY_OPEN_BRACKET);
			this.state = 401;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.OPEN_PARENTHESIS) | (1 << pawnParser.CURLY_OPEN_BRACKET) | (1 << pawnParser.SEMI) | (1 << pawnParser.MINUS) | (1 << pawnParser.INCREMENTS) | (1 << pawnParser.DECREMENTS))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (pawnParser.NOT - 39)) | (1 << (pawnParser.BIT_COMPLEMEN - 39)) | (1 << (pawnParser.ASSERT - 39)) | (1 << (pawnParser.EXIT - 39)) | (1 << (pawnParser.GOTO - 39)) | (1 << (pawnParser.SLEEP - 39)) | (1 << (pawnParser.STATE - 39)) | (1 << (pawnParser.RETURN - 39)) | (1 << (pawnParser.NEW - 39)) | (1 << (pawnParser.ENUM - 39)) | (1 << (pawnParser.CONST - 39)) | (1 << (pawnParser.STATIC - 39)) | (1 << (pawnParser.STOCK - 39)) | (1 << (pawnParser.PUBLIC - 39)) | (1 << (pawnParser.IF - 39)) | (1 << (pawnParser.SWITCH - 39)) | (1 << (pawnParser.WHILE - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (pawnParser.FOR - 71)) | (1 << (pawnParser.DO - 71)) | (1 << (pawnParser.CONTINUE - 71)) | (1 << (pawnParser.BREAK - 71)) | (1 << (pawnParser.DEFINED - 71)) | (1 << (pawnParser.SIZEOF - 71)) | (1 << (pawnParser.TAGOF - 71)) | (1 << (pawnParser.TRUE - 71)) | (1 << (pawnParser.FALSE - 71)) | (1 << (pawnParser.CELLBITS - 71)) | (1 << (pawnParser.CELLMAX - 71)) | (1 << (pawnParser.CELLMIN - 71)) | (1 << (pawnParser.CHARBITS - 71)) | (1 << (pawnParser.CHARMAX - 71)) | (1 << (pawnParser.CHARMIN - 71)) | (1 << (pawnParser.DEBUG - 71)) | (1 << (pawnParser.LINE - 71)) | (1 << (pawnParser.PAWN - 71)) | (1 << (pawnParser.UCHARMAX - 71)) | (1 << (pawnParser.SHARPSTRING - 71)) | (1 << (pawnParser.STRING - 71)) | (1 << (pawnParser.CHAR_STRING - 71)) | (1 << (pawnParser.IDENTIFIER - 71)) | (1 << (pawnParser.BINARY - 71)) | (1 << (pawnParser.HEX - 71)) | (1 << (pawnParser.INTEGER - 71)) | (1 << (pawnParser.FLOAT - 71)) | (1 << (pawnParser.RATIONAL - 71)))) !== 0)) {
				{
				{
				this.state = 398;
				this.statement();
				}
				}
				this.state = 403;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 404;
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
	public assert(): AssertContext {
		let _localctx: AssertContext = new AssertContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, pawnParser.RULE_assert);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 406;
			this.match(pawnParser.ASSERT);
			this.state = 407;
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
	public exit(): ExitContext {
		let _localctx: ExitContext = new ExitContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, pawnParser.RULE_exit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 409;
			this.match(pawnParser.EXIT);
			this.state = 410;
			this.compoundExpression();
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
	public goto(): GotoContext {
		let _localctx: GotoContext = new GotoContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, pawnParser.RULE_goto);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 412;
			this.match(pawnParser.GOTO);
			this.state = 413;
			this.symbol();
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
	public sleep(): SleepContext {
		let _localctx: SleepContext = new SleepContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, pawnParser.RULE_sleep);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 415;
			this.match(pawnParser.SLEEP);
			this.state = 416;
			this.compoundExpression();
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
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, pawnParser.RULE_ifStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 418;
			this.match(pawnParser.IF);
			this.state = 423;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				{
				this.state = 419;
				this.condition();
				}
				break;

			case 2:
				{
				this.state = 420;
				this.expresion();
				this.state = 421;
				this.match(pawnParser.THEN);
				}
				break;
			}
			this.state = 425;
			this.statement();
			this.state = 427;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
			case 1:
				{
				this.state = 426;
				this.elseStatement();
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
	public elseStatement(): ElseStatementContext {
		let _localctx: ElseStatementContext = new ElseStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, pawnParser.RULE_elseStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 429;
			this.match(pawnParser.ELSE);
			this.state = 430;
			this.statement();
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
		this.enterRule(_localctx, 50, pawnParser.RULE_return);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 432;
			this.match(pawnParser.RETURN);
			this.state = 434;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.OPEN_PARENTHESIS) | (1 << pawnParser.MINUS) | (1 << pawnParser.INCREMENTS) | (1 << pawnParser.DECREMENTS))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (pawnParser.NOT - 39)) | (1 << (pawnParser.BIT_COMPLEMEN - 39)) | (1 << (pawnParser.STATE - 39)))) !== 0) || ((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (pawnParser.DEFINED - 76)) | (1 << (pawnParser.SIZEOF - 76)) | (1 << (pawnParser.TAGOF - 76)) | (1 << (pawnParser.TRUE - 76)) | (1 << (pawnParser.FALSE - 76)) | (1 << (pawnParser.CELLBITS - 76)) | (1 << (pawnParser.CELLMAX - 76)) | (1 << (pawnParser.CELLMIN - 76)) | (1 << (pawnParser.CHARBITS - 76)) | (1 << (pawnParser.CHARMAX - 76)) | (1 << (pawnParser.CHARMIN - 76)) | (1 << (pawnParser.DEBUG - 76)) | (1 << (pawnParser.LINE - 76)) | (1 << (pawnParser.PAWN - 76)) | (1 << (pawnParser.UCHARMAX - 76)) | (1 << (pawnParser.SHARPSTRING - 76)) | (1 << (pawnParser.STRING - 76)) | (1 << (pawnParser.CHAR_STRING - 76)) | (1 << (pawnParser.IDENTIFIER - 76)) | (1 << (pawnParser.BINARY - 76)) | (1 << (pawnParser.HEX - 76)) | (1 << (pawnParser.INTEGER - 76)) | (1 << (pawnParser.FLOAT - 76)) | (1 << (pawnParser.RATIONAL - 76)))) !== 0)) {
				{
				this.state = 433;
				this.compoundExpression();
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
	public condition(): ConditionContext {
		let _localctx: ConditionContext = new ConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, pawnParser.RULE_condition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 436;
			this.match(pawnParser.OPEN_PARENTHESIS);
			this.state = 437;
			this.compoundExpression();
			this.state = 438;
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
	public switch(): SwitchContext {
		let _localctx: SwitchContext = new SwitchContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, pawnParser.RULE_switch);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 440;
			this.match(pawnParser.SWITCH);
			this.state = 441;
			this.condition();
			this.state = 442;
			this.match(pawnParser.CURLY_OPEN_BRACKET);
			this.state = 446;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pawnParser.CASE) {
				{
				{
				this.state = 443;
				this.case();
				}
				}
				this.state = 448;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 450;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.DEFAULT) {
				{
				this.state = 449;
				this.default();
				}
			}

			this.state = 452;
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
		this.enterRule(_localctx, 56, pawnParser.RULE_case);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 454;
			this.match(pawnParser.CASE);
			this.state = 455;
			this.case_list();
			this.state = 460;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pawnParser.COMA) {
				{
				{
				this.state = 456;
				this.match(pawnParser.COMA);
				this.state = 457;
				this.case_list();
				}
				}
				this.state = 462;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 463;
			this.match(pawnParser.COLON);
			this.state = 464;
			this.statement();
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
		this.enterRule(_localctx, 58, pawnParser.RULE_default);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 466;
			this.match(pawnParser.DEFAULT);
			this.state = 467;
			this.match(pawnParser.COLON);
			this.state = 468;
			this.statement();
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
		this.enterRule(_localctx, 60, pawnParser.RULE_case_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 470;
			this.expresion();
			this.state = 473;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.PERIOD) {
				{
				this.state = 471;
				this.match(pawnParser.PERIOD);
				this.state = 472;
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
	public arrayInit(): ArrayInitContext {
		let _localctx: ArrayInitContext = new ArrayInitContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, pawnParser.RULE_arrayInit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 475;
			this.match(pawnParser.CURLY_OPEN_BRACKET);
			this.state = 476;
			this.arrayInitMember();
			this.state = 481;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pawnParser.COMA) {
				{
				{
				this.state = 477;
				this.match(pawnParser.COMA);
				this.state = 478;
				this.arrayInitMember();
				}
				}
				this.state = 483;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 484;
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
		this.enterRule(_localctx, 64, pawnParser.RULE_arrayInitMember);
		let _la: number;
		try {
			this.state = 501;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.MINUS:
			case pawnParser.SHARPSTRING:
			case pawnParser.STRING:
			case pawnParser.CHAR_STRING:
			case pawnParser.IDENTIFIER:
			case pawnParser.BINARY:
			case pawnParser.HEX:
			case pawnParser.INTEGER:
			case pawnParser.FLOAT:
			case pawnParser.RATIONAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 487;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
				case 1:
					{
					this.state = 486;
					this.tag();
					}
					break;
				}
				this.state = 498;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
				case 1:
					{
					this.state = 490;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === pawnParser.MINUS) {
						{
						this.state = 489;
						this.match(pawnParser.MINUS);
						}
					}

					this.state = 492;
					this.match(pawnParser.IDENTIFIER);
					}
					break;

				case 2:
					{
					this.state = 494;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === pawnParser.MINUS) {
						{
						this.state = 493;
						this.match(pawnParser.MINUS);
						}
					}

					this.state = 496;
					this.number();
					}
					break;

				case 3:
					{
					this.state = 497;
					this.string();
					}
					break;
				}
				}
				break;
			case pawnParser.CURLY_OPEN_BRACKET:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 500;
				this.arrayInit();
				}
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
	public assigments(): AssigmentsContext {
		let _localctx: AssigmentsContext = new AssigmentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, pawnParser.RULE_assigments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 503;
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
	public declParams(): DeclParamsContext {
		let _localctx: DeclParamsContext = new DeclParamsContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, pawnParser.RULE_declParams);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 506;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.CONST) {
				{
				this.state = 505;
				this.match(pawnParser.CONST);
				}
			}

			this.state = 509;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.BIT_AND) {
				{
				this.state = 508;
				this.reference();
				}
			}

			this.state = 513;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 59, this._ctx) ) {
			case 1:
				{
				this.state = 511;
				this.pluralTag();
				}
				break;

			case 2:
				{
				this.state = 512;
				this.tag();
				}
				break;
			}
			this.state = 515;
			this.match(pawnParser.IDENTIFIER);
			this.state = 519;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 516;
					this.arrayIndex();
					}
					}
				}
				this.state = 521;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
			}
			this.state = 527;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.ASSIGMENT) {
				{
				this.state = 522;
				this.match(pawnParser.ASSIGMENT);
				this.state = 525;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case pawnParser.OPEN_PARENTHESIS:
				case pawnParser.MINUS:
				case pawnParser.INCREMENTS:
				case pawnParser.DECREMENTS:
				case pawnParser.NOT:
				case pawnParser.BIT_COMPLEMEN:
				case pawnParser.STATE:
				case pawnParser.DEFINED:
				case pawnParser.SIZEOF:
				case pawnParser.TAGOF:
				case pawnParser.TRUE:
				case pawnParser.FALSE:
				case pawnParser.CELLBITS:
				case pawnParser.CELLMAX:
				case pawnParser.CELLMIN:
				case pawnParser.CHARBITS:
				case pawnParser.CHARMAX:
				case pawnParser.CHARMIN:
				case pawnParser.DEBUG:
				case pawnParser.LINE:
				case pawnParser.PAWN:
				case pawnParser.UCHARMAX:
				case pawnParser.SHARPSTRING:
				case pawnParser.STRING:
				case pawnParser.CHAR_STRING:
				case pawnParser.IDENTIFIER:
				case pawnParser.BINARY:
				case pawnParser.HEX:
				case pawnParser.INTEGER:
				case pawnParser.FLOAT:
				case pawnParser.RATIONAL:
					{
					this.state = 523;
					this.expresion();
					}
					break;
				case pawnParser.CURLY_OPEN_BRACKET:
					{
					this.state = 524;
					this.arrayInit();
					}
					break;
				default:
					throw new NoViableAltException(this);
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
		this.enterRule(_localctx, 70, pawnParser.RULE_ellipse);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 530;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.COMA) {
				{
				this.state = 529;
				this.match(pawnParser.COMA);
				}
			}

			this.state = 534;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.CURLY_OPEN_BRACKET:
				{
				this.state = 532;
				this.pluralTag();
				}
				break;
			case pawnParser.IDENTIFIER:
				{
				this.state = 533;
				this.tag();
				}
				break;
			case pawnParser.PERIOD_FUNC:
				break;
			default:
				break;
			}
			this.state = 536;
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
		this.enterRule(_localctx, 72, pawnParser.RULE_reference);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 538;
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
		this.enterRule(_localctx, 74, pawnParser.RULE_varModifires);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 540;
			_la = this._input.LA(1);
			if (!(((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (pawnParser.CONST - 57)) | (1 << (pawnParser.STATIC - 57)) | (1 << (pawnParser.STOCK - 57)) | (1 << (pawnParser.PUBLIC - 57)))) !== 0))) {
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
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, pawnParser.RULE_number);
		try {
			this.state = 547;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.INTEGER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 542;
				this.integer();
				}
				break;
			case pawnParser.FLOAT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 543;
				this.float();
				}
				break;
			case pawnParser.HEX:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 544;
				this.hex();
				}
				break;
			case pawnParser.RATIONAL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 545;
				this.rational();
				}
				break;
			case pawnParser.BINARY:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 546;
				this.binary();
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
	public float(): FloatContext {
		let _localctx: FloatContext = new FloatContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, pawnParser.RULE_float);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 549;
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
	public integer(): IntegerContext {
		let _localctx: IntegerContext = new IntegerContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, pawnParser.RULE_integer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 551;
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
	public hex(): HexContext {
		let _localctx: HexContext = new HexContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, pawnParser.RULE_hex);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 553;
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
	public rational(): RationalContext {
		let _localctx: RationalContext = new RationalContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, pawnParser.RULE_rational);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 555;
			this.match(pawnParser.RATIONAL);
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
	public binary(): BinaryContext {
		let _localctx: BinaryContext = new BinaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, pawnParser.RULE_binary);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 557;
			this.match(pawnParser.BINARY);
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
		this.enterRule(_localctx, 88, pawnParser.RULE_canBeOverloaded);
		try {
			this.state = 563;
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
				this.state = 559;
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
				this.state = 560;
				this.compareOperator();
				}
				break;
			case pawnParser.ASSIGMENT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 561;
				this.match(pawnParser.ASSIGMENT);
				}
				break;
			case pawnParser.BIT_COMPLEMEN:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 562;
				this.match(pawnParser.BIT_COMPLEMEN);
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
		this.enterRule(_localctx, 90, pawnParser.RULE_arefmeticOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 565;
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
	public compareOperator(): CompareOperatorContext {
		let _localctx: CompareOperatorContext = new CompareOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, pawnParser.RULE_compareOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 567;
			_la = this._input.LA(1);
			if (!(((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & ((1 << (pawnParser.EQUAL - 29)) | (1 << (pawnParser.NOTEQUAL - 29)) | (1 << (pawnParser.LESS - 29)) | (1 << (pawnParser.LARGER - 29)) | (1 << (pawnParser.LESSEQ - 29)) | (1 << (pawnParser.LARGEREQ - 29)) | (1 << (pawnParser.NOT - 29)))) !== 0))) {
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
	public cycles(): CyclesContext {
		let _localctx: CyclesContext = new CyclesContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, pawnParser.RULE_cycles);
		try {
			this.state = 572;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.WHILE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 569;
				this.while();
				}
				break;
			case pawnParser.DO:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 570;
				this.do();
				}
				break;
			case pawnParser.FOR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 571;
				this.for();
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
		this.enterRule(_localctx, 96, pawnParser.RULE_do);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 574;
			this.match(pawnParser.DO);
			this.state = 575;
			this.statement();
			this.state = 578;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 68, this._ctx) ) {
			case 1:
				{
				this.state = 576;
				this.match(pawnParser.WHILE);
				this.state = 577;
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
		this.enterRule(_localctx, 98, pawnParser.RULE_while);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 580;
			this.match(pawnParser.WHILE);
			this.state = 581;
			this.condition();
			this.state = 582;
			this.statement();
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
		this.enterRule(_localctx, 100, pawnParser.RULE_for);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 584;
			this.match(pawnParser.FOR);
			this.state = 585;
			this.match(pawnParser.OPEN_PARENTHESIS);
			this.state = 587;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.OPEN_PARENTHESIS) | (1 << pawnParser.MINUS) | (1 << pawnParser.INCREMENTS) | (1 << pawnParser.DECREMENTS))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (pawnParser.NOT - 39)) | (1 << (pawnParser.BIT_COMPLEMEN - 39)) | (1 << (pawnParser.STATE - 39)) | (1 << (pawnParser.NEW - 39)) | (1 << (pawnParser.CONST - 39)) | (1 << (pawnParser.STATIC - 39)) | (1 << (pawnParser.STOCK - 39)) | (1 << (pawnParser.PUBLIC - 39)))) !== 0) || ((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (pawnParser.DEFINED - 76)) | (1 << (pawnParser.SIZEOF - 76)) | (1 << (pawnParser.TAGOF - 76)) | (1 << (pawnParser.TRUE - 76)) | (1 << (pawnParser.FALSE - 76)) | (1 << (pawnParser.CELLBITS - 76)) | (1 << (pawnParser.CELLMAX - 76)) | (1 << (pawnParser.CELLMIN - 76)) | (1 << (pawnParser.CHARBITS - 76)) | (1 << (pawnParser.CHARMAX - 76)) | (1 << (pawnParser.CHARMIN - 76)) | (1 << (pawnParser.DEBUG - 76)) | (1 << (pawnParser.LINE - 76)) | (1 << (pawnParser.PAWN - 76)) | (1 << (pawnParser.UCHARMAX - 76)) | (1 << (pawnParser.SHARPSTRING - 76)) | (1 << (pawnParser.STRING - 76)) | (1 << (pawnParser.CHAR_STRING - 76)) | (1 << (pawnParser.IDENTIFIER - 76)) | (1 << (pawnParser.BINARY - 76)) | (1 << (pawnParser.HEX - 76)) | (1 << (pawnParser.INTEGER - 76)) | (1 << (pawnParser.FLOAT - 76)) | (1 << (pawnParser.RATIONAL - 76)))) !== 0)) {
				{
				this.state = 586;
				_localctx._first = this.forFirstExp();
				}
			}

			this.state = 589;
			this.match(pawnParser.SEMI);
			this.state = 591;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.OPEN_PARENTHESIS) | (1 << pawnParser.MINUS) | (1 << pawnParser.INCREMENTS) | (1 << pawnParser.DECREMENTS))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (pawnParser.NOT - 39)) | (1 << (pawnParser.BIT_COMPLEMEN - 39)) | (1 << (pawnParser.STATE - 39)))) !== 0) || ((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (pawnParser.DEFINED - 76)) | (1 << (pawnParser.SIZEOF - 76)) | (1 << (pawnParser.TAGOF - 76)) | (1 << (pawnParser.TRUE - 76)) | (1 << (pawnParser.FALSE - 76)) | (1 << (pawnParser.CELLBITS - 76)) | (1 << (pawnParser.CELLMAX - 76)) | (1 << (pawnParser.CELLMIN - 76)) | (1 << (pawnParser.CHARBITS - 76)) | (1 << (pawnParser.CHARMAX - 76)) | (1 << (pawnParser.CHARMIN - 76)) | (1 << (pawnParser.DEBUG - 76)) | (1 << (pawnParser.LINE - 76)) | (1 << (pawnParser.PAWN - 76)) | (1 << (pawnParser.UCHARMAX - 76)) | (1 << (pawnParser.SHARPSTRING - 76)) | (1 << (pawnParser.STRING - 76)) | (1 << (pawnParser.CHAR_STRING - 76)) | (1 << (pawnParser.IDENTIFIER - 76)) | (1 << (pawnParser.BINARY - 76)) | (1 << (pawnParser.HEX - 76)) | (1 << (pawnParser.INTEGER - 76)) | (1 << (pawnParser.FLOAT - 76)) | (1 << (pawnParser.RATIONAL - 76)))) !== 0)) {
				{
				this.state = 590;
				_localctx._second = this.expresion();
				}
			}

			this.state = 593;
			this.match(pawnParser.SEMI);
			this.state = 595;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.OPEN_PARENTHESIS) | (1 << pawnParser.MINUS) | (1 << pawnParser.INCREMENTS) | (1 << pawnParser.DECREMENTS))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (pawnParser.NOT - 39)) | (1 << (pawnParser.BIT_COMPLEMEN - 39)) | (1 << (pawnParser.STATE - 39)))) !== 0) || ((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (pawnParser.DEFINED - 76)) | (1 << (pawnParser.SIZEOF - 76)) | (1 << (pawnParser.TAGOF - 76)) | (1 << (pawnParser.TRUE - 76)) | (1 << (pawnParser.FALSE - 76)) | (1 << (pawnParser.CELLBITS - 76)) | (1 << (pawnParser.CELLMAX - 76)) | (1 << (pawnParser.CELLMIN - 76)) | (1 << (pawnParser.CHARBITS - 76)) | (1 << (pawnParser.CHARMAX - 76)) | (1 << (pawnParser.CHARMIN - 76)) | (1 << (pawnParser.DEBUG - 76)) | (1 << (pawnParser.LINE - 76)) | (1 << (pawnParser.PAWN - 76)) | (1 << (pawnParser.UCHARMAX - 76)) | (1 << (pawnParser.SHARPSTRING - 76)) | (1 << (pawnParser.STRING - 76)) | (1 << (pawnParser.CHAR_STRING - 76)) | (1 << (pawnParser.IDENTIFIER - 76)) | (1 << (pawnParser.BINARY - 76)) | (1 << (pawnParser.HEX - 76)) | (1 << (pawnParser.INTEGER - 76)) | (1 << (pawnParser.FLOAT - 76)) | (1 << (pawnParser.RATIONAL - 76)))) !== 0)) {
				{
				this.state = 594;
				_localctx._third = this.compoundExpression();
				}
			}

			this.state = 597;
			this.match(pawnParser.CLOSE_PARENTHESIS);
			this.state = 598;
			this.statement();
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
	public forFirstExp(): ForFirstExpContext {
		let _localctx: ForFirstExpContext = new ForFirstExpContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, pawnParser.RULE_forFirstExp);
		try {
			this.state = 602;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.NEW:
			case pawnParser.CONST:
			case pawnParser.STATIC:
			case pawnParser.STOCK:
			case pawnParser.PUBLIC:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 600;
				this.varDeclaration();
				}
				break;
			case pawnParser.OPEN_PARENTHESIS:
			case pawnParser.MINUS:
			case pawnParser.INCREMENTS:
			case pawnParser.DECREMENTS:
			case pawnParser.NOT:
			case pawnParser.BIT_COMPLEMEN:
			case pawnParser.STATE:
			case pawnParser.DEFINED:
			case pawnParser.SIZEOF:
			case pawnParser.TAGOF:
			case pawnParser.TRUE:
			case pawnParser.FALSE:
			case pawnParser.CELLBITS:
			case pawnParser.CELLMAX:
			case pawnParser.CELLMIN:
			case pawnParser.CHARBITS:
			case pawnParser.CHARMAX:
			case pawnParser.CHARMIN:
			case pawnParser.DEBUG:
			case pawnParser.LINE:
			case pawnParser.PAWN:
			case pawnParser.UCHARMAX:
			case pawnParser.SHARPSTRING:
			case pawnParser.STRING:
			case pawnParser.CHAR_STRING:
			case pawnParser.IDENTIFIER:
			case pawnParser.BINARY:
			case pawnParser.HEX:
			case pawnParser.INTEGER:
			case pawnParser.FLOAT:
			case pawnParser.RATIONAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 601;
				this.compoundExpression();
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
	public cycleKeywords(): CycleKeywordsContext {
		let _localctx: CycleKeywordsContext = new CycleKeywordsContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, pawnParser.RULE_cycleKeywords);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 604;
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
		this.enterRule(_localctx, 106, pawnParser.RULE_literal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 610;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.SHARPSTRING:
			case pawnParser.STRING:
			case pawnParser.CHAR_STRING:
				{
				this.state = 606;
				this.string();
				}
				break;
			case pawnParser.BINARY:
			case pawnParser.HEX:
			case pawnParser.INTEGER:
			case pawnParser.FLOAT:
			case pawnParser.RATIONAL:
				{
				this.state = 607;
				this.number();
				}
				break;
			case pawnParser.TRUE:
			case pawnParser.FALSE:
				{
				this.state = 608;
				this.bool_const();
				}
				break;
			case pawnParser.CELLBITS:
			case pawnParser.CELLMAX:
			case pawnParser.CELLMIN:
			case pawnParser.CHARBITS:
			case pawnParser.CHARMAX:
			case pawnParser.CHARMIN:
			case pawnParser.DEBUG:
			case pawnParser.LINE:
			case pawnParser.PAWN:
			case pawnParser.UCHARMAX:
				{
				this.state = 609;
				this.predefinedConstants();
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
		this.enterRule(_localctx, 108, pawnParser.RULE_bool_const);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 612;
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
	public predefinedConstants(): PredefinedConstantsContext {
		let _localctx: PredefinedConstantsContext = new PredefinedConstantsContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, pawnParser.RULE_predefinedConstants);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 614;
			_la = this._input.LA(1);
			if (!(((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (pawnParser.CELLBITS - 81)) | (1 << (pawnParser.CELLMAX - 81)) | (1 << (pawnParser.CELLMIN - 81)) | (1 << (pawnParser.CHARBITS - 81)) | (1 << (pawnParser.CHARMAX - 81)) | (1 << (pawnParser.CHARMIN - 81)) | (1 << (pawnParser.DEBUG - 81)) | (1 << (pawnParser.LINE - 81)) | (1 << (pawnParser.PAWN - 81)) | (1 << (pawnParser.UCHARMAX - 81)))) !== 0))) {
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
		this.enterRule(_localctx, 112, pawnParser.RULE_string);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 616;
			_la = this._input.LA(1);
			if (!(((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (pawnParser.SHARPSTRING - 91)) | (1 << (pawnParser.STRING - 91)) | (1 << (pawnParser.CHAR_STRING - 91)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 620;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 617;
					this.string();
					}
					}
				}
				this.state = 622;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
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
	public docs(): DocsContext {
		let _localctx: DocsContext = new DocsContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, pawnParser.RULE_docs);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 623;
			this.docBlock();
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
		this.enterRule(_localctx, 116, pawnParser.RULE_docBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 625;
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
	public assigmentExpression(): AssigmentExpressionContext {
		let _localctx: AssigmentExpressionContext = new AssigmentExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, pawnParser.RULE_assigmentExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 627;
			this.ternaryExpression();
			this.state = 633;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.ASSIGMENT) | (1 << pawnParser.ASSIGMENT_PLUS) | (1 << pawnParser.ASSIGMENT_MINUS) | (1 << pawnParser.ASSIGMENT_MULT) | (1 << pawnParser.ASSIGMENT_DIV) | (1 << pawnParser.ASSIGMENT_REMAINDE) | (1 << pawnParser.ASSIGMENT_AND) | (1 << pawnParser.ASSIGMENT_OR) | (1 << pawnParser.ASSIGMENT_XOR) | (1 << pawnParser.ASSIGMENT_RIGHT) | (1 << pawnParser.ASSIGMENT_RIGHT_LOG) | (1 << pawnParser.ASSIGMENT_LEFT))) !== 0)) {
				{
				{
				this.state = 628;
				this.assigments();
				this.state = 629;
				this.ternaryExpression();
				}
				}
				this.state = 635;
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
	public ternaryExpression(): TernaryExpressionContext {
		let _localctx: TernaryExpressionContext = new TernaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, pawnParser.RULE_ternaryExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 636;
			this.logicalOrExpression();
			this.state = 642;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.QUESTION) {
				{
				this.state = 637;
				this.match(pawnParser.QUESTION);
				this.state = 638;
				this.ternaryExpression();
				this.state = 639;
				this.match(pawnParser.COLON);
				this.state = 640;
				this.ternaryExpression();
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
	public logicalOrExpression(): LogicalOrExpressionContext {
		let _localctx: LogicalOrExpressionContext = new LogicalOrExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, pawnParser.RULE_logicalOrExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 644;
			this.logicalAndExpression();
			this.state = 649;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pawnParser.OR) {
				{
				{
				this.state = 645;
				_localctx._op = this.match(pawnParser.OR);
				this.state = 646;
				this.logicalAndExpression();
				}
				}
				this.state = 651;
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
	public logicalAndExpression(): LogicalAndExpressionContext {
		let _localctx: LogicalAndExpressionContext = new LogicalAndExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, pawnParser.RULE_logicalAndExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 652;
			this.equalOrNotExpression();
			this.state = 657;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pawnParser.AND) {
				{
				{
				this.state = 653;
				_localctx._op = this.match(pawnParser.AND);
				this.state = 654;
				this.equalOrNotExpression();
				}
				}
				this.state = 659;
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
	public equalOrNotExpression(): EqualOrNotExpressionContext {
		let _localctx: EqualOrNotExpressionContext = new EqualOrNotExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, pawnParser.RULE_equalOrNotExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 660;
			this.compareExpression();
			this.state = 665;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pawnParser.EQUAL || _la === pawnParser.NOTEQUAL) {
				{
				{
				this.state = 661;
				_localctx._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === pawnParser.EQUAL || _la === pawnParser.NOTEQUAL)) {
					_localctx._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 662;
				this.compareExpression();
				}
				}
				this.state = 667;
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
	public compareExpression(): CompareExpressionContext {
		let _localctx: CompareExpressionContext = new CompareExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, pawnParser.RULE_compareExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 668;
			this.bitOrExpression();
			this.state = 673;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 31)) & ~0x1F) === 0 && ((1 << (_la - 31)) & ((1 << (pawnParser.LESS - 31)) | (1 << (pawnParser.LARGER - 31)) | (1 << (pawnParser.LESSEQ - 31)) | (1 << (pawnParser.LARGEREQ - 31)))) !== 0)) {
				{
				{
				this.state = 669;
				_localctx._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 31)) & ~0x1F) === 0 && ((1 << (_la - 31)) & ((1 << (pawnParser.LESS - 31)) | (1 << (pawnParser.LARGER - 31)) | (1 << (pawnParser.LESSEQ - 31)) | (1 << (pawnParser.LARGEREQ - 31)))) !== 0))) {
					_localctx._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 670;
				this.bitOrExpression();
				}
				}
				this.state = 675;
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
	public bitOrExpression(): BitOrExpressionContext {
		let _localctx: BitOrExpressionContext = new BitOrExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, pawnParser.RULE_bitOrExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 676;
			this.xorExpression();
			this.state = 681;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pawnParser.BIT_OR) {
				{
				{
				this.state = 677;
				_localctx._op = this.match(pawnParser.BIT_OR);
				this.state = 678;
				this.xorExpression();
				}
				}
				this.state = 683;
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
	public xorExpression(): XorExpressionContext {
		let _localctx: XorExpressionContext = new XorExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, pawnParser.RULE_xorExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 684;
			this.bitAndExpression();
			this.state = 689;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pawnParser.BIT_XOR) {
				{
				{
				this.state = 685;
				_localctx._op = this.match(pawnParser.BIT_XOR);
				this.state = 686;
				this.bitAndExpression();
				}
				}
				this.state = 691;
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
	public bitAndExpression(): BitAndExpressionContext {
		let _localctx: BitAndExpressionContext = new BitAndExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, pawnParser.RULE_bitAndExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 692;
			this.bitShiftExpression();
			this.state = 697;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pawnParser.BIT_AND) {
				{
				{
				this.state = 693;
				_localctx._op = this.match(pawnParser.BIT_AND);
				this.state = 694;
				this.bitShiftExpression();
				}
				}
				this.state = 699;
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
	public bitShiftExpression(): BitShiftExpressionContext {
		let _localctx: BitShiftExpressionContext = new BitShiftExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, pawnParser.RULE_bitShiftExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 700;
			this.additiveExpression();
			this.state = 705;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (pawnParser.BIT_RIGHT - 44)) | (1 << (pawnParser.BIT_LEFT - 44)) | (1 << (pawnParser.BIT_RIGHT_LOG - 44)))) !== 0)) {
				{
				{
				this.state = 701;
				_localctx._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (pawnParser.BIT_RIGHT - 44)) | (1 << (pawnParser.BIT_LEFT - 44)) | (1 << (pawnParser.BIT_RIGHT_LOG - 44)))) !== 0))) {
					_localctx._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 702;
				this.additiveExpression();
				}
				}
				this.state = 707;
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
	public additiveExpression(): AdditiveExpressionContext {
		let _localctx: AdditiveExpressionContext = new AdditiveExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, pawnParser.RULE_additiveExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 708;
			this.multiplicativeExpression();
			this.state = 713;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pawnParser.PLUS || _la === pawnParser.MINUS) {
				{
				{
				this.state = 709;
				_localctx._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === pawnParser.PLUS || _la === pawnParser.MINUS)) {
					_localctx._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 710;
				this.multiplicativeExpression();
				}
				}
				this.state = 715;
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
	public multiplicativeExpression(): MultiplicativeExpressionContext {
		let _localctx: MultiplicativeExpressionContext = new MultiplicativeExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, pawnParser.RULE_multiplicativeExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 716;
			this.prefixExpression();
			this.state = 721;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.MULTY) | (1 << pawnParser.DIV) | (1 << pawnParser.REMAINDE))) !== 0)) {
				{
				{
				this.state = 717;
				_localctx._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.MULTY) | (1 << pawnParser.DIV) | (1 << pawnParser.REMAINDE))) !== 0))) {
					_localctx._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 718;
				this.prefixExpression();
				}
				}
				this.state = 723;
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
	public prefixExpression(): PrefixExpressionContext {
		let _localctx: PrefixExpressionContext = new PrefixExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, pawnParser.RULE_prefixExpression);
		let _la: number;
		try {
			this.state = 742;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 89, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 730;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case pawnParser.INCREMENTS:
					{
					this.state = 724;
					this.match(pawnParser.INCREMENTS);
					}
					break;
				case pawnParser.DECREMENTS:
					{
					this.state = 725;
					this.match(pawnParser.DECREMENTS);
					}
					break;
				case pawnParser.BIT_COMPLEMEN:
					{
					this.state = 726;
					this.match(pawnParser.BIT_COMPLEMEN);
					}
					break;
				case pawnParser.NOT:
					{
					this.state = 727;
					this.match(pawnParser.NOT);
					}
					break;
				case pawnParser.MINUS:
					{
					this.state = 728;
					this.match(pawnParser.MINUS);
					}
					break;
				case pawnParser.IDENTIFIER:
					{
					this.state = 729;
					this.tag();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 732;
				this.prefixExpression();
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 733;
				_la = this._input.LA(1);
				if (!(((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (pawnParser.STATE - 53)) | (1 << (pawnParser.DEFINED - 53)) | (1 << (pawnParser.SIZEOF - 53)) | (1 << (pawnParser.TAGOF - 53)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 739;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case pawnParser.TRUE:
				case pawnParser.FALSE:
				case pawnParser.CELLBITS:
				case pawnParser.CELLMAX:
				case pawnParser.CELLMIN:
				case pawnParser.CHARBITS:
				case pawnParser.CHARMAX:
				case pawnParser.CHARMIN:
				case pawnParser.DEBUG:
				case pawnParser.LINE:
				case pawnParser.PAWN:
				case pawnParser.UCHARMAX:
				case pawnParser.SHARPSTRING:
				case pawnParser.STRING:
				case pawnParser.CHAR_STRING:
				case pawnParser.IDENTIFIER:
				case pawnParser.BINARY:
				case pawnParser.HEX:
				case pawnParser.INTEGER:
				case pawnParser.FLOAT:
				case pawnParser.RATIONAL:
					{
					this.state = 734;
					this.literalOrSymbol();
					}
					break;
				case pawnParser.OPEN_PARENTHESIS:
					{
					this.state = 735;
					this.match(pawnParser.OPEN_PARENTHESIS);
					this.state = 736;
					this.literalOrSymbol();
					this.state = 737;
					this.match(pawnParser.CLOSE_PARENTHESIS);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 741;
				this.postfixExpression();
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
	public postfixExpression(): PostfixExpressionContext {
		let _localctx: PostfixExpressionContext = new PostfixExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, pawnParser.RULE_postfixExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 744;
			this.functionOrArrayExpression();
			this.state = 748;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 745;
					_la = this._input.LA(1);
					if (!(_la === pawnParser.INCREMENTS || _la === pawnParser.DECREMENTS || _la === pawnParser.CHAR)) {
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
				}
				this.state = 750;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
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
	public functionOrArrayExpression(): FunctionOrArrayExpressionContext {
		let _localctx: FunctionOrArrayExpressionContext = new FunctionOrArrayExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, pawnParser.RULE_functionOrArrayExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 751;
			this.primaryExpression();
			this.state = 762;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 760;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case pawnParser.SQUARE_OPEN_BRACKET:
						{
						this.state = 752;
						this.match(pawnParser.SQUARE_OPEN_BRACKET);
						this.state = 753;
						this.assigmentExpression();
						this.state = 754;
						this.match(pawnParser.SQUARE_CLOSE_BRACKET);
						}
						break;
					case pawnParser.CURLY_OPEN_BRACKET:
						{
						this.state = 756;
						this.match(pawnParser.CURLY_OPEN_BRACKET);
						this.state = 757;
						this.assigmentExpression();
						this.state = 758;
						this.match(pawnParser.CURLY_CLOSE_BRACKET);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 764;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
			}
			this.state = 766;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.OPEN_PARENTHESIS) {
				{
				this.state = 765;
				this.functionCallOperator();
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
	public primaryExpression(): PrimaryExpressionContext {
		let _localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, pawnParser.RULE_primaryExpression);
		let _la: number;
		try {
			this.state = 780;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.OPEN_PARENTHESIS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 768;
				this.match(pawnParser.OPEN_PARENTHESIS);
				this.state = 769;
				this.assigmentExpression();
				this.state = 774;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === pawnParser.COMA) {
					{
					{
					this.state = 770;
					this.match(pawnParser.COMA);
					this.state = 771;
					this.assigmentExpression();
					}
					}
					this.state = 776;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 777;
				this.match(pawnParser.CLOSE_PARENTHESIS);
				}
				break;
			case pawnParser.TRUE:
			case pawnParser.FALSE:
			case pawnParser.CELLBITS:
			case pawnParser.CELLMAX:
			case pawnParser.CELLMIN:
			case pawnParser.CHARBITS:
			case pawnParser.CHARMAX:
			case pawnParser.CHARMIN:
			case pawnParser.DEBUG:
			case pawnParser.LINE:
			case pawnParser.PAWN:
			case pawnParser.UCHARMAX:
			case pawnParser.SHARPSTRING:
			case pawnParser.STRING:
			case pawnParser.CHAR_STRING:
			case pawnParser.IDENTIFIER:
			case pawnParser.BINARY:
			case pawnParser.HEX:
			case pawnParser.INTEGER:
			case pawnParser.FLOAT:
			case pawnParser.RATIONAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 779;
				this.literalOrSymbol();
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
	public literalOrSymbol(): LiteralOrSymbolContext {
		let _localctx: LiteralOrSymbolContext = new LiteralOrSymbolContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, pawnParser.RULE_literalOrSymbol);
		try {
			this.state = 784;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 782;
				this.symbol();
				}
				break;
			case pawnParser.TRUE:
			case pawnParser.FALSE:
			case pawnParser.CELLBITS:
			case pawnParser.CELLMAX:
			case pawnParser.CELLMIN:
			case pawnParser.CHARBITS:
			case pawnParser.CHARMAX:
			case pawnParser.CHARMIN:
			case pawnParser.DEBUG:
			case pawnParser.LINE:
			case pawnParser.PAWN:
			case pawnParser.UCHARMAX:
			case pawnParser.SHARPSTRING:
			case pawnParser.STRING:
			case pawnParser.CHAR_STRING:
			case pawnParser.BINARY:
			case pawnParser.HEX:
			case pawnParser.INTEGER:
			case pawnParser.FLOAT:
			case pawnParser.RATIONAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 783;
				this.literal();
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
	public compoundExpression(): CompoundExpressionContext {
		let _localctx: CompoundExpressionContext = new CompoundExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, pawnParser.RULE_compoundExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 786;
			this.expresion();
			this.state = 791;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pawnParser.COMA) {
				{
				{
				this.state = 787;
				this.match(pawnParser.COMA);
				this.state = 788;
				this.expresion();
				}
				}
				this.state = 793;
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
	public expresion(): ExpresionContext {
		let _localctx: ExpresionContext = new ExpresionContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, pawnParser.RULE_expresion);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 794;
			this.assigmentExpression();
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
	public functionCallOperator(): FunctionCallOperatorContext {
		let _localctx: FunctionCallOperatorContext = new FunctionCallOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, pawnParser.RULE_functionCallOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 796;
			this.match(pawnParser.OPEN_PARENTHESIS);
			this.state = 805;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.T__0) | (1 << pawnParser.OPEN_PARENTHESIS) | (1 << pawnParser.MINUS) | (1 << pawnParser.INCREMENTS) | (1 << pawnParser.DECREMENTS))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (pawnParser.NOT - 39)) | (1 << (pawnParser.BIT_COMPLEMEN - 39)) | (1 << (pawnParser.STATE - 39)))) !== 0) || ((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (pawnParser.DEFINED - 76)) | (1 << (pawnParser.SIZEOF - 76)) | (1 << (pawnParser.TAGOF - 76)) | (1 << (pawnParser.TRUE - 76)) | (1 << (pawnParser.FALSE - 76)) | (1 << (pawnParser.CELLBITS - 76)) | (1 << (pawnParser.CELLMAX - 76)) | (1 << (pawnParser.CELLMIN - 76)) | (1 << (pawnParser.CHARBITS - 76)) | (1 << (pawnParser.CHARMAX - 76)) | (1 << (pawnParser.CHARMIN - 76)) | (1 << (pawnParser.DEBUG - 76)) | (1 << (pawnParser.LINE - 76)) | (1 << (pawnParser.PAWN - 76)) | (1 << (pawnParser.UCHARMAX - 76)) | (1 << (pawnParser.SHARPSTRING - 76)) | (1 << (pawnParser.STRING - 76)) | (1 << (pawnParser.CHAR_STRING - 76)) | (1 << (pawnParser.IDENTIFIER - 76)) | (1 << (pawnParser.SKIP_PARAM - 76)) | (1 << (pawnParser.BINARY - 76)) | (1 << (pawnParser.HEX - 76)) | (1 << (pawnParser.INTEGER - 76)) | (1 << (pawnParser.FLOAT - 76)) | (1 << (pawnParser.RATIONAL - 76)))) !== 0)) {
				{
				this.state = 797;
				this.functionArgument();
				this.state = 802;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === pawnParser.COMA) {
					{
					{
					this.state = 798;
					this.match(pawnParser.COMA);
					this.state = 799;
					this.functionArgument();
					}
					}
					this.state = 804;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 807;
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
	public functionArgument(): FunctionArgumentContext {
		let _localctx: FunctionArgumentContext = new FunctionArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, pawnParser.RULE_functionArgument);
		let _la: number;
		try {
			this.state = 817;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.SKIP_PARAM:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 809;
				this.match(pawnParser.SKIP_PARAM);
				}
				break;
			case pawnParser.T__0:
			case pawnParser.OPEN_PARENTHESIS:
			case pawnParser.MINUS:
			case pawnParser.INCREMENTS:
			case pawnParser.DECREMENTS:
			case pawnParser.NOT:
			case pawnParser.BIT_COMPLEMEN:
			case pawnParser.STATE:
			case pawnParser.DEFINED:
			case pawnParser.SIZEOF:
			case pawnParser.TAGOF:
			case pawnParser.TRUE:
			case pawnParser.FALSE:
			case pawnParser.CELLBITS:
			case pawnParser.CELLMAX:
			case pawnParser.CELLMIN:
			case pawnParser.CHARBITS:
			case pawnParser.CHARMAX:
			case pawnParser.CHARMIN:
			case pawnParser.DEBUG:
			case pawnParser.LINE:
			case pawnParser.PAWN:
			case pawnParser.UCHARMAX:
			case pawnParser.SHARPSTRING:
			case pawnParser.STRING:
			case pawnParser.CHAR_STRING:
			case pawnParser.IDENTIFIER:
			case pawnParser.BINARY:
			case pawnParser.HEX:
			case pawnParser.INTEGER:
			case pawnParser.FLOAT:
			case pawnParser.RATIONAL:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 814;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === pawnParser.T__0) {
					{
					this.state = 810;
					this.match(pawnParser.T__0);
					this.state = 811;
					this.symbol();
					this.state = 812;
					this.match(pawnParser.ASSIGMENT);
					}
				}

				this.state = 816;
				this.expresion();
				}
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
	public symbol(): SymbolContext {
		let _localctx: SymbolContext = new SymbolContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, pawnParser.RULE_symbol);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 819;
			this.match(pawnParser.IDENTIFIER);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03l\u0338\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x03\x02\x03\x02\x07\x02\xA7\n\x02\f\x02\x0E" +
		"\x02\xAA\v\x02\x03\x02\x07\x02\xAD\n\x02\f\x02\x0E\x02\xB0\v\x02\x03\x02" +
		"\x05\x02\xB3\n\x02\x03\x03\x03\x03\x03\x03\x03\x04\x07\x04\xB9\n\x04\f" +
		"\x04\x0E\x04\xBC\v\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04" +
		"\xC3\n\x04\x03\x04\x05\x04\xC6\n\x04\x03\x05\x05\x05\xC9\n\x05\x03\x05" +
		"\x03\x05\x05\x05\xCD\n\x05\x03\x05\x05\x05\xD0\n\x05\x03\x05\x05\x05\xD3" +
		"\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05\xD9\n\x05\f\x05\x0E\x05" +
		"\xDC\v\x05\x03\x05\x05\x05\xDF\n\x05\x05\x05\xE1\n\x05\x03\x05\x03\x05" +
		"\x05\x05\xE5\n\x05\x03\x06\x05\x06\xE8\n\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x05\x06\xEF\n\x06\x03\x06\x03\x06\x05\x06\xF3\n\x06\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x07\b\xFC\n\b\f\b\x0E\b\xFF" +
		"\v\b\x03\b\x06\b\u0102\n\b\r\b\x0E\b\u0103\x05\b\u0106\n\b\x03\b\x03\b" +
		"\x03\b\x07\b\u010B\n\b\f\b\x0E\b\u010E\v\b\x03\t\x05\t\u0111\n\t\x03\t" +
		"\x03\t\x03\t\x03\t\x03\t\x07\t\u0118\n\t\f\t\x0E\t\u011B\v\t\x03\t\x03" +
		"\t\x03\t\x05\t\u0120\n\t\x05\t\u0122\n\t\x03\n\x05\n\u0125\n\n\x03\n\x05" +
		"\n\u0128\n\n\x03\n\x03\n\x03\n\x03\v\x05\v\u012E\n\v\x03\v\x05\v\u0131" +
		"\n\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x07\f\u013B\n\f\f" +
		"\f\x0E\f\u013E\v\f\x05\f\u0140\n\f\x03\f\x05\f\u0143\n\f\x03\f\x03\f\x03" +
		"\f\x03\f\x05\f\u0149\n\f\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u0156\n\x0F\f\x0F\x0E\x0F\u0159" +
		"\v\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x05\x10" +
		"\u0162\n\x10\x05\x10\u0164\n\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10" +
		"\u016A\n\x10\x05\x10\u016C\n\x10\x03\x10\x05\x10\u016F\n\x10\x03\x11\x03" +
		"\x11\x03\x11\x05\x11\u0174\n\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u0181\n\x13\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u018B" +
		"\n\x13\x03\x13\x05\x13\u018E\n\x13\x03\x14\x03\x14\x07\x14\u0192\n\x14" +
		"\f\x14\x0E\x14\u0195\v\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03" +
		"\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03" +
		"\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u01AA\n\x19\x03\x19\x03\x19" +
		"\x05\x19\u01AE\n\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x05\x1B\u01B5" +
		"\n\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x07\x1D\u01BF\n\x1D\f\x1D\x0E\x1D\u01C2\v\x1D\x03\x1D\x05\x1D\u01C5\n" +
		"\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x07\x1E\u01CD\n\x1E" +
		"\f\x1E\x0E\x1E\u01D0\v\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03 \x03 \x03 \x05 \u01DC\n \x03!\x03!\x03!\x03!\x07!\u01E2" +
		"\n!\f!\x0E!\u01E5\v!\x03!\x03!\x03\"\x05\"\u01EA\n\"\x03\"\x05\"\u01ED" +
		"\n\"\x03\"\x03\"\x05\"\u01F1\n\"\x03\"\x03\"\x05\"\u01F5\n\"\x03\"\x05" +
		"\"\u01F8\n\"\x03#\x03#\x03$\x05$\u01FD\n$\x03$\x05$\u0200\n$\x03$\x03" +
		"$\x05$\u0204\n$\x03$\x03$\x07$\u0208\n$\f$\x0E$\u020B\v$\x03$\x03$\x03" +
		"$\x05$\u0210\n$\x05$\u0212\n$\x03%\x05%\u0215\n%\x03%\x03%\x05%\u0219" +
		"\n%\x03%\x03%\x03&\x03&\x03\'\x03\'\x03(\x03(\x03(\x03(\x03(\x05(\u0226" +
		"\n(\x03)\x03)\x03*\x03*\x03+\x03+\x03,\x03,\x03-\x03-\x03.\x03.\x03.\x03" +
		".\x05.\u0236\n.\x03/\x03/\x030\x030\x031\x031\x031\x051\u023F\n1\x032" +
		"\x032\x032\x032\x052\u0245\n2\x033\x033\x033\x033\x034\x034\x034\x054" +
		"\u024E\n4\x034\x034\x054\u0252\n4\x034\x034\x054\u0256\n4\x034\x034\x03" +
		"4\x035\x035\x055\u025D\n5\x036\x036\x037\x037\x037\x037\x057\u0265\n7" +
		"\x038\x038\x039\x039\x03:\x03:\x07:\u026D\n:\f:\x0E:\u0270\v:\x03;\x03" +
		";\x03<\x03<\x03=\x03=\x03=\x03=\x07=\u027A\n=\f=\x0E=\u027D\v=\x03>\x03" +
		">\x03>\x03>\x03>\x03>\x05>\u0285\n>\x03?\x03?\x03?\x07?\u028A\n?\f?\x0E" +
		"?\u028D\v?\x03@\x03@\x03@\x07@\u0292\n@\f@\x0E@\u0295\v@\x03A\x03A\x03" +
		"A\x07A\u029A\nA\fA\x0EA\u029D\vA\x03B\x03B\x03B\x07B\u02A2\nB\fB\x0EB" +
		"\u02A5\vB\x03C\x03C\x03C\x07C\u02AA\nC\fC\x0EC\u02AD\vC\x03D\x03D\x03" +
		"D\x07D\u02B2\nD\fD\x0ED\u02B5\vD\x03E\x03E\x03E\x07E\u02BA\nE\fE\x0EE" +
		"\u02BD\vE\x03F\x03F\x03F\x07F\u02C2\nF\fF\x0EF\u02C5\vF\x03G\x03G\x03" +
		"G\x07G\u02CA\nG\fG\x0EG\u02CD\vG\x03H\x03H\x03H\x07H\u02D2\nH\fH\x0EH" +
		"\u02D5\vH\x03I\x03I\x03I\x03I\x03I\x03I\x05I\u02DD\nI\x03I\x03I\x03I\x03" +
		"I\x03I\x03I\x03I\x05I\u02E6\nI\x03I\x05I\u02E9\nI\x03J\x03J\x07J\u02ED" +
		"\nJ\fJ\x0EJ\u02F0\vJ\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x07" +
		"K\u02FB\nK\fK\x0EK\u02FE\vK\x03K\x05K\u0301\nK\x03L\x03L\x03L\x03L\x07" +
		"L\u0307\nL\fL\x0EL\u030A\vL\x03L\x03L\x03L\x05L\u030F\nL\x03M\x03M\x05" +
		"M\u0313\nM\x03N\x03N\x03N\x07N\u0318\nN\fN\x0EN\u031B\vN\x03O\x03O\x03" +
		"P\x03P\x03P\x03P\x07P\u0323\nP\fP\x0EP\u0326\vP\x05P\u0328\nP\x03P\x03" +
		"P\x03Q\x03Q\x03Q\x03Q\x03Q\x05Q\u0331\nQ\x03Q\x05Q\u0334\nQ\x03R\x03R" +
		"\x03R\x02\x02\x02S\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10" +
		"\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02" +
		"$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02" +
		"@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02" +
		"\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02" +
		"x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C" +
		"\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E" +
		"\x02\xA0\x02\xA2\x02\x02\x13\x05\x02\r\r\x0F\x0F\x17\x17\x04\x02==@@\x03" +
		"\x02\f\x17\x04\x02;=@@\x03\x02\x18\x1E\x04\x02\x1F$))\x03\x02KL\x03\x02" +
		"QR\x03\x02S\\\x03\x02]_\x03\x02\x1F \x03\x02!$\x03\x02.0\x03\x02\x18\x19" +
		"\x03\x02\x1A\x1C\x04\x0277NP\x04\x02\x1D\x1EMM\x02\u036B\x02\xB2\x03\x02" +
		"\x02\x02\x04\xB4\x03\x02\x02\x02\x06\xC5\x03\x02\x02\x02\b\xC8\x03\x02" +
		"\x02\x02\n\xE7\x03\x02\x02\x02\f\xF4\x03\x02\x02\x02\x0E\u0105\x03\x02" +
		"\x02\x02\x10\u0110\x03\x02\x02\x02\x12\u0124\x03\x02\x02\x02\x14\u012D" +
		"\x03\x02\x02\x02\x16\u0136\x03\x02\x02\x02\x18\u014A\x03\x02\x02\x02\x1A" +
		"\u014E\x03\x02\x02\x02\x1C\u0151\x03\x02\x02\x02\x1E\u016E\x03\x02\x02" +
		"\x02 \u0173\x03\x02\x02\x02\"\u0175\x03\x02\x02\x02$\u018A\x03\x02\x02" +
		"\x02&\u018F\x03\x02\x02\x02(\u0198\x03\x02\x02\x02*\u019B\x03\x02\x02" +
		"\x02,\u019E\x03\x02\x02\x02.\u01A1\x03\x02\x02\x020\u01A4\x03\x02\x02" +
		"\x022\u01AF\x03\x02\x02\x024\u01B2\x03\x02\x02\x026\u01B6\x03\x02\x02" +
		"\x028\u01BA\x03\x02\x02\x02:\u01C8\x03\x02\x02\x02<\u01D4\x03\x02\x02" +
		"\x02>\u01D8\x03\x02\x02\x02@\u01DD\x03\x02\x02\x02B\u01F7\x03\x02\x02" +
		"\x02D\u01F9\x03\x02\x02\x02F\u01FC\x03\x02\x02\x02H\u0214\x03\x02\x02" +
		"\x02J\u021C\x03\x02\x02\x02L\u021E\x03\x02\x02\x02N\u0225\x03\x02\x02" +
		"\x02P\u0227\x03\x02\x02\x02R\u0229\x03\x02\x02\x02T\u022B\x03\x02\x02" +
		"\x02V\u022D\x03\x02\x02\x02X\u022F\x03\x02\x02\x02Z\u0235\x03\x02\x02" +
		"\x02\\\u0237\x03\x02\x02\x02^\u0239\x03\x02\x02\x02`\u023E\x03\x02\x02" +
		"\x02b\u0240\x03\x02\x02\x02d\u0246\x03\x02\x02\x02f\u024A\x03\x02\x02" +
		"\x02h\u025C\x03\x02\x02\x02j\u025E\x03\x02\x02\x02l\u0264\x03\x02\x02" +
		"\x02n\u0266\x03\x02\x02\x02p\u0268\x03\x02\x02\x02r\u026A\x03\x02\x02" +
		"\x02t\u0271\x03\x02\x02\x02v\u0273\x03\x02\x02\x02x\u0275\x03\x02\x02" +
		"\x02z\u027E\x03\x02\x02\x02|\u0286\x03\x02\x02\x02~\u028E\x03\x02\x02" +
		"\x02\x80\u0296\x03\x02\x02\x02\x82\u029E\x03\x02\x02\x02\x84\u02A6\x03" +
		"\x02\x02\x02\x86\u02AE\x03\x02\x02\x02\x88\u02B6\x03\x02\x02\x02\x8A\u02BE" +
		"\x03\x02\x02\x02\x8C\u02C6\x03\x02\x02\x02\x8E\u02CE\x03\x02\x02\x02\x90" +
		"\u02E8\x03\x02\x02\x02\x92\u02EA\x03\x02\x02\x02\x94\u02F1\x03\x02\x02" +
		"\x02\x96\u030E\x03\x02\x02\x02\x98\u0312\x03\x02\x02\x02\x9A\u0314\x03" +
		"\x02\x02\x02\x9C\u031C\x03\x02\x02\x02\x9E\u031E\x03\x02\x02\x02\xA0\u0333" +
		"\x03\x02\x02\x02\xA2\u0335\x03\x02\x02\x02\xA4\xB3\x05\x04\x03\x02\xA5" +
		"\xA7\x05t;\x02\xA6\xA5\x03\x02\x02\x02\xA7\xAA\x03\x02\x02\x02\xA8\xA6" +
		"\x03\x02\x02\x02\xA8\xA9\x03\x02\x02\x02\xA9\xAE\x03\x02\x02\x02\xAA\xA8" +
		"\x03\x02\x02\x02\xAB\xAD\x05\x06\x04\x02\xAC\xAB\x03\x02\x02\x02\xAD\xB0" +
		"\x03\x02\x02\x02\xAE\xAC\x03\x02\x02\x02\xAE\xAF\x03\x02\x02\x02\xAF\xB1" +
		"\x03\x02\x02\x02\xB0\xAE\x03\x02\x02\x02\xB1\xB3\x07\x02\x02\x03\xB2\xA4" +
		"\x03\x02\x02\x02\xB2\xA8\x03\x02\x02\x02\xB3\x03\x03\x02\x02\x02\xB4\xB5" +
		"\x07`\x02\x02\xB5\xB6\x07&\x02\x02\xB6\x05\x03\x02\x02\x02\xB7\xB9\x05" +
		"t;\x02\xB8\xB7\x03\x02\x02\x02\xB9\xBC\x03\x02\x02\x02\xBA\xB8\x03\x02" +
		"\x02\x02\xBA\xBB\x03\x02\x02\x02\xBB\xC2\x03\x02\x02\x02\xBC\xBA\x03\x02" +
		"\x02\x02\xBD\xC3\x05\x12\n\x02\xBE\xC3\x05\x14\v\x02\xBF\xC0\x05\x0E\b" +
		"\x02\xC0\xC1\x07\v\x02\x02\xC1\xC3\x03\x02\x02\x02\xC2\xBD\x03\x02\x02" +
		"\x02\xC2\xBE\x03\x02\x02\x02\xC2\xBF\x03\x02\x02\x02\xC3\xC6\x03\x02\x02" +
		"\x02\xC4\xC6\x05\b\x05\x02\xC5\xBA\x03\x02\x02\x02\xC5\xC4\x03\x02\x02" +
		"\x02\xC6\x07\x03\x02\x02\x02\xC7\xC9\x07<\x02\x02\xC8\xC7\x03\x02\x02" +
		"\x02\xC8\xC9\x03\x02\x02\x02\xC9\xCA\x03\x02\x02\x02\xCA\xCC\x07:\x02" +
		"\x02\xCB\xCD\x05\x1A\x0E\x02\xCC\xCB\x03\x02\x02\x02\xCC\xCD\x03\x02\x02" +
		"\x02\xCD\xCF\x03\x02\x02\x02\xCE\xD0\x07`\x02\x02\xCF\xCE\x03\x02\x02" +
		"\x02\xCF\xD0\x03\x02\x02\x02\xD0\xD2\x03\x02\x02\x02\xD1\xD3\x05\f\x07" +
		"\x02\xD2\xD1\x03\x02\x02\x02\xD2\xD3\x03\x02\x02\x02\xD3\xD4\x03\x02\x02" +
		"\x02\xD4\xE0\x07\x06\x02\x02\xD5\xDA\x05\n\x06\x02\xD6\xD7\x07\n\x02\x02" +
		"\xD7\xD9\x05\n\x06\x02\xD8\xD6\x03\x02\x02\x02\xD9\xDC\x03\x02\x02\x02" +
		"\xDA\xD8\x03\x02\x02\x02\xDA\xDB\x03\x02\x02\x02\xDB\xDE\x03\x02\x02\x02" +
		"\xDC\xDA\x03\x02\x02\x02\xDD\xDF\x07\n\x02\x02\xDE\xDD\x03\x02\x02\x02" +
		"\xDE\xDF\x03\x02\x02\x02\xDF\xE1\x03\x02\x02\x02\xE0\xD5\x03\x02\x02\x02" +
		"\xE0\xE1\x03\x02\x02\x02\xE1\xE2\x03\x02\x02\x02\xE2\xE4\x07\x07\x02\x02" +
		"\xE3\xE5\x07\v\x02\x02\xE4\xE3\x03\x02\x02\x02\xE4\xE5\x03\x02\x02\x02" +
		"\xE5\t\x03\x02\x02\x02\xE6\xE8\x05\x1A\x0E\x02\xE7\xE6\x03\x02\x02\x02" +
		"\xE7\xE8\x03\x02\x02\x02\xE8\xE9\x03\x02\x02\x02\xE9\xEE\x07`\x02\x02" +
		"\xEA\xEB\x07\b\x02\x02\xEB\xEC\x05\x9CO\x02\xEC\xED\x07\t\x02\x02\xED" +
		"\xEF\x03\x02\x02\x02\xEE\xEA\x03\x02\x02\x02\xEE\xEF\x03\x02\x02\x02\xEF" +
		"\xF2\x03\x02\x02\x02\xF0\xF1\x07\f\x02\x02\xF1\xF3\x05\x9CO\x02\xF2\xF0" +
		"\x03\x02\x02\x02\xF2\xF3\x03\x02\x02\x02\xF3\v\x03\x02\x02\x02\xF4\xF5" +
		"\x07\x04\x02\x02\xF5\xF6\t\x02\x02\x02\xF6\xF7\x07d\x02\x02\xF7\xF8\x07" +
		"\x05\x02\x02\xF8\r\x03\x02\x02\x02\xF9\xFD\x079\x02\x02\xFA\xFC\x05L\'" +
		"\x02\xFB\xFA\x03\x02\x02\x02\xFC\xFF\x03\x02\x02\x02\xFD\xFB\x03\x02\x02" +
		"\x02\xFD\xFE\x03\x02\x02\x02\xFE\u0106\x03\x02\x02\x02\xFF\xFD\x03\x02" +
		"\x02\x02\u0100\u0102\x05L\'\x02\u0101\u0100\x03\x02\x02\x02\u0102\u0103" +
		"\x03\x02\x02\x02\u0103\u0101\x03\x02\x02\x02\u0103\u0104\x03\x02\x02\x02" +
		"\u0104\u0106\x03\x02\x02\x02\u0105\xF9\x03\x02\x02\x02\u0105\u0101\x03" +
		"\x02\x02\x02\u0106\u0107\x03\x02\x02\x02\u0107\u010C\x05\x10\t\x02\u0108" +
		"\u0109\x07\n\x02\x02\u0109\u010B\x05\x10\t\x02\u010A\u0108\x03\x02\x02" +
		"\x02\u010B\u010E\x03\x02\x02\x02\u010C\u010A\x03\x02\x02\x02\u010C\u010D" +
		"\x03\x02\x02\x02\u010D\x0F\x03\x02\x02\x02\u010E\u010C\x03\x02\x02\x02" +
		"\u010F\u0111\x05\x1A\x0E\x02\u0110\u010F\x03\x02\x02\x02\u0110\u0111\x03" +
		"\x02\x02\x02\u0111\u0112\x03\x02\x02\x02\u0112\u0119\x07`\x02\x02\u0113" +
		"\u0114\x07\b\x02\x02\u0114\u0115\x05\x9CO\x02\u0115\u0116\x07\t\x02\x02" +
		"\u0116\u0118\x03\x02\x02\x02\u0117\u0113\x03\x02\x02\x02\u0118\u011B\x03" +
		"\x02\x02\x02\u0119\u0117\x03\x02\x02\x02\u0119\u011A\x03\x02\x02\x02\u011A" +
		"\u0121\x03\x02\x02\x02\u011B\u0119\x03\x02\x02\x02\u011C\u011F\x07\f\x02" +
		"\x02\u011D\u0120\x05\x9CO\x02\u011E\u0120\x05@!\x02\u011F\u011D\x03\x02" +
		"\x02\x02\u011F\u011E\x03\x02\x02\x02\u0120\u0122\x03\x02\x02\x02\u0121" +
		"\u011C\x03\x02\x02\x02\u0121\u0122\x03\x02\x02\x02\u0122\x11\x03\x02\x02" +
		"\x02\u0123\u0125\x05 \x11\x02\u0124\u0123\x03\x02\x02\x02\u0124\u0125" +
		"\x03\x02\x02\x02\u0125\u0127\x03\x02\x02\x02\u0126\u0128\x05\x1A\x0E\x02" +
		"\u0127\u0126\x03\x02\x02\x02\u0127\u0128\x03\x02\x02\x02\u0128\u0129\x03" +
		"\x02\x02\x02\u0129\u012A\x07`\x02\x02\u012A\u012B\x05\x16\f\x02\u012B" +
		"\x13\x03\x02\x02\x02\u012C\u012E\x05 \x11\x02\u012D\u012C\x03\x02\x02" +
		"\x02\u012D\u012E\x03\x02\x02\x02\u012E\u0130\x03\x02\x02\x02\u012F\u0131" +
		"\x05\x1A\x0E\x02\u0130\u012F\x03\x02\x02\x02\u0130\u0131\x03\x02\x02\x02" +
		"\u0131\u0132\x03\x02\x02\x02\u0132\u0133\x07A\x02\x02\u0133\u0134\x05" +
		"Z.\x02\u0134\u0135\x05\x16\f\x02\u0135\x15\x03\x02\x02\x02\u0136\u013F" +
		"\x07\x04\x02\x02\u0137\u013C\x05F$\x02\u0138\u0139\x07\n\x02\x02\u0139" +
		"\u013B\x05F$\x02\u013A\u0138\x03\x02\x02\x02\u013B\u013E\x03\x02\x02\x02" +
		"\u013C\u013A\x03\x02\x02\x02\u013C\u013D\x03\x02\x02\x02\u013D\u0140\x03" +
		"\x02\x02\x02\u013E\u013C\x03\x02\x02\x02\u013F\u0137\x03\x02\x02\x02\u013F" +
		"\u0140\x03\x02\x02\x02\u0140\u0142\x03\x02\x02\x02\u0141\u0143\x05H%\x02" +
		"\u0142\u0141\x03\x02\x02\x02\u0142\u0143\x03\x02\x02\x02\u0143\u0144\x03" +
		"\x02\x02\x02\u0144\u0148\x07\x05\x02\x02\u0145\u0149\x07\v\x02\x02\u0146" +
		"\u0149\x05$\x13\x02\u0147\u0149\x05\x18\r\x02\u0148\u0145\x03\x02\x02" +
		"\x02\u0148\u0146\x03\x02\x02\x02\u0148\u0147\x03\x02\x02\x02\u0149\x17" +
		"\x03\x02\x02\x02\u014A\u014B\x07\f\x02\x02\u014B\u014C\x07`\x02\x02\u014C" +
		"\u014D\x07\v\x02\x02\u014D\x19\x03\x02\x02\x02\u014E\u014F\x07`\x02\x02" +
		"\u014F\u0150\x07&\x02\x02\u0150\x1B\x03\x02\x02\x02\u0151\u0152\x07\x06" +
		"\x02\x02\u0152\u0157\x07`\x02\x02\u0153\u0154\x07\n\x02\x02\u0154\u0156" +
		"\x07`\x02\x02\u0155\u0153\x03\x02\x02\x02\u0156\u0159\x03\x02\x02\x02" +
		"\u0157\u0155\x03\x02\x02\x02\u0157\u0158\x03\x02\x02\x02\u0158\u015A\x03" +
		"\x02\x02\x02\u0159\u0157\x03\x02\x02\x02\u015A\u015B\x07\x07\x02\x02\u015B" +
		"\u015C\x03\x02\x02\x02\u015C\u015D\x07&\x02\x02\u015D\x1D\x03\x02\x02" +
		"\x02\u015E\u0163\x07\b\x02\x02\u015F\u0161\x05\x9CO\x02\u0160\u0162\x07" +
		"M\x02\x02\u0161\u0160\x03\x02\x02\x02\u0161\u0162\x03\x02\x02\x02\u0162" +
		"\u0164\x03\x02\x02\x02\u0163\u015F\x03\x02\x02\x02\u0163\u0164\x03\x02" +
		"\x02\x02\u0164\u0165\x03\x02\x02\x02\u0165\u016F\x07\t\x02\x02\u0166\u016B" +
		"\x07\x06\x02\x02\u0167\u0169\x05\x9CO\x02\u0168\u016A\x07M\x02\x02\u0169" +
		"\u0168\x03\x02\x02\x02\u0169\u016A\x03\x02\x02\x02\u016A\u016C\x03\x02" +
		"\x02\x02\u016B\u0167\x03\x02\x02\x02\u016B\u016C\x03\x02\x02\x02\u016C" +
		"\u016D\x03\x02\x02\x02\u016D\u016F\x07\x07\x02\x02\u016E\u015E\x03\x02" +
		"\x02\x02\u016E\u0166\x03\x02\x02\x02\u016F\x1F\x03\x02\x02\x02\u0170\u0174" +
		"\x05\"\x12\x02\u0171\u0174\x07>\x02\x02\u0172\u0174\x07?\x02\x02\u0173" +
		"\u0170\x03\x02\x02\x02\u0173\u0171\x03\x02\x02\x02\u0173\u0172\x03\x02" +
		"\x02\x02\u0174!\x03\x02\x02\x02\u0175\u0176\t\x03\x02\x02\u0176#\x03\x02" +
		"\x02\x02\u0177\u0181\x05\x0E\b\x02\u0178\u0181\x05\b\x05\x02\u0179\u0181" +
		"\x05,\x17\x02\u017A\u0181\x054\x1B\x02\u017B\u0181\x05j6\x02\u017C\u0181" +
		"\x05*\x16\x02\u017D\u0181\x05(\x15\x02\u017E\u0181\x05.\x18\x02\u017F" +
		"\u0181\x05\x9AN\x02\u0180\u0177\x03\x02\x02\x02\u0180\u0178\x03\x02\x02" +
		"\x02\u0180\u0179\x03\x02\x02\x02\u0180\u017A\x03\x02\x02\x02\u0180\u017B" +
		"\x03\x02\x02\x02\u0180\u017C\x03\x02\x02\x02\u0180\u017D\x03\x02\x02\x02" +
		"\u0180\u017E\x03\x02\x02\x02\u0180\u017F\x03\x02\x02\x02\u0181\u0182\x03" +
		"\x02\x02\x02\u0182\u0183\x07\v\x02\x02\u0183\u018B\x03\x02\x02\x02\u0184" +
		"\u018B\x07\v\x02\x02\u0185\u018B\x05\x04\x03\x02\u0186\u018B\x05&\x14" +
		"\x02\u0187\u018B\x050\x19\x02\u0188\u018B\x05`1\x02\u0189\u018B\x058\x1D" +
		"\x02\u018A\u0180\x03\x02\x02\x02\u018A\u0184\x03\x02\x02\x02\u018A\u0185" +
		"\x03\x02\x02\x02\u018A\u0186\x03\x02\x02\x02\u018A\u0187\x03\x02\x02\x02" +
		"\u018A\u0188\x03\x02\x02\x02\u018A\u0189\x03\x02\x02\x02\u018B\u018D\x03" +
		"\x02\x02\x02\u018C\u018E\x07g\x02\x02\u018D\u018C\x03\x02\x02\x02\u018D" +
		"\u018E\x03\x02\x02\x02\u018E%\x03\x02\x02\x02\u018F\u0193\x07\x06\x02" +
		"\x02\u0190\u0192\x05$\x13\x02\u0191\u0190\x03\x02\x02\x02\u0192\u0195" +
		"\x03\x02\x02\x02\u0193\u0191\x03\x02\x02\x02\u0193\u0194\x03\x02\x02\x02" +
		"\u0194\u0196\x03\x02\x02\x02\u0195\u0193\x03\x02\x02\x02\u0196\u0197\x07" +
		"\x07\x02\x02\u0197\'\x03\x02\x02\x02\u0198\u0199\x073\x02\x02\u0199\u019A" +
		"\x05\x9CO\x02\u019A)\x03\x02\x02\x02\u019B\u019C\x074\x02\x02\u019C\u019D" +
		"\x05\x9AN\x02\u019D+\x03\x02\x02\x02\u019E\u019F\x075\x02\x02\u019F\u01A0" +
		"\x05\xA2R\x02\u01A0-\x03\x02\x02\x02\u01A1\u01A2\x076\x02\x02\u01A2\u01A3" +
		"\x05\x9AN\x02\u01A3/\x03\x02\x02\x02\u01A4\u01A9\x07B\x02\x02\u01A5\u01AA" +
		"\x056\x1C\x02\u01A6\u01A7\x05\x9CO\x02\u01A7\u01A8\x07C\x02\x02\u01A8" +
		"\u01AA\x03\x02\x02\x02\u01A9\u01A5\x03\x02\x02\x02\u01A9\u01A6\x03\x02" +
		"\x02\x02\u01AA\u01AB\x03\x02\x02\x02\u01AB\u01AD\x05$\x13\x02\u01AC\u01AE" +
		"\x052\x1A\x02\u01AD\u01AC\x03\x02\x02\x02\u01AD\u01AE\x03\x02\x02\x02" +
		"\u01AE1\x03\x02\x02\x02\u01AF\u01B0\x07D\x02\x02\u01B0\u01B1\x05$\x13" +
		"\x02\u01B13\x03\x02\x02\x02\u01B2\u01B4\x078\x02\x02\u01B3\u01B5\x05\x9A" +
		"N\x02\u01B4\u01B3\x03\x02\x02\x02\u01B4\u01B5\x03\x02\x02\x02\u01B55\x03" +
		"\x02\x02\x02\u01B6\u01B7\x07\x04\x02\x02\u01B7\u01B8\x05\x9AN\x02\u01B8" +
		"\u01B9\x07\x05\x02\x02\u01B97\x03\x02\x02\x02\u01BA\u01BB\x07E\x02\x02" +
		"\u01BB\u01BC\x056\x1C\x02\u01BC\u01C0\x07\x06\x02\x02\u01BD\u01BF\x05" +
		":\x1E\x02\u01BE\u01BD\x03\x02\x02\x02\u01BF\u01C2\x03\x02\x02\x02\u01C0" +
		"\u01BE\x03\x02\x02\x02\u01C0\u01C1\x03\x02\x02\x02\u01C1\u01C4\x03\x02" +
		"\x02\x02\u01C2\u01C0\x03\x02\x02\x02\u01C3\u01C5\x05<\x1F\x02\u01C4\u01C3" +
		"\x03\x02\x02\x02\u01C4\u01C5\x03\x02\x02\x02\u01C5\u01C6\x03\x02\x02\x02" +
		"\u01C6\u01C7\x07\x07\x02\x02\u01C79\x03\x02\x02\x02\u01C8\u01C9\x07F\x02" +
		"\x02\u01C9\u01CE\x05> \x02\u01CA\u01CB\x07\n\x02\x02\u01CB\u01CD\x05>" +
		" \x02\u01CC\u01CA\x03\x02\x02\x02\u01CD\u01D0\x03\x02\x02\x02\u01CE\u01CC" +
		"\x03\x02\x02\x02\u01CE\u01CF\x03\x02\x02\x02\u01CF\u01D1\x03\x02\x02\x02" +
		"\u01D0\u01CE\x03\x02\x02\x02\u01D1\u01D2\x07&\x02\x02\u01D2\u01D3\x05" +
		"$\x13\x02\u01D3;\x03\x02\x02\x02\u01D4\u01D5\x07G\x02\x02\u01D5\u01D6" +
		"\x07&\x02\x02\u01D6\u01D7\x05$\x13\x02\u01D7=\x03\x02\x02\x02\u01D8\u01DB" +
		"\x05\x9CO\x02\u01D9\u01DA\x071\x02\x02\u01DA\u01DC\x05\x9CO\x02\u01DB" +
		"\u01D9\x03\x02\x02\x02\u01DB\u01DC\x03\x02\x02\x02\u01DC?\x03\x02\x02" +
		"\x02\u01DD\u01DE\x07\x06\x02\x02\u01DE\u01E3\x05B\"\x02\u01DF\u01E0\x07" +
		"\n\x02\x02\u01E0\u01E2\x05B\"\x02\u01E1\u01DF\x03\x02\x02\x02\u01E2\u01E5" +
		"\x03\x02\x02\x02\u01E3\u01E1\x03\x02\x02\x02\u01E3\u01E4\x03\x02\x02\x02" +
		"\u01E4\u01E6\x03\x02\x02\x02\u01E5\u01E3\x03\x02\x02\x02\u01E6\u01E7\x07" +
		"\x07\x02\x02\u01E7A\x03\x02\x02\x02\u01E8\u01EA\x05\x1A\x0E\x02\u01E9" +
		"\u01E8\x03\x02\x02\x02\u01E9\u01EA\x03\x02\x02\x02\u01EA\u01F4\x03\x02" +
		"\x02\x02\u01EB\u01ED\x07\x19\x02\x02\u01EC\u01EB\x03\x02\x02\x02\u01EC" +
		"\u01ED\x03\x02\x02\x02\u01ED\u01EE\x03\x02\x02\x02\u01EE\u01F5\x07`\x02" +
		"\x02\u01EF\u01F1\x07\x19\x02\x02\u01F0\u01EF\x03\x02\x02\x02\u01F0\u01F1" +
		"\x03\x02\x02\x02\u01F1\u01F2\x03\x02\x02\x02\u01F2\u01F5\x05N(\x02\u01F3" +
		"\u01F5\x05r:\x02\u01F4\u01EC\x03\x02\x02\x02\u01F4\u01F0\x03\x02\x02\x02" +
		"\u01F4\u01F3\x03\x02\x02\x02\u01F5\u01F8\x03\x02\x02\x02\u01F6\u01F8\x05" +
		"@!\x02\u01F7\u01E9\x03\x02\x02\x02\u01F7";
	private static readonly _serializedATNSegment1: string =
		"\u01F6\x03\x02\x02\x02\u01F8C\x03\x02\x02\x02\u01F9\u01FA\t\x04\x02\x02" +
		"\u01FAE\x03\x02\x02\x02\u01FB\u01FD\x07;\x02\x02\u01FC\u01FB\x03\x02\x02" +
		"\x02\u01FC\u01FD\x03\x02\x02\x02\u01FD\u01FF\x03\x02\x02\x02\u01FE\u0200" +
		"\x05J&\x02\u01FF\u01FE\x03\x02\x02\x02\u01FF\u0200\x03\x02\x02\x02\u0200" +
		"\u0203\x03\x02\x02\x02\u0201\u0204\x05\x1C\x0F\x02\u0202\u0204\x05\x1A" +
		"\x0E\x02\u0203\u0201\x03\x02\x02\x02\u0203\u0202\x03\x02\x02\x02\u0203" +
		"\u0204\x03\x02\x02\x02\u0204\u0205\x03\x02\x02\x02\u0205\u0209\x07`\x02" +
		"\x02\u0206\u0208\x05\x1E\x10\x02\u0207\u0206\x03\x02\x02\x02\u0208\u020B" +
		"\x03\x02\x02\x02\u0209\u0207\x03\x02\x02\x02\u0209\u020A\x03\x02\x02\x02" +
		"\u020A\u0211\x03\x02\x02\x02\u020B\u0209\x03\x02\x02\x02\u020C\u020F\x07" +
		"\f\x02\x02\u020D\u0210\x05\x9CO\x02\u020E\u0210\x05@!\x02\u020F\u020D" +
		"\x03\x02\x02\x02\u020F\u020E\x03\x02\x02\x02\u0210\u0212\x03\x02\x02\x02" +
		"\u0211\u020C\x03\x02\x02\x02\u0211\u0212\x03\x02\x02\x02\u0212G\x03\x02" +
		"\x02\x02\u0213\u0215\x07\n\x02\x02\u0214\u0213\x03\x02\x02\x02\u0214\u0215" +
		"\x03\x02\x02\x02\u0215\u0218\x03\x02\x02\x02\u0216\u0219\x05\x1C\x0F\x02" +
		"\u0217\u0219\x05\x1A\x0E\x02\u0218\u0216\x03\x02\x02\x02\u0218\u0217\x03" +
		"\x02\x02\x02\u0218\u0219\x03\x02\x02\x02\u0219\u021A\x03\x02\x02\x02\u021A" +
		"\u021B\x072\x02\x02\u021BI\x03\x02\x02\x02\u021C\u021D\x07*\x02\x02\u021D" +
		"K\x03\x02\x02\x02\u021E\u021F\t\x05\x02\x02\u021FM\x03\x02\x02\x02\u0220" +
		"\u0226\x05R*\x02\u0221\u0226\x05P)\x02\u0222\u0226\x05T+\x02\u0223\u0226" +
		"\x05V,\x02\u0224\u0226\x05X-\x02\u0225\u0220\x03\x02\x02\x02\u0225\u0221" +
		"\x03\x02\x02\x02\u0225\u0222\x03\x02\x02\x02\u0225\u0223\x03\x02\x02\x02" +
		"\u0225\u0224\x03\x02\x02\x02\u0226O\x03\x02\x02\x02\u0227\u0228\x07e\x02" +
		"\x02\u0228Q\x03\x02\x02\x02\u0229\u022A\x07d\x02\x02\u022AS\x03\x02\x02" +
		"\x02\u022B\u022C\x07c\x02\x02\u022CU\x03\x02\x02\x02\u022D\u022E\x07f" +
		"\x02\x02\u022EW\x03\x02\x02\x02\u022F\u0230\x07b\x02\x02\u0230Y\x03\x02" +
		"\x02\x02\u0231\u0236\x05\\/\x02\u0232\u0236\x05^0\x02\u0233\u0236\x07" +
		"\f\x02\x02\u0234\u0236\x07-\x02\x02\u0235\u0231\x03\x02\x02\x02\u0235" +
		"\u0232\x03\x02\x02\x02\u0235\u0233\x03\x02\x02\x02\u0235\u0234\x03\x02" +
		"\x02\x02\u0236[\x03\x02\x02\x02\u0237\u0238\t\x06\x02\x02\u0238]\x03\x02" +
		"\x02\x02\u0239\u023A\t\x07\x02\x02\u023A_\x03\x02\x02\x02\u023B\u023F" +
		"\x05d3\x02\u023C\u023F\x05b2\x02\u023D\u023F\x05f4\x02\u023E\u023B\x03" +
		"\x02\x02\x02\u023E\u023C\x03\x02\x02\x02\u023E\u023D\x03\x02\x02\x02\u023F" +
		"a\x03\x02\x02\x02\u0240\u0241\x07J\x02\x02\u0241\u0244\x05$\x13\x02\u0242" +
		"\u0243\x07H\x02\x02\u0243\u0245\x056\x1C\x02\u0244\u0242\x03\x02\x02\x02" +
		"\u0244\u0245\x03\x02\x02\x02\u0245c\x03\x02\x02\x02\u0246\u0247\x07H\x02" +
		"\x02\u0247\u0248\x056\x1C\x02\u0248\u0249\x05$\x13\x02\u0249e\x03\x02" +
		"\x02\x02\u024A\u024B\x07I\x02\x02\u024B\u024D\x07\x04\x02\x02\u024C\u024E" +
		"\x05h5\x02\u024D\u024C\x03\x02\x02\x02\u024D\u024E\x03\x02\x02\x02\u024E" +
		"\u024F\x03\x02\x02\x02\u024F\u0251\x07\v\x02\x02\u0250\u0252\x05\x9CO" +
		"\x02\u0251\u0250\x03\x02\x02\x02\u0251\u0252\x03\x02\x02\x02\u0252\u0253" +
		"\x03\x02\x02\x02\u0253\u0255\x07\v\x02\x02\u0254\u0256\x05\x9AN\x02\u0255" +
		"\u0254\x03\x02\x02\x02\u0255\u0256\x03\x02\x02\x02\u0256\u0257\x03\x02" +
		"\x02\x02\u0257\u0258\x07\x05\x02\x02\u0258\u0259\x05$\x13\x02\u0259g\x03" +
		"\x02\x02\x02\u025A\u025D\x05\x0E\b\x02\u025B\u025D\x05\x9AN\x02\u025C" +
		"\u025A\x03\x02\x02\x02\u025C\u025B\x03\x02\x02\x02\u025Di\x03\x02\x02" +
		"\x02\u025E\u025F\t\b\x02\x02\u025Fk\x03\x02\x02\x02\u0260\u0265\x05r:" +
		"\x02\u0261\u0265\x05N(\x02\u0262\u0265\x05n8\x02\u0263\u0265\x05p9\x02" +
		"\u0264\u0260\x03\x02\x02\x02\u0264\u0261\x03\x02\x02\x02\u0264\u0262\x03" +
		"\x02\x02\x02\u0264\u0263\x03\x02\x02\x02\u0265m\x03\x02\x02\x02\u0266" +
		"\u0267\t\t\x02\x02\u0267o\x03\x02\x02\x02\u0268\u0269\t\n\x02\x02\u0269" +
		"q\x03\x02\x02\x02\u026A\u026E\t\v\x02\x02\u026B\u026D\x05r:\x02\u026C" +
		"\u026B\x03\x02\x02\x02\u026D\u0270\x03\x02\x02\x02\u026E\u026C\x03\x02" +
		"\x02\x02\u026E\u026F\x03\x02\x02\x02\u026Fs\x03\x02\x02\x02\u0270\u026E" +
		"\x03\x02\x02\x02\u0271\u0272\x05v<\x02\u0272u\x03\x02\x02\x02\u0273\u0274" +
		"\x07j\x02\x02\u0274w\x03\x02\x02\x02\u0275\u027B\x05z>\x02\u0276\u0277" +
		"\x05D#\x02\u0277\u0278\x05z>\x02\u0278\u027A\x03\x02\x02\x02\u0279\u0276" +
		"\x03\x02\x02\x02\u027A\u027D\x03\x02\x02\x02\u027B\u0279\x03\x02\x02\x02" +
		"\u027B\u027C\x03\x02\x02\x02\u027Cy\x03\x02\x02\x02\u027D\u027B\x03\x02" +
		"\x02\x02\u027E\u0284\x05|?\x02\u027F\u0280\x07%\x02\x02\u0280\u0281\x05" +
		"z>\x02\u0281\u0282\x07&\x02\x02\u0282\u0283\x05z>\x02\u0283\u0285\x03" +
		"\x02\x02\x02\u0284\u027F\x03\x02\x02\x02\u0284\u0285\x03\x02\x02\x02\u0285" +
		"{\x03\x02\x02\x02\u0286\u028B\x05~@\x02\u0287\u0288\x07\'\x02\x02\u0288" +
		"\u028A\x05~@\x02\u0289\u0287\x03\x02\x02\x02\u028A\u028D\x03\x02\x02\x02" +
		"\u028B\u0289\x03\x02\x02\x02\u028B\u028C\x03\x02\x02\x02\u028C}\x03\x02" +
		"\x02\x02\u028D\u028B\x03\x02\x02\x02\u028E\u0293\x05\x80A\x02\u028F\u0290" +
		"\x07(\x02\x02\u0290\u0292\x05\x80A\x02\u0291\u028F\x03\x02\x02\x02\u0292" +
		"\u0295\x03\x02\x02\x02\u0293\u0291\x03\x02\x02\x02\u0293\u0294\x03\x02" +
		"\x02\x02\u0294\x7F\x03\x02\x02\x02\u0295\u0293\x03\x02\x02\x02\u0296\u029B" +
		"\x05\x82B\x02\u0297\u0298\t\f\x02\x02\u0298\u029A\x05\x82B\x02\u0299\u0297" +
		"\x03\x02\x02\x02\u029A\u029D\x03\x02\x02\x02\u029B\u0299\x03\x02\x02\x02" +
		"\u029B\u029C\x03\x02\x02\x02\u029C\x81\x03\x02\x02\x02\u029D\u029B\x03" +
		"\x02\x02\x02\u029E\u02A3\x05\x84C\x02\u029F\u02A0\t\r\x02\x02\u02A0\u02A2" +
		"\x05\x84C\x02\u02A1\u029F\x03\x02\x02\x02\u02A2\u02A5\x03\x02\x02\x02" +
		"\u02A3\u02A1\x03\x02\x02\x02\u02A3\u02A4\x03\x02\x02\x02\u02A4\x83\x03" +
		"\x02\x02\x02\u02A5\u02A3\x03\x02\x02\x02\u02A6\u02AB\x05\x86D\x02\u02A7" +
		"\u02A8\x07+\x02\x02\u02A8\u02AA\x05\x86D\x02\u02A9\u02A7\x03\x02\x02\x02" +
		"\u02AA\u02AD\x03\x02\x02\x02\u02AB\u02A9\x03\x02\x02\x02\u02AB\u02AC\x03" +
		"\x02\x02\x02\u02AC\x85\x03\x02\x02\x02\u02AD\u02AB\x03\x02\x02\x02\u02AE" +
		"\u02B3\x05\x88E\x02\u02AF\u02B0\x07,\x02\x02\u02B0\u02B2\x05\x88E\x02" +
		"\u02B1\u02AF\x03\x02\x02\x02\u02B2\u02B5\x03\x02\x02\x02\u02B3\u02B1\x03" +
		"\x02\x02\x02\u02B3\u02B4\x03\x02\x02\x02\u02B4\x87\x03\x02\x02\x02\u02B5" +
		"\u02B3\x03\x02\x02\x02\u02B6\u02BB\x05\x8AF\x02\u02B7\u02B8\x07*\x02\x02" +
		"\u02B8\u02BA\x05\x8AF\x02\u02B9\u02B7\x03\x02\x02\x02\u02BA\u02BD\x03" +
		"\x02\x02\x02\u02BB\u02B9\x03\x02\x02\x02\u02BB\u02BC\x03\x02\x02\x02\u02BC" +
		"\x89\x03\x02\x02\x02\u02BD\u02BB\x03\x02\x02\x02\u02BE\u02C3\x05\x8CG" +
		"\x02\u02BF\u02C0\t\x0E\x02\x02\u02C0\u02C2\x05\x8CG\x02\u02C1\u02BF\x03" +
		"\x02\x02\x02\u02C2\u02C5\x03\x02\x02\x02\u02C3\u02C1\x03\x02\x02\x02\u02C3" +
		"\u02C4\x03\x02\x02\x02\u02C4\x8B\x03\x02\x02\x02\u02C5\u02C3\x03\x02\x02" +
		"\x02\u02C6\u02CB\x05\x8EH\x02\u02C7\u02C8\t\x0F\x02\x02\u02C8\u02CA\x05" +
		"\x8EH\x02\u02C9\u02C7\x03\x02\x02\x02\u02CA\u02CD\x03\x02\x02\x02\u02CB" +
		"\u02C9\x03\x02\x02\x02\u02CB\u02CC\x03\x02\x02\x02\u02CC\x8D\x03\x02\x02" +
		"\x02\u02CD\u02CB\x03\x02\x02\x02\u02CE\u02D3\x05\x90I\x02\u02CF\u02D0" +
		"\t\x10\x02\x02\u02D0\u02D2\x05\x90I\x02\u02D1\u02CF\x03\x02\x02\x02\u02D2" +
		"\u02D5\x03\x02\x02\x02\u02D3\u02D1\x03\x02\x02\x02\u02D3\u02D4\x03\x02" +
		"\x02\x02\u02D4\x8F\x03\x02\x02\x02\u02D5\u02D3\x03\x02\x02\x02\u02D6\u02DD" +
		"\x07\x1D\x02\x02\u02D7\u02DD\x07\x1E\x02\x02\u02D8\u02DD\x07-\x02\x02" +
		"\u02D9\u02DD\x07)\x02\x02\u02DA\u02DD\x07\x19\x02\x02\u02DB\u02DD\x05" +
		"\x1A\x0E\x02\u02DC\u02D6\x03\x02\x02\x02\u02DC\u02D7\x03\x02\x02\x02\u02DC" +
		"\u02D8\x03\x02\x02\x02\u02DC\u02D9\x03\x02\x02\x02\u02DC\u02DA\x03\x02" +
		"\x02\x02\u02DC\u02DB\x03\x02\x02\x02\u02DD\u02DE\x03\x02\x02\x02\u02DE" +
		"\u02E9\x05\x90I\x02\u02DF\u02E5\t\x11\x02\x02\u02E0\u02E6\x05\x98M\x02" +
		"\u02E1\u02E2\x07\x04\x02\x02\u02E2\u02E3\x05\x98M\x02\u02E3\u02E4\x07" +
		"\x05\x02\x02\u02E4\u02E6\x03\x02\x02\x02\u02E5\u02E0\x03\x02\x02\x02\u02E5" +
		"\u02E1\x03\x02\x02\x02\u02E6\u02E9\x03\x02\x02\x02\u02E7\u02E9\x05\x92" +
		"J\x02\u02E8\u02DC\x03\x02\x02\x02\u02E8\u02DF\x03\x02\x02\x02\u02E8\u02E7" +
		"\x03\x02\x02\x02\u02E9\x91\x03\x02\x02\x02\u02EA\u02EE\x05\x94K\x02\u02EB" +
		"\u02ED\t\x12\x02\x02\u02EC\u02EB\x03\x02\x02\x02\u02ED\u02F0\x03\x02\x02" +
		"\x02\u02EE\u02EC\x03\x02\x02\x02\u02EE\u02EF\x03\x02\x02\x02\u02EF\x93" +
		"\x03\x02\x02\x02\u02F0\u02EE\x03\x02\x02\x02\u02F1\u02FC\x05\x96L\x02" +
		"\u02F2\u02F3\x07\b\x02\x02\u02F3\u02F4\x05x=\x02\u02F4\u02F5\x07\t\x02" +
		"\x02\u02F5\u02FB\x03\x02\x02\x02\u02F6\u02F7\x07\x06\x02\x02\u02F7\u02F8" +
		"\x05x=\x02\u02F8\u02F9\x07\x07\x02\x02\u02F9\u02FB\x03\x02\x02\x02\u02FA" +
		"\u02F2\x03\x02\x02\x02\u02FA\u02F6\x03\x02\x02\x02\u02FB\u02FE\x03\x02" +
		"\x02\x02\u02FC\u02FA\x03\x02\x02\x02\u02FC\u02FD\x03\x02\x02\x02\u02FD" +
		"\u0300\x03\x02\x02\x02\u02FE\u02FC\x03\x02\x02\x02\u02FF\u0301\x05\x9E" +
		"P\x02\u0300\u02FF\x03\x02\x02\x02\u0300\u0301\x03\x02\x02\x02\u0301\x95" +
		"\x03\x02\x02\x02\u0302\u0303\x07\x04\x02\x02\u0303\u0308\x05x=\x02\u0304" +
		"\u0305\x07\n\x02\x02\u0305\u0307\x05x=\x02\u0306\u0304\x03\x02\x02\x02" +
		"\u0307\u030A\x03\x02\x02\x02\u0308\u0306\x03\x02\x02\x02\u0308\u0309\x03" +
		"\x02\x02\x02\u0309\u030B\x03\x02\x02\x02\u030A\u0308\x03\x02\x02\x02\u030B" +
		"\u030C\x07\x05\x02\x02\u030C\u030F\x03\x02\x02\x02\u030D\u030F\x05\x98" +
		"M\x02\u030E\u0302\x03\x02\x02\x02\u030E\u030D\x03\x02\x02\x02\u030F\x97" +
		"\x03\x02\x02\x02\u0310\u0313\x05\xA2R\x02\u0311\u0313\x05l7\x02\u0312" +
		"\u0310\x03\x02\x02\x02\u0312\u0311\x03\x02\x02\x02\u0313\x99\x03\x02\x02" +
		"\x02\u0314\u0319\x05\x9CO\x02\u0315\u0316\x07\n\x02\x02\u0316\u0318\x05" +
		"\x9CO\x02\u0317\u0315\x03\x02\x02\x02\u0318\u031B\x03\x02\x02\x02\u0319" +
		"\u0317\x03\x02\x02\x02\u0319\u031A\x03\x02\x02\x02\u031A\x9B\x03\x02\x02" +
		"\x02\u031B\u0319\x03\x02\x02\x02\u031C\u031D\x05x=\x02\u031D\x9D\x03\x02" +
		"\x02\x02\u031E\u0327\x07\x04\x02\x02\u031F\u0324\x05\xA0Q\x02\u0320\u0321" +
		"\x07\n\x02\x02\u0321\u0323\x05\xA0Q\x02\u0322\u0320\x03\x02\x02\x02\u0323" +
		"\u0326\x03\x02\x02\x02\u0324\u0322\x03\x02\x02\x02\u0324\u0325\x03\x02" +
		"\x02\x02\u0325\u0328\x03\x02\x02\x02\u0326\u0324\x03\x02\x02\x02\u0327" +
		"\u031F\x03\x02\x02\x02\u0327\u0328\x03\x02\x02\x02\u0328\u0329\x03\x02" +
		"\x02\x02\u0329\u032A\x07\x05\x02\x02\u032A\x9F\x03\x02\x02\x02\u032B\u0334" +
		"\x07a\x02\x02\u032C\u032D\x07\x03\x02\x02\u032D\u032E\x05\xA2R\x02\u032E" +
		"\u032F\x07\f\x02\x02\u032F\u0331\x03\x02\x02\x02\u0330\u032C\x03\x02\x02" +
		"\x02\u0330\u0331\x03\x02\x02\x02\u0331\u0332\x03\x02\x02\x02\u0332\u0334" +
		"\x05\x9CO\x02\u0333\u032B\x03\x02\x02\x02\u0333\u0330\x03\x02\x02\x02" +
		"\u0334\xA1\x03\x02\x02\x02\u0335\u0336\x07`\x02\x02\u0336\xA3\x03\x02" +
		"\x02\x02h\xA8\xAE\xB2\xBA\xC2\xC5\xC8\xCC\xCF\xD2\xDA\xDE\xE0\xE4\xE7" +
		"\xEE\xF2\xFD\u0103\u0105\u010C\u0110\u0119\u011F\u0121\u0124\u0127\u012D" +
		"\u0130\u013C\u013F\u0142\u0148\u0157\u0161\u0163\u0169\u016B\u016E\u0173" +
		"\u0180\u018A\u018D\u0193\u01A9\u01AD\u01B4\u01C0\u01C4\u01CE\u01DB\u01E3" +
		"\u01E9\u01EC\u01F0\u01F4\u01F7\u01FC\u01FF\u0203\u0209\u020F\u0211\u0214" +
		"\u0218\u0225\u0235\u023E\u0244\u024D\u0251\u0255\u025C\u0264\u026E\u027B" +
		"\u0284\u028B\u0293\u029B\u02A3\u02AB\u02B3\u02BB\u02C3\u02CB\u02D3\u02DC" +
		"\u02E5\u02E8\u02EE\u02FA\u02FC\u0300\u0308\u030E\u0312\u0319\u0324\u0327" +
		"\u0330\u0333";
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
	public processorLabel(): ProcessorLabelContext | undefined {
		return this.tryGetRuleContext(0, ProcessorLabelContext);
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(pawnParser.EOF, 0); }
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


export class ProcessorLabelContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(pawnParser.IDENTIFIER, 0); }
	public COLON(): TerminalNode { return this.getToken(pawnParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_processorLabel; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterProcessorLabel) {
			listener.enterProcessorLabel(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitProcessorLabel) {
			listener.exitProcessorLabel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitProcessorLabel) {
			return visitor.visitProcessorLabel(this);
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
	public varDeclaration(): VarDeclarationContext | undefined {
		return this.tryGetRuleContext(0, VarDeclarationContext);
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
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(pawnParser.STATIC, 0); }
	public tag(): TagContext | undefined {
		return this.tryGetRuleContext(0, TagContext);
	}
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
	public IDENTIFIER(): TerminalNode { return this.getToken(pawnParser.IDENTIFIER, 0); }
	public tag(): TagContext | undefined {
		return this.tryGetRuleContext(0, TagContext);
	}
	public SQUARE_OPEN_BRACKET(): TerminalNode | undefined { return this.tryGetToken(pawnParser.SQUARE_OPEN_BRACKET, 0); }
	public expresion(): ExpresionContext[];
	public expresion(i: number): ExpresionContext;
	public expresion(i?: number): ExpresionContext | ExpresionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpresionContext);
		} else {
			return this.getRuleContext(i, ExpresionContext);
		}
	}
	public SQUARE_CLOSE_BRACKET(): TerminalNode | undefined { return this.tryGetToken(pawnParser.SQUARE_CLOSE_BRACKET, 0); }
	public ASSIGMENT(): TerminalNode | undefined { return this.tryGetToken(pawnParser.ASSIGMENT, 0); }
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


export class VarDeclarationContext extends ParserRuleContext {
	public variableDeclaration(): VariableDeclarationContext[];
	public variableDeclaration(i: number): VariableDeclarationContext;
	public variableDeclaration(i?: number): VariableDeclarationContext | VariableDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDeclarationContext);
		} else {
			return this.getRuleContext(i, VariableDeclarationContext);
		}
	}
	public NEW(): TerminalNode | undefined { return this.tryGetToken(pawnParser.NEW, 0); }
	public COMA(): TerminalNode[];
	public COMA(i: number): TerminalNode;
	public COMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pawnParser.COMA);
		} else {
			return this.getToken(pawnParser.COMA, i);
		}
	}
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
	public get ruleIndex(): number { return pawnParser.RULE_varDeclaration; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterVarDeclaration) {
			listener.enterVarDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitVarDeclaration) {
			listener.exitVarDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitVarDeclaration) {
			return visitor.visitVarDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(pawnParser.IDENTIFIER, 0); }
	public tag(): TagContext | undefined {
		return this.tryGetRuleContext(0, TagContext);
	}
	public SQUARE_OPEN_BRACKET(): TerminalNode[];
	public SQUARE_OPEN_BRACKET(i: number): TerminalNode;
	public SQUARE_OPEN_BRACKET(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pawnParser.SQUARE_OPEN_BRACKET);
		} else {
			return this.getToken(pawnParser.SQUARE_OPEN_BRACKET, i);
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
	public SQUARE_CLOSE_BRACKET(): TerminalNode[];
	public SQUARE_CLOSE_BRACKET(i: number): TerminalNode;
	public SQUARE_CLOSE_BRACKET(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pawnParser.SQUARE_CLOSE_BRACKET);
		} else {
			return this.getToken(pawnParser.SQUARE_CLOSE_BRACKET, i);
		}
	}
	public ASSIGMENT(): TerminalNode | undefined { return this.tryGetToken(pawnParser.ASSIGMENT, 0); }
	public arrayInit(): ArrayInitContext | undefined {
		return this.tryGetRuleContext(0, ArrayInitContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_variableDeclaration; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterVariableDeclaration) {
			listener.enterVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitVariableDeclaration) {
			listener.exitVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitVariableDeclaration) {
			return visitor.visitVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDeclContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(pawnParser.IDENTIFIER, 0); }
	public functionDeclarationParams(): FunctionDeclarationParamsContext {
		return this.getRuleContext(0, FunctionDeclarationParamsContext);
	}
	public funcDeclModif(): FuncDeclModifContext | undefined {
		return this.tryGetRuleContext(0, FuncDeclModifContext);
	}
	public tag(): TagContext | undefined {
		return this.tryGetRuleContext(0, TagContext);
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
	public functionDeclarationParams(): FunctionDeclarationParamsContext {
		return this.getRuleContext(0, FunctionDeclarationParamsContext);
	}
	public funcDeclModif(): FuncDeclModifContext | undefined {
		return this.tryGetRuleContext(0, FuncDeclModifContext);
	}
	public tag(): TagContext | undefined {
		return this.tryGetRuleContext(0, TagContext);
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


export class FunctionDeclarationParamsContext extends ParserRuleContext {
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(pawnParser.OPEN_PARENTHESIS, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(pawnParser.CLOSE_PARENTHESIS, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(pawnParser.SEMI, 0); }
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	public nativeAssigment(): NativeAssigmentContext | undefined {
		return this.tryGetRuleContext(0, NativeAssigmentContext);
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
	public ellipse(): EllipseContext | undefined {
		return this.tryGetRuleContext(0, EllipseContext);
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
	public get ruleIndex(): number { return pawnParser.RULE_functionDeclarationParams; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterFunctionDeclarationParams) {
			listener.enterFunctionDeclarationParams(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitFunctionDeclarationParams) {
			listener.exitFunctionDeclarationParams(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitFunctionDeclarationParams) {
			return visitor.visitFunctionDeclarationParams(this);
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
	public IDENTIFIER(): TerminalNode { return this.getToken(pawnParser.IDENTIFIER, 0); }
	public COLON(): TerminalNode { return this.getToken(pawnParser.COLON, 0); }
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


export class PluralTagContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(pawnParser.COLON, 0); }
	public CURLY_OPEN_BRACKET(): TerminalNode | undefined { return this.tryGetToken(pawnParser.CURLY_OPEN_BRACKET, 0); }
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pawnParser.IDENTIFIER);
		} else {
			return this.getToken(pawnParser.IDENTIFIER, i);
		}
	}
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
	public get ruleIndex(): number { return pawnParser.RULE_pluralTag; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterPluralTag) {
			listener.enterPluralTag(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitPluralTag) {
			listener.exitPluralTag(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitPluralTag) {
			return visitor.visitPluralTag(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayIndexContext extends ParserRuleContext {
	public SQUARE_OPEN_BRACKET(): TerminalNode | undefined { return this.tryGetToken(pawnParser.SQUARE_OPEN_BRACKET, 0); }
	public SQUARE_CLOSE_BRACKET(): TerminalNode | undefined { return this.tryGetToken(pawnParser.SQUARE_CLOSE_BRACKET, 0); }
	public expresion(): ExpresionContext | undefined {
		return this.tryGetRuleContext(0, ExpresionContext);
	}
	public CHAR(): TerminalNode | undefined { return this.tryGetToken(pawnParser.CHAR, 0); }
	public CURLY_OPEN_BRACKET(): TerminalNode | undefined { return this.tryGetToken(pawnParser.CURLY_OPEN_BRACKET, 0); }
	public CURLY_CLOSE_BRACKET(): TerminalNode | undefined { return this.tryGetToken(pawnParser.CURLY_CLOSE_BRACKET, 0); }
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
	public processorLabel(): ProcessorLabelContext | undefined {
		return this.tryGetRuleContext(0, ProcessorLabelContext);
	}
	public compoundStatment(): CompoundStatmentContext | undefined {
		return this.tryGetRuleContext(0, CompoundStatmentContext);
	}
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	public cycles(): CyclesContext | undefined {
		return this.tryGetRuleContext(0, CyclesContext);
	}
	public switch(): SwitchContext | undefined {
		return this.tryGetRuleContext(0, SwitchContext);
	}
	public BACKSLAH(): TerminalNode | undefined { return this.tryGetToken(pawnParser.BACKSLAH, 0); }
	public varDeclaration(): VarDeclarationContext | undefined {
		return this.tryGetRuleContext(0, VarDeclarationContext);
	}
	public enum(): EnumContext | undefined {
		return this.tryGetRuleContext(0, EnumContext);
	}
	public goto(): GotoContext | undefined {
		return this.tryGetRuleContext(0, GotoContext);
	}
	public return(): ReturnContext | undefined {
		return this.tryGetRuleContext(0, ReturnContext);
	}
	public cycleKeywords(): CycleKeywordsContext | undefined {
		return this.tryGetRuleContext(0, CycleKeywordsContext);
	}
	public exit(): ExitContext | undefined {
		return this.tryGetRuleContext(0, ExitContext);
	}
	public assert(): AssertContext | undefined {
		return this.tryGetRuleContext(0, AssertContext);
	}
	public sleep(): SleepContext | undefined {
		return this.tryGetRuleContext(0, SleepContext);
	}
	public compoundExpression(): CompoundExpressionContext | undefined {
		return this.tryGetRuleContext(0, CompoundExpressionContext);
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


export class CompoundStatmentContext extends ParserRuleContext {
	public CURLY_OPEN_BRACKET(): TerminalNode { return this.getToken(pawnParser.CURLY_OPEN_BRACKET, 0); }
	public CURLY_CLOSE_BRACKET(): TerminalNode { return this.getToken(pawnParser.CURLY_CLOSE_BRACKET, 0); }
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
	public get ruleIndex(): number { return pawnParser.RULE_compoundStatment; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterCompoundStatment) {
			listener.enterCompoundStatment(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitCompoundStatment) {
			listener.exitCompoundStatment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitCompoundStatment) {
			return visitor.visitCompoundStatment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssertContext extends ParserRuleContext {
	public ASSERT(): TerminalNode { return this.getToken(pawnParser.ASSERT, 0); }
	public expresion(): ExpresionContext {
		return this.getRuleContext(0, ExpresionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_assert; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterAssert) {
			listener.enterAssert(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitAssert) {
			listener.exitAssert(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitAssert) {
			return visitor.visitAssert(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExitContext extends ParserRuleContext {
	public EXIT(): TerminalNode { return this.getToken(pawnParser.EXIT, 0); }
	public compoundExpression(): CompoundExpressionContext {
		return this.getRuleContext(0, CompoundExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_exit; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterExit) {
			listener.enterExit(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitExit) {
			listener.exitExit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitExit) {
			return visitor.visitExit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GotoContext extends ParserRuleContext {
	public GOTO(): TerminalNode { return this.getToken(pawnParser.GOTO, 0); }
	public symbol(): SymbolContext {
		return this.getRuleContext(0, SymbolContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_goto; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterGoto) {
			listener.enterGoto(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitGoto) {
			listener.exitGoto(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitGoto) {
			return visitor.visitGoto(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SleepContext extends ParserRuleContext {
	public SLEEP(): TerminalNode { return this.getToken(pawnParser.SLEEP, 0); }
	public compoundExpression(): CompoundExpressionContext {
		return this.getRuleContext(0, CompoundExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_sleep; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterSleep) {
			listener.enterSleep(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitSleep) {
			listener.exitSleep(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitSleep) {
			return visitor.visitSleep(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(pawnParser.IF, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public condition(): ConditionContext | undefined {
		return this.tryGetRuleContext(0, ConditionContext);
	}
	public expresion(): ExpresionContext | undefined {
		return this.tryGetRuleContext(0, ExpresionContext);
	}
	public THEN(): TerminalNode | undefined { return this.tryGetToken(pawnParser.THEN, 0); }
	public elseStatement(): ElseStatementContext | undefined {
		return this.tryGetRuleContext(0, ElseStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_ifStatement; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterIfStatement) {
			listener.enterIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitIfStatement) {
			listener.exitIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitIfStatement) {
			return visitor.visitIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElseStatementContext extends ParserRuleContext {
	public ELSE(): TerminalNode { return this.getToken(pawnParser.ELSE, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_elseStatement; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterElseStatement) {
			listener.enterElseStatement(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitElseStatement) {
			listener.exitElseStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitElseStatement) {
			return visitor.visitElseStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnContext extends ParserRuleContext {
	public RETURN(): TerminalNode { return this.getToken(pawnParser.RETURN, 0); }
	public compoundExpression(): CompoundExpressionContext | undefined {
		return this.tryGetRuleContext(0, CompoundExpressionContext);
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


export class ConditionContext extends ParserRuleContext {
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(pawnParser.OPEN_PARENTHESIS, 0); }
	public compoundExpression(): CompoundExpressionContext {
		return this.getRuleContext(0, CompoundExpressionContext);
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
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
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
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
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
	public expresion(): ExpresionContext[];
	public expresion(i: number): ExpresionContext;
	public expresion(i?: number): ExpresionContext | ExpresionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpresionContext);
		} else {
			return this.getRuleContext(i, ExpresionContext);
		}
	}
	public PERIOD(): TerminalNode | undefined { return this.tryGetToken(pawnParser.PERIOD, 0); }
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
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(pawnParser.MINUS, 0); }
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
	public ASSIGMENT_OR(): TerminalNode | undefined { return this.tryGetToken(pawnParser.ASSIGMENT_OR, 0); }
	public ASSIGMENT_XOR(): TerminalNode | undefined { return this.tryGetToken(pawnParser.ASSIGMENT_XOR, 0); }
	public ASSIGMENT_AND(): TerminalNode | undefined { return this.tryGetToken(pawnParser.ASSIGMENT_AND, 0); }
	public ASSIGMENT_PLUS(): TerminalNode | undefined { return this.tryGetToken(pawnParser.ASSIGMENT_PLUS, 0); }
	public ASSIGMENT_MINUS(): TerminalNode | undefined { return this.tryGetToken(pawnParser.ASSIGMENT_MINUS, 0); }
	public ASSIGMENT_MULT(): TerminalNode | undefined { return this.tryGetToken(pawnParser.ASSIGMENT_MULT, 0); }
	public ASSIGMENT_DIV(): TerminalNode | undefined { return this.tryGetToken(pawnParser.ASSIGMENT_DIV, 0); }
	public ASSIGMENT_REMAINDE(): TerminalNode | undefined { return this.tryGetToken(pawnParser.ASSIGMENT_REMAINDE, 0); }
	public ASSIGMENT_RIGHT_LOG(): TerminalNode | undefined { return this.tryGetToken(pawnParser.ASSIGMENT_RIGHT_LOG, 0); }
	public ASSIGMENT_RIGHT(): TerminalNode | undefined { return this.tryGetToken(pawnParser.ASSIGMENT_RIGHT, 0); }
	public ASSIGMENT_LEFT(): TerminalNode | undefined { return this.tryGetToken(pawnParser.ASSIGMENT_LEFT, 0); }
	public ASSIGMENT(): TerminalNode | undefined { return this.tryGetToken(pawnParser.ASSIGMENT, 0); }
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


export class DeclParamsContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(pawnParser.IDENTIFIER, 0); }
	public CONST(): TerminalNode | undefined { return this.tryGetToken(pawnParser.CONST, 0); }
	public reference(): ReferenceContext | undefined {
		return this.tryGetRuleContext(0, ReferenceContext);
	}
	public pluralTag(): PluralTagContext | undefined {
		return this.tryGetRuleContext(0, PluralTagContext);
	}
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
	public ASSIGMENT(): TerminalNode | undefined { return this.tryGetToken(pawnParser.ASSIGMENT, 0); }
	public expresion(): ExpresionContext | undefined {
		return this.tryGetRuleContext(0, ExpresionContext);
	}
	public arrayInit(): ArrayInitContext | undefined {
		return this.tryGetRuleContext(0, ArrayInitContext);
	}
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
	public PERIOD_FUNC(): TerminalNode { return this.getToken(pawnParser.PERIOD_FUNC, 0); }
	public COMA(): TerminalNode | undefined { return this.tryGetToken(pawnParser.COMA, 0); }
	public pluralTag(): PluralTagContext | undefined {
		return this.tryGetRuleContext(0, PluralTagContext);
	}
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
	public rational(): RationalContext | undefined {
		return this.tryGetRuleContext(0, RationalContext);
	}
	public binary(): BinaryContext | undefined {
		return this.tryGetRuleContext(0, BinaryContext);
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


export class FloatContext extends ParserRuleContext {
	public FLOAT(): TerminalNode { return this.getToken(pawnParser.FLOAT, 0); }
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


export class IntegerContext extends ParserRuleContext {
	public INTEGER(): TerminalNode { return this.getToken(pawnParser.INTEGER, 0); }
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


export class RationalContext extends ParserRuleContext {
	public RATIONAL(): TerminalNode { return this.getToken(pawnParser.RATIONAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_rational; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterRational) {
			listener.enterRational(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitRational) {
			listener.exitRational(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitRational) {
			return visitor.visitRational(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BinaryContext extends ParserRuleContext {
	public BINARY(): TerminalNode { return this.getToken(pawnParser.BINARY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_binary; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterBinary) {
			listener.enterBinary(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitBinary) {
			listener.exitBinary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitBinary) {
			return visitor.visitBinary(this);
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
	public BIT_COMPLEMEN(): TerminalNode | undefined { return this.tryGetToken(pawnParser.BIT_COMPLEMEN, 0); }
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


export class CyclesContext extends ParserRuleContext {
	public while(): WhileContext | undefined {
		return this.tryGetRuleContext(0, WhileContext);
	}
	public do(): DoContext | undefined {
		return this.tryGetRuleContext(0, DoContext);
	}
	public for(): ForContext | undefined {
		return this.tryGetRuleContext(0, ForContext);
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
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
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
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
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
	public _first!: ForFirstExpContext;
	public _second!: ExpresionContext;
	public _third!: CompoundExpressionContext;
	public FOR(): TerminalNode { return this.getToken(pawnParser.FOR, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(pawnParser.OPEN_PARENTHESIS, 0); }
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pawnParser.SEMI);
		} else {
			return this.getToken(pawnParser.SEMI, i);
		}
	}
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(pawnParser.CLOSE_PARENTHESIS, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public forFirstExp(): ForFirstExpContext | undefined {
		return this.tryGetRuleContext(0, ForFirstExpContext);
	}
	public expresion(): ExpresionContext | undefined {
		return this.tryGetRuleContext(0, ExpresionContext);
	}
	public compoundExpression(): CompoundExpressionContext | undefined {
		return this.tryGetRuleContext(0, CompoundExpressionContext);
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


export class ForFirstExpContext extends ParserRuleContext {
	public varDeclaration(): VarDeclarationContext | undefined {
		return this.tryGetRuleContext(0, VarDeclarationContext);
	}
	public compoundExpression(): CompoundExpressionContext | undefined {
		return this.tryGetRuleContext(0, CompoundExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_forFirstExp; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterForFirstExp) {
			listener.enterForFirstExp(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitForFirstExp) {
			listener.exitForFirstExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitForFirstExp) {
			return visitor.visitForFirstExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CycleKeywordsContext extends ParserRuleContext {
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
	public predefinedConstants(): PredefinedConstantsContext | undefined {
		return this.tryGetRuleContext(0, PredefinedConstantsContext);
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


export class PredefinedConstantsContext extends ParserRuleContext {
	public CELLBITS(): TerminalNode | undefined { return this.tryGetToken(pawnParser.CELLBITS, 0); }
	public CELLMAX(): TerminalNode | undefined { return this.tryGetToken(pawnParser.CELLMAX, 0); }
	public CELLMIN(): TerminalNode | undefined { return this.tryGetToken(pawnParser.CELLMIN, 0); }
	public CHARBITS(): TerminalNode | undefined { return this.tryGetToken(pawnParser.CHARBITS, 0); }
	public CHARMAX(): TerminalNode | undefined { return this.tryGetToken(pawnParser.CHARMAX, 0); }
	public CHARMIN(): TerminalNode | undefined { return this.tryGetToken(pawnParser.CHARMIN, 0); }
	public DEBUG(): TerminalNode | undefined { return this.tryGetToken(pawnParser.DEBUG, 0); }
	public LINE(): TerminalNode | undefined { return this.tryGetToken(pawnParser.LINE, 0); }
	public PAWN(): TerminalNode | undefined { return this.tryGetToken(pawnParser.PAWN, 0); }
	public UCHARMAX(): TerminalNode | undefined { return this.tryGetToken(pawnParser.UCHARMAX, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_predefinedConstants; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterPredefinedConstants) {
			listener.enterPredefinedConstants(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitPredefinedConstants) {
			listener.exitPredefinedConstants(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitPredefinedConstants) {
			return visitor.visitPredefinedConstants(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	public STRING(): TerminalNode | undefined { return this.tryGetToken(pawnParser.STRING, 0); }
	public CHAR_STRING(): TerminalNode | undefined { return this.tryGetToken(pawnParser.CHAR_STRING, 0); }
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


export class DocsContext extends ParserRuleContext {
	public docBlock(): DocBlockContext {
		return this.getRuleContext(0, DocBlockContext);
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


export class AssigmentExpressionContext extends ParserRuleContext {
	public ternaryExpression(): TernaryExpressionContext[];
	public ternaryExpression(i: number): TernaryExpressionContext;
	public ternaryExpression(i?: number): TernaryExpressionContext | TernaryExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TernaryExpressionContext);
		} else {
			return this.getRuleContext(i, TernaryExpressionContext);
		}
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_assigmentExpression; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterAssigmentExpression) {
			listener.enterAssigmentExpression(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitAssigmentExpression) {
			listener.exitAssigmentExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitAssigmentExpression) {
			return visitor.visitAssigmentExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TernaryExpressionContext extends ParserRuleContext {
	public logicalOrExpression(): LogicalOrExpressionContext {
		return this.getRuleContext(0, LogicalOrExpressionContext);
	}
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(pawnParser.QUESTION, 0); }
	public ternaryExpression(): TernaryExpressionContext[];
	public ternaryExpression(i: number): TernaryExpressionContext;
	public ternaryExpression(i?: number): TernaryExpressionContext | TernaryExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TernaryExpressionContext);
		} else {
			return this.getRuleContext(i, TernaryExpressionContext);
		}
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(pawnParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_ternaryExpression; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterTernaryExpression) {
			listener.enterTernaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitTernaryExpression) {
			listener.exitTernaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitTernaryExpression) {
			return visitor.visitTernaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogicalOrExpressionContext extends ParserRuleContext {
	public _op!: Token;
	public logicalAndExpression(): LogicalAndExpressionContext[];
	public logicalAndExpression(i: number): LogicalAndExpressionContext;
	public logicalAndExpression(i?: number): LogicalAndExpressionContext | LogicalAndExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LogicalAndExpressionContext);
		} else {
			return this.getRuleContext(i, LogicalAndExpressionContext);
		}
	}
	public OR(): TerminalNode[];
	public OR(i: number): TerminalNode;
	public OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pawnParser.OR);
		} else {
			return this.getToken(pawnParser.OR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_logicalOrExpression; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterLogicalOrExpression) {
			listener.enterLogicalOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitLogicalOrExpression) {
			listener.exitLogicalOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitLogicalOrExpression) {
			return visitor.visitLogicalOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogicalAndExpressionContext extends ParserRuleContext {
	public _op!: Token;
	public equalOrNotExpression(): EqualOrNotExpressionContext[];
	public equalOrNotExpression(i: number): EqualOrNotExpressionContext;
	public equalOrNotExpression(i?: number): EqualOrNotExpressionContext | EqualOrNotExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EqualOrNotExpressionContext);
		} else {
			return this.getRuleContext(i, EqualOrNotExpressionContext);
		}
	}
	public AND(): TerminalNode[];
	public AND(i: number): TerminalNode;
	public AND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pawnParser.AND);
		} else {
			return this.getToken(pawnParser.AND, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_logicalAndExpression; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterLogicalAndExpression) {
			listener.enterLogicalAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitLogicalAndExpression) {
			listener.exitLogicalAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitLogicalAndExpression) {
			return visitor.visitLogicalAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EqualOrNotExpressionContext extends ParserRuleContext {
	public _op!: Token;
	public compareExpression(): CompareExpressionContext[];
	public compareExpression(i: number): CompareExpressionContext;
	public compareExpression(i?: number): CompareExpressionContext | CompareExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CompareExpressionContext);
		} else {
			return this.getRuleContext(i, CompareExpressionContext);
		}
	}
	public EQUAL(): TerminalNode[];
	public EQUAL(i: number): TerminalNode;
	public EQUAL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pawnParser.EQUAL);
		} else {
			return this.getToken(pawnParser.EQUAL, i);
		}
	}
	public NOTEQUAL(): TerminalNode[];
	public NOTEQUAL(i: number): TerminalNode;
	public NOTEQUAL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pawnParser.NOTEQUAL);
		} else {
			return this.getToken(pawnParser.NOTEQUAL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_equalOrNotExpression; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterEqualOrNotExpression) {
			listener.enterEqualOrNotExpression(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitEqualOrNotExpression) {
			listener.exitEqualOrNotExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitEqualOrNotExpression) {
			return visitor.visitEqualOrNotExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompareExpressionContext extends ParserRuleContext {
	public _op!: Token;
	public bitOrExpression(): BitOrExpressionContext[];
	public bitOrExpression(i: number): BitOrExpressionContext;
	public bitOrExpression(i?: number): BitOrExpressionContext | BitOrExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BitOrExpressionContext);
		} else {
			return this.getRuleContext(i, BitOrExpressionContext);
		}
	}
	public LESSEQ(): TerminalNode[];
	public LESSEQ(i: number): TerminalNode;
	public LESSEQ(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pawnParser.LESSEQ);
		} else {
			return this.getToken(pawnParser.LESSEQ, i);
		}
	}
	public LARGEREQ(): TerminalNode[];
	public LARGEREQ(i: number): TerminalNode;
	public LARGEREQ(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pawnParser.LARGEREQ);
		} else {
			return this.getToken(pawnParser.LARGEREQ, i);
		}
	}
	public LESS(): TerminalNode[];
	public LESS(i: number): TerminalNode;
	public LESS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pawnParser.LESS);
		} else {
			return this.getToken(pawnParser.LESS, i);
		}
	}
	public LARGER(): TerminalNode[];
	public LARGER(i: number): TerminalNode;
	public LARGER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pawnParser.LARGER);
		} else {
			return this.getToken(pawnParser.LARGER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_compareExpression; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterCompareExpression) {
			listener.enterCompareExpression(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitCompareExpression) {
			listener.exitCompareExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitCompareExpression) {
			return visitor.visitCompareExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BitOrExpressionContext extends ParserRuleContext {
	public _op!: Token;
	public xorExpression(): XorExpressionContext[];
	public xorExpression(i: number): XorExpressionContext;
	public xorExpression(i?: number): XorExpressionContext | XorExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(XorExpressionContext);
		} else {
			return this.getRuleContext(i, XorExpressionContext);
		}
	}
	public BIT_OR(): TerminalNode[];
	public BIT_OR(i: number): TerminalNode;
	public BIT_OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pawnParser.BIT_OR);
		} else {
			return this.getToken(pawnParser.BIT_OR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_bitOrExpression; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterBitOrExpression) {
			listener.enterBitOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitBitOrExpression) {
			listener.exitBitOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitBitOrExpression) {
			return visitor.visitBitOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class XorExpressionContext extends ParserRuleContext {
	public _op!: Token;
	public bitAndExpression(): BitAndExpressionContext[];
	public bitAndExpression(i: number): BitAndExpressionContext;
	public bitAndExpression(i?: number): BitAndExpressionContext | BitAndExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BitAndExpressionContext);
		} else {
			return this.getRuleContext(i, BitAndExpressionContext);
		}
	}
	public BIT_XOR(): TerminalNode[];
	public BIT_XOR(i: number): TerminalNode;
	public BIT_XOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pawnParser.BIT_XOR);
		} else {
			return this.getToken(pawnParser.BIT_XOR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_xorExpression; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterXorExpression) {
			listener.enterXorExpression(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitXorExpression) {
			listener.exitXorExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitXorExpression) {
			return visitor.visitXorExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BitAndExpressionContext extends ParserRuleContext {
	public _op!: Token;
	public bitShiftExpression(): BitShiftExpressionContext[];
	public bitShiftExpression(i: number): BitShiftExpressionContext;
	public bitShiftExpression(i?: number): BitShiftExpressionContext | BitShiftExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BitShiftExpressionContext);
		} else {
			return this.getRuleContext(i, BitShiftExpressionContext);
		}
	}
	public BIT_AND(): TerminalNode[];
	public BIT_AND(i: number): TerminalNode;
	public BIT_AND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pawnParser.BIT_AND);
		} else {
			return this.getToken(pawnParser.BIT_AND, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_bitAndExpression; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterBitAndExpression) {
			listener.enterBitAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitBitAndExpression) {
			listener.exitBitAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitBitAndExpression) {
			return visitor.visitBitAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BitShiftExpressionContext extends ParserRuleContext {
	public _op!: Token;
	public additiveExpression(): AdditiveExpressionContext[];
	public additiveExpression(i: number): AdditiveExpressionContext;
	public additiveExpression(i?: number): AdditiveExpressionContext | AdditiveExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AdditiveExpressionContext);
		} else {
			return this.getRuleContext(i, AdditiveExpressionContext);
		}
	}
	public BIT_LEFT(): TerminalNode[];
	public BIT_LEFT(i: number): TerminalNode;
	public BIT_LEFT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pawnParser.BIT_LEFT);
		} else {
			return this.getToken(pawnParser.BIT_LEFT, i);
		}
	}
	public BIT_RIGHT(): TerminalNode[];
	public BIT_RIGHT(i: number): TerminalNode;
	public BIT_RIGHT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pawnParser.BIT_RIGHT);
		} else {
			return this.getToken(pawnParser.BIT_RIGHT, i);
		}
	}
	public BIT_RIGHT_LOG(): TerminalNode[];
	public BIT_RIGHT_LOG(i: number): TerminalNode;
	public BIT_RIGHT_LOG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pawnParser.BIT_RIGHT_LOG);
		} else {
			return this.getToken(pawnParser.BIT_RIGHT_LOG, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_bitShiftExpression; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterBitShiftExpression) {
			listener.enterBitShiftExpression(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitBitShiftExpression) {
			listener.exitBitShiftExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitBitShiftExpression) {
			return visitor.visitBitShiftExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AdditiveExpressionContext extends ParserRuleContext {
	public _op!: Token;
	public multiplicativeExpression(): MultiplicativeExpressionContext[];
	public multiplicativeExpression(i: number): MultiplicativeExpressionContext;
	public multiplicativeExpression(i?: number): MultiplicativeExpressionContext | MultiplicativeExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultiplicativeExpressionContext);
		} else {
			return this.getRuleContext(i, MultiplicativeExpressionContext);
		}
	}
	public PLUS(): TerminalNode[];
	public PLUS(i: number): TerminalNode;
	public PLUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pawnParser.PLUS);
		} else {
			return this.getToken(pawnParser.PLUS, i);
		}
	}
	public MINUS(): TerminalNode[];
	public MINUS(i: number): TerminalNode;
	public MINUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pawnParser.MINUS);
		} else {
			return this.getToken(pawnParser.MINUS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_additiveExpression; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterAdditiveExpression) {
			listener.enterAdditiveExpression(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitAdditiveExpression) {
			listener.exitAdditiveExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitAdditiveExpression) {
			return visitor.visitAdditiveExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiplicativeExpressionContext extends ParserRuleContext {
	public _op!: Token;
	public prefixExpression(): PrefixExpressionContext[];
	public prefixExpression(i: number): PrefixExpressionContext;
	public prefixExpression(i?: number): PrefixExpressionContext | PrefixExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PrefixExpressionContext);
		} else {
			return this.getRuleContext(i, PrefixExpressionContext);
		}
	}
	public MULTY(): TerminalNode[];
	public MULTY(i: number): TerminalNode;
	public MULTY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pawnParser.MULTY);
		} else {
			return this.getToken(pawnParser.MULTY, i);
		}
	}
	public DIV(): TerminalNode[];
	public DIV(i: number): TerminalNode;
	public DIV(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pawnParser.DIV);
		} else {
			return this.getToken(pawnParser.DIV, i);
		}
	}
	public REMAINDE(): TerminalNode[];
	public REMAINDE(i: number): TerminalNode;
	public REMAINDE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pawnParser.REMAINDE);
		} else {
			return this.getToken(pawnParser.REMAINDE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_multiplicativeExpression; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterMultiplicativeExpression) {
			listener.enterMultiplicativeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitMultiplicativeExpression) {
			listener.exitMultiplicativeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitMultiplicativeExpression) {
			return visitor.visitMultiplicativeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrefixExpressionContext extends ParserRuleContext {
	public prefixExpression(): PrefixExpressionContext | undefined {
		return this.tryGetRuleContext(0, PrefixExpressionContext);
	}
	public INCREMENTS(): TerminalNode | undefined { return this.tryGetToken(pawnParser.INCREMENTS, 0); }
	public DECREMENTS(): TerminalNode | undefined { return this.tryGetToken(pawnParser.DECREMENTS, 0); }
	public BIT_COMPLEMEN(): TerminalNode | undefined { return this.tryGetToken(pawnParser.BIT_COMPLEMEN, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(pawnParser.NOT, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(pawnParser.MINUS, 0); }
	public tag(): TagContext | undefined {
		return this.tryGetRuleContext(0, TagContext);
	}
	public DEFINED(): TerminalNode | undefined { return this.tryGetToken(pawnParser.DEFINED, 0); }
	public SIZEOF(): TerminalNode | undefined { return this.tryGetToken(pawnParser.SIZEOF, 0); }
	public TAGOF(): TerminalNode | undefined { return this.tryGetToken(pawnParser.TAGOF, 0); }
	public STATE(): TerminalNode | undefined { return this.tryGetToken(pawnParser.STATE, 0); }
	public literalOrSymbol(): LiteralOrSymbolContext | undefined {
		return this.tryGetRuleContext(0, LiteralOrSymbolContext);
	}
	public OPEN_PARENTHESIS(): TerminalNode | undefined { return this.tryGetToken(pawnParser.OPEN_PARENTHESIS, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode | undefined { return this.tryGetToken(pawnParser.CLOSE_PARENTHESIS, 0); }
	public postfixExpression(): PostfixExpressionContext | undefined {
		return this.tryGetRuleContext(0, PostfixExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_prefixExpression; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterPrefixExpression) {
			listener.enterPrefixExpression(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitPrefixExpression) {
			listener.exitPrefixExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitPrefixExpression) {
			return visitor.visitPrefixExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PostfixExpressionContext extends ParserRuleContext {
	public functionOrArrayExpression(): FunctionOrArrayExpressionContext {
		return this.getRuleContext(0, FunctionOrArrayExpressionContext);
	}
	public INCREMENTS(): TerminalNode[];
	public INCREMENTS(i: number): TerminalNode;
	public INCREMENTS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pawnParser.INCREMENTS);
		} else {
			return this.getToken(pawnParser.INCREMENTS, i);
		}
	}
	public DECREMENTS(): TerminalNode[];
	public DECREMENTS(i: number): TerminalNode;
	public DECREMENTS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pawnParser.DECREMENTS);
		} else {
			return this.getToken(pawnParser.DECREMENTS, i);
		}
	}
	public CHAR(): TerminalNode[];
	public CHAR(i: number): TerminalNode;
	public CHAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pawnParser.CHAR);
		} else {
			return this.getToken(pawnParser.CHAR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_postfixExpression; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterPostfixExpression) {
			listener.enterPostfixExpression(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitPostfixExpression) {
			listener.exitPostfixExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitPostfixExpression) {
			return visitor.visitPostfixExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionOrArrayExpressionContext extends ParserRuleContext {
	public primaryExpression(): PrimaryExpressionContext {
		return this.getRuleContext(0, PrimaryExpressionContext);
	}
	public SQUARE_OPEN_BRACKET(): TerminalNode[];
	public SQUARE_OPEN_BRACKET(i: number): TerminalNode;
	public SQUARE_OPEN_BRACKET(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pawnParser.SQUARE_OPEN_BRACKET);
		} else {
			return this.getToken(pawnParser.SQUARE_OPEN_BRACKET, i);
		}
	}
	public assigmentExpression(): AssigmentExpressionContext[];
	public assigmentExpression(i: number): AssigmentExpressionContext;
	public assigmentExpression(i?: number): AssigmentExpressionContext | AssigmentExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssigmentExpressionContext);
		} else {
			return this.getRuleContext(i, AssigmentExpressionContext);
		}
	}
	public SQUARE_CLOSE_BRACKET(): TerminalNode[];
	public SQUARE_CLOSE_BRACKET(i: number): TerminalNode;
	public SQUARE_CLOSE_BRACKET(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pawnParser.SQUARE_CLOSE_BRACKET);
		} else {
			return this.getToken(pawnParser.SQUARE_CLOSE_BRACKET, i);
		}
	}
	public CURLY_OPEN_BRACKET(): TerminalNode[];
	public CURLY_OPEN_BRACKET(i: number): TerminalNode;
	public CURLY_OPEN_BRACKET(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pawnParser.CURLY_OPEN_BRACKET);
		} else {
			return this.getToken(pawnParser.CURLY_OPEN_BRACKET, i);
		}
	}
	public CURLY_CLOSE_BRACKET(): TerminalNode[];
	public CURLY_CLOSE_BRACKET(i: number): TerminalNode;
	public CURLY_CLOSE_BRACKET(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pawnParser.CURLY_CLOSE_BRACKET);
		} else {
			return this.getToken(pawnParser.CURLY_CLOSE_BRACKET, i);
		}
	}
	public functionCallOperator(): FunctionCallOperatorContext | undefined {
		return this.tryGetRuleContext(0, FunctionCallOperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_functionOrArrayExpression; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterFunctionOrArrayExpression) {
			listener.enterFunctionOrArrayExpression(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitFunctionOrArrayExpression) {
			listener.exitFunctionOrArrayExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitFunctionOrArrayExpression) {
			return visitor.visitFunctionOrArrayExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryExpressionContext extends ParserRuleContext {
	public OPEN_PARENTHESIS(): TerminalNode | undefined { return this.tryGetToken(pawnParser.OPEN_PARENTHESIS, 0); }
	public assigmentExpression(): AssigmentExpressionContext[];
	public assigmentExpression(i: number): AssigmentExpressionContext;
	public assigmentExpression(i?: number): AssigmentExpressionContext | AssigmentExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssigmentExpressionContext);
		} else {
			return this.getRuleContext(i, AssigmentExpressionContext);
		}
	}
	public CLOSE_PARENTHESIS(): TerminalNode | undefined { return this.tryGetToken(pawnParser.CLOSE_PARENTHESIS, 0); }
	public COMA(): TerminalNode[];
	public COMA(i: number): TerminalNode;
	public COMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pawnParser.COMA);
		} else {
			return this.getToken(pawnParser.COMA, i);
		}
	}
	public literalOrSymbol(): LiteralOrSymbolContext | undefined {
		return this.tryGetRuleContext(0, LiteralOrSymbolContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_primaryExpression; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterPrimaryExpression) {
			listener.enterPrimaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitPrimaryExpression) {
			listener.exitPrimaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitPrimaryExpression) {
			return visitor.visitPrimaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralOrSymbolContext extends ParserRuleContext {
	public symbol(): SymbolContext | undefined {
		return this.tryGetRuleContext(0, SymbolContext);
	}
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_literalOrSymbol; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterLiteralOrSymbol) {
			listener.enterLiteralOrSymbol(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitLiteralOrSymbol) {
			listener.exitLiteralOrSymbol(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitLiteralOrSymbol) {
			return visitor.visitLiteralOrSymbol(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompoundExpressionContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return pawnParser.RULE_compoundExpression; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterCompoundExpression) {
			listener.enterCompoundExpression(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitCompoundExpression) {
			listener.exitCompoundExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitCompoundExpression) {
			return visitor.visitCompoundExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpresionContext extends ParserRuleContext {
	public assigmentExpression(): AssigmentExpressionContext {
		return this.getRuleContext(0, AssigmentExpressionContext);
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


export class FunctionCallOperatorContext extends ParserRuleContext {
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(pawnParser.OPEN_PARENTHESIS, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(pawnParser.CLOSE_PARENTHESIS, 0); }
	public functionArgument(): FunctionArgumentContext[];
	public functionArgument(i: number): FunctionArgumentContext;
	public functionArgument(i?: number): FunctionArgumentContext | FunctionArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionArgumentContext);
		} else {
			return this.getRuleContext(i, FunctionArgumentContext);
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
	public get ruleIndex(): number { return pawnParser.RULE_functionCallOperator; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterFunctionCallOperator) {
			listener.enterFunctionCallOperator(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitFunctionCallOperator) {
			listener.exitFunctionCallOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitFunctionCallOperator) {
			return visitor.visitFunctionCallOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionArgumentContext extends ParserRuleContext {
	public SKIP_PARAM(): TerminalNode | undefined { return this.tryGetToken(pawnParser.SKIP_PARAM, 0); }
	public expresion(): ExpresionContext | undefined {
		return this.tryGetRuleContext(0, ExpresionContext);
	}
	public symbol(): SymbolContext | undefined {
		return this.tryGetRuleContext(0, SymbolContext);
	}
	public ASSIGMENT(): TerminalNode | undefined { return this.tryGetToken(pawnParser.ASSIGMENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_functionArgument; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterFunctionArgument) {
			listener.enterFunctionArgument(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitFunctionArgument) {
			listener.exitFunctionArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitFunctionArgument) {
			return visitor.visitFunctionArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SymbolContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(pawnParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_symbol; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterSymbol) {
			listener.enterSymbol(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitSymbol) {
			listener.exitSymbol(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitSymbol) {
			return visitor.visitSymbol(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


