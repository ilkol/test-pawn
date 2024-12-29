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
	public static readonly CHAR_STRING = 96;
	public static readonly IDENTIFIER = 97;
	public static readonly HEX = 98;
	public static readonly INTEGER = 99;
	public static readonly FLOAT = 100;
	public static readonly Whitespace = 101;
	public static readonly Newline = 102;
	public static readonly DocBlock = 103;
	public static readonly DocLine = 104;
	public static readonly BlockComment = 105;
	public static readonly LineComment = 106;
	public static readonly RULE_file = 0;
	public static readonly RULE_processorLabel = 1;
	public static readonly RULE_declaration = 2;
	public static readonly RULE_enum = 3;
	public static readonly RULE_enumMember = 4;
	public static readonly RULE_enumIterator = 5;
	public static readonly RULE_var_definition = 6;
	public static readonly RULE_functionDecl = 7;
	public static readonly RULE_operatorOverload = 8;
	public static readonly RULE_nativeAssigment = 9;
	public static readonly RULE_tag = 10;
	public static readonly RULE_variable = 11;
	public static readonly RULE_arrayIndex = 12;
	public static readonly RULE_funcDeclModif = 13;
	public static readonly RULE_funcModif = 14;
	public static readonly RULE_statement = 15;
	public static readonly RULE_controlStatments = 16;
	public static readonly RULE_assigment = 17;
	public static readonly RULE_varModification = 18;
	public static readonly RULE_arrayInit = 19;
	public static readonly RULE_arrayInitMember = 20;
	public static readonly RULE_assigments = 21;
	public static readonly RULE_grouping = 22;
	public static readonly RULE_constGrouping = 23;
	public static readonly RULE_expresion = 24;
	public static readonly RULE_constExpresion = 25;
	public static readonly RULE_ternarOperator = 26;
	public static readonly RULE_preOperators = 27;
	public static readonly RULE_operation = 28;
	public static readonly RULE_varOrLiteral = 29;
	public static readonly RULE_declParams = 30;
	public static readonly RULE_ellipse = 31;
	public static readonly RULE_reference = 32;
	public static readonly RULE_varModifires = 33;
	public static readonly RULE_rValue = 34;
	public static readonly RULE_constRValue = 35;
	public static readonly RULE_sizeof = 36;
	public static readonly RULE_number = 37;
	public static readonly RULE_integer = 38;
	public static readonly RULE_float = 39;
	public static readonly RULE_hex = 40;
	public static readonly RULE_operator = 41;
	public static readonly RULE_canBeOverloaded = 42;
	public static readonly RULE_arefmeticOperator = 43;
	public static readonly RULE_logicOperator = 44;
	public static readonly RULE_compareOperator = 45;
	public static readonly RULE_bitwiseOperator = 46;
	public static readonly RULE_if_statement = 47;
	public static readonly RULE_else_statement = 48;
	public static readonly RULE_switch = 49;
	public static readonly RULE_case = 50;
	public static readonly RULE_default = 51;
	public static readonly RULE_case_list = 52;
	public static readonly RULE_range = 53;
	public static readonly RULE_condition = 54;
	public static readonly RULE_codeBlock = 55;
	public static readonly RULE_return = 56;
	public static readonly RULE_cycles = 57;
	public static readonly RULE_do = 58;
	public static readonly RULE_while = 59;
	public static readonly RULE_for = 60;
	public static readonly RULE_cycleBody = 61;
	public static readonly RULE_cycleKeywords = 62;
	public static readonly RULE_literal = 63;
	public static readonly RULE_bool_const = 64;
	public static readonly RULE_string = 65;
	public static readonly RULE_functionCall = 66;
	public static readonly RULE_docs = 67;
	public static readonly RULE_docBlock = 68;
	public static readonly RULE_docLine = 69;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"file", "processorLabel", "declaration", "enum", "enumMember", "enumIterator", 
		"var_definition", "functionDecl", "operatorOverload", "nativeAssigment", 
		"tag", "variable", "arrayIndex", "funcDeclModif", "funcModif", "statement", 
		"controlStatments", "assigment", "varModification", "arrayInit", "arrayInitMember", 
		"assigments", "grouping", "constGrouping", "expresion", "constExpresion", 
		"ternarOperator", "preOperators", "operation", "varOrLiteral", "declParams", 
		"ellipse", "reference", "varModifires", "rValue", "constRValue", "sizeof", 
		"number", "integer", "float", "hex", "operator", "canBeOverloaded", "arefmeticOperator", 
		"logicOperator", "compareOperator", "bitwiseOperator", "if_statement", 
		"else_statement", "switch", "case", "default", "case_list", "range", "condition", 
		"codeBlock", "return", "cycles", "do", "while", "for", "cycleBody", "cycleKeywords", 
		"literal", "bool_const", "string", "functionCall", "docs", "docBlock", 
		"docLine",
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
		"CHAR_STRING", "IDENTIFIER", "HEX", "INTEGER", "FLOAT", "Whitespace", 
		"Newline", "DocBlock", "DocLine", "BlockComment", "LineComment",
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
			this.state = 154;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 140;
				this.processorLabel();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 144;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 141;
						this.docs();
						}
						}
					}
					this.state = 146;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
				}
				this.state = 150;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === pawnParser.CURLY_OPEN_BRACKET || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (pawnParser.NEW - 54)) | (1 << (pawnParser.ENUM - 54)) | (1 << (pawnParser.CONST - 54)) | (1 << (pawnParser.STATIC - 54)) | (1 << (pawnParser.STOCK - 54)) | (1 << (pawnParser.FORWARD - 54)) | (1 << (pawnParser.NATIVE - 54)) | (1 << (pawnParser.PUBLIC - 54)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (pawnParser.IDENTIFIER - 97)) | (1 << (pawnParser.DocBlock - 97)) | (1 << (pawnParser.DocLine - 97)))) !== 0)) {
					{
					{
					this.state = 147;
					this.declaration();
					}
					}
					this.state = 152;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				this.state = 153;
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
			this.state = 156;
			this.match(pawnParser.IDENTIFIER);
			this.state = 157;
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
			this.state = 173;
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
				this.state = 162;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === pawnParser.DocBlock || _la === pawnParser.DocLine) {
					{
					{
					this.state = 159;
					this.docs();
					}
					}
					this.state = 164;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 170;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
				case 1:
					{
					this.state = 165;
					this.functionDecl();
					}
					break;

				case 2:
					{
					this.state = 166;
					this.operatorOverload();
					}
					break;

				case 3:
					{
					this.state = 167;
					this.var_definition();
					this.state = 168;
					this.match(pawnParser.SEMI);
					}
					break;
				}
				}
				break;
			case pawnParser.ENUM:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 172;
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
			this.state = 175;
			this.match(pawnParser.ENUM);
			this.state = 177;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.IDENTIFIER) {
				{
				this.state = 176;
				this.match(pawnParser.IDENTIFIER);
				}
			}

			this.state = 180;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.OPEN_PARENTHESIS) {
				{
				this.state = 179;
				this.enumIterator();
				}
			}

			this.state = 182;
			this.match(pawnParser.CURLY_OPEN_BRACKET);
			this.state = 194;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.CURLY_OPEN_BRACKET || _la === pawnParser.IDENTIFIER) {
				{
				this.state = 183;
				this.enumMember();
				this.state = 188;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 184;
						this.match(pawnParser.COMA);
						this.state = 185;
						this.enumMember();
						}
						}
					}
					this.state = 190;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
				}
				this.state = 192;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === pawnParser.COMA) {
					{
					this.state = 191;
					this.match(pawnParser.COMA);
					}
				}

				}
			}

			this.state = 196;
			this.match(pawnParser.CURLY_CLOSE_BRACKET);
			this.state = 198;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.SEMI) {
				{
				this.state = 197;
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
			this.state = 200;
			this.variable();
			this.state = 203;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.ASSIGMENT) {
				{
				this.state = 201;
				this.match(pawnParser.ASSIGMENT);
				this.state = 202;
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
			this.state = 205;
			this.match(pawnParser.OPEN_PARENTHESIS);
			this.state = 206;
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
			this.state = 207;
			this.match(pawnParser.INTEGER);
			this.state = 208;
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
		this.enterRule(_localctx, 12, pawnParser.RULE_var_definition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 222;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.NEW:
				{
				{
				this.state = 210;
				this.match(pawnParser.NEW);
				this.state = 214;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (pawnParser.CONST - 56)) | (1 << (pawnParser.STATIC - 56)) | (1 << (pawnParser.STOCK - 56)) | (1 << (pawnParser.PUBLIC - 56)))) !== 0)) {
					{
					{
					this.state = 211;
					this.varModifires();
					}
					}
					this.state = 216;
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
				this.state = 218;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 217;
					this.varModifires();
					}
					}
					this.state = 220;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (pawnParser.CONST - 56)) | (1 << (pawnParser.STATIC - 56)) | (1 << (pawnParser.STOCK - 56)) | (1 << (pawnParser.PUBLIC - 56)))) !== 0));
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 226;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 224;
				this.variable();
				}
				break;

			case 2:
				{
				this.state = 225;
				this.assigment();
				}
				break;
			}
			this.state = 235;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pawnParser.COMA) {
				{
				{
				this.state = 228;
				this.match(pawnParser.COMA);
				this.state = 231;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
				case 1:
					{
					this.state = 229;
					this.variable();
					}
					break;

				case 2:
					{
					this.state = 230;
					this.assigment();
					}
					break;
				}
				}
				}
				this.state = 237;
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
		this.enterRule(_localctx, 14, pawnParser.RULE_functionDecl);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 239;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (pawnParser.STOCK - 58)) | (1 << (pawnParser.FORWARD - 58)) | (1 << (pawnParser.NATIVE - 58)) | (1 << (pawnParser.PUBLIC - 58)))) !== 0)) {
				{
				this.state = 238;
				this.funcDeclModif();
				}
			}

			this.state = 242;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				{
				this.state = 241;
				this.tag();
				}
				break;
			}
			this.state = 244;
			this.match(pawnParser.IDENTIFIER);
			this.state = 245;
			this.match(pawnParser.OPEN_PARENTHESIS);
			this.state = 257;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.CURLY_OPEN_BRACKET || _la === pawnParser.BIT_AND || _la === pawnParser.CONST || _la === pawnParser.IDENTIFIER) {
				{
				this.state = 246;
				this.declParams();
				this.state = 251;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 247;
						this.match(pawnParser.COMA);
						this.state = 248;
						this.declParams();
						}
						}
					}
					this.state = 253;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
				}
				this.state = 255;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === pawnParser.COMA) {
					{
					this.state = 254;
					this.ellipse();
					}
				}

				}
			}

			this.state = 259;
			this.match(pawnParser.CLOSE_PARENTHESIS);
			this.state = 263;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.SEMI:
				{
				this.state = 260;
				this.match(pawnParser.SEMI);
				}
				break;
			case pawnParser.CURLY_OPEN_BRACKET:
			case pawnParser.INCREMENTS:
			case pawnParser.DECREMENTS:
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
				this.state = 261;
				this.codeBlock();
				}
				break;
			case pawnParser.ASSIGMENT:
				{
				this.state = 262;
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
		this.enterRule(_localctx, 16, pawnParser.RULE_operatorOverload);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 265;
			this.funcDeclModif();
			}
			this.state = 267;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.CURLY_OPEN_BRACKET || _la === pawnParser.IDENTIFIER) {
				{
				this.state = 266;
				this.tag();
				}
			}

			this.state = 269;
			this.match(pawnParser.OPERATOR);
			this.state = 270;
			this.canBeOverloaded();
			this.state = 271;
			this.match(pawnParser.OPEN_PARENTHESIS);
			this.state = 283;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.CURLY_OPEN_BRACKET || _la === pawnParser.BIT_AND || _la === pawnParser.CONST || _la === pawnParser.IDENTIFIER) {
				{
				this.state = 272;
				this.declParams();
				this.state = 277;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 273;
						this.match(pawnParser.COMA);
						this.state = 274;
						this.declParams();
						}
						}
					}
					this.state = 279;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
				}
				this.state = 281;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === pawnParser.COMA) {
					{
					this.state = 280;
					this.ellipse();
					}
				}

				}
			}

			this.state = 285;
			this.match(pawnParser.CLOSE_PARENTHESIS);
			this.state = 289;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.SEMI:
				{
				this.state = 286;
				this.match(pawnParser.SEMI);
				}
				break;
			case pawnParser.CURLY_OPEN_BRACKET:
			case pawnParser.INCREMENTS:
			case pawnParser.DECREMENTS:
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
				this.state = 287;
				this.codeBlock();
				}
				break;
			case pawnParser.ASSIGMENT:
				{
				this.state = 288;
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
		this.enterRule(_localctx, 18, pawnParser.RULE_nativeAssigment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 291;
			this.match(pawnParser.ASSIGMENT);
			this.state = 292;
			this.match(pawnParser.IDENTIFIER);
			this.state = 293;
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
		this.enterRule(_localctx, 20, pawnParser.RULE_tag);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 306;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.IDENTIFIER:
				{
				this.state = 295;
				this.match(pawnParser.IDENTIFIER);
				}
				break;
			case pawnParser.CURLY_OPEN_BRACKET:
				{
				{
				this.state = 296;
				this.match(pawnParser.CURLY_OPEN_BRACKET);
				this.state = 297;
				this.match(pawnParser.IDENTIFIER);
				this.state = 302;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === pawnParser.COMA) {
					{
					{
					this.state = 298;
					this.match(pawnParser.COMA);
					this.state = 299;
					this.match(pawnParser.IDENTIFIER);
					}
					}
					this.state = 304;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 305;
				this.match(pawnParser.CURLY_CLOSE_BRACKET);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 308;
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
		this.enterRule(_localctx, 22, pawnParser.RULE_variable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 311;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				{
				this.state = 310;
				this.tag();
				}
				break;
			}
			this.state = 313;
			this.match(pawnParser.IDENTIFIER);
			this.state = 317;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pawnParser.SQUARE_OPEN_BRACKET) {
				{
				{
				this.state = 314;
				this.arrayIndex();
				}
				}
				this.state = 319;
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
		this.enterRule(_localctx, 24, pawnParser.RULE_arrayIndex);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 320;
			this.match(pawnParser.SQUARE_OPEN_BRACKET);
			this.state = 325;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.OPEN_PARENTHESIS) | (1 << pawnParser.CURLY_OPEN_BRACKET) | (1 << pawnParser.MINUS) | (1 << pawnParser.INCREMENTS) | (1 << pawnParser.DECREMENTS))) !== 0) || _la === pawnParser.NOT || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (pawnParser.SIZEOF - 75)) | (1 << (pawnParser.TRUE - 75)) | (1 << (pawnParser.FALSE - 75)) | (1 << (pawnParser.SHARPSTRING - 75)) | (1 << (pawnParser.STRING - 75)) | (1 << (pawnParser.CHAR_STRING - 75)) | (1 << (pawnParser.IDENTIFIER - 75)) | (1 << (pawnParser.HEX - 75)) | (1 << (pawnParser.INTEGER - 75)) | (1 << (pawnParser.FLOAT - 75)))) !== 0)) {
				{
				this.state = 321;
				this.expresion();
				this.state = 323;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === pawnParser.CHAR) {
					{
					this.state = 322;
					this.match(pawnParser.CHAR);
					}
				}

				}
			}

			this.state = 327;
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
		this.enterRule(_localctx, 26, pawnParser.RULE_funcDeclModif);
		try {
			this.state = 332;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.STOCK:
			case pawnParser.PUBLIC:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 329;
				this.funcModif();
				}
				break;
			case pawnParser.FORWARD:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 330;
				this.match(pawnParser.FORWARD);
				}
				break;
			case pawnParser.NATIVE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 331;
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
		this.enterRule(_localctx, 28, pawnParser.RULE_funcModif);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 334;
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
		this.enterRule(_localctx, 30, pawnParser.RULE_statement);
		try {
			this.state = 346;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.CURLY_OPEN_BRACKET:
			case pawnParser.INCREMENTS:
			case pawnParser.DECREMENTS:
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
				this.state = 341;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
				case 1:
					{
					this.state = 336;
					this.var_definition();
					}
					break;

				case 2:
					{
					this.state = 337;
					this.assigment();
					}
					break;

				case 3:
					{
					this.state = 338;
					this.functionCall();
					}
					break;

				case 4:
					{
					this.state = 339;
					this.return();
					}
					break;

				case 5:
					{
					this.state = 340;
					this.varModification();
					}
					break;
				}
				this.state = 343;
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
				this.state = 345;
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
		this.enterRule(_localctx, 32, pawnParser.RULE_controlStatments);
		try {
			this.state = 351;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.IF:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 348;
				this.if_statement();
				}
				break;
			case pawnParser.WHILE:
			case pawnParser.FOR:
			case pawnParser.DO:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 349;
				this.cycles();
				}
				break;
			case pawnParser.SWITCH:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 350;
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
		this.enterRule(_localctx, 34, pawnParser.RULE_assigment);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 353;
			this.variable();
			this.state = 354;
			this.assigments();
			this.state = 357;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				{
				this.state = 355;
				this.expresion();
				}
				break;

			case 2:
				{
				this.state = 356;
				this.arrayInit();
				}
				break;
			}
			this.state = 366;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.ASSIGMENT) | (1 << pawnParser.ASSIGMENT_PLUS) | (1 << pawnParser.ASSIGMENT_MINUS) | (1 << pawnParser.ASSIGMENT_MULT) | (1 << pawnParser.ASSIGMENT_DIV) | (1 << pawnParser.ASSIGMENT_REMAINDE) | (1 << pawnParser.ASSIGMENT_AND) | (1 << pawnParser.ASSIGMENT_OR) | (1 << pawnParser.ASSIGMENT_XOR) | (1 << pawnParser.ASSIGMENT_RIGHT) | (1 << pawnParser.ASSIGMENT_RIGHT_LOG) | (1 << pawnParser.ASSIGMENT_LEFT))) !== 0)) {
				{
				{
				this.state = 359;
				this.assigments();
				this.state = 362;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
				case 1:
					{
					this.state = 360;
					this.expresion();
					}
					break;

				case 2:
					{
					this.state = 361;
					this.arrayInit();
					}
					break;
				}
				}
				}
				this.state = 368;
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
	public varModification(): VarModificationContext {
		let _localctx: VarModificationContext = new VarModificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, pawnParser.RULE_varModification);
		let _la: number;
		try {
			this.state = 375;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 369;
				_la = this._input.LA(1);
				if (!(_la === pawnParser.INCREMENTS || _la === pawnParser.DECREMENTS)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 370;
				this.variable();
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 371;
				this.variable();
				this.state = 372;
				_la = this._input.LA(1);
				if (!(_la === pawnParser.INCREMENTS || _la === pawnParser.DECREMENTS)) {
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
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 374;
				this.variable();
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
	public arrayInit(): ArrayInitContext {
		let _localctx: ArrayInitContext = new ArrayInitContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, pawnParser.RULE_arrayInit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 377;
			this.match(pawnParser.CURLY_OPEN_BRACKET);
			this.state = 378;
			this.arrayInitMember();
			this.state = 383;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pawnParser.COMA) {
				{
				{
				this.state = 379;
				this.match(pawnParser.COMA);
				this.state = 380;
				this.arrayInitMember();
				}
				}
				this.state = 385;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 386;
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
		this.enterRule(_localctx, 40, pawnParser.RULE_arrayInitMember);
		try {
			this.state = 397;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 389;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
				case 1:
					{
					this.state = 388;
					this.tag();
					}
					break;
				}
				this.state = 394;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case pawnParser.IDENTIFIER:
					{
					this.state = 391;
					this.match(pawnParser.IDENTIFIER);
					}
					break;
				case pawnParser.MINUS:
				case pawnParser.HEX:
				case pawnParser.INTEGER:
				case pawnParser.FLOAT:
					{
					this.state = 392;
					this.number();
					}
					break;
				case pawnParser.SHARPSTRING:
				case pawnParser.STRING:
				case pawnParser.CHAR_STRING:
					{
					this.state = 393;
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
				this.state = 396;
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
		this.enterRule(_localctx, 42, pawnParser.RULE_assigments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 399;
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
		this.enterRule(_localctx, 44, pawnParser.RULE_grouping);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 402;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.CURLY_OPEN_BRACKET || _la === pawnParser.IDENTIFIER) {
				{
				this.state = 401;
				this.tag();
				}
			}

			this.state = 404;
			this.match(pawnParser.OPEN_PARENTHESIS);
			this.state = 405;
			this.expresion();
			this.state = 406;
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
		this.enterRule(_localctx, 46, pawnParser.RULE_constGrouping);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 409;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.CURLY_OPEN_BRACKET || _la === pawnParser.IDENTIFIER) {
				{
				this.state = 408;
				this.tag();
				}
			}

			this.state = 411;
			this.match(pawnParser.OPEN_PARENTHESIS);
			this.state = 412;
			this.constExpresion();
			this.state = 413;
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
		this.enterRule(_localctx, 48, pawnParser.RULE_expresion);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 416;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
			case 1:
				{
				this.state = 415;
				this.preOperators();
				}
				break;
			}
			this.state = 424;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
			case 1:
				{
				this.state = 418;
				this.rValue();
				this.state = 420;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (pawnParser.PLUS - 21)) | (1 << (pawnParser.MINUS - 21)) | (1 << (pawnParser.MULTY - 21)) | (1 << (pawnParser.DIV - 21)) | (1 << (pawnParser.REMAINDE - 21)) | (1 << (pawnParser.INCREMENTS - 21)) | (1 << (pawnParser.DECREMENTS - 21)) | (1 << (pawnParser.EQUAL - 21)) | (1 << (pawnParser.NOTEQUAL - 21)) | (1 << (pawnParser.LESS - 21)) | (1 << (pawnParser.LARGER - 21)) | (1 << (pawnParser.LESSEQ - 21)) | (1 << (pawnParser.LARGEREQ - 21)) | (1 << (pawnParser.OR - 21)) | (1 << (pawnParser.AND - 21)) | (1 << (pawnParser.NOT - 21)) | (1 << (pawnParser.BIT_AND - 21)) | (1 << (pawnParser.BIT_OR - 21)) | (1 << (pawnParser.BIT_XOR - 21)) | (1 << (pawnParser.BIT_COMPLEMEN - 21)) | (1 << (pawnParser.BIT_RIGHT - 21)) | (1 << (pawnParser.BIT_LEFT - 21)) | (1 << (pawnParser.BIT_RIGHT_LOG - 21)))) !== 0)) {
					{
					this.state = 419;
					this.operation();
					}
				}

				}
				break;

			case 2:
				{
				this.state = 422;
				this.grouping();
				}
				break;

			case 3:
				{
				this.state = 423;
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
		this.enterRule(_localctx, 50, pawnParser.RULE_constExpresion);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 427;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
			case 1:
				{
				this.state = 426;
				this.preOperators();
				}
				break;
			}
			this.state = 435;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
			case 1:
				{
				this.state = 429;
				this.varOrLiteral();
				this.state = 431;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (pawnParser.PLUS - 21)) | (1 << (pawnParser.MINUS - 21)) | (1 << (pawnParser.MULTY - 21)) | (1 << (pawnParser.DIV - 21)) | (1 << (pawnParser.REMAINDE - 21)) | (1 << (pawnParser.INCREMENTS - 21)) | (1 << (pawnParser.DECREMENTS - 21)) | (1 << (pawnParser.EQUAL - 21)) | (1 << (pawnParser.NOTEQUAL - 21)) | (1 << (pawnParser.LESS - 21)) | (1 << (pawnParser.LARGER - 21)) | (1 << (pawnParser.LESSEQ - 21)) | (1 << (pawnParser.LARGEREQ - 21)) | (1 << (pawnParser.OR - 21)) | (1 << (pawnParser.AND - 21)) | (1 << (pawnParser.NOT - 21)) | (1 << (pawnParser.BIT_AND - 21)) | (1 << (pawnParser.BIT_OR - 21)) | (1 << (pawnParser.BIT_XOR - 21)) | (1 << (pawnParser.BIT_COMPLEMEN - 21)) | (1 << (pawnParser.BIT_RIGHT - 21)) | (1 << (pawnParser.BIT_LEFT - 21)) | (1 << (pawnParser.BIT_RIGHT_LOG - 21)))) !== 0)) {
					{
					this.state = 430;
					this.operation();
					}
				}

				}
				break;

			case 2:
				{
				this.state = 433;
				this.constGrouping();
				}
				break;

			case 3:
				{
				this.state = 434;
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
		this.enterRule(_localctx, 52, pawnParser.RULE_ternarOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 442;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 57, this._ctx) ) {
			case 1:
				{
				this.state = 437;
				this.rValue();
				this.state = 439;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (pawnParser.PLUS - 21)) | (1 << (pawnParser.MINUS - 21)) | (1 << (pawnParser.MULTY - 21)) | (1 << (pawnParser.DIV - 21)) | (1 << (pawnParser.REMAINDE - 21)) | (1 << (pawnParser.INCREMENTS - 21)) | (1 << (pawnParser.DECREMENTS - 21)) | (1 << (pawnParser.EQUAL - 21)) | (1 << (pawnParser.NOTEQUAL - 21)) | (1 << (pawnParser.LESS - 21)) | (1 << (pawnParser.LARGER - 21)) | (1 << (pawnParser.LESSEQ - 21)) | (1 << (pawnParser.LARGEREQ - 21)) | (1 << (pawnParser.OR - 21)) | (1 << (pawnParser.AND - 21)) | (1 << (pawnParser.NOT - 21)) | (1 << (pawnParser.BIT_AND - 21)) | (1 << (pawnParser.BIT_OR - 21)) | (1 << (pawnParser.BIT_XOR - 21)) | (1 << (pawnParser.BIT_COMPLEMEN - 21)) | (1 << (pawnParser.BIT_RIGHT - 21)) | (1 << (pawnParser.BIT_LEFT - 21)) | (1 << (pawnParser.BIT_RIGHT_LOG - 21)))) !== 0)) {
					{
					this.state = 438;
					this.operation();
					}
				}

				}
				break;

			case 2:
				{
				this.state = 441;
				this.grouping();
				}
				break;
			}
			this.state = 444;
			this.match(pawnParser.QUESTION);
			this.state = 445;
			this.expresion();
			this.state = 446;
			this.match(pawnParser.COLON);
			this.state = 447;
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
		this.enterRule(_localctx, 54, pawnParser.RULE_preOperators);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 449;
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
		this.enterRule(_localctx, 56, pawnParser.RULE_operation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 451;
			this.operator();
			this.state = 453;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.OPEN_PARENTHESIS) | (1 << pawnParser.CURLY_OPEN_BRACKET) | (1 << pawnParser.MINUS) | (1 << pawnParser.INCREMENTS) | (1 << pawnParser.DECREMENTS))) !== 0) || _la === pawnParser.NOT || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (pawnParser.SIZEOF - 75)) | (1 << (pawnParser.TRUE - 75)) | (1 << (pawnParser.FALSE - 75)) | (1 << (pawnParser.SHARPSTRING - 75)) | (1 << (pawnParser.STRING - 75)) | (1 << (pawnParser.CHAR_STRING - 75)) | (1 << (pawnParser.IDENTIFIER - 75)) | (1 << (pawnParser.HEX - 75)) | (1 << (pawnParser.INTEGER - 75)) | (1 << (pawnParser.FLOAT - 75)))) !== 0)) {
				{
				this.state = 452;
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
		this.enterRule(_localctx, 58, pawnParser.RULE_varOrLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 457;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 59, this._ctx) ) {
			case 1:
				{
				this.state = 455;
				this.literal();
				}
				break;

			case 2:
				{
				this.state = 456;
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
		this.enterRule(_localctx, 60, pawnParser.RULE_declParams);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 460;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.CONST) {
				{
				this.state = 459;
				this.match(pawnParser.CONST);
				}
			}

			this.state = 463;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.BIT_AND) {
				{
				this.state = 462;
				this.reference();
				}
			}

			this.state = 465;
			this.variable();
			this.state = 478;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.ASSIGMENT) {
				{
				this.state = 466;
				this.match(pawnParser.ASSIGMENT);
				this.state = 476;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 63, this._ctx) ) {
				case 1:
					{
					this.state = 467;
					this.constExpresion();
					}
					break;

				case 2:
					{
					{
					this.state = 468;
					this.sizeof();
					this.state = 474;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case pawnParser.CURLY_OPEN_BRACKET:
					case pawnParser.IDENTIFIER:
						{
						this.state = 469;
						this.variable();
						}
						break;
					case pawnParser.OPEN_PARENTHESIS:
						{
						this.state = 470;
						this.match(pawnParser.OPEN_PARENTHESIS);
						this.state = 471;
						this.variable();
						this.state = 472;
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
		this.enterRule(_localctx, 62, pawnParser.RULE_ellipse);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 480;
			this.match(pawnParser.COMA);
			this.state = 482;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.CURLY_OPEN_BRACKET || _la === pawnParser.IDENTIFIER) {
				{
				this.state = 481;
				this.tag();
				}
			}

			this.state = 484;
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
		this.enterRule(_localctx, 64, pawnParser.RULE_reference);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 486;
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
		this.enterRule(_localctx, 66, pawnParser.RULE_varModifires);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 488;
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
		this.enterRule(_localctx, 68, pawnParser.RULE_rValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 493;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
			case 1:
				{
				this.state = 490;
				this.varOrLiteral();
				}
				break;

			case 2:
				{
				this.state = 491;
				this.functionCall();
				}
				break;

			case 3:
				{
				this.state = 492;
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
		this.enterRule(_localctx, 70, pawnParser.RULE_constRValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 497;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 67, this._ctx) ) {
			case 1:
				{
				this.state = 495;
				this.varOrLiteral();
				}
				break;

			case 2:
				{
				this.state = 496;
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
		this.enterRule(_localctx, 72, pawnParser.RULE_sizeof);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 499;
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
		this.enterRule(_localctx, 74, pawnParser.RULE_number);
		try {
			this.state = 504;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 68, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 501;
				this.integer();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 502;
				this.float();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 503;
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
		this.enterRule(_localctx, 76, pawnParser.RULE_integer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 507;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.MINUS) {
				{
				this.state = 506;
				this.match(pawnParser.MINUS);
				}
			}

			this.state = 509;
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
		this.enterRule(_localctx, 78, pawnParser.RULE_float);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 512;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.MINUS) {
				{
				this.state = 511;
				this.match(pawnParser.MINUS);
				}
			}

			this.state = 514;
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
		this.enterRule(_localctx, 80, pawnParser.RULE_hex);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 516;
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
		this.enterRule(_localctx, 82, pawnParser.RULE_operator);
		try {
			this.state = 521;
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
				this.state = 518;
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
				this.state = 519;
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
				this.state = 520;
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
		this.enterRule(_localctx, 84, pawnParser.RULE_canBeOverloaded);
		try {
			this.state = 526;
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
				this.state = 523;
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
				this.state = 524;
				this.compareOperator();
				}
				break;
			case pawnParser.ASSIGMENT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 525;
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
		this.enterRule(_localctx, 86, pawnParser.RULE_arefmeticOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 528;
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
		this.enterRule(_localctx, 88, pawnParser.RULE_logicOperator);
		try {
			this.state = 533;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.OR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 530;
				this.match(pawnParser.OR);
				}
				break;
			case pawnParser.AND:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 531;
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
				this.state = 532;
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
		this.enterRule(_localctx, 90, pawnParser.RULE_compareOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 535;
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
		this.enterRule(_localctx, 92, pawnParser.RULE_bitwiseOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 537;
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
		this.enterRule(_localctx, 94, pawnParser.RULE_if_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 539;
			this.match(pawnParser.IF);
			this.state = 540;
			this.condition();
			this.state = 541;
			this.codeBlock();
			this.state = 543;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 74, this._ctx) ) {
			case 1:
				{
				this.state = 542;
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
		this.enterRule(_localctx, 96, pawnParser.RULE_else_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 545;
			this.match(pawnParser.ELSE);
			this.state = 548;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
			case 1:
				{
				this.state = 546;
				this.if_statement();
				}
				break;

			case 2:
				{
				this.state = 547;
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
		this.enterRule(_localctx, 98, pawnParser.RULE_switch);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 550;
			this.match(pawnParser.SWITCH);
			this.state = 551;
			this.condition();
			this.state = 552;
			this.match(pawnParser.CURLY_OPEN_BRACKET);
			this.state = 556;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pawnParser.CASE) {
				{
				{
				this.state = 553;
				this.case();
				}
				}
				this.state = 558;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 560;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.DEFAULT) {
				{
				this.state = 559;
				this.default();
				}
			}

			this.state = 562;
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
		this.enterRule(_localctx, 100, pawnParser.RULE_case);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 564;
			this.match(pawnParser.CASE);
			this.state = 565;
			this.case_list();
			this.state = 570;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pawnParser.COMA) {
				{
				{
				this.state = 566;
				this.match(pawnParser.COMA);
				this.state = 567;
				this.case_list();
				}
				}
				this.state = 572;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 573;
			this.match(pawnParser.COLON);
			this.state = 574;
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
		this.enterRule(_localctx, 102, pawnParser.RULE_default);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 576;
			this.match(pawnParser.DEFAULT);
			this.state = 577;
			this.match(pawnParser.COLON);
			this.state = 578;
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
		this.enterRule(_localctx, 104, pawnParser.RULE_case_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 582;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.IDENTIFIER:
				{
				this.state = 580;
				this.match(pawnParser.IDENTIFIER);
				}
				break;
			case pawnParser.MINUS:
			case pawnParser.HEX:
			case pawnParser.INTEGER:
			case pawnParser.FLOAT:
				{
				this.state = 581;
				this.number();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 585;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.PERIOD) {
				{
				this.state = 584;
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
		this.enterRule(_localctx, 106, pawnParser.RULE_range);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 587;
			this.match(pawnParser.PERIOD);
			this.state = 590;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.IDENTIFIER:
				{
				this.state = 588;
				this.match(pawnParser.IDENTIFIER);
				}
				break;
			case pawnParser.MINUS:
			case pawnParser.HEX:
			case pawnParser.INTEGER:
			case pawnParser.FLOAT:
				{
				this.state = 589;
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
		this.enterRule(_localctx, 108, pawnParser.RULE_condition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 592;
			this.match(pawnParser.OPEN_PARENTHESIS);
			this.state = 593;
			this.expresion();
			this.state = 594;
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
		this.enterRule(_localctx, 110, pawnParser.RULE_codeBlock);
		let _la: number;
		try {
			this.state = 610;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 85, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 596;
				this.match(pawnParser.CURLY_OPEN_BRACKET);
				this.state = 602;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.CURLY_OPEN_BRACKET) | (1 << pawnParser.INCREMENTS) | (1 << pawnParser.DECREMENTS))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (pawnParser.RETURN - 53)) | (1 << (pawnParser.NEW - 53)) | (1 << (pawnParser.CONST - 53)) | (1 << (pawnParser.STATIC - 53)) | (1 << (pawnParser.STOCK - 53)) | (1 << (pawnParser.PUBLIC - 53)) | (1 << (pawnParser.IF - 53)) | (1 << (pawnParser.SWITCH - 53)) | (1 << (pawnParser.WHILE - 53)) | (1 << (pawnParser.FOR - 53)) | (1 << (pawnParser.DO - 53)) | (1 << (pawnParser.CONTINUE - 53)) | (1 << (pawnParser.BREAK - 53)))) !== 0) || _la === pawnParser.IDENTIFIER) {
					{
					this.state = 600;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 82, this._ctx) ) {
					case 1:
						{
						this.state = 597;
						this.statement();
						}
						break;

					case 2:
						{
						this.state = 598;
						this.processorLabel();
						}
						break;

					case 3:
						{
						this.state = 599;
						this.cycleKeywords();
						}
						break;
					}
					}
					this.state = 604;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 605;
				this.match(pawnParser.CURLY_CLOSE_BRACKET);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 608;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 84, this._ctx) ) {
				case 1:
					{
					this.state = 606;
					this.statement();
					}
					break;

				case 2:
					{
					this.state = 607;
					this.processorLabel();
					}
					break;
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
	public return(): ReturnContext {
		let _localctx: ReturnContext = new ReturnContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, pawnParser.RULE_return);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 612;
			this.match(pawnParser.RETURN);
			this.state = 614;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.OPEN_PARENTHESIS) | (1 << pawnParser.CURLY_OPEN_BRACKET) | (1 << pawnParser.MINUS) | (1 << pawnParser.INCREMENTS) | (1 << pawnParser.DECREMENTS))) !== 0) || _la === pawnParser.NOT || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (pawnParser.SIZEOF - 75)) | (1 << (pawnParser.TRUE - 75)) | (1 << (pawnParser.FALSE - 75)) | (1 << (pawnParser.SHARPSTRING - 75)) | (1 << (pawnParser.STRING - 75)) | (1 << (pawnParser.CHAR_STRING - 75)) | (1 << (pawnParser.IDENTIFIER - 75)) | (1 << (pawnParser.HEX - 75)) | (1 << (pawnParser.INTEGER - 75)) | (1 << (pawnParser.FLOAT - 75)))) !== 0)) {
				{
				this.state = 613;
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
		this.enterRule(_localctx, 114, pawnParser.RULE_cycles);
		try {
			this.state = 619;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.WHILE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 616;
				this.while();
				}
				break;
			case pawnParser.FOR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 617;
				this.for();
				}
				break;
			case pawnParser.DO:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 618;
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
		this.enterRule(_localctx, 116, pawnParser.RULE_do);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 621;
			this.match(pawnParser.DO);
			this.state = 622;
			this.cycleBody();
			this.state = 625;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 88, this._ctx) ) {
			case 1:
				{
				this.state = 623;
				this.match(pawnParser.WHILE);
				this.state = 624;
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
		this.enterRule(_localctx, 118, pawnParser.RULE_while);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 627;
			this.match(pawnParser.WHILE);
			this.state = 628;
			this.condition();
			this.state = 629;
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
		this.enterRule(_localctx, 120, pawnParser.RULE_for);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 631;
			this.match(pawnParser.FOR);
			this.state = 632;
			this.match(pawnParser.OPEN_PARENTHESIS);
			this.state = 633;
			this.var_definition();
			this.state = 634;
			this.match(pawnParser.SEMI);
			this.state = 635;
			this.expresion();
			this.state = 636;
			this.match(pawnParser.SEMI);
			this.state = 637;
			this.expresion();
			this.state = 638;
			this.match(pawnParser.CLOSE_PARENTHESIS);
			this.state = 639;
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
		this.enterRule(_localctx, 122, pawnParser.RULE_cycleBody);
		let _la: number;
		try {
			this.state = 652;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 91, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 641;
				this.cycleKeywords();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 642;
				this.match(pawnParser.CURLY_OPEN_BRACKET);
				this.state = 647;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.CURLY_OPEN_BRACKET) | (1 << pawnParser.INCREMENTS) | (1 << pawnParser.DECREMENTS))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (pawnParser.RETURN - 53)) | (1 << (pawnParser.NEW - 53)) | (1 << (pawnParser.CONST - 53)) | (1 << (pawnParser.STATIC - 53)) | (1 << (pawnParser.STOCK - 53)) | (1 << (pawnParser.PUBLIC - 53)) | (1 << (pawnParser.IF - 53)) | (1 << (pawnParser.SWITCH - 53)) | (1 << (pawnParser.WHILE - 53)) | (1 << (pawnParser.FOR - 53)) | (1 << (pawnParser.DO - 53)) | (1 << (pawnParser.CONTINUE - 53)) | (1 << (pawnParser.BREAK - 53)))) !== 0) || _la === pawnParser.IDENTIFIER) {
					{
					this.state = 645;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case pawnParser.CURLY_OPEN_BRACKET:
					case pawnParser.INCREMENTS:
					case pawnParser.DECREMENTS:
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
						this.state = 643;
						this.statement();
						}
						break;
					case pawnParser.CONTINUE:
					case pawnParser.BREAK:
						{
						this.state = 644;
						this.cycleKeywords();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 649;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 650;
				this.match(pawnParser.CURLY_CLOSE_BRACKET);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 651;
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
		this.enterRule(_localctx, 124, pawnParser.RULE_cycleKeywords);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 654;
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
			this.state = 655;
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
		this.enterRule(_localctx, 126, pawnParser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 658;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.CURLY_OPEN_BRACKET || _la === pawnParser.IDENTIFIER) {
				{
				this.state = 657;
				this.tag();
				}
			}

			this.state = 663;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.SHARPSTRING:
			case pawnParser.STRING:
			case pawnParser.CHAR_STRING:
				{
				this.state = 660;
				this.string();
				}
				break;
			case pawnParser.MINUS:
			case pawnParser.HEX:
			case pawnParser.INTEGER:
			case pawnParser.FLOAT:
				{
				this.state = 661;
				this.number();
				}
				break;
			case pawnParser.TRUE:
			case pawnParser.FALSE:
				{
				this.state = 662;
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
		this.enterRule(_localctx, 128, pawnParser.RULE_bool_const);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 665;
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
		this.enterRule(_localctx, 130, pawnParser.RULE_string);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 667;
			_la = this._input.LA(1);
			if (!(((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & ((1 << (pawnParser.SHARPSTRING - 94)) | (1 << (pawnParser.STRING - 94)) | (1 << (pawnParser.CHAR_STRING - 94)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 671;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 668;
					this.string();
					}
					}
				}
				this.state = 673;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
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
		this.enterRule(_localctx, 132, pawnParser.RULE_functionCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 675;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 95, this._ctx) ) {
			case 1:
				{
				this.state = 674;
				this.tag();
				}
				break;
			}
			this.state = 677;
			this.match(pawnParser.IDENTIFIER);
			this.state = 678;
			this.match(pawnParser.OPEN_PARENTHESIS);
			this.state = 687;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.OPEN_PARENTHESIS) | (1 << pawnParser.CURLY_OPEN_BRACKET) | (1 << pawnParser.MINUS) | (1 << pawnParser.INCREMENTS) | (1 << pawnParser.DECREMENTS))) !== 0) || _la === pawnParser.NOT || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (pawnParser.SIZEOF - 75)) | (1 << (pawnParser.TRUE - 75)) | (1 << (pawnParser.FALSE - 75)) | (1 << (pawnParser.SHARPSTRING - 75)) | (1 << (pawnParser.STRING - 75)) | (1 << (pawnParser.CHAR_STRING - 75)) | (1 << (pawnParser.IDENTIFIER - 75)) | (1 << (pawnParser.HEX - 75)) | (1 << (pawnParser.INTEGER - 75)) | (1 << (pawnParser.FLOAT - 75)))) !== 0)) {
				{
				this.state = 679;
				this.expresion();
				this.state = 684;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === pawnParser.COMA) {
					{
					{
					this.state = 680;
					this.match(pawnParser.COMA);
					this.state = 681;
					this.expresion();
					}
					}
					this.state = 686;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 689;
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
		this.enterRule(_localctx, 134, pawnParser.RULE_docs);
		try {
			this.state = 693;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.DocBlock:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 691;
				this.docBlock();
				}
				break;
			case pawnParser.DocLine:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 692;
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
		this.enterRule(_localctx, 136, pawnParser.RULE_docBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 695;
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
		this.enterRule(_localctx, 138, pawnParser.RULE_docLine);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 697;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03l\u02BE\x04\x02" +
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
		"F\tF\x04G\tG\x03\x02\x03\x02\x07\x02\x91\n\x02\f\x02\x0E\x02\x94\v\x02" +
		"\x03\x02\x07\x02\x97\n\x02\f\x02\x0E\x02\x9A\v\x02\x03\x02\x05\x02\x9D" +
		"\n\x02\x03\x03\x03\x03\x03\x03\x03\x04\x07\x04\xA3\n\x04\f\x04\x0E\x04" +
		"\xA6\v\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\xAD\n\x04\x03" +
		"\x04\x05\x04\xB0\n\x04\x03\x05\x03\x05\x05\x05\xB4\n\x05\x03\x05\x05\x05" +
		"\xB7\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05\xBD\n\x05\f\x05\x0E" +
		"\x05\xC0\v\x05\x03\x05\x05\x05\xC3\n\x05\x05\x05\xC5\n\x05\x03\x05\x03" +
		"\x05\x05\x05\xC9\n\x05\x03\x06\x03\x06\x03\x06\x05\x06\xCE\n\x06\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x07\b\xD7\n\b\f\b\x0E\b\xDA" +
		"\v\b\x03\b\x06\b\xDD\n\b\r\b\x0E\b\xDE\x05\b\xE1\n\b\x03\b\x03\b\x05\b" +
		"\xE5\n\b\x03\b\x03\b\x03\b\x05\b\xEA\n\b\x07\b\xEC\n\b\f\b\x0E\b\xEF\v" +
		"\b\x03\t\x05\t\xF2\n\t\x03\t\x05\t\xF5\n\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x07\t\xFC\n\t\f\t\x0E\t\xFF\v\t\x03\t\x05\t\u0102\n\t\x05\t\u0104\n" +
		"\t\x03\t\x03\t\x03\t\x03\t\x05\t\u010A\n\t\x03\n\x03\n\x05\n\u010E\n\n" +
		"\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n\u0116\n\n\f\n\x0E\n\u0119\v" +
		"\n\x03\n\x05\n\u011C\n\n\x05\n\u011E\n\n\x03\n\x03\n\x03\n\x03\n\x05\n" +
		"\u0124\n\n\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x07\f" +
		"\u012F\n\f\f\f\x0E\f\u0132\v\f\x03\f\x05\f\u0135\n\f\x03\f\x03\f\x03\r" +
		"\x05\r\u013A\n\r\x03\r\x03\r\x07\r\u013E\n\r\f\r\x0E\r\u0141\v\r\x03\x0E" +
		"\x03\x0E\x03\x0E\x05\x0E\u0146\n\x0E\x05\x0E\u0148\n\x0E\x03\x0E\x03\x0E" +
		"\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u014F\n\x0F\x03\x10\x03\x10\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x05\x11\u0158\n\x11\x03\x11\x03\x11\x03\x11" +
		"\x05\x11\u015D\n\x11\x03\x12\x03\x12\x03\x12\x05\x12\u0162\n\x12\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x05\x13\u0168\n\x13\x03\x13\x03\x13\x03\x13\x05" +
		"\x13\u016D\n\x13\x07\x13\u016F\n\x13\f\x13\x0E\x13\u0172\v\x13\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u017A\n\x14\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x07\x15\u0180\n\x15\f\x15\x0E\x15\u0183\v\x15\x03" +
		"\x15\x03\x15\x03\x16\x05\x16\u0188\n\x16\x03\x16\x03\x16\x03\x16\x05\x16" +
		"\u018D\n\x16\x03\x16\x05\x16\u0190\n\x16\x03\x17\x03\x17\x03\x18\x05\x18" +
		"\u0195\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x05\x19\u019C\n\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x05\x1A\u01A3\n\x1A\x03\x1A\x03" +
		"\x1A\x05\x1A\u01A7\n\x1A\x03\x1A\x03\x1A\x05\x1A\u01AB\n\x1A\x03\x1B\x05" +
		"\x1B\u01AE\n\x1B\x03\x1B\x03\x1B\x05\x1B\u01B2\n\x1B\x03\x1B\x03\x1B\x05" +
		"\x1B\u01B6\n\x1B\x03\x1C\x03\x1C\x05\x1C\u01BA\n\x1C\x03\x1C\x05\x1C\u01BD" +
		"\n\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E" +
		"\x03\x1E\x05\x1E\u01C8\n\x1E\x03\x1F\x03\x1F\x05\x1F\u01CC\n\x1F\x03 " +
		"\x05 \u01CF\n \x03 \x05 \u01D2\n \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03" +
		" \x03 \x05 \u01DD\n \x05 \u01DF\n \x05 \u01E1\n \x03!\x03!\x05!\u01E5" +
		"\n!\x03!\x03!\x03\"\x03\"\x03#\x03#\x03$\x03$\x03$\x05$\u01F0\n$\x03%" +
		"\x03%\x05%\u01F4\n%\x03&\x03&\x03\'\x03\'\x03\'\x05\'\u01FB\n\'\x03(\x05" +
		"(\u01FE\n(\x03(\x03(\x03)\x05)\u0203\n)\x03)\x03)\x03*\x03*\x03+\x03+" +
		"\x03+\x05+\u020C\n+\x03,\x03,\x03,\x05,\u0211\n,\x03-\x03-\x03.\x03.\x03" +
		".\x05.\u0218\n.\x03/\x03/\x030\x030\x031\x031\x031\x031\x051\u0222\n1" +
		"\x032\x032\x032\x052\u0227\n2\x033\x033\x033\x033\x073\u022D\n3\f3\x0E" +
		"3\u0230\v3\x033\x053\u0233\n3\x033\x033\x034\x034\x034\x034\x074\u023B" +
		"\n4\f4\x0E4\u023E\v4\x034\x034\x034\x035\x035\x035\x035\x036\x036\x05" +
		"6\u0249\n6\x036\x056\u024C\n6\x037\x037\x037\x057\u0251\n7\x038\x038\x03" +
		"8\x038\x039\x039\x039\x039\x079\u025B\n9\f9\x0E9\u025E\v9\x039\x039\x03" +
		"9\x059\u0263\n9\x059\u0265\n9\x03:\x03:\x05:\u0269\n:\x03;\x03;\x03;\x05" +
		";\u026E\n;\x03<\x03<\x03<\x03<\x05<\u0274\n<\x03=\x03=\x03=\x03=\x03>" +
		"\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03?\x03?\x03?\x03?\x07" +
		"?\u0288\n?\f?\x0E?\u028B\v?\x03?\x03?\x05?\u028F\n?\x03@\x03@\x03@\x03" +
		"A\x05A\u0295\nA\x03A\x03A\x03A\x05A\u029A\nA\x03B\x03B\x03C\x03C\x07C" +
		"\u02A0\nC\fC\x0EC\u02A3\vC\x03D\x05D\u02A6\nD\x03D\x03D\x03D\x03D\x03" +
		"D\x07D\u02AD\nD\fD\x0ED\u02B0\vD\x05D\u02B2\nD\x03D\x03D\x03E\x03E\x05" +
		"E\u02B8\nE\x03F\x03F\x03G\x03G\x03G\x02\x02\x02H\x02\x02\x04\x02\x06\x02" +
		"\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A" +
		"\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x02" +
		"4\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02" +
		"P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02" +
		"l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84" +
		"\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x02\x0E\x05\x02\f\f\x0E\x0E\x16\x16" +
		"\x04\x02<<??\x03\x02\x1C\x1D\x03\x02\v\x16\x06\x02\x18\x18\x1C\x1D((M" +
		"M\x04\x02:<??\x03\x02\x17\x1D\x04\x02\x1E#((\x03\x02)/\x03\x02IJ\x03\x02" +
		"^_\x03\x02`b\x02\u02EF\x02\x9C\x03\x02\x02\x02\x04\x9E\x03\x02\x02\x02" +
		"\x06\xAF\x03\x02\x02\x02\b\xB1\x03\x02\x02\x02\n\xCA\x03\x02\x02\x02\f" +
		"\xCF\x03\x02\x02\x02\x0E\xE0\x03\x02\x02\x02\x10\xF1\x03\x02\x02\x02\x12" +
		"\u010B\x03\x02\x02\x02\x14\u0125\x03\x02\x02\x02\x16\u0134\x03\x02\x02" +
		"\x02\x18\u0139\x03\x02\x02\x02\x1A\u0142\x03\x02\x02\x02\x1C\u014E\x03" +
		"\x02\x02\x02\x1E\u0150\x03\x02\x02\x02 \u015C\x03\x02\x02\x02\"\u0161" +
		"\x03\x02\x02\x02$\u0163\x03\x02\x02\x02&\u0179\x03\x02\x02\x02(\u017B" +
		"\x03\x02\x02\x02*\u018F\x03\x02\x02\x02,\u0191\x03\x02\x02\x02.\u0194" +
		"\x03\x02\x02\x020\u019B\x03\x02\x02\x022\u01A2\x03\x02\x02\x024\u01AD" +
		"\x03\x02\x02\x026\u01BC\x03\x02\x02\x028\u01C3\x03\x02\x02\x02:\u01C5" +
		"\x03\x02\x02\x02<\u01CB\x03\x02\x02\x02>\u01CE\x03\x02\x02\x02@\u01E2" +
		"\x03\x02\x02\x02B\u01E8\x03\x02\x02\x02D\u01EA\x03\x02\x02\x02F\u01EF" +
		"\x03\x02\x02\x02H\u01F3\x03\x02\x02\x02J\u01F5\x03\x02\x02\x02L\u01FA" +
		"\x03\x02\x02\x02N\u01FD\x03\x02\x02\x02P\u0202\x03\x02\x02\x02R\u0206" +
		"\x03\x02\x02\x02T\u020B\x03\x02\x02\x02V\u0210\x03\x02\x02\x02X\u0212" +
		"\x03\x02\x02\x02Z\u0217\x03\x02\x02\x02\\\u0219\x03\x02\x02\x02^\u021B" +
		"\x03\x02\x02\x02`\u021D\x03\x02\x02\x02b\u0223\x03\x02\x02\x02d\u0228" +
		"\x03\x02\x02\x02f\u0236\x03\x02\x02\x02h\u0242\x03\x02\x02\x02j\u0248" +
		"\x03\x02\x02\x02l\u024D\x03\x02\x02\x02n\u0252\x03\x02\x02\x02p\u0264" +
		"\x03\x02\x02\x02r\u0266\x03\x02\x02\x02t\u026D\x03\x02\x02\x02v\u026F" +
		"\x03\x02\x02\x02x\u0275\x03\x02\x02\x02z\u0279\x03\x02\x02\x02|\u028E" +
		"\x03\x02\x02\x02~\u0290\x03\x02\x02\x02\x80\u0294\x03\x02\x02\x02\x82" +
		"\u029B\x03\x02\x02\x02\x84\u029D\x03\x02\x02\x02\x86\u02A5\x03\x02\x02" +
		"\x02\x88\u02B7\x03\x02\x02\x02\x8A\u02B9\x03\x02\x02\x02\x8C\u02BB\x03" +
		"\x02\x02\x02\x8E\x9D\x05\x04\x03\x02\x8F\x91\x05\x88E\x02\x90\x8F\x03" +
		"\x02\x02\x02\x91\x94\x03\x02\x02\x02\x92\x90\x03\x02\x02\x02\x92\x93\x03" +
		"\x02\x02\x02\x93\x98\x03\x02\x02\x02\x94\x92\x03\x02\x02\x02\x95\x97\x05" +
		"\x06\x04\x02\x96\x95\x03\x02\x02\x02\x97\x9A\x03\x02\x02\x02\x98\x96\x03" +
		"\x02\x02\x02\x98\x99\x03\x02\x02\x02\x99\x9B\x03\x02\x02\x02\x9A\x98\x03" +
		"\x02\x02\x02\x9B\x9D\x07\x02\x02\x03\x9C\x8E\x03\x02\x02\x02\x9C\x92\x03" +
		"\x02\x02\x02\x9D\x03\x03\x02\x02\x02\x9E\x9F\x07c\x02\x02\x9F\xA0\x07" +
		"%\x02\x02\xA0\x05\x03\x02\x02\x02\xA1\xA3\x05\x88E\x02\xA2\xA1\x03\x02" +
		"\x02\x02\xA3\xA6\x03\x02\x02\x02\xA4\xA2\x03\x02\x02\x02\xA4\xA5\x03\x02" +
		"\x02\x02\xA5\xAC\x03\x02\x02\x02\xA6\xA4\x03\x02\x02\x02\xA7\xAD\x05\x10" +
		"\t\x02\xA8\xAD\x05\x12\n\x02\xA9\xAA\x05\x0E\b\x02\xAA\xAB\x07\n\x02\x02" +
		"\xAB\xAD\x03\x02\x02\x02\xAC\xA7\x03\x02\x02\x02\xAC\xA8\x03\x02\x02\x02" +
		"\xAC\xA9\x03\x02\x02\x02\xAD\xB0\x03\x02\x02\x02\xAE\xB0\x05\b\x05\x02" +
		"\xAF\xA4\x03\x02\x02\x02\xAF\xAE\x03\x02\x02\x02\xB0\x07\x03\x02\x02\x02" +
		"\xB1\xB3\x079\x02\x02\xB2\xB4\x07c\x02\x02\xB3\xB2\x03\x02\x02\x02\xB3" +
		"\xB4\x03\x02\x02\x02\xB4\xB6\x03\x02\x02\x02\xB5\xB7\x05\f\x07\x02\xB6" +
		"\xB5\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7\xB8\x03\x02\x02\x02\xB8" +
		"\xC4\x07\x05\x02\x02\xB9\xBE\x05\n\x06\x02\xBA\xBB\x07\t\x02\x02\xBB\xBD" +
		"\x05\n\x06\x02\xBC\xBA\x03\x02\x02\x02\xBD\xC0\x03\x02\x02\x02\xBE\xBC" +
		"\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF\xC2\x03\x02\x02\x02\xC0\xBE" +
		"\x03\x02\x02\x02\xC1\xC3\x07\t\x02\x02\xC2\xC1\x03\x02\x02\x02\xC2\xC3" +
		"\x03\x02\x02\x02\xC3\xC5\x03\x02\x02\x02\xC4\xB9\x03\x02\x02\x02\xC4\xC5" +
		"\x03\x02\x02\x02\xC5\xC6\x03\x02\x02\x02\xC6\xC8\x07\x06\x02\x02\xC7\xC9" +
		"\x07\n\x02\x02\xC8\xC7\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9\t\x03" +
		"\x02\x02\x02\xCA\xCD\x05\x18\r\x02\xCB\xCC\x07\v\x02\x02\xCC\xCE\x052" +
		"\x1A\x02\xCD\xCB\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE\v\x03\x02" +
		"\x02\x02\xCF\xD0\x07\x03\x02\x02\xD0\xD1\t\x02\x02\x02\xD1\xD2\x07e\x02" +
		"\x02\xD2\xD3\x07\x04\x02\x02\xD3\r\x03\x02\x02\x02\xD4\xD8\x078\x02\x02" +
		"\xD5\xD7\x05D#\x02\xD6\xD5\x03\x02\x02\x02\xD7\xDA\x03\x02\x02\x02\xD8" +
		"\xD6\x03\x02\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9\xE1\x03\x02\x02\x02\xDA" +
		"\xD8\x03\x02\x02\x02\xDB\xDD\x05D#\x02\xDC\xDB\x03\x02\x02\x02\xDD\xDE" +
		"\x03\x02\x02\x02\xDE\xDC\x03\x02\x02\x02\xDE\xDF\x03\x02\x02\x02\xDF\xE1" +
		"\x03\x02\x02\x02\xE0\xD4\x03\x02\x02\x02\xE0\xDC\x03\x02\x02\x02\xE1\xE4" +
		"\x03\x02\x02\x02\xE2\xE5\x05\x18\r\x02\xE3\xE5\x05$\x13\x02\xE4\xE2\x03" +
		"\x02\x02\x02\xE4\xE3\x03\x02\x02\x02\xE5\xED\x03\x02\x02\x02\xE6\xE9\x07" +
		"\t\x02\x02\xE7\xEA\x05\x18\r\x02\xE8\xEA\x05$\x13\x02\xE9\xE7\x03\x02" +
		"\x02\x02\xE9\xE8\x03\x02\x02\x02\xEA\xEC\x03\x02\x02\x02\xEB\xE6\x03\x02" +
		"\x02\x02\xEC\xEF\x03\x02\x02\x02\xED\xEB\x03\x02\x02\x02\xED\xEE\x03\x02" +
		"\x02\x02\xEE\x0F\x03\x02\x02\x02\xEF\xED\x03\x02\x02\x02\xF0\xF2\x05\x1C" +
		"\x0F\x02\xF1\xF0\x03\x02\x02\x02\xF1\xF2\x03\x02\x02\x02\xF2\xF4\x03\x02" +
		"\x02\x02\xF3\xF5\x05\x16\f\x02\xF4\xF3\x03\x02\x02\x02\xF4\xF5\x03\x02" +
		"\x02\x02\xF5\xF6\x03\x02\x02\x02\xF6\xF7\x07c\x02\x02\xF7\u0103\x07\x03" +
		"\x02\x02\xF8\xFD\x05> \x02\xF9\xFA\x07\t\x02\x02\xFA\xFC\x05> \x02\xFB" +
		"\xF9\x03\x02\x02\x02\xFC\xFF\x03\x02\x02\x02\xFD\xFB\x03\x02\x02\x02\xFD" +
		"\xFE\x03\x02\x02\x02\xFE\u0101\x03\x02\x02\x02\xFF\xFD\x03\x02\x02\x02" +
		"\u0100\u0102\x05@!\x02\u0101\u0100\x03\x02\x02\x02\u0101\u0102\x03\x02" +
		"\x02\x02\u0102\u0104\x03\x02\x02\x02\u0103\xF8\x03\x02\x02\x02\u0103\u0104" +
		"\x03\x02\x02\x02\u0104\u0105\x03\x02\x02\x02\u0105\u0109\x07\x04\x02\x02" +
		"\u0106\u010A\x07\n\x02\x02\u0107\u010A\x05p9\x02\u0108\u010A\x05\x14\v" +
		"\x02\u0109\u0106\x03\x02\x02\x02\u0109\u0107\x03\x02\x02\x02\u0109\u0108" +
		"\x03\x02\x02\x02\u010A\x11\x03\x02\x02\x02\u010B\u010D\x05\x1C\x0F\x02" +
		"\u010C\u010E\x05\x16\f\x02\u010D\u010C\x03\x02\x02\x02\u010D\u010E\x03" +
		"\x02\x02\x02\u010E\u010F\x03\x02\x02\x02\u010F\u0110\x07@\x02\x02\u0110" +
		"\u0111\x05V,\x02\u0111\u011D\x07\x03\x02\x02\u0112\u0117\x05> \x02\u0113" +
		"\u0114\x07\t\x02\x02\u0114\u0116\x05> \x02\u0115\u0113\x03\x02\x02\x02" +
		"\u0116\u0119\x03\x02\x02\x02\u0117\u0115\x03\x02\x02\x02\u0117\u0118\x03" +
		"\x02\x02\x02\u0118\u011B\x03\x02\x02\x02\u0119\u0117\x03\x02\x02\x02\u011A" +
		"\u011C\x05@!\x02\u011B\u011A\x03\x02\x02\x02\u011B\u011C\x03\x02\x02\x02" +
		"\u011C\u011E\x03\x02\x02\x02\u011D\u0112\x03\x02\x02\x02\u011D\u011E\x03" +
		"\x02\x02\x02\u011E\u011F\x03\x02\x02\x02\u011F\u0123\x07\x04\x02\x02\u0120" +
		"\u0124\x07\n\x02\x02\u0121\u0124\x05p9\x02\u0122\u0124\x05\x14\v\x02\u0123" +
		"\u0120\x03\x02\x02\x02\u0123\u0121\x03\x02\x02\x02\u0123\u0122\x03\x02" +
		"\x02\x02\u0124\x13\x03\x02\x02\x02\u0125\u0126\x07\v\x02\x02\u0126\u0127" +
		"\x07c\x02\x02\u0127\u0128\x07\n\x02\x02\u0128\x15\x03\x02\x02\x02\u0129" +
		"\u0135\x07c\x02\x02\u012A\u012B\x07\x05\x02\x02\u012B\u0130\x07c\x02\x02" +
		"\u012C\u012D\x07\t\x02\x02\u012D\u012F\x07c\x02\x02\u012E\u012C\x03\x02" +
		"\x02\x02\u012F\u0132\x03\x02\x02\x02\u0130\u012E\x03\x02\x02\x02\u0130" +
		"\u0131\x03\x02\x02\x02\u0131\u0133\x03\x02\x02\x02\u0132\u0130\x03\x02" +
		"\x02\x02\u0133\u0135\x07\x06\x02\x02\u0134\u0129\x03\x02\x02\x02\u0134" +
		"\u012A\x03\x02\x02\x02\u0135\u0136\x03\x02\x02\x02\u0136\u0137\x07%\x02" +
		"\x02\u0137\x17\x03\x02\x02\x02\u0138\u013A\x05\x16\f\x02\u0139\u0138\x03" +
		"\x02\x02\x02\u0139\u013A\x03\x02\x02\x02\u013A\u013B\x03\x02\x02\x02\u013B" +
		"\u013F\x07c\x02\x02\u013C\u013E\x05\x1A\x0E\x02\u013D\u013C\x03\x02\x02" +
		"\x02\u013E\u0141\x03\x02\x02\x02\u013F\u013D\x03\x02\x02\x02\u013F\u0140" +
		"\x03\x02\x02\x02\u0140\x19\x03\x02\x02\x02\u0141\u013F\x03\x02\x02\x02" +
		"\u0142\u0147\x07\x07\x02\x02\u0143\u0145\x052\x1A\x02\u0144\u0146\x07" +
		"K\x02\x02\u0145\u0144\x03\x02\x02\x02\u0145\u0146\x03\x02\x02\x02\u0146" +
		"\u0148\x03\x02\x02\x02\u0147\u0143\x03\x02\x02\x02\u0147\u0148\x03\x02" +
		"\x02\x02\u0148\u0149\x03\x02\x02\x02\u0149\u014A\x07\b\x02\x02\u014A\x1B" +
		"\x03\x02\x02\x02\u014B\u014F\x05\x1E\x10\x02\u014C\u014F\x07=\x02\x02" +
		"\u014D\u014F\x07>\x02\x02\u014E\u014B\x03\x02\x02\x02\u014E\u014C\x03" +
		"\x02\x02\x02\u014E\u014D\x03\x02\x02\x02\u014F\x1D\x03\x02\x02\x02\u0150" +
		"\u0151\t\x03\x02\x02\u0151\x1F\x03\x02\x02\x02\u0152\u0158\x05\x0E\b\x02" +
		"\u0153\u0158\x05$\x13\x02\u0154\u0158\x05\x86D\x02\u0155\u0158\x05r:\x02" +
		"\u0156\u0158\x05&\x14\x02\u0157\u0152\x03\x02\x02\x02\u0157\u0153\x03" +
		"\x02\x02\x02\u0157\u0154\x03\x02\x02\x02\u0157\u0155\x03\x02\x02\x02\u0157" +
		"\u0156\x03\x02\x02\x02\u0158\u0159\x03\x02\x02\x02\u0159\u015A\x07\n\x02" +
		"\x02\u015A\u015D\x03\x02\x02\x02\u015B\u015D\x05\"\x12\x02\u015C\u0157" +
		"\x03\x02\x02\x02\u015C\u015B\x03\x02\x02\x02\u015D!\x03\x02\x02\x02\u015E" +
		"\u0162\x05`1\x02\u015F\u0162\x05t;\x02\u0160\u0162\x05d3\x02\u0161\u015E" +
		"\x03\x02\x02\x02\u0161\u015F\x03\x02\x02\x02\u0161\u0160\x03\x02\x02\x02" +
		"\u0162#\x03\x02\x02\x02\u0163\u0164\x05\x18\r\x02\u0164\u0167\x05,\x17" +
		"\x02\u0165\u0168\x052\x1A\x02\u0166\u0168\x05(\x15\x02\u0167\u0165\x03" +
		"\x02\x02\x02\u0167\u0166\x03\x02\x02\x02\u0168\u0170\x03\x02\x02\x02\u0169" +
		"\u016C\x05,\x17\x02\u016A\u016D\x052\x1A\x02\u016B\u016D\x05(\x15\x02" +
		"\u016C\u016A\x03\x02\x02\x02\u016C\u016B\x03\x02\x02\x02\u016D\u016F\x03" +
		"\x02\x02\x02\u016E\u0169\x03\x02\x02\x02\u016F\u0172\x03\x02\x02\x02\u0170" +
		"\u016E\x03\x02\x02\x02\u0170\u0171\x03\x02\x02\x02\u0171%\x03\x02\x02" +
		"\x02\u0172\u0170\x03\x02\x02\x02\u0173\u0174\t\x04\x02\x02\u0174\u017A" +
		"\x05\x18\r\x02\u0175\u0176\x05\x18\r\x02\u0176\u0177\t\x04\x02\x02\u0177" +
		"\u017A\x03\x02\x02\x02\u0178\u017A\x05\x18\r\x02\u0179\u0173\x03\x02\x02" +
		"\x02\u0179\u0175\x03\x02\x02\x02\u0179\u0178\x03\x02\x02\x02\u017A\'\x03" +
		"\x02\x02\x02\u017B\u017C\x07\x05\x02\x02\u017C\u0181\x05*\x16\x02\u017D" +
		"\u017E\x07\t\x02\x02\u017E\u0180\x05*\x16\x02\u017F\u017D\x03\x02\x02" +
		"\x02\u0180\u0183\x03\x02\x02\x02\u0181\u017F\x03\x02\x02\x02\u0181\u0182" +
		"\x03\x02\x02\x02\u0182\u0184\x03\x02\x02\x02\u0183\u0181\x03\x02\x02\x02" +
		"\u0184\u0185\x07\x06\x02\x02\u0185)\x03\x02\x02\x02\u0186\u0188\x05\x16" +
		"\f\x02\u0187\u0186\x03\x02\x02\x02\u0187\u0188\x03\x02\x02\x02\u0188\u018C" +
		"\x03\x02\x02\x02\u0189\u018D\x07c\x02\x02\u018A\u018D\x05L\'\x02\u018B" +
		"\u018D\x05\x84C\x02\u018C\u0189\x03\x02\x02\x02\u018C\u018A\x03\x02\x02" +
		"\x02\u018C\u018B\x03\x02\x02\x02\u018D\u0190\x03\x02\x02\x02\u018E\u0190" +
		"\x05(\x15\x02\u018F\u0187\x03\x02\x02\x02\u018F\u018E\x03\x02\x02\x02" +
		"\u0190+\x03\x02\x02\x02\u0191\u0192\t\x05\x02\x02\u0192-\x03\x02\x02\x02" +
		"\u0193\u0195\x05\x16\f\x02\u0194\u0193\x03\x02\x02\x02\u0194\u0195\x03" +
		"\x02\x02\x02\u0195\u0196\x03\x02\x02\x02\u0196\u0197\x07\x03\x02\x02\u0197" +
		"\u0198\x052\x1A\x02\u0198\u0199\x07\x04\x02\x02\u0199/\x03\x02\x02\x02" +
		"\u019A\u019C\x05\x16\f\x02\u019B\u019A\x03\x02\x02\x02\u019B\u019C\x03" +
		"\x02\x02\x02\u019C\u019D\x03\x02\x02\x02\u019D\u019E\x07\x03\x02\x02\u019E" +
		"\u019F\x054\x1B\x02\u019F\u01A0\x07\x04\x02\x02\u01A01\x03\x02\x02\x02" +
		"\u01A1\u01A3\x058\x1D\x02\u01A2\u01A1\x03\x02\x02\x02\u01A2\u01A3\x03" +
		"\x02\x02\x02\u01A3\u01AA\x03\x02\x02\x02\u01A4\u01A6\x05F$\x02\u01A5\u01A7" +
		"\x05:\x1E\x02\u01A6\u01A5\x03\x02\x02\x02\u01A6\u01A7\x03\x02\x02\x02" +
		"\u01A7\u01AB\x03\x02\x02\x02\u01A8\u01AB\x05.\x18\x02\u01A9\u01AB\x05" +
		"6\x1C\x02\u01AA\u01A4\x03\x02\x02\x02\u01AA\u01A8\x03\x02\x02\x02\u01AA" +
		"\u01A9\x03\x02\x02\x02\u01AB3\x03\x02\x02\x02\u01AC\u01AE\x058\x1D\x02" +
		"\u01AD\u01AC\x03\x02\x02\x02\u01AD\u01AE\x03\x02\x02\x02\u01AE\u01B5\x03" +
		"\x02\x02\x02\u01AF\u01B1\x05<\x1F\x02\u01B0\u01B2\x05:\x1E\x02\u01B1\u01B0" +
		"\x03\x02\x02\x02\u01B1\u01B2\x03\x02\x02\x02\u01B2\u01B6\x03\x02\x02\x02" +
		"\u01B3\u01B6\x050\x19\x02\u01B4\u01B6\x05(\x15\x02\u01B5\u01AF\x03\x02" +
		"\x02\x02\u01B5\u01B3\x03\x02\x02\x02\u01B5\u01B4\x03\x02\x02\x02\u01B6" +
		"5\x03\x02\x02\x02\u01B7\u01B9\x05F$\x02\u01B8\u01BA\x05:\x1E\x02\u01B9" +
		"\u01B8\x03\x02\x02\x02\u01B9\u01BA\x03\x02\x02\x02\u01BA\u01BD\x03\x02" +
		"\x02\x02\u01BB\u01BD\x05.\x18\x02\u01BC\u01B7\x03\x02\x02\x02\u01BC\u01BB" +
		"\x03\x02\x02\x02\u01BD\u01BE\x03\x02\x02\x02\u01BE\u01BF\x07$\x02\x02" +
		"\u01BF\u01C0\x052\x1A\x02\u01C0\u01C1\x07%\x02\x02\u01C1\u01C2\x052\x1A" +
		"\x02\u01C27\x03\x02\x02\x02\u01C3\u01C4\t\x06\x02\x02\u01C49\x03\x02\x02" +
		"\x02\u01C5\u01C7\x05T+\x02\u01C6\u01C8\x052\x1A\x02\u01C7\u01C6\x03\x02" +
		"\x02\x02\u01C7\u01C8\x03\x02\x02\x02\u01C8;\x03\x02\x02\x02\u01C9\u01CC" +
		"\x05\x80A\x02\u01CA\u01CC\x05\x18\r\x02\u01CB\u01C9\x03\x02\x02\x02\u01CB" +
		"\u01CA\x03\x02\x02\x02\u01CC=\x03\x02\x02\x02\u01CD\u01CF\x07:\x02\x02" +
		"\u01CE\u01CD\x03\x02\x02\x02\u01CE\u01CF\x03\x02\x02\x02\u01CF\u01D1\x03" +
		"\x02\x02\x02\u01D0\u01D2\x05B\"\x02\u01D1\u01D0\x03\x02\x02\x02\u01D1" +
		"\u01D2\x03\x02\x02\x02\u01D2\u01D3\x03\x02\x02\x02\u01D3\u01E0\x05\x18" +
		"\r\x02\u01D4\u01DE\x07\v\x02\x02\u01D5\u01DF\x054\x1B\x02\u01D6\u01DC" +
		"\x05J&\x02\u01D7\u01DD\x05\x18\r\x02\u01D8\u01D9\x07\x03\x02\x02\u01D9" +
		"\u01DA\x05\x18\r\x02\u01DA\u01DB\x07\x04\x02\x02\u01DB\u01DD\x03\x02\x02" +
		"\x02\u01DC\u01D7\x03\x02\x02\x02\u01DC\u01D8\x03\x02\x02\x02\u01DD\u01DF" +
		"\x03\x02\x02\x02\u01DE\u01D5\x03\x02\x02\x02\u01DE\u01D6\x03\x02\x02\x02" +
		"\u01DF\u01E1\x03\x02\x02\x02\u01E0\u01D4\x03\x02\x02\x02\u01E0\u01E1\x03" +
		"\x02\x02\x02\u01E1?\x03\x02\x02\x02\u01E2\u01E4\x07\t\x02\x02\u01E3\u01E5" +
		"\x05\x16\f\x02\u01E4\u01E3\x03\x02\x02\x02\u01E4\u01E5\x03\x02\x02\x02" +
		"\u01E5\u01E6\x03\x02\x02\x02\u01E6\u01E7\x071\x02\x02\u01E7A\x03\x02\x02" +
		"\x02\u01E8\u01E9\x07)\x02\x02\u01E9C\x03\x02\x02\x02\u01EA\u01EB\t\x07" +
		"\x02\x02\u01EBE\x03\x02\x02\x02\u01EC\u01F0\x05<\x1F\x02\u01ED\u01F0\x05" +
		"\x86D\x02\u01EE\u01F0\x05.\x18\x02\u01EF\u01EC\x03\x02\x02\x02\u01EF\u01ED" +
		"\x03\x02\x02\x02\u01EF\u01EE\x03\x02\x02\x02\u01F0G\x03\x02\x02\x02\u01F1" +
		"\u01F4\x05<\x1F\x02\u01F2\u01F4\x050\x19\x02\u01F3\u01F1\x03\x02\x02\x02" +
		"\u01F3\u01F2\x03\x02\x02\x02\u01F4I\x03\x02\x02\x02\u01F5\u01F6\x07M\x02" +
		"\x02\u01F6K\x03\x02\x02\x02\u01F7\u01FB\x05N(\x02\u01F8\u01FB\x05P)\x02" +
		"\u01F9\u01FB\x05R*\x02\u01FA\u01F7\x03\x02\x02\x02\u01FA\u01F8\x03\x02" +
		"\x02\x02\u01FA\u01F9\x03\x02\x02\x02\u01FBM\x03\x02\x02\x02\u01FC\u01FE" +
		"\x07\x18\x02\x02\u01FD\u01FC\x03\x02\x02\x02\u01FD\u01FE\x03\x02\x02\x02" +
		"\u01FE\u01FF\x03\x02\x02\x02\u01FF\u0200\x07e\x02\x02\u0200O\x03\x02\x02" +
		"\x02\u0201\u0203\x07\x18\x02\x02\u0202\u0201\x03\x02\x02\x02\u0202\u0203" +
		"\x03\x02\x02\x02\u0203\u0204\x03\x02\x02\x02\u0204\u0205\x07f\x02\x02" +
		"\u0205Q\x03\x02\x02\x02\u0206\u0207\x07d\x02\x02\u0207S\x03\x02\x02\x02" +
		"\u0208\u020C\x05X-\x02\u0209\u020C\x05Z.\x02\u020A\u020C\x05^0\x02\u020B" +
		"\u0208\x03\x02\x02\x02\u020B\u0209\x03\x02\x02\x02\u020B\u020A\x03\x02" +
		"\x02\x02\u020CU\x03\x02\x02\x02\u020D\u0211\x05X-\x02\u020E\u0211\x05" +
		"\\/\x02\u020F\u0211\x07\v\x02\x02\u0210\u020D";
	private static readonly _serializedATNSegment1: string =
		"\x03\x02\x02\x02\u0210\u020E\x03\x02\x02\x02\u0210\u020F\x03\x02\x02\x02" +
		"\u0211W\x03\x02\x02\x02\u0212\u0213\t\b\x02\x02\u0213Y\x03\x02\x02\x02" +
		"\u0214\u0218\x07&\x02\x02\u0215\u0218\x07\'\x02\x02\u0216\u0218\x05\\" +
		"/\x02\u0217\u0214\x03\x02\x02\x02\u0217\u0215\x03\x02\x02\x02\u0217\u0216" +
		"\x03\x02\x02\x02\u0218[\x03\x02\x02\x02\u0219\u021A\t\t\x02\x02\u021A" +
		"]\x03\x02\x02\x02\u021B\u021C\t\n\x02\x02\u021C_\x03\x02\x02\x02\u021D" +
		"\u021E\x07A\x02\x02\u021E\u021F\x05n8\x02\u021F\u0221\x05p9\x02\u0220" +
		"\u0222\x05b2\x02\u0221\u0220\x03\x02\x02\x02\u0221\u0222\x03\x02\x02\x02" +
		"\u0222a\x03\x02\x02\x02\u0223\u0226\x07B\x02\x02\u0224\u0227\x05`1\x02" +
		"\u0225\u0227\x05p9\x02\u0226\u0224\x03\x02\x02\x02\u0226\u0225\x03\x02" +
		"\x02\x02\u0227c\x03\x02\x02\x02\u0228\u0229\x07C\x02\x02\u0229\u022A\x05" +
		"n8\x02\u022A\u022E\x07\x05\x02\x02\u022B\u022D\x05f4\x02\u022C\u022B\x03" +
		"\x02\x02\x02\u022D\u0230\x03\x02\x02\x02\u022E\u022C\x03\x02\x02\x02\u022E" +
		"\u022F\x03\x02\x02\x02\u022F\u0232\x03\x02\x02\x02\u0230\u022E\x03\x02" +
		"\x02\x02\u0231\u0233\x05h5\x02\u0232\u0231\x03\x02\x02\x02\u0232\u0233" +
		"\x03\x02\x02\x02\u0233\u0234\x03\x02\x02\x02\u0234\u0235\x07\x06\x02\x02" +
		"\u0235e\x03\x02\x02\x02\u0236\u0237\x07D\x02\x02\u0237\u023C\x05j6\x02" +
		"\u0238\u0239\x07\t\x02\x02\u0239\u023B\x05j6\x02\u023A\u0238\x03\x02\x02" +
		"\x02\u023B\u023E\x03\x02\x02\x02\u023C\u023A\x03\x02\x02\x02\u023C\u023D" +
		"\x03\x02\x02\x02\u023D\u023F\x03\x02\x02\x02\u023E\u023C\x03\x02\x02\x02" +
		"\u023F\u0240\x07%\x02\x02\u0240\u0241\x05p9\x02\u0241g\x03\x02\x02\x02" +
		"\u0242\u0243\x07E\x02\x02\u0243\u0244\x07%\x02\x02\u0244\u0245\x05p9\x02" +
		"\u0245i\x03\x02\x02\x02\u0246\u0249\x07c\x02\x02\u0247\u0249\x05L\'\x02" +
		"\u0248\u0246\x03\x02\x02\x02\u0248\u0247\x03\x02\x02\x02\u0249\u024B\x03" +
		"\x02\x02\x02\u024A\u024C\x05l7\x02\u024B\u024A\x03\x02\x02\x02\u024B\u024C" +
		"\x03\x02\x02\x02\u024Ck\x03\x02\x02\x02\u024D\u0250\x070\x02\x02\u024E" +
		"\u0251\x07c\x02\x02\u024F\u0251\x05L\'\x02\u0250\u024E\x03\x02\x02\x02" +
		"\u0250\u024F\x03\x02\x02\x02\u0251m\x03\x02\x02\x02\u0252\u0253\x07\x03" +
		"\x02\x02\u0253\u0254\x052\x1A\x02\u0254\u0255\x07\x04\x02\x02\u0255o\x03" +
		"\x02\x02\x02\u0256\u025C\x07\x05\x02\x02\u0257\u025B\x05 \x11\x02\u0258" +
		"\u025B\x05\x04\x03\x02\u0259\u025B\x05~@\x02\u025A\u0257\x03\x02\x02\x02" +
		"\u025A\u0258\x03\x02\x02\x02\u025A\u0259\x03\x02\x02\x02\u025B\u025E\x03" +
		"\x02\x02\x02\u025C\u025A\x03\x02\x02\x02\u025C\u025D\x03\x02\x02\x02\u025D" +
		"\u025F\x03\x02\x02\x02\u025E\u025C\x03\x02\x02\x02\u025F\u0265\x07\x06" +
		"\x02\x02\u0260\u0263\x05 \x11\x02\u0261\u0263\x05\x04\x03\x02\u0262\u0260" +
		"\x03\x02\x02\x02\u0262\u0261\x03\x02\x02\x02\u0263\u0265\x03\x02\x02\x02" +
		"\u0264\u0256\x03\x02\x02\x02\u0264\u0262\x03\x02\x02\x02\u0265q\x03\x02" +
		"\x02\x02\u0266\u0268\x077\x02\x02\u0267\u0269\x052\x1A\x02\u0268\u0267" +
		"\x03\x02\x02\x02\u0268\u0269\x03\x02\x02\x02\u0269s\x03\x02\x02\x02\u026A" +
		"\u026E\x05x=\x02\u026B\u026E\x05z>\x02\u026C\u026E\x05v<\x02\u026D\u026A" +
		"\x03\x02\x02\x02\u026D\u026B\x03\x02\x02\x02\u026D\u026C\x03\x02\x02\x02" +
		"\u026Eu\x03\x02\x02\x02\u026F\u0270\x07H\x02\x02\u0270\u0273\x05|?\x02" +
		"\u0271\u0272\x07F\x02\x02\u0272\u0274\x05n8\x02\u0273\u0271\x03\x02\x02" +
		"\x02\u0273\u0274\x03\x02\x02\x02\u0274w\x03\x02\x02\x02\u0275\u0276\x07" +
		"F\x02\x02\u0276\u0277\x05n8\x02\u0277\u0278\x05|?\x02\u0278y\x03\x02\x02" +
		"\x02\u0279\u027A\x07G\x02\x02\u027A\u027B\x07\x03\x02\x02\u027B\u027C" +
		"\x05\x0E\b\x02\u027C\u027D\x07\n\x02\x02\u027D\u027E\x052\x1A\x02\u027E" +
		"\u027F\x07\n\x02\x02\u027F\u0280\x052\x1A\x02\u0280\u0281\x07\x04\x02" +
		"\x02\u0281\u0282\x05|?\x02\u0282{\x03\x02\x02\x02\u0283\u028F\x05~@\x02" +
		"\u0284\u0289\x07\x05\x02\x02\u0285\u0288\x05 \x11\x02\u0286\u0288\x05" +
		"~@\x02\u0287\u0285\x03\x02\x02\x02\u0287\u0286\x03\x02\x02\x02\u0288\u028B" +
		"\x03\x02\x02\x02\u0289\u0287\x03\x02\x02\x02\u0289\u028A\x03\x02\x02\x02" +
		"\u028A\u028C\x03\x02\x02\x02\u028B\u0289\x03\x02\x02\x02\u028C\u028F\x07" +
		"\x06\x02\x02\u028D\u028F\x05 \x11\x02\u028E\u0283\x03\x02\x02\x02\u028E" +
		"\u0284\x03\x02\x02\x02\u028E\u028D\x03\x02\x02\x02\u028F}\x03\x02\x02" +
		"\x02\u0290\u0291\t\v\x02\x02\u0291\u0292\x07\n\x02\x02\u0292\x7F\x03\x02" +
		"\x02\x02\u0293\u0295\x05\x16\f\x02\u0294\u0293\x03\x02\x02\x02\u0294\u0295" +
		"\x03\x02\x02\x02\u0295\u0299\x03\x02\x02\x02\u0296\u029A\x05\x84C\x02" +
		"\u0297\u029A\x05L\'\x02\u0298\u029A\x05\x82B\x02\u0299\u0296\x03\x02\x02" +
		"\x02\u0299\u0297\x03\x02\x02\x02\u0299\u0298\x03\x02\x02\x02\u029A\x81" +
		"\x03\x02\x02\x02\u029B\u029C\t\f\x02\x02\u029C\x83\x03\x02\x02\x02\u029D" +
		"\u02A1\t\r\x02\x02\u029E\u02A0\x05\x84C\x02\u029F\u029E\x03\x02\x02\x02" +
		"\u02A0\u02A3\x03\x02\x02\x02\u02A1\u029F\x03\x02\x02\x02\u02A1\u02A2\x03" +
		"\x02\x02\x02\u02A2\x85\x03\x02\x02\x02\u02A3\u02A1\x03\x02\x02\x02\u02A4" +
		"\u02A6\x05\x16\f\x02\u02A5\u02A4\x03\x02\x02\x02\u02A5\u02A6\x03\x02\x02" +
		"\x02\u02A6\u02A7\x03\x02\x02\x02\u02A7\u02A8\x07c\x02\x02\u02A8\u02B1" +
		"\x07\x03\x02\x02\u02A9\u02AE\x052\x1A\x02\u02AA\u02AB\x07\t\x02\x02\u02AB" +
		"\u02AD\x052\x1A\x02\u02AC\u02AA\x03\x02\x02\x02\u02AD\u02B0\x03\x02\x02" +
		"\x02\u02AE\u02AC\x03\x02\x02\x02\u02AE\u02AF\x03\x02\x02\x02\u02AF\u02B2" +
		"\x03\x02\x02\x02\u02B0\u02AE\x03\x02\x02\x02\u02B1\u02A9\x03\x02\x02\x02" +
		"\u02B1\u02B2\x03\x02\x02\x02\u02B2\u02B3\x03\x02\x02\x02\u02B3\u02B4\x07" +
		"\x04\x02\x02\u02B4\x87\x03\x02\x02\x02\u02B5\u02B8\x05\x8AF\x02\u02B6" +
		"\u02B8\x05\x8CG\x02\u02B7\u02B5\x03\x02\x02\x02\u02B7\u02B6\x03\x02\x02" +
		"\x02\u02B8\x89\x03\x02\x02\x02\u02B9\u02BA\x07i\x02\x02\u02BA\x8B\x03" +
		"\x02\x02\x02\u02BB\u02BC\x07j\x02\x02\u02BC\x8D\x03\x02\x02\x02e\x92\x98" +
		"\x9C\xA4\xAC\xAF\xB3\xB6\xBE\xC2\xC4\xC8\xCD\xD8\xDE\xE0\xE4\xE9\xED\xF1" +
		"\xF4\xFD\u0101\u0103\u0109\u010D\u0117\u011B\u011D\u0123\u0130\u0134\u0139" +
		"\u013F\u0145\u0147\u014E\u0157\u015C\u0161\u0167\u016C\u0170\u0179\u0181" +
		"\u0187\u018C\u018F\u0194\u019B\u01A2\u01A6\u01AA\u01AD\u01B1\u01B5\u01B9" +
		"\u01BC\u01C7\u01CB\u01CE\u01D1\u01DC\u01DE\u01E0\u01E4\u01EF\u01F3\u01FA" +
		"\u01FD\u0202\u020B\u0210\u0217\u0221\u0226\u022E\u0232\u023C\u0248\u024B" +
		"\u0250\u025A\u025C\u0262\u0264\u0268\u026D\u0273\u0287\u0289\u028E\u0294" +
		"\u0299\u02A1\u02A5\u02AE\u02B1\u02B7";
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
	public CHAR(): TerminalNode | undefined { return this.tryGetToken(pawnParser.CHAR, 0); }
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
	public varModification(): VarModificationContext | undefined {
		return this.tryGetRuleContext(0, VarModificationContext);
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


export class VarModificationContext extends ParserRuleContext {
	public variable(): VariableContext | undefined {
		return this.tryGetRuleContext(0, VariableContext);
	}
	public INCREMENTS(): TerminalNode | undefined { return this.tryGetToken(pawnParser.INCREMENTS, 0); }
	public DECREMENTS(): TerminalNode | undefined { return this.tryGetToken(pawnParser.DECREMENTS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_varModification; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterVarModification) {
			listener.enterVarModification(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitVarModification) {
			listener.exitVarModification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitVarModification) {
			return visitor.visitVarModification(this);
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
	public processorLabel(): ProcessorLabelContext[];
	public processorLabel(i: number): ProcessorLabelContext;
	public processorLabel(i?: number): ProcessorLabelContext | ProcessorLabelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ProcessorLabelContext);
		} else {
			return this.getRuleContext(i, ProcessorLabelContext);
		}
	}
	public cycleKeywords(): CycleKeywordsContext[];
	public cycleKeywords(i: number): CycleKeywordsContext;
	public cycleKeywords(i?: number): CycleKeywordsContext | CycleKeywordsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CycleKeywordsContext);
		} else {
			return this.getRuleContext(i, CycleKeywordsContext);
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


