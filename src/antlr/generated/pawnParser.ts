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
	public static readonly RULE_varDeclaration = 6;
	public static readonly RULE_functionDecl = 7;
	public static readonly RULE_operatorOverload = 8;
	public static readonly RULE_nativeAssigment = 9;
	public static readonly RULE_tag = 10;
	public static readonly RULE_variable = 11;
	public static readonly RULE_arrayIndex = 12;
	public static readonly RULE_funcDeclModif = 13;
	public static readonly RULE_funcModif = 14;
	public static readonly RULE_statement = 15;
	public static readonly RULE_compoundStatment = 16;
	public static readonly RULE_assert = 17;
	public static readonly RULE_exit = 18;
	public static readonly RULE_goto = 19;
	public static readonly RULE_sleep = 20;
	public static readonly RULE_ifStatement = 21;
	public static readonly RULE_elseStatement = 22;
	public static readonly RULE_return = 23;
	public static readonly RULE_condition = 24;
	public static readonly RULE_switch = 25;
	public static readonly RULE_case = 26;
	public static readonly RULE_default = 27;
	public static readonly RULE_case_list = 28;
	public static readonly RULE_range = 29;
	public static readonly RULE_assigment = 30;
	public static readonly RULE_varModification = 31;
	public static readonly RULE_arrayInit = 32;
	public static readonly RULE_arrayInitMember = 33;
	public static readonly RULE_assigments = 34;
	public static readonly RULE_grouping = 35;
	public static readonly RULE_constGrouping = 36;
	public static readonly RULE_constExpresion = 37;
	public static readonly RULE_preOperators = 38;
	public static readonly RULE_operation = 39;
	public static readonly RULE_operators = 40;
	public static readonly RULE_varOrLiteral = 41;
	public static readonly RULE_declParams = 42;
	public static readonly RULE_ellipse = 43;
	public static readonly RULE_reference = 44;
	public static readonly RULE_varModifires = 45;
	public static readonly RULE_constRValue = 46;
	public static readonly RULE_sizeof = 47;
	public static readonly RULE_number = 48;
	public static readonly RULE_float = 49;
	public static readonly RULE_integer = 50;
	public static readonly RULE_canBeOverloaded = 51;
	public static readonly RULE_arefmeticOperator = 52;
	public static readonly RULE_logicOperator = 53;
	public static readonly RULE_compareOperator = 54;
	public static readonly RULE_bitwiseOperator = 55;
	public static readonly RULE_cycles = 56;
	public static readonly RULE_do = 57;
	public static readonly RULE_while = 58;
	public static readonly RULE_for = 59;
	public static readonly RULE_forFirstExp = 60;
	public static readonly RULE_cycleKeywords = 61;
	public static readonly RULE_literal = 62;
	public static readonly RULE_bool_const = 63;
	public static readonly RULE_predefinedConstants = 64;
	public static readonly RULE_string = 65;
	public static readonly RULE_docs = 66;
	public static readonly RULE_docBlock = 67;
	public static readonly RULE_expresion = 68;
	public static readonly RULE_unarOperator = 69;
	public static readonly RULE_binarOperator = 70;
	public static readonly RULE_binarExpressionOperators = 71;
	public static readonly RULE_assigmentOperator = 72;
	public static readonly RULE_arrayIndexOperator = 73;
	public static readonly RULE_arrayCharOperator = 74;
	public static readonly RULE_functionCallOperator = 75;
	public static readonly RULE_tagOperator = 76;
	public static readonly RULE_definedOperator = 77;
	public static readonly RULE_sizeofOperator = 78;
	public static readonly RULE_stateOperator = 79;
	public static readonly RULE_tagofOperator = 80;
	public static readonly RULE_symbol = 81;
	public static readonly RULE_lvalue = 82;
	public static readonly RULE_postIncrement = 83;
	public static readonly RULE_preIncrement = 84;
	public static readonly RULE_postDecrement = 85;
	public static readonly RULE_preDecrement = 86;
	public static readonly RULE_complemen = 87;
	public static readonly RULE_chainedRelationalOperators = 88;
	public static readonly RULE_notOperator = 89;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"file", "processorLabel", "declaration", "enum", "enumMember", "enumIterator", 
		"varDeclaration", "functionDecl", "operatorOverload", "nativeAssigment", 
		"tag", "variable", "arrayIndex", "funcDeclModif", "funcModif", "statement", 
		"compoundStatment", "assert", "exit", "goto", "sleep", "ifStatement", 
		"elseStatement", "return", "condition", "switch", "case", "default", "case_list", 
		"range", "assigment", "varModification", "arrayInit", "arrayInitMember", 
		"assigments", "grouping", "constGrouping", "constExpresion", "preOperators", 
		"operation", "operators", "varOrLiteral", "declParams", "ellipse", "reference", 
		"varModifires", "constRValue", "sizeof", "number", "float", "integer", 
		"canBeOverloaded", "arefmeticOperator", "logicOperator", "compareOperator", 
		"bitwiseOperator", "cycles", "do", "while", "for", "forFirstExp", "cycleKeywords", 
		"literal", "bool_const", "predefinedConstants", "string", "docs", "docBlock", 
		"expresion", "unarOperator", "binarOperator", "binarExpressionOperators", 
		"assigmentOperator", "arrayIndexOperator", "arrayCharOperator", "functionCallOperator", 
		"tagOperator", "definedOperator", "sizeofOperator", "stateOperator", "tagofOperator", 
		"symbol", "lvalue", "postIncrement", "preIncrement", "postDecrement", 
		"preDecrement", "complemen", "chainedRelationalOperators", "notOperator",
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
			this.state = 194;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 180;
				this.processorLabel();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 184;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 181;
						this.docs();
						}
						}
					}
					this.state = 186;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
				}
				this.state = 190;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === pawnParser.CURLY_OPEN_BRACKET || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (pawnParser.NEW - 54)) | (1 << (pawnParser.ENUM - 54)) | (1 << (pawnParser.CONST - 54)) | (1 << (pawnParser.STATIC - 54)) | (1 << (pawnParser.STOCK - 54)) | (1 << (pawnParser.FORWARD - 54)) | (1 << (pawnParser.NATIVE - 54)) | (1 << (pawnParser.PUBLIC - 54)))) !== 0) || _la === pawnParser.IDENTIFIER || _la === pawnParser.DocBlock) {
					{
					{
					this.state = 187;
					this.declaration();
					}
					}
					this.state = 192;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				this.state = 193;
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
			this.state = 196;
			this.match(pawnParser.IDENTIFIER);
			this.state = 197;
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
			this.state = 213;
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
				this.state = 202;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === pawnParser.DocBlock) {
					{
					{
					this.state = 199;
					this.docs();
					}
					}
					this.state = 204;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 210;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
				case 1:
					{
					this.state = 205;
					this.functionDecl();
					}
					break;

				case 2:
					{
					this.state = 206;
					this.operatorOverload();
					}
					break;

				case 3:
					{
					this.state = 207;
					this.varDeclaration();
					this.state = 208;
					this.match(pawnParser.SEMI);
					}
					break;
				}
				}
				break;
			case pawnParser.ENUM:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 212;
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
			this.state = 215;
			this.match(pawnParser.ENUM);
			this.state = 217;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.IDENTIFIER) {
				{
				this.state = 216;
				this.match(pawnParser.IDENTIFIER);
				}
			}

			this.state = 220;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.OPEN_PARENTHESIS) {
				{
				this.state = 219;
				this.enumIterator();
				}
			}

			this.state = 222;
			this.match(pawnParser.CURLY_OPEN_BRACKET);
			this.state = 234;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.CURLY_OPEN_BRACKET || _la === pawnParser.IDENTIFIER) {
				{
				this.state = 223;
				this.enumMember();
				this.state = 228;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 224;
						this.match(pawnParser.COMA);
						this.state = 225;
						this.enumMember();
						}
						}
					}
					this.state = 230;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
				}
				this.state = 232;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === pawnParser.COMA) {
					{
					this.state = 231;
					this.match(pawnParser.COMA);
					}
				}

				}
			}

			this.state = 236;
			this.match(pawnParser.CURLY_CLOSE_BRACKET);
			this.state = 238;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.SEMI) {
				{
				this.state = 237;
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
			this.state = 240;
			this.variable();
			this.state = 243;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.ASSIGMENT) {
				{
				this.state = 241;
				this.match(pawnParser.ASSIGMENT);
				this.state = 242;
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
			this.state = 245;
			this.match(pawnParser.OPEN_PARENTHESIS);
			this.state = 246;
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
			this.state = 247;
			this.match(pawnParser.INTEGER);
			this.state = 248;
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
			this.state = 262;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.NEW:
				{
				this.state = 250;
				this.match(pawnParser.NEW);
				this.state = 254;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (pawnParser.CONST - 56)) | (1 << (pawnParser.STATIC - 56)) | (1 << (pawnParser.STOCK - 56)) | (1 << (pawnParser.PUBLIC - 56)))) !== 0)) {
					{
					{
					this.state = 251;
					this.varModifires();
					}
					}
					this.state = 256;
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
				this.state = 258;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 257;
					this.varModifires();
					}
					}
					this.state = 260;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (pawnParser.CONST - 56)) | (1 << (pawnParser.STATIC - 56)) | (1 << (pawnParser.STOCK - 56)) | (1 << (pawnParser.PUBLIC - 56)))) !== 0));
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 264;
			this.variable();
			this.state = 266;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.ASSIGMENT) {
				{
				this.state = 265;
				this.assigment();
				}
			}

			this.state = 275;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pawnParser.COMA) {
				{
				{
				this.state = 268;
				this.match(pawnParser.COMA);
				{
				this.state = 269;
				this.variable();
				this.state = 271;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === pawnParser.ASSIGMENT) {
					{
					this.state = 270;
					this.assigment();
					}
				}

				}
				}
				}
				this.state = 277;
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
			this.state = 279;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (pawnParser.STOCK - 58)) | (1 << (pawnParser.FORWARD - 58)) | (1 << (pawnParser.NATIVE - 58)) | (1 << (pawnParser.PUBLIC - 58)))) !== 0)) {
				{
				this.state = 278;
				this.funcDeclModif();
				}
			}

			this.state = 282;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				{
				this.state = 281;
				this.tag();
				}
				break;
			}
			this.state = 284;
			this.match(pawnParser.IDENTIFIER);
			this.state = 285;
			this.match(pawnParser.OPEN_PARENTHESIS);
			this.state = 297;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.CURLY_OPEN_BRACKET || _la === pawnParser.BIT_AND || _la === pawnParser.CONST || _la === pawnParser.IDENTIFIER) {
				{
				this.state = 286;
				this.declParams();
				this.state = 291;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 287;
						this.match(pawnParser.COMA);
						this.state = 288;
						this.declParams();
						}
						}
					}
					this.state = 293;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
				}
				this.state = 295;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === pawnParser.COMA) {
					{
					this.state = 294;
					this.ellipse();
					}
				}

				}
			}

			this.state = 299;
			this.match(pawnParser.CLOSE_PARENTHESIS);
			this.state = 303;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.SEMI:
				{
				this.state = 300;
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
				this.state = 301;
				this.statement();
				}
				break;
			case pawnParser.ASSIGMENT:
				{
				this.state = 302;
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
			this.state = 305;
			this.funcDeclModif();
			}
			this.state = 307;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.CURLY_OPEN_BRACKET || _la === pawnParser.IDENTIFIER) {
				{
				this.state = 306;
				this.tag();
				}
			}

			this.state = 309;
			this.match(pawnParser.OPERATOR);
			this.state = 310;
			this.canBeOverloaded();
			this.state = 311;
			this.match(pawnParser.OPEN_PARENTHESIS);
			this.state = 323;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.CURLY_OPEN_BRACKET || _la === pawnParser.BIT_AND || _la === pawnParser.CONST || _la === pawnParser.IDENTIFIER) {
				{
				this.state = 312;
				this.declParams();
				this.state = 317;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 313;
						this.match(pawnParser.COMA);
						this.state = 314;
						this.declParams();
						}
						}
					}
					this.state = 319;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
				}
				this.state = 321;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === pawnParser.COMA) {
					{
					this.state = 320;
					this.ellipse();
					}
				}

				}
			}

			this.state = 325;
			this.match(pawnParser.CLOSE_PARENTHESIS);
			this.state = 329;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.SEMI:
				{
				this.state = 326;
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
				this.state = 327;
				this.statement();
				}
				break;
			case pawnParser.ASSIGMENT:
				{
				this.state = 328;
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
			this.state = 331;
			this.match(pawnParser.ASSIGMENT);
			this.state = 332;
			this.match(pawnParser.IDENTIFIER);
			this.state = 333;
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
			this.state = 346;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.IDENTIFIER:
				{
				this.state = 335;
				this.match(pawnParser.IDENTIFIER);
				}
				break;
			case pawnParser.CURLY_OPEN_BRACKET:
				{
				{
				this.state = 336;
				this.match(pawnParser.CURLY_OPEN_BRACKET);
				this.state = 337;
				this.match(pawnParser.IDENTIFIER);
				this.state = 342;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === pawnParser.COMA) {
					{
					{
					this.state = 338;
					this.match(pawnParser.COMA);
					this.state = 339;
					this.match(pawnParser.IDENTIFIER);
					}
					}
					this.state = 344;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 345;
				this.match(pawnParser.CURLY_CLOSE_BRACKET);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 348;
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
			this.state = 351;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				{
				this.state = 350;
				this.tag();
				}
				break;
			}
			this.state = 353;
			this.match(pawnParser.IDENTIFIER);
			this.state = 357;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pawnParser.SQUARE_OPEN_BRACKET) {
				{
				{
				this.state = 354;
				this.arrayIndex();
				}
				}
				this.state = 359;
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
			this.state = 360;
			this.match(pawnParser.SQUARE_OPEN_BRACKET);
			this.state = 365;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.OPEN_PARENTHESIS) | (1 << pawnParser.CURLY_OPEN_BRACKET) | (1 << pawnParser.MINUS) | (1 << pawnParser.INCREMENTS) | (1 << pawnParser.DECREMENTS))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (pawnParser.NOT - 38)) | (1 << (pawnParser.BIT_COMPLEMEN - 38)) | (1 << (pawnParser.STATE - 38)))) !== 0) || ((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (pawnParser.DEFINED - 74)) | (1 << (pawnParser.SIZEOF - 74)) | (1 << (pawnParser.TAGOF - 74)) | (1 << (pawnParser.TRUE - 74)) | (1 << (pawnParser.FALSE - 74)) | (1 << (pawnParser.CELLBITS - 74)) | (1 << (pawnParser.CELLMAX - 74)) | (1 << (pawnParser.CELLMIN - 74)) | (1 << (pawnParser.CHARBITS - 74)) | (1 << (pawnParser.CHARMAX - 74)) | (1 << (pawnParser.CHARMIN - 74)) | (1 << (pawnParser.DEBUG - 74)) | (1 << (pawnParser.LINE - 74)) | (1 << (pawnParser.PAWN - 74)) | (1 << (pawnParser.UCHARMAX - 74)) | (1 << (pawnParser.SHARPSTRING - 74)) | (1 << (pawnParser.STRING - 74)) | (1 << (pawnParser.CHAR_STRING - 74)))) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (pawnParser.IDENTIFIER - 106)) | (1 << (pawnParser.BINARY - 106)) | (1 << (pawnParser.HEX - 106)) | (1 << (pawnParser.INTEGER - 106)) | (1 << (pawnParser.FLOAT - 106)) | (1 << (pawnParser.RATIONAL - 106)))) !== 0)) {
				{
				this.state = 361;
				this.expresion();
				this.state = 363;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === pawnParser.CHAR) {
					{
					this.state = 362;
					this.match(pawnParser.CHAR);
					}
				}

				}
			}

			this.state = 367;
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
			this.state = 372;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.STOCK:
			case pawnParser.PUBLIC:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 369;
				this.funcModif();
				}
				break;
			case pawnParser.FORWARD:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 370;
				this.match(pawnParser.FORWARD);
				}
				break;
			case pawnParser.NATIVE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 371;
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
			this.state = 374;
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
			this.state = 392;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 384;
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
					this.state = 376;
					this.expresion();
					}
					break;
				case pawnParser.ASSERT:
					{
					this.state = 377;
					this.assert();
					}
					break;
				case pawnParser.CONTINUE:
				case pawnParser.BREAK:
					{
					this.state = 378;
					this.cycleKeywords();
					}
					break;
				case pawnParser.EXIT:
					{
					this.state = 379;
					this.exit();
					}
					break;
				case pawnParser.GOTO:
					{
					this.state = 380;
					this.goto();
					}
					break;
				case pawnParser.SLEEP:
					{
					this.state = 381;
					this.sleep();
					}
					break;
				case pawnParser.RETURN:
					{
					this.state = 382;
					this.return();
					}
					break;
				case pawnParser.NEW:
				case pawnParser.CONST:
				case pawnParser.STATIC:
				case pawnParser.STOCK:
				case pawnParser.PUBLIC:
					{
					this.state = 383;
					this.varDeclaration();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 386;
				this.match(pawnParser.SEMI);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 388;
				this.compoundStatment();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 389;
				this.cycles();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 390;
				this.ifStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 391;
				this.switch();
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
	public compoundStatment(): CompoundStatmentContext {
		let _localctx: CompoundStatmentContext = new CompoundStatmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, pawnParser.RULE_compoundStatment);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 394;
			this.match(pawnParser.CURLY_OPEN_BRACKET);
			this.state = 398;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.OPEN_PARENTHESIS) | (1 << pawnParser.CURLY_OPEN_BRACKET) | (1 << pawnParser.MINUS) | (1 << pawnParser.INCREMENTS) | (1 << pawnParser.DECREMENTS))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (pawnParser.NOT - 38)) | (1 << (pawnParser.BIT_COMPLEMEN - 38)) | (1 << (pawnParser.ASSERT - 38)) | (1 << (pawnParser.EXIT - 38)) | (1 << (pawnParser.GOTO - 38)) | (1 << (pawnParser.SLEEP - 38)) | (1 << (pawnParser.STATE - 38)) | (1 << (pawnParser.RETURN - 38)) | (1 << (pawnParser.NEW - 38)) | (1 << (pawnParser.CONST - 38)) | (1 << (pawnParser.STATIC - 38)) | (1 << (pawnParser.STOCK - 38)) | (1 << (pawnParser.PUBLIC - 38)) | (1 << (pawnParser.IF - 38)) | (1 << (pawnParser.SWITCH - 38)) | (1 << (pawnParser.WHILE - 38)) | (1 << (pawnParser.FOR - 38)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (pawnParser.DO - 70)) | (1 << (pawnParser.CONTINUE - 70)) | (1 << (pawnParser.BREAK - 70)) | (1 << (pawnParser.DEFINED - 70)) | (1 << (pawnParser.SIZEOF - 70)) | (1 << (pawnParser.TAGOF - 70)) | (1 << (pawnParser.TRUE - 70)) | (1 << (pawnParser.FALSE - 70)) | (1 << (pawnParser.CELLBITS - 70)) | (1 << (pawnParser.CELLMAX - 70)) | (1 << (pawnParser.CELLMIN - 70)) | (1 << (pawnParser.CHARBITS - 70)) | (1 << (pawnParser.CHARMAX - 70)) | (1 << (pawnParser.CHARMIN - 70)) | (1 << (pawnParser.DEBUG - 70)) | (1 << (pawnParser.LINE - 70)) | (1 << (pawnParser.PAWN - 70)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (pawnParser.UCHARMAX - 102)) | (1 << (pawnParser.SHARPSTRING - 102)) | (1 << (pawnParser.STRING - 102)) | (1 << (pawnParser.CHAR_STRING - 102)) | (1 << (pawnParser.IDENTIFIER - 102)) | (1 << (pawnParser.BINARY - 102)) | (1 << (pawnParser.HEX - 102)) | (1 << (pawnParser.INTEGER - 102)) | (1 << (pawnParser.FLOAT - 102)) | (1 << (pawnParser.RATIONAL - 102)))) !== 0)) {
				{
				{
				this.state = 395;
				this.statement();
				}
				}
				this.state = 400;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 401;
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
		this.enterRule(_localctx, 34, pawnParser.RULE_assert);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 403;
			this.match(pawnParser.ASSERT);
			this.state = 404;
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
		this.enterRule(_localctx, 36, pawnParser.RULE_exit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 406;
			this.match(pawnParser.EXIT);
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
	public goto(): GotoContext {
		let _localctx: GotoContext = new GotoContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, pawnParser.RULE_goto);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 409;
			this.match(pawnParser.GOTO);
			this.state = 410;
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
		this.enterRule(_localctx, 40, pawnParser.RULE_sleep);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 412;
			this.match(pawnParser.SLEEP);
			this.state = 413;
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
		this.enterRule(_localctx, 42, pawnParser.RULE_ifStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 415;
			this.match(pawnParser.IF);
			this.state = 416;
			this.condition();
			this.state = 417;
			this.statement();
			this.state = 419;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				{
				this.state = 418;
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
		this.enterRule(_localctx, 44, pawnParser.RULE_elseStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 421;
			this.match(pawnParser.ELSE);
			this.state = 422;
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
		this.enterRule(_localctx, 46, pawnParser.RULE_return);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 424;
			this.match(pawnParser.RETURN);
			this.state = 426;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.OPEN_PARENTHESIS) | (1 << pawnParser.CURLY_OPEN_BRACKET) | (1 << pawnParser.MINUS) | (1 << pawnParser.INCREMENTS) | (1 << pawnParser.DECREMENTS))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (pawnParser.NOT - 38)) | (1 << (pawnParser.BIT_COMPLEMEN - 38)) | (1 << (pawnParser.STATE - 38)))) !== 0) || ((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (pawnParser.DEFINED - 74)) | (1 << (pawnParser.SIZEOF - 74)) | (1 << (pawnParser.TAGOF - 74)) | (1 << (pawnParser.TRUE - 74)) | (1 << (pawnParser.FALSE - 74)) | (1 << (pawnParser.CELLBITS - 74)) | (1 << (pawnParser.CELLMAX - 74)) | (1 << (pawnParser.CELLMIN - 74)) | (1 << (pawnParser.CHARBITS - 74)) | (1 << (pawnParser.CHARMAX - 74)) | (1 << (pawnParser.CHARMIN - 74)) | (1 << (pawnParser.DEBUG - 74)) | (1 << (pawnParser.LINE - 74)) | (1 << (pawnParser.PAWN - 74)) | (1 << (pawnParser.UCHARMAX - 74)) | (1 << (pawnParser.SHARPSTRING - 74)) | (1 << (pawnParser.STRING - 74)) | (1 << (pawnParser.CHAR_STRING - 74)))) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (pawnParser.IDENTIFIER - 106)) | (1 << (pawnParser.BINARY - 106)) | (1 << (pawnParser.HEX - 106)) | (1 << (pawnParser.INTEGER - 106)) | (1 << (pawnParser.FLOAT - 106)) | (1 << (pawnParser.RATIONAL - 106)))) !== 0)) {
				{
				this.state = 425;
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
		this.enterRule(_localctx, 48, pawnParser.RULE_condition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 428;
			this.match(pawnParser.OPEN_PARENTHESIS);
			this.state = 429;
			this.expresion();
			this.state = 430;
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
		this.enterRule(_localctx, 50, pawnParser.RULE_switch);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 432;
			this.match(pawnParser.SWITCH);
			this.state = 433;
			this.condition();
			this.state = 434;
			this.match(pawnParser.CURLY_OPEN_BRACKET);
			this.state = 438;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pawnParser.CASE) {
				{
				{
				this.state = 435;
				this.case();
				}
				}
				this.state = 440;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 442;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.DEFAULT) {
				{
				this.state = 441;
				this.default();
				}
			}

			this.state = 444;
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
		this.enterRule(_localctx, 52, pawnParser.RULE_case);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 446;
			this.match(pawnParser.CASE);
			this.state = 447;
			this.case_list();
			this.state = 452;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pawnParser.COMA) {
				{
				{
				this.state = 448;
				this.match(pawnParser.COMA);
				this.state = 449;
				this.case_list();
				}
				}
				this.state = 454;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 455;
			this.match(pawnParser.COLON);
			this.state = 456;
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
		this.enterRule(_localctx, 54, pawnParser.RULE_default);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 458;
			this.match(pawnParser.DEFAULT);
			this.state = 459;
			this.match(pawnParser.COLON);
			this.state = 460;
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
		this.enterRule(_localctx, 56, pawnParser.RULE_case_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 464;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.IDENTIFIER:
				{
				this.state = 462;
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
				this.state = 463;
				this.number();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 467;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.PERIOD) {
				{
				this.state = 466;
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
		this.enterRule(_localctx, 58, pawnParser.RULE_range);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 469;
			this.match(pawnParser.PERIOD);
			this.state = 472;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.IDENTIFIER:
				{
				this.state = 470;
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
				this.state = 471;
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
	public assigment(): AssigmentContext {
		let _localctx: AssigmentContext = new AssigmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, pawnParser.RULE_assigment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 474;
			this.match(pawnParser.ASSIGMENT);
			this.state = 477;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				{
				this.state = 475;
				this.expresion();
				}
				break;

			case 2:
				{
				this.state = 476;
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
	public varModification(): VarModificationContext {
		let _localctx: VarModificationContext = new VarModificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, pawnParser.RULE_varModification);
		let _la: number;
		try {
			this.state = 485;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 479;
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
				this.state = 480;
				this.variable();
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 481;
				this.variable();
				this.state = 482;
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
				this.state = 484;
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
		this.enterRule(_localctx, 64, pawnParser.RULE_arrayInit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 487;
			this.match(pawnParser.CURLY_OPEN_BRACKET);
			this.state = 488;
			this.arrayInitMember();
			this.state = 493;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pawnParser.COMA) {
				{
				{
				this.state = 489;
				this.match(pawnParser.COMA);
				this.state = 490;
				this.arrayInitMember();
				}
				}
				this.state = 495;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 496;
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
		try {
			this.state = 507;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 499;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
				case 1:
					{
					this.state = 498;
					this.tag();
					}
					break;
				}
				this.state = 504;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case pawnParser.IDENTIFIER:
					{
					this.state = 501;
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
					this.state = 502;
					this.number();
					}
					break;
				case pawnParser.SHARPSTRING:
				case pawnParser.STRING:
				case pawnParser.CHAR_STRING:
					{
					this.state = 503;
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
				this.state = 506;
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
			this.state = 509;
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
		this.enterRule(_localctx, 70, pawnParser.RULE_grouping);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 512;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.CURLY_OPEN_BRACKET || _la === pawnParser.IDENTIFIER) {
				{
				this.state = 511;
				this.tag();
				}
			}

			this.state = 514;
			this.match(pawnParser.OPEN_PARENTHESIS);
			this.state = 515;
			this.expresion();
			this.state = 516;
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
		this.enterRule(_localctx, 72, pawnParser.RULE_constGrouping);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 519;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.CURLY_OPEN_BRACKET || _la === pawnParser.IDENTIFIER) {
				{
				this.state = 518;
				this.tag();
				}
			}

			this.state = 521;
			this.match(pawnParser.OPEN_PARENTHESIS);
			this.state = 522;
			this.constExpresion();
			this.state = 523;
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
	public constExpresion(): ConstExpresionContext {
		let _localctx: ConstExpresionContext = new ConstExpresionContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, pawnParser.RULE_constExpresion);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 526;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 56, this._ctx) ) {
			case 1:
				{
				this.state = 525;
				this.preOperators();
				}
				break;
			}
			this.state = 534;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
			case 1:
				{
				this.state = 528;
				this.varOrLiteral();
				this.state = 530;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (pawnParser.PLUS - 21)) | (1 << (pawnParser.MINUS - 21)) | (1 << (pawnParser.MULTY - 21)) | (1 << (pawnParser.DIV - 21)) | (1 << (pawnParser.REMAINDE - 21)) | (1 << (pawnParser.INCREMENTS - 21)) | (1 << (pawnParser.DECREMENTS - 21)) | (1 << (pawnParser.EQUAL - 21)) | (1 << (pawnParser.NOTEQUAL - 21)) | (1 << (pawnParser.LESS - 21)) | (1 << (pawnParser.LARGER - 21)) | (1 << (pawnParser.LESSEQ - 21)) | (1 << (pawnParser.LARGEREQ - 21)) | (1 << (pawnParser.OR - 21)) | (1 << (pawnParser.AND - 21)) | (1 << (pawnParser.NOT - 21)) | (1 << (pawnParser.BIT_AND - 21)) | (1 << (pawnParser.BIT_OR - 21)) | (1 << (pawnParser.BIT_XOR - 21)) | (1 << (pawnParser.BIT_COMPLEMEN - 21)) | (1 << (pawnParser.BIT_RIGHT - 21)) | (1 << (pawnParser.BIT_LEFT - 21)) | (1 << (pawnParser.BIT_RIGHT_LOG - 21)))) !== 0)) {
					{
					this.state = 529;
					this.operation();
					}
				}

				}
				break;

			case 2:
				{
				this.state = 532;
				this.constGrouping();
				}
				break;

			case 3:
				{
				this.state = 533;
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
	public preOperators(): PreOperatorsContext {
		let _localctx: PreOperatorsContext = new PreOperatorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, pawnParser.RULE_preOperators);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 536;
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
		this.enterRule(_localctx, 78, pawnParser.RULE_operation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 538;
			_localctx._operator = this.operators();
			this.state = 540;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.OPEN_PARENTHESIS) | (1 << pawnParser.CURLY_OPEN_BRACKET) | (1 << pawnParser.MINUS) | (1 << pawnParser.INCREMENTS) | (1 << pawnParser.DECREMENTS))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (pawnParser.NOT - 38)) | (1 << (pawnParser.BIT_COMPLEMEN - 38)) | (1 << (pawnParser.STATE - 38)))) !== 0) || ((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (pawnParser.DEFINED - 74)) | (1 << (pawnParser.SIZEOF - 74)) | (1 << (pawnParser.TAGOF - 74)) | (1 << (pawnParser.TRUE - 74)) | (1 << (pawnParser.FALSE - 74)) | (1 << (pawnParser.CELLBITS - 74)) | (1 << (pawnParser.CELLMAX - 74)) | (1 << (pawnParser.CELLMIN - 74)) | (1 << (pawnParser.CHARBITS - 74)) | (1 << (pawnParser.CHARMAX - 74)) | (1 << (pawnParser.CHARMIN - 74)) | (1 << (pawnParser.DEBUG - 74)) | (1 << (pawnParser.LINE - 74)) | (1 << (pawnParser.PAWN - 74)) | (1 << (pawnParser.UCHARMAX - 74)) | (1 << (pawnParser.SHARPSTRING - 74)) | (1 << (pawnParser.STRING - 74)) | (1 << (pawnParser.CHAR_STRING - 74)))) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (pawnParser.IDENTIFIER - 106)) | (1 << (pawnParser.BINARY - 106)) | (1 << (pawnParser.HEX - 106)) | (1 << (pawnParser.INTEGER - 106)) | (1 << (pawnParser.FLOAT - 106)) | (1 << (pawnParser.RATIONAL - 106)))) !== 0)) {
				{
				this.state = 539;
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
	public operators(): OperatorsContext {
		let _localctx: OperatorsContext = new OperatorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, pawnParser.RULE_operators);
		try {
			this.state = 545;
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
				this.state = 542;
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
				this.state = 543;
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
				this.state = 544;
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
	public varOrLiteral(): VarOrLiteralContext {
		let _localctx: VarOrLiteralContext = new VarOrLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, pawnParser.RULE_varOrLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 549;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.MINUS:
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
				this.state = 547;
				this.literal();
				}
				break;
			case pawnParser.CURLY_OPEN_BRACKET:
			case pawnParser.IDENTIFIER:
				{
				this.state = 548;
				this.variable();
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
	public declParams(): DeclParamsContext {
		let _localctx: DeclParamsContext = new DeclParamsContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, pawnParser.RULE_declParams);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 552;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.CONST) {
				{
				this.state = 551;
				this.match(pawnParser.CONST);
				}
			}

			this.state = 555;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.BIT_AND) {
				{
				this.state = 554;
				this.reference();
				}
			}

			this.state = 557;
			this.variable();
			this.state = 560;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.ASSIGMENT) {
				{
				this.state = 558;
				this.match(pawnParser.ASSIGMENT);
				this.state = 559;
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
	public ellipse(): EllipseContext {
		let _localctx: EllipseContext = new EllipseContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, pawnParser.RULE_ellipse);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 562;
			this.match(pawnParser.COMA);
			this.state = 564;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.CURLY_OPEN_BRACKET || _la === pawnParser.IDENTIFIER) {
				{
				this.state = 563;
				this.tag();
				}
			}

			this.state = 566;
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
		this.enterRule(_localctx, 88, pawnParser.RULE_reference);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 568;
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
		this.enterRule(_localctx, 90, pawnParser.RULE_varModifires);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 570;
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
	public constRValue(): ConstRValueContext {
		let _localctx: ConstRValueContext = new ConstRValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, pawnParser.RULE_constRValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 574;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
			case 1:
				{
				this.state = 572;
				this.varOrLiteral();
				}
				break;

			case 2:
				{
				this.state = 573;
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
		this.enterRule(_localctx, 94, pawnParser.RULE_sizeof);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 576;
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
		this.enterRule(_localctx, 96, pawnParser.RULE_number);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 579;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pawnParser.MINUS) {
				{
				this.state = 578;
				this.match(pawnParser.MINUS);
				}
			}

			this.state = 586;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.INTEGER:
				{
				this.state = 581;
				this.integer();
				}
				break;
			case pawnParser.FLOAT:
				{
				this.state = 582;
				this.float();
				}
				break;
			case pawnParser.HEX:
				{
				this.state = 583;
				this.match(pawnParser.HEX);
				}
				break;
			case pawnParser.RATIONAL:
				{
				this.state = 584;
				this.match(pawnParser.RATIONAL);
				}
				break;
			case pawnParser.BINARY:
				{
				this.state = 585;
				this.match(pawnParser.BINARY);
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
	public float(): FloatContext {
		let _localctx: FloatContext = new FloatContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, pawnParser.RULE_float);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 588;
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
		this.enterRule(_localctx, 100, pawnParser.RULE_integer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 590;
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
	public canBeOverloaded(): CanBeOverloadedContext {
		let _localctx: CanBeOverloadedContext = new CanBeOverloadedContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, pawnParser.RULE_canBeOverloaded);
		try {
			this.state = 595;
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
				this.state = 592;
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
				this.state = 593;
				this.compareOperator();
				}
				break;
			case pawnParser.ASSIGMENT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 594;
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
		this.enterRule(_localctx, 104, pawnParser.RULE_arefmeticOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 597;
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
		this.enterRule(_localctx, 106, pawnParser.RULE_logicOperator);
		try {
			this.state = 602;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.OR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 599;
				this.match(pawnParser.OR);
				}
				break;
			case pawnParser.AND:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 600;
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
				this.state = 601;
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
		this.enterRule(_localctx, 108, pawnParser.RULE_compareOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 604;
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
		this.enterRule(_localctx, 110, pawnParser.RULE_bitwiseOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 606;
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
	public cycles(): CyclesContext {
		let _localctx: CyclesContext = new CyclesContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, pawnParser.RULE_cycles);
		try {
			this.state = 611;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.WHILE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 608;
				this.while();
				}
				break;
			case pawnParser.FOR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 609;
				this.for();
				}
				break;
			case pawnParser.DO:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 610;
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
		this.enterRule(_localctx, 114, pawnParser.RULE_do);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 613;
			this.match(pawnParser.DO);
			this.state = 614;
			this.statement();
			this.state = 617;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 72, this._ctx) ) {
			case 1:
				{
				this.state = 615;
				this.match(pawnParser.WHILE);
				this.state = 616;
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
		this.enterRule(_localctx, 116, pawnParser.RULE_while);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 619;
			this.match(pawnParser.WHILE);
			this.state = 620;
			this.condition();
			this.state = 621;
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
		this.enterRule(_localctx, 118, pawnParser.RULE_for);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 623;
			this.match(pawnParser.FOR);
			this.state = 624;
			this.match(pawnParser.OPEN_PARENTHESIS);
			this.state = 626;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.OPEN_PARENTHESIS) | (1 << pawnParser.CURLY_OPEN_BRACKET) | (1 << pawnParser.MINUS) | (1 << pawnParser.INCREMENTS) | (1 << pawnParser.DECREMENTS))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (pawnParser.NOT - 38)) | (1 << (pawnParser.BIT_COMPLEMEN - 38)) | (1 << (pawnParser.STATE - 38)) | (1 << (pawnParser.NEW - 38)) | (1 << (pawnParser.CONST - 38)) | (1 << (pawnParser.STATIC - 38)) | (1 << (pawnParser.STOCK - 38)) | (1 << (pawnParser.PUBLIC - 38)))) !== 0) || ((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (pawnParser.DEFINED - 74)) | (1 << (pawnParser.SIZEOF - 74)) | (1 << (pawnParser.TAGOF - 74)) | (1 << (pawnParser.TRUE - 74)) | (1 << (pawnParser.FALSE - 74)) | (1 << (pawnParser.CELLBITS - 74)) | (1 << (pawnParser.CELLMAX - 74)) | (1 << (pawnParser.CELLMIN - 74)) | (1 << (pawnParser.CHARBITS - 74)) | (1 << (pawnParser.CHARMAX - 74)) | (1 << (pawnParser.CHARMIN - 74)) | (1 << (pawnParser.DEBUG - 74)) | (1 << (pawnParser.LINE - 74)) | (1 << (pawnParser.PAWN - 74)) | (1 << (pawnParser.UCHARMAX - 74)) | (1 << (pawnParser.SHARPSTRING - 74)) | (1 << (pawnParser.STRING - 74)) | (1 << (pawnParser.CHAR_STRING - 74)))) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (pawnParser.IDENTIFIER - 106)) | (1 << (pawnParser.BINARY - 106)) | (1 << (pawnParser.HEX - 106)) | (1 << (pawnParser.INTEGER - 106)) | (1 << (pawnParser.FLOAT - 106)) | (1 << (pawnParser.RATIONAL - 106)))) !== 0)) {
				{
				this.state = 625;
				_localctx._first = this.forFirstExp();
				}
			}

			this.state = 628;
			this.match(pawnParser.SEMI);
			this.state = 630;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.OPEN_PARENTHESIS) | (1 << pawnParser.CURLY_OPEN_BRACKET) | (1 << pawnParser.MINUS) | (1 << pawnParser.INCREMENTS) | (1 << pawnParser.DECREMENTS))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (pawnParser.NOT - 38)) | (1 << (pawnParser.BIT_COMPLEMEN - 38)) | (1 << (pawnParser.STATE - 38)))) !== 0) || ((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (pawnParser.DEFINED - 74)) | (1 << (pawnParser.SIZEOF - 74)) | (1 << (pawnParser.TAGOF - 74)) | (1 << (pawnParser.TRUE - 74)) | (1 << (pawnParser.FALSE - 74)) | (1 << (pawnParser.CELLBITS - 74)) | (1 << (pawnParser.CELLMAX - 74)) | (1 << (pawnParser.CELLMIN - 74)) | (1 << (pawnParser.CHARBITS - 74)) | (1 << (pawnParser.CHARMAX - 74)) | (1 << (pawnParser.CHARMIN - 74)) | (1 << (pawnParser.DEBUG - 74)) | (1 << (pawnParser.LINE - 74)) | (1 << (pawnParser.PAWN - 74)) | (1 << (pawnParser.UCHARMAX - 74)) | (1 << (pawnParser.SHARPSTRING - 74)) | (1 << (pawnParser.STRING - 74)) | (1 << (pawnParser.CHAR_STRING - 74)))) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (pawnParser.IDENTIFIER - 106)) | (1 << (pawnParser.BINARY - 106)) | (1 << (pawnParser.HEX - 106)) | (1 << (pawnParser.INTEGER - 106)) | (1 << (pawnParser.FLOAT - 106)) | (1 << (pawnParser.RATIONAL - 106)))) !== 0)) {
				{
				this.state = 629;
				_localctx._second = this.expresion();
				}
			}

			this.state = 632;
			this.match(pawnParser.SEMI);
			this.state = 634;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.OPEN_PARENTHESIS) | (1 << pawnParser.CURLY_OPEN_BRACKET) | (1 << pawnParser.MINUS) | (1 << pawnParser.INCREMENTS) | (1 << pawnParser.DECREMENTS))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (pawnParser.NOT - 38)) | (1 << (pawnParser.BIT_COMPLEMEN - 38)) | (1 << (pawnParser.STATE - 38)))) !== 0) || ((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (pawnParser.DEFINED - 74)) | (1 << (pawnParser.SIZEOF - 74)) | (1 << (pawnParser.TAGOF - 74)) | (1 << (pawnParser.TRUE - 74)) | (1 << (pawnParser.FALSE - 74)) | (1 << (pawnParser.CELLBITS - 74)) | (1 << (pawnParser.CELLMAX - 74)) | (1 << (pawnParser.CELLMIN - 74)) | (1 << (pawnParser.CHARBITS - 74)) | (1 << (pawnParser.CHARMAX - 74)) | (1 << (pawnParser.CHARMIN - 74)) | (1 << (pawnParser.DEBUG - 74)) | (1 << (pawnParser.LINE - 74)) | (1 << (pawnParser.PAWN - 74)) | (1 << (pawnParser.UCHARMAX - 74)) | (1 << (pawnParser.SHARPSTRING - 74)) | (1 << (pawnParser.STRING - 74)) | (1 << (pawnParser.CHAR_STRING - 74)))) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (pawnParser.IDENTIFIER - 106)) | (1 << (pawnParser.BINARY - 106)) | (1 << (pawnParser.HEX - 106)) | (1 << (pawnParser.INTEGER - 106)) | (1 << (pawnParser.FLOAT - 106)) | (1 << (pawnParser.RATIONAL - 106)))) !== 0)) {
				{
				this.state = 633;
				_localctx._third = this.expresion();
				}
			}

			this.state = 636;
			this.match(pawnParser.CLOSE_PARENTHESIS);
			this.state = 637;
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
		this.enterRule(_localctx, 120, pawnParser.RULE_forFirstExp);
		try {
			this.state = 641;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.NEW:
			case pawnParser.CONST:
			case pawnParser.STATIC:
			case pawnParser.STOCK:
			case pawnParser.PUBLIC:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 639;
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
				this.state = 640;
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
		this.enterRule(_localctx, 122, pawnParser.RULE_cycleKeywords);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 643;
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
		this.enterRule(_localctx, 124, pawnParser.RULE_literal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 649;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pawnParser.SHARPSTRING:
			case pawnParser.STRING:
			case pawnParser.CHAR_STRING:
				{
				this.state = 645;
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
				this.state = 646;
				this.number();
				}
				break;
			case pawnParser.TRUE:
			case pawnParser.FALSE:
				{
				this.state = 647;
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
				this.state = 648;
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
		this.enterRule(_localctx, 126, pawnParser.RULE_bool_const);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 651;
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
		this.enterRule(_localctx, 128, pawnParser.RULE_predefinedConstants);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 653;
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
		this.enterRule(_localctx, 130, pawnParser.RULE_string);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 655;
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
			this.state = 659;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 656;
					this.string();
					}
					}
				}
				this.state = 661;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
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
		this.enterRule(_localctx, 132, pawnParser.RULE_docs);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 662;
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
		this.enterRule(_localctx, 134, pawnParser.RULE_docBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 664;
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
		this.enterRule(_localctx, 136, pawnParser.RULE_expresion);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 675;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 79, this._ctx) ) {
			case 1:
				{
				this.state = 666;
				this.literal();
				}
				break;

			case 2:
				{
				this.state = 667;
				this.symbol();
				}
				break;

			case 3:
				{
				this.state = 668;
				this.functionCallOperator();
				}
				break;

			case 4:
				{
				this.state = 669;
				this.match(pawnParser.OPEN_PARENTHESIS);
				this.state = 670;
				this.expresion();
				this.state = 671;
				this.match(pawnParser.CLOSE_PARENTHESIS);
				}
				break;

			case 5:
				{
				this.state = 673;
				this.unarOperator();
				}
				break;

			case 6:
				{
				this.state = 674;
				this.binarOperator();
				}
				break;
			}
			this.state = 695;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 82, this._ctx) ) {
			case 1:
				{
				this.state = 678;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 80, this._ctx) ) {
				case 1:
					{
					this.state = 677;
					this.match(pawnParser.CHAR);
					}
					break;
				}
				}
				break;

			case 2:
				{
				this.state = 680;
				this.match(pawnParser.QUESTION);
				this.state = 681;
				this.expresion();
				this.state = 682;
				this.match(pawnParser.COLON);
				this.state = 683;
				this.expresion();
				}
				break;

			case 3:
				{
				this.state = 688;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 685;
						this.chainedRelationalOperators();
						this.state = 686;
						this.expresion();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 690;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;

			case 4:
				{
				this.state = 692;
				_localctx._operator = this.binarExpressionOperators();
				this.state = 693;
				_localctx._right = this.expresion();
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
	public unarOperator(): UnarOperatorContext {
		let _localctx: UnarOperatorContext = new UnarOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, pawnParser.RULE_unarOperator);
		try {
			this.state = 707;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 83, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 697;
				this.postIncrement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 698;
				this.preIncrement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 699;
				this.postDecrement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 700;
				this.preDecrement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 701;
				this.complemen();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 702;
				this.notOperator();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 703;
				this.definedOperator();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 704;
				this.sizeofOperator();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 705;
				this.stateOperator();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 706;
				this.tagofOperator();
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
	public binarOperator(): BinarOperatorContext {
		let _localctx: BinarOperatorContext = new BinarOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, pawnParser.RULE_binarOperator);
		try {
			this.state = 713;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 84, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 709;
				this.assigmentOperator();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 710;
				this.arrayIndexOperator();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 711;
				this.arrayCharOperator();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 712;
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
	public binarExpressionOperators(): BinarExpressionOperatorsContext {
		let _localctx: BinarExpressionOperatorsContext = new BinarExpressionOperatorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, pawnParser.RULE_binarExpressionOperators);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 715;
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
		this.enterRule(_localctx, 144, pawnParser.RULE_assigmentOperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 717;
			this.lvalue();
			this.state = 718;
			this.match(pawnParser.ASSIGMENT);
			this.state = 719;
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
	public arrayIndexOperator(): ArrayIndexOperatorContext {
		let _localctx: ArrayIndexOperatorContext = new ArrayIndexOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, pawnParser.RULE_arrayIndexOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 721;
			this.match(pawnParser.IDENTIFIER);
			this.state = 727;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 722;
				this.match(pawnParser.SQUARE_OPEN_BRACKET);
				this.state = 724;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.OPEN_PARENTHESIS) | (1 << pawnParser.CURLY_OPEN_BRACKET) | (1 << pawnParser.MINUS) | (1 << pawnParser.INCREMENTS) | (1 << pawnParser.DECREMENTS))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (pawnParser.NOT - 38)) | (1 << (pawnParser.BIT_COMPLEMEN - 38)) | (1 << (pawnParser.STATE - 38)))) !== 0) || ((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (pawnParser.DEFINED - 74)) | (1 << (pawnParser.SIZEOF - 74)) | (1 << (pawnParser.TAGOF - 74)) | (1 << (pawnParser.TRUE - 74)) | (1 << (pawnParser.FALSE - 74)) | (1 << (pawnParser.CELLBITS - 74)) | (1 << (pawnParser.CELLMAX - 74)) | (1 << (pawnParser.CELLMIN - 74)) | (1 << (pawnParser.CHARBITS - 74)) | (1 << (pawnParser.CHARMAX - 74)) | (1 << (pawnParser.CHARMIN - 74)) | (1 << (pawnParser.DEBUG - 74)) | (1 << (pawnParser.LINE - 74)) | (1 << (pawnParser.PAWN - 74)) | (1 << (pawnParser.UCHARMAX - 74)) | (1 << (pawnParser.SHARPSTRING - 74)) | (1 << (pawnParser.STRING - 74)) | (1 << (pawnParser.CHAR_STRING - 74)))) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (pawnParser.IDENTIFIER - 106)) | (1 << (pawnParser.BINARY - 106)) | (1 << (pawnParser.HEX - 106)) | (1 << (pawnParser.INTEGER - 106)) | (1 << (pawnParser.FLOAT - 106)) | (1 << (pawnParser.RATIONAL - 106)))) !== 0)) {
					{
					this.state = 723;
					this.expresion();
					}
				}

				this.state = 726;
				this.match(pawnParser.SQUARE_CLOSE_BRACKET);
				}
				}
				this.state = 729;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === pawnParser.SQUARE_OPEN_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayCharOperator(): ArrayCharOperatorContext {
		let _localctx: ArrayCharOperatorContext = new ArrayCharOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, pawnParser.RULE_arrayCharOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 731;
			this.match(pawnParser.IDENTIFIER);
			this.state = 737;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 732;
				this.match(pawnParser.CURLY_OPEN_BRACKET);
				this.state = 734;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.OPEN_PARENTHESIS) | (1 << pawnParser.CURLY_OPEN_BRACKET) | (1 << pawnParser.MINUS) | (1 << pawnParser.INCREMENTS) | (1 << pawnParser.DECREMENTS))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (pawnParser.NOT - 38)) | (1 << (pawnParser.BIT_COMPLEMEN - 38)) | (1 << (pawnParser.STATE - 38)))) !== 0) || ((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (pawnParser.DEFINED - 74)) | (1 << (pawnParser.SIZEOF - 74)) | (1 << (pawnParser.TAGOF - 74)) | (1 << (pawnParser.TRUE - 74)) | (1 << (pawnParser.FALSE - 74)) | (1 << (pawnParser.CELLBITS - 74)) | (1 << (pawnParser.CELLMAX - 74)) | (1 << (pawnParser.CELLMIN - 74)) | (1 << (pawnParser.CHARBITS - 74)) | (1 << (pawnParser.CHARMAX - 74)) | (1 << (pawnParser.CHARMIN - 74)) | (1 << (pawnParser.DEBUG - 74)) | (1 << (pawnParser.LINE - 74)) | (1 << (pawnParser.PAWN - 74)) | (1 << (pawnParser.UCHARMAX - 74)) | (1 << (pawnParser.SHARPSTRING - 74)) | (1 << (pawnParser.STRING - 74)) | (1 << (pawnParser.CHAR_STRING - 74)))) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (pawnParser.IDENTIFIER - 106)) | (1 << (pawnParser.BINARY - 106)) | (1 << (pawnParser.HEX - 106)) | (1 << (pawnParser.INTEGER - 106)) | (1 << (pawnParser.FLOAT - 106)) | (1 << (pawnParser.RATIONAL - 106)))) !== 0)) {
					{
					this.state = 733;
					this.expresion();
					}
				}

				this.state = 736;
				this.match(pawnParser.CURLY_CLOSE_BRACKET);
				}
				}
				this.state = 739;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === pawnParser.CURLY_OPEN_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 150, pawnParser.RULE_functionCallOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 741;
			this.match(pawnParser.IDENTIFIER);
			this.state = 742;
			this.match(pawnParser.OPEN_PARENTHESIS);
			this.state = 751;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pawnParser.OPEN_PARENTHESIS) | (1 << pawnParser.CURLY_OPEN_BRACKET) | (1 << pawnParser.MINUS) | (1 << pawnParser.INCREMENTS) | (1 << pawnParser.DECREMENTS))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (pawnParser.NOT - 38)) | (1 << (pawnParser.BIT_COMPLEMEN - 38)) | (1 << (pawnParser.STATE - 38)))) !== 0) || ((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (pawnParser.DEFINED - 74)) | (1 << (pawnParser.SIZEOF - 74)) | (1 << (pawnParser.TAGOF - 74)) | (1 << (pawnParser.TRUE - 74)) | (1 << (pawnParser.FALSE - 74)) | (1 << (pawnParser.CELLBITS - 74)) | (1 << (pawnParser.CELLMAX - 74)) | (1 << (pawnParser.CELLMIN - 74)) | (1 << (pawnParser.CHARBITS - 74)) | (1 << (pawnParser.CHARMAX - 74)) | (1 << (pawnParser.CHARMIN - 74)) | (1 << (pawnParser.DEBUG - 74)) | (1 << (pawnParser.LINE - 74)) | (1 << (pawnParser.PAWN - 74)) | (1 << (pawnParser.UCHARMAX - 74)) | (1 << (pawnParser.SHARPSTRING - 74)) | (1 << (pawnParser.STRING - 74)) | (1 << (pawnParser.CHAR_STRING - 74)))) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (pawnParser.IDENTIFIER - 106)) | (1 << (pawnParser.BINARY - 106)) | (1 << (pawnParser.HEX - 106)) | (1 << (pawnParser.INTEGER - 106)) | (1 << (pawnParser.FLOAT - 106)) | (1 << (pawnParser.RATIONAL - 106)))) !== 0)) {
				{
				this.state = 743;
				this.expresion();
				this.state = 748;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === pawnParser.COMA) {
					{
					{
					this.state = 744;
					this.match(pawnParser.COMA);
					this.state = 745;
					this.expresion();
					}
					}
					this.state = 750;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 753;
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
		this.enterRule(_localctx, 152, pawnParser.RULE_tagOperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 755;
			this.tag();
			this.state = 756;
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
	public definedOperator(): DefinedOperatorContext {
		let _localctx: DefinedOperatorContext = new DefinedOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, pawnParser.RULE_definedOperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 758;
			this.match(pawnParser.DEFINED);
			this.state = 759;
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
	public sizeofOperator(): SizeofOperatorContext {
		let _localctx: SizeofOperatorContext = new SizeofOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, pawnParser.RULE_sizeofOperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 761;
			this.match(pawnParser.SIZEOF);
			this.state = 762;
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
	public stateOperator(): StateOperatorContext {
		let _localctx: StateOperatorContext = new StateOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, pawnParser.RULE_stateOperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 764;
			this.match(pawnParser.STATE);
			this.state = 765;
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
	public tagofOperator(): TagofOperatorContext {
		let _localctx: TagofOperatorContext = new TagofOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, pawnParser.RULE_tagofOperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 767;
			this.match(pawnParser.TAGOF);
			this.state = 768;
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
	public symbol(): SymbolContext {
		let _localctx: SymbolContext = new SymbolContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, pawnParser.RULE_symbol);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 770;
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
		this.enterRule(_localctx, 164, pawnParser.RULE_lvalue);
		try {
			this.state = 775;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 91, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 772;
				this.symbol();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 773;
				this.arrayIndexOperator();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 774;
				this.arrayCharOperator();
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
		this.enterRule(_localctx, 166, pawnParser.RULE_postIncrement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 777;
			this.lvalue();
			this.state = 778;
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
		this.enterRule(_localctx, 168, pawnParser.RULE_preIncrement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 780;
			this.match(pawnParser.INCREMENTS);
			this.state = 781;
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
		this.enterRule(_localctx, 170, pawnParser.RULE_postDecrement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 783;
			this.lvalue();
			this.state = 784;
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
		this.enterRule(_localctx, 172, pawnParser.RULE_preDecrement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 786;
			this.match(pawnParser.DECREMENTS);
			this.state = 787;
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
	public complemen(): ComplemenContext {
		let _localctx: ComplemenContext = new ComplemenContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, pawnParser.RULE_complemen);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 789;
			this.match(pawnParser.BIT_COMPLEMEN);
			this.state = 790;
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
	public chainedRelationalOperators(): ChainedRelationalOperatorsContext {
		let _localctx: ChainedRelationalOperatorsContext = new ChainedRelationalOperatorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, pawnParser.RULE_chainedRelationalOperators);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 792;
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
	// @RuleVersion(0)
	public notOperator(): NotOperatorContext {
		let _localctx: NotOperatorContext = new NotOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, pawnParser.RULE_notOperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 794;
			this.match(pawnParser.NOT);
			this.state = 795;
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

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03v\u0320\x04\x02" +
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
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x03\x02\x03\x02\x07\x02\xB9\n\x02\f\x02\x0E" +
		"\x02\xBC\v\x02\x03\x02\x07\x02\xBF\n\x02\f\x02\x0E\x02\xC2\v\x02\x03\x02" +
		"\x05\x02\xC5\n\x02\x03\x03\x03\x03\x03\x03\x03\x04\x07\x04\xCB\n\x04\f" +
		"\x04\x0E\x04\xCE\v\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04" +
		"\xD5\n\x04\x03\x04\x05\x04\xD8\n\x04\x03\x05\x03\x05\x05\x05\xDC\n\x05" +
		"\x03\x05\x05\x05\xDF\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05\xE5" +
		"\n\x05\f\x05\x0E\x05\xE8\v\x05\x03\x05\x05\x05\xEB\n\x05\x05\x05\xED\n" +
		"\x05\x03\x05\x03\x05\x05\x05\xF1\n\x05\x03\x06\x03\x06\x03\x06\x05\x06" +
		"\xF6\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x07\b\xFF" +
		"\n\b\f\b\x0E\b\u0102\v\b\x03\b\x06\b\u0105\n\b\r\b\x0E\b\u0106\x05\b\u0109" +
		"\n\b\x03\b\x03\b\x05\b\u010D\n\b\x03\b\x03\b\x03\b\x05\b\u0112\n\b\x07" +
		"\b\u0114\n\b\f\b\x0E\b\u0117\v\b\x03\t\x05\t\u011A\n\t\x03\t\x05\t\u011D" +
		"\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\u0124\n\t\f\t\x0E\t\u0127\v\t" +
		"\x03\t\x05\t\u012A\n\t\x05\t\u012C\n\t\x03\t\x03\t\x03\t\x03\t\x05\t\u0132" +
		"\n\t\x03\n\x03\n\x05\n\u0136\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07" +
		"\n\u013E\n\n\f\n\x0E\n\u0141\v\n\x03\n\x05\n\u0144\n\n\x05\n\u0146\n\n" +
		"\x03\n\x03\n\x03\n\x03\n\x05\n\u014C\n\n\x03\v\x03\v\x03\v\x03\v\x03\f" +
		"\x03\f\x03\f\x03\f\x03\f\x07\f\u0157\n\f\f\f\x0E\f\u015A\v\f\x03\f\x05" +
		"\f\u015D\n\f\x03\f\x03\f\x03\r\x05\r\u0162\n\r\x03\r\x03\r\x07\r\u0166" +
		"\n\r\f\r\x0E\r\u0169\v\r\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u016E\n\x0E\x05" +
		"\x0E\u0170\n\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0177" +
		"\n\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x05\x11\u0183\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x05\x11\u018B\n\x11\x03\x12\x03\x12\x07\x12\u018F\n\x12\f" +
		"\x12\x0E\x12\u0192\v\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x14" +
		"\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x17" +
		"\x03\x17\x03\x17\x03\x17\x05\x17\u01A6\n\x17\x03\x18\x03\x18\x03\x18\x03" +
		"\x19\x03\x19\x05\x19\u01AD\n\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B" +
		"\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u01B7\n\x1B\f\x1B\x0E\x1B\u01BA\v\x1B" +
		"\x03\x1B\x05\x1B\u01BD\n\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x07\x1C\u01C5\n\x1C\f\x1C\x0E\x1C\u01C8\v\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x05\x1E\u01D3\n\x1E" +
		"\x03\x1E\x05\x1E\u01D6\n\x1E\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u01DB\n\x1F" +
		"\x03 \x03 \x03 \x05 \u01E0\n \x03!\x03!\x03!\x03!\x03!\x03!\x05!\u01E8" +
		"\n!\x03\"\x03\"\x03\"\x03\"\x07\"\u01EE\n\"\f\"\x0E\"\u01F1\v\"\x03\"" +
		"\x03\"\x03#\x05#\u01F6\n#\x03#\x03#\x03#\x05#\u01FB\n#\x03#\x05#\u01FE" +
		"\n#\x03$\x03$\x03%\x05%\u0203\n%\x03%\x03%\x03%\x03%\x03&\x05&\u020A\n" +
		"&\x03&\x03&\x03&\x03&\x03\'\x05\'\u0211\n\'\x03\'\x03\'\x05\'\u0215\n" +
		"\'\x03\'\x03\'\x05\'\u0219\n\'\x03(\x03(\x03)\x03)\x05)\u021F\n)\x03*" +
		"\x03*\x03*\x05*\u0224\n*\x03+\x03+\x05+\u0228\n+\x03,\x05,\u022B\n,\x03" +
		",\x05,\u022E\n,\x03,\x03,\x03,\x05,\u0233\n,\x03-\x03-\x05-\u0237\n-\x03" +
		"-\x03-\x03.\x03.\x03/\x03/\x030\x030\x050\u0241\n0\x031\x031\x032\x05" +
		"2\u0246\n2\x032\x032\x032\x032\x032\x052\u024D\n2\x033\x033\x034\x034" +
		"\x035\x035\x035\x055\u0256\n5\x036\x036\x037\x037\x037\x057\u025D\n7\x03" +
		"8\x038\x039\x039\x03:\x03:\x03:\x05:\u0266\n:\x03;\x03;\x03;\x03;\x05" +
		";\u026C\n;\x03<\x03<\x03<\x03<\x03=\x03=\x03=\x05=\u0275\n=\x03=\x03=" +
		"\x05=\u0279\n=\x03=\x03=\x05=\u027D\n=\x03=\x03=\x03=\x03>\x03>\x05>\u0284" +
		"\n>\x03?\x03?\x03@\x03@\x03@\x03@\x05@\u028C\n@\x03A\x03A\x03B\x03B\x03" +
		"C\x03C\x07C\u0294\nC\fC\x0EC\u0297\vC\x03D\x03D\x03E\x03E\x03F\x03F\x03" +
		"F\x03F\x03F\x03F\x03F\x03F\x03F\x05F\u02A6\nF\x03F\x05F\u02A9\nF\x03F" +
		"\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x06F\u02B3\nF\rF\x0EF\u02B4\x03F\x03" +
		"F\x03F\x05F\u02BA\nF\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03" +
		"G\x05G\u02C6\nG\x03H\x03H\x03H\x03H\x05H\u02CC\nH\x03I\x03I\x03J\x03J" +
		"\x03J\x03J\x03K\x03K\x03K\x05K\u02D7\nK\x03K\x06K\u02DA\nK\rK\x0EK\u02DB" +
		"\x03L\x03L\x03L\x05L\u02E1\nL\x03L\x06L\u02E4\nL\rL\x0EL\u02E5\x03M\x03" +
		"M\x03M\x03M\x03M\x07M\u02ED\nM\fM\x0EM\u02F0\vM\x05M\u02F2\nM\x03M\x03" +
		"M\x03N\x03N\x03N\x03O\x03O\x03O\x03P\x03P\x03P\x03Q\x03Q\x03Q\x03R\x03" +
		"R\x03R\x03S\x03S\x03T\x03T\x03T\x05T\u030A\nT\x03U\x03U\x03U\x03V\x03" +
		"V\x03V\x03W\x03W\x03W\x03X\x03X\x03X\x03Y\x03Y\x03Y\x03Z\x03Z\x03[\x03" +
		"[\x03[\x03[\x02\x02\x02\\\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E" +
		"\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 " +
		"\x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02" +
		"<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02" +
		"X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02" +
		"t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02" +
		"\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02" +
		"\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02" +
		"\xAE\x02\xB0\x02\xB2\x02\xB4\x02\x02\x11\x05\x02\f\f\x0E\x0E\x16\x16\x04" +
		"\x02<<??\x03\x02\x1C\x1D\x03\x02\v\x16\x06\x02\x18\x18\x1C\x1D((MM\x04" +
		"\x02:<??\x03\x02\x17\x1D\x04\x02\x1E#((\x03\x02)/\x03\x02IJ\x03\x02]^" +
		"\x03\x02_h\x03\x02ik\b\x02\t\t\v\x1B\x1E\x1F&\')+-/\x03\x02 #\x02\u034B" +
		"\x02\xC4\x03\x02\x02\x02\x04\xC6\x03\x02\x02\x02\x06\xD7\x03\x02\x02\x02" +
		"\b\xD9\x03\x02\x02\x02\n\xF2\x03\x02\x02\x02\f\xF7\x03\x02\x02\x02\x0E" +
		"\u0108\x03\x02\x02\x02\x10\u0119\x03\x02\x02\x02\x12\u0133\x03\x02\x02" +
		"\x02\x14\u014D\x03\x02\x02\x02\x16\u015C\x03\x02\x02\x02\x18\u0161\x03" +
		"\x02\x02\x02\x1A\u016A\x03\x02\x02\x02\x1C\u0176\x03\x02\x02\x02\x1E\u0178" +
		"\x03\x02\x02\x02 \u018A\x03\x02\x02\x02\"\u018C\x03\x02\x02\x02$\u0195" +
		"\x03\x02\x02\x02&\u0198\x03\x02\x02\x02(\u019B\x03\x02\x02\x02*\u019E" +
		"\x03\x02\x02\x02,\u01A1\x03\x02\x02\x02.\u01A7\x03\x02\x02\x020\u01AA" +
		"\x03\x02\x02\x022\u01AE\x03\x02\x02\x024\u01B2\x03\x02\x02\x026\u01C0" +
		"\x03\x02\x02\x028\u01CC\x03\x02\x02\x02:\u01D2\x03\x02\x02\x02<\u01D7" +
		"\x03\x02\x02\x02>\u01DC\x03\x02\x02\x02@\u01E7\x03\x02\x02\x02B\u01E9" +
		"\x03\x02\x02\x02D\u01FD\x03\x02\x02\x02F\u01FF\x03\x02\x02\x02H\u0202" +
		"\x03\x02\x02\x02J\u0209\x03\x02\x02\x02L\u0210\x03\x02\x02\x02N\u021A" +
		"\x03\x02\x02\x02P\u021C\x03\x02\x02\x02R\u0223\x03\x02\x02\x02T\u0227" +
		"\x03\x02\x02\x02V\u022A\x03\x02\x02\x02X\u0234\x03\x02\x02\x02Z\u023A" +
		"\x03\x02\x02\x02\\\u023C\x03\x02\x02\x02^\u0240\x03\x02\x02\x02`\u0242" +
		"\x03\x02\x02\x02b\u0245\x03\x02\x02\x02d\u024E\x03\x02\x02\x02f\u0250" +
		"\x03\x02\x02\x02h\u0255\x03\x02\x02\x02j\u0257\x03\x02\x02\x02l\u025C" +
		"\x03\x02\x02\x02n\u025E\x03\x02\x02\x02p\u0260\x03\x02\x02\x02r\u0265" +
		"\x03\x02\x02\x02t\u0267\x03\x02\x02\x02v\u026D\x03\x02\x02\x02x\u0271" +
		"\x03\x02\x02\x02z\u0283\x03\x02\x02\x02|\u0285\x03\x02\x02\x02~\u028B" +
		"\x03\x02\x02\x02\x80\u028D\x03\x02\x02\x02\x82\u028F\x03\x02\x02\x02\x84" +
		"\u0291\x03\x02\x02\x02\x86\u0298\x03\x02\x02\x02\x88\u029A\x03\x02\x02" +
		"\x02\x8A\u02A5\x03\x02\x02\x02\x8C\u02C5\x03\x02\x02\x02\x8E\u02CB\x03" +
		"\x02\x02\x02\x90\u02CD\x03\x02\x02\x02\x92\u02CF\x03\x02\x02\x02\x94\u02D3" +
		"\x03\x02\x02\x02\x96\u02DD\x03\x02\x02\x02\x98\u02E7\x03\x02\x02\x02\x9A" +
		"\u02F5\x03\x02\x02\x02\x9C\u02F8\x03\x02\x02\x02\x9E\u02FB\x03\x02\x02" +
		"\x02\xA0\u02FE\x03\x02\x02\x02\xA2\u0301\x03\x02\x02\x02\xA4\u0304\x03" +
		"\x02\x02\x02\xA6\u0309\x03\x02\x02\x02\xA8\u030B\x03\x02\x02\x02\xAA\u030E" +
		"\x03\x02\x02\x02\xAC\u0311\x03\x02\x02\x02\xAE\u0314\x03\x02\x02\x02\xB0" +
		"\u0317\x03\x02\x02\x02\xB2\u031A\x03\x02\x02\x02\xB4\u031C\x03\x02\x02" +
		"\x02\xB6\xC5\x05\x04\x03\x02\xB7\xB9\x05\x86D\x02\xB8\xB7\x03\x02\x02" +
		"\x02\xB9\xBC\x03\x02\x02\x02\xBA\xB8\x03\x02\x02\x02\xBA\xBB\x03\x02\x02" +
		"\x02\xBB\xC0\x03\x02\x02\x02\xBC\xBA\x03\x02\x02\x02\xBD\xBF\x05\x06\x04" +
		"\x02\xBE\xBD\x03\x02\x02\x02\xBF\xC2\x03\x02\x02\x02\xC0\xBE\x03\x02\x02" +
		"\x02\xC0\xC1\x03\x02\x02\x02\xC1\xC3\x03\x02\x02\x02\xC2\xC0\x03\x02\x02" +
		"\x02\xC3\xC5\x07\x02\x02\x03\xC4\xB6\x03\x02\x02\x02\xC4\xBA\x03\x02\x02" +
		"\x02\xC5\x03\x03\x02\x02\x02\xC6\xC7\x07l\x02\x02\xC7\xC8\x07%\x02\x02" +
		"\xC8\x05\x03\x02\x02\x02\xC9\xCB\x05\x86D\x02\xCA\xC9\x03\x02\x02\x02" +
		"\xCB\xCE\x03\x02\x02\x02\xCC\xCA\x03\x02\x02\x02\xCC\xCD\x03\x02\x02\x02" +
		"\xCD\xD4\x03\x02\x02\x02\xCE\xCC\x03\x02\x02\x02\xCF\xD5\x05\x10\t\x02" +
		"\xD0\xD5\x05\x12\n\x02\xD1\xD2\x05\x0E\b\x02\xD2\xD3\x07\n\x02\x02\xD3" +
		"\xD5\x03\x02\x02\x02\xD4\xCF\x03\x02\x02\x02\xD4\xD0\x03\x02\x02\x02\xD4" +
		"\xD1\x03\x02\x02\x02\xD5\xD8\x03\x02\x02\x02\xD6\xD8\x05\b\x05\x02\xD7" +
		"\xCC\x03\x02\x02\x02\xD7\xD6\x03\x02\x02\x02\xD8\x07\x03\x02\x02\x02\xD9" +
		"\xDB\x079\x02\x02\xDA\xDC\x07l\x02\x02\xDB\xDA\x03\x02\x02\x02\xDB\xDC" +
		"\x03\x02\x02\x02\xDC\xDE\x03\x02\x02\x02\xDD\xDF\x05\f\x07\x02\xDE\xDD" +
		"\x03\x02\x02\x02\xDE\xDF\x03\x02\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0\xEC" +
		"\x07\x05\x02\x02\xE1\xE6\x05\n\x06\x02\xE2\xE3\x07\t\x02\x02\xE3\xE5\x05" +
		"\n\x06\x02\xE4\xE2\x03\x02\x02\x02\xE5\xE8\x03\x02\x02\x02\xE6\xE4\x03" +
		"\x02\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7\xEA\x03\x02\x02\x02\xE8\xE6\x03" +
		"\x02\x02\x02\xE9\xEB\x07\t\x02\x02\xEA\xE9\x03\x02\x02\x02\xEA\xEB\x03" +
		"\x02\x02\x02\xEB\xED\x03\x02\x02\x02\xEC\xE1\x03\x02\x02\x02\xEC\xED\x03" +
		"\x02\x02\x02\xED\xEE\x03\x02\x02\x02\xEE\xF0\x07\x06\x02\x02\xEF\xF1\x07" +
		"\n\x02\x02\xF0\xEF\x03\x02\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1\t\x03\x02" +
		"\x02\x02\xF2\xF5\x05\x18\r\x02\xF3\xF4\x07\v\x02\x02\xF4\xF6\x05\x8AF" +
		"\x02\xF5\xF3\x03\x02\x02\x02\xF5\xF6\x03\x02\x02\x02\xF6\v\x03\x02\x02" +
		"\x02\xF7\xF8\x07\x03\x02\x02\xF8\xF9\t\x02\x02\x02\xF9\xFA\x07o\x02\x02" +
		"\xFA\xFB\x07\x04\x02\x02\xFB\r\x03\x02\x02\x02\xFC\u0100\x078\x02\x02" +
		"\xFD\xFF\x05\\/\x02\xFE\xFD\x03\x02\x02\x02\xFF\u0102\x03\x02\x02\x02" +
		"\u0100\xFE\x03\x02\x02\x02\u0100\u0101\x03\x02\x02\x02\u0101\u0109\x03" +
		"\x02\x02\x02\u0102\u0100\x03\x02\x02\x02\u0103\u0105\x05\\/\x02\u0104" +
		"\u0103\x03\x02\x02\x02\u0105\u0106\x03\x02\x02\x02\u0106\u0104\x03\x02" +
		"\x02\x02\u0106\u0107\x03\x02\x02\x02\u0107\u0109\x03\x02\x02\x02\u0108" +
		"\xFC\x03\x02\x02\x02\u0108\u0104\x03\x02\x02\x02\u0109\u010A\x03\x02\x02" +
		"\x02\u010A\u010C\x05\x18\r\x02\u010B\u010D\x05> \x02\u010C\u010B\x03\x02" +
		"\x02\x02\u010C\u010D\x03\x02\x02\x02\u010D\u0115\x03\x02\x02\x02\u010E" +
		"\u010F\x07\t\x02\x02\u010F\u0111\x05\x18\r\x02\u0110\u0112\x05> \x02\u0111" +
		"\u0110\x03\x02\x02\x02\u0111\u0112\x03\x02\x02\x02\u0112\u0114\x03\x02" +
		"\x02\x02\u0113\u010E\x03\x02\x02\x02\u0114\u0117\x03\x02\x02\x02\u0115" +
		"\u0113\x03\x02\x02\x02\u0115\u0116\x03\x02\x02\x02\u0116\x0F\x03\x02\x02" +
		"\x02\u0117\u0115\x03\x02\x02\x02\u0118\u011A\x05\x1C\x0F\x02\u0119\u0118" +
		"\x03\x02\x02\x02\u0119\u011A\x03\x02\x02\x02\u011A\u011C\x03\x02\x02\x02" +
		"\u011B\u011D\x05\x16\f\x02\u011C\u011B\x03\x02\x02\x02\u011C\u011D\x03" +
		"\x02\x02\x02\u011D\u011E\x03\x02\x02\x02\u011E\u011F\x07l\x02\x02\u011F" +
		"\u012B\x07\x03\x02\x02\u0120\u0125\x05V,\x02\u0121\u0122\x07\t\x02\x02" +
		"\u0122\u0124\x05V,\x02\u0123\u0121\x03\x02\x02\x02\u0124\u0127\x03\x02" +
		"\x02\x02\u0125\u0123\x03\x02\x02\x02\u0125\u0126\x03\x02\x02\x02\u0126" +
		"\u0129\x03\x02\x02\x02\u0127\u0125\x03\x02\x02\x02\u0128\u012A\x05X-\x02" +
		"\u0129\u0128\x03\x02\x02\x02\u0129\u012A\x03\x02\x02\x02\u012A\u012C\x03" +
		"\x02\x02\x02\u012B\u0120\x03\x02\x02\x02\u012B\u012C\x03\x02\x02\x02\u012C" +
		"\u012D\x03\x02\x02\x02\u012D\u0131\x07\x04\x02\x02\u012E\u0132\x07\n\x02" +
		"\x02\u012F\u0132\x05 \x11\x02\u0130\u0132\x05\x14\v\x02\u0131\u012E\x03" +
		"\x02\x02\x02\u0131\u012F\x03\x02\x02\x02\u0131\u0130\x03\x02\x02\x02\u0132" +
		"\x11\x03\x02\x02\x02\u0133\u0135\x05\x1C\x0F\x02\u0134\u0136\x05\x16\f" +
		"\x02\u0135\u0134\x03\x02\x02\x02\u0135\u0136\x03\x02\x02\x02\u0136\u0137" +
		"\x03\x02\x02\x02\u0137\u0138\x07@\x02\x02\u0138\u0139\x05h5\x02\u0139" +
		"\u0145\x07\x03\x02\x02\u013A\u013F\x05V,\x02\u013B\u013C\x07\t\x02\x02" +
		"\u013C\u013E\x05V,\x02\u013D\u013B\x03\x02\x02\x02\u013E\u0141\x03\x02" +
		"\x02\x02\u013F\u013D\x03\x02\x02\x02\u013F\u0140\x03\x02\x02\x02\u0140" +
		"\u0143\x03\x02\x02\x02\u0141\u013F\x03\x02\x02\x02\u0142\u0144\x05X-\x02" +
		"\u0143\u0142\x03\x02\x02\x02\u0143\u0144\x03\x02\x02\x02\u0144\u0146\x03" +
		"\x02\x02\x02\u0145\u013A\x03\x02\x02\x02\u0145\u0146\x03\x02\x02\x02\u0146" +
		"\u0147\x03\x02\x02\x02\u0147\u014B\x07\x04\x02\x02\u0148\u014C\x07\n\x02" +
		"\x02\u0149\u014C\x05 \x11\x02\u014A\u014C\x05\x14\v\x02\u014B\u0148\x03" +
		"\x02\x02\x02\u014B\u0149\x03\x02\x02\x02\u014B\u014A\x03\x02\x02\x02\u014C" +
		"\x13\x03\x02\x02\x02\u014D\u014E\x07\v\x02\x02\u014E\u014F\x07l\x02\x02" +
		"\u014F\u0150\x07\n\x02\x02\u0150\x15\x03\x02\x02\x02\u0151\u015D\x07l" +
		"\x02\x02\u0152\u0153\x07\x05\x02\x02\u0153\u0158\x07l\x02\x02\u0154\u0155" +
		"\x07\t\x02\x02\u0155\u0157\x07l\x02\x02\u0156\u0154\x03\x02\x02\x02\u0157" +
		"\u015A\x03\x02\x02\x02\u0158\u0156\x03\x02\x02\x02\u0158\u0159\x03\x02" +
		"\x02\x02\u0159\u015B\x03\x02\x02\x02\u015A\u0158\x03\x02\x02\x02\u015B" +
		"\u015D\x07\x06\x02\x02\u015C\u0151\x03\x02\x02\x02\u015C\u0152\x03\x02" +
		"\x02\x02\u015D\u015E\x03\x02\x02\x02\u015E\u015F\x07%\x02\x02\u015F\x17" +
		"\x03\x02\x02\x02\u0160\u0162\x05\x16\f\x02\u0161\u0160\x03\x02\x02\x02" +
		"\u0161\u0162\x03\x02\x02\x02\u0162\u0163\x03\x02\x02\x02\u0163\u0167\x07" +
		"l\x02\x02\u0164\u0166\x05\x1A\x0E\x02\u0165\u0164\x03\x02\x02\x02\u0166" +
		"\u0169\x03\x02\x02\x02\u0167\u0165\x03\x02\x02\x02\u0167\u0168\x03\x02" +
		"\x02\x02\u0168\x19\x03\x02\x02\x02\u0169\u0167\x03\x02\x02\x02\u016A\u016F" +
		"\x07\x07\x02\x02\u016B\u016D\x05\x8AF\x02\u016C\u016E\x07K\x02\x02\u016D" +
		"\u016C\x03\x02\x02\x02\u016D\u016E\x03\x02\x02\x02\u016E\u0170\x03\x02" +
		"\x02\x02\u016F\u016B\x03\x02\x02\x02\u016F\u0170\x03\x02\x02\x02\u0170" +
		"\u0171\x03\x02\x02\x02\u0171\u0172\x07\b\x02\x02\u0172\x1B\x03\x02\x02" +
		"\x02\u0173\u0177\x05\x1E\x10\x02\u0174\u0177\x07=\x02\x02\u0175\u0177" +
		"\x07>\x02\x02\u0176\u0173\x03\x02\x02\x02\u0176\u0174\x03\x02\x02\x02" +
		"\u0176\u0175\x03\x02\x02\x02\u0177\x1D\x03\x02\x02\x02\u0178\u0179\t\x03" +
		"\x02\x02\u0179\x1F\x03\x02\x02\x02\u017A\u0183\x05\x8AF\x02\u017B\u0183" +
		"\x05$\x13\x02\u017C\u0183\x05|?\x02\u017D\u0183\x05&\x14\x02\u017E\u0183" +
		"\x05(\x15\x02\u017F\u0183\x05*\x16\x02\u0180\u0183\x050\x19\x02\u0181" +
		"\u0183\x05\x0E\b\x02\u0182\u017A\x03\x02\x02\x02\u0182\u017B\x03\x02\x02" +
		"\x02\u0182\u017C\x03\x02\x02\x02\u0182\u017D\x03\x02\x02\x02\u0182\u017E" +
		"\x03\x02\x02\x02\u0182\u017F\x03\x02\x02\x02\u0182\u0180\x03\x02\x02\x02" +
		"\u0182\u0181\x03\x02\x02\x02\u0183\u0184\x03\x02\x02\x02\u0184\u0185\x07" +
		"\n\x02\x02\u0185\u018B\x03\x02\x02\x02\u0186\u018B\x05\"\x12\x02\u0187" +
		"\u018B\x05r:\x02\u0188\u018B\x05,\x17\x02\u0189\u018B\x054\x1B\x02\u018A" +
		"\u0182\x03\x02\x02\x02\u018A\u0186\x03\x02\x02\x02\u018A\u0187\x03\x02" +
		"\x02\x02\u018A\u0188\x03\x02\x02\x02\u018A\u0189\x03\x02\x02\x02\u018B" +
		"!\x03\x02\x02\x02\u018C\u0190\x07\x05\x02\x02\u018D\u018F\x05 \x11\x02" +
		"\u018E\u018D\x03\x02\x02\x02\u018F\u0192\x03\x02\x02\x02\u0190\u018E\x03" +
		"\x02\x02\x02\u0190\u0191\x03\x02\x02\x02\u0191\u0193\x03\x02\x02\x02\u0192" +
		"\u0190\x03\x02\x02\x02\u0193\u0194\x07\x06\x02\x02\u0194#\x03\x02\x02" +
		"\x02\u0195\u0196\x072\x02\x02\u0196\u0197\x05\x8AF\x02\u0197%\x03\x02" +
		"\x02\x02\u0198\u0199\x073\x02\x02\u0199\u019A\x05\x8AF\x02\u019A\'\x03" +
		"\x02\x02\x02\u019B\u019C\x074\x02\x02\u019C\u019D\x05\x8AF\x02\u019D)" +
		"\x03\x02\x02\x02\u019E\u019F\x075\x02\x02\u019F\u01A0\x05\x8AF\x02\u01A0" +
		"+\x03\x02\x02\x02\u01A1\u01A2\x07A\x02\x02\u01A2\u01A3\x052\x1A\x02\u01A3" +
		"\u01A5\x05 \x11\x02\u01A4\u01A6\x05.\x18\x02\u01A5\u01A4\x03\x02\x02\x02" +
		"\u01A5\u01A6\x03\x02\x02\x02\u01A6-\x03\x02\x02\x02\u01A7\u01A8\x07B\x02" +
		"\x02\u01A8\u01A9\x05 \x11\x02\u01A9/\x03\x02\x02\x02\u01AA\u01AC\x077" +
		"\x02\x02\u01AB\u01AD\x05\x8AF\x02\u01AC\u01AB\x03\x02\x02\x02\u01AC\u01AD" +
		"\x03\x02\x02\x02\u01AD1\x03\x02\x02\x02\u01AE\u01AF\x07\x03\x02\x02\u01AF" +
		"\u01B0\x05\x8AF\x02\u01B0\u01B1\x07\x04\x02\x02\u01B13\x03\x02\x02\x02" +
		"\u01B2\u01B3\x07C\x02\x02\u01B3\u01B4\x052\x1A\x02\u01B4\u01B8\x07\x05" +
		"\x02\x02\u01B5\u01B7\x056\x1C\x02\u01B6\u01B5\x03\x02\x02\x02\u01B7\u01BA" +
		"\x03\x02\x02\x02\u01B8\u01B6\x03\x02\x02\x02\u01B8\u01B9\x03\x02\x02\x02" +
		"\u01B9\u01BC\x03\x02\x02\x02\u01BA\u01B8\x03\x02\x02\x02\u01BB\u01BD\x05" +
		"8\x1D\x02\u01BC\u01BB\x03\x02\x02\x02\u01BC\u01BD\x03\x02\x02\x02\u01BD" +
		"\u01BE\x03\x02\x02\x02\u01BE\u01BF\x07\x06\x02\x02\u01BF5\x03\x02\x02" +
		"\x02\u01C0\u01C1\x07D\x02\x02\u01C1\u01C6\x05:\x1E\x02\u01C2\u01C3\x07" +
		"\t\x02\x02\u01C3\u01C5\x05:\x1E\x02\u01C4\u01C2\x03\x02\x02\x02\u01C5" +
		"\u01C8\x03\x02\x02\x02\u01C6\u01C4\x03\x02\x02\x02\u01C6\u01C7\x03\x02" +
		"\x02\x02\u01C7\u01C9\x03\x02\x02\x02\u01C8\u01C6\x03\x02\x02\x02\u01C9" +
		"\u01CA\x07%\x02\x02\u01CA\u01CB\x05 \x11\x02\u01CB7\x03\x02\x02\x02\u01CC" +
		"\u01CD\x07E\x02\x02\u01CD\u01CE\x07%\x02\x02\u01CE\u01CF\x05 \x11\x02" +
		"\u01CF9\x03\x02\x02\x02\u01D0\u01D3\x07l\x02\x02\u01D1\u01D3\x05b2\x02" +
		"\u01D2\u01D0\x03\x02\x02\x02\u01D2\u01D1\x03\x02\x02\x02\u01D3\u01D5\x03" +
		"\x02\x02\x02\u01D4\u01D6\x05<\x1F\x02\u01D5\u01D4\x03\x02\x02\x02\u01D5" +
		"\u01D6\x03\x02\x02\x02\u01D6;\x03\x02\x02\x02\u01D7\u01DA\x070\x02\x02" +
		"\u01D8\u01DB\x07l\x02\x02\u01D9\u01DB\x05b2\x02\u01DA\u01D8\x03\x02\x02" +
		"\x02\u01DA\u01D9\x03\x02\x02\x02\u01DB=\x03\x02\x02\x02\u01DC\u01DF\x07" +
		"\v\x02\x02\u01DD\u01E0\x05\x8AF\x02\u01DE\u01E0\x05B\"\x02\u01DF\u01DD" +
		"\x03\x02\x02\x02\u01DF\u01DE\x03\x02\x02\x02\u01E0?\x03\x02\x02\x02\u01E1" +
		"\u01E2\t\x04\x02\x02\u01E2\u01E8\x05\x18\r\x02\u01E3\u01E4\x05\x18\r\x02" +
		"\u01E4\u01E5\t\x04\x02\x02\u01E5\u01E8\x03\x02\x02\x02\u01E6\u01E8\x05" +
		"\x18\r\x02\u01E7\u01E1\x03\x02\x02\x02\u01E7\u01E3\x03\x02\x02\x02\u01E7" +
		"\u01E6\x03\x02\x02\x02\u01E8A\x03\x02\x02\x02\u01E9\u01EA\x07\x05\x02" +
		"\x02\u01EA\u01EF\x05D#\x02\u01EB\u01EC\x07\t\x02\x02\u01EC\u01EE\x05D" +
		"#\x02\u01ED\u01EB\x03\x02\x02\x02\u01EE\u01F1\x03\x02\x02\x02\u01EF\u01ED" +
		"\x03\x02\x02\x02\u01EF\u01F0\x03\x02\x02\x02\u01F0\u01F2\x03\x02\x02\x02" +
		"\u01F1\u01EF\x03\x02\x02\x02\u01F2\u01F3\x07\x06\x02\x02\u01F3C\x03\x02" +
		"\x02\x02\u01F4\u01F6\x05\x16\f\x02\u01F5\u01F4\x03\x02\x02\x02\u01F5\u01F6" +
		"\x03\x02\x02\x02\u01F6\u01FA\x03\x02\x02\x02\u01F7\u01FB\x07l\x02\x02" +
		"\u01F8\u01FB\x05b2\x02\u01F9\u01FB\x05\x84C\x02\u01FA\u01F7\x03\x02\x02" +
		"\x02\u01FA\u01F8\x03\x02\x02\x02\u01FA\u01F9\x03\x02\x02\x02\u01FB\u01FE" +
		"\x03\x02\x02\x02\u01FC\u01FE\x05B\"\x02\u01FD\u01F5\x03\x02\x02\x02\u01FD" +
		"\u01FC\x03\x02\x02\x02\u01FEE\x03\x02\x02\x02\u01FF\u0200\t\x05\x02\x02" +
		"\u0200G\x03\x02\x02\x02\u0201\u0203\x05\x16\f\x02\u0202\u0201\x03\x02" +
		"\x02\x02\u0202\u0203\x03\x02\x02\x02\u0203\u0204\x03\x02\x02\x02\u0204" +
		"\u0205\x07\x03\x02\x02\u0205\u0206\x05\x8AF\x02\u0206\u0207\x07\x04\x02" +
		"\x02\u0207I\x03\x02\x02\x02\u0208\u020A\x05\x16\f\x02\u0209\u0208\x03" +
		"\x02\x02\x02\u0209\u020A\x03\x02\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"\u020A\u020B\x03\x02\x02\x02\u020B\u020C\x07\x03\x02\x02\u020C\u020D\x05" +
		"L\'\x02\u020D\u020E\x07\x04\x02\x02\u020EK\x03\x02\x02\x02\u020F\u0211" +
		"\x05N(\x02\u0210\u020F\x03\x02\x02\x02\u0210\u0211\x03\x02\x02\x02\u0211" +
		"\u0218\x03\x02\x02\x02\u0212\u0214\x05T+\x02\u0213\u0215\x05P)\x02\u0214" +
		"\u0213\x03\x02\x02\x02\u0214\u0215\x03\x02\x02\x02\u0215\u0219\x03\x02" +
		"\x02\x02\u0216\u0219\x05J&\x02\u0217\u0219\x05B\"\x02\u0218\u0212\x03" +
		"\x02\x02\x02\u0218\u0216\x03\x02\x02\x02\u0218\u0217\x03\x02\x02\x02\u0219" +
		"M\x03\x02\x02\x02\u021A\u021B\t\x06\x02\x02\u021BO\x03\x02\x02\x02\u021C" +
		"\u021E\x05R*\x02\u021D\u021F\x05\x8AF\x02\u021E\u021D\x03\x02\x02\x02" +
		"\u021E\u021F\x03\x02\x02\x02\u021FQ\x03\x02\x02\x02\u0220\u0224\x05j6" +
		"\x02\u0221\u0224\x05l7\x02\u0222\u0224\x05p9\x02\u0223\u0220\x03\x02\x02" +
		"\x02\u0223\u0221\x03\x02\x02\x02\u0223\u0222\x03\x02\x02\x02\u0224S\x03" +
		"\x02\x02\x02\u0225\u0228\x05~@\x02\u0226\u0228\x05\x18\r\x02\u0227\u0225" +
		"\x03\x02\x02\x02\u0227\u0226\x03\x02\x02\x02\u0228U\x03\x02\x02\x02\u0229" +
		"\u022B\x07:\x02\x02\u022A\u0229\x03\x02\x02\x02\u022A\u022B\x03\x02\x02" +
		"\x02\u022B\u022D\x03\x02\x02\x02\u022C\u022E\x05Z.\x02\u022D\u022C\x03" +
		"\x02\x02\x02\u022D\u022E\x03\x02\x02\x02\u022E\u022F\x03\x02\x02\x02\u022F" +
		"\u0232\x05\x18\r\x02\u0230\u0231\x07\v\x02\x02\u0231\u0233\x05\x8AF\x02" +
		"\u0232\u0230\x03\x02\x02\x02\u0232\u0233\x03\x02\x02\x02\u0233W\x03\x02" +
		"\x02\x02\u0234\u0236\x07\t\x02\x02\u0235\u0237\x05\x16\f\x02\u0236\u0235" +
		"\x03\x02\x02\x02\u0236\u0237\x03\x02\x02\x02\u0237\u0238\x03\x02\x02\x02" +
		"\u0238\u0239\x071\x02\x02\u0239Y\x03\x02\x02\x02\u023A\u023B\x07)\x02" +
		"\x02\u023B[\x03\x02\x02\x02\u023C\u023D\t\x07\x02\x02\u023D]\x03\x02\x02" +
		"\x02\u023E\u0241\x05T+\x02\u023F\u0241\x05J&\x02\u0240\u023E\x03\x02\x02" +
		"\x02\u0240\u023F\x03\x02\x02\x02\u0241_\x03\x02\x02\x02\u0242\u0243\x07" +
		"M\x02\x02\u0243a\x03\x02\x02\x02\u0244\u0246\x07\x18\x02\x02\u0245\u0244" +
		"\x03\x02\x02\x02\u0245\u0246\x03\x02\x02\x02\u0246\u024C\x03\x02\x02\x02" +
		"\u0247\u024D\x05f4\x02\u0248\u024D\x05d3\x02\u0249\u024D\x07n\x02\x02" +
		"\u024A\u024D\x07q\x02\x02\u024B\u024D\x07m\x02\x02\u024C\u0247\x03\x02" +
		"\x02\x02\u024C\u0248\x03\x02\x02\x02\u024C\u0249\x03\x02\x02\x02\u024C" +
		"\u024A\x03\x02\x02\x02\u024C\u024B\x03\x02\x02\x02\u024Dc\x03\x02\x02" +
		"\x02\u024E\u024F\x07p\x02\x02\u024Fe\x03\x02\x02\x02\u0250\u0251\x07o" +
		"\x02\x02\u0251g\x03\x02\x02\x02\u0252\u0256\x05j6\x02\u0253\u0256\x05" +
		"n8\x02\u0254\u0256\x07\v\x02\x02\u0255\u0252\x03\x02\x02\x02\u0255\u0253" +
		"\x03\x02\x02\x02\u0255\u0254\x03\x02\x02\x02\u0256i\x03\x02\x02\x02\u0257" +
		"\u0258\t\b\x02\x02\u0258k\x03\x02\x02\x02\u0259\u025D\x07&\x02\x02\u025A" +
		"\u025D\x07\'\x02\x02\u025B\u025D\x05n8\x02\u025C\u0259\x03\x02\x02\x02" +
		"\u025C\u025A\x03\x02\x02\x02\u025C\u025B\x03\x02\x02\x02\u025Dm\x03\x02" +
		"\x02\x02\u025E\u025F\t\t\x02\x02\u025Fo\x03\x02\x02\x02\u0260\u0261\t" +
		"\n\x02\x02\u0261q\x03\x02\x02\x02\u0262\u0266\x05v<\x02\u0263\u0266\x05" +
		"x=\x02\u0264\u0266\x05t;\x02\u0265\u0262\x03\x02\x02\x02\u0265\u0263\x03" +
		"\x02\x02\x02\u0265\u0264\x03\x02\x02\x02\u0266s\x03\x02\x02\x02\u0267" +
		"\u0268\x07H\x02\x02\u0268\u026B\x05 \x11\x02\u0269\u026A\x07F\x02\x02" +
		"\u026A\u026C\x052\x1A\x02\u026B\u0269\x03\x02\x02\x02\u026B\u026C\x03" +
		"\x02\x02\x02\u026Cu\x03\x02\x02\x02\u026D\u026E\x07F\x02\x02\u026E\u026F" +
		"\x052\x1A\x02\u026F\u0270\x05 \x11\x02\u0270w\x03\x02\x02\x02\u0271\u0272" +
		"\x07G\x02\x02\u0272\u0274\x07\x03\x02\x02\u0273\u0275\x05z>\x02\u0274" +
		"\u0273\x03\x02\x02\x02\u0274\u0275\x03\x02\x02\x02\u0275\u0276\x03\x02" +
		"\x02\x02\u0276\u0278\x07\n\x02\x02\u0277\u0279\x05\x8AF\x02\u0278\u0277" +
		"\x03\x02\x02\x02\u0278\u0279\x03\x02\x02\x02\u0279\u027A\x03\x02\x02\x02" +
		"\u027A\u027C\x07\n\x02\x02\u027B\u027D\x05\x8AF\x02\u027C\u027B\x03\x02" +
		"\x02\x02\u027C\u027D\x03\x02\x02\x02\u027D\u027E\x03\x02\x02\x02\u027E" +
		"\u027F\x07\x04\x02\x02\u027F\u0280\x05 \x11\x02\u0280y\x03\x02\x02\x02" +
		"\u0281\u0284\x05\x0E\b\x02\u0282\u0284\x05\x8AF\x02\u0283\u0281\x03\x02" +
		"\x02\x02\u0283\u0282\x03\x02\x02\x02\u0284{\x03\x02\x02\x02\u0285\u0286" +
		"\t\v\x02\x02\u0286}\x03\x02\x02\x02\u0287\u028C\x05\x84C\x02\u0288\u028C" +
		"\x05b2\x02\u0289\u028C\x05\x80A\x02\u028A\u028C\x05\x82B\x02\u028B\u0287" +
		"\x03\x02\x02\x02\u028B\u0288\x03\x02\x02\x02\u028B\u0289\x03\x02\x02\x02" +
		"\u028B\u028A\x03\x02\x02\x02\u028C\x7F\x03\x02\x02\x02\u028D\u028E\t\f" +
		"\x02\x02\u028E\x81\x03\x02\x02\x02\u028F\u0290\t\r\x02\x02\u0290\x83\x03" +
		"\x02\x02\x02\u0291\u0295\t\x0E\x02\x02\u0292\u0294\x05\x84C\x02\u0293" +
		"\u0292\x03\x02\x02\x02\u0294\u0297\x03\x02\x02\x02\u0295\u0293\x03\x02" +
		"\x02\x02\u0295\u0296\x03\x02\x02\x02\u0296\x85\x03\x02\x02\x02\u0297\u0295" +
		"\x03\x02\x02\x02\u0298\u0299\x05\x88E\x02\u0299\x87\x03\x02\x02\x02\u029A" +
		"\u029B\x07t\x02\x02\u029B\x89\x03\x02\x02\x02\u029C\u02A6\x05~@\x02\u029D" +
		"\u02A6\x05\xA4S\x02\u029E\u02A6\x05\x98M\x02\u029F\u02A0\x07\x03\x02\x02" +
		"\u02A0\u02A1\x05\x8AF\x02\u02A1\u02A2\x07\x04\x02\x02\u02A2\u02A6\x03" +
		"\x02\x02\x02\u02A3\u02A6\x05\x8CG\x02\u02A4\u02A6\x05\x8EH\x02\u02A5\u029C" +
		"\x03\x02\x02\x02\u02A5\u029D\x03\x02\x02\x02\u02A5\u029E\x03\x02\x02\x02" +
		"\u02A5\u029F\x03\x02\x02\x02\u02A5\u02A3\x03\x02\x02\x02\u02A5\u02A4\x03" +
		"\x02\x02\x02\u02A6\u02B9\x03\x02\x02\x02\u02A7\u02A9\x07K\x02\x02\u02A8" +
		"\u02A7\x03\x02\x02\x02\u02A8\u02A9\x03\x02\x02\x02\u02A9\u02BA\x03\x02" +
		"\x02\x02\u02AA\u02AB\x07$\x02\x02\u02AB\u02AC\x05\x8AF\x02\u02AC\u02AD" +
		"\x07%\x02\x02\u02AD\u02AE\x05\x8AF\x02\u02AE\u02BA\x03\x02\x02\x02\u02AF" +
		"\u02B0\x05\xB2Z\x02\u02B0\u02B1\x05\x8AF\x02\u02B1\u02B3\x03\x02\x02\x02" +
		"\u02B2\u02AF\x03\x02\x02\x02\u02B3\u02B4\x03\x02\x02\x02\u02B4\u02B2\x03" +
		"\x02\x02\x02\u02B4\u02B5\x03\x02\x02\x02\u02B5\u02BA\x03\x02\x02\x02\u02B6" +
		"\u02B7\x05\x90I\x02\u02B7\u02B8\x05\x8AF\x02\u02B8\u02BA\x03\x02\x02\x02" +
		"\u02B9\u02A8\x03\x02\x02\x02\u02B9\u02AA\x03\x02\x02\x02\u02B9\u02B2\x03" +
		"\x02\x02\x02\u02B9\u02B6\x03\x02\x02\x02\u02BA\x8B\x03\x02\x02\x02\u02BB" +
		"\u02C6\x05\xA8U\x02\u02BC\u02C6\x05\xAAV\x02\u02BD\u02C6\x05\xACW\x02" +
		"\u02BE\u02C6\x05\xAEX\x02\u02BF\u02C6\x05\xB0Y\x02\u02C0\u02C6\x05\xB4" +
		"[\x02\u02C1\u02C6\x05\x9CO\x02\u02C2\u02C6\x05\x9EP\x02\u02C3\u02C6\x05" +
		"\xA0Q\x02\u02C4\u02C6\x05\xA2R\x02\u02C5\u02BB\x03\x02\x02\x02\u02C5\u02BC" +
		"\x03\x02\x02\x02\u02C5\u02BD\x03\x02\x02\x02\u02C5\u02BE\x03\x02\x02\x02" +
		"\u02C5\u02BF\x03\x02\x02\x02\u02C5\u02C0\x03\x02\x02\x02\u02C5\u02C1\x03" +
		"\x02\x02\x02\u02C5\u02C2\x03\x02\x02\x02\u02C5\u02C3\x03\x02\x02\x02\u02C5" +
		"\u02C4\x03\x02\x02\x02\u02C6\x8D\x03\x02\x02\x02\u02C7\u02CC\x05\x92J" +
		"\x02\u02C8\u02CC\x05\x94K\x02\u02C9\u02CC\x05\x96L\x02\u02CA\u02CC\x05" +
		"\x9AN\x02\u02CB\u02C7\x03\x02\x02\x02\u02CB\u02C8\x03\x02\x02\x02\u02CB" +
		"\u02C9\x03\x02\x02\x02\u02CB\u02CA\x03\x02\x02\x02\u02CC\x8F\x03\x02\x02" +
		"\x02\u02CD\u02CE\t\x0F\x02\x02\u02CE\x91\x03\x02\x02\x02\u02CF\u02D0\x05" +
		"\xA6T\x02\u02D0\u02D1\x07\v\x02\x02\u02D1\u02D2\x05\x8AF\x02\u02D2\x93" +
		"\x03\x02\x02\x02\u02D3\u02D9\x07l\x02\x02\u02D4\u02D6\x07\x07\x02\x02" +
		"\u02D5\u02D7\x05\x8AF\x02\u02D6\u02D5\x03\x02\x02\x02\u02D6\u02D7\x03" +
		"\x02\x02\x02\u02D7\u02D8\x03\x02\x02\x02\u02D8\u02DA\x07\b\x02\x02\u02D9" +
		"\u02D4\x03\x02\x02\x02\u02DA\u02DB\x03\x02\x02\x02\u02DB\u02D9\x03\x02" +
		"\x02\x02\u02DB\u02DC\x03\x02\x02\x02\u02DC\x95\x03\x02\x02\x02\u02DD\u02E3" +
		"\x07l\x02\x02\u02DE\u02E0\x07\x05\x02\x02\u02DF\u02E1\x05\x8AF\x02\u02E0" +
		"\u02DF\x03\x02\x02\x02\u02E0\u02E1\x03\x02\x02\x02\u02E1\u02E2\x03\x02" +
		"\x02\x02\u02E2\u02E4\x07\x06\x02\x02\u02E3\u02DE\x03\x02\x02\x02\u02E4" +
		"\u02E5\x03\x02\x02\x02\u02E5\u02E3\x03\x02\x02\x02\u02E5\u02E6\x03\x02" +
		"\x02\x02\u02E6\x97\x03\x02\x02\x02\u02E7\u02E8\x07l\x02\x02\u02E8\u02F1" +
		"\x07\x03\x02\x02\u02E9\u02EE\x05\x8AF\x02\u02EA\u02EB\x07\t\x02\x02\u02EB" +
		"\u02ED\x05\x8AF\x02\u02EC\u02EA\x03\x02\x02\x02\u02ED\u02F0\x03\x02\x02" +
		"\x02\u02EE\u02EC\x03\x02\x02\x02\u02EE\u02EF\x03\x02\x02\x02\u02EF\u02F2" +
		"\x03\x02\x02\x02\u02F0\u02EE\x03\x02\x02\x02\u02F1\u02E9\x03\x02\x02\x02" +
		"\u02F1\u02F2\x03\x02\x02\x02\u02F2\u02F3\x03\x02\x02\x02\u02F3\u02F4\x07" +
		"\x04\x02\x02\u02F4\x99\x03\x02\x02\x02\u02F5\u02F6\x05\x16\f\x02\u02F6" +
		"\u02F7\x05\x8AF\x02\u02F7\x9B\x03\x02\x02\x02\u02F8\u02F9\x07L\x02\x02" +
		"\u02F9\u02FA\x05\xA4S\x02\u02FA\x9D\x03\x02\x02\x02\u02FB\u02FC\x07M\x02" +
		"\x02\u02FC\u02FD\x05\x8AF\x02\u02FD\x9F\x03\x02\x02\x02\u02FE\u02FF\x07" +
		"6\x02\x02\u02FF\u0300\x05\xA4S\x02\u0300\xA1\x03\x02\x02\x02\u0301\u0302" +
		"\x07N\x02\x02\u0302\u0303\x05\x8AF\x02\u0303\xA3\x03\x02\x02\x02\u0304" +
		"\u0305\x07l\x02\x02\u0305\xA5\x03\x02\x02\x02\u0306\u030A\x05\xA4S\x02" +
		"\u0307\u030A\x05\x94K\x02\u0308\u030A\x05\x96L\x02\u0309\u0306\x03\x02" +
		"\x02\x02\u0309\u0307\x03\x02\x02\x02\u0309\u0308\x03\x02\x02\x02\u030A" +
		"\xA7\x03\x02\x02\x02\u030B\u030C\x05\xA6T\x02\u030C\u030D\x07\x1C\x02" +
		"\x02\u030D\xA9\x03\x02\x02\x02\u030E\u030F\x07\x1C\x02\x02\u030F\u0310" +
		"\x05\xA6T\x02\u0310\xAB\x03\x02\x02\x02\u0311\u0312\x05\xA6T\x02\u0312" +
		"\u0313\x07\x1D\x02\x02\u0313\xAD\x03\x02\x02\x02\u0314\u0315\x07\x1D\x02" +
		"\x02\u0315\u0316\x05\xA6T\x02\u0316\xAF\x03\x02\x02\x02\u0317\u0318\x07" +
		",\x02\x02\u0318\u0319\x05\x8AF\x02\u0319\xB1\x03\x02\x02\x02\u031A\u031B" +
		"\t\x10\x02\x02\u031B\xB3\x03\x02\x02\x02\u031C\u031D\x07(\x02\x02\u031D" +
		"\u031E\x05\x8AF\x02\u031E\xB5\x03\x02\x02\x02^\xBA\xC0\xC4\xCC\xD4\xD7" +
		"\xDB\xDE\xE6\xEA\xEC\xF0\xF5\u0100\u0106\u0108\u010C\u0111\u0115\u0119" +
		"\u011C\u0125\u0129\u012B\u0131\u0135\u013F\u0143\u0145\u014B\u0158\u015C" +
		"\u0161\u0167\u016D\u016F\u0176\u0182\u018A\u0190\u01A5\u01AC\u01B8\u01BC" +
		"\u01C6\u01D2\u01D5\u01DA\u01DF\u01E7\u01EF\u01F5\u01FA\u01FD\u0202\u0209" +
		"\u0210\u0214\u0218\u021E\u0223\u0227\u022A\u022D\u0232\u0236\u0240\u0245" +
		"\u024C\u0255\u025C\u0265\u026B\u0274\u0278\u027C\u0283\u028B\u0295\u02A5" +
		"\u02A8\u02B4\u02B9\u02C5\u02CB\u02D6\u02DB\u02E0\u02E5\u02EE\u02F1\u0309";
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
	public variable(): VariableContext[];
	public variable(i: number): VariableContext;
	public variable(i?: number): VariableContext | VariableContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableContext);
		} else {
			return this.getRuleContext(i, VariableContext);
		}
	}
	public NEW(): TerminalNode | undefined { return this.tryGetToken(pawnParser.NEW, 0); }
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


export class FunctionDeclContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(pawnParser.IDENTIFIER, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(pawnParser.OPEN_PARENTHESIS, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(pawnParser.CLOSE_PARENTHESIS, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(pawnParser.SEMI, 0); }
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
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
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
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
	public condition(): ConditionContext {
		return this.getRuleContext(0, ConditionContext);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
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


export class AssigmentContext extends ParserRuleContext {
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
	public _operator!: OperatorsContext;
	public operators(): OperatorsContext {
		return this.getRuleContext(0, OperatorsContext);
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


export class OperatorsContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return pawnParser.RULE_operators; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterOperators) {
			listener.enterOperators(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitOperators) {
			listener.exitOperators(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitOperators) {
			return visitor.visitOperators(this);
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


export class ExpresionContext extends ParserRuleContext {
	public _operator!: BinarExpressionOperatorsContext;
	public _right!: ExpresionContext;
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
	public expresion(): ExpresionContext[];
	public expresion(i: number): ExpresionContext;
	public expresion(i?: number): ExpresionContext | ExpresionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpresionContext);
		} else {
			return this.getRuleContext(i, ExpresionContext);
		}
	}
	public CLOSE_PARENTHESIS(): TerminalNode | undefined { return this.tryGetToken(pawnParser.CLOSE_PARENTHESIS, 0); }
	public unarOperator(): UnarOperatorContext | undefined {
		return this.tryGetRuleContext(0, UnarOperatorContext);
	}
	public binarOperator(): BinarOperatorContext | undefined {
		return this.tryGetRuleContext(0, BinarOperatorContext);
	}
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(pawnParser.QUESTION, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(pawnParser.COLON, 0); }
	public binarExpressionOperators(): BinarExpressionOperatorsContext | undefined {
		return this.tryGetRuleContext(0, BinarExpressionOperatorsContext);
	}
	public CHAR(): TerminalNode | undefined { return this.tryGetToken(pawnParser.CHAR, 0); }
	public chainedRelationalOperators(): ChainedRelationalOperatorsContext[];
	public chainedRelationalOperators(i: number): ChainedRelationalOperatorsContext;
	public chainedRelationalOperators(i?: number): ChainedRelationalOperatorsContext | ChainedRelationalOperatorsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ChainedRelationalOperatorsContext);
		} else {
			return this.getRuleContext(i, ChainedRelationalOperatorsContext);
		}
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
	public complemen(): ComplemenContext | undefined {
		return this.tryGetRuleContext(0, ComplemenContext);
	}
	public notOperator(): NotOperatorContext | undefined {
		return this.tryGetRuleContext(0, NotOperatorContext);
	}
	public definedOperator(): DefinedOperatorContext | undefined {
		return this.tryGetRuleContext(0, DefinedOperatorContext);
	}
	public sizeofOperator(): SizeofOperatorContext | undefined {
		return this.tryGetRuleContext(0, SizeofOperatorContext);
	}
	public stateOperator(): StateOperatorContext | undefined {
		return this.tryGetRuleContext(0, StateOperatorContext);
	}
	public tagofOperator(): TagofOperatorContext | undefined {
		return this.tryGetRuleContext(0, TagofOperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_unarOperator; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterUnarOperator) {
			listener.enterUnarOperator(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
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


export class BinarOperatorContext extends ParserRuleContext {
	public assigmentOperator(): AssigmentOperatorContext | undefined {
		return this.tryGetRuleContext(0, AssigmentOperatorContext);
	}
	public arrayIndexOperator(): ArrayIndexOperatorContext | undefined {
		return this.tryGetRuleContext(0, ArrayIndexOperatorContext);
	}
	public arrayCharOperator(): ArrayCharOperatorContext | undefined {
		return this.tryGetRuleContext(0, ArrayCharOperatorContext);
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
	public enterRule(listener: pawnListener): void {
		if (listener.enterBinarOperator) {
			listener.enterBinarOperator(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
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
	public enterRule(listener: pawnListener): void {
		if (listener.enterBinarExpressionOperators) {
			listener.enterBinarExpressionOperators(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
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
	public enterRule(listener: pawnListener): void {
		if (listener.enterAssigmentOperator) {
			listener.enterAssigmentOperator(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
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


export class ArrayIndexOperatorContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(pawnParser.IDENTIFIER, 0); }
	public SQUARE_OPEN_BRACKET(): TerminalNode[];
	public SQUARE_OPEN_BRACKET(i: number): TerminalNode;
	public SQUARE_OPEN_BRACKET(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pawnParser.SQUARE_OPEN_BRACKET);
		} else {
			return this.getToken(pawnParser.SQUARE_OPEN_BRACKET, i);
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
	public get ruleIndex(): number { return pawnParser.RULE_arrayIndexOperator; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterArrayIndexOperator) {
			listener.enterArrayIndexOperator(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
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


export class ArrayCharOperatorContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(pawnParser.IDENTIFIER, 0); }
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
	public get ruleIndex(): number { return pawnParser.RULE_arrayCharOperator; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterArrayCharOperator) {
			listener.enterArrayCharOperator(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitArrayCharOperator) {
			listener.exitArrayCharOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitArrayCharOperator) {
			return visitor.visitArrayCharOperator(this);
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


export class TagOperatorContext extends ParserRuleContext {
	public tag(): TagContext {
		return this.getRuleContext(0, TagContext);
	}
	public expresion(): ExpresionContext {
		return this.getRuleContext(0, ExpresionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_tagOperator; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterTagOperator) {
			listener.enterTagOperator(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
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


export class DefinedOperatorContext extends ParserRuleContext {
	public DEFINED(): TerminalNode { return this.getToken(pawnParser.DEFINED, 0); }
	public symbol(): SymbolContext {
		return this.getRuleContext(0, SymbolContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_definedOperator; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterDefinedOperator) {
			listener.enterDefinedOperator(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitDefinedOperator) {
			listener.exitDefinedOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitDefinedOperator) {
			return visitor.visitDefinedOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SizeofOperatorContext extends ParserRuleContext {
	public SIZEOF(): TerminalNode { return this.getToken(pawnParser.SIZEOF, 0); }
	public expresion(): ExpresionContext {
		return this.getRuleContext(0, ExpresionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_sizeofOperator; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterSizeofOperator) {
			listener.enterSizeofOperator(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitSizeofOperator) {
			listener.exitSizeofOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitSizeofOperator) {
			return visitor.visitSizeofOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StateOperatorContext extends ParserRuleContext {
	public STATE(): TerminalNode { return this.getToken(pawnParser.STATE, 0); }
	public symbol(): SymbolContext {
		return this.getRuleContext(0, SymbolContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_stateOperator; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterStateOperator) {
			listener.enterStateOperator(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitStateOperator) {
			listener.exitStateOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitStateOperator) {
			return visitor.visitStateOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagofOperatorContext extends ParserRuleContext {
	public TAGOF(): TerminalNode { return this.getToken(pawnParser.TAGOF, 0); }
	public expresion(): ExpresionContext {
		return this.getRuleContext(0, ExpresionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_tagofOperator; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterTagofOperator) {
			listener.enterTagofOperator(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitTagofOperator) {
			listener.exitTagofOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitTagofOperator) {
			return visitor.visitTagofOperator(this);
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


export class LvalueContext extends ParserRuleContext {
	public symbol(): SymbolContext | undefined {
		return this.tryGetRuleContext(0, SymbolContext);
	}
	public arrayIndexOperator(): ArrayIndexOperatorContext | undefined {
		return this.tryGetRuleContext(0, ArrayIndexOperatorContext);
	}
	public arrayCharOperator(): ArrayCharOperatorContext | undefined {
		return this.tryGetRuleContext(0, ArrayCharOperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_lvalue; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterLvalue) {
			listener.enterLvalue(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
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
	public enterRule(listener: pawnListener): void {
		if (listener.enterPostIncrement) {
			listener.enterPostIncrement(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
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
	public enterRule(listener: pawnListener): void {
		if (listener.enterPreIncrement) {
			listener.enterPreIncrement(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
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
	public enterRule(listener: pawnListener): void {
		if (listener.enterPostDecrement) {
			listener.enterPostDecrement(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
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
	public enterRule(listener: pawnListener): void {
		if (listener.enterPreDecrement) {
			listener.enterPreDecrement(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
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


export class ComplemenContext extends ParserRuleContext {
	public BIT_COMPLEMEN(): TerminalNode { return this.getToken(pawnParser.BIT_COMPLEMEN, 0); }
	public expresion(): ExpresionContext {
		return this.getRuleContext(0, ExpresionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_complemen; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterComplemen) {
			listener.enterComplemen(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitComplemen) {
			listener.exitComplemen(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitComplemen) {
			return visitor.visitComplemen(this);
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
	public enterRule(listener: pawnListener): void {
		if (listener.enterChainedRelationalOperators) {
			listener.enterChainedRelationalOperators(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
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


export class NotOperatorContext extends ParserRuleContext {
	public NOT(): TerminalNode { return this.getToken(pawnParser.NOT, 0); }
	public expresion(): ExpresionContext {
		return this.getRuleContext(0, ExpresionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pawnParser.RULE_notOperator; }
	// @Override
	public enterRule(listener: pawnListener): void {
		if (listener.enterNotOperator) {
			listener.enterNotOperator(this);
		}
	}
	// @Override
	public exitRule(listener: pawnListener): void {
		if (listener.exitNotOperator) {
			listener.exitNotOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pawnVisitor<Result>): Result {
		if (visitor.visitNotOperator) {
			return visitor.visitNotOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


