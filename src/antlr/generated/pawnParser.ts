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
	public static readonly PRAGMA = 85;
	public static readonly SECTION = 86;
	public static readonly TRYINCLUDE = 87;
	public static readonly UNDEF = 88;
	public static readonly DYNAMIC = 89;
	public static readonly WARNING = 90;
	public static readonly TRUE = 91;
	public static readonly FALSE = 92;
	public static readonly CELLBITS = 93;
	public static readonly CELLMAX = 94;
	public static readonly CELLMIN = 95;
	public static readonly CHARBITS = 96;
	public static readonly CHARMAX = 97;
	public static readonly CHARMIN = 98;
	public static readonly DEBUG = 99;
	public static readonly LINE = 100;
	public static readonly PAWN = 101;
	public static readonly UCHARMAX = 102;
	public static readonly SHARPSTRING = 103;
	public static readonly STRING = 104;
	public static readonly CHAR_STRING = 105;
	public static readonly IDENTIFIER = 106;
	public static readonly BINARY = 107;
	public static readonly HEX = 108;
	public static readonly INTEGER = 109;
	public static readonly FLOAT = 110;
	public static readonly RATIONAL = 111;
	public static readonly Whitespace = 112;
	public static readonly Newline = 113;
	public static readonly DocBlock = 114;
	public static readonly BlockComment = 115;
	public static readonly LineComment = 116;
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
	public static readonly RULE_operator = 38;
	public static readonly RULE_canBeOverloaded = 39;
	public static readonly RULE_arefmeticOperator = 40;
	public static readonly RULE_logicOperator = 41;
	public static readonly RULE_compareOperator = 42;
	public static readonly RULE_bitwiseOperator = 43;
	public static readonly RULE_if_statement = 44;
	public static readonly RULE_else_statement = 45;
	public static readonly RULE_switch = 46;
	public static readonly RULE_case = 47;
	public static readonly RULE_default = 48;
	public static readonly RULE_case_list = 49;
	public static readonly RULE_range = 50;
	public static readonly RULE_condition = 51;
	public static readonly RULE_codeBlock = 52;
	public static readonly RULE_return = 53;
	public static readonly RULE_cycles = 54;
	public static readonly RULE_do = 55;
	public static readonly RULE_while = 56;
	public static readonly RULE_for = 57;
	public static readonly RULE_cycleBody = 58;
	public static readonly RULE_cycleKeywords = 59;
	public static readonly RULE_literal = 60;
	public static readonly RULE_bool_const = 61;
	public static readonly RULE_predefinedConstants = 62;
	public static readonly RULE_string = 63;
	public static readonly RULE_functionCall = 64;
	public static readonly RULE_docs = 65;
	public static readonly RULE_docBlock = 66;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"file", "processorLabel", "declaration", "enum", "enumMember", "enumIterator", 
		"var_definition", "functionDecl", "operatorOverload", "nativeAssigment", 
		"tag", "variable", "arrayIndex", "funcDeclModif", "funcModif", "statement", 
		"controlStatments", "assigment", "varModification", "arrayInit", "arrayInitMember", 
		"assigments", "grouping", "constGrouping", "expresion", "constExpresion", 
		"ternarOperator", "preOperators", "operation", "varOrLiteral", "declParams", 
		"ellipse", "reference", "varModifires", "rValue", "constRValue", "sizeof", 
		"number", "operator", "canBeOverloaded", "arefmeticOperator", "logicOperator", 
		"compareOperator", "bitwiseOperator", "if_statement", "else_statement", 
		"switch", "case", "default", "case_list", "range", "condition", "codeBlock", 
		"return", "cycles", "do", "while", "for", "cycleBody", "cycleKeywords", 
		"literal", "bool_const", "predefinedConstants", "string", "functionCall", 
		"docs", "docBlock",
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
		"'endscript'", "'file'", "'include'", "'pragma'", "'section'", "'tryinclude'", 
		"'undef'", "'dynamic'", "'warning'", "'true'", "'false'", "'cellbits'", 
		"'cellmax'", "'cellmin'", "'charbits'", "'charmax'", "'charmin'", "'debug'", 
		"'__line'", "'__Pawn'", "'ucharmax'",
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
		"ENDSCRIPT", "FILE", "INCLUDE", "PRAGMA", "SECTION", "TRYINCLUDE", "UNDEF", 
		"DYNAMIC", "WARNING", "TRUE", "FALSE", "CELLBITS", "CELLMAX", "CELLMIN", 
		"CHARBITS", "CHARMAX", "CHARMIN", "DEBUG", "LINE", "PAWN", "UCHARMAX", 
		"SHARPSTRING", "STRING", "CHAR_STRING", "IDENTIFIER", "BINARY", "HEX", 
		"INTEGER", "FLOAT", "RATIONAL", "Whitespace", "Newline", "DocBlock", "BlockComment", 
		"LineComment",
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
			this.state = 148;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 134;
				this.processorLabel();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 138;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 135;
						this.docs();
						}
						}
					}
					this.state = 140;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
				}
				this.state = 144;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === pawnParser.CURLY_OPEN_BRACKET || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (pawnParser.NEW - 54)) | (1 << (pawnParser.ENUM - 54)) | (1 << (pawnParser.CONST - 54)) | (1 << (pawnParser.STATIC - 54)) | (1 << (pawnParser.STOCK - 54)) | (1 << (pawnParser.FORWARD - 54)) | (1 << (pawnParser.NATIVE - 54)) | (1 << (pawnParser.PUBLIC - 54)))) !== 0) || _la === pawnParser.IDENTIFIER || _la === pawnParser.DocBlock) {
					{
					{
					this.state = 141;
					this.declaration();
					}
					}
					this.state = 146;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				this.state = 147;
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
			this.state = 150;
			this.match(pawnParser.IDENTIFIER);
			this.state = 151;
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
			this.state = 167;
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
				this.state = 156;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === pawnParser.DocBlock) {
					{
					{
					this.state = 153;
					this.docs();
					}
					}
					this.state = 158;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 164;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
				case 1:
					{
					this.state = 159;
					this.functionDecl();
					}
					break;

				case 2:
					{
					this.state = 160;
					this.operatorOverload();
					}
					break;

				case 3:
					{
					this.state = 161;
					this.var_definition();
					this.state = 162;
					this.match(pawnParser.SEMI);
					}
					break;
				}
				}
				break;
			case pawnParser.ENUM:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 166;
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
			this.state = 169;
			this.match(pawnParser.ENUM);
			this.state = 171;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.IDENTIFIER) {
				{
				this.state = 170;
				this.match(pawnParser.IDENTIFIER);
				}
			}

			this.state = 174;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.OPEN_PARENTHESIS) {
				{
				this.state = 173;
				this.enumIterator();
				}
			}

			this.state = 176;
			this.match(pawnParser.CURLY_OPEN_BRACKET);
			this.state = 188;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.CURLY_OPEN_BRACKET || _la === pawnParser.IDENTIFIER) {
				{
				this.state = 177;
				this.enumMember();
				this.state = 182;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 178;
						this.match(pawnParser.COMA);
						this.state = 179;
						this.enumMember();
						}
						}
					}
					this.state = 184;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
				}
				this.state = 186;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === pawnParser.COMA) {
					{
					this.state = 185;
					this.match(pawnParser.COMA);
					}
				}

				}
			}

			this.state = 190;
			this.match(pawnParser.CURLY_CLOSE_BRACKET);
			this.state = 192;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.SEMI) {
				{
				this.state = 191;
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
			this.state = 194;
			this.variable();
			this.state = 197;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.ASSIGMENT) {
				{
				this.state = 195;
				this.match(pawnParser.ASSIGMENT);
				this.state = 196;
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
			this.state = 199;
			this.match(pawnParser.OPEN_PARENTHESIS);
			this.state = 200;
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
			this.state = 201;
			this.match(pawnParser.INTEGER);
			this.state = 202;
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
			this.state = 216;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.NEW:
				{
				{
				this.state = 204;
				this.match(pawnParser.NEW);
				this.state = 208;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (pawnParser.CONST - 56)) | (1 << (pawnParser.STATIC - 56)) | (1 << (pawnParser.STOCK - 56)) | (1 << (pawnParser.PUBLIC - 56)))) !== 0)) {
					{
					{
					this.state = 205;
					this.varModifires();
					}
					}
					this.state = 210;
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
				this.state = 212;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 211;
					this.varModifires();
					}
					}
					this.state = 214;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (pawnParser.CONST - 56)) | (1 << (pawnParser.STATIC - 56)) | (1 << (pawnParser.STOCK - 56)) | (1 << (pawnParser.PUBLIC - 56)))) !== 0));
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 220;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 218;
				this.variable();
				}
				break;

			case 2:
				{
				this.state = 219;
				this.assigment();
				}
				break;
			}
			this.state = 229;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pawnParser.COMA) {
				{
				{
				this.state = 222;
				this.match(pawnParser.COMA);
				this.state = 225;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
				case 1:
					{
					this.state = 223;
					this.variable();
					}
					break;

				case 2:
					{
					this.state = 224;
					this.assigment();
					}
					break;
				}
				}
				}
				this.state = 231;
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
			this.state = 233;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (pawnParser.STOCK - 58)) | (1 << (pawnParser.FORWARD - 58)) | (1 << (pawnParser.NATIVE - 58)) | (1 << (pawnParser.PUBLIC - 58)))) !== 0)) {
				{
				this.state = 232;
				this.funcDeclModif();
				}
			}

			this.state = 236;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				{
				this.state = 235;
				this.tag();
				}
				break;
			}
			this.state = 238;
			this.match(pawnParser.IDENTIFIER);
			this.state = 239;
			this.match(pawnParser.OPEN_PARENTHESIS);
			this.state = 251;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.CURLY_OPEN_BRACKET || _la === pawnParser.BIT_AND || _la === pawnParser.CONST || _la === pawnParser.IDENTIFIER) {
				{
				this.state = 240;
				this.declParams();
				this.state = 245;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 241;
						this.match(pawnParser.COMA);
						this.state = 242;
						this.declParams();
						}
						}
					}
					this.state = 247;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
				}
				this.state = 249;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === pawnParser.COMA) {
					{
					this.state = 248;
					this.ellipse();
					}
				}

				}
			}

			this.state = 253;
			this.match(pawnParser.CLOSE_PARENTHESIS);
			this.state = 257;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.SEMI:
				{
				this.state = 254;
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
			case pawnParser.CONTINUE:
			case pawnParser.BREAK:
			case pawnParser.IDENTIFIER:
				{
				this.state = 255;
				this.codeBlock();
				}
				break;
			case pawnParser.ASSIGMENT:
				{
				this.state = 256;
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
			this.state = 259;
			this.funcDeclModif();
			}
			this.state = 261;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.CURLY_OPEN_BRACKET || _la === pawnParser.IDENTIFIER) {
				{
				this.state = 260;
				this.tag();
				}
			}

			this.state = 263;
			this.match(pawnParser.OPERATOR);
			this.state = 264;
			this.canBeOverloaded();
			this.state = 265;
			this.match(pawnParser.OPEN_PARENTHESIS);
			this.state = 277;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.CURLY_OPEN_BRACKET || _la === pawnParser.BIT_AND || _la === pawnParser.CONST || _la === pawnParser.IDENTIFIER) {
				{
				this.state = 266;
				this.declParams();
				this.state = 271;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 267;
						this.match(pawnParser.COMA);
						this.state = 268;
						this.declParams();
						}
						}
					}
					this.state = 273;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
				}
				this.state = 275;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === pawnParser.COMA) {
					{
					this.state = 274;
					this.ellipse();
					}
				}

				}
			}

			this.state = 279;
			this.match(pawnParser.CLOSE_PARENTHESIS);
			this.state = 283;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.SEMI:
				{
				this.state = 280;
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
			case pawnParser.CONTINUE:
			case pawnParser.BREAK:
			case pawnParser.IDENTIFIER:
				{
				this.state = 281;
				this.codeBlock();
				}
				break;
			case pawnParser.ASSIGMENT:
				{
				this.state = 282;
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
			this.state = 285;
			this.match(pawnParser.ASSIGMENT);
			this.state = 286;
			this.match(pawnParser.IDENTIFIER);
			this.state = 287;
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
			this.state = 300;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.IDENTIFIER:
				{
				this.state = 289;
				this.match(pawnParser.IDENTIFIER);
				}
				break;
			case pawnParser.CURLY_OPEN_BRACKET:
				{
				{
				this.state = 290;
				this.match(pawnParser.CURLY_OPEN_BRACKET);
				this.state = 291;
				this.match(pawnParser.IDENTIFIER);
				this.state = 296;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === pawnParser.COMA) {
					{
					{
					this.state = 292;
					this.match(pawnParser.COMA);
					this.state = 293;
					this.match(pawnParser.IDENTIFIER);
					}
					}
					this.state = 298;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 299;
				this.match(pawnParser.CURLY_CLOSE_BRACKET);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 302;
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
			this.state = 305;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				{
				this.state = 304;
				this.tag();
				}
				break;
			}
			this.state = 307;
			this.match(pawnParser.IDENTIFIER);
			this.state = 311;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pawnParser.SQUARE_OPEN_BRACKET) {
				{
				{
				this.state = 308;
				this.arrayIndex();
				}
				}
				this.state = 313;
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
			this.state = 314;
			this.match(pawnParser.SQUARE_OPEN_BRACKET);
			this.state = 319;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.OPEN_PARENTHESIS) | (1 << pawnParser.CURLY_OPEN_BRACKET) | (1 << pawnParser.MINUS) | (1 << pawnParser.INCREMENTS) | (1 << pawnParser.DECREMENTS))) !== 0) || _la === pawnParser.NOT || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (pawnParser.SIZEOF - 75)) | (1 << (pawnParser.TRUE - 75)) | (1 << (pawnParser.FALSE - 75)) | (1 << (pawnParser.CELLBITS - 75)) | (1 << (pawnParser.CELLMAX - 75)) | (1 << (pawnParser.CELLMIN - 75)) | (1 << (pawnParser.CHARBITS - 75)) | (1 << (pawnParser.CHARMAX - 75)) | (1 << (pawnParser.CHARMIN - 75)) | (1 << (pawnParser.DEBUG - 75)) | (1 << (pawnParser.LINE - 75)) | (1 << (pawnParser.PAWN - 75)) | (1 << (pawnParser.UCHARMAX - 75)) | (1 << (pawnParser.SHARPSTRING - 75)) | (1 << (pawnParser.STRING - 75)) | (1 << (pawnParser.CHAR_STRING - 75)) | (1 << (pawnParser.IDENTIFIER - 75)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (pawnParser.BINARY - 107)) | (1 << (pawnParser.HEX - 107)) | (1 << (pawnParser.INTEGER - 107)) | (1 << (pawnParser.FLOAT - 107)) | (1 << (pawnParser.RATIONAL - 107)))) !== 0)) {
				{
				this.state = 315;
				this.expresion();
				this.state = 317;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === pawnParser.CHAR) {
					{
					this.state = 316;
					this.match(pawnParser.CHAR);
					}
				}

				}
			}

			this.state = 321;
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
			this.state = 326;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.STOCK:
			case pawnParser.PUBLIC:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 323;
				this.funcModif();
				}
				break;
			case pawnParser.FORWARD:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 324;
				this.match(pawnParser.FORWARD);
				}
				break;
			case pawnParser.NATIVE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 325;
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
			this.state = 328;
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
			this.state = 340;
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
				this.state = 335;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
				case 1:
					{
					this.state = 330;
					this.var_definition();
					}
					break;

				case 2:
					{
					this.state = 331;
					this.assigment();
					}
					break;

				case 3:
					{
					this.state = 332;
					this.functionCall();
					}
					break;

				case 4:
					{
					this.state = 333;
					this.return();
					}
					break;

				case 5:
					{
					this.state = 334;
					this.varModification();
					}
					break;
				}
				this.state = 337;
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
				this.state = 339;
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
			this.state = 345;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.IF:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 342;
				this.if_statement();
				}
				break;
			case pawnParser.WHILE:
			case pawnParser.FOR:
			case pawnParser.DO:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 343;
				this.cycles();
				}
				break;
			case pawnParser.SWITCH:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 344;
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
			this.state = 347;
			this.variable();
			this.state = 348;
			this.assigments();
			this.state = 351;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				{
				this.state = 349;
				this.expresion();
				}
				break;

			case 2:
				{
				this.state = 350;
				this.arrayInit();
				}
				break;
			}
			this.state = 360;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.ASSIGMENT) | (1 << pawnParser.ASSIGMENT_PLUS) | (1 << pawnParser.ASSIGMENT_MINUS) | (1 << pawnParser.ASSIGMENT_MULT) | (1 << pawnParser.ASSIGMENT_DIV) | (1 << pawnParser.ASSIGMENT_REMAINDE) | (1 << pawnParser.ASSIGMENT_AND) | (1 << pawnParser.ASSIGMENT_OR) | (1 << pawnParser.ASSIGMENT_XOR) | (1 << pawnParser.ASSIGMENT_RIGHT) | (1 << pawnParser.ASSIGMENT_RIGHT_LOG) | (1 << pawnParser.ASSIGMENT_LEFT))) !== 0)) {
				{
				{
				this.state = 353;
				this.assigments();
				this.state = 356;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
				case 1:
					{
					this.state = 354;
					this.expresion();
					}
					break;

				case 2:
					{
					this.state = 355;
					this.arrayInit();
					}
					break;
				}
				}
				}
				this.state = 362;
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
			this.state = 369;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 363;
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
				this.state = 364;
				this.variable();
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 365;
				this.variable();
				this.state = 366;
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
				this.state = 368;
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
			this.state = 371;
			this.match(pawnParser.CURLY_OPEN_BRACKET);
			this.state = 372;
			this.arrayInitMember();
			this.state = 377;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pawnParser.COMA) {
				{
				{
				this.state = 373;
				this.match(pawnParser.COMA);
				this.state = 374;
				this.arrayInitMember();
				}
				}
				this.state = 379;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 380;
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
			this.state = 391;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 383;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
				case 1:
					{
					this.state = 382;
					this.tag();
					}
					break;
				}
				this.state = 388;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case pawnParser.IDENTIFIER:
					{
					this.state = 385;
					this.match(pawnParser.IDENTIFIER);
					}
					break;
				case pawnParser.MINUS:
				case pawnParser.BINARY:
				case pawnParser.HEX:
				case pawnParser.INTEGER:
				case pawnParser.FLOAT:
				case pawnParser.RATIONAL:
					{
					this.state = 386;
					this.number();
					}
					break;
				case pawnParser.SHARPSTRING:
				case pawnParser.STRING:
				case pawnParser.CHAR_STRING:
					{
					this.state = 387;
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
				this.state = 390;
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
			this.state = 393;
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
			this.state = 396;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.CURLY_OPEN_BRACKET || _la === pawnParser.IDENTIFIER) {
				{
				this.state = 395;
				this.tag();
				}
			}

			this.state = 398;
			this.match(pawnParser.OPEN_PARENTHESIS);
			this.state = 399;
			this.expresion();
			this.state = 400;
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
			this.state = 403;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.CURLY_OPEN_BRACKET || _la === pawnParser.IDENTIFIER) {
				{
				this.state = 402;
				this.tag();
				}
			}

			this.state = 405;
			this.match(pawnParser.OPEN_PARENTHESIS);
			this.state = 406;
			this.constExpresion();
			this.state = 407;
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
			this.state = 410;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
			case 1:
				{
				this.state = 409;
				this.preOperators();
				}
				break;
			}
			this.state = 418;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
			case 1:
				{
				this.state = 412;
				this.rValue();
				this.state = 414;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (pawnParser.PLUS - 21)) | (1 << (pawnParser.MINUS - 21)) | (1 << (pawnParser.MULTY - 21)) | (1 << (pawnParser.DIV - 21)) | (1 << (pawnParser.REMAINDE - 21)) | (1 << (pawnParser.INCREMENTS - 21)) | (1 << (pawnParser.DECREMENTS - 21)) | (1 << (pawnParser.EQUAL - 21)) | (1 << (pawnParser.NOTEQUAL - 21)) | (1 << (pawnParser.LESS - 21)) | (1 << (pawnParser.LARGER - 21)) | (1 << (pawnParser.LESSEQ - 21)) | (1 << (pawnParser.LARGEREQ - 21)) | (1 << (pawnParser.OR - 21)) | (1 << (pawnParser.AND - 21)) | (1 << (pawnParser.NOT - 21)) | (1 << (pawnParser.BIT_AND - 21)) | (1 << (pawnParser.BIT_OR - 21)) | (1 << (pawnParser.BIT_XOR - 21)) | (1 << (pawnParser.BIT_COMPLEMEN - 21)) | (1 << (pawnParser.BIT_RIGHT - 21)) | (1 << (pawnParser.BIT_LEFT - 21)) | (1 << (pawnParser.BIT_RIGHT_LOG - 21)))) !== 0)) {
					{
					this.state = 413;
					this.operation();
					}
				}

				}
				break;

			case 2:
				{
				this.state = 416;
				this.grouping();
				}
				break;

			case 3:
				{
				this.state = 417;
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
			this.state = 421;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
			case 1:
				{
				this.state = 420;
				this.preOperators();
				}
				break;
			}
			this.state = 429;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
			case 1:
				{
				this.state = 423;
				this.varOrLiteral();
				this.state = 425;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (pawnParser.PLUS - 21)) | (1 << (pawnParser.MINUS - 21)) | (1 << (pawnParser.MULTY - 21)) | (1 << (pawnParser.DIV - 21)) | (1 << (pawnParser.REMAINDE - 21)) | (1 << (pawnParser.INCREMENTS - 21)) | (1 << (pawnParser.DECREMENTS - 21)) | (1 << (pawnParser.EQUAL - 21)) | (1 << (pawnParser.NOTEQUAL - 21)) | (1 << (pawnParser.LESS - 21)) | (1 << (pawnParser.LARGER - 21)) | (1 << (pawnParser.LESSEQ - 21)) | (1 << (pawnParser.LARGEREQ - 21)) | (1 << (pawnParser.OR - 21)) | (1 << (pawnParser.AND - 21)) | (1 << (pawnParser.NOT - 21)) | (1 << (pawnParser.BIT_AND - 21)) | (1 << (pawnParser.BIT_OR - 21)) | (1 << (pawnParser.BIT_XOR - 21)) | (1 << (pawnParser.BIT_COMPLEMEN - 21)) | (1 << (pawnParser.BIT_RIGHT - 21)) | (1 << (pawnParser.BIT_LEFT - 21)) | (1 << (pawnParser.BIT_RIGHT_LOG - 21)))) !== 0)) {
					{
					this.state = 424;
					this.operation();
					}
				}

				}
				break;

			case 2:
				{
				this.state = 427;
				this.constGrouping();
				}
				break;

			case 3:
				{
				this.state = 428;
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
			this.state = 436;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 57, this._ctx) ) {
			case 1:
				{
				this.state = 431;
				this.rValue();
				this.state = 433;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (pawnParser.PLUS - 21)) | (1 << (pawnParser.MINUS - 21)) | (1 << (pawnParser.MULTY - 21)) | (1 << (pawnParser.DIV - 21)) | (1 << (pawnParser.REMAINDE - 21)) | (1 << (pawnParser.INCREMENTS - 21)) | (1 << (pawnParser.DECREMENTS - 21)) | (1 << (pawnParser.EQUAL - 21)) | (1 << (pawnParser.NOTEQUAL - 21)) | (1 << (pawnParser.LESS - 21)) | (1 << (pawnParser.LARGER - 21)) | (1 << (pawnParser.LESSEQ - 21)) | (1 << (pawnParser.LARGEREQ - 21)) | (1 << (pawnParser.OR - 21)) | (1 << (pawnParser.AND - 21)) | (1 << (pawnParser.NOT - 21)) | (1 << (pawnParser.BIT_AND - 21)) | (1 << (pawnParser.BIT_OR - 21)) | (1 << (pawnParser.BIT_XOR - 21)) | (1 << (pawnParser.BIT_COMPLEMEN - 21)) | (1 << (pawnParser.BIT_RIGHT - 21)) | (1 << (pawnParser.BIT_LEFT - 21)) | (1 << (pawnParser.BIT_RIGHT_LOG - 21)))) !== 0)) {
					{
					this.state = 432;
					this.operation();
					}
				}

				}
				break;

			case 2:
				{
				this.state = 435;
				this.grouping();
				}
				break;
			}
			this.state = 438;
			this.match(pawnParser.QUESTION);
			this.state = 439;
			this.expresion();
			this.state = 440;
			this.match(pawnParser.COLON);
			this.state = 441;
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
			this.state = 443;
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
			this.state = 445;
			this.operator();
			this.state = 447;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.OPEN_PARENTHESIS) | (1 << pawnParser.CURLY_OPEN_BRACKET) | (1 << pawnParser.MINUS) | (1 << pawnParser.INCREMENTS) | (1 << pawnParser.DECREMENTS))) !== 0) || _la === pawnParser.NOT || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (pawnParser.SIZEOF - 75)) | (1 << (pawnParser.TRUE - 75)) | (1 << (pawnParser.FALSE - 75)) | (1 << (pawnParser.CELLBITS - 75)) | (1 << (pawnParser.CELLMAX - 75)) | (1 << (pawnParser.CELLMIN - 75)) | (1 << (pawnParser.CHARBITS - 75)) | (1 << (pawnParser.CHARMAX - 75)) | (1 << (pawnParser.CHARMIN - 75)) | (1 << (pawnParser.DEBUG - 75)) | (1 << (pawnParser.LINE - 75)) | (1 << (pawnParser.PAWN - 75)) | (1 << (pawnParser.UCHARMAX - 75)) | (1 << (pawnParser.SHARPSTRING - 75)) | (1 << (pawnParser.STRING - 75)) | (1 << (pawnParser.CHAR_STRING - 75)) | (1 << (pawnParser.IDENTIFIER - 75)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (pawnParser.BINARY - 107)) | (1 << (pawnParser.HEX - 107)) | (1 << (pawnParser.INTEGER - 107)) | (1 << (pawnParser.FLOAT - 107)) | (1 << (pawnParser.RATIONAL - 107)))) !== 0)) {
				{
				this.state = 446;
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
			this.state = 451;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 59, this._ctx) ) {
			case 1:
				{
				this.state = 449;
				this.literal();
				}
				break;

			case 2:
				{
				this.state = 450;
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
			this.state = 454;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.CONST) {
				{
				this.state = 453;
				this.match(pawnParser.CONST);
				}
			}

			this.state = 457;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.BIT_AND) {
				{
				this.state = 456;
				this.reference();
				}
			}

			this.state = 459;
			this.variable();
			this.state = 472;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.ASSIGMENT) {
				{
				this.state = 460;
				this.match(pawnParser.ASSIGMENT);
				this.state = 470;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 63, this._ctx) ) {
				case 1:
					{
					this.state = 461;
					this.constExpresion();
					}
					break;

				case 2:
					{
					{
					this.state = 462;
					this.sizeof();
					this.state = 468;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case pawnParser.CURLY_OPEN_BRACKET:
					case pawnParser.IDENTIFIER:
						{
						this.state = 463;
						this.variable();
						}
						break;
					case pawnParser.OPEN_PARENTHESIS:
						{
						this.state = 464;
						this.match(pawnParser.OPEN_PARENTHESIS);
						this.state = 465;
						this.variable();
						this.state = 466;
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
			this.state = 474;
			this.match(pawnParser.COMA);
			this.state = 476;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.CURLY_OPEN_BRACKET || _la === pawnParser.IDENTIFIER) {
				{
				this.state = 475;
				this.tag();
				}
			}

			this.state = 478;
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
			this.state = 480;
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
			this.state = 482;
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
			this.state = 487;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
			case 1:
				{
				this.state = 484;
				this.varOrLiteral();
				}
				break;

			case 2:
				{
				this.state = 485;
				this.functionCall();
				}
				break;

			case 3:
				{
				this.state = 486;
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
			this.state = 491;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 67, this._ctx) ) {
			case 1:
				{
				this.state = 489;
				this.varOrLiteral();
				}
				break;

			case 2:
				{
				this.state = 490;
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
			this.state = 493;
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 496;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.MINUS) {
				{
				this.state = 495;
				this.match(pawnParser.MINUS);
				}
			}

			this.state = 498;
			_la = this._input.LA(1);
			if (!(((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (pawnParser.BINARY - 107)) | (1 << (pawnParser.HEX - 107)) | (1 << (pawnParser.INTEGER - 107)) | (1 << (pawnParser.FLOAT - 107)) | (1 << (pawnParser.RATIONAL - 107)))) !== 0))) {
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
	public operator(): OperatorContext {
		let _localctx: OperatorContext = new OperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, pawnParser.RULE_operator);
		try {
			this.state = 503;
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
				this.state = 500;
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
				this.state = 501;
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
				this.state = 502;
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
		this.enterRule(_localctx, 78, pawnParser.RULE_canBeOverloaded);
		try {
			this.state = 508;
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
				this.state = 505;
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
				this.state = 506;
				this.compareOperator();
				}
				break;
			case pawnParser.ASSIGMENT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 507;
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
		this.enterRule(_localctx, 80, pawnParser.RULE_arefmeticOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 510;
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
		this.enterRule(_localctx, 82, pawnParser.RULE_logicOperator);
		try {
			this.state = 515;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.OR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 512;
				this.match(pawnParser.OR);
				}
				break;
			case pawnParser.AND:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 513;
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
				this.state = 514;
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
		this.enterRule(_localctx, 84, pawnParser.RULE_compareOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 517;
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
		this.enterRule(_localctx, 86, pawnParser.RULE_bitwiseOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 519;
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
		this.enterRule(_localctx, 88, pawnParser.RULE_if_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 521;
			this.match(pawnParser.IF);
			this.state = 522;
			this.condition();
			this.state = 523;
			this.codeBlock();
			this.state = 525;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 72, this._ctx) ) {
			case 1:
				{
				this.state = 524;
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
		this.enterRule(_localctx, 90, pawnParser.RULE_else_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 527;
			this.match(pawnParser.ELSE);
			this.state = 530;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 73, this._ctx) ) {
			case 1:
				{
				this.state = 528;
				this.if_statement();
				}
				break;

			case 2:
				{
				this.state = 529;
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
		this.enterRule(_localctx, 92, pawnParser.RULE_switch);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 532;
			this.match(pawnParser.SWITCH);
			this.state = 533;
			this.condition();
			this.state = 534;
			this.match(pawnParser.CURLY_OPEN_BRACKET);
			this.state = 538;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pawnParser.CASE) {
				{
				{
				this.state = 535;
				this.case();
				}
				}
				this.state = 540;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 542;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.DEFAULT) {
				{
				this.state = 541;
				this.default();
				}
			}

			this.state = 544;
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
		this.enterRule(_localctx, 94, pawnParser.RULE_case);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 546;
			this.match(pawnParser.CASE);
			this.state = 547;
			this.case_list();
			this.state = 552;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pawnParser.COMA) {
				{
				{
				this.state = 548;
				this.match(pawnParser.COMA);
				this.state = 549;
				this.case_list();
				}
				}
				this.state = 554;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 555;
			this.match(pawnParser.COLON);
			this.state = 556;
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
		this.enterRule(_localctx, 96, pawnParser.RULE_default);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 558;
			this.match(pawnParser.DEFAULT);
			this.state = 559;
			this.match(pawnParser.COLON);
			this.state = 560;
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
		this.enterRule(_localctx, 98, pawnParser.RULE_case_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 564;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.IDENTIFIER:
				{
				this.state = 562;
				this.match(pawnParser.IDENTIFIER);
				}
				break;
			case pawnParser.MINUS:
			case pawnParser.BINARY:
			case pawnParser.HEX:
			case pawnParser.INTEGER:
			case pawnParser.FLOAT:
			case pawnParser.RATIONAL:
				{
				this.state = 563;
				this.number();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 567;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.PERIOD) {
				{
				this.state = 566;
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
		this.enterRule(_localctx, 100, pawnParser.RULE_range);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 569;
			this.match(pawnParser.PERIOD);
			this.state = 572;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.IDENTIFIER:
				{
				this.state = 570;
				this.match(pawnParser.IDENTIFIER);
				}
				break;
			case pawnParser.MINUS:
			case pawnParser.BINARY:
			case pawnParser.HEX:
			case pawnParser.INTEGER:
			case pawnParser.FLOAT:
			case pawnParser.RATIONAL:
				{
				this.state = 571;
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
		this.enterRule(_localctx, 102, pawnParser.RULE_condition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 574;
			this.match(pawnParser.OPEN_PARENTHESIS);
			this.state = 575;
			this.expresion();
			this.state = 576;
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
		this.enterRule(_localctx, 104, pawnParser.RULE_codeBlock);
		let _la: number;
		try {
			this.state = 593;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 83, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 578;
				this.match(pawnParser.CURLY_OPEN_BRACKET);
				this.state = 584;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.CURLY_OPEN_BRACKET) | (1 << pawnParser.INCREMENTS) | (1 << pawnParser.DECREMENTS))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (pawnParser.RETURN - 53)) | (1 << (pawnParser.NEW - 53)) | (1 << (pawnParser.CONST - 53)) | (1 << (pawnParser.STATIC - 53)) | (1 << (pawnParser.STOCK - 53)) | (1 << (pawnParser.PUBLIC - 53)) | (1 << (pawnParser.IF - 53)) | (1 << (pawnParser.SWITCH - 53)) | (1 << (pawnParser.WHILE - 53)) | (1 << (pawnParser.FOR - 53)) | (1 << (pawnParser.DO - 53)) | (1 << (pawnParser.CONTINUE - 53)) | (1 << (pawnParser.BREAK - 53)))) !== 0) || _la === pawnParser.IDENTIFIER) {
					{
					this.state = 582;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 80, this._ctx) ) {
					case 1:
						{
						this.state = 579;
						this.statement();
						}
						break;

					case 2:
						{
						this.state = 580;
						this.processorLabel();
						}
						break;

					case 3:
						{
						this.state = 581;
						this.cycleKeywords();
						}
						break;
					}
					}
					this.state = 586;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 587;
				this.match(pawnParser.CURLY_CLOSE_BRACKET);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 591;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 82, this._ctx) ) {
				case 1:
					{
					this.state = 588;
					this.statement();
					}
					break;

				case 2:
					{
					this.state = 589;
					this.processorLabel();
					}
					break;

				case 3:
					{
					this.state = 590;
					this.cycleKeywords();
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
		this.enterRule(_localctx, 106, pawnParser.RULE_return);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 595;
			this.match(pawnParser.RETURN);
			this.state = 597;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.OPEN_PARENTHESIS) | (1 << pawnParser.CURLY_OPEN_BRACKET) | (1 << pawnParser.MINUS) | (1 << pawnParser.INCREMENTS) | (1 << pawnParser.DECREMENTS))) !== 0) || _la === pawnParser.NOT || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (pawnParser.SIZEOF - 75)) | (1 << (pawnParser.TRUE - 75)) | (1 << (pawnParser.FALSE - 75)) | (1 << (pawnParser.CELLBITS - 75)) | (1 << (pawnParser.CELLMAX - 75)) | (1 << (pawnParser.CELLMIN - 75)) | (1 << (pawnParser.CHARBITS - 75)) | (1 << (pawnParser.CHARMAX - 75)) | (1 << (pawnParser.CHARMIN - 75)) | (1 << (pawnParser.DEBUG - 75)) | (1 << (pawnParser.LINE - 75)) | (1 << (pawnParser.PAWN - 75)) | (1 << (pawnParser.UCHARMAX - 75)) | (1 << (pawnParser.SHARPSTRING - 75)) | (1 << (pawnParser.STRING - 75)) | (1 << (pawnParser.CHAR_STRING - 75)) | (1 << (pawnParser.IDENTIFIER - 75)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (pawnParser.BINARY - 107)) | (1 << (pawnParser.HEX - 107)) | (1 << (pawnParser.INTEGER - 107)) | (1 << (pawnParser.FLOAT - 107)) | (1 << (pawnParser.RATIONAL - 107)))) !== 0)) {
				{
				this.state = 596;
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
		this.enterRule(_localctx, 108, pawnParser.RULE_cycles);
		try {
			this.state = 602;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.WHILE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 599;
				this.while();
				}
				break;
			case pawnParser.FOR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 600;
				this.for();
				}
				break;
			case pawnParser.DO:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 601;
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
		this.enterRule(_localctx, 110, pawnParser.RULE_do);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 604;
			this.match(pawnParser.DO);
			this.state = 605;
			this.cycleBody();
			this.state = 608;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 86, this._ctx) ) {
			case 1:
				{
				this.state = 606;
				this.match(pawnParser.WHILE);
				this.state = 607;
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
		this.enterRule(_localctx, 112, pawnParser.RULE_while);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 610;
			this.match(pawnParser.WHILE);
			this.state = 611;
			this.condition();
			this.state = 612;
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
		this.enterRule(_localctx, 114, pawnParser.RULE_for);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 614;
			this.match(pawnParser.FOR);
			this.state = 615;
			this.match(pawnParser.OPEN_PARENTHESIS);
			this.state = 616;
			this.var_definition();
			this.state = 617;
			this.match(pawnParser.SEMI);
			this.state = 618;
			this.expresion();
			this.state = 619;
			this.match(pawnParser.SEMI);
			this.state = 622;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 87, this._ctx) ) {
			case 1:
				{
				this.state = 620;
				this.expresion();
				}
				break;

			case 2:
				{
				this.state = 621;
				this.assigment();
				}
				break;
			}
			this.state = 624;
			this.match(pawnParser.CLOSE_PARENTHESIS);
			this.state = 625;
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
		this.enterRule(_localctx, 116, pawnParser.RULE_cycleBody);
		try {
			this.state = 630;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 88, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 627;
				this.cycleKeywords();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 628;
				this.codeBlock();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 629;
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
		this.enterRule(_localctx, 118, pawnParser.RULE_cycleKeywords);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 632;
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
			this.state = 633;
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
		this.enterRule(_localctx, 120, pawnParser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 636;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.CURLY_OPEN_BRACKET || _la === pawnParser.IDENTIFIER) {
				{
				this.state = 635;
				this.tag();
				}
			}

			this.state = 642;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.SHARPSTRING:
			case pawnParser.STRING:
			case pawnParser.CHAR_STRING:
				{
				this.state = 638;
				this.string();
				}
				break;
			case pawnParser.MINUS:
			case pawnParser.BINARY:
			case pawnParser.HEX:
			case pawnParser.INTEGER:
			case pawnParser.FLOAT:
			case pawnParser.RATIONAL:
				{
				this.state = 639;
				this.number();
				}
				break;
			case pawnParser.TRUE:
			case pawnParser.FALSE:
				{
				this.state = 640;
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
				this.state = 641;
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
		this.enterRule(_localctx, 122, pawnParser.RULE_bool_const);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 644;
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
		this.enterRule(_localctx, 124, pawnParser.RULE_predefinedConstants);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 646;
			_la = this._input.LA(1);
			if (!(((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (pawnParser.CELLBITS - 93)) | (1 << (pawnParser.CELLMAX - 93)) | (1 << (pawnParser.CELLMIN - 93)) | (1 << (pawnParser.CHARBITS - 93)) | (1 << (pawnParser.CHARMAX - 93)) | (1 << (pawnParser.CHARMIN - 93)) | (1 << (pawnParser.DEBUG - 93)) | (1 << (pawnParser.LINE - 93)) | (1 << (pawnParser.PAWN - 93)) | (1 << (pawnParser.UCHARMAX - 93)))) !== 0))) {
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
			this.state = 648;
			_la = this._input.LA(1);
			if (!(((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (pawnParser.SHARPSTRING - 103)) | (1 << (pawnParser.STRING - 103)) | (1 << (pawnParser.CHAR_STRING - 103)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 652;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 649;
					this.string();
					}
					}
				}
				this.state = 654;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
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
			this.state = 656;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 92, this._ctx) ) {
			case 1:
				{
				this.state = 655;
				this.tag();
				}
				break;
			}
			this.state = 658;
			this.match(pawnParser.IDENTIFIER);
			this.state = 659;
			this.match(pawnParser.OPEN_PARENTHESIS);
			this.state = 668;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.OPEN_PARENTHESIS) | (1 << pawnParser.CURLY_OPEN_BRACKET) | (1 << pawnParser.MINUS) | (1 << pawnParser.INCREMENTS) | (1 << pawnParser.DECREMENTS))) !== 0) || _la === pawnParser.NOT || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (pawnParser.SIZEOF - 75)) | (1 << (pawnParser.TRUE - 75)) | (1 << (pawnParser.FALSE - 75)) | (1 << (pawnParser.CELLBITS - 75)) | (1 << (pawnParser.CELLMAX - 75)) | (1 << (pawnParser.CELLMIN - 75)) | (1 << (pawnParser.CHARBITS - 75)) | (1 << (pawnParser.CHARMAX - 75)) | (1 << (pawnParser.CHARMIN - 75)) | (1 << (pawnParser.DEBUG - 75)) | (1 << (pawnParser.LINE - 75)) | (1 << (pawnParser.PAWN - 75)) | (1 << (pawnParser.UCHARMAX - 75)) | (1 << (pawnParser.SHARPSTRING - 75)) | (1 << (pawnParser.STRING - 75)) | (1 << (pawnParser.CHAR_STRING - 75)) | (1 << (pawnParser.IDENTIFIER - 75)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (pawnParser.BINARY - 107)) | (1 << (pawnParser.HEX - 107)) | (1 << (pawnParser.INTEGER - 107)) | (1 << (pawnParser.FLOAT - 107)) | (1 << (pawnParser.RATIONAL - 107)))) !== 0)) {
				{
				this.state = 660;
				this.expresion();
				this.state = 665;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === pawnParser.COMA) {
					{
					{
					this.state = 661;
					this.match(pawnParser.COMA);
					this.state = 662;
					this.expresion();
					}
					}
					this.state = 667;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 670;
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
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 672;
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
		this.enterRule(_localctx, 132, pawnParser.RULE_docBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 674;
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

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03v\u02A7\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x03\x02\x03" +
		"\x02\x07\x02\x8B\n\x02\f\x02\x0E\x02\x8E\v\x02\x03\x02\x07\x02\x91\n\x02" +
		"\f\x02\x0E\x02\x94\v\x02\x03\x02\x05\x02\x97\n\x02\x03\x03\x03\x03\x03" +
		"\x03\x03\x04\x07\x04\x9D\n\x04\f\x04\x0E\x04\xA0\v\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x05\x04\xA7\n\x04\x03\x04\x05\x04\xAA\n\x04\x03" +
		"\x05\x03\x05\x05\x05\xAE\n\x05\x03\x05\x05\x05\xB1\n\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x07\x05\xB7\n\x05\f\x05\x0E\x05\xBA\v\x05\x03\x05\x05" +
		"\x05\xBD\n\x05\x05\x05\xBF\n\x05\x03\x05\x03\x05\x05\x05\xC3\n\x05\x03" +
		"\x06\x03\x06\x03\x06\x05\x06\xC8\n\x06\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\b\x03\b\x07\b\xD1\n\b\f\b\x0E\b\xD4\v\b\x03\b\x06\b\xD7\n" +
		"\b\r\b\x0E\b\xD8\x05\b\xDB\n\b\x03\b\x03\b\x05\b\xDF\n\b\x03\b\x03\b\x03" +
		"\b\x05\b\xE4\n\b\x07\b\xE6\n\b\f\b\x0E\b\xE9\v\b\x03\t\x05\t\xEC\n\t\x03" +
		"\t\x05\t\xEF\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\xF6\n\t\f\t\x0E\t" +
		"\xF9\v\t\x03\t\x05\t\xFC\n\t\x05\t\xFE\n\t\x03\t\x03\t\x03\t\x03\t\x05" +
		"\t\u0104\n\t\x03\n\x03\n\x05\n\u0108\n\n\x03\n\x03\n\x03\n\x03\n\x03\n" +
		"\x03\n\x07\n\u0110\n\n\f\n\x0E\n\u0113\v\n\x03\n\x05\n\u0116\n\n\x05\n" +
		"\u0118\n\n\x03\n\x03\n\x03\n\x03\n\x05\n\u011E\n\n\x03\v\x03\v\x03\v\x03" +
		"\v\x03\f\x03\f\x03\f\x03\f\x03\f\x07\f\u0129\n\f\f\f\x0E\f\u012C\v\f\x03" +
		"\f\x05\f\u012F\n\f\x03\f\x03\f\x03\r\x05\r\u0134\n\r\x03\r\x03\r\x07\r" +
		"\u0138\n\r\f\r\x0E\r\u013B\v\r\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0140\n" +
		"\x0E\x05\x0E\u0142\n\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x05\x0F" +
		"\u0149\n\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05" +
		"\x11\u0152\n\x11\x03\x11\x03\x11\x03\x11\x05\x11\u0157\n\x11\x03\x12\x03" +
		"\x12\x03\x12\x05\x12\u015C\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13" +
		"\u0162\n\x13\x03\x13\x03\x13\x03\x13\x05\x13\u0167\n\x13\x07\x13\u0169" +
		"\n\x13\f\x13\x0E\x13\u016C\v\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x05\x14\u0174\n\x14\x03\x15\x03\x15\x03\x15\x03\x15\x07\x15\u017A" +
		"\n\x15\f\x15\x0E\x15\u017D\v\x15\x03\x15\x03\x15\x03\x16\x05\x16\u0182" +
		"\n\x16\x03\x16\x03\x16\x03\x16\x05\x16\u0187\n\x16\x03\x16\x05\x16\u018A" +
		"\n\x16\x03\x17\x03\x17\x03\x18\x05\x18\u018F\n\x18\x03\x18\x03\x18\x03" +
		"\x18\x03\x18\x03\x19\x05\x19\u0196\n\x19\x03\x19\x03\x19\x03\x19\x03\x19" +
		"\x03\x1A\x05\x1A\u019D\n\x1A\x03\x1A\x03\x1A\x05\x1A\u01A1\n\x1A\x03\x1A" +
		"\x03\x1A\x05\x1A\u01A5\n\x1A\x03\x1B\x05\x1B\u01A8\n\x1B\x03\x1B\x03\x1B" +
		"\x05\x1B\u01AC\n\x1B\x03\x1B\x03\x1B\x05\x1B\u01B0\n\x1B\x03\x1C\x03\x1C" +
		"\x05\x1C\u01B4\n\x1C\x03\x1C\x05\x1C\u01B7\n\x1C\x03\x1C\x03\x1C\x03\x1C" +
		"\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x05\x1E\u01C2\n\x1E\x03" +
		"\x1F\x03\x1F\x05\x1F\u01C6\n\x1F\x03 \x05 \u01C9\n \x03 \x05 \u01CC\n" +
		" \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x05 \u01D7\n \x05 \u01D9" +
		"\n \x05 \u01DB\n \x03!\x03!\x05!\u01DF\n!\x03!\x03!\x03\"\x03\"\x03#\x03" +
		"#\x03$\x03$\x03$\x05$\u01EA\n$\x03%\x03%\x05%\u01EE\n%\x03&\x03&\x03\'" +
		"\x05\'\u01F3\n\'\x03\'\x03\'\x03(\x03(\x03(\x05(\u01FA\n(\x03)\x03)\x03" +
		")\x05)\u01FF\n)\x03*\x03*\x03+\x03+\x03+\x05+\u0206\n+\x03,\x03,\x03-" +
		"\x03-\x03.\x03.\x03.\x03.\x05.\u0210\n.\x03/\x03/\x03/\x05/\u0215\n/\x03" +
		"0\x030\x030\x030\x070\u021B\n0\f0\x0E0\u021E\v0\x030\x050\u0221\n0\x03" +
		"0\x030\x031\x031\x031\x031\x071\u0229\n1\f1\x0E1\u022C\v1\x031\x031\x03" +
		"1\x032\x032\x032\x032\x033\x033\x053\u0237\n3\x033\x053\u023A\n3\x034" +
		"\x034\x034\x054\u023F\n4\x035\x035\x035\x035\x036\x036\x036\x036\x076" +
		"\u0249\n6\f6\x0E6\u024C\v6\x036\x036\x036\x036\x056\u0252\n6\x056\u0254" +
		"\n6\x037\x037\x057\u0258\n7\x038\x038\x038\x058\u025D\n8\x039\x039\x03" +
		"9\x039\x059\u0263\n9\x03:\x03:\x03:\x03:\x03;\x03;\x03;\x03;\x03;\x03" +
		";\x03;\x03;\x05;\u0271\n;\x03;\x03;\x03;\x03<\x03<\x03<\x05<\u0279\n<" +
		"\x03=\x03=\x03=\x03>\x05>\u027F\n>\x03>\x03>\x03>\x03>\x05>\u0285\n>\x03" +
		"?\x03?\x03@\x03@\x03A\x03A\x07A\u028D\nA\fA\x0EA\u0290\vA\x03B\x05B\u0293" +
		"\nB\x03B\x03B\x03B\x03B\x03B\x07B\u029A\nB\fB\x0EB\u029D\vB\x05B\u029F" +
		"\nB\x03B\x03B\x03C\x03C\x03D\x03D\x03D\x02\x02\x02E\x02\x02\x04\x02\x06" +
		"\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
		"\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x02" +
		"2\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02" +
		"N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02" +
		"j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02" +
		"\x84\x02\x86\x02\x02\x10\x05\x02\f\f\x0E\x0E\x16\x16\x04\x02<<??\x03\x02" +
		"\x1C\x1D\x03\x02\v\x16\x06\x02\x18\x18\x1C\x1D((MM\x04\x02:<??\x03\x02" +
		"mq\x03\x02\x17\x1D\x04\x02\x1E#((\x03\x02)/\x03\x02IJ\x03\x02]^\x03\x02" +
		"_h\x03\x02ik\x02\u02D8\x02\x96\x03\x02\x02\x02\x04\x98\x03\x02\x02\x02" +
		"\x06\xA9\x03\x02\x02\x02\b\xAB\x03\x02\x02\x02\n\xC4\x03\x02\x02\x02\f" +
		"\xC9\x03\x02\x02\x02\x0E\xDA\x03\x02\x02\x02\x10\xEB\x03\x02\x02\x02\x12" +
		"\u0105\x03\x02\x02\x02\x14\u011F\x03\x02\x02\x02\x16\u012E\x03\x02\x02" +
		"\x02\x18\u0133\x03\x02\x02\x02\x1A\u013C\x03\x02\x02\x02\x1C\u0148\x03" +
		"\x02\x02\x02\x1E\u014A\x03\x02\x02\x02 \u0156\x03\x02\x02\x02\"\u015B" +
		"\x03\x02\x02\x02$\u015D\x03\x02\x02\x02&\u0173\x03\x02\x02\x02(\u0175" +
		"\x03\x02\x02\x02*\u0189\x03\x02\x02\x02,\u018B\x03\x02\x02\x02.\u018E" +
		"\x03\x02\x02\x020\u0195\x03\x02\x02\x022\u019C\x03\x02\x02\x024\u01A7" +
		"\x03\x02\x02\x026\u01B6\x03\x02\x02\x028\u01BD\x03\x02\x02\x02:\u01BF" +
		"\x03\x02\x02\x02<\u01C5\x03\x02\x02\x02>\u01C8\x03\x02\x02\x02@\u01DC" +
		"\x03\x02\x02\x02B\u01E2\x03\x02\x02\x02D\u01E4\x03\x02\x02\x02F\u01E9" +
		"\x03\x02\x02\x02H\u01ED\x03\x02\x02\x02J\u01EF\x03\x02\x02\x02L\u01F2" +
		"\x03\x02\x02\x02N\u01F9\x03\x02\x02\x02P\u01FE\x03\x02\x02\x02R\u0200" +
		"\x03\x02\x02\x02T\u0205\x03\x02\x02\x02V\u0207\x03\x02\x02\x02X\u0209" +
		"\x03\x02\x02\x02Z\u020B\x03\x02\x02\x02\\\u0211\x03\x02\x02\x02^\u0216" +
		"\x03\x02\x02\x02`\u0224\x03\x02\x02\x02b\u0230\x03\x02\x02\x02d\u0236" +
		"\x03\x02\x02\x02f\u023B\x03\x02\x02\x02h\u0240\x03\x02\x02\x02j\u0253" +
		"\x03\x02\x02\x02l\u0255\x03\x02\x02\x02n\u025C\x03\x02\x02\x02p\u025E" +
		"\x03\x02\x02\x02r\u0264\x03\x02\x02\x02t\u0268\x03\x02\x02\x02v\u0278" +
		"\x03\x02\x02\x02x\u027A\x03\x02\x02\x02z\u027E\x03\x02\x02\x02|\u0286" +
		"\x03\x02\x02\x02~\u0288\x03\x02\x02\x02\x80\u028A\x03\x02\x02\x02\x82" +
		"\u0292\x03\x02\x02\x02\x84\u02A2\x03\x02\x02\x02\x86\u02A4\x03\x02\x02" +
		"\x02\x88\x97\x05\x04\x03\x02\x89\x8B\x05\x84C\x02\x8A\x89\x03\x02\x02" +
		"\x02\x8B\x8E\x03\x02\x02\x02\x8C\x8A\x03\x02\x02\x02\x8C\x8D\x03\x02\x02" +
		"\x02\x8D\x92\x03\x02\x02\x02\x8E\x8C\x03\x02\x02\x02\x8F\x91\x05\x06\x04" +
		"\x02\x90\x8F\x03\x02\x02\x02\x91\x94\x03\x02\x02\x02\x92\x90\x03\x02\x02" +
		"\x02\x92\x93\x03\x02\x02\x02\x93\x95\x03\x02\x02\x02\x94\x92\x03\x02\x02" +
		"\x02\x95\x97\x07\x02\x02\x03\x96\x88\x03\x02\x02\x02\x96\x8C\x03\x02\x02" +
		"\x02\x97\x03\x03\x02\x02\x02\x98\x99\x07l\x02\x02\x99\x9A\x07%\x02\x02" +
		"\x9A\x05\x03\x02\x02\x02\x9B\x9D\x05\x84C\x02\x9C\x9B\x03\x02\x02\x02" +
		"\x9D\xA0\x03\x02\x02\x02\x9E\x9C\x03\x02\x02\x02\x9E\x9F\x03\x02\x02\x02" +
		"\x9F\xA6\x03\x02\x02\x02\xA0\x9E\x03\x02\x02\x02\xA1\xA7\x05\x10\t\x02" +
		"\xA2\xA7\x05\x12\n\x02\xA3\xA4\x05\x0E\b\x02\xA4\xA5\x07\n\x02\x02\xA5" +
		"\xA7\x03\x02\x02\x02\xA6\xA1\x03\x02\x02\x02\xA6\xA2\x03\x02\x02\x02\xA6" +
		"\xA3\x03\x02\x02\x02\xA7\xAA\x03\x02\x02\x02\xA8\xAA\x05\b\x05\x02\xA9" +
		"\x9E\x03\x02\x02\x02\xA9\xA8\x03\x02\x02\x02\xAA\x07\x03\x02\x02\x02\xAB" +
		"\xAD\x079\x02\x02\xAC\xAE\x07l\x02\x02\xAD\xAC\x03\x02\x02\x02\xAD\xAE" +
		"\x03\x02\x02\x02\xAE\xB0\x03\x02\x02\x02\xAF\xB1\x05\f\x07\x02\xB0\xAF" +
		"\x03\x02\x02\x02\xB0\xB1\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2\xBE" +
		"\x07\x05\x02\x02\xB3\xB8\x05\n\x06\x02\xB4\xB5\x07\t\x02\x02\xB5\xB7\x05" +
		"\n\x06\x02\xB6\xB4\x03\x02\x02\x02\xB7\xBA\x03\x02\x02\x02\xB8\xB6\x03" +
		"\x02\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9\xBC\x03\x02\x02\x02\xBA\xB8\x03" +
		"\x02\x02\x02\xBB\xBD\x07\t\x02\x02\xBC\xBB\x03\x02\x02\x02\xBC\xBD\x03" +
		"\x02\x02\x02\xBD\xBF\x03\x02\x02\x02\xBE\xB3\x03\x02\x02\x02\xBE\xBF\x03" +
		"\x02\x02\x02\xBF\xC0\x03\x02\x02\x02\xC0\xC2\x07\x06\x02\x02\xC1\xC3\x07" +
		"\n\x02\x02\xC2\xC1\x03\x02\x02\x02\xC2\xC3\x03\x02\x02\x02\xC3\t\x03\x02" +
		"\x02\x02\xC4\xC7\x05\x18\r\x02\xC5\xC6\x07\v\x02\x02\xC6\xC8\x052\x1A" +
		"\x02\xC7\xC5\x03\x02\x02\x02\xC7\xC8\x03\x02\x02\x02\xC8\v\x03\x02\x02" +
		"\x02\xC9\xCA\x07\x03\x02\x02\xCA\xCB\t\x02\x02\x02\xCB\xCC\x07o\x02\x02" +
		"\xCC\xCD\x07\x04\x02\x02\xCD\r\x03\x02\x02\x02\xCE\xD2\x078\x02\x02\xCF" +
		"\xD1\x05D#\x02\xD0\xCF\x03\x02\x02\x02\xD1\xD4\x03\x02\x02\x02\xD2\xD0" +
		"\x03\x02\x02\x02\xD2\xD3\x03\x02\x02\x02\xD3\xDB\x03\x02\x02\x02\xD4\xD2" +
		"\x03\x02\x02\x02\xD5\xD7\x05D#\x02\xD6\xD5\x03\x02\x02\x02\xD7\xD8\x03" +
		"\x02\x02\x02\xD8\xD6\x03\x02\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9\xDB\x03" +
		"\x02\x02\x02\xDA\xCE\x03\x02\x02\x02\xDA\xD6\x03\x02\x02\x02\xDB\xDE\x03" +
		"\x02\x02\x02\xDC\xDF\x05\x18\r\x02\xDD\xDF\x05$\x13\x02\xDE\xDC\x03\x02" +
		"\x02\x02\xDE\xDD\x03\x02\x02\x02\xDF\xE7\x03\x02\x02\x02\xE0\xE3\x07\t" +
		"\x02\x02\xE1\xE4\x05\x18\r\x02\xE2\xE4\x05$\x13\x02\xE3\xE1\x03\x02\x02" +
		"\x02\xE3\xE2\x03\x02\x02\x02\xE4\xE6\x03\x02\x02\x02\xE5\xE0\x03\x02\x02" +
		"\x02\xE6\xE9\x03\x02\x02\x02\xE7\xE5\x03\x02\x02\x02\xE7\xE8\x03\x02\x02" +
		"\x02\xE8\x0F\x03\x02\x02\x02\xE9\xE7\x03\x02\x02\x02\xEA\xEC\x05\x1C\x0F" +
		"\x02\xEB\xEA\x03\x02\x02\x02\xEB\xEC\x03\x02\x02\x02\xEC\xEE\x03\x02\x02" +
		"\x02\xED\xEF\x05\x16\f\x02\xEE\xED\x03\x02\x02\x02\xEE\xEF\x03\x02\x02" +
		"\x02\xEF\xF0\x03\x02\x02\x02\xF0\xF1\x07l\x02\x02\xF1\xFD\x07\x03\x02" +
		"\x02\xF2\xF7\x05> \x02\xF3\xF4\x07\t\x02\x02\xF4\xF6\x05> \x02\xF5\xF3" +
		"\x03\x02\x02\x02\xF6\xF9\x03\x02\x02\x02\xF7\xF5\x03\x02\x02\x02\xF7\xF8" +
		"\x03\x02\x02\x02\xF8\xFB\x03\x02\x02\x02\xF9\xF7\x03\x02\x02\x02\xFA\xFC" +
		"\x05@!\x02\xFB\xFA\x03\x02\x02\x02\xFB\xFC\x03\x02\x02\x02\xFC\xFE\x03" +
		"\x02\x02\x02\xFD\xF2\x03\x02\x02\x02\xFD\xFE\x03\x02\x02\x02\xFE\xFF\x03" +
		"\x02\x02\x02\xFF\u0103\x07\x04\x02\x02\u0100\u0104\x07\n\x02\x02\u0101" +
		"\u0104\x05j6\x02\u0102\u0104\x05\x14\v\x02\u0103\u0100\x03\x02\x02\x02" +
		"\u0103\u0101\x03\x02\x02\x02\u0103\u0102\x03\x02\x02\x02\u0104\x11\x03" +
		"\x02\x02\x02\u0105\u0107\x05\x1C\x0F\x02\u0106\u0108\x05\x16\f\x02\u0107" +
		"\u0106\x03\x02\x02\x02\u0107\u0108\x03\x02\x02\x02\u0108\u0109\x03\x02" +
		"\x02\x02\u0109\u010A\x07@\x02\x02\u010A\u010B\x05P)\x02\u010B\u0117\x07" +
		"\x03\x02\x02\u010C\u0111\x05> \x02\u010D\u010E\x07\t\x02\x02\u010E\u0110" +
		"\x05> \x02\u010F\u010D\x03\x02\x02\x02\u0110\u0113\x03\x02\x02\x02\u0111" +
		"\u010F\x03\x02\x02\x02\u0111\u0112\x03\x02\x02\x02\u0112\u0115\x03\x02" +
		"\x02\x02\u0113\u0111\x03\x02\x02\x02\u0114\u0116\x05@!\x02\u0115\u0114" +
		"\x03\x02\x02\x02\u0115\u0116\x03\x02\x02\x02\u0116\u0118\x03\x02\x02\x02" +
		"\u0117\u010C\x03\x02\x02\x02\u0117\u0118\x03\x02\x02\x02\u0118\u0119\x03" +
		"\x02\x02\x02\u0119\u011D\x07\x04\x02\x02\u011A\u011E\x07\n\x02\x02\u011B" +
		"\u011E\x05j6\x02\u011C\u011E\x05\x14\v\x02\u011D\u011A\x03\x02\x02\x02" +
		"\u011D\u011B\x03\x02\x02\x02\u011D\u011C\x03\x02\x02\x02\u011E\x13\x03" +
		"\x02\x02\x02\u011F\u0120\x07\v\x02\x02\u0120\u0121\x07l\x02\x02\u0121" +
		"\u0122\x07\n\x02\x02\u0122\x15\x03\x02\x02\x02\u0123\u012F\x07l\x02\x02" +
		"\u0124\u0125\x07\x05\x02\x02\u0125\u012A\x07l\x02\x02\u0126\u0127\x07" +
		"\t\x02\x02\u0127\u0129\x07l\x02\x02\u0128\u0126\x03\x02\x02\x02\u0129" +
		"\u012C\x03\x02\x02\x02\u012A\u0128\x03\x02\x02\x02\u012A\u012B\x03\x02" +
		"\x02\x02\u012B\u012D\x03\x02\x02\x02\u012C\u012A\x03\x02\x02\x02\u012D" +
		"\u012F\x07\x06\x02\x02\u012E\u0123\x03\x02\x02\x02\u012E\u0124\x03\x02" +
		"\x02\x02\u012F\u0130\x03\x02\x02\x02\u0130\u0131\x07%\x02\x02\u0131\x17" +
		"\x03\x02\x02\x02\u0132\u0134\x05\x16\f\x02\u0133\u0132\x03\x02\x02\x02" +
		"\u0133\u0134\x03\x02\x02\x02\u0134\u0135\x03\x02\x02\x02\u0135\u0139\x07" +
		"l\x02\x02\u0136\u0138\x05\x1A\x0E\x02\u0137\u0136\x03\x02\x02\x02\u0138" +
		"\u013B\x03\x02\x02\x02\u0139\u0137\x03\x02\x02\x02\u0139\u013A\x03\x02" +
		"\x02\x02\u013A\x19\x03\x02\x02\x02\u013B\u0139\x03\x02\x02\x02\u013C\u0141" +
		"\x07\x07\x02\x02\u013D\u013F\x052\x1A\x02\u013E\u0140\x07K\x02\x02\u013F" +
		"\u013E\x03\x02\x02\x02\u013F\u0140\x03\x02\x02\x02\u0140\u0142\x03\x02" +
		"\x02\x02\u0141\u013D\x03\x02\x02\x02\u0141\u0142\x03\x02\x02\x02\u0142" +
		"\u0143\x03\x02\x02\x02\u0143\u0144\x07\b\x02\x02\u0144\x1B\x03\x02\x02" +
		"\x02\u0145\u0149\x05\x1E\x10\x02\u0146\u0149\x07=\x02\x02\u0147\u0149" +
		"\x07>\x02\x02\u0148\u0145\x03\x02\x02\x02\u0148\u0146\x03\x02\x02\x02" +
		"\u0148\u0147\x03\x02\x02\x02\u0149\x1D\x03\x02\x02\x02\u014A\u014B\t\x03" +
		"\x02\x02\u014B\x1F\x03\x02\x02\x02\u014C\u0152\x05\x0E\b\x02\u014D\u0152" +
		"\x05$\x13\x02\u014E\u0152\x05\x82B\x02\u014F\u0152\x05l7\x02\u0150\u0152" +
		"\x05&\x14\x02\u0151\u014C\x03\x02\x02\x02\u0151\u014D\x03\x02\x02\x02" +
		"\u0151\u014E\x03\x02\x02\x02\u0151\u014F\x03\x02\x02\x02\u0151\u0150\x03" +
		"\x02\x02\x02\u0152\u0153\x03\x02\x02\x02\u0153\u0154\x07\n\x02\x02\u0154" +
		"\u0157\x03\x02\x02\x02\u0155\u0157\x05\"\x12\x02\u0156\u0151\x03\x02\x02" +
		"\x02\u0156\u0155\x03\x02\x02\x02\u0157!\x03\x02\x02\x02\u0158\u015C\x05" +
		"Z.\x02\u0159\u015C\x05n8\x02\u015A\u015C\x05^0\x02\u015B\u0158\x03\x02" +
		"\x02\x02\u015B\u0159\x03\x02\x02\x02\u015B\u015A\x03\x02\x02\x02\u015C" +
		"#\x03\x02\x02\x02\u015D\u015E\x05\x18\r\x02\u015E\u0161\x05,\x17\x02\u015F" +
		"\u0162\x052\x1A\x02\u0160\u0162\x05(\x15\x02\u0161\u015F\x03\x02\x02\x02" +
		"\u0161\u0160\x03\x02\x02\x02\u0162\u016A\x03\x02\x02\x02\u0163\u0166\x05" +
		",\x17\x02\u0164\u0167\x052\x1A\x02\u0165\u0167\x05(\x15\x02\u0166\u0164" +
		"\x03\x02\x02\x02\u0166\u0165\x03\x02\x02\x02\u0167\u0169\x03\x02\x02\x02" +
		"\u0168\u0163\x03\x02\x02\x02\u0169\u016C\x03\x02\x02\x02\u016A\u0168\x03" +
		"\x02\x02\x02\u016A\u016B\x03\x02\x02\x02\u016B%\x03\x02\x02\x02\u016C" +
		"\u016A\x03\x02\x02\x02\u016D\u016E\t\x04\x02\x02\u016E\u0174\x05\x18\r" +
		"\x02\u016F\u0170\x05\x18\r\x02\u0170\u0171\t\x04\x02\x02\u0171\u0174\x03" +
		"\x02\x02\x02\u0172\u0174\x05\x18\r\x02\u0173\u016D\x03\x02\x02\x02\u0173" +
		"\u016F\x03\x02\x02\x02\u0173\u0172\x03\x02\x02\x02\u0174\'\x03\x02\x02" +
		"\x02\u0175\u0176\x07\x05\x02\x02\u0176\u017B\x05*\x16\x02\u0177\u0178" +
		"\x07\t\x02\x02\u0178\u017A\x05*\x16\x02\u0179\u0177\x03\x02\x02\x02\u017A" +
		"\u017D\x03\x02\x02\x02\u017B\u0179\x03\x02\x02\x02\u017B\u017C\x03\x02" +
		"\x02\x02\u017C\u017E\x03\x02\x02\x02\u017D\u017B\x03\x02\x02\x02\u017E" +
		"\u017F\x07\x06\x02\x02\u017F)\x03\x02\x02\x02\u0180\u0182\x05\x16\f\x02" +
		"\u0181\u0180\x03\x02\x02\x02\u0181\u0182\x03\x02\x02\x02\u0182\u0186\x03" +
		"\x02\x02\x02\u0183\u0187\x07l\x02\x02\u0184\u0187\x05L\'\x02\u0185\u0187" +
		"\x05\x80A\x02\u0186\u0183\x03\x02\x02\x02\u0186\u0184\x03\x02\x02\x02" +
		"\u0186\u0185\x03\x02\x02\x02\u0187\u018A\x03\x02\x02\x02\u0188\u018A\x05" +
		"(\x15\x02\u0189\u0181\x03\x02\x02\x02\u0189\u0188\x03\x02\x02\x02\u018A" +
		"+\x03\x02\x02\x02\u018B\u018C\t\x05\x02\x02\u018C-\x03\x02\x02\x02\u018D" +
		"\u018F\x05\x16\f\x02\u018E\u018D\x03\x02\x02\x02\u018E\u018F\x03\x02\x02" +
		"\x02\u018F\u0190\x03\x02\x02\x02\u0190\u0191\x07\x03\x02\x02\u0191\u0192" +
		"\x052\x1A\x02\u0192\u0193\x07\x04\x02\x02\u0193/\x03\x02\x02\x02\u0194" +
		"\u0196\x05\x16\f\x02\u0195\u0194\x03\x02\x02\x02\u0195\u0196\x03\x02\x02" +
		"\x02\u0196\u0197\x03\x02\x02\x02\u0197\u0198\x07\x03\x02\x02\u0198\u0199" +
		"\x054\x1B\x02\u0199\u019A\x07\x04\x02\x02\u019A1\x03\x02\x02\x02\u019B" +
		"\u019D\x058\x1D\x02\u019C\u019B\x03\x02\x02\x02\u019C\u019D\x03\x02\x02" +
		"\x02\u019D\u01A4\x03\x02\x02\x02\u019E\u01A0\x05F$\x02\u019F\u01A1\x05" +
		":\x1E\x02\u01A0\u019F\x03\x02\x02\x02\u01A0\u01A1\x03\x02\x02\x02\u01A1" +
		"\u01A5\x03\x02\x02\x02\u01A2\u01A5\x05.\x18\x02\u01A3\u01A5\x056\x1C\x02" +
		"\u01A4\u019E\x03\x02\x02\x02\u01A4\u01A2\x03\x02\x02\x02\u01A4\u01A3\x03" +
		"\x02\x02\x02\u01A53\x03\x02\x02\x02\u01A6\u01A8\x058\x1D\x02\u01A7\u01A6" +
		"\x03\x02\x02\x02\u01A7\u01A8\x03\x02\x02\x02\u01A8\u01AF\x03\x02\x02\x02" +
		"\u01A9\u01AB\x05<\x1F\x02\u01AA\u01AC\x05:\x1E\x02\u01AB\u01AA\x03\x02" +
		"\x02\x02\u01AB\u01AC\x03\x02\x02\x02\u01AC\u01B0\x03\x02\x02\x02\u01AD" +
		"\u01B0\x050\x19\x02\u01AE\u01B0\x05(\x15\x02\u01AF\u01A9\x03\x02\x02\x02" +
		"\u01AF\u01AD\x03\x02\x02\x02\u01AF\u01AE\x03\x02\x02\x02\u01B05\x03\x02" +
		"\x02\x02\u01B1\u01B3\x05F$\x02\u01B2\u01B4\x05:\x1E\x02\u01B3\u01B2\x03" +
		"\x02\x02\x02\u01B3\u01B4\x03\x02\x02\x02\u01B4\u01B7\x03\x02\x02\x02\u01B5" +
		"\u01B7\x05.\x18\x02\u01B6\u01B1\x03\x02\x02\x02\u01B6\u01B5\x03\x02\x02" +
		"\x02\u01B7\u01B8\x03\x02\x02\x02\u01B8\u01B9\x07$\x02\x02\u01B9\u01BA" +
		"\x052\x1A\x02\u01BA\u01BB\x07%\x02\x02\u01BB\u01BC\x052\x1A\x02\u01BC" +
		"7\x03\x02\x02\x02\u01BD\u01BE\t\x06\x02\x02\u01BE9\x03\x02\x02\x02\u01BF" +
		"\u01C1\x05N(\x02\u01C0\u01C2\x052\x1A\x02\u01C1\u01C0\x03\x02\x02\x02" +
		"\u01C1\u01C2\x03\x02\x02\x02\u01C2;\x03\x02\x02\x02\u01C3\u01C6\x05z>" +
		"\x02\u01C4\u01C6\x05\x18\r\x02\u01C5\u01C3\x03\x02\x02\x02\u01C5\u01C4" +
		"\x03\x02\x02\x02\u01C6=\x03\x02\x02\x02\u01C7\u01C9\x07:\x02\x02\u01C8" +
		"\u01C7\x03\x02\x02\x02\u01C8\u01C9\x03\x02\x02\x02\u01C9\u01CB\x03\x02" +
		"\x02\x02\u01CA\u01CC\x05B\"\x02\u01CB\u01CA\x03\x02\x02\x02\u01CB\u01CC" +
		"\x03\x02\x02\x02\u01CC\u01CD\x03\x02\x02\x02\u01CD\u01DA\x05\x18\r\x02" +
		"\u01CE\u01D8\x07\v\x02\x02\u01CF\u01D9\x054\x1B\x02\u01D0\u01D6\x05J&" +
		"\x02\u01D1\u01D7\x05\x18\r\x02\u01D2\u01D3\x07\x03\x02\x02\u01D3\u01D4" +
		"\x05\x18\r\x02\u01D4\u01D5\x07\x04\x02\x02\u01D5\u01D7\x03\x02\x02\x02" +
		"\u01D6\u01D1\x03\x02\x02\x02\u01D6\u01D2\x03\x02\x02\x02\u01D7\u01D9\x03" +
		"\x02\x02\x02\u01D8\u01CF\x03\x02\x02\x02\u01D8\u01D0\x03\x02\x02\x02\u01D9" +
		"\u01DB\x03\x02\x02\x02\u01DA\u01CE\x03\x02\x02\x02\u01DA\u01DB\x03\x02" +
		"\x02\x02\u01DB?\x03\x02\x02\x02\u01DC\u01DE\x07\t\x02\x02\u01DD\u01DF" +
		"\x05\x16\f\x02\u01DE\u01DD\x03\x02\x02\x02\u01DE\u01DF\x03\x02\x02\x02" +
		"\u01DF\u01E0\x03\x02\x02\x02\u01E0\u01E1\x071\x02\x02\u01E1A\x03\x02\x02" +
		"\x02\u01E2\u01E3\x07)\x02\x02\u01E3C\x03\x02\x02\x02\u01E4\u01E5\t\x07" +
		"\x02\x02\u01E5E\x03\x02\x02\x02\u01E6\u01EA\x05<\x1F\x02\u01E7\u01EA\x05" +
		"\x82B\x02\u01E8\u01EA\x05.\x18\x02\u01E9\u01E6\x03\x02\x02\x02\u01E9\u01E7" +
		"\x03\x02\x02\x02\u01E9\u01E8\x03\x02\x02\x02\u01EAG\x03\x02\x02\x02\u01EB" +
		"\u01EE\x05<\x1F\x02\u01EC\u01EE\x050\x19\x02\u01ED\u01EB\x03\x02\x02\x02" +
		"\u01ED\u01EC\x03\x02\x02\x02\u01EEI\x03\x02\x02\x02\u01EF\u01F0\x07M\x02" +
		"\x02\u01F0K\x03\x02\x02\x02\u01F1\u01F3\x07\x18\x02\x02\u01F2\u01F1\x03" +
		"\x02\x02\x02\u01F2\u01F3\x03\x02\x02\x02\u01F3\u01F4\x03\x02\x02\x02\u01F4" +
		"\u01F5\t\b\x02\x02\u01F5M\x03\x02\x02\x02\u01F6\u01FA\x05R*\x02\u01F7" +
		"\u01FA\x05T+\x02\u01F8\u01FA\x05X-\x02\u01F9\u01F6\x03\x02\x02\x02\u01F9" +
		"\u01F7\x03\x02\x02\x02\u01F9\u01F8\x03\x02\x02\x02\u01FAO\x03\x02\x02" +
		"\x02\u01FB\u01FF\x05R*\x02\u01FC\u01FF\x05V,\x02\u01FD\u01FF\x07\v\x02" +
		"\x02\u01FE\u01FB\x03\x02\x02\x02\u01FE\u01FC\x03\x02\x02\x02\u01FE\u01FD" +
		"\x03\x02\x02\x02\u01FFQ\x03\x02\x02\x02\u0200\u0201\t\t\x02\x02\u0201" +
		"S\x03\x02\x02\x02\u0202\u0206\x07&\x02\x02\u0203\u0206\x07\'\x02\x02\u0204" +
		"\u0206\x05V,\x02\u0205\u0202\x03\x02\x02\x02\u0205\u0203\x03\x02\x02\x02" +
		"\u0205\u0204\x03\x02\x02\x02\u0206U\x03\x02\x02\x02\u0207\u0208\t\n\x02" +
		"\x02\u0208W\x03\x02\x02\x02\u0209\u020A\t\v\x02\x02\u020AY\x03\x02\x02" +
		"\x02\u020B\u020C\x07A\x02\x02\u020C\u020D\x05h5\x02\u020D\u020F\x05j6" +
		"\x02\u020E\u0210\x05\\/\x02\u020F\u020E\x03\x02\x02\x02\u020F\u0210\x03" +
		"\x02\x02\x02\u0210[\x03\x02\x02\x02\u0211\u0214\x07B\x02\x02\u0212\u0215" +
		"\x05Z.\x02\u0213\u0215";
	private static readonly _serializedATNSegment1: string =
		"\x05j6\x02\u0214\u0212\x03\x02\x02\x02\u0214\u0213\x03\x02\x02\x02\u0215" +
		"]\x03\x02\x02\x02\u0216\u0217\x07C\x02\x02\u0217\u0218\x05h5\x02\u0218" +
		"\u021C\x07\x05\x02\x02\u0219\u021B\x05`1\x02\u021A\u0219\x03\x02\x02\x02" +
		"\u021B\u021E\x03\x02\x02\x02\u021C\u021A\x03\x02\x02\x02\u021C\u021D\x03" +
		"\x02\x02\x02\u021D\u0220\x03\x02\x02\x02\u021E\u021C\x03\x02\x02\x02\u021F" +
		"\u0221\x05b2\x02\u0220\u021F\x03\x02\x02\x02\u0220\u0221\x03\x02\x02\x02" +
		"\u0221\u0222\x03\x02\x02\x02\u0222\u0223\x07\x06\x02\x02\u0223_\x03\x02" +
		"\x02\x02\u0224\u0225\x07D\x02\x02\u0225\u022A\x05d3\x02\u0226\u0227\x07" +
		"\t\x02\x02\u0227\u0229\x05d3\x02\u0228\u0226\x03\x02\x02\x02\u0229\u022C" +
		"\x03\x02\x02\x02\u022A\u0228\x03\x02\x02\x02\u022A\u022B\x03\x02\x02\x02" +
		"\u022B\u022D\x03\x02\x02\x02\u022C\u022A\x03\x02\x02\x02\u022D\u022E\x07" +
		"%\x02\x02\u022E\u022F\x05j6\x02\u022Fa\x03\x02\x02\x02\u0230\u0231\x07" +
		"E\x02\x02\u0231\u0232\x07%\x02\x02\u0232\u0233\x05j6\x02\u0233c\x03\x02" +
		"\x02\x02\u0234\u0237\x07l\x02\x02\u0235\u0237\x05L\'\x02\u0236\u0234\x03" +
		"\x02\x02\x02\u0236\u0235\x03\x02\x02\x02\u0237\u0239\x03\x02\x02\x02\u0238" +
		"\u023A\x05f4\x02\u0239\u0238\x03\x02\x02\x02\u0239\u023A\x03\x02\x02\x02" +
		"\u023Ae\x03\x02\x02\x02\u023B\u023E\x070\x02\x02\u023C\u023F\x07l\x02" +
		"\x02\u023D\u023F\x05L\'\x02\u023E\u023C\x03\x02\x02\x02\u023E\u023D\x03" +
		"\x02\x02\x02\u023Fg\x03\x02\x02\x02\u0240\u0241\x07\x03\x02\x02\u0241" +
		"\u0242\x052\x1A\x02\u0242\u0243\x07\x04\x02\x02\u0243i\x03\x02\x02\x02" +
		"\u0244\u024A\x07\x05\x02\x02\u0245\u0249\x05 \x11\x02\u0246\u0249\x05" +
		"\x04\x03\x02\u0247\u0249\x05x=\x02\u0248\u0245\x03\x02\x02\x02\u0248\u0246" +
		"\x03\x02\x02\x02\u0248\u0247\x03\x02\x02\x02\u0249\u024C\x03\x02\x02\x02" +
		"\u024A\u0248\x03\x02\x02\x02\u024A\u024B\x03\x02\x02\x02\u024B\u024D\x03" +
		"\x02\x02\x02\u024C\u024A\x03\x02\x02\x02\u024D\u0254\x07\x06\x02\x02\u024E" +
		"\u0252\x05 \x11\x02\u024F\u0252\x05\x04\x03\x02\u0250\u0252\x05x=\x02" +
		"\u0251\u024E\x03\x02\x02\x02\u0251\u024F\x03\x02\x02\x02\u0251\u0250\x03" +
		"\x02\x02\x02\u0252\u0254\x03\x02\x02\x02\u0253\u0244\x03\x02\x02\x02\u0253" +
		"\u0251\x03\x02\x02\x02\u0254k\x03\x02\x02\x02\u0255\u0257\x077\x02\x02" +
		"\u0256\u0258\x052\x1A\x02\u0257\u0256\x03\x02\x02\x02\u0257\u0258\x03" +
		"\x02\x02\x02\u0258m\x03\x02\x02\x02\u0259\u025D\x05r:\x02\u025A\u025D" +
		"\x05t;\x02\u025B\u025D\x05p9\x02\u025C\u0259\x03\x02\x02\x02\u025C\u025A" +
		"\x03\x02\x02\x02\u025C\u025B\x03\x02\x02\x02\u025Do\x03\x02\x02\x02\u025E" +
		"\u025F\x07H\x02\x02\u025F\u0262\x05v<\x02\u0260\u0261\x07F\x02\x02\u0261" +
		"\u0263\x05h5\x02\u0262\u0260\x03\x02\x02\x02\u0262\u0263\x03\x02\x02\x02" +
		"\u0263q\x03\x02\x02\x02\u0264\u0265\x07F\x02\x02\u0265\u0266\x05h5\x02" +
		"\u0266\u0267\x05v<\x02\u0267s\x03\x02\x02\x02\u0268\u0269\x07G\x02\x02" +
		"\u0269\u026A\x07\x03\x02\x02\u026A\u026B\x05\x0E\b\x02\u026B\u026C\x07" +
		"\n\x02\x02\u026C\u026D\x052\x1A\x02\u026D\u0270\x07\n\x02\x02\u026E\u0271" +
		"\x052\x1A\x02\u026F\u0271\x05$\x13\x02\u0270\u026E\x03\x02\x02\x02\u0270" +
		"\u026F\x03\x02\x02\x02\u0271\u0272\x03\x02\x02\x02\u0272\u0273\x07\x04" +
		"\x02\x02\u0273\u0274\x05v<\x02\u0274u\x03\x02\x02\x02\u0275\u0279\x05" +
		"x=\x02\u0276\u0279\x05j6\x02\u0277\u0279\x05 \x11\x02\u0278\u0275\x03" +
		"\x02\x02\x02\u0278\u0276\x03\x02\x02\x02\u0278\u0277\x03\x02\x02\x02\u0279" +
		"w\x03\x02\x02\x02\u027A\u027B\t\f\x02\x02\u027B\u027C\x07\n\x02\x02\u027C" +
		"y\x03\x02\x02\x02\u027D\u027F\x05\x16\f\x02\u027E\u027D\x03\x02\x02\x02" +
		"\u027E\u027F\x03\x02\x02\x02\u027F\u0284\x03\x02\x02\x02\u0280\u0285\x05" +
		"\x80A\x02\u0281\u0285\x05L\'\x02\u0282\u0285\x05|?\x02\u0283\u0285\x05" +
		"~@\x02\u0284\u0280\x03\x02\x02\x02\u0284\u0281\x03\x02\x02\x02\u0284\u0282" +
		"\x03\x02\x02\x02\u0284\u0283\x03\x02\x02\x02\u0285{\x03\x02\x02\x02\u0286" +
		"\u0287\t\r\x02\x02\u0287}\x03\x02\x02\x02\u0288\u0289\t\x0E\x02\x02\u0289" +
		"\x7F\x03\x02\x02\x02\u028A\u028E\t\x0F\x02\x02\u028B\u028D\x05\x80A\x02" +
		"\u028C\u028B\x03\x02\x02\x02\u028D\u0290\x03\x02\x02\x02\u028E\u028C\x03" +
		"\x02\x02\x02\u028E\u028F\x03\x02\x02\x02\u028F\x81\x03\x02\x02\x02\u0290" +
		"\u028E\x03\x02\x02\x02\u0291\u0293\x05\x16\f\x02\u0292\u0291\x03\x02\x02" +
		"\x02\u0292\u0293\x03\x02\x02\x02\u0293\u0294\x03\x02\x02\x02\u0294\u0295" +
		"\x07l\x02\x02\u0295\u029E\x07\x03\x02\x02\u0296\u029B\x052\x1A\x02\u0297" +
		"\u0298\x07\t\x02\x02\u0298\u029A\x052\x1A\x02\u0299\u0297\x03\x02\x02" +
		"\x02\u029A\u029D\x03\x02\x02\x02\u029B\u0299\x03\x02\x02\x02\u029B\u029C" +
		"\x03\x02\x02\x02\u029C\u029F\x03\x02\x02\x02\u029D\u029B\x03\x02\x02\x02" +
		"\u029E\u0296\x03\x02\x02\x02\u029E\u029F\x03\x02\x02\x02\u029F\u02A0\x03" +
		"\x02\x02\x02\u02A0\u02A1\x07\x04\x02\x02\u02A1\x83\x03\x02\x02\x02\u02A2" +
		"\u02A3\x05\x86D\x02\u02A3\x85\x03\x02\x02\x02\u02A4\u02A5\x07t\x02\x02" +
		"\u02A5\x87\x03\x02\x02\x02a\x8C\x92\x96\x9E\xA6\xA9\xAD\xB0\xB8\xBC\xBE" +
		"\xC2\xC7\xD2\xD8\xDA\xDE\xE3\xE7\xEB\xEE\xF7\xFB\xFD\u0103\u0107\u0111" +
		"\u0115\u0117\u011D\u012A\u012E\u0133\u0139\u013F\u0141\u0148\u0151\u0156" +
		"\u015B\u0161\u0166\u016A\u0173\u017B\u0181\u0186\u0189\u018E\u0195\u019C" +
		"\u01A0\u01A4\u01A7\u01AB\u01AF\u01B3\u01B6\u01C1\u01C5\u01C8\u01CB\u01D6" +
		"\u01D8\u01DA\u01DE\u01E9\u01ED\u01F2\u01F9\u01FE\u0205\u020F\u0214\u021C" +
		"\u0220\u022A\u0236\u0239\u023E\u0248\u024A\u0251\u0253\u0257\u025C\u0262" +
		"\u0270\u0278\u027E\u0284\u028E\u0292\u029B\u029E";
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
	public INTEGER(): TerminalNode | undefined { return this.tryGetToken(pawnParser.INTEGER, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(pawnParser.FLOAT, 0); }
	public HEX(): TerminalNode | undefined { return this.tryGetToken(pawnParser.HEX, 0); }
	public RATIONAL(): TerminalNode | undefined { return this.tryGetToken(pawnParser.RATIONAL, 0); }
	public BINARY(): TerminalNode | undefined { return this.tryGetToken(pawnParser.BINARY, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(pawnParser.MINUS, 0); }
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
	public assigment(): AssigmentContext | undefined {
		return this.tryGetRuleContext(0, AssigmentContext);
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
	public cycleKeywords(): CycleKeywordsContext | undefined {
		return this.tryGetRuleContext(0, CycleKeywordsContext);
	}
	public codeBlock(): CodeBlockContext | undefined {
		return this.tryGetRuleContext(0, CodeBlockContext);
	}
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
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
	public predefinedConstants(): PredefinedConstantsContext | undefined {
		return this.tryGetRuleContext(0, PredefinedConstantsContext);
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


