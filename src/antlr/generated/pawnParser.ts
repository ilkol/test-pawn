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
	public static readonly ASSERT = 47;
	public static readonly EXIT = 48;
	public static readonly GOTO = 49;
	public static readonly SLEEP = 50;
	public static readonly STATE = 51;
	public static readonly RETURN = 52;
	public static readonly NEW = 53;
	public static readonly ENUM = 54;
	public static readonly CONST = 55;
	public static readonly STATIC = 56;
	public static readonly STOCK = 57;
	public static readonly FORWARD = 58;
	public static readonly NATIVE = 59;
	public static readonly PUBLIC = 60;
	public static readonly OPERATOR = 61;
	public static readonly IF = 62;
	public static readonly ELSE = 63;
	public static readonly SWITCH = 64;
	public static readonly CASE = 65;
	public static readonly DEFAULT = 66;
	public static readonly WHILE = 67;
	public static readonly FOR = 68;
	public static readonly DO = 69;
	public static readonly CONTINUE = 70;
	public static readonly BREAK = 71;
	public static readonly CHAR = 72;
	public static readonly DEFINED = 73;
	public static readonly SIZEOF = 74;
	public static readonly TAGOF = 75;
	public static readonly DEFINE = 76;
	public static readonly ELSEIF = 77;
	public static readonly EMIT = 78;
	public static readonly ENDIF = 79;
	public static readonly ENDINPUT = 80;
	public static readonly ENDSCRIPT = 81;
	public static readonly ERROR = 82;
	public static readonly FILE = 83;
	public static readonly INCLUDE = 84;
	public static readonly LINE = 85;
	public static readonly PRAGMA = 86;
	public static readonly SECTION = 87;
	public static readonly TRYINCLUDE = 88;
	public static readonly UNDEF = 89;
	public static readonly DYNAMIC = 90;
	public static readonly WARNING = 91;
	public static readonly DISABLE = 92;
	public static readonly ENABLE = 93;
	public static readonly TRUE = 94;
	public static readonly FALSE = 95;
	public static readonly SHARPSTRING = 96;
	public static readonly STRING = 97;
	public static readonly ANGLEDSTRING = 98;
	public static readonly IDENTIFIER = 99;
	public static readonly INTEGER = 100;
	public static readonly FLOAT = 101;
	public static readonly Whitespace = 102;
	public static readonly Newline = 103;
	public static readonly BlockComment = 104;
	public static readonly LineComment = 105;
	public static readonly RULE_file = 0;
	public static readonly RULE_declaration = 1;
	public static readonly RULE_enum = 2;
	public static readonly RULE_enumMember = 3;
	public static readonly RULE_enumIterator = 4;
	public static readonly RULE_functionDecl = 5;
	public static readonly RULE_tag = 6;
	public static readonly RULE_variable = 7;
	public static readonly RULE_arrayIndex = 8;
	public static readonly RULE_funcDeclModif = 9;
	public static readonly RULE_funcModif = 10;
	public static readonly RULE_statement = 11;
	public static readonly RULE_controlStatments = 12;
	public static readonly RULE_var_definition = 13;
	public static readonly RULE_assigment = 14;
	public static readonly RULE_arrayInit = 15;
	public static readonly RULE_arrayInitMember = 16;
	public static readonly RULE_assigments = 17;
	public static readonly RULE_grouping = 18;
	public static readonly RULE_expresion = 19;
	public static readonly RULE_ternarOperator = 20;
	public static readonly RULE_preOperators = 21;
	public static readonly RULE_operation = 22;
	public static readonly RULE_varOrLiteral = 23;
	public static readonly RULE_declParams = 24;
	public static readonly RULE_reference = 25;
	public static readonly RULE_varModifires = 26;
	public static readonly RULE_rValue = 27;
	public static readonly RULE_sizeof = 28;
	public static readonly RULE_number = 29;
	public static readonly RULE_integer = 30;
	public static readonly RULE_float = 31;
	public static readonly RULE_operator = 32;
	public static readonly RULE_arefmeticOperator = 33;
	public static readonly RULE_logicOperator = 34;
	public static readonly RULE_bitwiseOperator = 35;
	public static readonly RULE_if_statement = 36;
	public static readonly RULE_else_statement = 37;
	public static readonly RULE_switch = 38;
	public static readonly RULE_case = 39;
	public static readonly RULE_case_list = 40;
	public static readonly RULE_range = 41;
	public static readonly RULE_condition = 42;
	public static readonly RULE_codeBlock = 43;
	public static readonly RULE_return = 44;
	public static readonly RULE_cycles = 45;
	public static readonly RULE_do = 46;
	public static readonly RULE_while = 47;
	public static readonly RULE_for = 48;
	public static readonly RULE_cycleBody = 49;
	public static readonly RULE_cycleKeywords = 50;
	public static readonly RULE_literal = 51;
	public static readonly RULE_bool_const = 52;
	public static readonly RULE_string = 53;
	public static readonly RULE_angledString = 54;
	public static readonly RULE_functionCall = 55;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"file", "declaration", "enum", "enumMember", "enumIterator", "functionDecl", 
		"tag", "variable", "arrayIndex", "funcDeclModif", "funcModif", "statement", 
		"controlStatments", "var_definition", "assigment", "arrayInit", "arrayInitMember", 
		"assigments", "grouping", "expresion", "ternarOperator", "preOperators", 
		"operation", "varOrLiteral", "declParams", "reference", "varModifires", 
		"rValue", "sizeof", "number", "integer", "float", "operator", "arefmeticOperator", 
		"logicOperator", "bitwiseOperator", "if_statement", "else_statement", 
		"switch", "case", "case_list", "range", "condition", "codeBlock", "return", 
		"cycles", "do", "while", "for", "cycleBody", "cycleKeywords", "literal", 
		"bool_const", "string", "angledString", "functionCall",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'", "'{'", "'}'", "'['", "']'", "','", "';'", "'='", 
		"'+='", "'-='", "'*='", "'/='", "'%='", "'&='", "'|='", "'^='", "'>>='", 
		"'>>>='", "'<<='", "'+'", "'-'", "'*'", "'/'", "'%'", "'++'", "'--'", 
		"'=='", "'!='", "'<'", "'>'", "'<='", "'>='", "'?'", "':'", "'||'", "'&&'", 
		"'!'", "'&'", "'|'", "'^'", "'~'", "'>>'", "'<<'", "'>>>'", "'..'", "'assert'", 
		"'exit'", "'goto'", "'sleep'", "'state'", "'return'", "'new'", "'enum'", 
		"'const'", "'static'", "'stock'", "'forward'", "'native'", "'public'", 
		"'operator'", "'if'", "'else'", "'switch'", "'case'", "'default'", "'while'", 
		"'for'", "'do'", "'continue'", "'break'", "'char'", "'defined'", "'sizeof'", 
		"'tagof'", "'define'", "'#elsei'", "'emit'", "'endif'", "'endinput'", 
		"'endscript'", "'error'", "'file'", "'include'", "'line'", "'pragma'", 
		"'section'", "'tryinclude'", "'undef'", "'dynamic'", "'warning'", "'disable'", 
		"'enable'", "'true'", "'false'",
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
		"BIT_RIGHT", "BIT_LEFT", "BIT_RIGHT_LOG", "PERIOD", "ASSERT", "EXIT", 
		"GOTO", "SLEEP", "STATE", "RETURN", "NEW", "ENUM", "CONST", "STATIC", 
		"STOCK", "FORWARD", "NATIVE", "PUBLIC", "OPERATOR", "IF", "ELSE", "SWITCH", 
		"CASE", "DEFAULT", "WHILE", "FOR", "DO", "CONTINUE", "BREAK", "CHAR", 
		"DEFINED", "SIZEOF", "TAGOF", "DEFINE", "ELSEIF", "EMIT", "ENDIF", "ENDINPUT", 
		"ENDSCRIPT", "ERROR", "FILE", "INCLUDE", "LINE", "PRAGMA", "SECTION", 
		"TRYINCLUDE", "UNDEF", "DYNAMIC", "WARNING", "DISABLE", "ENABLE", "TRUE", 
		"FALSE", "SHARPSTRING", "STRING", "ANGLEDSTRING", "IDENTIFIER", "INTEGER", 
		"FLOAT", "Whitespace", "Newline", "BlockComment", "LineComment",
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
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 115;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pawnParser.CURLY_OPEN_BRACKET || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (pawnParser.NEW - 53)) | (1 << (pawnParser.ENUM - 53)) | (1 << (pawnParser.STOCK - 53)) | (1 << (pawnParser.FORWARD - 53)) | (1 << (pawnParser.NATIVE - 53)) | (1 << (pawnParser.PUBLIC - 53)))) !== 0) || _la === pawnParser.IDENTIFIER) {
				{
				{
				this.state = 112;
				this.declaration();
				}
				}
				this.state = 117;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 118;
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
		try {
			this.state = 127;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.CURLY_OPEN_BRACKET:
			case pawnParser.NEW:
			case pawnParser.STOCK:
			case pawnParser.FORWARD:
			case pawnParser.NATIVE:
			case pawnParser.PUBLIC:
			case pawnParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 124;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case pawnParser.CURLY_OPEN_BRACKET:
				case pawnParser.STOCK:
				case pawnParser.FORWARD:
				case pawnParser.NATIVE:
				case pawnParser.PUBLIC:
				case pawnParser.IDENTIFIER:
					{
					this.state = 120;
					this.functionDecl();
					}
					break;
				case pawnParser.NEW:
					{
					this.state = 121;
					this.var_definition();
					this.state = 122;
					this.match(pawnParser.SEMI);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case pawnParser.ENUM:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 126;
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
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 129;
			this.match(pawnParser.ENUM);
			this.state = 131;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.IDENTIFIER) {
				{
				this.state = 130;
				this.match(pawnParser.IDENTIFIER);
				}
			}

			this.state = 134;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.OPEN_PARENTHESIS) {
				{
				this.state = 133;
				this.enumIterator();
				}
			}

			this.state = 136;
			this.match(pawnParser.CURLY_OPEN_BRACKET);
			this.state = 145;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.CURLY_OPEN_BRACKET || _la === pawnParser.IDENTIFIER) {
				{
				this.state = 137;
				this.enumMember();
				this.state = 142;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === pawnParser.COMA) {
					{
					{
					this.state = 138;
					this.match(pawnParser.COMA);
					this.state = 139;
					this.enumMember();
					}
					}
					this.state = 144;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 147;
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
	public enumMember(): EnumMemberContext {
		let _localctx: EnumMemberContext = new EnumMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, pawnParser.RULE_enumMember);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 149;
			this.variable();
			this.state = 152;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.ASSIGMENT) {
				{
				this.state = 150;
				this.match(pawnParser.ASSIGMENT);
				this.state = 151;
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
			this.state = 154;
			this.match(pawnParser.OPEN_PARENTHESIS);
			this.state = 155;
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
			this.state = 156;
			this.match(pawnParser.INTEGER);
			this.state = 157;
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
	public functionDecl(): FunctionDeclContext {
		let _localctx: FunctionDeclContext = new FunctionDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, pawnParser.RULE_functionDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 160;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (pawnParser.STOCK - 57)) | (1 << (pawnParser.FORWARD - 57)) | (1 << (pawnParser.NATIVE - 57)) | (1 << (pawnParser.PUBLIC - 57)))) !== 0)) {
				{
				this.state = 159;
				this.funcDeclModif();
				}
			}

			this.state = 163;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 162;
				this.tag();
				}
				break;
			}
			this.state = 165;
			this.match(pawnParser.IDENTIFIER);
			this.state = 166;
			this.match(pawnParser.OPEN_PARENTHESIS);
			this.state = 175;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.CURLY_OPEN_BRACKET || _la === pawnParser.BIT_AND || _la === pawnParser.CONST || _la === pawnParser.IDENTIFIER) {
				{
				this.state = 167;
				this.declParams();
				this.state = 172;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === pawnParser.COMA) {
					{
					{
					this.state = 168;
					this.match(pawnParser.COMA);
					this.state = 169;
					this.declParams();
					}
					}
					this.state = 174;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 177;
			this.match(pawnParser.CLOSE_PARENTHESIS);
			this.state = 180;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.SEMI:
				{
				this.state = 178;
				this.match(pawnParser.SEMI);
				}
				break;
			case pawnParser.CURLY_OPEN_BRACKET:
			case pawnParser.RETURN:
			case pawnParser.NEW:
			case pawnParser.IF:
			case pawnParser.SWITCH:
			case pawnParser.WHILE:
			case pawnParser.FOR:
			case pawnParser.DO:
			case pawnParser.IDENTIFIER:
				{
				this.state = 179;
				this.codeBlock();
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
	public tag(): TagContext {
		let _localctx: TagContext = new TagContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, pawnParser.RULE_tag);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 193;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.IDENTIFIER:
				{
				this.state = 182;
				this.match(pawnParser.IDENTIFIER);
				}
				break;
			case pawnParser.CURLY_OPEN_BRACKET:
				{
				{
				this.state = 183;
				this.match(pawnParser.CURLY_OPEN_BRACKET);
				this.state = 184;
				this.match(pawnParser.IDENTIFIER);
				this.state = 189;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === pawnParser.COMA) {
					{
					{
					this.state = 185;
					this.match(pawnParser.COMA);
					this.state = 186;
					this.match(pawnParser.IDENTIFIER);
					}
					}
					this.state = 191;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 192;
				this.match(pawnParser.CURLY_CLOSE_BRACKET);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 195;
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
		this.enterRule(_localctx, 14, pawnParser.RULE_variable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 198;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				{
				this.state = 197;
				this.tag();
				}
				break;
			}
			this.state = 200;
			this.match(pawnParser.IDENTIFIER);
			this.state = 204;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pawnParser.SQUARE_OPEN_BRACKET) {
				{
				{
				this.state = 201;
				this.arrayIndex();
				}
				}
				this.state = 206;
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
		this.enterRule(_localctx, 16, pawnParser.RULE_arrayIndex);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 207;
			this.match(pawnParser.SQUARE_OPEN_BRACKET);
			this.state = 209;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.OPEN_PARENTHESIS) | (1 << pawnParser.CURLY_OPEN_BRACKET) | (1 << pawnParser.MINUS) | (1 << pawnParser.INCREMENTS) | (1 << pawnParser.DECREMENTS))) !== 0) || _la === pawnParser.NOT || ((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (pawnParser.SIZEOF - 74)) | (1 << (pawnParser.TRUE - 74)) | (1 << (pawnParser.FALSE - 74)) | (1 << (pawnParser.SHARPSTRING - 74)) | (1 << (pawnParser.STRING - 74)) | (1 << (pawnParser.IDENTIFIER - 74)) | (1 << (pawnParser.INTEGER - 74)) | (1 << (pawnParser.FLOAT - 74)))) !== 0)) {
				{
				this.state = 208;
				this.expresion();
				}
			}

			this.state = 211;
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
		this.enterRule(_localctx, 18, pawnParser.RULE_funcDeclModif);
		try {
			this.state = 216;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.STOCK:
			case pawnParser.PUBLIC:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 213;
				this.funcModif();
				}
				break;
			case pawnParser.FORWARD:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 214;
				this.match(pawnParser.FORWARD);
				}
				break;
			case pawnParser.NATIVE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 215;
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
		this.enterRule(_localctx, 20, pawnParser.RULE_funcModif);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 218;
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
		this.enterRule(_localctx, 22, pawnParser.RULE_statement);
		try {
			this.state = 229;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.CURLY_OPEN_BRACKET:
			case pawnParser.RETURN:
			case pawnParser.NEW:
			case pawnParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 224;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
				case 1:
					{
					this.state = 220;
					this.var_definition();
					}
					break;

				case 2:
					{
					this.state = 221;
					this.assigment();
					}
					break;

				case 3:
					{
					this.state = 222;
					this.functionCall();
					}
					break;

				case 4:
					{
					this.state = 223;
					this.return();
					}
					break;
				}
				this.state = 226;
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
				this.state = 228;
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
		this.enterRule(_localctx, 24, pawnParser.RULE_controlStatments);
		try {
			this.state = 234;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.IF:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 231;
				this.if_statement();
				}
				break;
			case pawnParser.WHILE:
			case pawnParser.FOR:
			case pawnParser.DO:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 232;
				this.cycles();
				}
				break;
			case pawnParser.SWITCH:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 233;
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
	public var_definition(): Var_definitionContext {
		let _localctx: Var_definitionContext = new Var_definitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, pawnParser.RULE_var_definition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 236;
			this.match(pawnParser.NEW);
			this.state = 237;
			this.varModifires();
			this.state = 240;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				{
				this.state = 238;
				this.variable();
				}
				break;

			case 2:
				{
				this.state = 239;
				this.assigment();
				}
				break;
			}
			this.state = 249;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pawnParser.COMA) {
				{
				{
				this.state = 242;
				this.match(pawnParser.COMA);
				this.state = 245;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
				case 1:
					{
					this.state = 243;
					this.variable();
					}
					break;

				case 2:
					{
					this.state = 244;
					this.assigment();
					}
					break;
				}
				}
				}
				this.state = 251;
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
	public assigment(): AssigmentContext {
		let _localctx: AssigmentContext = new AssigmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, pawnParser.RULE_assigment);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 252;
			this.variable();
			this.state = 253;
			this.assigments();
			this.state = 256;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				{
				this.state = 254;
				this.expresion();
				}
				break;

			case 2:
				{
				this.state = 255;
				this.arrayInit();
				}
				break;
			}
			this.state = 265;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.ASSIGMENT) | (1 << pawnParser.ASSIGMENT_PLUS) | (1 << pawnParser.ASSIGMENT_MINUS) | (1 << pawnParser.ASSIGMENT_MULT) | (1 << pawnParser.ASSIGMENT_DIV) | (1 << pawnParser.ASSIGMENT_REMAINDE) | (1 << pawnParser.ASSIGMENT_AND) | (1 << pawnParser.ASSIGMENT_OR) | (1 << pawnParser.ASSIGMENT_XOR) | (1 << pawnParser.ASSIGMENT_RIGHT) | (1 << pawnParser.ASSIGMENT_RIGHT_LOG) | (1 << pawnParser.ASSIGMENT_LEFT))) !== 0)) {
				{
				{
				this.state = 258;
				this.assigments();
				this.state = 261;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
				case 1:
					{
					this.state = 259;
					this.expresion();
					}
					break;

				case 2:
					{
					this.state = 260;
					this.arrayInit();
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
	public arrayInit(): ArrayInitContext {
		let _localctx: ArrayInitContext = new ArrayInitContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, pawnParser.RULE_arrayInit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 268;
			this.match(pawnParser.CURLY_OPEN_BRACKET);
			this.state = 269;
			this.arrayInitMember();
			this.state = 274;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pawnParser.COMA) {
				{
				{
				this.state = 270;
				this.match(pawnParser.COMA);
				this.state = 271;
				this.arrayInitMember();
				}
				}
				this.state = 276;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 277;
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
		this.enterRule(_localctx, 32, pawnParser.RULE_arrayInitMember);
		try {
			this.state = 283;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 279;
				this.match(pawnParser.IDENTIFIER);
				}
				break;
			case pawnParser.INTEGER:
			case pawnParser.FLOAT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 280;
				this.number();
				}
				break;
			case pawnParser.SHARPSTRING:
			case pawnParser.STRING:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 281;
				this.string();
				}
				break;
			case pawnParser.CURLY_OPEN_BRACKET:
				this.enterOuterAlt(_localctx, 4);
				{
				{
				this.state = 282;
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
		this.enterRule(_localctx, 34, pawnParser.RULE_assigments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 285;
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
		this.enterRule(_localctx, 36, pawnParser.RULE_grouping);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 287;
			this.match(pawnParser.OPEN_PARENTHESIS);
			this.state = 288;
			this.expresion();
			this.state = 289;
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
		this.enterRule(_localctx, 38, pawnParser.RULE_expresion);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 292;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 22)) & ~0x1F) === 0 && ((1 << (_la - 22)) & ((1 << (pawnParser.MINUS - 22)) | (1 << (pawnParser.INCREMENTS - 22)) | (1 << (pawnParser.DECREMENTS - 22)) | (1 << (pawnParser.NOT - 22)))) !== 0) || _la === pawnParser.SIZEOF) {
				{
				this.state = 291;
				this.preOperators();
				}
			}

			this.state = 300;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				{
				this.state = 294;
				this.rValue();
				this.state = 296;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (pawnParser.PLUS - 21)) | (1 << (pawnParser.MINUS - 21)) | (1 << (pawnParser.MULTY - 21)) | (1 << (pawnParser.DIV - 21)) | (1 << (pawnParser.REMAINDE - 21)) | (1 << (pawnParser.INCREMENTS - 21)) | (1 << (pawnParser.DECREMENTS - 21)) | (1 << (pawnParser.EQUAL - 21)) | (1 << (pawnParser.NOTEQUAL - 21)) | (1 << (pawnParser.LESS - 21)) | (1 << (pawnParser.LARGER - 21)) | (1 << (pawnParser.LESSEQ - 21)) | (1 << (pawnParser.LARGEREQ - 21)) | (1 << (pawnParser.OR - 21)) | (1 << (pawnParser.AND - 21)) | (1 << (pawnParser.NOT - 21)) | (1 << (pawnParser.BIT_AND - 21)) | (1 << (pawnParser.BIT_OR - 21)) | (1 << (pawnParser.BIT_XOR - 21)) | (1 << (pawnParser.BIT_COMPLEMEN - 21)) | (1 << (pawnParser.BIT_RIGHT - 21)) | (1 << (pawnParser.BIT_LEFT - 21)) | (1 << (pawnParser.BIT_RIGHT_LOG - 21)))) !== 0)) {
					{
					this.state = 295;
					this.operation();
					}
				}

				}
				break;

			case 2:
				{
				this.state = 298;
				this.grouping();
				}
				break;

			case 3:
				{
				this.state = 299;
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
	public ternarOperator(): TernarOperatorContext {
		let _localctx: TernarOperatorContext = new TernarOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, pawnParser.RULE_ternarOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 307;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				{
				this.state = 302;
				this.rValue();
				this.state = 304;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (pawnParser.PLUS - 21)) | (1 << (pawnParser.MINUS - 21)) | (1 << (pawnParser.MULTY - 21)) | (1 << (pawnParser.DIV - 21)) | (1 << (pawnParser.REMAINDE - 21)) | (1 << (pawnParser.INCREMENTS - 21)) | (1 << (pawnParser.DECREMENTS - 21)) | (1 << (pawnParser.EQUAL - 21)) | (1 << (pawnParser.NOTEQUAL - 21)) | (1 << (pawnParser.LESS - 21)) | (1 << (pawnParser.LARGER - 21)) | (1 << (pawnParser.LESSEQ - 21)) | (1 << (pawnParser.LARGEREQ - 21)) | (1 << (pawnParser.OR - 21)) | (1 << (pawnParser.AND - 21)) | (1 << (pawnParser.NOT - 21)) | (1 << (pawnParser.BIT_AND - 21)) | (1 << (pawnParser.BIT_OR - 21)) | (1 << (pawnParser.BIT_XOR - 21)) | (1 << (pawnParser.BIT_COMPLEMEN - 21)) | (1 << (pawnParser.BIT_RIGHT - 21)) | (1 << (pawnParser.BIT_LEFT - 21)) | (1 << (pawnParser.BIT_RIGHT_LOG - 21)))) !== 0)) {
					{
					this.state = 303;
					this.operation();
					}
				}

				}
				break;

			case 2:
				{
				this.state = 306;
				this.grouping();
				}
				break;
			}
			this.state = 309;
			this.match(pawnParser.QUESTION);
			this.state = 310;
			this.expresion();
			this.state = 311;
			this.match(pawnParser.COLON);
			this.state = 312;
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
		this.enterRule(_localctx, 42, pawnParser.RULE_preOperators);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 314;
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
		this.enterRule(_localctx, 44, pawnParser.RULE_operation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 316;
			this.operator();
			this.state = 318;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.OPEN_PARENTHESIS) | (1 << pawnParser.CURLY_OPEN_BRACKET) | (1 << pawnParser.MINUS) | (1 << pawnParser.INCREMENTS) | (1 << pawnParser.DECREMENTS))) !== 0) || _la === pawnParser.NOT || ((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (pawnParser.SIZEOF - 74)) | (1 << (pawnParser.TRUE - 74)) | (1 << (pawnParser.FALSE - 74)) | (1 << (pawnParser.SHARPSTRING - 74)) | (1 << (pawnParser.STRING - 74)) | (1 << (pawnParser.IDENTIFIER - 74)) | (1 << (pawnParser.INTEGER - 74)) | (1 << (pawnParser.FLOAT - 74)))) !== 0)) {
				{
				this.state = 317;
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
		this.enterRule(_localctx, 46, pawnParser.RULE_varOrLiteral);
		try {
			this.state = 322;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.CURLY_OPEN_BRACKET:
			case pawnParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 320;
				this.variable();
				}
				}
				break;
			case pawnParser.TRUE:
			case pawnParser.FALSE:
			case pawnParser.SHARPSTRING:
			case pawnParser.STRING:
			case pawnParser.INTEGER:
			case pawnParser.FLOAT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 321;
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
	public declParams(): DeclParamsContext {
		let _localctx: DeclParamsContext = new DeclParamsContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, pawnParser.RULE_declParams);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 325;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.CONST) {
				{
				this.state = 324;
				this.match(pawnParser.CONST);
				}
			}

			this.state = 328;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.BIT_AND) {
				{
				this.state = 327;
				this.reference();
				}
			}

			this.state = 330;
			this.variable();
			this.state = 333;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.ASSIGMENT) {
				{
				this.state = 331;
				this.match(pawnParser.ASSIGMENT);
				this.state = 332;
				this.literal();
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
	public reference(): ReferenceContext {
		let _localctx: ReferenceContext = new ReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, pawnParser.RULE_reference);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 335;
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
		this.enterRule(_localctx, 52, pawnParser.RULE_varModifires);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 340;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (pawnParser.CONST - 55)) | (1 << (pawnParser.STATIC - 55)) | (1 << (pawnParser.STOCK - 55)))) !== 0)) {
				{
				{
				this.state = 337;
				_la = this._input.LA(1);
				if (!(((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (pawnParser.CONST - 55)) | (1 << (pawnParser.STATIC - 55)) | (1 << (pawnParser.STOCK - 55)))) !== 0))) {
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
	public rValue(): RValueContext {
		let _localctx: RValueContext = new RValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, pawnParser.RULE_rValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 346;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				{
				this.state = 343;
				this.varOrLiteral();
				}
				break;

			case 2:
				{
				this.state = 344;
				this.functionCall();
				}
				break;

			case 3:
				{
				this.state = 345;
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
	public sizeof(): SizeofContext {
		let _localctx: SizeofContext = new SizeofContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, pawnParser.RULE_sizeof);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 348;
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
		this.enterRule(_localctx, 58, pawnParser.RULE_number);
		try {
			this.state = 352;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.INTEGER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 350;
				this.integer();
				}
				break;
			case pawnParser.FLOAT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 351;
				this.float();
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
	public integer(): IntegerContext {
		let _localctx: IntegerContext = new IntegerContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, pawnParser.RULE_integer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 354;
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
		this.enterRule(_localctx, 62, pawnParser.RULE_float);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 356;
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
	public operator(): OperatorContext {
		let _localctx: OperatorContext = new OperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, pawnParser.RULE_operator);
		try {
			this.state = 361;
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
				this.state = 358;
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
				this.state = 359;
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
				this.state = 360;
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
	public arefmeticOperator(): ArefmeticOperatorContext {
		let _localctx: ArefmeticOperatorContext = new ArefmeticOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, pawnParser.RULE_arefmeticOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 363;
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
		this.enterRule(_localctx, 68, pawnParser.RULE_logicOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 365;
			_la = this._input.LA(1);
			if (!(((((_la - 28)) & ~0x1F) === 0 && ((1 << (_la - 28)) & ((1 << (pawnParser.EQUAL - 28)) | (1 << (pawnParser.NOTEQUAL - 28)) | (1 << (pawnParser.LESS - 28)) | (1 << (pawnParser.LARGER - 28)) | (1 << (pawnParser.LESSEQ - 28)) | (1 << (pawnParser.LARGEREQ - 28)) | (1 << (pawnParser.OR - 28)) | (1 << (pawnParser.AND - 28)) | (1 << (pawnParser.NOT - 28)))) !== 0))) {
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
		this.enterRule(_localctx, 70, pawnParser.RULE_bitwiseOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 367;
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
		this.enterRule(_localctx, 72, pawnParser.RULE_if_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 369;
			this.match(pawnParser.IF);
			this.state = 370;
			this.condition();
			this.state = 371;
			this.codeBlock();
			this.state = 373;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				{
				this.state = 372;
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
		this.enterRule(_localctx, 74, pawnParser.RULE_else_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 375;
			this.match(pawnParser.ELSE);
			this.state = 378;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
			case 1:
				{
				this.state = 376;
				this.if_statement();
				}
				break;

			case 2:
				{
				this.state = 377;
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
		this.enterRule(_localctx, 76, pawnParser.RULE_switch);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 380;
			this.match(pawnParser.SWITCH);
			this.state = 381;
			this.condition();
			this.state = 382;
			this.match(pawnParser.CURLY_OPEN_BRACKET);
			this.state = 391;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pawnParser.CASE || _la === pawnParser.DEFAULT) {
				{
				{
				this.state = 385;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case pawnParser.CASE:
					{
					this.state = 383;
					this.case();
					}
					break;
				case pawnParser.DEFAULT:
					{
					this.state = 384;
					this.match(pawnParser.DEFAULT);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 387;
				this.match(pawnParser.COLON);
				this.state = 388;
				this.codeBlock();
				}
				}
				this.state = 393;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 394;
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
		this.enterRule(_localctx, 78, pawnParser.RULE_case);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 396;
			this.match(pawnParser.CASE);
			this.state = 397;
			this.case_list();
			this.state = 402;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pawnParser.COMA) {
				{
				{
				this.state = 398;
				this.match(pawnParser.COMA);
				this.state = 399;
				this.case_list();
				}
				}
				this.state = 404;
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
	public case_list(): Case_listContext {
		let _localctx: Case_listContext = new Case_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, pawnParser.RULE_case_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 407;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.IDENTIFIER:
				{
				this.state = 405;
				this.match(pawnParser.IDENTIFIER);
				}
				break;
			case pawnParser.INTEGER:
			case pawnParser.FLOAT:
				{
				this.state = 406;
				this.number();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 410;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.PERIOD) {
				{
				this.state = 409;
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
		this.enterRule(_localctx, 82, pawnParser.RULE_range);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 412;
			this.match(pawnParser.PERIOD);
			this.state = 415;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.IDENTIFIER:
				{
				this.state = 413;
				this.match(pawnParser.IDENTIFIER);
				}
				break;
			case pawnParser.INTEGER:
			case pawnParser.FLOAT:
				{
				this.state = 414;
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
		this.enterRule(_localctx, 84, pawnParser.RULE_condition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 417;
			this.match(pawnParser.OPEN_PARENTHESIS);
			this.state = 418;
			this.expresion();
			this.state = 419;
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
		this.enterRule(_localctx, 86, pawnParser.RULE_codeBlock);
		let _la: number;
		try {
			this.state = 430;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 421;
				this.match(pawnParser.CURLY_OPEN_BRACKET);
				this.state = 425;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === pawnParser.CURLY_OPEN_BRACKET || ((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (pawnParser.RETURN - 52)) | (1 << (pawnParser.NEW - 52)) | (1 << (pawnParser.IF - 52)) | (1 << (pawnParser.SWITCH - 52)) | (1 << (pawnParser.WHILE - 52)) | (1 << (pawnParser.FOR - 52)) | (1 << (pawnParser.DO - 52)))) !== 0) || _la === pawnParser.IDENTIFIER) {
					{
					{
					this.state = 422;
					this.statement();
					}
					}
					this.state = 427;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 428;
				this.match(pawnParser.CURLY_CLOSE_BRACKET);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 429;
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
		this.enterRule(_localctx, 88, pawnParser.RULE_return);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 432;
			this.match(pawnParser.RETURN);
			this.state = 434;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.OPEN_PARENTHESIS) | (1 << pawnParser.CURLY_OPEN_BRACKET) | (1 << pawnParser.MINUS) | (1 << pawnParser.INCREMENTS) | (1 << pawnParser.DECREMENTS))) !== 0) || _la === pawnParser.NOT || ((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (pawnParser.SIZEOF - 74)) | (1 << (pawnParser.TRUE - 74)) | (1 << (pawnParser.FALSE - 74)) | (1 << (pawnParser.SHARPSTRING - 74)) | (1 << (pawnParser.STRING - 74)) | (1 << (pawnParser.IDENTIFIER - 74)) | (1 << (pawnParser.INTEGER - 74)) | (1 << (pawnParser.FLOAT - 74)))) !== 0)) {
				{
				this.state = 433;
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
		this.enterRule(_localctx, 90, pawnParser.RULE_cycles);
		try {
			this.state = 439;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.WHILE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 436;
				this.while();
				}
				break;
			case pawnParser.FOR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 437;
				this.for();
				}
				break;
			case pawnParser.DO:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 438;
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
		this.enterRule(_localctx, 92, pawnParser.RULE_do);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 441;
			this.match(pawnParser.DO);
			this.state = 442;
			this.cycleBody();
			this.state = 445;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 56, this._ctx) ) {
			case 1:
				{
				this.state = 443;
				this.match(pawnParser.WHILE);
				this.state = 444;
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
		this.enterRule(_localctx, 94, pawnParser.RULE_while);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 447;
			this.match(pawnParser.WHILE);
			this.state = 448;
			this.condition();
			this.state = 449;
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
		this.enterRule(_localctx, 96, pawnParser.RULE_for);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 451;
			this.match(pawnParser.FOR);
			this.state = 452;
			this.match(pawnParser.OPEN_PARENTHESIS);
			this.state = 453;
			this.var_definition();
			this.state = 454;
			this.match(pawnParser.SEMI);
			this.state = 455;
			this.expresion();
			this.state = 456;
			this.match(pawnParser.SEMI);
			this.state = 457;
			this.expresion();
			this.state = 458;
			this.match(pawnParser.CLOSE_PARENTHESIS);
			this.state = 459;
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
		this.enterRule(_localctx, 98, pawnParser.RULE_cycleBody);
		let _la: number;
		try {
			this.state = 472;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 59, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 461;
				this.cycleKeywords();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 462;
				this.match(pawnParser.CURLY_OPEN_BRACKET);
				this.state = 467;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === pawnParser.CURLY_OPEN_BRACKET || ((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (pawnParser.RETURN - 52)) | (1 << (pawnParser.NEW - 52)) | (1 << (pawnParser.IF - 52)) | (1 << (pawnParser.SWITCH - 52)) | (1 << (pawnParser.WHILE - 52)) | (1 << (pawnParser.FOR - 52)) | (1 << (pawnParser.DO - 52)) | (1 << (pawnParser.CONTINUE - 52)) | (1 << (pawnParser.BREAK - 52)))) !== 0) || _la === pawnParser.IDENTIFIER) {
					{
					this.state = 465;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case pawnParser.CURLY_OPEN_BRACKET:
					case pawnParser.RETURN:
					case pawnParser.NEW:
					case pawnParser.IF:
					case pawnParser.SWITCH:
					case pawnParser.WHILE:
					case pawnParser.FOR:
					case pawnParser.DO:
					case pawnParser.IDENTIFIER:
						{
						this.state = 463;
						this.statement();
						}
						break;
					case pawnParser.CONTINUE:
					case pawnParser.BREAK:
						{
						this.state = 464;
						this.cycleKeywords();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 469;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 470;
				this.match(pawnParser.CURLY_CLOSE_BRACKET);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 471;
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
		this.enterRule(_localctx, 100, pawnParser.RULE_cycleKeywords);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 474;
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
			this.state = 475;
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
		this.enterRule(_localctx, 102, pawnParser.RULE_literal);
		try {
			this.state = 480;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.SHARPSTRING:
			case pawnParser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 477;
				this.string();
				}
				break;
			case pawnParser.INTEGER:
			case pawnParser.FLOAT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 478;
				this.number();
				}
				break;
			case pawnParser.TRUE:
			case pawnParser.FALSE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 479;
				this.bool_const();
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
	public bool_const(): Bool_constContext {
		let _localctx: Bool_constContext = new Bool_constContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, pawnParser.RULE_bool_const);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 482;
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
		this.enterRule(_localctx, 106, pawnParser.RULE_string);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 484;
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
			this.state = 488;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 485;
					this.string();
					}
					}
				}
				this.state = 490;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
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
	public angledString(): AngledStringContext {
		let _localctx: AngledStringContext = new AngledStringContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, pawnParser.RULE_angledString);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 491;
			this.match(pawnParser.ANGLEDSTRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 110, pawnParser.RULE_functionCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 493;
			this.match(pawnParser.IDENTIFIER);
			this.state = 494;
			this.match(pawnParser.OPEN_PARENTHESIS);
			this.state = 503;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.OPEN_PARENTHESIS) | (1 << pawnParser.CURLY_OPEN_BRACKET) | (1 << pawnParser.MINUS) | (1 << pawnParser.INCREMENTS) | (1 << pawnParser.DECREMENTS))) !== 0) || _la === pawnParser.NOT || ((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (pawnParser.SIZEOF - 74)) | (1 << (pawnParser.TRUE - 74)) | (1 << (pawnParser.FALSE - 74)) | (1 << (pawnParser.SHARPSTRING - 74)) | (1 << (pawnParser.STRING - 74)) | (1 << (pawnParser.IDENTIFIER - 74)) | (1 << (pawnParser.INTEGER - 74)) | (1 << (pawnParser.FLOAT - 74)))) !== 0)) {
				{
				this.state = 495;
				this.expresion();
				this.state = 500;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === pawnParser.COMA) {
					{
					{
					this.state = 496;
					this.match(pawnParser.COMA);
					this.state = 497;
					this.expresion();
					}
					}
					this.state = 502;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 505;
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03k\u01FE\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x03\x02\x07\x02t\n\x02\f\x02" +
		"\x0E\x02w\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03" +
		"\x7F\n\x03\x03\x03\x05\x03\x82\n\x03\x03\x04\x03\x04\x05\x04\x86\n\x04" +
		"\x03\x04\x05\x04\x89\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04\x8F" +
		"\n\x04\f\x04\x0E\x04\x92\v\x04\x05\x04\x94\n\x04\x03\x04\x03\x04\x03\x05" +
		"\x03\x05\x03\x05\x05\x05\x9B\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x07\x05\x07\xA3\n\x07\x03\x07\x05\x07\xA6\n\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x07\x07\xAD\n\x07\f\x07\x0E\x07\xB0\v\x07\x05" +
		"\x07\xB2\n\x07\x03\x07\x03\x07\x03\x07\x05\x07\xB7\n\x07\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x07\b\xBE\n\b\f\b\x0E\b\xC1\v\b\x03\b\x05\b\xC4\n\b\x03" +
		"\b\x03\b\x03\t\x05\t\xC9\n\t\x03\t\x03\t\x07\t\xCD\n\t\f\t\x0E\t\xD0\v" +
		"\t\x03\n\x03\n\x05\n\xD4\n\n\x03\n\x03\n\x03\v\x03\v\x03\v\x05\v\xDB\n" +
		"\v\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x05\r\xE3\n\r\x03\r\x03\r\x03\r" +
		"\x05\r\xE8\n\r\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xED\n\x0E\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x05\x0F\xF3\n\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xF8" +
		"\n\x0F\x07\x0F\xFA\n\x0F\f\x0F\x0E\x0F\xFD\v\x0F\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x05\x10\u0103\n\x10\x03\x10\x03\x10\x03\x10\x05\x10\u0108\n\x10" +
		"\x07\x10\u010A\n\x10\f\x10\x0E\x10\u010D\v\x10\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x07\x11\u0113\n\x11\f\x11\x0E\x11\u0116\v\x11\x03\x11\x03\x11" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u011E\n\x12\x03\x13\x03\x13\x03" +
		"\x14\x03\x14\x03\x14\x03\x14\x03\x15\x05\x15\u0127\n\x15\x03\x15\x03\x15" +
		"\x05\x15\u012B\n\x15\x03\x15\x03\x15\x05\x15\u012F\n\x15\x03\x16\x03\x16" +
		"\x05\x16\u0133\n\x16\x03\x16\x05\x16\u0136\n\x16\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x05\x18\u0141\n\x18\x03" +
		"\x19\x03\x19\x05\x19\u0145\n\x19\x03\x1A\x05\x1A\u0148\n\x1A\x03\x1A\x05" +
		"\x1A\u014B\n\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u0150\n\x1A\x03\x1B\x03" +
		"\x1B\x03\x1C\x07\x1C\u0155\n\x1C\f\x1C\x0E\x1C\u0158\v\x1C\x03\x1D\x03" +
		"\x1D\x03\x1D\x05\x1D\u015D\n\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x05\x1F" +
		"\u0163\n\x1F\x03 \x03 \x03!\x03!\x03\"\x03\"\x03\"\x05\"\u016C\n\"\x03" +
		"#\x03#\x03$\x03$\x03%\x03%\x03&\x03&\x03&\x03&\x05&\u0178\n&\x03\'\x03" +
		"\'\x03\'\x05\'\u017D\n\'\x03(\x03(\x03(\x03(\x03(\x05(\u0184\n(\x03(\x03" +
		"(\x07(\u0188\n(\f(\x0E(\u018B\v(\x03(\x03(\x03)\x03)\x03)\x03)\x07)\u0193" +
		"\n)\f)\x0E)\u0196\v)\x03*\x03*\x05*\u019A\n*\x03*\x05*\u019D\n*\x03+\x03" +
		"+\x03+\x05+\u01A2\n+\x03,\x03,\x03,\x03,\x03-\x03-\x07-\u01AA\n-\f-\x0E" +
		"-\u01AD\v-\x03-\x03-\x05-\u01B1\n-\x03.\x03.\x05.\u01B5\n.\x03/\x03/\x03" +
		"/\x05/\u01BA\n/\x030\x030\x030\x030\x050\u01C0\n0\x031\x031\x031\x031" +
		"\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x033\x033\x033\x03" +
		"3\x073\u01D4\n3\f3\x0E3\u01D7\v3\x033\x033\x053\u01DB\n3\x034\x034\x03" +
		"4\x035\x035\x035\x055\u01E3\n5\x036\x036\x037\x037\x077\u01E9\n7\f7\x0E" +
		"7\u01EC\v7\x038\x038\x039\x039\x039\x039\x039\x079\u01F5\n9\f9\x0E9\u01F8" +
		"\v9\x059\u01FA\n9\x039\x039\x039\x02\x02\x02:\x02\x02\x04\x02\x06\x02" +
		"\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A" +
		"\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x02" +
		"4\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02" +
		"P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02" +
		"l\x02n\x02p\x02\x02\r\x05\x02\f\f\x0E\x0E\x16\x16\x04\x02;;>>\x03\x02" +
		"\v\x16\x06\x02\x18\x18\x1C\x1D((LL\x03\x029;\x03\x02\x17\x1D\x04\x02\x1E" +
		"#&(\x03\x02)/\x03\x02HI\x03\x02`a\x03\x02bc\x02\u0211\x02u\x03\x02\x02" +
		"\x02\x04\x81\x03\x02\x02\x02\x06\x83\x03\x02\x02\x02\b\x97\x03\x02\x02" +
		"\x02\n\x9C\x03\x02\x02\x02\f\xA2\x03\x02\x02\x02\x0E\xC3\x03\x02\x02\x02" +
		"\x10\xC8\x03\x02\x02\x02\x12\xD1\x03\x02\x02\x02\x14\xDA\x03\x02\x02\x02" +
		"\x16\xDC\x03\x02\x02\x02\x18\xE7\x03\x02\x02\x02\x1A\xEC\x03\x02\x02\x02" +
		"\x1C\xEE\x03\x02\x02\x02\x1E\xFE\x03\x02\x02\x02 \u010E\x03\x02\x02\x02" +
		"\"\u011D\x03\x02\x02\x02$\u011F\x03\x02\x02\x02&\u0121\x03\x02\x02\x02" +
		"(\u0126\x03\x02\x02\x02*\u0135\x03\x02\x02\x02,\u013C\x03\x02\x02\x02" +
		".\u013E\x03\x02\x02\x020\u0144\x03\x02\x02\x022\u0147\x03\x02\x02\x02" +
		"4\u0151\x03\x02\x02\x026\u0156\x03\x02\x02\x028\u015C\x03\x02\x02\x02" +
		":\u015E\x03\x02\x02\x02<\u0162\x03\x02\x02\x02>\u0164\x03\x02\x02\x02" +
		"@\u0166\x03\x02\x02\x02B\u016B\x03\x02\x02\x02D\u016D\x03\x02\x02\x02" +
		"F\u016F\x03\x02\x02\x02H\u0171\x03\x02\x02\x02J\u0173\x03\x02\x02\x02" +
		"L\u0179\x03\x02\x02\x02N\u017E\x03\x02\x02\x02P\u018E\x03\x02\x02\x02" +
		"R\u0199\x03\x02\x02\x02T\u019E\x03\x02\x02\x02V\u01A3\x03\x02\x02\x02" +
		"X\u01B0\x03\x02\x02\x02Z\u01B2\x03\x02\x02\x02\\\u01B9\x03\x02\x02\x02" +
		"^\u01BB\x03\x02\x02\x02`\u01C1\x03\x02\x02\x02b\u01C5\x03\x02\x02\x02" +
		"d\u01DA\x03\x02\x02\x02f\u01DC\x03\x02\x02\x02h\u01E2\x03\x02\x02\x02" +
		"j\u01E4\x03\x02\x02\x02l\u01E6\x03\x02\x02\x02n\u01ED\x03\x02\x02\x02" +
		"p\u01EF\x03\x02\x02\x02rt\x05\x04\x03\x02sr\x03\x02\x02\x02tw\x03\x02" +
		"\x02\x02us\x03\x02\x02\x02uv\x03\x02\x02\x02vx\x03\x02\x02\x02wu\x03\x02" +
		"\x02\x02xy\x07\x02\x02\x03y\x03\x03\x02\x02\x02z\x7F\x05\f\x07\x02{|\x05" +
		"\x1C\x0F\x02|}\x07\n\x02\x02}\x7F\x03\x02\x02\x02~z\x03\x02\x02\x02~{" +
		"\x03\x02\x02\x02\x7F\x82\x03\x02\x02\x02\x80\x82\x05\x06\x04\x02\x81~" +
		"\x03\x02\x02\x02\x81\x80\x03\x02\x02\x02\x82\x05\x03\x02\x02\x02\x83\x85" +
		"\x078\x02\x02\x84\x86\x07e\x02\x02\x85\x84\x03\x02\x02\x02\x85\x86\x03" +
		"\x02\x02\x02\x86\x88\x03\x02\x02\x02\x87\x89\x05\n\x06\x02\x88\x87\x03" +
		"\x02\x02\x02\x88\x89\x03\x02\x02\x02\x89\x8A\x03\x02\x02\x02\x8A\x93\x07" +
		"\x05\x02\x02\x8B\x90\x05\b\x05\x02\x8C\x8D\x07\t\x02\x02\x8D\x8F\x05\b" +
		"\x05\x02\x8E\x8C\x03\x02\x02\x02\x8F\x92\x03\x02\x02\x02\x90\x8E\x03\x02" +
		"\x02\x02\x90\x91\x03\x02\x02\x02\x91\x94\x03\x02\x02\x02\x92\x90\x03\x02" +
		"\x02\x02\x93\x8B\x03\x02\x02\x02\x93\x94\x03\x02\x02\x02\x94\x95\x03\x02" +
		"\x02\x02\x95\x96\x07\x06\x02\x02\x96\x07\x03\x02\x02\x02\x97\x9A\x05\x10" +
		"\t\x02\x98\x99\x07\v\x02\x02\x99\x9B\x05(\x15\x02\x9A\x98\x03\x02\x02" +
		"\x02\x9A\x9B\x03\x02\x02\x02\x9B\t\x03\x02\x02\x02\x9C\x9D\x07\x03\x02" +
		"\x02\x9D\x9E\t\x02\x02\x02\x9E\x9F\x07f\x02\x02\x9F\xA0\x07\x04\x02\x02" +
		"\xA0\v\x03\x02\x02\x02\xA1\xA3\x05\x14\v\x02\xA2\xA1\x03\x02\x02\x02\xA2" +
		"\xA3\x03\x02\x02\x02\xA3\xA5\x03\x02\x02\x02\xA4\xA6\x05\x0E\b\x02\xA5" +
		"\xA4\x03\x02\x02\x02\xA5\xA6\x03\x02\x02\x02\xA6\xA7\x03\x02\x02\x02\xA7" +
		"\xA8\x07e\x02\x02\xA8\xB1\x07\x03\x02\x02\xA9\xAE\x052\x1A\x02\xAA\xAB" +
		"\x07\t\x02\x02\xAB\xAD\x052\x1A\x02\xAC\xAA\x03\x02\x02\x02\xAD\xB0\x03" +
		"\x02\x02\x02\xAE\xAC\x03\x02\x02\x02\xAE\xAF\x03\x02\x02\x02\xAF\xB2\x03" +
		"\x02\x02\x02\xB0\xAE\x03\x02\x02\x02\xB1\xA9\x03\x02\x02\x02\xB1\xB2\x03" +
		"\x02\x02\x02\xB2\xB3\x03\x02\x02\x02\xB3\xB6\x07\x04\x02\x02\xB4\xB7\x07" +
		"\n\x02\x02\xB5\xB7\x05X-\x02\xB6\xB4\x03\x02\x02\x02\xB6\xB5\x03\x02\x02" +
		"\x02\xB7\r\x03\x02\x02\x02\xB8\xC4\x07e\x02\x02\xB9\xBA\x07\x05\x02\x02" +
		"\xBA\xBF\x07e\x02\x02\xBB\xBC\x07\t\x02\x02\xBC\xBE\x07e\x02\x02\xBD\xBB" +
		"\x03\x02\x02\x02\xBE\xC1\x03\x02\x02\x02\xBF\xBD\x03\x02\x02\x02\xBF\xC0" +
		"\x03\x02\x02\x02\xC0\xC2\x03\x02\x02\x02\xC1\xBF\x03\x02\x02\x02\xC2\xC4" +
		"\x07\x06\x02\x02\xC3\xB8\x03\x02\x02\x02\xC3\xB9\x03\x02\x02\x02\xC4\xC5" +
		"\x03\x02\x02\x02\xC5\xC6\x07%\x02\x02\xC6\x0F\x03\x02\x02\x02\xC7\xC9" +
		"\x05\x0E\b\x02\xC8\xC7\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9\xCA" +
		"\x03\x02\x02\x02\xCA\xCE\x07e\x02\x02\xCB\xCD\x05\x12\n\x02\xCC\xCB\x03" +
		"\x02\x02\x02\xCD\xD0\x03\x02\x02\x02\xCE\xCC\x03\x02\x02\x02\xCE\xCF\x03" +
		"\x02\x02\x02\xCF\x11\x03\x02\x02\x02\xD0\xCE\x03\x02\x02\x02\xD1\xD3\x07" +
		"\x07\x02\x02\xD2\xD4\x05(\x15\x02\xD3\xD2\x03\x02\x02\x02\xD3\xD4\x03" +
		"\x02\x02\x02\xD4\xD5\x03\x02\x02\x02\xD5\xD6\x07\b\x02\x02\xD6\x13\x03" +
		"\x02\x02\x02\xD7\xDB\x05\x16\f\x02\xD8\xDB\x07<\x02\x02\xD9\xDB\x07=\x02" +
		"\x02\xDA\xD7\x03\x02\x02\x02\xDA\xD8\x03\x02\x02\x02\xDA\xD9\x03\x02\x02" +
		"\x02\xDB\x15\x03\x02\x02\x02\xDC\xDD\t\x03\x02\x02\xDD\x17\x03\x02\x02" +
		"\x02\xDE\xE3\x05\x1C\x0F\x02\xDF\xE3\x05\x1E\x10\x02\xE0\xE3\x05p9\x02" +
		"\xE1\xE3\x05Z.\x02\xE2\xDE\x03\x02\x02\x02\xE2\xDF\x03\x02\x02\x02\xE2" +
		"\xE0\x03\x02\x02\x02\xE2\xE1\x03\x02\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4" +
		"\xE5\x07\n\x02\x02\xE5\xE8\x03\x02\x02\x02\xE6\xE8\x05\x1A\x0E\x02\xE7" +
		"\xE2\x03\x02\x02\x02\xE7\xE6\x03\x02\x02\x02\xE8\x19\x03\x02\x02\x02\xE9" +
		"\xED\x05J&\x02\xEA\xED\x05\\/\x02\xEB\xED\x05N(\x02\xEC\xE9\x03\x02\x02" +
		"\x02\xEC\xEA\x03\x02\x02\x02\xEC\xEB\x03\x02\x02\x02\xED\x1B\x03\x02\x02" +
		"\x02\xEE\xEF\x077\x02\x02\xEF\xF2\x056\x1C\x02\xF0\xF3\x05\x10\t\x02\xF1" +
		"\xF3\x05\x1E\x10\x02\xF2\xF0\x03\x02\x02\x02\xF2\xF1\x03\x02\x02\x02\xF3" +
		"\xFB\x03\x02\x02\x02\xF4\xF7\x07\t\x02\x02\xF5\xF8\x05\x10\t\x02\xF6\xF8" +
		"\x05\x1E\x10\x02\xF7\xF5\x03\x02\x02\x02\xF7\xF6\x03\x02\x02\x02\xF8\xFA" +
		"\x03\x02\x02\x02\xF9\xF4\x03\x02\x02\x02\xFA\xFD\x03\x02\x02\x02\xFB\xF9" +
		"\x03\x02\x02\x02\xFB\xFC\x03\x02\x02\x02\xFC\x1D\x03\x02\x02\x02\xFD\xFB" +
		"\x03\x02\x02\x02\xFE\xFF\x05\x10\t\x02\xFF\u0102\x05$\x13\x02\u0100\u0103" +
		"\x05(\x15\x02\u0101\u0103\x05 \x11\x02\u0102\u0100\x03\x02\x02\x02\u0102" +
		"\u0101\x03\x02\x02\x02\u0103\u010B\x03\x02\x02\x02\u0104\u0107\x05$\x13" +
		"\x02\u0105\u0108\x05(\x15\x02\u0106\u0108\x05 \x11\x02\u0107\u0105\x03" +
		"\x02\x02\x02\u0107\u0106\x03\x02\x02\x02\u0108\u010A\x03\x02\x02\x02\u0109" +
		"\u0104\x03\x02\x02\x02\u010A\u010D\x03\x02\x02\x02\u010B\u0109\x03\x02" +
		"\x02\x02\u010B\u010C\x03\x02\x02\x02\u010C\x1F\x03\x02\x02\x02\u010D\u010B" +
		"\x03\x02\x02\x02\u010E\u010F\x07\x05\x02\x02\u010F\u0114\x05\"\x12\x02" +
		"\u0110\u0111\x07\t\x02\x02\u0111\u0113\x05\"\x12\x02\u0112\u0110\x03\x02" +
		"\x02\x02\u0113\u0116\x03\x02\x02\x02\u0114\u0112\x03\x02\x02\x02\u0114" +
		"\u0115\x03\x02\x02\x02\u0115\u0117\x03\x02\x02\x02\u0116\u0114\x03\x02" +
		"\x02\x02\u0117\u0118\x07\x06\x02\x02\u0118!\x03\x02\x02\x02\u0119\u011E" +
		"\x07e\x02\x02\u011A\u011E\x05<\x1F\x02\u011B\u011E\x05l7\x02\u011C\u011E" +
		"\x05 \x11\x02\u011D\u0119\x03\x02\x02\x02\u011D\u011A\x03\x02\x02\x02" +
		"\u011D\u011B\x03\x02\x02\x02\u011D\u011C\x03\x02\x02\x02\u011E#\x03\x02" +
		"\x02\x02\u011F\u0120\t\x04\x02\x02\u0120%\x03\x02\x02\x02\u0121\u0122" +
		"\x07\x03\x02\x02\u0122\u0123\x05(\x15\x02\u0123\u0124\x07\x04\x02\x02" +
		"\u0124\'\x03\x02\x02\x02\u0125\u0127\x05,\x17\x02\u0126\u0125\x03\x02" +
		"\x02\x02\u0126\u0127\x03\x02\x02\x02\u0127\u012E\x03\x02\x02\x02\u0128" +
		"\u012A\x058\x1D\x02\u0129\u012B\x05.\x18\x02\u012A\u0129\x03\x02\x02\x02" +
		"\u012A\u012B\x03\x02\x02\x02\u012B\u012F\x03\x02\x02\x02\u012C\u012F\x05" +
		"&\x14\x02\u012D\u012F\x05*\x16\x02\u012E\u0128\x03\x02\x02\x02\u012E\u012C" +
		"\x03\x02\x02\x02\u012E\u012D\x03\x02\x02\x02\u012F)\x03\x02\x02\x02\u0130" +
		"\u0132\x058\x1D\x02\u0131\u0133\x05.\x18\x02\u0132\u0131\x03\x02\x02\x02" +
		"\u0132\u0133\x03\x02\x02\x02\u0133\u0136\x03\x02\x02\x02\u0134\u0136\x05" +
		"&\x14\x02\u0135\u0130\x03\x02\x02\x02\u0135\u0134\x03\x02\x02\x02\u0136" +
		"\u0137\x03\x02\x02\x02\u0137\u0138\x07$\x02\x02\u0138\u0139\x05(\x15\x02" +
		"\u0139\u013A\x07%\x02\x02\u013A\u013B\x05(\x15\x02\u013B+\x03\x02\x02" +
		"\x02\u013C\u013D\t\x05\x02\x02\u013D-\x03\x02\x02\x02\u013E\u0140\x05" +
		"B\"\x02\u013F\u0141\x05(\x15\x02\u0140\u013F\x03\x02\x02\x02\u0140\u0141" +
		"\x03\x02\x02\x02\u0141/\x03\x02\x02\x02\u0142\u0145\x05\x10\t\x02\u0143" +
		"\u0145\x05h5\x02\u0144\u0142\x03\x02\x02\x02\u0144\u0143\x03\x02\x02\x02" +
		"\u01451\x03\x02\x02\x02\u0146\u0148\x079\x02\x02\u0147\u0146\x03\x02\x02" +
		"\x02\u0147\u0148\x03\x02\x02\x02\u0148\u014A\x03\x02\x02\x02\u0149\u014B" +
		"\x054\x1B\x02\u014A\u0149\x03\x02\x02\x02\u014A\u014B\x03\x02\x02\x02" +
		"\u014B\u014C\x03\x02\x02\x02\u014C\u014F\x05\x10\t\x02\u014D\u014E\x07" +
		"\v\x02\x02\u014E\u0150\x05h5\x02\u014F\u014D\x03\x02\x02\x02\u014F\u0150" +
		"\x03\x02\x02\x02\u01503\x03\x02\x02\x02\u0151\u0152\x07)\x02\x02\u0152" +
		"5\x03\x02\x02\x02\u0153\u0155\t\x06\x02\x02\u0154\u0153\x03\x02\x02\x02" +
		"\u0155\u0158\x03\x02\x02\x02\u0156\u0154\x03\x02\x02\x02\u0156\u0157\x03" +
		"\x02\x02\x02\u01577\x03\x02\x02\x02\u0158\u0156\x03\x02\x02\x02\u0159" +
		"\u015D\x050\x19\x02\u015A\u015D\x05p9\x02\u015B\u015D\x05&\x14\x02\u015C" +
		"\u0159\x03\x02\x02\x02\u015C\u015A\x03\x02\x02\x02\u015C\u015B\x03\x02" +
		"\x02\x02\u015D9\x03\x02\x02\x02\u015E\u015F\x07L\x02\x02\u015F;\x03\x02" +
		"\x02\x02\u0160\u0163\x05> \x02\u0161\u0163\x05@!\x02\u0162\u0160\x03\x02" +
		"\x02\x02\u0162\u0161\x03\x02\x02\x02\u0163=\x03\x02\x02\x02\u0164\u0165" +
		"\x07f\x02\x02\u0165?\x03\x02\x02\x02\u0166\u0167\x07g\x02\x02\u0167A\x03" +
		"\x02\x02\x02\u0168\u016C\x05D#\x02\u0169\u016C\x05F$\x02\u016A\u016C\x05" +
		"H%\x02\u016B\u0168\x03\x02\x02\x02\u016B\u0169\x03\x02\x02\x02\u016B\u016A" +
		"\x03\x02\x02\x02\u016CC\x03\x02\x02\x02\u016D\u016E\t\x07\x02\x02\u016E" +
		"E\x03\x02\x02\x02\u016F\u0170\t\b\x02\x02\u0170G\x03\x02\x02\x02\u0171" +
		"\u0172\t\t\x02\x02\u0172I\x03\x02\x02\x02\u0173\u0174\x07@\x02\x02\u0174" +
		"\u0175\x05V,\x02\u0175\u0177\x05X-\x02\u0176\u0178\x05L\'\x02\u0177\u0176" +
		"\x03\x02\x02\x02\u0177\u0178\x03\x02\x02\x02\u0178K\x03\x02\x02\x02\u0179" +
		"\u017C\x07A\x02\x02\u017A\u017D\x05J&\x02\u017B\u017D\x05X-\x02\u017C" +
		"\u017A\x03\x02\x02\x02\u017C\u017B\x03\x02\x02\x02\u017DM\x03\x02\x02" +
		"\x02\u017E\u017F\x07B\x02\x02\u017F\u0180\x05V,\x02\u0180\u0189\x07\x05" +
		"\x02\x02\u0181\u0184\x05P)\x02\u0182\u0184\x07D\x02\x02\u0183\u0181\x03" +
		"\x02\x02\x02\u0183\u0182\x03\x02\x02\x02\u0184\u0185\x03\x02\x02\x02\u0185" +
		"\u0186\x07%\x02\x02\u0186\u0188\x05X-\x02\u0187\u0183\x03\x02\x02\x02" +
		"\u0188\u018B\x03\x02\x02\x02\u0189\u0187\x03\x02\x02\x02\u0189\u018A\x03" +
		"\x02\x02\x02\u018A\u018C\x03\x02\x02\x02\u018B\u0189\x03\x02\x02\x02\u018C" +
		"\u018D\x07\x06\x02\x02\u018DO\x03\x02\x02\x02\u018E\u018F\x07C\x02\x02" +
		"\u018F\u0194\x05R*\x02\u0190\u0191\x07\t\x02\x02\u0191\u0193\x05R*\x02" +
		"\u0192\u0190\x03\x02\x02\x02\u0193\u0196\x03\x02\x02\x02\u0194\u0192\x03" +
		"\x02\x02\x02\u0194\u0195\x03\x02\x02\x02\u0195Q\x03\x02\x02\x02\u0196" +
		"\u0194\x03\x02\x02\x02\u0197\u019A\x07e\x02\x02\u0198\u019A\x05<\x1F\x02" +
		"\u0199\u0197\x03\x02\x02\x02\u0199\u0198\x03\x02\x02\x02\u019A\u019C\x03" +
		"\x02\x02\x02\u019B\u019D\x05T+\x02\u019C\u019B\x03\x02\x02\x02\u019C\u019D" +
		"\x03\x02\x02\x02\u019DS\x03\x02\x02\x02\u019E\u01A1\x070\x02\x02\u019F" +
		"\u01A2\x07e\x02\x02\u01A0\u01A2\x05<\x1F\x02\u01A1\u019F\x03\x02\x02\x02" +
		"\u01A1\u01A0\x03\x02\x02\x02\u01A2U\x03\x02\x02\x02\u01A3\u01A4\x07\x03" +
		"\x02\x02\u01A4\u01A5\x05(\x15\x02\u01A5\u01A6\x07\x04\x02\x02\u01A6W\x03" +
		"\x02\x02\x02\u01A7\u01AB\x07\x05\x02\x02\u01A8\u01AA\x05\x18\r\x02\u01A9" +
		"\u01A8\x03\x02\x02\x02\u01AA\u01AD\x03\x02\x02\x02\u01AB\u01A9\x03\x02" +
		"\x02\x02\u01AB\u01AC\x03\x02\x02\x02\u01AC\u01AE\x03\x02\x02\x02\u01AD" +
		"\u01AB\x03\x02\x02\x02\u01AE\u01B1\x07\x06\x02\x02\u01AF\u01B1\x05\x18" +
		"\r\x02\u01B0\u01A7\x03\x02\x02\x02\u01B0\u01AF\x03\x02\x02\x02\u01B1Y" +
		"\x03\x02\x02\x02\u01B2\u01B4\x076\x02\x02\u01B3\u01B5\x05(\x15\x02\u01B4" +
		"\u01B3\x03\x02\x02\x02\u01B4\u01B5\x03\x02\x02\x02\u01B5[\x03\x02\x02" +
		"\x02\u01B6\u01BA\x05`1\x02\u01B7\u01BA\x05b2\x02\u01B8\u01BA\x05^0\x02" +
		"\u01B9\u01B6\x03\x02\x02\x02\u01B9\u01B7\x03\x02\x02\x02\u01B9\u01B8\x03" +
		"\x02\x02\x02\u01BA]\x03\x02\x02\x02\u01BB\u01BC\x07G\x02\x02\u01BC\u01BF" +
		"\x05d3\x02\u01BD\u01BE\x07E\x02\x02\u01BE\u01C0\x05V,\x02\u01BF\u01BD" +
		"\x03\x02\x02\x02\u01BF\u01C0\x03\x02\x02\x02\u01C0_\x03\x02\x02\x02\u01C1" +
		"\u01C2\x07E\x02\x02\u01C2\u01C3\x05V,\x02\u01C3\u01C4\x05d3\x02\u01C4" +
		"a\x03\x02\x02\x02\u01C5\u01C6\x07F\x02\x02\u01C6\u01C7\x07\x03\x02\x02" +
		"\u01C7\u01C8\x05\x1C\x0F\x02\u01C8\u01C9\x07\n\x02\x02\u01C9\u01CA\x05" +
		"(\x15\x02\u01CA\u01CB\x07\n\x02\x02\u01CB\u01CC\x05(\x15\x02\u01CC\u01CD" +
		"\x07\x04\x02\x02\u01CD\u01CE\x05d3\x02\u01CEc\x03\x02\x02\x02\u01CF\u01DB" +
		"\x05f4\x02\u01D0\u01D5\x07\x05\x02\x02\u01D1\u01D4\x05\x18\r\x02\u01D2" +
		"\u01D4\x05f4\x02\u01D3\u01D1\x03\x02\x02\x02\u01D3\u01D2\x03\x02\x02\x02" +
		"\u01D4\u01D7\x03\x02\x02\x02\u01D5\u01D3\x03\x02\x02\x02\u01D5\u01D6\x03" +
		"\x02\x02\x02\u01D6\u01D8\x03\x02\x02\x02\u01D7\u01D5\x03\x02\x02\x02\u01D8" +
		"\u01DB\x07\x06\x02\x02\u01D9\u01DB\x05\x18\r\x02\u01DA\u01CF\x03\x02\x02" +
		"\x02\u01DA\u01D0\x03\x02\x02\x02\u01DA\u01D9\x03\x02\x02\x02\u01DBe\x03" +
		"\x02\x02\x02\u01DC\u01DD\t\n\x02\x02\u01DD\u01DE\x07\n\x02\x02\u01DEg" +
		"\x03\x02\x02\x02\u01DF\u01E3\x05l7\x02\u01E0\u01E3\x05<\x1F\x02\u01E1" +
		"\u01E3\x05j6\x02\u01E2\u01DF\x03\x02\x02\x02\u01E2\u01E0\x03\x02\x02\x02" +
		"\u01E2\u01E1\x03\x02\x02\x02\u01E3i\x03\x02\x02\x02\u01E4\u01E5\t\v\x02" +
		"\x02\u01E5k\x03\x02\x02\x02\u01E6\u01EA\t\f\x02\x02\u01E7\u01E9\x05l7" +
		"\x02\u01E8\u01E7\x03\x02\x02\x02\u01E9\u01EC\x03\x02\x02\x02\u01EA\u01E8" +
		"\x03\x02\x02\x02\u01EA\u01EB\x03\x02\x02\x02\u01EBm\x03\x02\x02\x02\u01EC" +
		"\u01EA\x03\x02\x02\x02\u01ED\u01EE\x07d\x02\x02\u01EEo\x03\x02\x02\x02" +
		"\u01EF\u01F0\x07e\x02\x02\u01F0\u01F9\x07\x03\x02\x02\u01F1\u01F6\x05" +
		"(\x15\x02\u01F2\u01F3\x07\t\x02\x02\u01F3\u01F5\x05(\x15\x02\u01F4\u01F2" +
		"\x03\x02\x02\x02\u01F5\u01F8\x03\x02\x02\x02\u01F6\u01F4\x03\x02\x02\x02" +
		"\u01F6\u01F7\x03\x02\x02\x02\u01F7\u01FA\x03\x02\x02\x02\u01F8\u01F6\x03" +
		"\x02\x02\x02\u01F9\u01F1\x03\x02\x02\x02\u01F9\u01FA\x03\x02\x02\x02\u01FA" +
		"\u01FB\x03\x02\x02\x02\u01FB\u01FC\x07\x04\x02\x02\u01FCq\x03\x02\x02" +
		"\x02Bu~\x81\x85\x88\x90\x93\x9A\xA2\xA5\xAE\xB1\xB6\xBF\xC3\xC8\xCE\xD3" +
		"\xDA\xE2\xE7\xEC\xF2\xF7\xFB\u0102\u0107\u010B\u0114\u011D\u0126\u012A" +
		"\u012E\u0132\u0135\u0140\u0144\u0147\u014A\u014F\u0156\u015C\u0162\u016B" +
		"\u0177\u017C\u0183\u0189\u0194\u0199\u019C\u01A1\u01AB\u01B0\u01B4\u01B9" +
		"\u01BF\u01D3\u01D5\u01DA\u01E2\u01EA\u01F6\u01F9";
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
	public var_definition(): Var_definitionContext | undefined {
		return this.tryGetRuleContext(0, Var_definitionContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(pawnParser.SEMI, 0); }
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


export class FunctionDeclContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(pawnParser.IDENTIFIER, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(pawnParser.OPEN_PARENTHESIS, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(pawnParser.CLOSE_PARENTHESIS, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(pawnParser.SEMI, 0); }
	public codeBlock(): CodeBlockContext | undefined {
		return this.tryGetRuleContext(0, CodeBlockContext);
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


export class Var_definitionContext extends ParserRuleContext {
	public NEW(): TerminalNode { return this.getToken(pawnParser.NEW, 0); }
	public varModifires(): VarModifiresContext {
		return this.getRuleContext(0, VarModifiresContext);
	}
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
	public variable(): VariableContext | undefined {
		return this.tryGetRuleContext(0, VariableContext);
	}
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
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
	public variable(): VariableContext {
		return this.getRuleContext(0, VariableContext);
	}
	public CONST(): TerminalNode | undefined { return this.tryGetToken(pawnParser.CONST, 0); }
	public reference(): ReferenceContext | undefined {
		return this.tryGetRuleContext(0, ReferenceContext);
	}
	public ASSIGMENT(): TerminalNode | undefined { return this.tryGetToken(pawnParser.ASSIGMENT, 0); }
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
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
	public CONST(): TerminalNode[];
	public CONST(i: number): TerminalNode;
	public CONST(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pawnParser.CONST);
		} else {
			return this.getToken(pawnParser.CONST, i);
		}
	}
	public STATIC(): TerminalNode[];
	public STATIC(i: number): TerminalNode;
	public STATIC(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pawnParser.STATIC);
		} else {
			return this.getToken(pawnParser.STATIC, i);
		}
	}
	public STOCK(): TerminalNode[];
	public STOCK(i: number): TerminalNode;
	public STOCK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pawnParser.STOCK);
		} else {
			return this.getToken(pawnParser.STOCK, i);
		}
	}
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
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pawnParser.COLON);
		} else {
			return this.getToken(pawnParser.COLON, i);
		}
	}
	public codeBlock(): CodeBlockContext[];
	public codeBlock(i: number): CodeBlockContext;
	public codeBlock(i?: number): CodeBlockContext | CodeBlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CodeBlockContext);
		} else {
			return this.getRuleContext(i, CodeBlockContext);
		}
	}
	public case(): CaseContext[];
	public case(i: number): CaseContext;
	public case(i?: number): CaseContext | CaseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CaseContext);
		} else {
			return this.getRuleContext(i, CaseContext);
		}
	}
	public DEFAULT(): TerminalNode[];
	public DEFAULT(i: number): TerminalNode;
	public DEFAULT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pawnParser.DEFAULT);
		} else {
			return this.getToken(pawnParser.DEFAULT, i);
		}
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


export class AngledStringContext extends ParserRuleContext {
	public ANGLEDSTRING(): TerminalNode { return this.getToken(pawnParser.ANGLEDSTRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_angledString; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterAngledString) {
			listener.enterAngledString(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitAngledString) {
			listener.exitAngledString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitAngledString) {
			return visitor.visitAngledString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallContext extends ParserRuleContext {
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


