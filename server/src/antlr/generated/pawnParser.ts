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
	public static readonly DEFINE = 79;
	public static readonly ELSEIF = 80;
	public static readonly EMIT = 81;
	public static readonly ENDIF = 82;
	public static readonly ENDINPUT = 83;
	public static readonly ENDSCRIPT = 84;
	public static readonly FILE = 85;
	public static readonly INCLUDE = 86;
	public static readonly PRAGMA = 87;
	public static readonly SECTION = 88;
	public static readonly TRYINCLUDE = 89;
	public static readonly UNDEF = 90;
	public static readonly DYNAMIC = 91;
	public static readonly WARNING = 92;
	public static readonly TRUE = 93;
	public static readonly FALSE = 94;
	public static readonly CELLBITS = 95;
	public static readonly CELLMAX = 96;
	public static readonly CELLMIN = 97;
	public static readonly CHARBITS = 98;
	public static readonly CHARMAX = 99;
	public static readonly CHARMIN = 100;
	public static readonly DEBUG = 101;
	public static readonly LINE = 102;
	public static readonly PAWN = 103;
	public static readonly UCHARMAX = 104;
	public static readonly SHARPSTRING = 105;
	public static readonly STRING = 106;
	public static readonly CHAR_STRING = 107;
	public static readonly IDENTIFIER = 108;
	public static readonly SKIP_PARAM = 109;
	public static readonly BINARY = 110;
	public static readonly HEX = 111;
	public static readonly INTEGER = 112;
	public static readonly FLOAT = 113;
	public static readonly RATIONAL = 114;
	public static readonly BACKSLAH = 115;
	public static readonly Whitespace = 116;
	public static readonly Newline = 117;
	public static readonly DocBlock = 118;
	public static readonly BlockComment = 119;
	public static readonly LineComment = 120;
	public static readonly RULE_file = 0;
	public static readonly RULE_processorLabel = 1;
	public static readonly RULE_declaration = 2;
	public static readonly RULE_enum = 3;
	public static readonly RULE_enumMember = 4;
	public static readonly RULE_enumIterator = 5;
	public static readonly RULE_varDeclaration = 6;
	public static readonly RULE_varInit = 7;
	public static readonly RULE_functionDecl = 8;
	public static readonly RULE_operatorOverload = 9;
	public static readonly RULE_functionDeclarationParams = 10;
	public static readonly RULE_nativeAssigment = 11;
	public static readonly RULE_tag = 12;
	public static readonly RULE_pluralTag = 13;
	public static readonly RULE_variable = 14;
	public static readonly RULE_arrayIndex = 15;
	public static readonly RULE_funcDeclModif = 16;
	public static readonly RULE_funcModif = 17;
	public static readonly RULE_statement = 18;
	public static readonly RULE_compoundStatment = 19;
	public static readonly RULE_assert = 20;
	public static readonly RULE_exit = 21;
	public static readonly RULE_goto = 22;
	public static readonly RULE_sleep = 23;
	public static readonly RULE_ifStatement = 24;
	public static readonly RULE_elseStatement = 25;
	public static readonly RULE_return = 26;
	public static readonly RULE_condition = 27;
	public static readonly RULE_switch = 28;
	public static readonly RULE_case = 29;
	public static readonly RULE_default = 30;
	public static readonly RULE_case_list = 31;
	public static readonly RULE_range = 32;
	public static readonly RULE_arrayInit = 33;
	public static readonly RULE_arrayInitMember = 34;
	public static readonly RULE_assigments = 35;
	public static readonly RULE_declParams = 36;
	public static readonly RULE_ellipse = 37;
	public static readonly RULE_reference = 38;
	public static readonly RULE_varModifires = 39;
	public static readonly RULE_number = 40;
	public static readonly RULE_float = 41;
	public static readonly RULE_integer = 42;
	public static readonly RULE_hex = 43;
	public static readonly RULE_rational = 44;
	public static readonly RULE_binary = 45;
	public static readonly RULE_canBeOverloaded = 46;
	public static readonly RULE_arefmeticOperator = 47;
	public static readonly RULE_compareOperator = 48;
	public static readonly RULE_cycles = 49;
	public static readonly RULE_do = 50;
	public static readonly RULE_while = 51;
	public static readonly RULE_for = 52;
	public static readonly RULE_forFirstExp = 53;
	public static readonly RULE_cycleKeywords = 54;
	public static readonly RULE_literal = 55;
	public static readonly RULE_bool_const = 56;
	public static readonly RULE_predefinedConstants = 57;
	public static readonly RULE_string = 58;
	public static readonly RULE_docs = 59;
	public static readonly RULE_docBlock = 60;
	public static readonly RULE_assigmentExpression = 61;
	public static readonly RULE_ternaryExpression = 62;
	public static readonly RULE_logicalOrExpression = 63;
	public static readonly RULE_logicalAndExpression = 64;
	public static readonly RULE_equalOrNotExpression = 65;
	public static readonly RULE_compareExpression = 66;
	public static readonly RULE_bitOrExpression = 67;
	public static readonly RULE_xorExpression = 68;
	public static readonly RULE_bitAndExpression = 69;
	public static readonly RULE_bitShiftExpression = 70;
	public static readonly RULE_additiveExpression = 71;
	public static readonly RULE_multiplicativeExpression = 72;
	public static readonly RULE_prefixExpression = 73;
	public static readonly RULE_postfixExpression = 74;
	public static readonly RULE_functionOrArrayExpression = 75;
	public static readonly RULE_primaryExpression = 76;
	public static readonly RULE_literalOrSymbol = 77;
	public static readonly RULE_expresion = 78;
	public static readonly RULE_functionCallOperator = 79;
	public static readonly RULE_functionArgument = 80;
	public static readonly RULE_symbol = 81;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"file", "processorLabel", "declaration", "enum", "enumMember", "enumIterator", 
		"varDeclaration", "varInit", "functionDecl", "operatorOverload", "functionDeclarationParams", 
		"nativeAssigment", "tag", "pluralTag", "variable", "arrayIndex", "funcDeclModif", 
		"funcModif", "statement", "compoundStatment", "assert", "exit", "goto", 
		"sleep", "ifStatement", "elseStatement", "return", "condition", "switch", 
		"case", "default", "case_list", "range", "arrayInit", "arrayInitMember", 
		"assigments", "declParams", "ellipse", "reference", "varModifires", "number", 
		"float", "integer", "hex", "rational", "binary", "canBeOverloaded", "arefmeticOperator", 
		"compareOperator", "cycles", "do", "while", "for", "forFirstExp", "cycleKeywords", 
		"literal", "bool_const", "predefinedConstants", "string", "docs", "docBlock", 
		"assigmentExpression", "ternaryExpression", "logicalOrExpression", "logicalAndExpression", 
		"equalOrNotExpression", "compareExpression", "bitOrExpression", "xorExpression", 
		"bitAndExpression", "bitShiftExpression", "additiveExpression", "multiplicativeExpression", 
		"prefixExpression", "postfixExpression", "functionOrArrayExpression", 
		"primaryExpression", "literalOrSymbol", "expresion", "functionCallOperator", 
		"functionArgument", "symbol",
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
		"'defined'", "'sizeof'", "'tagof'", "'define'", "'elseif'", "'emit'", 
		"'endif'", "'endinput'", "'endscript'", "'file'", "'include'", "'pragma'", 
		"'section'", "'tryinclude'", "'undef'", "'dynamic'", "'warning'", "'true'", 
		"'false'", "'cellbits'", "'cellmax'", "'cellmin'", "'charbits'", "'charmax'", 
		"'charmin'", "'debug'", "'__line'", "'__Pawn'", "'ucharmax'", undefined, 
		undefined, undefined, undefined, "'_'", undefined, undefined, undefined, 
		undefined, undefined, "'\\'",
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
		"CHAR", "DEFINED", "SIZEOF", "TAGOF", "DEFINE", "ELSEIF", "EMIT", "ENDIF", 
		"ENDINPUT", "ENDSCRIPT", "FILE", "INCLUDE", "PRAGMA", "SECTION", "TRYINCLUDE", 
		"UNDEF", "DYNAMIC", "WARNING", "TRUE", "FALSE", "CELLBITS", "CELLMAX", 
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
			this.state = 178;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 164;
				this.processorLabel();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 168;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 165;
						this.docs();
						}
						}
					}
					this.state = 170;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
				}
				this.state = 174;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (pawnParser.NEW - 55)) | (1 << (pawnParser.ENUM - 55)) | (1 << (pawnParser.CONST - 55)) | (1 << (pawnParser.STATIC - 55)) | (1 << (pawnParser.STOCK - 55)) | (1 << (pawnParser.FORWARD - 55)) | (1 << (pawnParser.NATIVE - 55)) | (1 << (pawnParser.PUBLIC - 55)) | (1 << (pawnParser.OPERATOR - 55)))) !== 0) || _la === pawnParser.IDENTIFIER || _la === pawnParser.DocBlock) {
					{
					{
					this.state = 171;
					this.declaration();
					}
					}
					this.state = 176;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				this.state = 177;
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
			this.state = 180;
			this.match(pawnParser.IDENTIFIER);
			this.state = 181;
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
			this.state = 197;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 186;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === pawnParser.DocBlock) {
					{
					{
					this.state = 183;
					this.docs();
					}
					}
					this.state = 188;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 194;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
				case 1:
					{
					this.state = 189;
					this.functionDecl();
					}
					break;

				case 2:
					{
					this.state = 190;
					this.operatorOverload();
					}
					break;

				case 3:
					{
					this.state = 191;
					this.varDeclaration();
					this.state = 192;
					this.match(pawnParser.SEMI);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 196;
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
			this.state = 200;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.STATIC) {
				{
				this.state = 199;
				this.match(pawnParser.STATIC);
				}
			}

			this.state = 202;
			this.match(pawnParser.ENUM);
			this.state = 204;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				{
				this.state = 203;
				this.tag();
				}
				break;
			}
			this.state = 207;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.IDENTIFIER) {
				{
				this.state = 206;
				this.match(pawnParser.IDENTIFIER);
				}
			}

			this.state = 210;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.OPEN_PARENTHESIS) {
				{
				this.state = 209;
				this.enumIterator();
				}
			}

			this.state = 212;
			this.match(pawnParser.CURLY_OPEN_BRACKET);
			this.state = 224;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.IDENTIFIER) {
				{
				this.state = 213;
				this.enumMember();
				this.state = 218;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 214;
						this.match(pawnParser.COMA);
						this.state = 215;
						this.enumMember();
						}
						}
					}
					this.state = 220;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
				}
				this.state = 222;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === pawnParser.COMA) {
					{
					this.state = 221;
					this.match(pawnParser.COMA);
					}
				}

				}
			}

			this.state = 226;
			this.match(pawnParser.CURLY_CLOSE_BRACKET);
			this.state = 228;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				{
				this.state = 227;
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
			this.state = 230;
			this.variable();
			this.state = 233;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.ASSIGMENT) {
				{
				this.state = 231;
				this.match(pawnParser.ASSIGMENT);
				this.state = 232;
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
			this.state = 235;
			this.match(pawnParser.OPEN_PARENTHESIS);
			this.state = 236;
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
			this.state = 237;
			this.match(pawnParser.INTEGER);
			this.state = 238;
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
			this.state = 252;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.NEW:
				{
				this.state = 240;
				this.match(pawnParser.NEW);
				this.state = 244;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (pawnParser.CONST - 57)) | (1 << (pawnParser.STATIC - 57)) | (1 << (pawnParser.STOCK - 57)) | (1 << (pawnParser.PUBLIC - 57)))) !== 0)) {
					{
					{
					this.state = 241;
					this.varModifires();
					}
					}
					this.state = 246;
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
				this.state = 248;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 247;
					this.varModifires();
					}
					}
					this.state = 250;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (pawnParser.CONST - 57)) | (1 << (pawnParser.STATIC - 57)) | (1 << (pawnParser.STOCK - 57)) | (1 << (pawnParser.PUBLIC - 57)))) !== 0));
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 256;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				{
				this.state = 254;
				this.variable();
				}
				break;

			case 2:
				{
				this.state = 255;
				this.varInit();
				}
				break;
			}
			this.state = 265;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pawnParser.COMA) {
				{
				{
				this.state = 258;
				this.match(pawnParser.COMA);
				this.state = 261;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
				case 1:
					{
					this.state = 259;
					this.variable();
					}
					break;

				case 2:
					{
					this.state = 260;
					this.varInit();
					}
					break;
				}
				}
				}
				this.state = 267;
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
	public varInit(): VarInitContext {
		let _localctx: VarInitContext = new VarInitContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, pawnParser.RULE_varInit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 268;
			this.variable();
			this.state = 269;
			this.match(pawnParser.ASSIGMENT);
			this.state = 272;
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
				this.state = 270;
				this.expresion();
				}
				break;
			case pawnParser.CURLY_OPEN_BRACKET:
				{
				this.state = 271;
				this.arrayInit();
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
	public functionDecl(): FunctionDeclContext {
		let _localctx: FunctionDeclContext = new FunctionDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, pawnParser.RULE_functionDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 275;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (pawnParser.STOCK - 59)) | (1 << (pawnParser.FORWARD - 59)) | (1 << (pawnParser.NATIVE - 59)) | (1 << (pawnParser.PUBLIC - 59)))) !== 0)) {
				{
				this.state = 274;
				this.funcDeclModif();
				}
			}

			this.state = 278;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				{
				this.state = 277;
				this.tag();
				}
				break;
			}
			this.state = 280;
			this.match(pawnParser.IDENTIFIER);
			this.state = 281;
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
			this.state = 284;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (pawnParser.STOCK - 59)) | (1 << (pawnParser.FORWARD - 59)) | (1 << (pawnParser.NATIVE - 59)) | (1 << (pawnParser.PUBLIC - 59)))) !== 0)) {
				{
				this.state = 283;
				this.funcDeclModif();
				}
			}

			this.state = 287;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.IDENTIFIER) {
				{
				this.state = 286;
				this.tag();
				}
			}

			this.state = 289;
			this.match(pawnParser.OPERATOR);
			this.state = 290;
			this.canBeOverloaded();
			this.state = 291;
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
			this.state = 293;
			this.match(pawnParser.OPEN_PARENTHESIS);
			this.state = 302;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				{
				this.state = 294;
				this.declParams();
				this.state = 299;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 295;
						this.match(pawnParser.COMA);
						this.state = 296;
						this.declParams();
						}
						}
					}
					this.state = 301;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
				}
				}
				break;
			}
			this.state = 305;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.CURLY_OPEN_BRACKET || _la === pawnParser.COMA || _la === pawnParser.PERIOD_FUNC || _la === pawnParser.IDENTIFIER) {
				{
				this.state = 304;
				this.ellipse();
				}
			}

			this.state = 307;
			this.match(pawnParser.CLOSE_PARENTHESIS);
			this.state = 311;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				{
				this.state = 308;
				this.match(pawnParser.SEMI);
				}
				break;

			case 2:
				{
				this.state = 309;
				this.statement();
				}
				break;

			case 3:
				{
				this.state = 310;
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
			this.state = 313;
			this.match(pawnParser.ASSIGMENT);
			this.state = 314;
			this.match(pawnParser.IDENTIFIER);
			this.state = 315;
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
			this.state = 317;
			this.match(pawnParser.IDENTIFIER);
			this.state = 318;
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
			this.state = 320;
			this.match(pawnParser.CURLY_OPEN_BRACKET);
			this.state = 321;
			this.match(pawnParser.IDENTIFIER);
			this.state = 326;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pawnParser.COMA) {
				{
				{
				this.state = 322;
				this.match(pawnParser.COMA);
				this.state = 323;
				this.match(pawnParser.IDENTIFIER);
				}
				}
				this.state = 328;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 329;
			this.match(pawnParser.CURLY_CLOSE_BRACKET);
			}
			this.state = 331;
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
		this.enterRule(_localctx, 28, pawnParser.RULE_variable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 334;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				{
				this.state = 333;
				this.tag();
				}
				break;
			}
			this.state = 336;
			this.match(pawnParser.IDENTIFIER);
			this.state = 340;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pawnParser.CURLY_OPEN_BRACKET || _la === pawnParser.SQUARE_OPEN_BRACKET) {
				{
				{
				this.state = 337;
				this.arrayIndex();
				}
				}
				this.state = 342;
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
		this.enterRule(_localctx, 30, pawnParser.RULE_arrayIndex);
		let _la: number;
		try {
			this.state = 359;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.SQUARE_OPEN_BRACKET:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 343;
				this.match(pawnParser.SQUARE_OPEN_BRACKET);
				this.state = 348;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.OPEN_PARENTHESIS) | (1 << pawnParser.MINUS) | (1 << pawnParser.INCREMENTS) | (1 << pawnParser.DECREMENTS))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (pawnParser.NOT - 39)) | (1 << (pawnParser.BIT_COMPLEMEN - 39)) | (1 << (pawnParser.STATE - 39)))) !== 0) || ((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (pawnParser.DEFINED - 76)) | (1 << (pawnParser.SIZEOF - 76)) | (1 << (pawnParser.TAGOF - 76)) | (1 << (pawnParser.TRUE - 76)) | (1 << (pawnParser.FALSE - 76)) | (1 << (pawnParser.CELLBITS - 76)) | (1 << (pawnParser.CELLMAX - 76)) | (1 << (pawnParser.CELLMIN - 76)) | (1 << (pawnParser.CHARBITS - 76)) | (1 << (pawnParser.CHARMAX - 76)) | (1 << (pawnParser.CHARMIN - 76)) | (1 << (pawnParser.DEBUG - 76)) | (1 << (pawnParser.LINE - 76)) | (1 << (pawnParser.PAWN - 76)) | (1 << (pawnParser.UCHARMAX - 76)) | (1 << (pawnParser.SHARPSTRING - 76)) | (1 << (pawnParser.STRING - 76)) | (1 << (pawnParser.CHAR_STRING - 76)))) !== 0) || ((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (pawnParser.IDENTIFIER - 108)) | (1 << (pawnParser.BINARY - 108)) | (1 << (pawnParser.HEX - 108)) | (1 << (pawnParser.INTEGER - 108)) | (1 << (pawnParser.FLOAT - 108)) | (1 << (pawnParser.RATIONAL - 108)))) !== 0)) {
					{
					this.state = 344;
					this.expresion();
					this.state = 346;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === pawnParser.CHAR) {
						{
						this.state = 345;
						this.match(pawnParser.CHAR);
						}
					}

					}
				}

				this.state = 350;
				this.match(pawnParser.SQUARE_CLOSE_BRACKET);
				}
				}
				break;
			case pawnParser.CURLY_OPEN_BRACKET:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 351;
				this.match(pawnParser.CURLY_OPEN_BRACKET);
				this.state = 356;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.OPEN_PARENTHESIS) | (1 << pawnParser.MINUS) | (1 << pawnParser.INCREMENTS) | (1 << pawnParser.DECREMENTS))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (pawnParser.NOT - 39)) | (1 << (pawnParser.BIT_COMPLEMEN - 39)) | (1 << (pawnParser.STATE - 39)))) !== 0) || ((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (pawnParser.DEFINED - 76)) | (1 << (pawnParser.SIZEOF - 76)) | (1 << (pawnParser.TAGOF - 76)) | (1 << (pawnParser.TRUE - 76)) | (1 << (pawnParser.FALSE - 76)) | (1 << (pawnParser.CELLBITS - 76)) | (1 << (pawnParser.CELLMAX - 76)) | (1 << (pawnParser.CELLMIN - 76)) | (1 << (pawnParser.CHARBITS - 76)) | (1 << (pawnParser.CHARMAX - 76)) | (1 << (pawnParser.CHARMIN - 76)) | (1 << (pawnParser.DEBUG - 76)) | (1 << (pawnParser.LINE - 76)) | (1 << (pawnParser.PAWN - 76)) | (1 << (pawnParser.UCHARMAX - 76)) | (1 << (pawnParser.SHARPSTRING - 76)) | (1 << (pawnParser.STRING - 76)) | (1 << (pawnParser.CHAR_STRING - 76)))) !== 0) || ((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (pawnParser.IDENTIFIER - 108)) | (1 << (pawnParser.BINARY - 108)) | (1 << (pawnParser.HEX - 108)) | (1 << (pawnParser.INTEGER - 108)) | (1 << (pawnParser.FLOAT - 108)) | (1 << (pawnParser.RATIONAL - 108)))) !== 0)) {
					{
					this.state = 352;
					this.expresion();
					this.state = 354;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === pawnParser.CHAR) {
						{
						this.state = 353;
						this.match(pawnParser.CHAR);
						}
					}

					}
				}

				this.state = 358;
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
		this.enterRule(_localctx, 32, pawnParser.RULE_funcDeclModif);
		try {
			this.state = 364;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.STOCK:
			case pawnParser.PUBLIC:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 361;
				this.funcModif();
				}
				break;
			case pawnParser.FORWARD:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 362;
				this.match(pawnParser.FORWARD);
				}
				break;
			case pawnParser.NATIVE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 363;
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
		this.enterRule(_localctx, 34, pawnParser.RULE_funcModif);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 366;
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
		this.enterRule(_localctx, 36, pawnParser.RULE_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 387;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				{
				{
				this.state = 377;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
				case 1:
					{
					this.state = 368;
					this.varDeclaration();
					}
					break;

				case 2:
					{
					this.state = 369;
					this.enum();
					}
					break;

				case 3:
					{
					this.state = 370;
					this.goto();
					}
					break;

				case 4:
					{
					this.state = 371;
					this.return();
					}
					break;

				case 5:
					{
					this.state = 372;
					this.cycleKeywords();
					}
					break;

				case 6:
					{
					this.state = 373;
					this.exit();
					}
					break;

				case 7:
					{
					this.state = 374;
					this.assert();
					}
					break;

				case 8:
					{
					this.state = 375;
					this.sleep();
					}
					break;

				case 9:
					{
					this.state = 376;
					this.expresion();
					}
					break;
				}
				this.state = 379;
				this.match(pawnParser.SEMI);
				}
				}
				break;

			case 2:
				{
				this.state = 381;
				this.match(pawnParser.SEMI);
				}
				break;

			case 3:
				{
				this.state = 382;
				this.processorLabel();
				}
				break;

			case 4:
				{
				this.state = 383;
				this.compoundStatment();
				}
				break;

			case 5:
				{
				this.state = 384;
				this.ifStatement();
				}
				break;

			case 6:
				{
				this.state = 385;
				this.cycles();
				}
				break;

			case 7:
				{
				this.state = 386;
				this.switch();
				}
				break;
			}
			this.state = 390;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				{
				this.state = 389;
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
		this.enterRule(_localctx, 38, pawnParser.RULE_compoundStatment);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 392;
			this.match(pawnParser.CURLY_OPEN_BRACKET);
			this.state = 396;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.OPEN_PARENTHESIS) | (1 << pawnParser.CURLY_OPEN_BRACKET) | (1 << pawnParser.SEMI) | (1 << pawnParser.MINUS) | (1 << pawnParser.INCREMENTS) | (1 << pawnParser.DECREMENTS))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (pawnParser.NOT - 39)) | (1 << (pawnParser.BIT_COMPLEMEN - 39)) | (1 << (pawnParser.ASSERT - 39)) | (1 << (pawnParser.EXIT - 39)) | (1 << (pawnParser.GOTO - 39)) | (1 << (pawnParser.SLEEP - 39)) | (1 << (pawnParser.STATE - 39)) | (1 << (pawnParser.RETURN - 39)) | (1 << (pawnParser.NEW - 39)) | (1 << (pawnParser.ENUM - 39)) | (1 << (pawnParser.CONST - 39)) | (1 << (pawnParser.STATIC - 39)) | (1 << (pawnParser.STOCK - 39)) | (1 << (pawnParser.PUBLIC - 39)) | (1 << (pawnParser.IF - 39)) | (1 << (pawnParser.SWITCH - 39)) | (1 << (pawnParser.WHILE - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (pawnParser.FOR - 71)) | (1 << (pawnParser.DO - 71)) | (1 << (pawnParser.CONTINUE - 71)) | (1 << (pawnParser.BREAK - 71)) | (1 << (pawnParser.DEFINED - 71)) | (1 << (pawnParser.SIZEOF - 71)) | (1 << (pawnParser.TAGOF - 71)) | (1 << (pawnParser.TRUE - 71)) | (1 << (pawnParser.FALSE - 71)) | (1 << (pawnParser.CELLBITS - 71)) | (1 << (pawnParser.CELLMAX - 71)) | (1 << (pawnParser.CELLMIN - 71)) | (1 << (pawnParser.CHARBITS - 71)) | (1 << (pawnParser.CHARMAX - 71)) | (1 << (pawnParser.CHARMIN - 71)) | (1 << (pawnParser.DEBUG - 71)) | (1 << (pawnParser.LINE - 71)))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (pawnParser.PAWN - 103)) | (1 << (pawnParser.UCHARMAX - 103)) | (1 << (pawnParser.SHARPSTRING - 103)) | (1 << (pawnParser.STRING - 103)) | (1 << (pawnParser.CHAR_STRING - 103)) | (1 << (pawnParser.IDENTIFIER - 103)) | (1 << (pawnParser.BINARY - 103)) | (1 << (pawnParser.HEX - 103)) | (1 << (pawnParser.INTEGER - 103)) | (1 << (pawnParser.FLOAT - 103)) | (1 << (pawnParser.RATIONAL - 103)))) !== 0)) {
				{
				{
				this.state = 393;
				this.statement();
				}
				}
				this.state = 398;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 399;
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
		this.enterRule(_localctx, 40, pawnParser.RULE_assert);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 401;
			this.match(pawnParser.ASSERT);
			this.state = 402;
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
		this.enterRule(_localctx, 42, pawnParser.RULE_exit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 404;
			this.match(pawnParser.EXIT);
			this.state = 405;
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
	public goto(): GotoContext {
		let _localctx: GotoContext = new GotoContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, pawnParser.RULE_goto);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 407;
			this.match(pawnParser.GOTO);
			this.state = 408;
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
	public sleep(): SleepContext {
		let _localctx: SleepContext = new SleepContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, pawnParser.RULE_sleep);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 410;
			this.match(pawnParser.SLEEP);
			this.state = 411;
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
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, pawnParser.RULE_ifStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 413;
			this.match(pawnParser.IF);
			this.state = 418;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				{
				this.state = 414;
				this.condition();
				}
				break;

			case 2:
				{
				this.state = 415;
				this.expresion();
				this.state = 416;
				this.match(pawnParser.THEN);
				}
				break;
			}
			this.state = 420;
			this.statement();
			this.state = 422;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				{
				this.state = 421;
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
		this.enterRule(_localctx, 50, pawnParser.RULE_elseStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 424;
			this.match(pawnParser.ELSE);
			this.state = 425;
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
		this.enterRule(_localctx, 52, pawnParser.RULE_return);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 427;
			this.match(pawnParser.RETURN);
			this.state = 429;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.OPEN_PARENTHESIS) | (1 << pawnParser.MINUS) | (1 << pawnParser.INCREMENTS) | (1 << pawnParser.DECREMENTS))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (pawnParser.NOT - 39)) | (1 << (pawnParser.BIT_COMPLEMEN - 39)) | (1 << (pawnParser.STATE - 39)))) !== 0) || ((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (pawnParser.DEFINED - 76)) | (1 << (pawnParser.SIZEOF - 76)) | (1 << (pawnParser.TAGOF - 76)) | (1 << (pawnParser.TRUE - 76)) | (1 << (pawnParser.FALSE - 76)) | (1 << (pawnParser.CELLBITS - 76)) | (1 << (pawnParser.CELLMAX - 76)) | (1 << (pawnParser.CELLMIN - 76)) | (1 << (pawnParser.CHARBITS - 76)) | (1 << (pawnParser.CHARMAX - 76)) | (1 << (pawnParser.CHARMIN - 76)) | (1 << (pawnParser.DEBUG - 76)) | (1 << (pawnParser.LINE - 76)) | (1 << (pawnParser.PAWN - 76)) | (1 << (pawnParser.UCHARMAX - 76)) | (1 << (pawnParser.SHARPSTRING - 76)) | (1 << (pawnParser.STRING - 76)) | (1 << (pawnParser.CHAR_STRING - 76)))) !== 0) || ((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (pawnParser.IDENTIFIER - 108)) | (1 << (pawnParser.BINARY - 108)) | (1 << (pawnParser.HEX - 108)) | (1 << (pawnParser.INTEGER - 108)) | (1 << (pawnParser.FLOAT - 108)) | (1 << (pawnParser.RATIONAL - 108)))) !== 0)) {
				{
				this.state = 428;
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
	public condition(): ConditionContext {
		let _localctx: ConditionContext = new ConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, pawnParser.RULE_condition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 431;
			this.match(pawnParser.OPEN_PARENTHESIS);
			this.state = 432;
			this.expresion();
			this.state = 433;
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
		this.enterRule(_localctx, 56, pawnParser.RULE_switch);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 435;
			this.match(pawnParser.SWITCH);
			this.state = 436;
			this.condition();
			this.state = 437;
			this.match(pawnParser.CURLY_OPEN_BRACKET);
			this.state = 441;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pawnParser.CASE) {
				{
				{
				this.state = 438;
				this.case();
				}
				}
				this.state = 443;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 445;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.DEFAULT) {
				{
				this.state = 444;
				this.default();
				}
			}

			this.state = 447;
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
		this.enterRule(_localctx, 58, pawnParser.RULE_case);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 449;
			this.match(pawnParser.CASE);
			this.state = 450;
			this.case_list();
			this.state = 455;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pawnParser.COMA) {
				{
				{
				this.state = 451;
				this.match(pawnParser.COMA);
				this.state = 452;
				this.case_list();
				}
				}
				this.state = 457;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 458;
			this.match(pawnParser.COLON);
			this.state = 459;
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
		this.enterRule(_localctx, 60, pawnParser.RULE_default);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 461;
			this.match(pawnParser.DEFAULT);
			this.state = 462;
			this.match(pawnParser.COLON);
			this.state = 463;
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
		this.enterRule(_localctx, 62, pawnParser.RULE_case_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 467;
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
			case pawnParser.BINARY:
			case pawnParser.HEX:
			case pawnParser.INTEGER:
			case pawnParser.FLOAT:
			case pawnParser.RATIONAL:
				{
				this.state = 465;
				this.literal();
				}
				break;
			case pawnParser.IDENTIFIER:
				{
				this.state = 466;
				this.match(pawnParser.IDENTIFIER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 470;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.PERIOD) {
				{
				this.state = 469;
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
		this.enterRule(_localctx, 64, pawnParser.RULE_range);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 472;
			this.match(pawnParser.PERIOD);
			this.state = 473;
			this.literal();
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
		this.enterRule(_localctx, 66, pawnParser.RULE_arrayInit);
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
		this.enterRule(_localctx, 68, pawnParser.RULE_arrayInitMember);
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
		this.enterRule(_localctx, 70, pawnParser.RULE_assigments);
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
		this.enterRule(_localctx, 72, pawnParser.RULE_declParams);
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
		this.enterRule(_localctx, 74, pawnParser.RULE_ellipse);
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
		this.enterRule(_localctx, 76, pawnParser.RULE_reference);
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
		this.enterRule(_localctx, 78, pawnParser.RULE_varModifires);
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
		this.enterRule(_localctx, 80, pawnParser.RULE_number);
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
		this.enterRule(_localctx, 82, pawnParser.RULE_float);
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
		this.enterRule(_localctx, 84, pawnParser.RULE_integer);
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
		this.enterRule(_localctx, 86, pawnParser.RULE_hex);
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
		this.enterRule(_localctx, 88, pawnParser.RULE_rational);
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
		this.enterRule(_localctx, 90, pawnParser.RULE_binary);
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
		this.enterRule(_localctx, 92, pawnParser.RULE_canBeOverloaded);
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
		this.enterRule(_localctx, 94, pawnParser.RULE_arefmeticOperator);
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
		this.enterRule(_localctx, 96, pawnParser.RULE_compareOperator);
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
		this.enterRule(_localctx, 98, pawnParser.RULE_cycles);
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
		this.enterRule(_localctx, 100, pawnParser.RULE_do);
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
		this.enterRule(_localctx, 102, pawnParser.RULE_while);
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
		this.enterRule(_localctx, 104, pawnParser.RULE_for);
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
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.OPEN_PARENTHESIS) | (1 << pawnParser.MINUS) | (1 << pawnParser.INCREMENTS) | (1 << pawnParser.DECREMENTS))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (pawnParser.NOT - 39)) | (1 << (pawnParser.BIT_COMPLEMEN - 39)) | (1 << (pawnParser.STATE - 39)) | (1 << (pawnParser.NEW - 39)) | (1 << (pawnParser.CONST - 39)) | (1 << (pawnParser.STATIC - 39)) | (1 << (pawnParser.STOCK - 39)) | (1 << (pawnParser.PUBLIC - 39)))) !== 0) || ((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (pawnParser.DEFINED - 76)) | (1 << (pawnParser.SIZEOF - 76)) | (1 << (pawnParser.TAGOF - 76)) | (1 << (pawnParser.TRUE - 76)) | (1 << (pawnParser.FALSE - 76)) | (1 << (pawnParser.CELLBITS - 76)) | (1 << (pawnParser.CELLMAX - 76)) | (1 << (pawnParser.CELLMIN - 76)) | (1 << (pawnParser.CHARBITS - 76)) | (1 << (pawnParser.CHARMAX - 76)) | (1 << (pawnParser.CHARMIN - 76)) | (1 << (pawnParser.DEBUG - 76)) | (1 << (pawnParser.LINE - 76)) | (1 << (pawnParser.PAWN - 76)) | (1 << (pawnParser.UCHARMAX - 76)) | (1 << (pawnParser.SHARPSTRING - 76)) | (1 << (pawnParser.STRING - 76)) | (1 << (pawnParser.CHAR_STRING - 76)))) !== 0) || ((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (pawnParser.IDENTIFIER - 108)) | (1 << (pawnParser.BINARY - 108)) | (1 << (pawnParser.HEX - 108)) | (1 << (pawnParser.INTEGER - 108)) | (1 << (pawnParser.FLOAT - 108)) | (1 << (pawnParser.RATIONAL - 108)))) !== 0)) {
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
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.OPEN_PARENTHESIS) | (1 << pawnParser.MINUS) | (1 << pawnParser.INCREMENTS) | (1 << pawnParser.DECREMENTS))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (pawnParser.NOT - 39)) | (1 << (pawnParser.BIT_COMPLEMEN - 39)) | (1 << (pawnParser.STATE - 39)))) !== 0) || ((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (pawnParser.DEFINED - 76)) | (1 << (pawnParser.SIZEOF - 76)) | (1 << (pawnParser.TAGOF - 76)) | (1 << (pawnParser.TRUE - 76)) | (1 << (pawnParser.FALSE - 76)) | (1 << (pawnParser.CELLBITS - 76)) | (1 << (pawnParser.CELLMAX - 76)) | (1 << (pawnParser.CELLMIN - 76)) | (1 << (pawnParser.CHARBITS - 76)) | (1 << (pawnParser.CHARMAX - 76)) | (1 << (pawnParser.CHARMIN - 76)) | (1 << (pawnParser.DEBUG - 76)) | (1 << (pawnParser.LINE - 76)) | (1 << (pawnParser.PAWN - 76)) | (1 << (pawnParser.UCHARMAX - 76)) | (1 << (pawnParser.SHARPSTRING - 76)) | (1 << (pawnParser.STRING - 76)) | (1 << (pawnParser.CHAR_STRING - 76)))) !== 0) || ((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (pawnParser.IDENTIFIER - 108)) | (1 << (pawnParser.BINARY - 108)) | (1 << (pawnParser.HEX - 108)) | (1 << (pawnParser.INTEGER - 108)) | (1 << (pawnParser.FLOAT - 108)) | (1 << (pawnParser.RATIONAL - 108)))) !== 0)) {
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
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.OPEN_PARENTHESIS) | (1 << pawnParser.MINUS) | (1 << pawnParser.INCREMENTS) | (1 << pawnParser.DECREMENTS))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (pawnParser.NOT - 39)) | (1 << (pawnParser.BIT_COMPLEMEN - 39)) | (1 << (pawnParser.STATE - 39)))) !== 0) || ((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (pawnParser.DEFINED - 76)) | (1 << (pawnParser.SIZEOF - 76)) | (1 << (pawnParser.TAGOF - 76)) | (1 << (pawnParser.TRUE - 76)) | (1 << (pawnParser.FALSE - 76)) | (1 << (pawnParser.CELLBITS - 76)) | (1 << (pawnParser.CELLMAX - 76)) | (1 << (pawnParser.CELLMIN - 76)) | (1 << (pawnParser.CHARBITS - 76)) | (1 << (pawnParser.CHARMAX - 76)) | (1 << (pawnParser.CHARMIN - 76)) | (1 << (pawnParser.DEBUG - 76)) | (1 << (pawnParser.LINE - 76)) | (1 << (pawnParser.PAWN - 76)) | (1 << (pawnParser.UCHARMAX - 76)) | (1 << (pawnParser.SHARPSTRING - 76)) | (1 << (pawnParser.STRING - 76)) | (1 << (pawnParser.CHAR_STRING - 76)))) !== 0) || ((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (pawnParser.IDENTIFIER - 108)) | (1 << (pawnParser.BINARY - 108)) | (1 << (pawnParser.HEX - 108)) | (1 << (pawnParser.INTEGER - 108)) | (1 << (pawnParser.FLOAT - 108)) | (1 << (pawnParser.RATIONAL - 108)))) !== 0)) {
				{
				this.state = 594;
				_localctx._third = this.expresion();
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
		this.enterRule(_localctx, 106, pawnParser.RULE_forFirstExp);
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
				this.expresion();
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
		this.enterRule(_localctx, 108, pawnParser.RULE_cycleKeywords);
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
		this.enterRule(_localctx, 110, pawnParser.RULE_literal);
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
		this.enterRule(_localctx, 112, pawnParser.RULE_bool_const);
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
		this.enterRule(_localctx, 114, pawnParser.RULE_predefinedConstants);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 614;
			_la = this._input.LA(1);
			if (!(((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & ((1 << (pawnParser.CELLBITS - 95)) | (1 << (pawnParser.CELLMAX - 95)) | (1 << (pawnParser.CELLMIN - 95)) | (1 << (pawnParser.CHARBITS - 95)) | (1 << (pawnParser.CHARMAX - 95)) | (1 << (pawnParser.CHARMIN - 95)) | (1 << (pawnParser.DEBUG - 95)) | (1 << (pawnParser.LINE - 95)) | (1 << (pawnParser.PAWN - 95)) | (1 << (pawnParser.UCHARMAX - 95)))) !== 0))) {
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
		this.enterRule(_localctx, 116, pawnParser.RULE_string);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 616;
			_la = this._input.LA(1);
			if (!(((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (pawnParser.SHARPSTRING - 105)) | (1 << (pawnParser.STRING - 105)) | (1 << (pawnParser.CHAR_STRING - 105)))) !== 0))) {
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
		this.enterRule(_localctx, 118, pawnParser.RULE_docs);
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
		this.enterRule(_localctx, 120, pawnParser.RULE_docBlock);
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
		this.enterRule(_localctx, 122, pawnParser.RULE_assigmentExpression);
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
		this.enterRule(_localctx, 124, pawnParser.RULE_ternaryExpression);
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
		this.enterRule(_localctx, 126, pawnParser.RULE_logicalOrExpression);
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
		this.enterRule(_localctx, 128, pawnParser.RULE_logicalAndExpression);
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
		this.enterRule(_localctx, 130, pawnParser.RULE_equalOrNotExpression);
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
		this.enterRule(_localctx, 132, pawnParser.RULE_compareExpression);
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
		this.enterRule(_localctx, 134, pawnParser.RULE_bitOrExpression);
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
		this.enterRule(_localctx, 136, pawnParser.RULE_xorExpression);
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
		this.enterRule(_localctx, 138, pawnParser.RULE_bitAndExpression);
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
		this.enterRule(_localctx, 140, pawnParser.RULE_bitShiftExpression);
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
		this.enterRule(_localctx, 142, pawnParser.RULE_additiveExpression);
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
		this.enterRule(_localctx, 144, pawnParser.RULE_multiplicativeExpression);
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
		this.enterRule(_localctx, 146, pawnParser.RULE_prefixExpression);
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
		this.enterRule(_localctx, 148, pawnParser.RULE_postfixExpression);
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
		this.enterRule(_localctx, 150, pawnParser.RULE_functionOrArrayExpression);
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
		this.enterRule(_localctx, 152, pawnParser.RULE_primaryExpression);
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
		this.enterRule(_localctx, 154, pawnParser.RULE_literalOrSymbol);
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
	public expresion(): ExpresionContext {
		let _localctx: ExpresionContext = new ExpresionContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, pawnParser.RULE_expresion);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 786;
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
		this.enterRule(_localctx, 158, pawnParser.RULE_functionCallOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 788;
			this.match(pawnParser.OPEN_PARENTHESIS);
			this.state = 797;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.T__0) | (1 << pawnParser.OPEN_PARENTHESIS) | (1 << pawnParser.MINUS) | (1 << pawnParser.INCREMENTS) | (1 << pawnParser.DECREMENTS))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (pawnParser.NOT - 39)) | (1 << (pawnParser.BIT_COMPLEMEN - 39)) | (1 << (pawnParser.STATE - 39)))) !== 0) || ((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (pawnParser.DEFINED - 76)) | (1 << (pawnParser.SIZEOF - 76)) | (1 << (pawnParser.TAGOF - 76)) | (1 << (pawnParser.TRUE - 76)) | (1 << (pawnParser.FALSE - 76)) | (1 << (pawnParser.CELLBITS - 76)) | (1 << (pawnParser.CELLMAX - 76)) | (1 << (pawnParser.CELLMIN - 76)) | (1 << (pawnParser.CHARBITS - 76)) | (1 << (pawnParser.CHARMAX - 76)) | (1 << (pawnParser.CHARMIN - 76)) | (1 << (pawnParser.DEBUG - 76)) | (1 << (pawnParser.LINE - 76)) | (1 << (pawnParser.PAWN - 76)) | (1 << (pawnParser.UCHARMAX - 76)) | (1 << (pawnParser.SHARPSTRING - 76)) | (1 << (pawnParser.STRING - 76)) | (1 << (pawnParser.CHAR_STRING - 76)))) !== 0) || ((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (pawnParser.IDENTIFIER - 108)) | (1 << (pawnParser.SKIP_PARAM - 108)) | (1 << (pawnParser.BINARY - 108)) | (1 << (pawnParser.HEX - 108)) | (1 << (pawnParser.INTEGER - 108)) | (1 << (pawnParser.FLOAT - 108)) | (1 << (pawnParser.RATIONAL - 108)))) !== 0)) {
				{
				this.state = 789;
				this.functionArgument();
				this.state = 794;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === pawnParser.COMA) {
					{
					{
					this.state = 790;
					this.match(pawnParser.COMA);
					this.state = 791;
					this.functionArgument();
					}
					}
					this.state = 796;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 799;
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
		this.enterRule(_localctx, 160, pawnParser.RULE_functionArgument);
		let _la: number;
		try {
			this.state = 809;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.SKIP_PARAM:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 801;
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
				this.state = 806;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === pawnParser.T__0) {
					{
					this.state = 802;
					this.match(pawnParser.T__0);
					this.state = 803;
					this.symbol();
					this.state = 804;
					this.match(pawnParser.ASSIGMENT);
					}
				}

				this.state = 808;
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
		this.enterRule(_localctx, 162, pawnParser.RULE_symbol);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 811;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03z\u0330\x04\x02" +
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
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x03\x02\x03\x02\x07\x02\xA9\n\x02" +
		"\f\x02\x0E\x02\xAC\v\x02\x03\x02\x07\x02\xAF\n\x02\f\x02\x0E\x02\xB2\v" +
		"\x02\x03\x02\x05\x02\xB5\n\x02\x03\x03\x03\x03\x03\x03\x03\x04\x07\x04" +
		"\xBB\n\x04\f\x04\x0E\x04\xBE\v\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x05\x04\xC5\n\x04\x03\x04\x05\x04\xC8\n\x04\x03\x05\x05\x05\xCB\n" +
		"\x05\x03\x05\x03\x05\x05\x05\xCF\n\x05\x03\x05\x05\x05\xD2\n\x05\x03\x05" +
		"\x05\x05\xD5\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05\xDB\n\x05\f" +
		"\x05\x0E\x05\xDE\v\x05\x03\x05\x05\x05\xE1\n\x05\x05\x05\xE3\n\x05\x03" +
		"\x05\x03\x05\x05\x05\xE7\n\x05\x03\x06\x03\x06\x03\x06\x05\x06\xEC\n\x06" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x07\b\xF5\n\b\f\b" +
		"\x0E\b\xF8\v\b\x03\b\x06\b\xFB\n\b\r\b\x0E\b\xFC\x05\b\xFF\n\b\x03\b\x03" +
		"\b\x05\b\u0103\n\b\x03\b\x03\b\x03\b\x05\b\u0108\n\b\x07\b\u010A\n\b\f" +
		"\b\x0E\b\u010D\v\b\x03\t\x03\t\x03\t\x03\t\x05\t\u0113\n\t\x03\n\x05\n" +
		"\u0116\n\n\x03\n\x05\n\u0119\n\n\x03\n\x03\n\x03\n\x03\v\x05\v\u011F\n" +
		"\v\x03\v\x05\v\u0122\n\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03" +
		"\f\x07\f\u012C\n\f\f\f\x0E\f\u012F\v\f\x05\f\u0131\n\f\x03\f\x05\f\u0134" +
		"\n\f\x03\f\x03\f\x03\f\x03\f\x05\f\u013A\n\f\x03\r\x03\r\x03\r\x03\r\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u0147\n\x0F" +
		"\f\x0F\x0E\x0F\u014A\v\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x05" +
		"\x10\u0151\n\x10\x03\x10\x03\x10\x07\x10\u0155\n\x10\f\x10\x0E\x10\u0158" +
		"\v\x10\x03\x11\x03\x11\x03\x11\x05\x11\u015D\n\x11\x05\x11\u015F\n\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u0165\n\x11\x05\x11\u0167\n\x11" +
		"\x03\x11\x05\x11\u016A\n\x11\x03\x12\x03\x12\x03\x12\x05\x12\u016F\n\x12" +
		"\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x05\x14\u017C\n\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x03\x14\x05\x14\u0186\n\x14\x03\x14\x05\x14\u0189" +
		"\n\x14\x03\x15\x03\x15\x07\x15\u018D\n\x15\f\x15\x0E\x15\u0190\v\x15\x03" +
		"\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x18\x03" +
		"\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1A\x05\x1A\u01A5\n\x1A\x03\x1A\x03\x1A\x05\x1A\u01A9\n\x1A\x03\x1B\x03" +
		"\x1B\x03\x1B\x03\x1C\x03\x1C\x05\x1C\u01B0\n\x1C\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x07\x1E\u01BA\n\x1E\f\x1E\x0E" +
		"\x1E\u01BD\v\x1E\x03\x1E\x05\x1E\u01C0\n\x1E\x03\x1E\x03\x1E\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x07\x1F\u01C8\n\x1F\f\x1F\x0E\x1F\u01CB\v\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03!\x03!\x05!\u01D6\n!\x03!" +
		"\x05!\u01D9\n!\x03\"\x03\"\x03\"\x03#\x03#\x03#\x03#\x07#\u01E2\n#\f#" +
		"\x0E#\u01E5\v#\x03#\x03#\x03$\x05$\u01EA\n$\x03$\x05$\u01ED\n$\x03$\x03" +
		"$\x05$\u01F1\n$\x03$\x03$\x05$\u01F5\n$\x03$\x05$\u01F8\n$\x03%\x03%\x03" +
		"&\x05&\u01FD\n&\x03&\x05&\u0200\n&\x03&\x03&\x05&\u0204\n&\x03&\x03&\x07" +
		"&\u0208\n&\f&\x0E&\u020B\v&\x03&\x03&\x03&\x05&\u0210\n&\x05&\u0212\n" +
		"&\x03\'\x05\'\u0215\n\'\x03\'\x03\'\x05\'\u0219\n\'\x03\'\x03\'\x03(\x03" +
		"(\x03)\x03)\x03*\x03*\x03*\x03*\x03*\x05*\u0226\n*\x03+\x03+\x03,\x03" +
		",\x03-\x03-\x03.\x03.\x03/\x03/\x030\x030\x030\x030\x050\u0236\n0\x03" +
		"1\x031\x032\x032\x033\x033\x033\x053\u023F\n3\x034\x034\x034\x034\x05" +
		"4\u0245\n4\x035\x035\x035\x035\x036\x036\x036\x056\u024E\n6\x036\x036" +
		"\x056\u0252\n6\x036\x036\x056\u0256\n6\x036\x036\x036\x037\x037\x057\u025D" +
		"\n7\x038\x038\x039\x039\x039\x039\x059\u0265\n9\x03:\x03:\x03;\x03;\x03" +
		"<\x03<\x07<\u026D\n<\f<\x0E<\u0270\v<\x03=\x03=\x03>\x03>\x03?\x03?\x03" +
		"?\x03?\x07?\u027A\n?\f?\x0E?\u027D\v?\x03@\x03@\x03@\x03@\x03@\x03@\x05" +
		"@\u0285\n@\x03A\x03A\x03A\x07A\u028A\nA\fA\x0EA\u028D\vA\x03B\x03B\x03" +
		"B\x07B\u0292\nB\fB\x0EB\u0295\vB\x03C\x03C\x03C\x07C\u029A\nC\fC\x0EC" +
		"\u029D\vC\x03D\x03D\x03D\x07D\u02A2\nD\fD\x0ED\u02A5\vD\x03E\x03E\x03" +
		"E\x07E\u02AA\nE\fE\x0EE\u02AD\vE\x03F\x03F\x03F\x07F\u02B2\nF\fF\x0EF" +
		"\u02B5\vF\x03G\x03G\x03G\x07G\u02BA\nG\fG\x0EG\u02BD\vG\x03H\x03H\x03" +
		"H\x07H\u02C2\nH\fH\x0EH\u02C5\vH\x03I\x03I\x03I\x07I\u02CA\nI\fI\x0EI" +
		"\u02CD\vI\x03J\x03J\x03J\x07J\u02D2\nJ\fJ\x0EJ\u02D5\vJ\x03K\x03K\x03" +
		"K\x03K\x03K\x03K\x05K\u02DD\nK\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x05" +
		"K\u02E6\nK\x03K\x05K\u02E9\nK\x03L\x03L\x07L\u02ED\nL\fL\x0EL\u02F0\v" +
		"L\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x07M\u02FB\nM\fM\x0EM\u02FE" +
		"\vM\x03M\x05M\u0301\nM\x03N\x03N\x03N\x03N\x07N\u0307\nN\fN\x0EN\u030A" +
		"\vN\x03N\x03N\x03N\x05N\u030F\nN\x03O\x03O\x05O\u0313\nO\x03P\x03P\x03" +
		"Q\x03Q\x03Q\x03Q\x07Q\u031B\nQ\fQ\x0EQ\u031E\vQ\x05Q\u0320\nQ\x03Q\x03" +
		"Q\x03R\x03R\x03R\x03R\x03R\x05R\u0329\nR\x03R\x05R\u032C\nR\x03S\x03S" +
		"\x03S\x02\x02\x02T\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10" +
		"\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02" +
		"$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02" +
		"@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02" +
		"\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02" +
		"x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C" +
		"\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E" +
		"\x02\xA0\x02\xA2\x02\xA4\x02\x02\x13\x05\x02\r\r\x0F\x0F\x17\x17\x04\x02" +
		"==@@\x03\x02\f\x17\x04\x02;=@@\x03\x02\x18\x1E\x04\x02\x1F$))\x03\x02" +
		"KL\x03\x02_`\x03\x02aj\x03\x02km\x03\x02\x1F \x03\x02!$\x03\x02.0\x03" +
		"\x02\x18\x19\x03\x02\x1A\x1C\x04\x0277NP\x04\x02\x1D\x1EMM\x02\u0361\x02" +
		"\xB4\x03\x02\x02\x02\x04\xB6\x03\x02\x02\x02\x06\xC7\x03\x02\x02\x02\b" +
		"\xCA\x03\x02\x02\x02\n\xE8\x03\x02\x02\x02\f\xED\x03\x02\x02\x02\x0E\xFE" +
		"\x03\x02\x02\x02\x10\u010E\x03\x02\x02\x02\x12\u0115\x03\x02\x02\x02\x14" +
		"\u011E\x03\x02\x02\x02\x16\u0127\x03\x02\x02\x02\x18\u013B\x03\x02\x02" +
		"\x02\x1A\u013F\x03\x02\x02\x02\x1C\u0142\x03\x02\x02\x02\x1E\u0150\x03" +
		"\x02\x02\x02 \u0169\x03\x02\x02\x02\"\u016E\x03\x02\x02\x02$\u0170\x03" +
		"\x02\x02\x02&\u0185\x03\x02\x02\x02(\u018A\x03\x02\x02\x02*\u0193\x03" +
		"\x02\x02\x02,\u0196\x03\x02\x02\x02.\u0199\x03\x02\x02\x020\u019C\x03" +
		"\x02\x02\x022\u019F\x03\x02\x02\x024\u01AA\x03\x02\x02\x026\u01AD\x03" +
		"\x02\x02\x028\u01B1\x03\x02\x02\x02:\u01B5\x03\x02\x02\x02<\u01C3\x03" +
		"\x02\x02\x02>\u01CF\x03\x02\x02\x02@\u01D5\x03\x02\x02\x02B\u01DA\x03" +
		"\x02\x02\x02D\u01DD\x03\x02\x02\x02F\u01F7\x03\x02\x02\x02H\u01F9\x03" +
		"\x02\x02\x02J\u01FC\x03\x02\x02\x02L\u0214\x03\x02\x02\x02N\u021C\x03" +
		"\x02\x02\x02P\u021E\x03\x02\x02\x02R\u0225\x03\x02\x02\x02T\u0227\x03" +
		"\x02\x02\x02V\u0229\x03\x02\x02\x02X\u022B\x03\x02\x02\x02Z\u022D\x03" +
		"\x02\x02\x02\\\u022F\x03\x02\x02\x02^\u0235\x03\x02\x02\x02`\u0237\x03" +
		"\x02\x02\x02b\u0239\x03\x02\x02\x02d\u023E\x03\x02\x02\x02f\u0240\x03" +
		"\x02\x02\x02h\u0246\x03\x02\x02\x02j\u024A\x03\x02\x02\x02l\u025C\x03" +
		"\x02\x02\x02n\u025E\x03\x02\x02\x02p\u0264\x03\x02\x02\x02r\u0266\x03" +
		"\x02\x02\x02t\u0268\x03\x02\x02\x02v\u026A\x03\x02\x02\x02x\u0271\x03" +
		"\x02\x02\x02z\u0273\x03\x02\x02\x02|\u0275\x03\x02\x02\x02~\u027E\x03" +
		"\x02\x02\x02\x80\u0286\x03\x02\x02\x02\x82\u028E\x03\x02\x02\x02\x84\u0296" +
		"\x03\x02\x02\x02\x86\u029E\x03\x02\x02\x02\x88\u02A6\x03\x02\x02\x02\x8A" +
		"\u02AE\x03\x02\x02\x02\x8C\u02B6\x03\x02\x02\x02\x8E\u02BE\x03\x02\x02" +
		"\x02\x90\u02C6\x03\x02\x02\x02\x92\u02CE\x03\x02\x02\x02\x94\u02E8\x03" +
		"\x02\x02\x02\x96\u02EA\x03\x02\x02\x02\x98\u02F1\x03\x02\x02\x02\x9A\u030E" +
		"\x03\x02\x02\x02\x9C\u0312\x03\x02\x02\x02\x9E\u0314\x03\x02\x02\x02\xA0" +
		"\u0316\x03\x02\x02\x02\xA2\u032B\x03\x02\x02\x02\xA4\u032D\x03\x02\x02" +
		"\x02\xA6\xB5\x05\x04\x03\x02\xA7\xA9\x05x=\x02\xA8\xA7\x03\x02\x02\x02" +
		"\xA9\xAC\x03\x02\x02\x02\xAA\xA8\x03\x02\x02\x02\xAA\xAB\x03\x02\x02\x02" +
		"\xAB\xB0\x03\x02\x02\x02\xAC\xAA\x03\x02\x02\x02\xAD\xAF\x05\x06\x04\x02" +
		"\xAE\xAD\x03\x02\x02\x02\xAF\xB2\x03\x02\x02\x02\xB0\xAE\x03\x02\x02\x02" +
		"\xB0\xB1\x03\x02\x02\x02\xB1\xB3\x03\x02\x02\x02\xB2\xB0\x03\x02\x02\x02" +
		"\xB3\xB5\x07\x02\x02\x03\xB4\xA6\x03\x02\x02\x02\xB4\xAA\x03\x02\x02\x02" +
		"\xB5\x03\x03\x02\x02\x02\xB6\xB7\x07n\x02\x02\xB7\xB8\x07&\x02\x02\xB8" +
		"\x05\x03\x02\x02\x02\xB9\xBB\x05x=\x02\xBA\xB9\x03\x02\x02\x02\xBB\xBE" +
		"\x03\x02\x02\x02\xBC\xBA\x03\x02\x02\x02\xBC\xBD\x03\x02\x02\x02\xBD\xC4" +
		"\x03\x02\x02\x02\xBE\xBC\x03\x02\x02\x02\xBF\xC5\x05\x12\n\x02\xC0\xC5" +
		"\x05\x14\v\x02\xC1\xC2\x05\x0E\b\x02\xC2\xC3\x07\v\x02\x02\xC3\xC5\x03" +
		"\x02\x02\x02\xC4\xBF\x03\x02\x02\x02\xC4\xC0\x03\x02\x02\x02\xC4\xC1\x03" +
		"\x02\x02\x02\xC5\xC8\x03\x02\x02\x02\xC6\xC8\x05\b\x05\x02\xC7\xBC\x03" +
		"\x02\x02\x02\xC7\xC6\x03\x02\x02\x02\xC8\x07\x03\x02\x02\x02\xC9\xCB\x07" +
		"<\x02\x02\xCA\xC9\x03\x02\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB\xCC\x03" +
		"\x02\x02\x02\xCC\xCE\x07:\x02\x02\xCD\xCF\x05\x1A\x0E\x02\xCE\xCD\x03" +
		"\x02\x02\x02\xCE\xCF\x03\x02\x02\x02\xCF\xD1\x03\x02\x02\x02\xD0\xD2\x07" +
		"n\x02\x02\xD1\xD0\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2\xD4\x03" +
		"\x02\x02\x02\xD3\xD5\x05\f\x07\x02\xD4\xD3\x03\x02\x02\x02\xD4\xD5\x03" +
		"\x02\x02\x02\xD5\xD6\x03\x02\x02\x02\xD6\xE2\x07\x06\x02\x02\xD7\xDC\x05" +
		"\n\x06\x02\xD8\xD9\x07\n\x02\x02\xD9\xDB\x05\n\x06\x02\xDA\xD8\x03\x02" +
		"\x02\x02\xDB\xDE\x03\x02\x02\x02\xDC\xDA\x03\x02\x02\x02\xDC\xDD\x03\x02" +
		"\x02\x02\xDD\xE0\x03\x02\x02\x02\xDE\xDC\x03\x02\x02\x02\xDF\xE1\x07\n" +
		"\x02\x02\xE0\xDF\x03\x02\x02\x02\xE0\xE1\x03\x02\x02\x02\xE1\xE3\x03\x02" +
		"\x02\x02\xE2\xD7\x03\x02\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3\xE4\x03\x02" +
		"\x02\x02\xE4\xE6\x07\x07\x02\x02\xE5\xE7\x07\v\x02\x02\xE6\xE5\x03\x02" +
		"\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7\t\x03\x02\x02\x02\xE8\xEB\x05\x1E" +
		"\x10\x02\xE9\xEA\x07\f\x02\x02\xEA\xEC\x05\x9EP\x02\xEB\xE9\x03\x02\x02" +
		"\x02\xEB\xEC\x03\x02\x02\x02\xEC\v\x03\x02\x02\x02\xED\xEE\x07\x04\x02" +
		"\x02\xEE\xEF\t\x02\x02\x02\xEF\xF0\x07r\x02\x02\xF0\xF1\x07\x05\x02\x02" +
		"\xF1\r\x03\x02\x02\x02\xF2\xF6\x079\x02\x02\xF3\xF5\x05P)\x02\xF4\xF3" +
		"\x03\x02\x02\x02\xF5\xF8\x03\x02\x02\x02\xF6\xF4\x03\x02\x02\x02\xF6\xF7" +
		"\x03\x02\x02\x02\xF7\xFF\x03\x02\x02\x02\xF8\xF6\x03\x02\x02\x02\xF9\xFB" +
		"\x05P)\x02\xFA\xF9\x03\x02\x02\x02\xFB\xFC\x03\x02\x02\x02\xFC\xFA\x03" +
		"\x02\x02\x02\xFC\xFD\x03\x02\x02\x02\xFD\xFF\x03\x02\x02\x02\xFE\xF2\x03" +
		"\x02\x02\x02\xFE\xFA\x03\x02\x02\x02\xFF\u0102\x03\x02\x02\x02\u0100\u0103" +
		"\x05\x1E\x10\x02\u0101\u0103\x05\x10\t\x02\u0102\u0100\x03\x02\x02\x02" +
		"\u0102\u0101\x03\x02\x02\x02\u0103\u010B\x03\x02\x02\x02\u0104\u0107\x07" +
		"\n\x02\x02\u0105\u0108\x05\x1E\x10\x02\u0106\u0108\x05\x10\t\x02\u0107" +
		"\u0105\x03\x02\x02\x02\u0107\u0106\x03\x02\x02\x02\u0108\u010A\x03\x02" +
		"\x02\x02\u0109\u0104\x03\x02\x02\x02\u010A\u010D\x03\x02\x02\x02\u010B" +
		"\u0109\x03\x02\x02\x02\u010B\u010C\x03\x02\x02\x02\u010C\x0F\x03\x02\x02" +
		"\x02\u010D\u010B\x03\x02\x02\x02\u010E\u010F\x05\x1E\x10\x02\u010F\u0112" +
		"\x07\f\x02\x02\u0110\u0113\x05\x9EP\x02\u0111\u0113\x05D#\x02\u0112\u0110" +
		"\x03\x02\x02\x02\u0112\u0111\x03\x02\x02\x02\u0113\x11\x03\x02\x02\x02" +
		"\u0114\u0116\x05\"\x12\x02\u0115\u0114\x03\x02\x02\x02\u0115\u0116\x03" +
		"\x02\x02\x02\u0116\u0118\x03\x02\x02\x02\u0117\u0119\x05\x1A\x0E\x02\u0118" +
		"\u0117\x03\x02\x02\x02\u0118\u0119\x03\x02\x02\x02\u0119\u011A\x03\x02" +
		"\x02\x02\u011A\u011B\x07n\x02\x02\u011B\u011C\x05\x16\f\x02\u011C\x13" +
		"\x03\x02\x02\x02\u011D\u011F\x05\"\x12\x02\u011E\u011D\x03\x02\x02\x02" +
		"\u011E\u011F\x03\x02\x02\x02\u011F\u0121\x03\x02\x02\x02\u0120\u0122\x05" +
		"\x1A\x0E\x02\u0121\u0120\x03\x02\x02\x02\u0121\u0122\x03\x02\x02\x02\u0122" +
		"\u0123\x03\x02\x02\x02\u0123\u0124\x07A\x02\x02\u0124\u0125\x05^0\x02" +
		"\u0125\u0126\x05\x16\f\x02\u0126\x15\x03\x02\x02\x02\u0127\u0130\x07\x04" +
		"\x02\x02\u0128\u012D\x05J&\x02\u0129\u012A\x07\n\x02\x02\u012A\u012C\x05" +
		"J&\x02\u012B\u0129\x03\x02\x02\x02\u012C\u012F\x03\x02\x02\x02\u012D\u012B" +
		"\x03\x02\x02\x02\u012D\u012E\x03\x02\x02\x02\u012E\u0131\x03\x02\x02\x02" +
		"\u012F\u012D\x03\x02\x02\x02\u0130\u0128\x03\x02\x02\x02\u0130\u0131\x03" +
		"\x02\x02\x02\u0131\u0133\x03\x02\x02\x02\u0132\u0134\x05L\'\x02\u0133" +
		"\u0132\x03\x02\x02\x02\u0133\u0134\x03\x02\x02\x02\u0134\u0135\x03\x02" +
		"\x02\x02\u0135\u0139\x07\x05\x02\x02\u0136\u013A\x07\v\x02\x02\u0137\u013A" +
		"\x05&\x14\x02\u0138\u013A\x05\x18\r\x02\u0139\u0136\x03\x02\x02\x02\u0139" +
		"\u0137\x03\x02\x02\x02\u0139\u0138\x03\x02\x02\x02\u013A\x17\x03\x02\x02" +
		"\x02\u013B\u013C\x07\f\x02\x02\u013C\u013D\x07n\x02\x02\u013D\u013E\x07" +
		"\v\x02\x02\u013E\x19\x03\x02\x02\x02\u013F\u0140\x07n\x02\x02\u0140\u0141" +
		"\x07&\x02\x02\u0141\x1B\x03\x02\x02\x02\u0142\u0143\x07\x06\x02\x02\u0143" +
		"\u0148\x07n\x02\x02\u0144\u0145\x07\n\x02\x02\u0145\u0147\x07n\x02\x02" +
		"\u0146\u0144\x03\x02\x02\x02\u0147\u014A\x03\x02\x02\x02\u0148\u0146\x03" +
		"\x02\x02\x02\u0148\u0149\x03\x02\x02\x02\u0149\u014B\x03\x02\x02\x02\u014A" +
		"\u0148\x03\x02\x02\x02\u014B\u014C\x07\x07\x02\x02\u014C\u014D\x03\x02" +
		"\x02\x02\u014D\u014E\x07&\x02\x02\u014E\x1D\x03\x02\x02\x02\u014F\u0151" +
		"\x05\x1A\x0E\x02\u0150\u014F\x03\x02\x02\x02\u0150\u0151\x03\x02\x02\x02" +
		"\u0151\u0152\x03\x02\x02\x02\u0152\u0156\x07n\x02\x02\u0153\u0155\x05" +
		" \x11\x02\u0154\u0153\x03\x02\x02\x02\u0155\u0158\x03\x02\x02\x02\u0156" +
		"\u0154\x03\x02\x02\x02\u0156\u0157\x03\x02\x02\x02\u0157\x1F\x03\x02\x02" +
		"\x02\u0158\u0156\x03\x02\x02\x02\u0159\u015E\x07\b\x02\x02\u015A\u015C" +
		"\x05\x9EP\x02\u015B\u015D\x07M\x02\x02\u015C\u015B\x03\x02\x02\x02\u015C" +
		"\u015D\x03\x02\x02\x02\u015D\u015F\x03\x02\x02\x02\u015E\u015A\x03\x02" +
		"\x02\x02\u015E\u015F\x03\x02\x02\x02\u015F\u0160\x03\x02\x02\x02\u0160" +
		"\u016A\x07\t\x02\x02\u0161\u0166\x07\x06\x02\x02\u0162\u0164\x05\x9EP" +
		"\x02\u0163\u0165\x07M\x02\x02\u0164\u0163\x03\x02\x02\x02\u0164\u0165" +
		"\x03\x02\x02\x02\u0165\u0167\x03\x02\x02\x02\u0166\u0162\x03\x02\x02\x02" +
		"\u0166\u0167\x03\x02\x02\x02\u0167\u0168\x03\x02\x02\x02\u0168\u016A\x07" +
		"\x07\x02\x02\u0169\u0159\x03\x02\x02\x02\u0169\u0161\x03\x02\x02\x02\u016A" +
		"!\x03\x02\x02\x02\u016B\u016F\x05$\x13\x02\u016C\u016F\x07>\x02\x02\u016D" +
		"\u016F\x07?\x02\x02\u016E\u016B\x03\x02\x02\x02\u016E\u016C\x03\x02\x02" +
		"\x02\u016E\u016D\x03\x02\x02\x02\u016F#\x03\x02\x02\x02\u0170\u0171\t" +
		"\x03\x02\x02\u0171%\x03\x02\x02\x02\u0172\u017C\x05\x0E\b\x02\u0173\u017C" +
		"\x05\b\x05\x02\u0174\u017C\x05.\x18\x02\u0175\u017C\x056\x1C\x02\u0176" +
		"\u017C\x05n8\x02\u0177\u017C\x05,\x17\x02\u0178\u017C\x05*\x16\x02\u0179" +
		"\u017C\x050\x19\x02\u017A\u017C\x05\x9EP\x02\u017B\u0172\x03\x02\x02\x02" +
		"\u017B\u0173\x03\x02\x02\x02\u017B\u0174\x03\x02\x02\x02\u017B\u0175\x03" +
		"\x02\x02\x02\u017B\u0176\x03\x02\x02\x02\u017B\u0177\x03\x02\x02\x02\u017B" +
		"\u0178\x03\x02\x02\x02\u017B\u0179\x03\x02\x02\x02\u017B\u017A\x03\x02" +
		"\x02\x02\u017C\u017D\x03\x02\x02\x02\u017D\u017E\x07\v\x02\x02\u017E\u0186" +
		"\x03\x02\x02\x02\u017F\u0186\x07\v\x02\x02\u0180\u0186\x05\x04\x03\x02" +
		"\u0181\u0186\x05(\x15\x02\u0182\u0186\x052\x1A\x02\u0183\u0186\x05d3\x02" +
		"\u0184\u0186\x05:\x1E\x02\u0185\u017B\x03\x02\x02\x02\u0185\u017F\x03" +
		"\x02\x02\x02\u0185\u0180\x03\x02\x02\x02\u0185\u0181\x03\x02\x02\x02\u0185" +
		"\u0182\x03\x02\x02\x02\u0185\u0183\x03\x02\x02\x02\u0185\u0184\x03\x02" +
		"\x02\x02\u0186\u0188\x03\x02\x02\x02\u0187\u0189\x07u\x02\x02\u0188\u0187" +
		"\x03\x02\x02\x02\u0188\u0189\x03\x02\x02\x02\u0189\'\x03\x02\x02\x02\u018A" +
		"\u018E\x07\x06\x02\x02\u018B\u018D\x05&\x14\x02\u018C\u018B\x03\x02\x02" +
		"\x02\u018D\u0190\x03\x02\x02\x02\u018E\u018C\x03\x02\x02\x02\u018E\u018F" +
		"\x03\x02\x02\x02\u018F\u0191\x03\x02\x02\x02\u0190\u018E\x03\x02\x02\x02" +
		"\u0191\u0192\x07\x07\x02\x02\u0192)\x03\x02\x02\x02\u0193\u0194\x073\x02" +
		"\x02\u0194\u0195\x05\x9EP\x02\u0195+\x03\x02\x02\x02\u0196\u0197\x074" +
		"\x02\x02\u0197\u0198\x05\x9EP\x02\u0198-\x03\x02\x02\x02\u0199\u019A\x07" +
		"5\x02\x02\u019A\u019B\x05\x9EP\x02\u019B/\x03\x02\x02\x02\u019C\u019D" +
		"\x076\x02\x02\u019D\u019E\x05\x9EP\x02\u019E1\x03\x02\x02\x02\u019F\u01A4" +
		"\x07B\x02\x02\u01A0\u01A5\x058\x1D\x02\u01A1\u01A2\x05\x9EP\x02\u01A2" +
		"\u01A3\x07C\x02\x02\u01A3\u01A5\x03\x02\x02\x02\u01A4\u01A0\x03\x02\x02" +
		"\x02\u01A4\u01A1\x03\x02\x02\x02\u01A5\u01A6\x03\x02\x02\x02\u01A6\u01A8" +
		"\x05&\x14\x02\u01A7\u01A9\x054\x1B\x02\u01A8\u01A7\x03\x02\x02\x02\u01A8" +
		"\u01A9\x03\x02\x02\x02\u01A93\x03\x02\x02\x02\u01AA\u01AB\x07D\x02\x02" +
		"\u01AB\u01AC\x05&\x14\x02\u01AC5\x03\x02\x02\x02\u01AD\u01AF\x078\x02" +
		"\x02\u01AE\u01B0\x05\x9EP\x02\u01AF\u01AE\x03\x02\x02\x02\u01AF\u01B0" +
		"\x03\x02\x02\x02\u01B07\x03\x02\x02\x02\u01B1\u01B2\x07\x04\x02\x02\u01B2" +
		"\u01B3\x05\x9EP\x02\u01B3\u01B4\x07\x05\x02\x02\u01B49\x03\x02\x02\x02" +
		"\u01B5\u01B6\x07E\x02\x02\u01B6\u01B7\x058\x1D\x02\u01B7\u01BB\x07\x06" +
		"\x02\x02\u01B8\u01BA\x05<\x1F\x02\u01B9\u01B8\x03\x02\x02\x02\u01BA\u01BD" +
		"\x03\x02\x02\x02\u01BB\u01B9\x03\x02\x02\x02\u01BB\u01BC\x03\x02\x02\x02" +
		"\u01BC\u01BF\x03\x02\x02\x02\u01BD\u01BB\x03\x02\x02\x02\u01BE\u01C0\x05" +
		"> \x02\u01BF\u01BE\x03\x02\x02\x02\u01BF\u01C0\x03\x02\x02\x02\u01C0\u01C1" +
		"\x03\x02\x02\x02\u01C1\u01C2\x07\x07\x02\x02\u01C2;\x03\x02\x02\x02\u01C3" +
		"\u01C4\x07F\x02\x02\u01C4\u01C9\x05@!\x02\u01C5\u01C6\x07\n\x02\x02\u01C6" +
		"\u01C8\x05@!\x02\u01C7\u01C5\x03\x02\x02\x02\u01C8\u01CB\x03\x02\x02\x02" +
		"\u01C9\u01C7\x03\x02\x02\x02\u01C9\u01CA\x03\x02\x02\x02\u01CA\u01CC\x03" +
		"\x02\x02\x02\u01CB\u01C9\x03\x02\x02\x02\u01CC\u01CD\x07&\x02\x02\u01CD" +
		"\u01CE\x05&\x14\x02\u01CE=\x03\x02\x02\x02\u01CF\u01D0\x07G\x02\x02\u01D0" +
		"\u01D1\x07&\x02\x02\u01D1\u01D2\x05&\x14\x02\u01D2?\x03\x02\x02\x02\u01D3" +
		"\u01D6\x05p9\x02\u01D4\u01D6\x07n\x02\x02\u01D5\u01D3\x03\x02\x02\x02" +
		"\u01D5\u01D4\x03\x02\x02\x02\u01D6\u01D8\x03\x02\x02\x02\u01D7\u01D9\x05" +
		"B\"\x02\u01D8\u01D7\x03\x02\x02\x02\u01D8\u01D9\x03\x02\x02\x02\u01D9" +
		"A\x03\x02\x02\x02\u01DA\u01DB\x071\x02\x02\u01DB\u01DC\x05p9\x02\u01DC" +
		"C\x03\x02\x02\x02\u01DD\u01DE\x07\x06\x02\x02\u01DE\u01E3\x05F$\x02\u01DF" +
		"\u01E0\x07\n\x02\x02\u01E0\u01E2\x05F$\x02\u01E1\u01DF\x03\x02\x02\x02" +
		"\u01E2\u01E5\x03\x02\x02\x02\u01E3\u01E1\x03\x02\x02\x02\u01E3\u01E4\x03" +
		"\x02\x02\x02\u01E4\u01E6\x03\x02\x02\x02\u01E5\u01E3\x03\x02\x02\x02\u01E6" +
		"\u01E7\x07\x07\x02\x02\u01E7E\x03\x02\x02\x02\u01E8\u01EA\x05\x1A\x0E" +
		"\x02\u01E9\u01E8\x03\x02\x02\x02\u01E9\u01EA\x03\x02\x02\x02\u01EA\u01F4" +
		"\x03\x02\x02\x02\u01EB\u01ED\x07\x19\x02\x02\u01EC\u01EB\x03\x02\x02\x02" +
		"\u01EC\u01ED\x03\x02\x02\x02\u01ED\u01EE\x03\x02\x02\x02\u01EE\u01F5\x07" +
		"n\x02\x02\u01EF\u01F1\x07\x19\x02\x02\u01F0\u01EF\x03\x02\x02\x02\u01F0" +
		"\u01F1\x03\x02\x02\x02\u01F1\u01F2\x03\x02\x02\x02\u01F2\u01F5\x05R*\x02" +
		"\u01F3\u01F5\x05v<\x02\u01F4\u01EC\x03\x02\x02\x02\u01F4\u01F0\x03\x02" +
		"\x02\x02\u01F4\u01F3\x03\x02\x02\x02\u01F5\u01F8\x03\x02\x02\x02\u01F6" +
		"\u01F8\x05D#\x02\u01F7\u01E9\x03\x02\x02\x02\u01F7\u01F6\x03\x02\x02\x02" +
		"\u01F8G\x03\x02\x02\x02\u01F9\u01FA\t\x04\x02\x02\u01FAI\x03\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\u01FB\u01FD\x07;\x02\x02\u01FC\u01FB\x03\x02\x02\x02\u01FC\u01FD" +
		"\x03\x02\x02\x02\u01FD\u01FF\x03\x02\x02\x02\u01FE\u0200\x05N(\x02\u01FF" +
		"\u01FE\x03\x02\x02\x02\u01FF\u0200\x03\x02\x02\x02\u0200\u0203\x03\x02" +
		"\x02\x02\u0201\u0204\x05\x1C\x0F\x02\u0202\u0204\x05\x1A\x0E\x02\u0203" +
		"\u0201\x03\x02\x02\x02\u0203\u0202\x03\x02\x02\x02\u0203\u0204\x03\x02" +
		"\x02\x02\u0204\u0205\x03\x02\x02\x02\u0205\u0209\x07n\x02\x02\u0206\u0208" +
		"\x05 \x11\x02\u0207\u0206\x03\x02\x02\x02\u0208\u020B\x03\x02\x02\x02" +
		"\u0209\u0207\x03\x02\x02\x02\u0209\u020A\x03\x02\x02\x02\u020A\u0211\x03" +
		"\x02\x02\x02\u020B\u0209\x03\x02\x02\x02\u020C\u020F\x07\f\x02\x02\u020D" +
		"\u0210\x05\x9EP\x02\u020E\u0210\x05D#\x02\u020F\u020D\x03\x02\x02\x02" +
		"\u020F\u020E\x03\x02\x02\x02\u0210\u0212\x03\x02\x02\x02\u0211\u020C\x03" +
		"\x02\x02\x02\u0211\u0212\x03\x02\x02\x02\u0212K\x03\x02\x02\x02\u0213" +
		"\u0215\x07\n\x02\x02\u0214\u0213\x03\x02\x02\x02\u0214\u0215\x03\x02\x02" +
		"\x02\u0215\u0218\x03\x02\x02\x02\u0216\u0219\x05\x1C\x0F\x02\u0217\u0219" +
		"\x05\x1A\x0E\x02\u0218\u0216\x03\x02\x02\x02\u0218\u0217\x03\x02\x02\x02" +
		"\u0218\u0219\x03\x02\x02\x02\u0219\u021A\x03\x02\x02\x02\u021A\u021B\x07" +
		"2\x02\x02\u021BM\x03\x02\x02\x02\u021C\u021D\x07*\x02\x02\u021DO\x03\x02" +
		"\x02\x02\u021E\u021F\t\x05\x02\x02\u021FQ\x03\x02\x02\x02\u0220\u0226" +
		"\x05V,\x02\u0221\u0226\x05T+\x02\u0222\u0226\x05X-\x02\u0223\u0226\x05" +
		"Z.\x02\u0224\u0226\x05\\/\x02\u0225\u0220\x03\x02\x02\x02\u0225\u0221" +
		"\x03\x02\x02\x02\u0225\u0222\x03\x02\x02\x02\u0225\u0223\x03\x02\x02\x02" +
		"\u0225\u0224\x03\x02\x02\x02\u0226S\x03\x02\x02\x02\u0227\u0228\x07s\x02" +
		"\x02\u0228U\x03\x02\x02\x02\u0229\u022A\x07r\x02\x02\u022AW\x03\x02\x02" +
		"\x02\u022B\u022C\x07q\x02\x02\u022CY\x03\x02\x02\x02\u022D\u022E\x07t" +
		"\x02\x02\u022E[\x03\x02\x02\x02\u022F\u0230\x07p\x02\x02\u0230]\x03\x02" +
		"\x02\x02\u0231\u0236\x05`1\x02\u0232\u0236\x05b2\x02\u0233\u0236\x07\f" +
		"\x02\x02\u0234\u0236\x07-\x02\x02\u0235\u0231\x03\x02\x02\x02\u0235\u0232" +
		"\x03\x02\x02\x02\u0235\u0233\x03\x02\x02\x02\u0235\u0234\x03\x02\x02\x02" +
		"\u0236_\x03\x02\x02\x02\u0237\u0238\t\x06\x02\x02\u0238a\x03\x02\x02\x02" +
		"\u0239\u023A\t\x07\x02\x02\u023Ac\x03\x02\x02\x02\u023B\u023F\x05h5\x02" +
		"\u023C\u023F\x05f4\x02\u023D\u023F\x05j6\x02\u023E\u023B\x03\x02\x02\x02" +
		"\u023E\u023C\x03\x02\x02\x02\u023E\u023D\x03\x02\x02\x02\u023Fe\x03\x02" +
		"\x02\x02\u0240\u0241\x07J\x02\x02\u0241\u0244\x05&\x14\x02\u0242\u0243" +
		"\x07H\x02\x02\u0243\u0245\x058\x1D\x02\u0244\u0242\x03\x02\x02\x02\u0244" +
		"\u0245\x03\x02\x02\x02\u0245g\x03\x02\x02\x02\u0246\u0247\x07H\x02\x02" +
		"\u0247\u0248\x058\x1D\x02\u0248\u0249\x05&\x14\x02\u0249i\x03\x02\x02" +
		"\x02\u024A\u024B\x07I\x02\x02\u024B\u024D\x07\x04\x02\x02\u024C\u024E" +
		"\x05l7\x02\u024D\u024C\x03\x02\x02\x02\u024D\u024E\x03\x02\x02\x02\u024E" +
		"\u024F\x03\x02\x02\x02\u024F\u0251\x07\v\x02\x02\u0250\u0252\x05\x9EP" +
		"\x02\u0251\u0250\x03\x02\x02\x02\u0251\u0252\x03\x02\x02\x02\u0252\u0253" +
		"\x03\x02\x02\x02\u0253\u0255\x07\v\x02\x02\u0254\u0256\x05\x9EP\x02\u0255" +
		"\u0254\x03\x02\x02\x02\u0255\u0256\x03\x02\x02\x02\u0256\u0257\x03\x02" +
		"\x02\x02\u0257\u0258\x07\x05\x02\x02\u0258\u0259\x05&\x14\x02\u0259k\x03" +
		"\x02\x02\x02\u025A\u025D\x05\x0E\b\x02\u025B\u025D\x05\x9EP\x02\u025C" +
		"\u025A\x03\x02\x02\x02\u025C\u025B\x03\x02\x02\x02\u025Dm\x03\x02\x02" +
		"\x02\u025E\u025F\t\b\x02\x02\u025Fo\x03\x02\x02\x02\u0260\u0265\x05v<" +
		"\x02\u0261\u0265\x05R*\x02\u0262\u0265\x05r:\x02\u0263\u0265\x05t;\x02" +
		"\u0264\u0260\x03\x02\x02\x02\u0264\u0261\x03\x02\x02\x02\u0264\u0262\x03" +
		"\x02\x02\x02\u0264\u0263\x03\x02\x02\x02\u0265q\x03\x02\x02\x02\u0266" +
		"\u0267\t\t\x02\x02\u0267s\x03\x02\x02\x02\u0268\u0269\t\n\x02\x02\u0269" +
		"u\x03\x02\x02\x02\u026A\u026E\t\v\x02\x02\u026B\u026D\x05v<\x02\u026C" +
		"\u026B\x03\x02\x02\x02\u026D\u0270\x03\x02\x02\x02\u026E\u026C\x03\x02" +
		"\x02\x02\u026E\u026F\x03\x02\x02\x02\u026Fw\x03\x02\x02\x02\u0270\u026E" +
		"\x03\x02\x02\x02\u0271\u0272\x05z>\x02\u0272y\x03\x02\x02\x02\u0273\u0274" +
		"\x07x\x02\x02\u0274{\x03\x02\x02\x02\u0275\u027B\x05~@\x02\u0276\u0277" +
		"\x05H%\x02\u0277\u0278\x05~@\x02\u0278\u027A\x03\x02\x02\x02\u0279\u0276" +
		"\x03\x02\x02\x02\u027A\u027D\x03\x02\x02\x02\u027B\u0279\x03\x02\x02\x02" +
		"\u027B\u027C\x03\x02\x02\x02\u027C}\x03\x02\x02\x02\u027D\u027B\x03\x02" +
		"\x02\x02\u027E\u0284\x05\x80A\x02\u027F\u0280\x07%\x02\x02\u0280\u0281" +
		"\x05~@\x02\u0281\u0282\x07&\x02\x02\u0282\u0283\x05~@\x02\u0283\u0285" +
		"\x03\x02\x02\x02\u0284\u027F\x03\x02\x02\x02\u0284\u0285\x03\x02\x02\x02" +
		"\u0285\x7F\x03\x02\x02\x02\u0286\u028B\x05\x82B\x02\u0287\u0288\x07\'" +
		"\x02\x02\u0288\u028A\x05\x82B\x02\u0289\u0287\x03\x02\x02\x02\u028A\u028D" +
		"\x03\x02\x02\x02\u028B\u0289\x03\x02\x02\x02\u028B\u028C\x03\x02\x02\x02" +
		"\u028C\x81\x03\x02\x02\x02\u028D\u028B\x03\x02\x02\x02\u028E\u0293\x05" +
		"\x84C\x02\u028F\u0290\x07(\x02\x02\u0290\u0292\x05\x84C\x02\u0291\u028F" +
		"\x03\x02\x02\x02\u0292\u0295\x03\x02\x02\x02\u0293\u0291\x03\x02\x02\x02" +
		"\u0293\u0294\x03\x02\x02\x02\u0294\x83\x03\x02\x02\x02\u0295\u0293\x03" +
		"\x02\x02\x02\u0296\u029B\x05\x86D\x02\u0297\u0298\t\f\x02\x02\u0298\u029A" +
		"\x05\x86D\x02\u0299\u0297\x03\x02\x02\x02\u029A\u029D\x03\x02\x02\x02" +
		"\u029B\u0299\x03\x02\x02\x02\u029B\u029C\x03\x02\x02\x02\u029C\x85\x03" +
		"\x02\x02\x02\u029D\u029B\x03\x02\x02\x02\u029E\u02A3\x05\x88E\x02\u029F" +
		"\u02A0\t\r\x02\x02\u02A0\u02A2\x05\x88E\x02\u02A1\u029F\x03\x02\x02\x02" +
		"\u02A2\u02A5\x03\x02\x02\x02\u02A3\u02A1\x03\x02\x02\x02\u02A3\u02A4\x03" +
		"\x02\x02\x02\u02A4\x87\x03\x02\x02\x02\u02A5\u02A3\x03\x02\x02\x02\u02A6" +
		"\u02AB\x05\x8AF\x02\u02A7\u02A8\x07+\x02\x02\u02A8\u02AA\x05\x8AF\x02" +
		"\u02A9\u02A7\x03\x02\x02\x02\u02AA\u02AD\x03\x02\x02\x02\u02AB\u02A9\x03" +
		"\x02\x02\x02\u02AB\u02AC\x03\x02\x02\x02\u02AC\x89\x03\x02\x02\x02\u02AD" +
		"\u02AB\x03\x02\x02\x02\u02AE\u02B3\x05\x8CG\x02\u02AF\u02B0\x07,\x02\x02" +
		"\u02B0\u02B2\x05\x8CG\x02\u02B1\u02AF\x03\x02\x02\x02\u02B2\u02B5\x03" +
		"\x02\x02\x02\u02B3\u02B1\x03\x02\x02\x02\u02B3\u02B4\x03\x02\x02\x02\u02B4" +
		"\x8B\x03\x02\x02\x02\u02B5\u02B3\x03\x02\x02\x02\u02B6\u02BB\x05\x8EH" +
		"\x02\u02B7\u02B8\x07*\x02\x02\u02B8\u02BA\x05\x8EH\x02\u02B9\u02B7\x03" +
		"\x02\x02\x02\u02BA\u02BD\x03\x02\x02\x02\u02BB\u02B9\x03\x02\x02\x02\u02BB" +
		"\u02BC\x03\x02\x02\x02\u02BC\x8D\x03\x02\x02\x02\u02BD\u02BB\x03\x02\x02" +
		"\x02\u02BE\u02C3\x05\x90I\x02\u02BF\u02C0\t\x0E\x02\x02\u02C0\u02C2\x05" +
		"\x90I\x02\u02C1\u02BF\x03\x02\x02\x02\u02C2\u02C5\x03\x02\x02\x02\u02C3" +
		"\u02C1\x03\x02\x02\x02\u02C3\u02C4\x03\x02\x02\x02\u02C4\x8F\x03\x02\x02" +
		"\x02\u02C5\u02C3\x03\x02\x02\x02\u02C6\u02CB\x05\x92J\x02\u02C7\u02C8" +
		"\t\x0F\x02\x02\u02C8\u02CA\x05\x92J\x02\u02C9\u02C7\x03\x02\x02\x02\u02CA" +
		"\u02CD\x03\x02\x02\x02\u02CB\u02C9\x03\x02\x02\x02\u02CB\u02CC\x03\x02" +
		"\x02\x02\u02CC\x91\x03\x02\x02\x02\u02CD\u02CB\x03\x02\x02\x02\u02CE\u02D3" +
		"\x05\x94K\x02\u02CF\u02D0\t\x10\x02\x02\u02D0\u02D2\x05\x94K\x02\u02D1" +
		"\u02CF\x03\x02\x02\x02\u02D2\u02D5\x03\x02\x02\x02\u02D3\u02D1\x03\x02" +
		"\x02\x02\u02D3\u02D4\x03\x02\x02\x02\u02D4\x93\x03\x02\x02\x02\u02D5\u02D3" +
		"\x03\x02\x02\x02\u02D6\u02DD\x07\x1D\x02\x02\u02D7\u02DD\x07\x1E\x02\x02" +
		"\u02D8\u02DD\x07-\x02\x02\u02D9\u02DD\x07)\x02\x02\u02DA\u02DD\x07\x19" +
		"\x02\x02\u02DB\u02DD\x05\x1A\x0E\x02\u02DC\u02D6\x03\x02\x02\x02\u02DC" +
		"\u02D7\x03\x02\x02\x02\u02DC\u02D8\x03\x02\x02\x02\u02DC\u02D9\x03\x02" +
		"\x02\x02\u02DC\u02DA\x03\x02\x02\x02\u02DC\u02DB\x03\x02\x02\x02\u02DD" +
		"\u02DE\x03\x02\x02\x02\u02DE\u02E9\x05\x94K\x02\u02DF\u02E5\t\x11\x02" +
		"\x02\u02E0\u02E6\x05\x9CO\x02\u02E1\u02E2\x07\x04\x02\x02\u02E2\u02E3" +
		"\x05\x9CO\x02\u02E3\u02E4\x07\x05\x02\x02\u02E4\u02E6\x03\x02\x02\x02" +
		"\u02E5\u02E0\x03\x02\x02\x02\u02E5\u02E1\x03\x02\x02\x02\u02E6\u02E9\x03" +
		"\x02\x02\x02\u02E7\u02E9\x05\x96L\x02\u02E8\u02DC\x03\x02\x02\x02\u02E8" +
		"\u02DF\x03\x02\x02\x02\u02E8\u02E7\x03\x02\x02\x02\u02E9\x95\x03\x02\x02" +
		"\x02\u02EA\u02EE\x05\x98M\x02\u02EB\u02ED\t\x12\x02\x02\u02EC\u02EB\x03" +
		"\x02\x02\x02\u02ED\u02F0\x03\x02\x02\x02\u02EE\u02EC\x03\x02\x02\x02\u02EE" +
		"\u02EF\x03\x02\x02\x02\u02EF\x97\x03\x02\x02\x02\u02F0\u02EE\x03\x02\x02" +
		"\x02\u02F1\u02FC\x05\x9AN\x02\u02F2\u02F3\x07\b\x02\x02\u02F3\u02F4\x05" +
		"|?\x02\u02F4\u02F5\x07\t\x02\x02\u02F5\u02FB\x03\x02\x02\x02\u02F6\u02F7" +
		"\x07\x06\x02\x02\u02F7\u02F8\x05|?\x02\u02F8\u02F9\x07\x07\x02\x02\u02F9" +
		"\u02FB\x03\x02\x02\x02\u02FA\u02F2\x03\x02\x02\x02\u02FA\u02F6\x03\x02" +
		"\x02\x02\u02FB\u02FE\x03\x02\x02\x02\u02FC\u02FA\x03\x02\x02\x02\u02FC" +
		"\u02FD\x03\x02\x02\x02\u02FD\u0300\x03\x02\x02\x02\u02FE\u02FC\x03\x02" +
		"\x02\x02\u02FF\u0301\x05\xA0Q\x02\u0300\u02FF\x03\x02\x02\x02\u0300\u0301" +
		"\x03\x02\x02\x02\u0301\x99\x03\x02\x02\x02\u0302\u0303\x07\x04\x02\x02" +
		"\u0303\u0308\x05|?\x02\u0304\u0305\x07\n\x02\x02\u0305\u0307\x05|?\x02" +
		"\u0306\u0304\x03\x02\x02\x02\u0307\u030A\x03\x02\x02\x02\u0308\u0306\x03" +
		"\x02\x02\x02\u0308\u0309\x03\x02\x02\x02\u0309\u030B\x03\x02\x02\x02\u030A" +
		"\u0308\x03\x02\x02\x02\u030B\u030C\x07\x05\x02\x02\u030C\u030F\x03\x02" +
		"\x02\x02\u030D\u030F\x05\x9CO\x02\u030E\u0302\x03\x02\x02\x02\u030E\u030D" +
		"\x03\x02\x02\x02\u030F\x9B\x03\x02\x02\x02\u0310\u0313\x05\xA4S\x02\u0311" +
		"\u0313\x05p9\x02\u0312\u0310\x03\x02\x02\x02\u0312\u0311\x03\x02\x02\x02" +
		"\u0313\x9D\x03\x02\x02\x02\u0314\u0315\x05|?\x02\u0315\x9F\x03\x02\x02" +
		"\x02\u0316\u031F\x07\x04\x02\x02\u0317\u031C\x05\xA2R\x02\u0318\u0319" +
		"\x07\n\x02\x02\u0319\u031B\x05\xA2R\x02\u031A\u0318\x03\x02\x02\x02\u031B" +
		"\u031E\x03\x02\x02\x02\u031C\u031A\x03\x02\x02\x02\u031C\u031D\x03\x02" +
		"\x02\x02\u031D\u0320\x03\x02\x02\x02\u031E\u031C\x03\x02\x02\x02\u031F" +
		"\u0317\x03\x02\x02\x02\u031F\u0320\x03\x02\x02\x02\u0320\u0321\x03\x02" +
		"\x02\x02\u0321\u0322\x07\x05\x02\x02\u0322\xA1\x03\x02\x02\x02\u0323\u032C" +
		"\x07o\x02\x02\u0324\u0325\x07\x03\x02\x02\u0325\u0326\x05\xA4S\x02\u0326" +
		"\u0327\x07\f\x02\x02\u0327\u0329\x03\x02\x02\x02\u0328\u0324\x03\x02\x02" +
		"\x02\u0328\u0329\x03\x02\x02\x02\u0329\u032A\x03\x02\x02\x02\u032A\u032C" +
		"\x05\x9EP\x02\u032B\u0323\x03\x02\x02\x02\u032B\u0328\x03\x02\x02\x02" +
		"\u032C\xA3\x03\x02\x02\x02\u032D\u032E\x07n\x02\x02\u032E\xA5\x03\x02" +
		"\x02\x02g\xAA\xB0\xB4\xBC\xC4\xC7\xCA\xCE\xD1\xD4\xDC\xE0\xE2\xE6\xEB" +
		"\xF6\xFC\xFE\u0102\u0107\u010B\u0112\u0115\u0118\u011E\u0121\u012D\u0130" +
		"\u0133\u0139\u0148\u0150\u0156\u015C\u015E\u0164\u0166\u0169\u016E\u017B" +
		"\u0185\u0188\u018E\u01A4\u01A8\u01AF\u01BB\u01BF\u01C9\u01D5\u01D8\u01E3" +
		"\u01E9\u01EC\u01F0\u01F4\u01F7\u01FC\u01FF\u0203\u0209\u020F\u0211\u0214" +
		"\u0218\u0225\u0235\u023E\u0244\u024D\u0251\u0255\u025C\u0264\u026E\u027B" +
		"\u0284\u028B\u0293\u029B\u02A3\u02AB\u02B3\u02BB\u02C3\u02CB\u02D3\u02DC" +
		"\u02E5\u02E8\u02EE\u02FA\u02FC\u0300\u0308\u030E\u0312\u031C\u031F\u0328" +
		"\u032B";
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


export class VarDeclarationContext extends ParserRuleContext {
	public NEW(): TerminalNode | undefined { return this.tryGetToken(pawnParser.NEW, 0); }
	public variable(): VariableContext[];
	public variable(i: number): VariableContext;
	public variable(i?: number): VariableContext | VariableContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableContext);
		} else {
			return this.getRuleContext(i, VariableContext);
		}
	}
	public varInit(): VarInitContext[];
	public varInit(i: number): VarInitContext;
	public varInit(i?: number): VarInitContext | VarInitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VarInitContext);
		} else {
			return this.getRuleContext(i, VarInitContext);
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


export class VarInitContext extends ParserRuleContext {
	public variable(): VariableContext {
		return this.getRuleContext(0, VariableContext);
	}
	public ASSIGMENT(): TerminalNode { return this.getToken(pawnParser.ASSIGMENT, 0); }
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
	public get ruleIndex(): number { return pawnParser.RULE_varInit; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterVarInit) {
			listener.enterVarInit(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitVarInit) {
			listener.exitVarInit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitVarInit) {
			return visitor.visitVarInit(this);
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
	public expresion(): ExpresionContext | undefined {
		return this.tryGetRuleContext(0, ExpresionContext);
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
	public expresion(): ExpresionContext {
		return this.getRuleContext(0, ExpresionContext);
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
	public expresion(): ExpresionContext {
		return this.getRuleContext(0, ExpresionContext);
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
	public expresion(): ExpresionContext {
		return this.getRuleContext(0, ExpresionContext);
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
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(pawnParser.IDENTIFIER, 0); }
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
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
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
	public _third!: ExpresionContext;
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
	public expresion(): ExpresionContext[];
	public expresion(i: number): ExpresionContext;
	public expresion(i?: number): ExpresionContext | ExpresionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpresionContext);
		} else {
			return this.getRuleContext(i, ExpresionContext);
		}
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
	public expresion(): ExpresionContext | undefined {
		return this.tryGetRuleContext(0, ExpresionContext);
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


