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

import { IPawnListener } from "./pawnListener";
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
	public static readonly THEN = 64;
	public static readonly ELSE = 65;
	public static readonly SWITCH = 66;
	public static readonly CASE = 67;
	public static readonly DEFAULT = 68;
	public static readonly WHILE = 69;
	public static readonly FOR = 70;
	public static readonly DO = 71;
	public static readonly CONTINUE = 72;
	public static readonly BREAK = 73;
	public static readonly CHAR = 74;
	public static readonly DEFINED = 75;
	public static readonly SIZEOF = 76;
	public static readonly TAGOF = 77;
	public static readonly DEFINE = 78;
	public static readonly ELSEIF = 79;
	public static readonly EMIT = 80;
	public static readonly ENDIF = 81;
	public static readonly ENDINPUT = 82;
	public static readonly ENDSCRIPT = 83;
	public static readonly FILE = 84;
	public static readonly INCLUDE = 85;
	public static readonly PRAGMA = 86;
	public static readonly SECTION = 87;
	public static readonly TRYINCLUDE = 88;
	public static readonly UNDEF = 89;
	public static readonly DYNAMIC = 90;
	public static readonly WARNING = 91;
	public static readonly TRUE = 92;
	public static readonly FALSE = 93;
	public static readonly CELLBITS = 94;
	public static readonly CELLMAX = 95;
	public static readonly CELLMIN = 96;
	public static readonly CHARBITS = 97;
	public static readonly CHARMAX = 98;
	public static readonly CHARMIN = 99;
	public static readonly DEBUG = 100;
	public static readonly LINE = 101;
	public static readonly PAWN = 102;
	public static readonly UCHARMAX = 103;
	public static readonly SHARPSTRING = 104;
	public static readonly STRING = 105;
	public static readonly CHAR_STRING = 106;
	public static readonly IDENTIFIER = 107;
	public static readonly BINARY = 108;
	public static readonly HEX = 109;
	public static readonly INTEGER = 110;
	public static readonly FLOAT = 111;
	public static readonly RATIONAL = 112;
	public static readonly BACKSLAH = 113;
	public static readonly Whitespace = 114;
	public static readonly Newline = 115;
	public static readonly DocBlock = 116;
	public static readonly BlockComment = 117;
	public static readonly LineComment = 118;
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
	public static readonly RULE_variable = 13;
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
	public static readonly RULE_range = 31;
	public static readonly RULE_arrayInit = 32;
	public static readonly RULE_arrayInitMember = 33;
	public static readonly RULE_assigments = 34;
	public static readonly RULE_declParams = 35;
	public static readonly RULE_ellipse = 36;
	public static readonly RULE_reference = 37;
	public static readonly RULE_varModifires = 38;
	public static readonly RULE_number = 39;
	public static readonly RULE_float = 40;
	public static readonly RULE_integer = 41;
	public static readonly RULE_hex = 42;
	public static readonly RULE_rational = 43;
	public static readonly RULE_binary = 44;
	public static readonly RULE_canBeOverloaded = 45;
	public static readonly RULE_arefmeticOperator = 46;
	public static readonly RULE_compareOperator = 47;
	public static readonly RULE_cycles = 48;
	public static readonly RULE_do = 49;
	public static readonly RULE_while = 50;
	public static readonly RULE_for = 51;
	public static readonly RULE_forFirstExp = 52;
	public static readonly RULE_cycleKeywords = 53;
	public static readonly RULE_literal = 54;
	public static readonly RULE_bool_const = 55;
	public static readonly RULE_predefinedConstants = 56;
	public static readonly RULE_string = 57;
	public static readonly RULE_docs = 58;
	public static readonly RULE_docBlock = 59;
	public static readonly RULE_expresion = 60;
	public static readonly RULE_tagableExpression = 61;
	public static readonly RULE_ternarOperator = 62;
	public static readonly RULE_chainedRelationalOperator = 63;
	public static readonly RULE_binarExpressionOperator = 64;
	public static readonly RULE_unarOperator = 65;
	public static readonly RULE_preExpresionOperator = 66;
	public static readonly RULE_preSymbolOperator = 67;
	public static readonly RULE_binarOperator = 68;
	public static readonly RULE_arrayIndexOperator = 69;
	public static readonly RULE_binarExpressionOperators = 70;
	public static readonly RULE_assigmentOperator = 71;
	public static readonly RULE_arrayOperatorIndex = 72;
	public static readonly RULE_arrayOperatorChar = 73;
	public static readonly RULE_functionCallOperator = 74;
	public static readonly RULE_tagOperator = 75;
	public static readonly RULE_symbol = 76;
	public static readonly RULE_lvalue = 77;
	public static readonly RULE_postIncrement = 78;
	public static readonly RULE_preIncrement = 79;
	public static readonly RULE_postDecrement = 80;
	public static readonly RULE_preDecrement = 81;
	public static readonly RULE_chainedRelationalOperators = 82;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"file", "processorLabel", "declaration", "enum", "enumMember", "enumIterator", 
		"varDeclaration", "varInit", "functionDecl", "operatorOverload", "functionDeclarationParams", 
		"nativeAssigment", "tag", "variable", "arrayIndex", "funcDeclModif", "funcModif", 
		"statement", "compoundStatment", "assert", "exit", "goto", "sleep", "ifStatement", 
		"elseStatement", "return", "condition", "switch", "case", "default", "case_list", 
		"range", "arrayInit", "arrayInitMember", "assigments", "declParams", "ellipse", 
		"reference", "varModifires", "number", "float", "integer", "hex", "rational", 
		"binary", "canBeOverloaded", "arefmeticOperator", "compareOperator", "cycles", 
		"do", "while", "for", "forFirstExp", "cycleKeywords", "literal", "bool_const", 
		"predefinedConstants", "string", "docs", "docBlock", "expresion", "tagableExpression", 
		"ternarOperator", "chainedRelationalOperator", "binarExpressionOperator", 
		"unarOperator", "preExpresionOperator", "preSymbolOperator", "binarOperator", 
		"arrayIndexOperator", "binarExpressionOperators", "assigmentOperator", 
		"arrayOperatorIndex", "arrayOperatorChar", "functionCallOperator", "tagOperator", 
		"symbol", "lvalue", "postIncrement", "preIncrement", "postDecrement", 
		"preDecrement", "chainedRelationalOperators",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'", "'{'", "'}'", "'['", "']'", "','", "';'", "'='", 
		"'+='", "'-='", "'*='", "'/='", "'%='", "'&='", "'|='", "'^='", "'>>='", 
		"'>>>='", "'<<='", "'+'", "'-'", "'*'", "'/'", "'%'", "'++'", "'--'", 
		"'=='", "'!='", "'<'", "'>'", "'<='", "'>='", "'?'", "':'", "'||'", "'&&'", 
		"'!'", "'&'", "'|'", "'^'", "'~'", "'>>'", "'<<'", "'>>>'", "'..'", "'...'", 
		"'assert'", "'exit'", "'goto'", "'sleep'", "'state'", "'return'", "'new'", 
		"'enum'", "'const'", "'static'", "'stock'", "'forward'", "'native'", "'public'", 
		"'operator'", "'if'", "'*then'", "'else'", "'switch'", "'case'", "'default'", 
		"'while'", "'for'", "'do'", "'continue'", "'break'", "'char'", "'defined'", 
		"'sizeof'", "'tagof'", "'define'", "'elseif'", "'emit'", "'endif'", "'endinput'", 
		"'endscript'", "'file'", "'include'", "'pragma'", "'section'", "'tryinclude'", 
		"'undef'", "'dynamic'", "'warning'", "'true'", "'false'", "'cellbits'", 
		"'cellmax'", "'cellmin'", "'charbits'", "'charmax'", "'charmin'", "'debug'", 
		"'__line'", "'__Pawn'", "'ucharmax'", undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "'\\'",
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
		"STOCK", "FORWARD", "NATIVE", "PUBLIC", "OPERATOR", "IF", "THEN", "ELSE", 
		"SWITCH", "CASE", "DEFAULT", "WHILE", "FOR", "DO", "CONTINUE", "BREAK", 
		"CHAR", "DEFINED", "SIZEOF", "TAGOF", "DEFINE", "ELSEIF", "EMIT", "ENDIF", 
		"ENDINPUT", "ENDSCRIPT", "FILE", "INCLUDE", "PRAGMA", "SECTION", "TRYINCLUDE", 
		"UNDEF", "DYNAMIC", "WARNING", "TRUE", "FALSE", "CELLBITS", "CELLMAX", 
		"CELLMIN", "CHARBITS", "CHARMAX", "CHARMIN", "DEBUG", "LINE", "PAWN", 
		"UCHARMAX", "SHARPSTRING", "STRING", "CHAR_STRING", "IDENTIFIER", "BINARY", 
		"HEX", "INTEGER", "FLOAT", "RATIONAL", "BACKSLAH", "Whitespace", "Newline", 
		"DocBlock", "BlockComment", "LineComment",
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
			this.state = 180;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 166;
				this.processorLabel();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 170;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 167;
						this.docs();
						}
						}
					}
					this.state = 172;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
				}
				this.state = 176;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === pawnParser.CURLY_OPEN_BRACKET || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (pawnParser.NEW - 54)) | (1 << (pawnParser.ENUM - 54)) | (1 << (pawnParser.CONST - 54)) | (1 << (pawnParser.STATIC - 54)) | (1 << (pawnParser.STOCK - 54)) | (1 << (pawnParser.FORWARD - 54)) | (1 << (pawnParser.NATIVE - 54)) | (1 << (pawnParser.PUBLIC - 54)))) !== 0) || _la === pawnParser.IDENTIFIER || _la === pawnParser.DocBlock) {
					{
					{
					this.state = 173;
					this.declaration();
					}
					}
					this.state = 178;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				this.state = 179;
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
			this.state = 182;
			this.match(pawnParser.IDENTIFIER);
			this.state = 183;
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
			this.state = 199;
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
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 188;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === pawnParser.DocBlock) {
					{
					{
					this.state = 185;
					this.docs();
					}
					}
					this.state = 190;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 196;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
				case 1:
					{
					this.state = 191;
					this.functionDecl();
					}
					break;

				case 2:
					{
					this.state = 192;
					this.operatorOverload();
					}
					break;

				case 3:
					{
					this.state = 193;
					this.varDeclaration();
					this.state = 194;
					this.match(pawnParser.SEMI);
					}
					break;
				}
				}
				break;
			case pawnParser.ENUM:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 198;
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
		this.enterRule(_localctx, 6, pawnParser.RULE_enum);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 201;
			this.match(pawnParser.ENUM);
			this.state = 203;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.IDENTIFIER) {
				{
				this.state = 202;
				this.match(pawnParser.IDENTIFIER);
				}
			}

			this.state = 206;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.OPEN_PARENTHESIS) {
				{
				this.state = 205;
				this.enumIterator();
				}
			}

			this.state = 208;
			this.match(pawnParser.CURLY_OPEN_BRACKET);
			this.state = 220;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.CURLY_OPEN_BRACKET || _la === pawnParser.IDENTIFIER) {
				{
				this.state = 209;
				this.enumMember();
				this.state = 214;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 210;
						this.match(pawnParser.COMA);
						this.state = 211;
						this.enumMember();
						}
						}
					}
					this.state = 216;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
				}
				this.state = 218;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === pawnParser.COMA) {
					{
					this.state = 217;
					this.match(pawnParser.COMA);
					}
				}

				}
			}

			this.state = 222;
			this.match(pawnParser.CURLY_CLOSE_BRACKET);
			this.state = 224;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.SEMI) {
				{
				this.state = 223;
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
		this.enterRule(_localctx, 8, pawnParser.RULE_enumMember);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 226;
			this.variable();
			this.state = 229;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.ASSIGMENT) {
				{
				this.state = 227;
				this.match(pawnParser.ASSIGMENT);
				this.state = 228;
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
			this.state = 231;
			this.match(pawnParser.OPEN_PARENTHESIS);
			this.state = 232;
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
			this.state = 233;
			this.match(pawnParser.INTEGER);
			this.state = 234;
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
			this.state = 248;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.NEW:
				{
				this.state = 236;
				this.match(pawnParser.NEW);
				this.state = 240;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (pawnParser.CONST - 56)) | (1 << (pawnParser.STATIC - 56)) | (1 << (pawnParser.STOCK - 56)) | (1 << (pawnParser.PUBLIC - 56)))) !== 0)) {
					{
					{
					this.state = 237;
					this.varModifires();
					}
					}
					this.state = 242;
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
				this.state = 244;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 243;
					this.varModifires();
					}
					}
					this.state = 246;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (pawnParser.CONST - 56)) | (1 << (pawnParser.STATIC - 56)) | (1 << (pawnParser.STOCK - 56)) | (1 << (pawnParser.PUBLIC - 56)))) !== 0));
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 252;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 250;
				this.variable();
				}
				break;

			case 2:
				{
				this.state = 251;
				this.varInit();
				}
				break;
			}
			this.state = 261;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pawnParser.COMA) {
				{
				{
				this.state = 254;
				this.match(pawnParser.COMA);
				this.state = 257;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
				case 1:
					{
					this.state = 255;
					this.variable();
					}
					break;

				case 2:
					{
					this.state = 256;
					this.varInit();
					}
					break;
				}
				}
				}
				this.state = 263;
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
			this.state = 264;
			this.variable();
			this.state = 265;
			this.match(pawnParser.ASSIGMENT);
			this.state = 268;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				{
				this.state = 266;
				this.expresion();
				}
				break;

			case 2:
				{
				this.state = 267;
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
	public functionDecl(): FunctionDeclContext {
		let _localctx: FunctionDeclContext = new FunctionDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, pawnParser.RULE_functionDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 271;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (pawnParser.STOCK - 58)) | (1 << (pawnParser.FORWARD - 58)) | (1 << (pawnParser.NATIVE - 58)) | (1 << (pawnParser.PUBLIC - 58)))) !== 0)) {
				{
				this.state = 270;
				this.funcDeclModif();
				}
			}

			this.state = 274;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				{
				this.state = 273;
				this.tag();
				}
				break;
			}
			this.state = 276;
			this.match(pawnParser.IDENTIFIER);
			this.state = 277;
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
			{
			this.state = 279;
			this.funcDeclModif();
			}
			this.state = 281;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.CURLY_OPEN_BRACKET || _la === pawnParser.IDENTIFIER) {
				{
				this.state = 280;
				this.tag();
				}
			}

			this.state = 283;
			this.match(pawnParser.OPERATOR);
			this.state = 284;
			this.canBeOverloaded();
			this.state = 285;
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
			this.state = 287;
			this.match(pawnParser.OPEN_PARENTHESIS);
			this.state = 296;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				{
				this.state = 288;
				this.declParams();
				this.state = 293;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 289;
						this.match(pawnParser.COMA);
						this.state = 290;
						this.declParams();
						}
						}
					}
					this.state = 295;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
				}
				}
				break;
			}
			this.state = 299;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.CURLY_OPEN_BRACKET || _la === pawnParser.COMA || _la === pawnParser.PERIOD_FUNC || _la === pawnParser.IDENTIFIER) {
				{
				this.state = 298;
				this.ellipse();
				}
			}

			this.state = 301;
			this.match(pawnParser.CLOSE_PARENTHESIS);
			this.state = 305;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.SEMI:
				{
				this.state = 302;
				this.match(pawnParser.SEMI);
				}
				break;
			case pawnParser.OPEN_PARENTHESIS:
			case pawnParser.CURLY_OPEN_BRACKET:
			case pawnParser.MINUS:
			case pawnParser.INCREMENTS:
			case pawnParser.DECREMENTS:
			case pawnParser.NOT:
			case pawnParser.BIT_COMPLEMEN:
			case pawnParser.ASSERT:
			case pawnParser.EXIT:
			case pawnParser.GOTO:
			case pawnParser.SLEEP:
			case pawnParser.STATE:
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
			case pawnParser.CONTINUE:
			case pawnParser.BREAK:
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
				this.state = 303;
				this.statement();
				}
				break;
			case pawnParser.ASSIGMENT:
				{
				this.state = 304;
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
		this.enterRule(_localctx, 22, pawnParser.RULE_nativeAssigment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 307;
			this.match(pawnParser.ASSIGMENT);
			this.state = 308;
			this.match(pawnParser.IDENTIFIER);
			this.state = 309;
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 322;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.IDENTIFIER:
				{
				this.state = 311;
				this.match(pawnParser.IDENTIFIER);
				}
				break;
			case pawnParser.CURLY_OPEN_BRACKET:
				{
				{
				this.state = 312;
				this.match(pawnParser.CURLY_OPEN_BRACKET);
				this.state = 313;
				this.match(pawnParser.IDENTIFIER);
				this.state = 318;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === pawnParser.COMA) {
					{
					{
					this.state = 314;
					this.match(pawnParser.COMA);
					this.state = 315;
					this.match(pawnParser.IDENTIFIER);
					}
					}
					this.state = 320;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 321;
				this.match(pawnParser.CURLY_CLOSE_BRACKET);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 324;
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
		this.enterRule(_localctx, 26, pawnParser.RULE_variable);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 327;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				{
				this.state = 326;
				this.tag();
				}
				break;
			}
			this.state = 329;
			this.match(pawnParser.IDENTIFIER);
			this.state = 333;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 330;
					this.arrayIndex();
					}
					}
				}
				this.state = 335;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
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
		this.enterRule(_localctx, 28, pawnParser.RULE_arrayIndex);
		let _la: number;
		try {
			this.state = 352;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.SQUARE_OPEN_BRACKET:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 336;
				this.match(pawnParser.SQUARE_OPEN_BRACKET);
				this.state = 341;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.OPEN_PARENTHESIS) | (1 << pawnParser.CURLY_OPEN_BRACKET) | (1 << pawnParser.MINUS) | (1 << pawnParser.INCREMENTS) | (1 << pawnParser.DECREMENTS))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (pawnParser.NOT - 38)) | (1 << (pawnParser.BIT_COMPLEMEN - 38)) | (1 << (pawnParser.STATE - 38)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (pawnParser.DEFINED - 75)) | (1 << (pawnParser.SIZEOF - 75)) | (1 << (pawnParser.TAGOF - 75)) | (1 << (pawnParser.TRUE - 75)) | (1 << (pawnParser.FALSE - 75)) | (1 << (pawnParser.CELLBITS - 75)) | (1 << (pawnParser.CELLMAX - 75)) | (1 << (pawnParser.CELLMIN - 75)) | (1 << (pawnParser.CHARBITS - 75)) | (1 << (pawnParser.CHARMAX - 75)) | (1 << (pawnParser.CHARMIN - 75)) | (1 << (pawnParser.DEBUG - 75)) | (1 << (pawnParser.LINE - 75)) | (1 << (pawnParser.PAWN - 75)) | (1 << (pawnParser.UCHARMAX - 75)) | (1 << (pawnParser.SHARPSTRING - 75)) | (1 << (pawnParser.STRING - 75)) | (1 << (pawnParser.CHAR_STRING - 75)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (pawnParser.IDENTIFIER - 107)) | (1 << (pawnParser.BINARY - 107)) | (1 << (pawnParser.HEX - 107)) | (1 << (pawnParser.INTEGER - 107)) | (1 << (pawnParser.FLOAT - 107)) | (1 << (pawnParser.RATIONAL - 107)))) !== 0)) {
					{
					this.state = 337;
					this.expresion();
					this.state = 339;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === pawnParser.CHAR) {
						{
						this.state = 338;
						this.match(pawnParser.CHAR);
						}
					}

					}
				}

				this.state = 343;
				this.match(pawnParser.SQUARE_CLOSE_BRACKET);
				}
				}
				break;
			case pawnParser.CURLY_OPEN_BRACKET:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 344;
				this.match(pawnParser.CURLY_OPEN_BRACKET);
				this.state = 349;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.OPEN_PARENTHESIS) | (1 << pawnParser.CURLY_OPEN_BRACKET) | (1 << pawnParser.MINUS) | (1 << pawnParser.INCREMENTS) | (1 << pawnParser.DECREMENTS))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (pawnParser.NOT - 38)) | (1 << (pawnParser.BIT_COMPLEMEN - 38)) | (1 << (pawnParser.STATE - 38)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (pawnParser.DEFINED - 75)) | (1 << (pawnParser.SIZEOF - 75)) | (1 << (pawnParser.TAGOF - 75)) | (1 << (pawnParser.TRUE - 75)) | (1 << (pawnParser.FALSE - 75)) | (1 << (pawnParser.CELLBITS - 75)) | (1 << (pawnParser.CELLMAX - 75)) | (1 << (pawnParser.CELLMIN - 75)) | (1 << (pawnParser.CHARBITS - 75)) | (1 << (pawnParser.CHARMAX - 75)) | (1 << (pawnParser.CHARMIN - 75)) | (1 << (pawnParser.DEBUG - 75)) | (1 << (pawnParser.LINE - 75)) | (1 << (pawnParser.PAWN - 75)) | (1 << (pawnParser.UCHARMAX - 75)) | (1 << (pawnParser.SHARPSTRING - 75)) | (1 << (pawnParser.STRING - 75)) | (1 << (pawnParser.CHAR_STRING - 75)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (pawnParser.IDENTIFIER - 107)) | (1 << (pawnParser.BINARY - 107)) | (1 << (pawnParser.HEX - 107)) | (1 << (pawnParser.INTEGER - 107)) | (1 << (pawnParser.FLOAT - 107)) | (1 << (pawnParser.RATIONAL - 107)))) !== 0)) {
					{
					this.state = 345;
					this.expresion();
					this.state = 347;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === pawnParser.CHAR) {
						{
						this.state = 346;
						this.match(pawnParser.CHAR);
						}
					}

					}
				}

				this.state = 351;
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
			this.state = 357;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.STOCK:
			case pawnParser.PUBLIC:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 354;
				this.funcModif();
				}
				break;
			case pawnParser.FORWARD:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 355;
				this.match(pawnParser.FORWARD);
				}
				break;
			case pawnParser.NATIVE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 356;
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
			this.state = 359;
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
			this.state = 378;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				{
				this.state = 369;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case pawnParser.OPEN_PARENTHESIS:
				case pawnParser.CURLY_OPEN_BRACKET:
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
					this.state = 361;
					this.expresion();
					}
					break;
				case pawnParser.ASSERT:
					{
					this.state = 362;
					this.assert();
					}
					break;
				case pawnParser.CONTINUE:
				case pawnParser.BREAK:
					{
					this.state = 363;
					this.cycleKeywords();
					}
					break;
				case pawnParser.EXIT:
					{
					this.state = 364;
					this.exit();
					}
					break;
				case pawnParser.GOTO:
					{
					this.state = 365;
					this.goto();
					}
					break;
				case pawnParser.SLEEP:
					{
					this.state = 366;
					this.sleep();
					}
					break;
				case pawnParser.RETURN:
					{
					this.state = 367;
					this.return();
					}
					break;
				case pawnParser.NEW:
				case pawnParser.CONST:
				case pawnParser.STATIC:
				case pawnParser.STOCK:
				case pawnParser.PUBLIC:
					{
					this.state = 368;
					this.varDeclaration();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 371;
				this.match(pawnParser.SEMI);
				}
				break;

			case 2:
				{
				this.state = 373;
				this.processorLabel();
				}
				break;

			case 3:
				{
				this.state = 374;
				this.compoundStatment();
				}
				break;

			case 4:
				{
				this.state = 375;
				this.cycles();
				}
				break;

			case 5:
				{
				this.state = 376;
				this.ifStatement();
				}
				break;

			case 6:
				{
				this.state = 377;
				this.switch();
				}
				break;
			}
			this.state = 381;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				{
				this.state = 380;
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
			this.state = 383;
			this.match(pawnParser.CURLY_OPEN_BRACKET);
			this.state = 387;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.OPEN_PARENTHESIS) | (1 << pawnParser.CURLY_OPEN_BRACKET) | (1 << pawnParser.MINUS) | (1 << pawnParser.INCREMENTS) | (1 << pawnParser.DECREMENTS))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (pawnParser.NOT - 38)) | (1 << (pawnParser.BIT_COMPLEMEN - 38)) | (1 << (pawnParser.ASSERT - 38)) | (1 << (pawnParser.EXIT - 38)) | (1 << (pawnParser.GOTO - 38)) | (1 << (pawnParser.SLEEP - 38)) | (1 << (pawnParser.STATE - 38)) | (1 << (pawnParser.RETURN - 38)) | (1 << (pawnParser.NEW - 38)) | (1 << (pawnParser.CONST - 38)) | (1 << (pawnParser.STATIC - 38)) | (1 << (pawnParser.STOCK - 38)) | (1 << (pawnParser.PUBLIC - 38)) | (1 << (pawnParser.IF - 38)) | (1 << (pawnParser.SWITCH - 38)) | (1 << (pawnParser.WHILE - 38)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (pawnParser.FOR - 70)) | (1 << (pawnParser.DO - 70)) | (1 << (pawnParser.CONTINUE - 70)) | (1 << (pawnParser.BREAK - 70)) | (1 << (pawnParser.DEFINED - 70)) | (1 << (pawnParser.SIZEOF - 70)) | (1 << (pawnParser.TAGOF - 70)) | (1 << (pawnParser.TRUE - 70)) | (1 << (pawnParser.FALSE - 70)) | (1 << (pawnParser.CELLBITS - 70)) | (1 << (pawnParser.CELLMAX - 70)) | (1 << (pawnParser.CELLMIN - 70)) | (1 << (pawnParser.CHARBITS - 70)) | (1 << (pawnParser.CHARMAX - 70)) | (1 << (pawnParser.CHARMIN - 70)) | (1 << (pawnParser.DEBUG - 70)) | (1 << (pawnParser.LINE - 70)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (pawnParser.PAWN - 102)) | (1 << (pawnParser.UCHARMAX - 102)) | (1 << (pawnParser.SHARPSTRING - 102)) | (1 << (pawnParser.STRING - 102)) | (1 << (pawnParser.CHAR_STRING - 102)) | (1 << (pawnParser.IDENTIFIER - 102)) | (1 << (pawnParser.BINARY - 102)) | (1 << (pawnParser.HEX - 102)) | (1 << (pawnParser.INTEGER - 102)) | (1 << (pawnParser.FLOAT - 102)) | (1 << (pawnParser.RATIONAL - 102)))) !== 0)) {
				{
				{
				this.state = 384;
				this.statement();
				}
				}
				this.state = 389;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 390;
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
			this.state = 392;
			this.match(pawnParser.ASSERT);
			this.state = 393;
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
			this.state = 395;
			this.match(pawnParser.EXIT);
			this.state = 396;
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
		this.enterRule(_localctx, 42, pawnParser.RULE_goto);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 398;
			this.match(pawnParser.GOTO);
			this.state = 399;
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
		this.enterRule(_localctx, 44, pawnParser.RULE_sleep);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 401;
			this.match(pawnParser.SLEEP);
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
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, pawnParser.RULE_ifStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 404;
			this.match(pawnParser.IF);
			this.state = 409;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				{
				this.state = 405;
				this.condition();
				}
				break;

			case 2:
				{
				this.state = 406;
				this.expresion();
				this.state = 407;
				this.match(pawnParser.THEN);
				}
				break;
			}
			this.state = 411;
			this.statement();
			this.state = 413;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				{
				this.state = 412;
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
			this.state = 415;
			this.match(pawnParser.ELSE);
			this.state = 416;
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
			this.state = 418;
			this.match(pawnParser.RETURN);
			this.state = 420;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.OPEN_PARENTHESIS) | (1 << pawnParser.CURLY_OPEN_BRACKET) | (1 << pawnParser.MINUS) | (1 << pawnParser.INCREMENTS) | (1 << pawnParser.DECREMENTS))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (pawnParser.NOT - 38)) | (1 << (pawnParser.BIT_COMPLEMEN - 38)) | (1 << (pawnParser.STATE - 38)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (pawnParser.DEFINED - 75)) | (1 << (pawnParser.SIZEOF - 75)) | (1 << (pawnParser.TAGOF - 75)) | (1 << (pawnParser.TRUE - 75)) | (1 << (pawnParser.FALSE - 75)) | (1 << (pawnParser.CELLBITS - 75)) | (1 << (pawnParser.CELLMAX - 75)) | (1 << (pawnParser.CELLMIN - 75)) | (1 << (pawnParser.CHARBITS - 75)) | (1 << (pawnParser.CHARMAX - 75)) | (1 << (pawnParser.CHARMIN - 75)) | (1 << (pawnParser.DEBUG - 75)) | (1 << (pawnParser.LINE - 75)) | (1 << (pawnParser.PAWN - 75)) | (1 << (pawnParser.UCHARMAX - 75)) | (1 << (pawnParser.SHARPSTRING - 75)) | (1 << (pawnParser.STRING - 75)) | (1 << (pawnParser.CHAR_STRING - 75)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (pawnParser.IDENTIFIER - 107)) | (1 << (pawnParser.BINARY - 107)) | (1 << (pawnParser.HEX - 107)) | (1 << (pawnParser.INTEGER - 107)) | (1 << (pawnParser.FLOAT - 107)) | (1 << (pawnParser.RATIONAL - 107)))) !== 0)) {
				{
				this.state = 419;
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
		this.enterRule(_localctx, 52, pawnParser.RULE_condition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 422;
			this.match(pawnParser.OPEN_PARENTHESIS);
			this.state = 423;
			this.expresion();
			this.state = 424;
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
			this.state = 426;
			this.match(pawnParser.SWITCH);
			this.state = 427;
			this.condition();
			this.state = 428;
			this.match(pawnParser.CURLY_OPEN_BRACKET);
			this.state = 432;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pawnParser.CASE) {
				{
				{
				this.state = 429;
				this.case();
				}
				}
				this.state = 434;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 436;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.DEFAULT) {
				{
				this.state = 435;
				this.default();
				}
			}

			this.state = 438;
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
			this.state = 440;
			this.match(pawnParser.CASE);
			this.state = 441;
			this.case_list();
			this.state = 446;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pawnParser.COMA) {
				{
				{
				this.state = 442;
				this.match(pawnParser.COMA);
				this.state = 443;
				this.case_list();
				}
				}
				this.state = 448;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 449;
			this.match(pawnParser.COLON);
			this.state = 450;
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
			this.state = 452;
			this.match(pawnParser.DEFAULT);
			this.state = 453;
			this.match(pawnParser.COLON);
			this.state = 454;
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
			this.state = 456;
			this.literal();
			this.state = 458;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.PERIOD) {
				{
				this.state = 457;
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
		this.enterRule(_localctx, 62, pawnParser.RULE_range);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 460;
			this.match(pawnParser.PERIOD);
			this.state = 461;
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
		this.enterRule(_localctx, 64, pawnParser.RULE_arrayInit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 463;
			this.match(pawnParser.CURLY_OPEN_BRACKET);
			this.state = 464;
			this.arrayInitMember();
			this.state = 469;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pawnParser.COMA) {
				{
				{
				this.state = 465;
				this.match(pawnParser.COMA);
				this.state = 466;
				this.arrayInitMember();
				}
				}
				this.state = 471;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 472;
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
		this.enterRule(_localctx, 66, pawnParser.RULE_arrayInitMember);
		let _la: number;
		try {
			this.state = 489;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 475;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
				case 1:
					{
					this.state = 474;
					this.tag();
					}
					break;
				}
				this.state = 486;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
				case 1:
					{
					this.state = 478;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === pawnParser.MINUS) {
						{
						this.state = 477;
						this.match(pawnParser.MINUS);
						}
					}

					this.state = 480;
					this.match(pawnParser.IDENTIFIER);
					}
					break;

				case 2:
					{
					this.state = 482;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === pawnParser.MINUS) {
						{
						this.state = 481;
						this.match(pawnParser.MINUS);
						}
					}

					this.state = 484;
					this.number();
					}
					break;

				case 3:
					{
					this.state = 485;
					this.string();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 488;
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
		this.enterRule(_localctx, 68, pawnParser.RULE_assigments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 491;
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
		this.enterRule(_localctx, 70, pawnParser.RULE_declParams);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 494;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.CONST) {
				{
				this.state = 493;
				this.match(pawnParser.CONST);
				}
			}

			this.state = 497;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.BIT_AND) {
				{
				this.state = 496;
				this.reference();
				}
			}

			this.state = 499;
			this.variable();
			this.state = 505;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.ASSIGMENT) {
				{
				this.state = 500;
				this.match(pawnParser.ASSIGMENT);
				this.state = 503;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 56, this._ctx) ) {
				case 1:
					{
					this.state = 501;
					this.expresion();
					}
					break;

				case 2:
					{
					this.state = 502;
					this.arrayInit();
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
		this.enterRule(_localctx, 72, pawnParser.RULE_ellipse);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 508;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.COMA) {
				{
				this.state = 507;
				this.match(pawnParser.COMA);
				}
			}

			this.state = 511;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.CURLY_OPEN_BRACKET || _la === pawnParser.IDENTIFIER) {
				{
				this.state = 510;
				this.tag();
				}
			}

			this.state = 513;
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
		this.enterRule(_localctx, 74, pawnParser.RULE_reference);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 515;
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
		this.enterRule(_localctx, 76, pawnParser.RULE_varModifires);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 517;
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
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, pawnParser.RULE_number);
		try {
			this.state = 524;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.INTEGER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 519;
				this.integer();
				}
				break;
			case pawnParser.FLOAT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 520;
				this.float();
				}
				break;
			case pawnParser.HEX:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 521;
				this.hex();
				}
				break;
			case pawnParser.RATIONAL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 522;
				this.rational();
				}
				break;
			case pawnParser.BINARY:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 523;
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
		this.enterRule(_localctx, 80, pawnParser.RULE_float);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 526;
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
		this.enterRule(_localctx, 82, pawnParser.RULE_integer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 528;
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
		this.enterRule(_localctx, 84, pawnParser.RULE_hex);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 530;
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
		this.enterRule(_localctx, 86, pawnParser.RULE_rational);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 532;
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
		this.enterRule(_localctx, 88, pawnParser.RULE_binary);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 534;
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
		this.enterRule(_localctx, 90, pawnParser.RULE_canBeOverloaded);
		try {
			this.state = 539;
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
				this.state = 536;
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
				this.state = 537;
				this.compareOperator();
				}
				break;
			case pawnParser.ASSIGMENT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 538;
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
		this.enterRule(_localctx, 92, pawnParser.RULE_arefmeticOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 541;
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
		this.enterRule(_localctx, 94, pawnParser.RULE_compareOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 543;
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
	public cycles(): CyclesContext {
		let _localctx: CyclesContext = new CyclesContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, pawnParser.RULE_cycles);
		try {
			this.state = 548;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.WHILE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 545;
				this.while();
				}
				break;
			case pawnParser.FOR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 546;
				this.for();
				}
				break;
			case pawnParser.DO:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 547;
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
		this.enterRule(_localctx, 98, pawnParser.RULE_do);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 550;
			this.match(pawnParser.DO);
			this.state = 551;
			this.statement();
			this.state = 554;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 63, this._ctx) ) {
			case 1:
				{
				this.state = 552;
				this.match(pawnParser.WHILE);
				this.state = 553;
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
		this.enterRule(_localctx, 100, pawnParser.RULE_while);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 556;
			this.match(pawnParser.WHILE);
			this.state = 557;
			this.condition();
			this.state = 558;
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
		this.enterRule(_localctx, 102, pawnParser.RULE_for);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 560;
			this.match(pawnParser.FOR);
			this.state = 561;
			this.match(pawnParser.OPEN_PARENTHESIS);
			this.state = 563;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.OPEN_PARENTHESIS) | (1 << pawnParser.CURLY_OPEN_BRACKET) | (1 << pawnParser.MINUS) | (1 << pawnParser.INCREMENTS) | (1 << pawnParser.DECREMENTS))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (pawnParser.NOT - 38)) | (1 << (pawnParser.BIT_COMPLEMEN - 38)) | (1 << (pawnParser.STATE - 38)) | (1 << (pawnParser.NEW - 38)) | (1 << (pawnParser.CONST - 38)) | (1 << (pawnParser.STATIC - 38)) | (1 << (pawnParser.STOCK - 38)) | (1 << (pawnParser.PUBLIC - 38)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (pawnParser.DEFINED - 75)) | (1 << (pawnParser.SIZEOF - 75)) | (1 << (pawnParser.TAGOF - 75)) | (1 << (pawnParser.TRUE - 75)) | (1 << (pawnParser.FALSE - 75)) | (1 << (pawnParser.CELLBITS - 75)) | (1 << (pawnParser.CELLMAX - 75)) | (1 << (pawnParser.CELLMIN - 75)) | (1 << (pawnParser.CHARBITS - 75)) | (1 << (pawnParser.CHARMAX - 75)) | (1 << (pawnParser.CHARMIN - 75)) | (1 << (pawnParser.DEBUG - 75)) | (1 << (pawnParser.LINE - 75)) | (1 << (pawnParser.PAWN - 75)) | (1 << (pawnParser.UCHARMAX - 75)) | (1 << (pawnParser.SHARPSTRING - 75)) | (1 << (pawnParser.STRING - 75)) | (1 << (pawnParser.CHAR_STRING - 75)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (pawnParser.IDENTIFIER - 107)) | (1 << (pawnParser.BINARY - 107)) | (1 << (pawnParser.HEX - 107)) | (1 << (pawnParser.INTEGER - 107)) | (1 << (pawnParser.FLOAT - 107)) | (1 << (pawnParser.RATIONAL - 107)))) !== 0)) {
				{
				this.state = 562;
				_localctx._first = this.forFirstExp();
				}
			}

			this.state = 565;
			this.match(pawnParser.SEMI);
			this.state = 567;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.OPEN_PARENTHESIS) | (1 << pawnParser.CURLY_OPEN_BRACKET) | (1 << pawnParser.MINUS) | (1 << pawnParser.INCREMENTS) | (1 << pawnParser.DECREMENTS))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (pawnParser.NOT - 38)) | (1 << (pawnParser.BIT_COMPLEMEN - 38)) | (1 << (pawnParser.STATE - 38)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (pawnParser.DEFINED - 75)) | (1 << (pawnParser.SIZEOF - 75)) | (1 << (pawnParser.TAGOF - 75)) | (1 << (pawnParser.TRUE - 75)) | (1 << (pawnParser.FALSE - 75)) | (1 << (pawnParser.CELLBITS - 75)) | (1 << (pawnParser.CELLMAX - 75)) | (1 << (pawnParser.CELLMIN - 75)) | (1 << (pawnParser.CHARBITS - 75)) | (1 << (pawnParser.CHARMAX - 75)) | (1 << (pawnParser.CHARMIN - 75)) | (1 << (pawnParser.DEBUG - 75)) | (1 << (pawnParser.LINE - 75)) | (1 << (pawnParser.PAWN - 75)) | (1 << (pawnParser.UCHARMAX - 75)) | (1 << (pawnParser.SHARPSTRING - 75)) | (1 << (pawnParser.STRING - 75)) | (1 << (pawnParser.CHAR_STRING - 75)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (pawnParser.IDENTIFIER - 107)) | (1 << (pawnParser.BINARY - 107)) | (1 << (pawnParser.HEX - 107)) | (1 << (pawnParser.INTEGER - 107)) | (1 << (pawnParser.FLOAT - 107)) | (1 << (pawnParser.RATIONAL - 107)))) !== 0)) {
				{
				this.state = 566;
				_localctx._second = this.expresion();
				}
			}

			this.state = 569;
			this.match(pawnParser.SEMI);
			this.state = 571;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.OPEN_PARENTHESIS) | (1 << pawnParser.CURLY_OPEN_BRACKET) | (1 << pawnParser.MINUS) | (1 << pawnParser.INCREMENTS) | (1 << pawnParser.DECREMENTS))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (pawnParser.NOT - 38)) | (1 << (pawnParser.BIT_COMPLEMEN - 38)) | (1 << (pawnParser.STATE - 38)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (pawnParser.DEFINED - 75)) | (1 << (pawnParser.SIZEOF - 75)) | (1 << (pawnParser.TAGOF - 75)) | (1 << (pawnParser.TRUE - 75)) | (1 << (pawnParser.FALSE - 75)) | (1 << (pawnParser.CELLBITS - 75)) | (1 << (pawnParser.CELLMAX - 75)) | (1 << (pawnParser.CELLMIN - 75)) | (1 << (pawnParser.CHARBITS - 75)) | (1 << (pawnParser.CHARMAX - 75)) | (1 << (pawnParser.CHARMIN - 75)) | (1 << (pawnParser.DEBUG - 75)) | (1 << (pawnParser.LINE - 75)) | (1 << (pawnParser.PAWN - 75)) | (1 << (pawnParser.UCHARMAX - 75)) | (1 << (pawnParser.SHARPSTRING - 75)) | (1 << (pawnParser.STRING - 75)) | (1 << (pawnParser.CHAR_STRING - 75)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (pawnParser.IDENTIFIER - 107)) | (1 << (pawnParser.BINARY - 107)) | (1 << (pawnParser.HEX - 107)) | (1 << (pawnParser.INTEGER - 107)) | (1 << (pawnParser.FLOAT - 107)) | (1 << (pawnParser.RATIONAL - 107)))) !== 0)) {
				{
				this.state = 570;
				_localctx._third = this.expresion();
				}
			}

			this.state = 573;
			this.match(pawnParser.CLOSE_PARENTHESIS);
			this.state = 574;
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
		this.enterRule(_localctx, 104, pawnParser.RULE_forFirstExp);
		try {
			this.state = 578;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.NEW:
			case pawnParser.CONST:
			case pawnParser.STATIC:
			case pawnParser.STOCK:
			case pawnParser.PUBLIC:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 576;
				this.varDeclaration();
				}
				break;
			case pawnParser.OPEN_PARENTHESIS:
			case pawnParser.CURLY_OPEN_BRACKET:
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
				this.state = 577;
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
		this.enterRule(_localctx, 106, pawnParser.RULE_cycleKeywords);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 580;
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
		this.enterRule(_localctx, 108, pawnParser.RULE_literal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 586;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.SHARPSTRING:
			case pawnParser.STRING:
			case pawnParser.CHAR_STRING:
				{
				this.state = 582;
				this.string();
				}
				break;
			case pawnParser.BINARY:
			case pawnParser.HEX:
			case pawnParser.INTEGER:
			case pawnParser.FLOAT:
			case pawnParser.RATIONAL:
				{
				this.state = 583;
				this.number();
				}
				break;
			case pawnParser.TRUE:
			case pawnParser.FALSE:
				{
				this.state = 584;
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
				this.state = 585;
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
		this.enterRule(_localctx, 110, pawnParser.RULE_bool_const);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 588;
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
		this.enterRule(_localctx, 112, pawnParser.RULE_predefinedConstants);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 590;
			_la = this._input.LA(1);
			if (!(((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & ((1 << (pawnParser.CELLBITS - 94)) | (1 << (pawnParser.CELLMAX - 94)) | (1 << (pawnParser.CELLMIN - 94)) | (1 << (pawnParser.CHARBITS - 94)) | (1 << (pawnParser.CHARMAX - 94)) | (1 << (pawnParser.CHARMIN - 94)) | (1 << (pawnParser.DEBUG - 94)) | (1 << (pawnParser.LINE - 94)) | (1 << (pawnParser.PAWN - 94)) | (1 << (pawnParser.UCHARMAX - 94)))) !== 0))) {
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
		this.enterRule(_localctx, 114, pawnParser.RULE_string);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 592;
			_la = this._input.LA(1);
			if (!(((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (pawnParser.SHARPSTRING - 104)) | (1 << (pawnParser.STRING - 104)) | (1 << (pawnParser.CHAR_STRING - 104)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 596;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 593;
					this.string();
					}
					}
				}
				this.state = 598;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
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
		this.enterRule(_localctx, 116, pawnParser.RULE_docs);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 599;
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
		this.enterRule(_localctx, 118, pawnParser.RULE_docBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 601;
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
	public expresion(): ExpresionContext {
		let _localctx: ExpresionContext = new ExpresionContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, pawnParser.RULE_expresion);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 603;
			this.tagableExpression();
			this.state = 610;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 71, this._ctx) ) {
			case 1:
				{
				this.state = 605;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 70, this._ctx) ) {
				case 1:
					{
					this.state = 604;
					this.match(pawnParser.CHAR);
					}
					break;
				}
				}
				break;

			case 2:
				{
				this.state = 607;
				this.ternarOperator();
				}
				break;

			case 3:
				{
				this.state = 608;
				this.chainedRelationalOperator();
				}
				break;

			case 4:
				{
				this.state = 609;
				this.binarExpressionOperator();
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
	public tagableExpression(): TagableExpressionContext {
		let _localctx: TagableExpressionContext = new TagableExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, pawnParser.RULE_tagableExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 621;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 72, this._ctx) ) {
			case 1:
				{
				this.state = 612;
				this.literal();
				}
				break;

			case 2:
				{
				this.state = 613;
				this.symbol();
				}
				break;

			case 3:
				{
				this.state = 614;
				this.functionCallOperator();
				}
				break;

			case 4:
				{
				this.state = 615;
				this.match(pawnParser.OPEN_PARENTHESIS);
				this.state = 616;
				this.expresion();
				this.state = 617;
				this.match(pawnParser.CLOSE_PARENTHESIS);
				}
				break;

			case 5:
				{
				this.state = 619;
				this.unarOperator();
				}
				break;

			case 6:
				{
				this.state = 620;
				this.binarOperator();
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
		this.enterRule(_localctx, 124, pawnParser.RULE_ternarOperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 623;
			this.match(pawnParser.QUESTION);
			this.state = 624;
			this.expresion();
			this.state = 625;
			this.match(pawnParser.COLON);
			this.state = 626;
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
	public chainedRelationalOperator(): ChainedRelationalOperatorContext {
		let _localctx: ChainedRelationalOperatorContext = new ChainedRelationalOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, pawnParser.RULE_chainedRelationalOperator);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 631;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 628;
					this.chainedRelationalOperators();
					this.state = 629;
					this.expresion();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 633;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
	public binarExpressionOperator(): BinarExpressionOperatorContext {
		let _localctx: BinarExpressionOperatorContext = new BinarExpressionOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, pawnParser.RULE_binarExpressionOperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 635;
			_localctx._operator = this.binarExpressionOperators();
			this.state = 636;
			_localctx._right = this.expresion();
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
	public unarOperator(): UnarOperatorContext {
		let _localctx: UnarOperatorContext = new UnarOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, pawnParser.RULE_unarOperator);
		try {
			this.state = 648;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 74, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 638;
				this.postIncrement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 639;
				this.preIncrement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 640;
				this.postDecrement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 641;
				this.preDecrement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				{
				this.state = 642;
				this.preExpresionOperator();
				this.state = 643;
				this.expresion();
				}
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				{
				this.state = 645;
				this.preSymbolOperator();
				this.state = 646;
				this.symbol();
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
	public preExpresionOperator(): PreExpresionOperatorContext {
		let _localctx: PreExpresionOperatorContext = new PreExpresionOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, pawnParser.RULE_preExpresionOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 650;
			_la = this._input.LA(1);
			if (!(((((_la - 22)) & ~0x1F) === 0 && ((1 << (_la - 22)) & ((1 << (pawnParser.MINUS - 22)) | (1 << (pawnParser.NOT - 22)) | (1 << (pawnParser.BIT_COMPLEMEN - 22)))) !== 0) || _la === pawnParser.SIZEOF)) {
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
	public preSymbolOperator(): PreSymbolOperatorContext {
		let _localctx: PreSymbolOperatorContext = new PreSymbolOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, pawnParser.RULE_preSymbolOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 652;
			_la = this._input.LA(1);
			if (!(((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (pawnParser.STATE - 52)) | (1 << (pawnParser.DEFINED - 52)) | (1 << (pawnParser.TAGOF - 52)))) !== 0))) {
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
	public binarOperator(): BinarOperatorContext {
		let _localctx: BinarOperatorContext = new BinarOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, pawnParser.RULE_binarOperator);
		try {
			this.state = 657;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 654;
				this.assigmentOperator();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 655;
				this.arrayIndexOperator();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 656;
				this.tagOperator();
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
	public arrayIndexOperator(): ArrayIndexOperatorContext {
		let _localctx: ArrayIndexOperatorContext = new ArrayIndexOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, pawnParser.RULE_arrayIndexOperator);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 659;
			this.symbol();
			this.state = 662;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 662;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case pawnParser.SQUARE_OPEN_BRACKET:
						{
						this.state = 660;
						this.arrayOperatorIndex();
						}
						break;
					case pawnParser.CURLY_OPEN_BRACKET:
						{
						this.state = 661;
						this.arrayOperatorChar();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 664;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
	public binarExpressionOperators(): BinarExpressionOperatorsContext {
		let _localctx: BinarExpressionOperatorsContext = new BinarExpressionOperatorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, pawnParser.RULE_binarExpressionOperators);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 666;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.COMA) | (1 << pawnParser.ASSIGMENT) | (1 << pawnParser.ASSIGMENT_PLUS) | (1 << pawnParser.ASSIGMENT_MINUS) | (1 << pawnParser.ASSIGMENT_MULT) | (1 << pawnParser.ASSIGMENT_DIV) | (1 << pawnParser.ASSIGMENT_REMAINDE) | (1 << pawnParser.ASSIGMENT_AND) | (1 << pawnParser.ASSIGMENT_OR) | (1 << pawnParser.ASSIGMENT_XOR) | (1 << pawnParser.ASSIGMENT_RIGHT) | (1 << pawnParser.ASSIGMENT_RIGHT_LOG) | (1 << pawnParser.ASSIGMENT_LEFT) | (1 << pawnParser.PLUS) | (1 << pawnParser.MINUS) | (1 << pawnParser.MULTY) | (1 << pawnParser.DIV) | (1 << pawnParser.REMAINDE) | (1 << pawnParser.EQUAL) | (1 << pawnParser.NOTEQUAL))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (pawnParser.OR - 36)) | (1 << (pawnParser.AND - 36)) | (1 << (pawnParser.BIT_AND - 36)) | (1 << (pawnParser.BIT_OR - 36)) | (1 << (pawnParser.BIT_XOR - 36)) | (1 << (pawnParser.BIT_RIGHT - 36)) | (1 << (pawnParser.BIT_LEFT - 36)) | (1 << (pawnParser.BIT_RIGHT_LOG - 36)))) !== 0))) {
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
	public assigmentOperator(): AssigmentOperatorContext {
		let _localctx: AssigmentOperatorContext = new AssigmentOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, pawnParser.RULE_assigmentOperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 668;
			this.lvalue();
			this.state = 669;
			this.match(pawnParser.ASSIGMENT);
			this.state = 670;
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
	public arrayOperatorIndex(): ArrayOperatorIndexContext {
		let _localctx: ArrayOperatorIndexContext = new ArrayOperatorIndexContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, pawnParser.RULE_arrayOperatorIndex);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 672;
			this.match(pawnParser.SQUARE_OPEN_BRACKET);
			this.state = 674;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.OPEN_PARENTHESIS) | (1 << pawnParser.CURLY_OPEN_BRACKET) | (1 << pawnParser.MINUS) | (1 << pawnParser.INCREMENTS) | (1 << pawnParser.DECREMENTS))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (pawnParser.NOT - 38)) | (1 << (pawnParser.BIT_COMPLEMEN - 38)) | (1 << (pawnParser.STATE - 38)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (pawnParser.DEFINED - 75)) | (1 << (pawnParser.SIZEOF - 75)) | (1 << (pawnParser.TAGOF - 75)) | (1 << (pawnParser.TRUE - 75)) | (1 << (pawnParser.FALSE - 75)) | (1 << (pawnParser.CELLBITS - 75)) | (1 << (pawnParser.CELLMAX - 75)) | (1 << (pawnParser.CELLMIN - 75)) | (1 << (pawnParser.CHARBITS - 75)) | (1 << (pawnParser.CHARMAX - 75)) | (1 << (pawnParser.CHARMIN - 75)) | (1 << (pawnParser.DEBUG - 75)) | (1 << (pawnParser.LINE - 75)) | (1 << (pawnParser.PAWN - 75)) | (1 << (pawnParser.UCHARMAX - 75)) | (1 << (pawnParser.SHARPSTRING - 75)) | (1 << (pawnParser.STRING - 75)) | (1 << (pawnParser.CHAR_STRING - 75)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (pawnParser.IDENTIFIER - 107)) | (1 << (pawnParser.BINARY - 107)) | (1 << (pawnParser.HEX - 107)) | (1 << (pawnParser.INTEGER - 107)) | (1 << (pawnParser.FLOAT - 107)) | (1 << (pawnParser.RATIONAL - 107)))) !== 0)) {
				{
				this.state = 673;
				this.expresion();
				}
			}

			this.state = 676;
			this.match(pawnParser.SQUARE_CLOSE_BRACKET);
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
	public arrayOperatorChar(): ArrayOperatorCharContext {
		let _localctx: ArrayOperatorCharContext = new ArrayOperatorCharContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, pawnParser.RULE_arrayOperatorChar);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 678;
			this.match(pawnParser.CURLY_OPEN_BRACKET);
			this.state = 680;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.OPEN_PARENTHESIS) | (1 << pawnParser.CURLY_OPEN_BRACKET) | (1 << pawnParser.MINUS) | (1 << pawnParser.INCREMENTS) | (1 << pawnParser.DECREMENTS))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (pawnParser.NOT - 38)) | (1 << (pawnParser.BIT_COMPLEMEN - 38)) | (1 << (pawnParser.STATE - 38)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (pawnParser.DEFINED - 75)) | (1 << (pawnParser.SIZEOF - 75)) | (1 << (pawnParser.TAGOF - 75)) | (1 << (pawnParser.TRUE - 75)) | (1 << (pawnParser.FALSE - 75)) | (1 << (pawnParser.CELLBITS - 75)) | (1 << (pawnParser.CELLMAX - 75)) | (1 << (pawnParser.CELLMIN - 75)) | (1 << (pawnParser.CHARBITS - 75)) | (1 << (pawnParser.CHARMAX - 75)) | (1 << (pawnParser.CHARMIN - 75)) | (1 << (pawnParser.DEBUG - 75)) | (1 << (pawnParser.LINE - 75)) | (1 << (pawnParser.PAWN - 75)) | (1 << (pawnParser.UCHARMAX - 75)) | (1 << (pawnParser.SHARPSTRING - 75)) | (1 << (pawnParser.STRING - 75)) | (1 << (pawnParser.CHAR_STRING - 75)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (pawnParser.IDENTIFIER - 107)) | (1 << (pawnParser.BINARY - 107)) | (1 << (pawnParser.HEX - 107)) | (1 << (pawnParser.INTEGER - 107)) | (1 << (pawnParser.FLOAT - 107)) | (1 << (pawnParser.RATIONAL - 107)))) !== 0)) {
				{
				this.state = 679;
				this.expresion();
				}
			}

			this.state = 682;
			this.match(pawnParser.CURLY_CLOSE_BRACKET);
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
	public functionCallOperator(): FunctionCallOperatorContext {
		let _localctx: FunctionCallOperatorContext = new FunctionCallOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, pawnParser.RULE_functionCallOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 684;
			this.match(pawnParser.IDENTIFIER);
			this.state = 685;
			this.match(pawnParser.OPEN_PARENTHESIS);
			this.state = 694;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.OPEN_PARENTHESIS) | (1 << pawnParser.CURLY_OPEN_BRACKET) | (1 << pawnParser.MINUS) | (1 << pawnParser.INCREMENTS) | (1 << pawnParser.DECREMENTS))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (pawnParser.NOT - 38)) | (1 << (pawnParser.BIT_COMPLEMEN - 38)) | (1 << (pawnParser.STATE - 38)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (pawnParser.DEFINED - 75)) | (1 << (pawnParser.SIZEOF - 75)) | (1 << (pawnParser.TAGOF - 75)) | (1 << (pawnParser.TRUE - 75)) | (1 << (pawnParser.FALSE - 75)) | (1 << (pawnParser.CELLBITS - 75)) | (1 << (pawnParser.CELLMAX - 75)) | (1 << (pawnParser.CELLMIN - 75)) | (1 << (pawnParser.CHARBITS - 75)) | (1 << (pawnParser.CHARMAX - 75)) | (1 << (pawnParser.CHARMIN - 75)) | (1 << (pawnParser.DEBUG - 75)) | (1 << (pawnParser.LINE - 75)) | (1 << (pawnParser.PAWN - 75)) | (1 << (pawnParser.UCHARMAX - 75)) | (1 << (pawnParser.SHARPSTRING - 75)) | (1 << (pawnParser.STRING - 75)) | (1 << (pawnParser.CHAR_STRING - 75)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (pawnParser.IDENTIFIER - 107)) | (1 << (pawnParser.BINARY - 107)) | (1 << (pawnParser.HEX - 107)) | (1 << (pawnParser.INTEGER - 107)) | (1 << (pawnParser.FLOAT - 107)) | (1 << (pawnParser.RATIONAL - 107)))) !== 0)) {
				{
				this.state = 686;
				this.expresion();
				this.state = 691;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === pawnParser.COMA) {
					{
					{
					this.state = 687;
					this.match(pawnParser.COMA);
					this.state = 688;
					this.expresion();
					}
					}
					this.state = 693;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 696;
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
	public tagOperator(): TagOperatorContext {
		let _localctx: TagOperatorContext = new TagOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, pawnParser.RULE_tagOperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 698;
			this.tag();
			this.state = 699;
			this.tagableExpression();
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
		this.enterRule(_localctx, 152, pawnParser.RULE_symbol);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 701;
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
	// @RuleVersion(0)
	public lvalue(): LvalueContext {
		let _localctx: LvalueContext = new LvalueContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, pawnParser.RULE_lvalue);
		try {
			this.state = 705;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 82, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 703;
				this.symbol();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 704;
				this.arrayIndexOperator();
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
	public postIncrement(): PostIncrementContext {
		let _localctx: PostIncrementContext = new PostIncrementContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, pawnParser.RULE_postIncrement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 707;
			this.lvalue();
			this.state = 708;
			this.match(pawnParser.INCREMENTS);
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
	public preIncrement(): PreIncrementContext {
		let _localctx: PreIncrementContext = new PreIncrementContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, pawnParser.RULE_preIncrement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 710;
			this.match(pawnParser.INCREMENTS);
			this.state = 711;
			this.lvalue();
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
	public postDecrement(): PostDecrementContext {
		let _localctx: PostDecrementContext = new PostDecrementContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, pawnParser.RULE_postDecrement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 713;
			this.lvalue();
			this.state = 714;
			this.match(pawnParser.DECREMENTS);
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
	public preDecrement(): PreDecrementContext {
		let _localctx: PreDecrementContext = new PreDecrementContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, pawnParser.RULE_preDecrement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 716;
			this.match(pawnParser.DECREMENTS);
			this.state = 717;
			this.lvalue();
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
	public chainedRelationalOperators(): ChainedRelationalOperatorsContext {
		let _localctx: ChainedRelationalOperatorsContext = new ChainedRelationalOperatorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, pawnParser.RULE_chainedRelationalOperators);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 719;
			_la = this._input.LA(1);
			if (!(((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & ((1 << (pawnParser.LESS - 30)) | (1 << (pawnParser.LARGER - 30)) | (1 << (pawnParser.LESSEQ - 30)) | (1 << (pawnParser.LARGEREQ - 30)))) !== 0))) {
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

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03x\u02D4\x04\x02" +
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
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x03\x02\x03\x02\x07\x02\xAB" +
		"\n\x02\f\x02\x0E\x02\xAE\v\x02\x03\x02\x07\x02\xB1\n\x02\f\x02\x0E\x02" +
		"\xB4\v\x02\x03\x02\x05\x02\xB7\n\x02\x03\x03\x03\x03\x03\x03\x03\x04\x07" +
		"\x04\xBD\n\x04\f\x04\x0E\x04\xC0\v\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x05\x04\xC7\n\x04\x03\x04\x05\x04\xCA\n\x04\x03\x05\x03\x05\x05" +
		"\x05\xCE\n\x05\x03\x05\x05\x05\xD1\n\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x07\x05\xD7\n\x05\f\x05\x0E\x05\xDA\v\x05\x03\x05\x05\x05\xDD\n\x05\x05" +
		"\x05\xDF\n\x05\x03\x05\x03\x05\x05\x05\xE3\n\x05\x03\x06\x03\x06\x03\x06" +
		"\x05\x06\xE8\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b" +
		"\x07\b\xF1\n\b\f\b\x0E\b\xF4\v\b\x03\b\x06\b\xF7\n\b\r\b\x0E\b\xF8\x05" +
		"\b\xFB\n\b\x03\b\x03\b\x05\b\xFF\n\b\x03\b\x03\b\x03\b\x05\b\u0104\n\b" +
		"\x07\b\u0106\n\b\f\b\x0E\b\u0109\v\b\x03\t\x03\t\x03\t\x03\t\x05\t\u010F" +
		"\n\t\x03\n\x05\n\u0112\n\n\x03\n\x05\n\u0115\n\n\x03\n\x03\n\x03\n\x03" +
		"\v\x03\v\x05\v\u011C\n\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03" +
		"\f\x07\f\u0126\n\f\f\f\x0E\f\u0129\v\f\x05\f\u012B\n\f\x03\f\x05\f\u012E" +
		"\n\f\x03\f\x03\f\x03\f\x03\f\x05\f\u0134\n\f\x03\r\x03\r\x03\r\x03\r\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\u013F\n\x0E\f\x0E\x0E\x0E" +
		"\u0142\v\x0E\x03\x0E\x05\x0E\u0145\n\x0E\x03\x0E\x03\x0E\x03\x0F\x05\x0F" +
		"\u014A\n\x0F\x03\x0F\x03\x0F\x07\x0F\u014E\n\x0F\f\x0F\x0E\x0F\u0151\v" +
		"\x0F\x03\x10\x03\x10\x03\x10\x05\x10\u0156\n\x10\x05\x10\u0158\n\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x05\x10\u015E\n\x10\x05\x10\u0160\n\x10\x03" +
		"\x10\x05\x10\u0163\n\x10\x03\x11\x03\x11\x03\x11\x05\x11\u0168\n\x11\x03" +
		"\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x05\x13\u0174\n\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x05\x13\u017D\n\x13\x03\x13\x05\x13\u0180\n\x13\x03\x14\x03\x14" +
		"\x07\x14\u0184\n\x14\f\x14\x0E\x14\u0187\v\x14\x03\x14\x03\x14\x03\x15" +
		"\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x18" +
		"\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u019C" +
		"\n\x19\x03\x19\x03\x19\x05\x19\u01A0\n\x19\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1B\x03\x1B\x05\x1B\u01A7\n\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u01B1\n\x1D\f\x1D\x0E\x1D\u01B4\v\x1D" +
		"\x03\x1D\x05\x1D\u01B7\n\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x07\x1E\u01BF\n\x1E\f\x1E\x0E\x1E\u01C2\v\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x05 \u01CD\n \x03!\x03" +
		"!\x03!\x03\"\x03\"\x03\"\x03\"\x07\"\u01D6\n\"\f\"\x0E\"\u01D9\v\"\x03" +
		"\"\x03\"\x03#\x05#\u01DE\n#\x03#\x05#\u01E1\n#\x03#\x03#\x05#\u01E5\n" +
		"#\x03#\x03#\x05#\u01E9\n#\x03#\x05#\u01EC\n#\x03$\x03$\x03%\x05%\u01F1" +
		"\n%\x03%\x05%\u01F4\n%\x03%\x03%\x03%\x03%\x05%\u01FA\n%\x05%\u01FC\n" +
		"%\x03&\x05&\u01FF\n&\x03&\x05&\u0202\n&\x03&\x03&\x03\'\x03\'\x03(\x03" +
		"(\x03)\x03)\x03)\x03)\x03)\x05)\u020F\n)\x03*\x03*\x03+\x03+\x03,\x03" +
		",\x03-\x03-\x03.\x03.\x03/\x03/\x03/\x05/\u021E\n/\x030\x030\x031\x03" +
		"1\x032\x032\x032\x052\u0227\n2\x033\x033\x033\x033\x053\u022D\n3\x034" +
		"\x034\x034\x034\x035\x035\x035\x055\u0236\n5\x035\x035\x055\u023A\n5\x03" +
		"5\x035\x055\u023E\n5\x035\x035\x035\x036\x036\x056\u0245\n6\x037\x037" +
		"\x038\x038\x038\x038\x058\u024D\n8\x039\x039\x03:\x03:\x03;\x03;\x07;" +
		"\u0255\n;\f;\x0E;\u0258\v;\x03<\x03<\x03=\x03=\x03>\x03>\x05>\u0260\n" +
		">\x03>\x03>\x03>\x05>\u0265\n>\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03" +
		"?\x03?\x05?\u0270\n?\x03@\x03@\x03@\x03@\x03@\x03A\x03A\x03A\x06A\u027A" +
		"\nA\rA\x0EA\u027B\x03B\x03B\x03B\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03" +
		"C\x03C\x03C\x05C\u028B\nC\x03D\x03D\x03E\x03E\x03F\x03F\x03F\x05F\u0294" +
		"\nF\x03G\x03G\x03G\x06G\u0299\nG\rG\x0EG\u029A\x03H\x03H\x03I\x03I\x03" +
		"I\x03I\x03J\x03J\x05J\u02A5\nJ\x03J\x03J\x03K\x03K\x05K\u02AB\nK\x03K" +
		"\x03K\x03L\x03L\x03L\x03L\x03L\x07L\u02B4\nL\fL\x0EL\u02B7\vL\x05L\u02B9" +
		"\nL\x03L\x03L\x03M\x03M\x03M\x03N\x03N\x03O\x03O\x05O\u02C4\nO\x03P\x03" +
		"P\x03P\x03Q\x03Q\x03Q\x03R\x03R\x03R\x03S\x03S\x03S\x03T\x03T\x03T\x02" +
		"\x02\x02U\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
		"\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&" +
		"\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
		"B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02" +
		"^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02" +
		"z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02" +
		"\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02" +
		"\xA0\x02\xA2\x02\xA4\x02\xA6\x02\x02\x10\x05\x02\f\f\x0E\x0E\x16\x16\x04" +
		"\x02<<??\x03\x02\v\x16\x04\x02:<??\x03\x02\x17\x1D\x04\x02\x1E#((\x03" +
		"\x02JK\x03\x02^_\x03\x02`i\x03\x02jl\x06\x02\x18\x18((,,NN\x05\x0266M" +
		"MOO\b\x02\t\t\v\x1B\x1E\x1F&\')+-/\x03\x02 #\x02\u02F3\x02\xB6\x03\x02" +
		"\x02\x02\x04\xB8\x03\x02\x02\x02\x06\xC9\x03\x02\x02\x02\b\xCB\x03\x02" +
		"\x02\x02\n\xE4\x03\x02\x02\x02\f\xE9\x03\x02\x02\x02\x0E\xFA\x03\x02\x02" +
		"\x02\x10\u010A\x03\x02\x02\x02\x12\u0111\x03\x02\x02\x02\x14\u0119\x03" +
		"\x02\x02\x02\x16\u0121\x03\x02\x02\x02\x18\u0135\x03\x02\x02\x02\x1A\u0144" +
		"\x03\x02\x02\x02\x1C\u0149\x03\x02\x02\x02\x1E\u0162\x03\x02\x02\x02 " +
		"\u0167\x03\x02\x02\x02\"\u0169\x03\x02\x02\x02$\u017C\x03\x02\x02\x02" +
		"&\u0181\x03\x02\x02\x02(\u018A\x03\x02\x02\x02*\u018D\x03\x02\x02\x02" +
		",\u0190\x03\x02\x02\x02.\u0193\x03\x02\x02\x020\u0196\x03\x02\x02\x02" +
		"2\u01A1\x03\x02\x02\x024\u01A4\x03\x02\x02\x026\u01A8\x03\x02\x02\x02" +
		"8\u01AC\x03\x02\x02\x02:\u01BA\x03\x02\x02\x02<\u01C6\x03\x02\x02\x02" +
		">\u01CA\x03\x02\x02\x02@\u01CE\x03\x02\x02\x02B\u01D1\x03\x02\x02\x02" +
		"D\u01EB\x03\x02\x02\x02F\u01ED\x03\x02\x02\x02H\u01F0\x03\x02\x02\x02" +
		"J\u01FE\x03\x02\x02\x02L\u0205\x03\x02\x02\x02N\u0207\x03\x02\x02\x02" +
		"P\u020E\x03\x02\x02\x02R\u0210\x03\x02\x02\x02T\u0212\x03\x02\x02\x02" +
		"V\u0214\x03\x02\x02\x02X\u0216\x03\x02\x02\x02Z\u0218\x03\x02\x02\x02" +
		"\\\u021D\x03\x02\x02\x02^\u021F\x03\x02\x02\x02`\u0221\x03\x02\x02\x02" +
		"b\u0226\x03\x02\x02\x02d\u0228\x03\x02\x02\x02f\u022E\x03\x02\x02\x02" +
		"h\u0232\x03\x02\x02\x02j\u0244\x03\x02\x02\x02l\u0246\x03\x02\x02\x02" +
		"n\u024C\x03\x02\x02\x02p\u024E\x03\x02\x02\x02r\u0250\x03\x02\x02\x02" +
		"t\u0252\x03\x02\x02\x02v\u0259\x03\x02\x02\x02x\u025B\x03\x02\x02\x02" +
		"z\u025D\x03\x02\x02\x02|\u026F\x03\x02\x02\x02~\u0271\x03\x02\x02\x02" +
		"\x80\u0279\x03\x02\x02\x02\x82\u027D\x03\x02\x02\x02\x84\u028A\x03\x02" +
		"\x02\x02\x86\u028C\x03\x02\x02\x02\x88\u028E\x03\x02\x02\x02\x8A\u0293" +
		"\x03\x02\x02\x02\x8C\u0295\x03\x02\x02\x02\x8E\u029C\x03\x02\x02\x02\x90" +
		"\u029E\x03\x02\x02\x02\x92\u02A2\x03\x02\x02\x02\x94\u02A8\x03\x02\x02" +
		"\x02\x96\u02AE\x03\x02\x02\x02\x98\u02BC\x03\x02\x02\x02\x9A\u02BF\x03" +
		"\x02\x02\x02\x9C\u02C3\x03\x02\x02\x02\x9E\u02C5\x03\x02\x02\x02\xA0\u02C8" +
		"\x03\x02\x02\x02\xA2\u02CB\x03\x02\x02\x02\xA4\u02CE\x03\x02\x02\x02\xA6" +
		"\u02D1\x03\x02\x02\x02\xA8\xB7\x05\x04\x03\x02\xA9\xAB\x05v<\x02\xAA\xA9" +
		"\x03\x02\x02\x02\xAB\xAE\x03\x02\x02\x02\xAC\xAA\x03\x02\x02\x02\xAC\xAD" +
		"\x03\x02\x02\x02\xAD\xB2\x03\x02\x02\x02\xAE\xAC\x03\x02\x02\x02\xAF\xB1" +
		"\x05\x06\x04\x02\xB0\xAF\x03\x02\x02\x02\xB1\xB4\x03\x02\x02\x02\xB2\xB0" +
		"\x03\x02\x02\x02\xB2\xB3\x03\x02\x02\x02\xB3\xB5\x03\x02\x02\x02\xB4\xB2" +
		"\x03\x02\x02\x02\xB5\xB7\x07\x02\x02\x03\xB6\xA8\x03\x02\x02\x02\xB6\xAC" +
		"\x03\x02\x02\x02\xB7\x03\x03\x02\x02\x02\xB8\xB9\x07m\x02\x02\xB9\xBA" +
		"\x07%\x02\x02\xBA\x05\x03\x02\x02\x02\xBB\xBD\x05v<\x02\xBC\xBB\x03\x02" +
		"\x02\x02\xBD\xC0\x03\x02\x02\x02\xBE\xBC\x03\x02\x02\x02\xBE\xBF\x03\x02" +
		"\x02\x02\xBF\xC6\x03\x02\x02\x02\xC0\xBE\x03\x02\x02\x02\xC1\xC7\x05\x12" +
		"\n\x02\xC2\xC7\x05\x14\v\x02\xC3\xC4\x05\x0E\b\x02\xC4\xC5\x07\n\x02\x02" +
		"\xC5\xC7\x03\x02\x02\x02\xC6\xC1\x03\x02\x02\x02\xC6\xC2\x03\x02\x02\x02" +
		"\xC6\xC3\x03\x02\x02\x02\xC7\xCA\x03\x02\x02\x02\xC8\xCA\x05\b\x05\x02" +
		"\xC9\xBE\x03\x02\x02\x02\xC9\xC8\x03\x02\x02\x02\xCA\x07\x03\x02\x02\x02" +
		"\xCB\xCD\x079\x02\x02\xCC\xCE\x07m\x02\x02\xCD\xCC\x03\x02\x02\x02\xCD" +
		"\xCE\x03\x02\x02\x02\xCE\xD0\x03\x02\x02\x02\xCF\xD1\x05\f\x07\x02\xD0" +
		"\xCF\x03\x02\x02\x02\xD0\xD1\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2" +
		"\xDE\x07\x05\x02\x02\xD3\xD8\x05\n\x06\x02\xD4\xD5\x07\t\x02\x02\xD5\xD7" +
		"\x05\n\x06\x02\xD6\xD4\x03\x02\x02\x02\xD7\xDA\x03\x02\x02\x02\xD8\xD6" +
		"\x03\x02\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9\xDC\x03\x02\x02\x02\xDA\xD8" +
		"\x03\x02\x02\x02\xDB\xDD\x07\t\x02\x02\xDC\xDB\x03\x02\x02\x02\xDC\xDD" +
		"\x03\x02\x02\x02\xDD\xDF\x03\x02\x02\x02\xDE\xD3\x03\x02\x02\x02\xDE\xDF" +
		"\x03\x02\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0\xE2\x07\x06\x02\x02\xE1\xE3" +
		"\x07\n\x02\x02\xE2\xE1\x03\x02\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3\t\x03" +
		"\x02\x02\x02\xE4\xE7\x05\x1C\x0F\x02\xE5\xE6\x07\v\x02\x02\xE6\xE8\x05" +
		"z>\x02\xE7\xE5\x03\x02\x02\x02\xE7\xE8\x03\x02\x02\x02\xE8\v\x03\x02\x02" +
		"\x02\xE9\xEA\x07\x03\x02\x02\xEA\xEB\t\x02\x02\x02\xEB\xEC\x07p\x02\x02" +
		"\xEC\xED\x07\x04\x02\x02\xED\r\x03\x02\x02\x02\xEE\xF2\x078\x02\x02\xEF" +
		"\xF1\x05N(\x02\xF0\xEF\x03\x02\x02\x02\xF1\xF4\x03\x02\x02\x02\xF2\xF0" +
		"\x03\x02\x02\x02\xF2\xF3\x03\x02\x02\x02\xF3\xFB\x03\x02\x02\x02\xF4\xF2" +
		"\x03\x02\x02\x02\xF5\xF7\x05N(\x02\xF6\xF5\x03\x02\x02\x02\xF7\xF8\x03" +
		"\x02\x02\x02\xF8\xF6\x03\x02\x02\x02\xF8\xF9\x03\x02\x02\x02\xF9\xFB\x03" +
		"\x02\x02\x02\xFA\xEE\x03\x02\x02\x02\xFA\xF6\x03\x02\x02\x02\xFB\xFE\x03" +
		"\x02\x02\x02\xFC\xFF\x05\x1C\x0F\x02\xFD\xFF\x05\x10\t\x02\xFE\xFC\x03" +
		"\x02\x02\x02\xFE\xFD\x03\x02\x02\x02\xFF\u0107\x03\x02\x02\x02\u0100\u0103" +
		"\x07\t\x02\x02\u0101\u0104\x05\x1C\x0F\x02\u0102\u0104\x05\x10\t\x02\u0103" +
		"\u0101\x03\x02\x02\x02\u0103\u0102\x03\x02\x02\x02\u0104\u0106\x03\x02" +
		"\x02\x02\u0105\u0100\x03\x02\x02\x02\u0106\u0109\x03\x02\x02\x02\u0107" +
		"\u0105\x03\x02\x02\x02\u0107\u0108\x03\x02\x02\x02\u0108\x0F\x03\x02\x02" +
		"\x02\u0109\u0107\x03\x02\x02\x02\u010A\u010B\x05\x1C\x0F\x02\u010B\u010E" +
		"\x07\v\x02\x02\u010C\u010F\x05z>\x02\u010D\u010F\x05B\"\x02\u010E\u010C" +
		"\x03\x02\x02\x02\u010E\u010D\x03\x02\x02\x02\u010F\x11\x03\x02\x02\x02" +
		"\u0110\u0112\x05 \x11\x02\u0111\u0110\x03\x02\x02\x02\u0111\u0112\x03" +
		"\x02\x02\x02\u0112\u0114\x03\x02\x02\x02\u0113\u0115\x05\x1A\x0E\x02\u0114" +
		"\u0113\x03\x02\x02\x02\u0114\u0115\x03\x02\x02\x02\u0115\u0116\x03\x02" +
		"\x02\x02\u0116\u0117\x07m\x02\x02\u0117\u0118\x05\x16\f\x02\u0118\x13" +
		"\x03\x02\x02\x02\u0119\u011B\x05 \x11\x02\u011A\u011C\x05\x1A\x0E\x02" +
		"\u011B\u011A\x03\x02\x02\x02\u011B\u011C\x03\x02\x02\x02\u011C\u011D\x03" +
		"\x02\x02\x02\u011D\u011E\x07@\x02\x02\u011E\u011F\x05\\/\x02\u011F\u0120" +
		"\x05\x16\f\x02\u0120\x15\x03\x02\x02\x02\u0121\u012A\x07\x03\x02\x02\u0122" +
		"\u0127\x05H%\x02\u0123\u0124\x07\t\x02\x02\u0124\u0126\x05H%\x02\u0125" +
		"\u0123\x03\x02\x02\x02\u0126\u0129\x03\x02\x02\x02\u0127\u0125\x03\x02" +
		"\x02\x02\u0127\u0128\x03\x02\x02\x02\u0128\u012B\x03\x02\x02\x02\u0129" +
		"\u0127\x03\x02\x02\x02\u012A\u0122\x03\x02\x02\x02\u012A\u012B\x03\x02" +
		"\x02\x02\u012B\u012D\x03\x02\x02\x02\u012C\u012E\x05J&\x02\u012D\u012C" +
		"\x03\x02\x02\x02\u012D\u012E\x03\x02\x02\x02\u012E\u012F\x03\x02\x02\x02" +
		"\u012F\u0133\x07\x04\x02\x02\u0130\u0134\x07\n\x02\x02\u0131\u0134\x05" +
		"$\x13\x02\u0132\u0134\x05\x18\r\x02\u0133\u0130\x03\x02\x02\x02\u0133" +
		"\u0131\x03\x02\x02\x02\u0133\u0132\x03\x02\x02\x02\u0134\x17\x03\x02\x02" +
		"\x02\u0135\u0136\x07\v\x02\x02\u0136\u0137\x07m\x02\x02\u0137\u0138\x07" +
		"\n\x02\x02\u0138\x19\x03\x02\x02\x02\u0139\u0145\x07m\x02\x02\u013A\u013B" +
		"\x07\x05\x02\x02\u013B\u0140\x07m\x02\x02\u013C\u013D\x07\t\x02\x02\u013D" +
		"\u013F\x07m\x02\x02\u013E\u013C\x03\x02\x02\x02\u013F\u0142\x03\x02\x02" +
		"\x02\u0140\u013E\x03\x02\x02\x02\u0140\u0141\x03\x02\x02\x02\u0141\u0143" +
		"\x03\x02\x02\x02\u0142\u0140\x03\x02\x02\x02\u0143\u0145\x07\x06\x02\x02" +
		"\u0144\u0139\x03\x02\x02\x02\u0144\u013A\x03\x02\x02\x02\u0145\u0146\x03" +
		"\x02\x02\x02\u0146\u0147\x07%\x02\x02\u0147\x1B\x03\x02\x02\x02\u0148" +
		"\u014A\x05\x1A\x0E\x02\u0149\u0148\x03\x02\x02\x02\u0149\u014A\x03\x02" +
		"\x02\x02\u014A\u014B\x03\x02\x02\x02\u014B\u014F\x07m\x02\x02\u014C\u014E" +
		"\x05\x1E\x10\x02\u014D\u014C\x03\x02\x02\x02\u014E\u0151\x03\x02\x02\x02" +
		"\u014F\u014D\x03\x02\x02\x02\u014F\u0150\x03\x02\x02\x02\u0150\x1D\x03" +
		"\x02\x02\x02\u0151\u014F\x03\x02\x02\x02\u0152\u0157\x07\x07\x02\x02\u0153" +
		"\u0155\x05z>\x02\u0154\u0156\x07L\x02\x02\u0155\u0154\x03\x02\x02\x02" +
		"\u0155\u0156\x03\x02\x02\x02\u0156\u0158\x03\x02\x02\x02\u0157\u0153\x03" +
		"\x02\x02\x02\u0157\u0158\x03\x02\x02\x02\u0158\u0159\x03\x02\x02\x02\u0159" +
		"\u0163\x07\b\x02\x02\u015A\u015F\x07\x05\x02\x02\u015B\u015D\x05z>\x02" +
		"\u015C\u015E\x07L\x02\x02\u015D\u015C\x03\x02\x02\x02\u015D\u015E\x03" +
		"\x02\x02\x02\u015E\u0160\x03\x02\x02\x02\u015F\u015B\x03\x02\x02\x02\u015F" +
		"\u0160\x03\x02\x02\x02\u0160\u0161\x03\x02\x02\x02\u0161\u0163\x07\x06" +
		"\x02\x02\u0162\u0152\x03\x02\x02\x02\u0162\u015A\x03\x02\x02\x02\u0163" +
		"\x1F\x03\x02\x02\x02\u0164\u0168\x05\"\x12\x02\u0165\u0168\x07=\x02\x02" +
		"\u0166\u0168\x07>\x02\x02\u0167\u0164\x03\x02\x02\x02\u0167\u0165\x03" +
		"\x02\x02\x02\u0167\u0166\x03\x02\x02\x02\u0168!\x03\x02\x02\x02\u0169" +
		"\u016A\t\x03\x02\x02\u016A#\x03\x02\x02\x02\u016B\u0174\x05z>\x02\u016C" +
		"\u0174\x05(\x15\x02\u016D\u0174\x05l7\x02\u016E\u0174\x05*\x16\x02\u016F" +
		"\u0174\x05,\x17\x02\u0170\u0174\x05.\x18\x02\u0171\u0174\x054\x1B\x02" +
		"\u0172\u0174\x05\x0E\b\x02\u0173\u016B\x03\x02\x02\x02\u0173\u016C\x03" +
		"\x02\x02\x02\u0173\u016D\x03\x02\x02\x02\u0173\u016E\x03\x02\x02\x02\u0173" +
		"\u016F\x03\x02\x02\x02\u0173\u0170\x03\x02\x02\x02\u0173\u0171\x03\x02" +
		"\x02\x02\u0173\u0172\x03\x02\x02\x02\u0174\u0175\x03\x02\x02\x02\u0175" +
		"\u0176\x07\n\x02\x02\u0176\u017D\x03\x02\x02\x02\u0177\u017D\x05\x04\x03" +
		"\x02\u0178\u017D\x05&\x14\x02\u0179\u017D\x05b2\x02\u017A\u017D\x050\x19" +
		"\x02\u017B\u017D\x058\x1D\x02\u017C\u0173\x03\x02\x02\x02\u017C\u0177" +
		"\x03\x02\x02\x02\u017C\u0178\x03\x02\x02\x02\u017C\u0179\x03\x02\x02\x02" +
		"\u017C\u017A\x03\x02\x02\x02\u017C\u017B\x03\x02\x02\x02\u017D\u017F\x03" +
		"\x02\x02\x02\u017E\u0180\x07s\x02\x02\u017F\u017E\x03\x02\x02\x02\u017F" +
		"\u0180\x03\x02\x02\x02\u0180%\x03\x02\x02\x02\u0181\u0185\x07\x05\x02" +
		"\x02\u0182\u0184\x05$\x13\x02\u0183\u0182\x03\x02\x02\x02\u0184\u0187" +
		"\x03\x02\x02\x02\u0185\u0183\x03\x02\x02\x02\u0185\u0186\x03\x02\x02\x02" +
		"\u0186\u0188\x03\x02\x02\x02\u0187\u0185\x03\x02\x02\x02\u0188\u0189\x07" +
		"\x06\x02\x02\u0189\'\x03\x02\x02\x02\u018A\u018B\x072\x02\x02\u018B\u018C" +
		"\x05z>\x02\u018C)\x03\x02\x02\x02\u018D\u018E\x073\x02\x02\u018E\u018F" +
		"\x05z>\x02\u018F+\x03\x02\x02\x02\u0190\u0191\x074\x02\x02\u0191\u0192" +
		"\x05z>\x02\u0192-\x03\x02\x02\x02\u0193\u0194\x075\x02\x02\u0194\u0195" +
		"\x05z>\x02\u0195/\x03\x02\x02\x02\u0196\u019B\x07A\x02\x02\u0197\u019C" +
		"\x056\x1C\x02\u0198\u0199\x05z>\x02\u0199\u019A\x07B\x02\x02\u019A\u019C" +
		"\x03\x02\x02\x02\u019B\u0197\x03\x02\x02\x02\u019B\u0198\x03\x02\x02\x02" +
		"\u019C\u019D\x03\x02\x02\x02\u019D\u019F\x05$\x13\x02\u019E\u01A0\x05" +
		"2\x1A\x02\u019F\u019E\x03\x02\x02\x02\u019F\u01A0\x03\x02\x02\x02\u01A0" +
		"1\x03\x02\x02\x02\u01A1\u01A2\x07C\x02\x02\u01A2\u01A3\x05$\x13\x02\u01A3" +
		"3\x03\x02\x02\x02\u01A4\u01A6\x077\x02\x02\u01A5\u01A7\x05z>\x02\u01A6" +
		"\u01A5\x03\x02\x02\x02\u01A6\u01A7\x03\x02\x02\x02\u01A75\x03\x02\x02" +
		"\x02\u01A8\u01A9\x07\x03\x02\x02\u01A9\u01AA\x05z>\x02\u01AA\u01AB\x07" +
		"\x04\x02\x02\u01AB7\x03\x02\x02\x02\u01AC\u01AD\x07D\x02\x02\u01AD\u01AE" +
		"\x056\x1C\x02\u01AE\u01B2\x07\x05\x02\x02\u01AF\u01B1\x05:\x1E\x02\u01B0" +
		"\u01AF\x03\x02\x02\x02\u01B1\u01B4\x03\x02\x02\x02\u01B2\u01B0\x03\x02" +
		"\x02\x02\u01B2\u01B3\x03\x02\x02\x02\u01B3\u01B6\x03\x02\x02\x02\u01B4" +
		"\u01B2\x03\x02\x02\x02\u01B5\u01B7\x05<\x1F\x02\u01B6\u01B5\x03\x02\x02" +
		"\x02\u01B6\u01B7\x03\x02\x02\x02\u01B7\u01B8\x03\x02\x02\x02\u01B8\u01B9" +
		"\x07\x06\x02\x02\u01B99\x03\x02\x02\x02\u01BA\u01BB\x07E\x02\x02\u01BB" +
		"\u01C0\x05> \x02\u01BC\u01BD\x07\t\x02\x02\u01BD\u01BF\x05> \x02\u01BE" +
		"\u01BC\x03\x02\x02\x02\u01BF\u01C2\x03\x02\x02\x02\u01C0\u01BE\x03\x02" +
		"\x02\x02\u01C0\u01C1\x03\x02\x02\x02\u01C1\u01C3\x03\x02\x02\x02\u01C2" +
		"\u01C0\x03\x02\x02\x02\u01C3\u01C4\x07%\x02\x02\u01C4\u01C5\x05$\x13\x02" +
		"\u01C5;\x03\x02\x02\x02\u01C6\u01C7\x07F\x02\x02\u01C7\u01C8\x07%\x02" +
		"\x02\u01C8\u01C9\x05$\x13\x02\u01C9=\x03\x02\x02\x02\u01CA\u01CC\x05n" +
		"8\x02\u01CB\u01CD\x05@!\x02\u01CC\u01CB\x03\x02\x02\x02\u01CC\u01CD\x03" +
		"\x02\x02\x02\u01CD?\x03\x02\x02\x02\u01CE\u01CF\x070\x02\x02\u01CF\u01D0" +
		"\x05n8\x02\u01D0A\x03\x02\x02\x02\u01D1\u01D2\x07\x05\x02\x02\u01D2\u01D7" +
		"\x05D#\x02\u01D3\u01D4\x07\t\x02\x02\u01D4\u01D6\x05D#\x02\u01D5\u01D3" +
		"\x03\x02\x02\x02\u01D6\u01D9\x03\x02\x02\x02\u01D7\u01D5\x03\x02\x02\x02" +
		"\u01D7\u01D8\x03\x02\x02\x02\u01D8\u01DA\x03\x02\x02\x02\u01D9\u01D7\x03" +
		"\x02\x02\x02\u01DA\u01DB\x07\x06\x02\x02\u01DBC\x03\x02\x02\x02\u01DC" +
		"\u01DE\x05\x1A\x0E\x02\u01DD\u01DC\x03\x02\x02\x02\u01DD\u01DE\x03\x02" +
		"\x02\x02\u01DE\u01E8\x03\x02\x02\x02\u01DF\u01E1\x07\x18\x02\x02\u01E0" +
		"\u01DF\x03\x02\x02\x02\u01E0\u01E1\x03\x02\x02\x02\u01E1\u01E2\x03\x02" +
		"\x02\x02\u01E2\u01E9\x07m\x02\x02\u01E3\u01E5\x07\x18\x02\x02\u01E4\u01E3" +
		"\x03\x02\x02\x02\u01E4\u01E5\x03\x02\x02\x02\u01E5\u01E6\x03\x02\x02\x02" +
		"\u01E6\u01E9\x05P)\x02\u01E7\u01E9\x05t;\x02\u01E8\u01E0\x03\x02\x02\x02" +
		"\u01E8\u01E4\x03\x02\x02\x02\u01E8\u01E7\x03\x02\x02\x02\u01E9\u01EC\x03" +
		"\x02\x02\x02\u01EA\u01EC\x05B\"\x02\u01EB\u01DD\x03\x02\x02\x02\u01EB" +
		"\u01EA\x03\x02\x02\x02\u01ECE\x03\x02\x02\x02\u01ED\u01EE\t\x04\x02\x02" +
		"\u01EEG\x03\x02\x02\x02\u01EF\u01F1\x07:\x02\x02\u01F0\u01EF\x03\x02\x02" +
		"\x02\u01F0\u01F1\x03\x02\x02\x02\u01F1\u01F3\x03\x02\x02\x02\u01F2\u01F4" +
		"\x05L\'\x02\u01F3\u01F2\x03\x02\x02\x02\u01F3\u01F4\x03\x02\x02\x02\u01F4" +
		"\u01F5\x03\x02\x02\x02\u01F5\u01FB\x05\x1C\x0F\x02\u01F6\u01F9\x07\v\x02" +
		"\x02\u01F7\u01FA\x05z>\x02\u01F8\u01FA\x05B\"\x02\u01F9\u01F7\x03\x02" +
		"\x02\x02\u01F9\u01F8\x03\x02\x02\x02\u01FA\u01FC\x03\x02\x02\x02\u01FB" +
		"\u01F6\x03\x02\x02\x02\u01FB\u01FC\x03\x02\x02\x02\u01FCI\x03\x02\x02" +
		"\x02\u01FD\u01FF\x07\t\x02\x02\u01FE\u01FD\x03\x02\x02\x02\u01FE\u01FF" +
		"\x03\x02\x02\x02\u01FF\u0201\x03\x02\x02\x02\u0200\u0202\x05\x1A\x0E\x02" +
		"\u0201\u0200\x03\x02\x02\x02\u0201\u0202\x03\x02\x02\x02\u0202\u0203\x03" +
		"\x02\x02\x02\u0203\u0204\x071\x02\x02\u0204K\x03\x02\x02\x02\u0205\u0206" +
		"\x07)\x02\x02\u0206M\x03\x02\x02\x02\u0207\u0208\t\x05\x02\x02\u0208O" +
		"\x03\x02\x02\x02\u0209\u020F\x05T+\x02\u020A\u020F\x05R*\x02\u020B\u020F" +
		"\x05V,\x02\u020C\u020F\x05X-\x02\u020D\u020F\x05Z.\x02\u020E\u0209\x03" +
		"\x02\x02\x02\u020E\u020A\x03\x02\x02\x02\u020E\u020B\x03\x02\x02\x02\u020E" +
		"\u020C\x03\x02\x02\x02\u020E\u020D\x03\x02\x02\x02\u020FQ\x03\x02\x02" +
		"\x02\u0210\u0211\x07q\x02\x02\u0211S\x03\x02\x02\x02\u0212\u0213\x07p" +
		"\x02\x02\u0213U\x03\x02\x02\x02\u0214\u0215\x07o\x02\x02\u0215W\x03\x02" +
		"\x02\x02\u0216\u0217\x07r\x02\x02\u0217Y\x03\x02\x02\x02\u0218\u0219\x07" +
		"n\x02\x02\u0219[\x03\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\u021A\u021E\x05^0\x02\u021B\u021E\x05`1\x02\u021C\u021E\x07\v" +
		"\x02\x02\u021D\u021A\x03\x02\x02\x02\u021D\u021B\x03\x02\x02\x02\u021D" +
		"\u021C\x03\x02\x02\x02\u021E]\x03\x02\x02\x02\u021F\u0220\t\x06\x02\x02" +
		"\u0220_\x03\x02\x02\x02\u0221\u0222\t\x07\x02\x02\u0222a\x03\x02\x02\x02" +
		"\u0223\u0227\x05f4\x02\u0224\u0227\x05h5\x02\u0225\u0227\x05d3\x02\u0226" +
		"\u0223\x03\x02\x02\x02\u0226\u0224\x03\x02\x02\x02\u0226\u0225\x03\x02" +
		"\x02\x02\u0227c\x03\x02\x02\x02\u0228\u0229\x07I\x02\x02\u0229\u022C\x05" +
		"$\x13\x02\u022A\u022B\x07G\x02\x02\u022B\u022D\x056\x1C\x02\u022C\u022A" +
		"\x03\x02\x02\x02\u022C\u022D\x03\x02\x02\x02\u022De\x03\x02\x02\x02\u022E" +
		"\u022F\x07G\x02\x02\u022F\u0230\x056\x1C\x02\u0230\u0231\x05$\x13\x02" +
		"\u0231g\x03\x02\x02\x02\u0232\u0233\x07H\x02\x02\u0233\u0235\x07\x03\x02" +
		"\x02\u0234\u0236\x05j6\x02\u0235\u0234\x03\x02\x02\x02\u0235\u0236\x03" +
		"\x02\x02\x02\u0236\u0237\x03\x02\x02\x02\u0237\u0239\x07\n\x02\x02\u0238" +
		"\u023A\x05z>\x02\u0239\u0238\x03\x02\x02\x02\u0239\u023A\x03\x02\x02\x02" +
		"\u023A\u023B\x03\x02\x02\x02\u023B\u023D\x07\n\x02\x02\u023C\u023E\x05" +
		"z>\x02\u023D\u023C\x03\x02\x02\x02\u023D\u023E\x03\x02\x02\x02\u023E\u023F" +
		"\x03\x02\x02\x02\u023F\u0240\x07\x04\x02\x02\u0240\u0241\x05$\x13\x02" +
		"\u0241i\x03\x02\x02\x02\u0242\u0245\x05\x0E\b\x02\u0243\u0245\x05z>\x02" +
		"\u0244\u0242\x03\x02\x02\x02\u0244\u0243\x03\x02\x02\x02\u0245k\x03\x02" +
		"\x02\x02\u0246\u0247\t\b\x02\x02\u0247m\x03\x02\x02\x02\u0248\u024D\x05" +
		"t;\x02\u0249\u024D\x05P)\x02\u024A\u024D\x05p9\x02\u024B\u024D\x05r:\x02" +
		"\u024C\u0248\x03\x02\x02\x02\u024C\u0249\x03\x02\x02\x02\u024C\u024A\x03" +
		"\x02\x02\x02\u024C\u024B\x03\x02\x02\x02\u024Do\x03\x02\x02\x02\u024E" +
		"\u024F\t\t\x02\x02\u024Fq\x03\x02\x02\x02\u0250\u0251\t\n\x02\x02\u0251" +
		"s\x03\x02\x02\x02\u0252\u0256\t\v\x02\x02\u0253\u0255\x05t;\x02\u0254" +
		"\u0253\x03\x02\x02\x02\u0255\u0258\x03\x02\x02\x02\u0256\u0254\x03\x02" +
		"\x02\x02\u0256\u0257\x03\x02\x02\x02\u0257u\x03\x02\x02\x02\u0258\u0256" +
		"\x03\x02\x02\x02\u0259\u025A\x05x=\x02\u025Aw\x03\x02\x02\x02\u025B\u025C" +
		"\x07v\x02\x02\u025Cy\x03\x02\x02\x02\u025D\u0264\x05|?\x02\u025E\u0260" +
		"\x07L\x02\x02\u025F\u025E\x03\x02\x02\x02\u025F\u0260\x03\x02\x02\x02" +
		"\u0260\u0265\x03\x02\x02\x02\u0261\u0265\x05~@\x02\u0262\u0265\x05\x80" +
		"A\x02\u0263\u0265\x05\x82B\x02\u0264\u025F\x03\x02\x02\x02\u0264\u0261" +
		"\x03\x02\x02\x02\u0264\u0262\x03\x02\x02\x02\u0264\u0263\x03\x02\x02\x02" +
		"\u0265{\x03\x02\x02\x02\u0266\u0270\x05n8\x02\u0267\u0270\x05\x9AN\x02" +
		"\u0268\u0270\x05\x96L\x02\u0269\u026A\x07\x03\x02\x02\u026A\u026B\x05" +
		"z>\x02\u026B\u026C\x07\x04\x02\x02\u026C\u0270\x03\x02\x02\x02\u026D\u0270" +
		"\x05\x84C\x02\u026E\u0270\x05\x8AF\x02\u026F\u0266\x03\x02\x02\x02\u026F" +
		"\u0267\x03\x02\x02\x02\u026F\u0268\x03\x02\x02\x02\u026F\u0269\x03\x02" +
		"\x02\x02\u026F\u026D\x03\x02\x02\x02\u026F\u026E\x03\x02\x02\x02\u0270" +
		"}\x03\x02\x02\x02\u0271\u0272\x07$\x02\x02\u0272\u0273\x05z>\x02\u0273" +
		"\u0274\x07%\x02\x02\u0274\u0275\x05z>\x02\u0275\x7F\x03\x02\x02\x02\u0276" +
		"\u0277\x05\xA6T\x02\u0277\u0278\x05z>\x02\u0278\u027A\x03\x02\x02\x02" +
		"\u0279\u0276\x03\x02\x02\x02\u027A\u027B\x03\x02\x02\x02\u027B\u0279\x03" +
		"\x02\x02\x02\u027B\u027C\x03\x02\x02\x02\u027C\x81\x03\x02\x02\x02\u027D" +
		"\u027E\x05\x8EH\x02\u027E\u027F\x05z>\x02\u027F\x83\x03\x02\x02\x02\u0280" +
		"\u028B\x05\x9EP\x02\u0281\u028B\x05\xA0Q\x02\u0282\u028B\x05\xA2R\x02" +
		"\u0283\u028B\x05\xA4S\x02\u0284\u0285\x05\x86D\x02\u0285\u0286\x05z>\x02" +
		"\u0286\u028B\x03\x02\x02\x02\u0287\u0288\x05\x88E\x02\u0288\u0289\x05" +
		"\x9AN\x02\u0289\u028B\x03\x02\x02\x02\u028A\u0280\x03\x02\x02\x02\u028A" +
		"\u0281\x03\x02\x02\x02\u028A\u0282\x03\x02\x02\x02\u028A\u0283\x03\x02" +
		"\x02\x02\u028A\u0284\x03\x02\x02\x02\u028A\u0287\x03\x02\x02\x02\u028B" +
		"\x85\x03\x02\x02\x02\u028C\u028D\t\f\x02\x02\u028D\x87\x03\x02\x02\x02" +
		"\u028E\u028F\t\r\x02\x02\u028F\x89\x03\x02\x02\x02\u0290\u0294\x05\x90" +
		"I\x02\u0291\u0294\x05\x8CG\x02\u0292\u0294\x05\x98M\x02\u0293\u0290\x03" +
		"\x02\x02\x02\u0293\u0291\x03\x02\x02\x02\u0293\u0292\x03\x02\x02\x02\u0294" +
		"\x8B\x03\x02\x02\x02\u0295\u0298\x05\x9AN\x02\u0296\u0299\x05\x92J\x02" +
		"\u0297\u0299\x05\x94K\x02\u0298\u0296\x03\x02\x02\x02\u0298\u0297\x03" +
		"\x02\x02\x02\u0299\u029A\x03\x02\x02\x02\u029A\u0298\x03\x02\x02\x02\u029A" +
		"\u029B\x03\x02\x02\x02\u029B\x8D\x03\x02\x02\x02\u029C\u029D\t\x0E\x02" +
		"\x02\u029D\x8F\x03\x02\x02\x02\u029E\u029F\x05\x9CO\x02\u029F\u02A0\x07" +
		"\v\x02\x02\u02A0\u02A1\x05z>\x02\u02A1\x91\x03\x02\x02\x02\u02A2\u02A4" +
		"\x07\x07\x02\x02\u02A3\u02A5\x05z>\x02\u02A4\u02A3\x03\x02\x02\x02\u02A4" +
		"\u02A5\x03\x02\x02\x02\u02A5\u02A6\x03\x02\x02\x02\u02A6\u02A7\x07\b\x02" +
		"\x02\u02A7\x93\x03\x02\x02\x02\u02A8\u02AA\x07\x05\x02\x02\u02A9\u02AB" +
		"\x05z>\x02\u02AA\u02A9\x03\x02\x02\x02\u02AA\u02AB\x03\x02\x02\x02\u02AB" +
		"\u02AC\x03\x02\x02\x02\u02AC\u02AD\x07\x06\x02\x02\u02AD\x95\x03\x02\x02" +
		"\x02\u02AE\u02AF\x07m\x02\x02\u02AF\u02B8\x07\x03\x02\x02\u02B0\u02B5" +
		"\x05z>\x02\u02B1\u02B2\x07\t\x02\x02\u02B2\u02B4\x05z>\x02\u02B3\u02B1" +
		"\x03\x02\x02\x02\u02B4\u02B7\x03\x02\x02\x02\u02B5\u02B3\x03\x02\x02\x02" +
		"\u02B5\u02B6\x03\x02\x02\x02\u02B6\u02B9\x03\x02\x02\x02\u02B7\u02B5\x03" +
		"\x02\x02\x02\u02B8\u02B0\x03\x02\x02\x02\u02B8\u02B9\x03\x02\x02\x02\u02B9" +
		"\u02BA\x03\x02\x02\x02\u02BA\u02BB\x07\x04\x02\x02\u02BB\x97\x03\x02\x02" +
		"\x02\u02BC\u02BD\x05\x1A\x0E\x02\u02BD\u02BE\x05|?\x02\u02BE\x99\x03\x02" +
		"\x02\x02\u02BF\u02C0\x07m\x02\x02\u02C0\x9B\x03\x02\x02\x02\u02C1\u02C4" +
		"\x05\x9AN\x02\u02C2\u02C4\x05\x8CG\x02\u02C3\u02C1\x03\x02\x02\x02\u02C3" +
		"\u02C2\x03\x02\x02\x02\u02C4\x9D\x03\x02\x02\x02\u02C5\u02C6\x05\x9CO" +
		"\x02\u02C6\u02C7\x07\x1C\x02\x02\u02C7\x9F\x03\x02\x02\x02\u02C8\u02C9" +
		"\x07\x1C\x02\x02\u02C9\u02CA\x05\x9CO\x02\u02CA\xA1\x03\x02\x02\x02\u02CB" +
		"\u02CC\x05\x9CO\x02\u02CC\u02CD\x07\x1D\x02\x02\u02CD\xA3\x03\x02\x02" +
		"\x02\u02CE\u02CF\x07\x1D\x02\x02\u02CF\u02D0\x05\x9CO\x02\u02D0\xA5\x03" +
		"\x02\x02\x02\u02D1\u02D2\t\x0F\x02\x02\u02D2\xA7\x03\x02\x02\x02U\xAC" +
		"\xB2\xB6\xBE\xC6\xC9\xCD\xD0\xD8\xDC\xDE\xE2\xE7\xF2\xF8\xFA\xFE\u0103" +
		"\u0107\u010E\u0111\u0114\u011B\u0127\u012A\u012D\u0133\u0140\u0144\u0149" +
		"\u014F\u0155\u0157\u015D\u015F\u0162\u0167\u0173\u017C\u017F\u0185\u019B" +
		"\u019F\u01A6\u01B2\u01B6\u01C0\u01CC\u01D7\u01DD\u01E0\u01E4\u01E8\u01EB" +
		"\u01F0\u01F3\u01F9\u01FB\u01FE\u0201\u020E\u021D\u0226\u022C\u0235\u0239" +
		"\u023D\u0244\u024C\u0256\u025F\u0264\u026F\u027B\u028A\u0293\u0298\u029A" +
		"\u02A4\u02AA\u02B5\u02B8\u02C3";
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterFile) {
			listener.enterFile(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterProcessorLabel) {
			listener.enterProcessorLabel(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterEnum) {
			listener.enterEnum(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterEnumMember) {
			listener.enterEnumMember(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterEnumIterator) {
			listener.enterEnumIterator(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterVarDeclaration) {
			listener.enterVarDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterVarInit) {
			listener.enterVarInit(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterFunctionDecl) {
			listener.enterFunctionDecl(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterOperatorOverload) {
			listener.enterOperatorOverload(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterFunctionDeclarationParams) {
			listener.enterFunctionDeclarationParams(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterNativeAssigment) {
			listener.enterNativeAssigment(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterTag) {
			listener.enterTag(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterVariable) {
			listener.enterVariable(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterArrayIndex) {
			listener.enterArrayIndex(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterFuncDeclModif) {
			listener.enterFuncDeclModif(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterFuncModif) {
			listener.enterFuncModif(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public cycles(): CyclesContext | undefined {
		return this.tryGetRuleContext(0, CyclesContext);
	}
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	public switch(): SwitchContext | undefined {
		return this.tryGetRuleContext(0, SwitchContext);
	}
	public BACKSLAH(): TerminalNode | undefined { return this.tryGetToken(pawnParser.BACKSLAH, 0); }
	public expresion(): ExpresionContext | undefined {
		return this.tryGetRuleContext(0, ExpresionContext);
	}
	public assert(): AssertContext | undefined {
		return this.tryGetRuleContext(0, AssertContext);
	}
	public cycleKeywords(): CycleKeywordsContext | undefined {
		return this.tryGetRuleContext(0, CycleKeywordsContext);
	}
	public exit(): ExitContext | undefined {
		return this.tryGetRuleContext(0, ExitContext);
	}
	public goto(): GotoContext | undefined {
		return this.tryGetRuleContext(0, GotoContext);
	}
	public sleep(): SleepContext | undefined {
		return this.tryGetRuleContext(0, SleepContext);
	}
	public return(): ReturnContext | undefined {
		return this.tryGetRuleContext(0, ReturnContext);
	}
	public varDeclaration(): VarDeclarationContext | undefined {
		return this.tryGetRuleContext(0, VarDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_statement; }
	// @Override
	public enterRule(listener: IPawnListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterCompoundStatment) {
			listener.enterCompoundStatment(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterAssert) {
			listener.enterAssert(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterExit) {
			listener.enterExit(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterGoto) {
			listener.enterGoto(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterSleep) {
			listener.enterSleep(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterIfStatement) {
			listener.enterIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterElseStatement) {
			listener.enterElseStatement(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterReturn) {
			listener.enterReturn(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterCondition) {
			listener.enterCondition(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterSwitch) {
			listener.enterSwitch(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterCase) {
			listener.enterCase(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterDefault) {
			listener.enterDefault(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterCase_list) {
			listener.enterCase_list(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterRange) {
			listener.enterRange(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterArrayInit) {
			listener.enterArrayInit(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterArrayInitMember) {
			listener.enterArrayInitMember(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public ASSIGMENT_RIGHT(): TerminalNode | undefined { return this.tryGetToken(pawnParser.ASSIGMENT_RIGHT, 0); }
	public ASSIGMENT_RIGHT_LOG(): TerminalNode | undefined { return this.tryGetToken(pawnParser.ASSIGMENT_RIGHT_LOG, 0); }
	public ASSIGMENT_LEFT(): TerminalNode | undefined { return this.tryGetToken(pawnParser.ASSIGMENT_LEFT, 0); }
	public ASSIGMENT_AND(): TerminalNode | undefined { return this.tryGetToken(pawnParser.ASSIGMENT_AND, 0); }
	public ASSIGMENT_OR(): TerminalNode | undefined { return this.tryGetToken(pawnParser.ASSIGMENT_OR, 0); }
	public ASSIGMENT_XOR(): TerminalNode | undefined { return this.tryGetToken(pawnParser.ASSIGMENT_XOR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_assigments; }
	// @Override
	public enterRule(listener: IPawnListener): void {
		if (listener.enterAssigments) {
			listener.enterAssigments(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public variable(): VariableContext {
		return this.getRuleContext(0, VariableContext);
	}
	public CONST(): TerminalNode | undefined { return this.tryGetToken(pawnParser.CONST, 0); }
	public reference(): ReferenceContext | undefined {
		return this.tryGetRuleContext(0, ReferenceContext);
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterDeclParams) {
			listener.enterDeclParams(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public tag(): TagContext | undefined {
		return this.tryGetRuleContext(0, TagContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_ellipse; }
	// @Override
	public enterRule(listener: IPawnListener): void {
		if (listener.enterEllipse) {
			listener.enterEllipse(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterReference) {
			listener.enterReference(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterVarModifires) {
			listener.enterVarModifires(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterFloat) {
			listener.enterFloat(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterInteger) {
			listener.enterInteger(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterHex) {
			listener.enterHex(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterRational) {
			listener.enterRational(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterBinary) {
			listener.enterBinary(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_canBeOverloaded; }
	// @Override
	public enterRule(listener: IPawnListener): void {
		if (listener.enterCanBeOverloaded) {
			listener.enterCanBeOverloaded(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterArefmeticOperator) {
			listener.enterArefmeticOperator(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterCompareOperator) {
			listener.enterCompareOperator(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterCycles) {
			listener.enterCycles(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterDo) {
			listener.enterDo(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterWhile) {
			listener.enterWhile(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterFor) {
			listener.enterFor(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterForFirstExp) {
			listener.enterForFirstExp(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterCycleKeywords) {
			listener.enterCycleKeywords(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterBool_const) {
			listener.enterBool_const(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterPredefinedConstants) {
			listener.enterPredefinedConstants(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterDocs) {
			listener.enterDocs(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterDocBlock) {
			listener.enterDocBlock(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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


export class ExpresionContext extends ParserRuleContext {
	public tagableExpression(): TagableExpressionContext {
		return this.getRuleContext(0, TagableExpressionContext);
	}
	public ternarOperator(): TernarOperatorContext | undefined {
		return this.tryGetRuleContext(0, TernarOperatorContext);
	}
	public chainedRelationalOperator(): ChainedRelationalOperatorContext | undefined {
		return this.tryGetRuleContext(0, ChainedRelationalOperatorContext);
	}
	public binarExpressionOperator(): BinarExpressionOperatorContext | undefined {
		return this.tryGetRuleContext(0, BinarExpressionOperatorContext);
	}
	public CHAR(): TerminalNode | undefined { return this.tryGetToken(pawnParser.CHAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_expresion; }
	// @Override
	public enterRule(listener: IPawnListener): void {
		if (listener.enterExpresion) {
			listener.enterExpresion(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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


export class TagableExpressionContext extends ParserRuleContext {
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public symbol(): SymbolContext | undefined {
		return this.tryGetRuleContext(0, SymbolContext);
	}
	public functionCallOperator(): FunctionCallOperatorContext | undefined {
		return this.tryGetRuleContext(0, FunctionCallOperatorContext);
	}
	public OPEN_PARENTHESIS(): TerminalNode | undefined { return this.tryGetToken(pawnParser.OPEN_PARENTHESIS, 0); }
	public expresion(): ExpresionContext | undefined {
		return this.tryGetRuleContext(0, ExpresionContext);
	}
	public CLOSE_PARENTHESIS(): TerminalNode | undefined { return this.tryGetToken(pawnParser.CLOSE_PARENTHESIS, 0); }
	public unarOperator(): UnarOperatorContext | undefined {
		return this.tryGetRuleContext(0, UnarOperatorContext);
	}
	public binarOperator(): BinarOperatorContext | undefined {
		return this.tryGetRuleContext(0, BinarOperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_tagableExpression; }
	// @Override
	public enterRule(listener: IPawnListener): void {
		if (listener.enterTagableExpression) {
			listener.enterTagableExpression(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
		if (listener.exitTagableExpression) {
			listener.exitTagableExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitTagableExpression) {
			return visitor.visitTagableExpression(this);
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_ternarOperator; }
	// @Override
	public enterRule(listener: IPawnListener): void {
		if (listener.enterTernarOperator) {
			listener.enterTernarOperator(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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


export class ChainedRelationalOperatorContext extends ParserRuleContext {
	public chainedRelationalOperators(): ChainedRelationalOperatorsContext[];
	public chainedRelationalOperators(i: number): ChainedRelationalOperatorsContext;
	public chainedRelationalOperators(i?: number): ChainedRelationalOperatorsContext | ChainedRelationalOperatorsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ChainedRelationalOperatorsContext);
		} else {
			return this.getRuleContext(i, ChainedRelationalOperatorsContext);
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_chainedRelationalOperator; }
	// @Override
	public enterRule(listener: IPawnListener): void {
		if (listener.enterChainedRelationalOperator) {
			listener.enterChainedRelationalOperator(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
		if (listener.exitChainedRelationalOperator) {
			listener.exitChainedRelationalOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitChainedRelationalOperator) {
			return visitor.visitChainedRelationalOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BinarExpressionOperatorContext extends ParserRuleContext {
	public _operator!: BinarExpressionOperatorsContext;
	public _right!: ExpresionContext;
	public binarExpressionOperators(): BinarExpressionOperatorsContext {
		return this.getRuleContext(0, BinarExpressionOperatorsContext);
	}
	public expresion(): ExpresionContext {
		return this.getRuleContext(0, ExpresionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_binarExpressionOperator; }
	// @Override
	public enterRule(listener: IPawnListener): void {
		if (listener.enterBinarExpressionOperator) {
			listener.enterBinarExpressionOperator(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
		if (listener.exitBinarExpressionOperator) {
			listener.exitBinarExpressionOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitBinarExpressionOperator) {
			return visitor.visitBinarExpressionOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnarOperatorContext extends ParserRuleContext {
	public postIncrement(): PostIncrementContext | undefined {
		return this.tryGetRuleContext(0, PostIncrementContext);
	}
	public preIncrement(): PreIncrementContext | undefined {
		return this.tryGetRuleContext(0, PreIncrementContext);
	}
	public postDecrement(): PostDecrementContext | undefined {
		return this.tryGetRuleContext(0, PostDecrementContext);
	}
	public preDecrement(): PreDecrementContext | undefined {
		return this.tryGetRuleContext(0, PreDecrementContext);
	}
	public preExpresionOperator(): PreExpresionOperatorContext | undefined {
		return this.tryGetRuleContext(0, PreExpresionOperatorContext);
	}
	public expresion(): ExpresionContext | undefined {
		return this.tryGetRuleContext(0, ExpresionContext);
	}
	public preSymbolOperator(): PreSymbolOperatorContext | undefined {
		return this.tryGetRuleContext(0, PreSymbolOperatorContext);
	}
	public symbol(): SymbolContext | undefined {
		return this.tryGetRuleContext(0, SymbolContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_unarOperator; }
	// @Override
	public enterRule(listener: IPawnListener): void {
		if (listener.enterUnarOperator) {
			listener.enterUnarOperator(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
		if (listener.exitUnarOperator) {
			listener.exitUnarOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitUnarOperator) {
			return visitor.visitUnarOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PreExpresionOperatorContext extends ParserRuleContext {
	public BIT_COMPLEMEN(): TerminalNode | undefined { return this.tryGetToken(pawnParser.BIT_COMPLEMEN, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(pawnParser.MINUS, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(pawnParser.NOT, 0); }
	public SIZEOF(): TerminalNode | undefined { return this.tryGetToken(pawnParser.SIZEOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_preExpresionOperator; }
	// @Override
	public enterRule(listener: IPawnListener): void {
		if (listener.enterPreExpresionOperator) {
			listener.enterPreExpresionOperator(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
		if (listener.exitPreExpresionOperator) {
			listener.exitPreExpresionOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitPreExpresionOperator) {
			return visitor.visitPreExpresionOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PreSymbolOperatorContext extends ParserRuleContext {
	public DEFINED(): TerminalNode | undefined { return this.tryGetToken(pawnParser.DEFINED, 0); }
	public STATE(): TerminalNode | undefined { return this.tryGetToken(pawnParser.STATE, 0); }
	public TAGOF(): TerminalNode | undefined { return this.tryGetToken(pawnParser.TAGOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_preSymbolOperator; }
	// @Override
	public enterRule(listener: IPawnListener): void {
		if (listener.enterPreSymbolOperator) {
			listener.enterPreSymbolOperator(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
		if (listener.exitPreSymbolOperator) {
			listener.exitPreSymbolOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitPreSymbolOperator) {
			return visitor.visitPreSymbolOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BinarOperatorContext extends ParserRuleContext {
	public assigmentOperator(): AssigmentOperatorContext | undefined {
		return this.tryGetRuleContext(0, AssigmentOperatorContext);
	}
	public arrayIndexOperator(): ArrayIndexOperatorContext | undefined {
		return this.tryGetRuleContext(0, ArrayIndexOperatorContext);
	}
	public tagOperator(): TagOperatorContext | undefined {
		return this.tryGetRuleContext(0, TagOperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_binarOperator; }
	// @Override
	public enterRule(listener: IPawnListener): void {
		if (listener.enterBinarOperator) {
			listener.enterBinarOperator(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
		if (listener.exitBinarOperator) {
			listener.exitBinarOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitBinarOperator) {
			return visitor.visitBinarOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayIndexOperatorContext extends ParserRuleContext {
	public symbol(): SymbolContext {
		return this.getRuleContext(0, SymbolContext);
	}
	public arrayOperatorIndex(): ArrayOperatorIndexContext[];
	public arrayOperatorIndex(i: number): ArrayOperatorIndexContext;
	public arrayOperatorIndex(i?: number): ArrayOperatorIndexContext | ArrayOperatorIndexContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArrayOperatorIndexContext);
		} else {
			return this.getRuleContext(i, ArrayOperatorIndexContext);
		}
	}
	public arrayOperatorChar(): ArrayOperatorCharContext[];
	public arrayOperatorChar(i: number): ArrayOperatorCharContext;
	public arrayOperatorChar(i?: number): ArrayOperatorCharContext | ArrayOperatorCharContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArrayOperatorCharContext);
		} else {
			return this.getRuleContext(i, ArrayOperatorCharContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_arrayIndexOperator; }
	// @Override
	public enterRule(listener: IPawnListener): void {
		if (listener.enterArrayIndexOperator) {
			listener.enterArrayIndexOperator(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
		if (listener.exitArrayIndexOperator) {
			listener.exitArrayIndexOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitArrayIndexOperator) {
			return visitor.visitArrayIndexOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BinarExpressionOperatorsContext extends ParserRuleContext {
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(pawnParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(pawnParser.MINUS, 0); }
	public MULTY(): TerminalNode | undefined { return this.tryGetToken(pawnParser.MULTY, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(pawnParser.DIV, 0); }
	public REMAINDE(): TerminalNode | undefined { return this.tryGetToken(pawnParser.REMAINDE, 0); }
	public BIT_RIGHT(): TerminalNode | undefined { return this.tryGetToken(pawnParser.BIT_RIGHT, 0); }
	public BIT_RIGHT_LOG(): TerminalNode | undefined { return this.tryGetToken(pawnParser.BIT_RIGHT_LOG, 0); }
	public BIT_LEFT(): TerminalNode | undefined { return this.tryGetToken(pawnParser.BIT_LEFT, 0); }
	public BIT_AND(): TerminalNode | undefined { return this.tryGetToken(pawnParser.BIT_AND, 0); }
	public BIT_OR(): TerminalNode | undefined { return this.tryGetToken(pawnParser.BIT_OR, 0); }
	public BIT_XOR(): TerminalNode | undefined { return this.tryGetToken(pawnParser.BIT_XOR, 0); }
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(pawnParser.EQUAL, 0); }
	public NOTEQUAL(): TerminalNode | undefined { return this.tryGetToken(pawnParser.NOTEQUAL, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(pawnParser.OR, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(pawnParser.AND, 0); }
	public COMA(): TerminalNode | undefined { return this.tryGetToken(pawnParser.COMA, 0); }
	public ASSIGMENT(): TerminalNode | undefined { return this.tryGetToken(pawnParser.ASSIGMENT, 0); }
	public ASSIGMENT_PLUS(): TerminalNode | undefined { return this.tryGetToken(pawnParser.ASSIGMENT_PLUS, 0); }
	public ASSIGMENT_MINUS(): TerminalNode | undefined { return this.tryGetToken(pawnParser.ASSIGMENT_MINUS, 0); }
	public ASSIGMENT_MULT(): TerminalNode | undefined { return this.tryGetToken(pawnParser.ASSIGMENT_MULT, 0); }
	public ASSIGMENT_DIV(): TerminalNode | undefined { return this.tryGetToken(pawnParser.ASSIGMENT_DIV, 0); }
	public ASSIGMENT_REMAINDE(): TerminalNode | undefined { return this.tryGetToken(pawnParser.ASSIGMENT_REMAINDE, 0); }
	public ASSIGMENT_RIGHT(): TerminalNode | undefined { return this.tryGetToken(pawnParser.ASSIGMENT_RIGHT, 0); }
	public ASSIGMENT_RIGHT_LOG(): TerminalNode | undefined { return this.tryGetToken(pawnParser.ASSIGMENT_RIGHT_LOG, 0); }
	public ASSIGMENT_LEFT(): TerminalNode | undefined { return this.tryGetToken(pawnParser.ASSIGMENT_LEFT, 0); }
	public ASSIGMENT_AND(): TerminalNode | undefined { return this.tryGetToken(pawnParser.ASSIGMENT_AND, 0); }
	public ASSIGMENT_OR(): TerminalNode | undefined { return this.tryGetToken(pawnParser.ASSIGMENT_OR, 0); }
	public ASSIGMENT_XOR(): TerminalNode | undefined { return this.tryGetToken(pawnParser.ASSIGMENT_XOR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_binarExpressionOperators; }
	// @Override
	public enterRule(listener: IPawnListener): void {
		if (listener.enterBinarExpressionOperators) {
			listener.enterBinarExpressionOperators(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
		if (listener.exitBinarExpressionOperators) {
			listener.exitBinarExpressionOperators(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitBinarExpressionOperators) {
			return visitor.visitBinarExpressionOperators(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssigmentOperatorContext extends ParserRuleContext {
	public lvalue(): LvalueContext {
		return this.getRuleContext(0, LvalueContext);
	}
	public ASSIGMENT(): TerminalNode { return this.getToken(pawnParser.ASSIGMENT, 0); }
	public expresion(): ExpresionContext {
		return this.getRuleContext(0, ExpresionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_assigmentOperator; }
	// @Override
	public enterRule(listener: IPawnListener): void {
		if (listener.enterAssigmentOperator) {
			listener.enterAssigmentOperator(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
		if (listener.exitAssigmentOperator) {
			listener.exitAssigmentOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitAssigmentOperator) {
			return visitor.visitAssigmentOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayOperatorIndexContext extends ParserRuleContext {
	public SQUARE_OPEN_BRACKET(): TerminalNode | undefined { return this.tryGetToken(pawnParser.SQUARE_OPEN_BRACKET, 0); }
	public SQUARE_CLOSE_BRACKET(): TerminalNode | undefined { return this.tryGetToken(pawnParser.SQUARE_CLOSE_BRACKET, 0); }
	public expresion(): ExpresionContext | undefined {
		return this.tryGetRuleContext(0, ExpresionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_arrayOperatorIndex; }
	// @Override
	public enterRule(listener: IPawnListener): void {
		if (listener.enterArrayOperatorIndex) {
			listener.enterArrayOperatorIndex(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
		if (listener.exitArrayOperatorIndex) {
			listener.exitArrayOperatorIndex(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitArrayOperatorIndex) {
			return visitor.visitArrayOperatorIndex(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayOperatorCharContext extends ParserRuleContext {
	public CURLY_OPEN_BRACKET(): TerminalNode | undefined { return this.tryGetToken(pawnParser.CURLY_OPEN_BRACKET, 0); }
	public CURLY_CLOSE_BRACKET(): TerminalNode | undefined { return this.tryGetToken(pawnParser.CURLY_CLOSE_BRACKET, 0); }
	public expresion(): ExpresionContext | undefined {
		return this.tryGetRuleContext(0, ExpresionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_arrayOperatorChar; }
	// @Override
	public enterRule(listener: IPawnListener): void {
		if (listener.enterArrayOperatorChar) {
			listener.enterArrayOperatorChar(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
		if (listener.exitArrayOperatorChar) {
			listener.exitArrayOperatorChar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitArrayOperatorChar) {
			return visitor.visitArrayOperatorChar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallOperatorContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(pawnParser.IDENTIFIER, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(pawnParser.OPEN_PARENTHESIS, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(pawnParser.CLOSE_PARENTHESIS, 0); }
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
	public get ruleIndex(): number { return pawnParser.RULE_functionCallOperator; }
	// @Override
	public enterRule(listener: IPawnListener): void {
		if (listener.enterFunctionCallOperator) {
			listener.enterFunctionCallOperator(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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


export class TagOperatorContext extends ParserRuleContext {
	public tag(): TagContext {
		return this.getRuleContext(0, TagContext);
	}
	public tagableExpression(): TagableExpressionContext {
		return this.getRuleContext(0, TagableExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_tagOperator; }
	// @Override
	public enterRule(listener: IPawnListener): void {
		if (listener.enterTagOperator) {
			listener.enterTagOperator(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
		if (listener.exitTagOperator) {
			listener.exitTagOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitTagOperator) {
			return visitor.visitTagOperator(this);
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
	public enterRule(listener: IPawnListener): void {
		if (listener.enterSymbol) {
			listener.enterSymbol(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
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


export class LvalueContext extends ParserRuleContext {
	public symbol(): SymbolContext | undefined {
		return this.tryGetRuleContext(0, SymbolContext);
	}
	public arrayIndexOperator(): ArrayIndexOperatorContext | undefined {
		return this.tryGetRuleContext(0, ArrayIndexOperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_lvalue; }
	// @Override
	public enterRule(listener: IPawnListener): void {
		if (listener.enterLvalue) {
			listener.enterLvalue(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
		if (listener.exitLvalue) {
			listener.exitLvalue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitLvalue) {
			return visitor.visitLvalue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PostIncrementContext extends ParserRuleContext {
	public lvalue(): LvalueContext {
		return this.getRuleContext(0, LvalueContext);
	}
	public INCREMENTS(): TerminalNode { return this.getToken(pawnParser.INCREMENTS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_postIncrement; }
	// @Override
	public enterRule(listener: IPawnListener): void {
		if (listener.enterPostIncrement) {
			listener.enterPostIncrement(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
		if (listener.exitPostIncrement) {
			listener.exitPostIncrement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitPostIncrement) {
			return visitor.visitPostIncrement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PreIncrementContext extends ParserRuleContext {
	public INCREMENTS(): TerminalNode { return this.getToken(pawnParser.INCREMENTS, 0); }
	public lvalue(): LvalueContext {
		return this.getRuleContext(0, LvalueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_preIncrement; }
	// @Override
	public enterRule(listener: IPawnListener): void {
		if (listener.enterPreIncrement) {
			listener.enterPreIncrement(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
		if (listener.exitPreIncrement) {
			listener.exitPreIncrement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitPreIncrement) {
			return visitor.visitPreIncrement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PostDecrementContext extends ParserRuleContext {
	public lvalue(): LvalueContext {
		return this.getRuleContext(0, LvalueContext);
	}
	public DECREMENTS(): TerminalNode { return this.getToken(pawnParser.DECREMENTS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_postDecrement; }
	// @Override
	public enterRule(listener: IPawnListener): void {
		if (listener.enterPostDecrement) {
			listener.enterPostDecrement(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
		if (listener.exitPostDecrement) {
			listener.exitPostDecrement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitPostDecrement) {
			return visitor.visitPostDecrement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PreDecrementContext extends ParserRuleContext {
	public DECREMENTS(): TerminalNode { return this.getToken(pawnParser.DECREMENTS, 0); }
	public lvalue(): LvalueContext {
		return this.getRuleContext(0, LvalueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_preDecrement; }
	// @Override
	public enterRule(listener: IPawnListener): void {
		if (listener.enterPreDecrement) {
			listener.enterPreDecrement(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
		if (listener.exitPreDecrement) {
			listener.exitPreDecrement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitPreDecrement) {
			return visitor.visitPreDecrement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ChainedRelationalOperatorsContext extends ParserRuleContext {
	public LESS(): TerminalNode | undefined { return this.tryGetToken(pawnParser.LESS, 0); }
	public LESSEQ(): TerminalNode | undefined { return this.tryGetToken(pawnParser.LESSEQ, 0); }
	public LARGER(): TerminalNode | undefined { return this.tryGetToken(pawnParser.LARGER, 0); }
	public LARGEREQ(): TerminalNode | undefined { return this.tryGetToken(pawnParser.LARGEREQ, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_chainedRelationalOperators; }
	// @Override
	public enterRule(listener: IPawnListener): void {
		if (listener.enterChainedRelationalOperators) {
			listener.enterChainedRelationalOperators(this);
		}
	}
	// @Override
	public exitRule(listener: IPawnListener): void {
		if (listener.exitChainedRelationalOperators) {
			listener.exitChainedRelationalOperators(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitChainedRelationalOperators) {
			return visitor.visitChainedRelationalOperators(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


