// Generated from d:/test-pawn/src/antlr/generated/pawn.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class pawnParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		OPEN_PARENTHESIS=1, CLOSE_PARENTHESIS=2, CURLY_OPEN_BRACKET=3, CURLY_CLOSE_BRACKET=4, 
		SQUARE_OPEN_BRACKET=5, SQUARE_CLOSE_BRACKET=6, COMA=7, SEMI=8, ASSIGMENT=9, 
		ASSIGMENT_PLUS=10, ASSIGMENT_MINUS=11, ASSIGMENT_MULT=12, ASSIGMENT_DIV=13, 
		ASSIGMENT_REMAINDE=14, ASSIGMENT_AND=15, ASSIGMENT_OR=16, ASSIGMENT_XOR=17, 
		ASSIGMENT_RIGHT=18, ASSIGMENT_RIGHT_LOG=19, ASSIGMENT_LEFT=20, PLUS=21, 
		MINUS=22, MULTY=23, DIV=24, REMAINDE=25, INCREMENTS=26, DECREMENTS=27, 
		EQUAL=28, NOTEQUAL=29, LESS=30, LARGER=31, LESSEQ=32, LARGEREQ=33, QUESTION=34, 
		COLON=35, OR=36, AND=37, NOT=38, BIT_AND=39, BIT_OR=40, BIT_XOR=41, BIT_COMPLEMEN=42, 
		BIT_RIGHT=43, BIT_LEFT=44, BIT_RIGHT_LOG=45, PERIOD=46, PERIOD_FUNC=47, 
		ASSERT=48, EXIT=49, GOTO=50, SLEEP=51, STATE=52, RETURN=53, NEW=54, ENUM=55, 
		CONST=56, STATIC=57, STOCK=58, FORWARD=59, NATIVE=60, PUBLIC=61, OPERATOR=62, 
		IF=63, ELSE=64, SWITCH=65, CASE=66, DEFAULT=67, WHILE=68, FOR=69, DO=70, 
		CONTINUE=71, BREAK=72, CHAR=73, DEFINED=74, SIZEOF=75, TAGOF=76, DEFINE=77, 
		ELSEIF=78, EMIT=79, ENDIF=80, ENDINPUT=81, ENDSCRIPT=82, FILE=83, INCLUDE=84, 
		LINE=85, PRAGMA=86, SECTION=87, TRYINCLUDE=88, UNDEF=89, DYNAMIC=90, WARNING=91, 
		TRUE=92, FALSE=93, SHARPSTRING=94, STRING=95, IDENTIFIER=96, HEX=97, INTEGER=98, 
		FLOAT=99, Whitespace=100, Newline=101, BlockComment=102, LineComment=103, 
		ANGLEDSTRING=104;
	public static final int
		RULE_file = 0, RULE_declaration = 1, RULE_enum = 2, RULE_enumMember = 3, 
		RULE_enumIterator = 4, RULE_var_definition = 5, RULE_functionDecl = 6, 
		RULE_operatorOverload = 7, RULE_nativeAssigment = 8, RULE_tag = 9, RULE_variable = 10, 
		RULE_arrayIndex = 11, RULE_funcDeclModif = 12, RULE_funcModif = 13, RULE_statement = 14, 
		RULE_controlStatments = 15, RULE_assigment = 16, RULE_arrayInit = 17, 
		RULE_arrayInitMember = 18, RULE_assigments = 19, RULE_grouping = 20, RULE_constGrouping = 21, 
		RULE_expresion = 22, RULE_constExpresion = 23, RULE_ternarOperator = 24, 
		RULE_preOperators = 25, RULE_operation = 26, RULE_varOrLiteral = 27, RULE_declParams = 28, 
		RULE_ellipse = 29, RULE_reference = 30, RULE_varModifires = 31, RULE_rValue = 32, 
		RULE_constRValue = 33, RULE_sizeof = 34, RULE_number = 35, RULE_integer = 36, 
		RULE_float = 37, RULE_hex = 38, RULE_operator = 39, RULE_canBeOverloaded = 40, 
		RULE_arefmeticOperator = 41, RULE_logicOperator = 42, RULE_compareOperator = 43, 
		RULE_bitwiseOperator = 44, RULE_if_statement = 45, RULE_else_statement = 46, 
		RULE_switch = 47, RULE_case = 48, RULE_default = 49, RULE_case_list = 50, 
		RULE_range = 51, RULE_condition = 52, RULE_codeBlock = 53, RULE_return = 54, 
		RULE_cycles = 55, RULE_do = 56, RULE_while = 57, RULE_for = 58, RULE_cycleBody = 59, 
		RULE_cycleKeywords = 60, RULE_literal = 61, RULE_bool_const = 62, RULE_string = 63, 
		RULE_angledString = 64, RULE_functionCall = 65;
	private static String[] makeRuleNames() {
		return new String[] {
			"file", "declaration", "enum", "enumMember", "enumIterator", "var_definition", 
			"functionDecl", "operatorOverload", "nativeAssigment", "tag", "variable", 
			"arrayIndex", "funcDeclModif", "funcModif", "statement", "controlStatments", 
			"assigment", "arrayInit", "arrayInitMember", "assigments", "grouping", 
			"constGrouping", "expresion", "constExpresion", "ternarOperator", "preOperators", 
			"operation", "varOrLiteral", "declParams", "ellipse", "reference", "varModifires", 
			"rValue", "constRValue", "sizeof", "number", "integer", "float", "hex", 
			"operator", "canBeOverloaded", "arefmeticOperator", "logicOperator", 
			"compareOperator", "bitwiseOperator", "if_statement", "else_statement", 
			"switch", "case", "default", "case_list", "range", "condition", "codeBlock", 
			"return", "cycles", "do", "while", "for", "cycleBody", "cycleKeywords", 
			"literal", "bool_const", "string", "angledString", "functionCall"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'('", "')'", "'{'", "'}'", "'['", "']'", "','", "';'", "'='", 
			"'+='", "'-='", "'*='", "'/='", "'%='", "'&='", "'|='", "'^='", "'>>='", 
			"'>>>='", "'<<='", "'+'", "'-'", "'*'", "'/'", "'%'", "'++'", "'--'", 
			"'=='", "'!='", "'<'", "'>'", "'<='", "'>='", "'?'", "':'", "'||'", "'&&'", 
			"'!'", "'&'", "'|'", "'^'", "'~'", "'>>'", "'<<'", "'>>>'", "'..'", "'...'", 
			"'assert'", "'exit'", "'goto'", "'sleep'", "'state'", "'return'", "'new'", 
			"'enum'", "'const'", "'static'", "'stock'", "'forward'", "'native'", 
			"'public'", "'operator'", "'if'", "'else'", "'switch'", "'case'", "'default'", 
			"'while'", "'for'", "'do'", "'continue'", "'break'", "'char'", "'defined'", 
			"'sizeof'", "'tagof'", "'define'", "'elseif'", "'emit'", "'endif'", "'endinput'", 
			"'endscript'", "'file'", "'include'", "'line'", "'pragma'", "'section'", 
			"'tryinclude'", "'undef'", "'dynamic'", "'warning'", "'true'", "'false'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "OPEN_PARENTHESIS", "CLOSE_PARENTHESIS", "CURLY_OPEN_BRACKET", 
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
			"IDENTIFIER", "HEX", "INTEGER", "FLOAT", "Whitespace", "Newline", "BlockComment", 
			"LineComment", "ANGLEDSTRING"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "pawn.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public pawnParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FileContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(pawnParser.EOF, 0); }
		public List<DeclarationContext> declaration() {
			return getRuleContexts(DeclarationContext.class);
		}
		public DeclarationContext declaration(int i) {
			return getRuleContext(DeclarationContext.class,i);
		}
		public FileContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_file; }
	}

	public final FileContext file() throws RecognitionException {
		FileContext _localctx = new FileContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_file);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(135);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 4593671619917905928L) != 0) || _la==IDENTIFIER) {
				{
				{
				setState(132);
				declaration();
				}
				}
				setState(137);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(138);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DeclarationContext extends ParserRuleContext {
		public FunctionDeclContext functionDecl() {
			return getRuleContext(FunctionDeclContext.class,0);
		}
		public OperatorOverloadContext operatorOverload() {
			return getRuleContext(OperatorOverloadContext.class,0);
		}
		public Var_definitionContext var_definition() {
			return getRuleContext(Var_definitionContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(pawnParser.SEMI, 0); }
		public EnumContext enum_() {
			return getRuleContext(EnumContext.class,0);
		}
		public DeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declaration; }
	}

	public final DeclarationContext declaration() throws RecognitionException {
		DeclarationContext _localctx = new DeclarationContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_declaration);
		try {
			setState(148);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CURLY_OPEN_BRACKET:
			case NEW:
			case CONST:
			case STATIC:
			case STOCK:
			case FORWARD:
			case NATIVE:
			case PUBLIC:
			case IDENTIFIER:
				enterOuterAlt(_localctx, 1);
				{
				setState(145);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
				case 1:
					{
					setState(140);
					functionDecl();
					}
					break;
				case 2:
					{
					setState(141);
					operatorOverload();
					}
					break;
				case 3:
					{
					setState(142);
					var_definition();
					setState(143);
					match(SEMI);
					}
					break;
				}
				}
				break;
			case ENUM:
				enterOuterAlt(_localctx, 2);
				{
				setState(147);
				enum_();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class EnumContext extends ParserRuleContext {
		public TerminalNode ENUM() { return getToken(pawnParser.ENUM, 0); }
		public TerminalNode CURLY_OPEN_BRACKET() { return getToken(pawnParser.CURLY_OPEN_BRACKET, 0); }
		public TerminalNode CURLY_CLOSE_BRACKET() { return getToken(pawnParser.CURLY_CLOSE_BRACKET, 0); }
		public TerminalNode IDENTIFIER() { return getToken(pawnParser.IDENTIFIER, 0); }
		public EnumIteratorContext enumIterator() {
			return getRuleContext(EnumIteratorContext.class,0);
		}
		public List<EnumMemberContext> enumMember() {
			return getRuleContexts(EnumMemberContext.class);
		}
		public EnumMemberContext enumMember(int i) {
			return getRuleContext(EnumMemberContext.class,i);
		}
		public TerminalNode SEMI() { return getToken(pawnParser.SEMI, 0); }
		public List<TerminalNode> COMA() { return getTokens(pawnParser.COMA); }
		public TerminalNode COMA(int i) {
			return getToken(pawnParser.COMA, i);
		}
		public EnumContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enum; }
	}

	public final EnumContext enum_() throws RecognitionException {
		EnumContext _localctx = new EnumContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_enum);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(150);
			match(ENUM);
			setState(152);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IDENTIFIER) {
				{
				setState(151);
				match(IDENTIFIER);
				}
			}

			setState(155);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==OPEN_PARENTHESIS) {
				{
				setState(154);
				enumIterator();
				}
			}

			setState(157);
			match(CURLY_OPEN_BRACKET);
			setState(169);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CURLY_OPEN_BRACKET || _la==IDENTIFIER) {
				{
				setState(158);
				enumMember();
				setState(163);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,5,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(159);
						match(COMA);
						setState(160);
						enumMember();
						}
						} 
					}
					setState(165);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,5,_ctx);
				}
				setState(167);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COMA) {
					{
					setState(166);
					match(COMA);
					}
				}

				}
			}

			setState(171);
			match(CURLY_CLOSE_BRACKET);
			setState(173);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(172);
				match(SEMI);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class EnumMemberContext extends ParserRuleContext {
		public VariableContext variable() {
			return getRuleContext(VariableContext.class,0);
		}
		public TerminalNode ASSIGMENT() { return getToken(pawnParser.ASSIGMENT, 0); }
		public ExpresionContext expresion() {
			return getRuleContext(ExpresionContext.class,0);
		}
		public EnumMemberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumMember; }
	}

	public final EnumMemberContext enumMember() throws RecognitionException {
		EnumMemberContext _localctx = new EnumMemberContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_enumMember);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(175);
			variable();
			setState(178);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ASSIGMENT) {
				{
				setState(176);
				match(ASSIGMENT);
				setState(177);
				expresion();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class EnumIteratorContext extends ParserRuleContext {
		public TerminalNode OPEN_PARENTHESIS() { return getToken(pawnParser.OPEN_PARENTHESIS, 0); }
		public TerminalNode INTEGER() { return getToken(pawnParser.INTEGER, 0); }
		public TerminalNode CLOSE_PARENTHESIS() { return getToken(pawnParser.CLOSE_PARENTHESIS, 0); }
		public TerminalNode ASSIGMENT_PLUS() { return getToken(pawnParser.ASSIGMENT_PLUS, 0); }
		public TerminalNode ASSIGMENT_MULT() { return getToken(pawnParser.ASSIGMENT_MULT, 0); }
		public TerminalNode ASSIGMENT_LEFT() { return getToken(pawnParser.ASSIGMENT_LEFT, 0); }
		public EnumIteratorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumIterator; }
	}

	public final EnumIteratorContext enumIterator() throws RecognitionException {
		EnumIteratorContext _localctx = new EnumIteratorContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_enumIterator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(180);
			match(OPEN_PARENTHESIS);
			setState(181);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 1053696L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(182);
			match(INTEGER);
			setState(183);
			match(CLOSE_PARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Var_definitionContext extends ParserRuleContext {
		public List<VariableContext> variable() {
			return getRuleContexts(VariableContext.class);
		}
		public VariableContext variable(int i) {
			return getRuleContext(VariableContext.class,i);
		}
		public List<AssigmentContext> assigment() {
			return getRuleContexts(AssigmentContext.class);
		}
		public AssigmentContext assigment(int i) {
			return getRuleContext(AssigmentContext.class,i);
		}
		public List<TerminalNode> COMA() { return getTokens(pawnParser.COMA); }
		public TerminalNode COMA(int i) {
			return getToken(pawnParser.COMA, i);
		}
		public TerminalNode NEW() { return getToken(pawnParser.NEW, 0); }
		public List<VarModifiresContext> varModifires() {
			return getRuleContexts(VarModifiresContext.class);
		}
		public VarModifiresContext varModifires(int i) {
			return getRuleContext(VarModifiresContext.class,i);
		}
		public Var_definitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_var_definition; }
	}

	public final Var_definitionContext var_definition() throws RecognitionException {
		Var_definitionContext _localctx = new Var_definitionContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_var_definition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(197);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NEW:
				{
				{
				setState(185);
				match(NEW);
				setState(189);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 2810246167479189504L) != 0)) {
					{
					{
					setState(186);
					varModifires();
					}
					}
					setState(191);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				}
				break;
			case CONST:
			case STATIC:
			case STOCK:
			case PUBLIC:
				{
				{
				setState(193); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(192);
					varModifires();
					}
					}
					setState(195); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & 2810246167479189504L) != 0) );
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(201);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,13,_ctx) ) {
			case 1:
				{
				setState(199);
				variable();
				}
				break;
			case 2:
				{
				setState(200);
				assigment();
				}
				break;
			}
			setState(210);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMA) {
				{
				{
				setState(203);
				match(COMA);
				setState(206);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,14,_ctx) ) {
				case 1:
					{
					setState(204);
					variable();
					}
					break;
				case 2:
					{
					setState(205);
					assigment();
					}
					break;
				}
				}
				}
				setState(212);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FunctionDeclContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(pawnParser.IDENTIFIER, 0); }
		public TerminalNode OPEN_PARENTHESIS() { return getToken(pawnParser.OPEN_PARENTHESIS, 0); }
		public TerminalNode CLOSE_PARENTHESIS() { return getToken(pawnParser.CLOSE_PARENTHESIS, 0); }
		public TerminalNode SEMI() { return getToken(pawnParser.SEMI, 0); }
		public CodeBlockContext codeBlock() {
			return getRuleContext(CodeBlockContext.class,0);
		}
		public NativeAssigmentContext nativeAssigment() {
			return getRuleContext(NativeAssigmentContext.class,0);
		}
		public FuncDeclModifContext funcDeclModif() {
			return getRuleContext(FuncDeclModifContext.class,0);
		}
		public TagContext tag() {
			return getRuleContext(TagContext.class,0);
		}
		public List<DeclParamsContext> declParams() {
			return getRuleContexts(DeclParamsContext.class);
		}
		public DeclParamsContext declParams(int i) {
			return getRuleContext(DeclParamsContext.class,i);
		}
		public List<TerminalNode> COMA() { return getTokens(pawnParser.COMA); }
		public TerminalNode COMA(int i) {
			return getToken(pawnParser.COMA, i);
		}
		public EllipseContext ellipse() {
			return getRuleContext(EllipseContext.class,0);
		}
		public FunctionDeclContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionDecl; }
	}

	public final FunctionDeclContext functionDecl() throws RecognitionException {
		FunctionDeclContext _localctx = new FunctionDeclContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_functionDecl);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(214);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 4323455642275676160L) != 0)) {
				{
				setState(213);
				funcDeclModif();
				}
			}

			setState(217);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
			case 1:
				{
				setState(216);
				tag();
				}
				break;
			}
			setState(219);
			match(IDENTIFIER);
			setState(220);
			match(OPEN_PARENTHESIS);
			setState(232);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 72058143793741832L) != 0) || _la==IDENTIFIER) {
				{
				setState(221);
				declParams();
				setState(226);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,18,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(222);
						match(COMA);
						setState(223);
						declParams();
						}
						} 
					}
					setState(228);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,18,_ctx);
				}
				setState(230);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COMA) {
					{
					setState(229);
					ellipse();
					}
				}

				}
			}

			setState(234);
			match(CLOSE_PARENTHESIS);
			setState(238);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case SEMI:
				{
				setState(235);
				match(SEMI);
				}
				break;
			case CURLY_OPEN_BRACKET:
			case RETURN:
			case NEW:
			case CONST:
			case STATIC:
			case STOCK:
			case PUBLIC:
			case IF:
			case SWITCH:
			case WHILE:
			case FOR:
			case DO:
			case IDENTIFIER:
				{
				setState(236);
				codeBlock();
				}
				break;
			case ASSIGMENT:
				{
				setState(237);
				nativeAssigment();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class OperatorOverloadContext extends ParserRuleContext {
		public TerminalNode OPERATOR() { return getToken(pawnParser.OPERATOR, 0); }
		public CanBeOverloadedContext canBeOverloaded() {
			return getRuleContext(CanBeOverloadedContext.class,0);
		}
		public TerminalNode OPEN_PARENTHESIS() { return getToken(pawnParser.OPEN_PARENTHESIS, 0); }
		public TerminalNode CLOSE_PARENTHESIS() { return getToken(pawnParser.CLOSE_PARENTHESIS, 0); }
		public FuncDeclModifContext funcDeclModif() {
			return getRuleContext(FuncDeclModifContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(pawnParser.SEMI, 0); }
		public CodeBlockContext codeBlock() {
			return getRuleContext(CodeBlockContext.class,0);
		}
		public NativeAssigmentContext nativeAssigment() {
			return getRuleContext(NativeAssigmentContext.class,0);
		}
		public TagContext tag() {
			return getRuleContext(TagContext.class,0);
		}
		public List<DeclParamsContext> declParams() {
			return getRuleContexts(DeclParamsContext.class);
		}
		public DeclParamsContext declParams(int i) {
			return getRuleContext(DeclParamsContext.class,i);
		}
		public List<TerminalNode> COMA() { return getTokens(pawnParser.COMA); }
		public TerminalNode COMA(int i) {
			return getToken(pawnParser.COMA, i);
		}
		public EllipseContext ellipse() {
			return getRuleContext(EllipseContext.class,0);
		}
		public OperatorOverloadContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_operatorOverload; }
	}

	public final OperatorOverloadContext operatorOverload() throws RecognitionException {
		OperatorOverloadContext _localctx = new OperatorOverloadContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_operatorOverload);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(240);
			funcDeclModif();
			}
			setState(242);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CURLY_OPEN_BRACKET || _la==IDENTIFIER) {
				{
				setState(241);
				tag();
				}
			}

			setState(244);
			match(OPERATOR);
			setState(245);
			canBeOverloaded();
			setState(246);
			match(OPEN_PARENTHESIS);
			setState(258);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 72058143793741832L) != 0) || _la==IDENTIFIER) {
				{
				setState(247);
				declParams();
				setState(252);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,23,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(248);
						match(COMA);
						setState(249);
						declParams();
						}
						} 
					}
					setState(254);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,23,_ctx);
				}
				setState(256);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COMA) {
					{
					setState(255);
					ellipse();
					}
				}

				}
			}

			setState(260);
			match(CLOSE_PARENTHESIS);
			setState(264);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case SEMI:
				{
				setState(261);
				match(SEMI);
				}
				break;
			case CURLY_OPEN_BRACKET:
			case RETURN:
			case NEW:
			case CONST:
			case STATIC:
			case STOCK:
			case PUBLIC:
			case IF:
			case SWITCH:
			case WHILE:
			case FOR:
			case DO:
			case IDENTIFIER:
				{
				setState(262);
				codeBlock();
				}
				break;
			case ASSIGMENT:
				{
				setState(263);
				nativeAssigment();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class NativeAssigmentContext extends ParserRuleContext {
		public TerminalNode ASSIGMENT() { return getToken(pawnParser.ASSIGMENT, 0); }
		public TerminalNode IDENTIFIER() { return getToken(pawnParser.IDENTIFIER, 0); }
		public TerminalNode SEMI() { return getToken(pawnParser.SEMI, 0); }
		public NativeAssigmentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nativeAssigment; }
	}

	public final NativeAssigmentContext nativeAssigment() throws RecognitionException {
		NativeAssigmentContext _localctx = new NativeAssigmentContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_nativeAssigment);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(266);
			match(ASSIGMENT);
			setState(267);
			match(IDENTIFIER);
			setState(268);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TagContext extends ParserRuleContext {
		public TerminalNode COLON() { return getToken(pawnParser.COLON, 0); }
		public List<TerminalNode> IDENTIFIER() { return getTokens(pawnParser.IDENTIFIER); }
		public TerminalNode IDENTIFIER(int i) {
			return getToken(pawnParser.IDENTIFIER, i);
		}
		public TerminalNode CURLY_OPEN_BRACKET() { return getToken(pawnParser.CURLY_OPEN_BRACKET, 0); }
		public TerminalNode CURLY_CLOSE_BRACKET() { return getToken(pawnParser.CURLY_CLOSE_BRACKET, 0); }
		public List<TerminalNode> COMA() { return getTokens(pawnParser.COMA); }
		public TerminalNode COMA(int i) {
			return getToken(pawnParser.COMA, i);
		}
		public TagContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tag; }
	}

	public final TagContext tag() throws RecognitionException {
		TagContext _localctx = new TagContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_tag);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(281);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IDENTIFIER:
				{
				setState(270);
				match(IDENTIFIER);
				}
				break;
			case CURLY_OPEN_BRACKET:
				{
				{
				setState(271);
				match(CURLY_OPEN_BRACKET);
				setState(272);
				match(IDENTIFIER);
				setState(277);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMA) {
					{
					{
					setState(273);
					match(COMA);
					setState(274);
					match(IDENTIFIER);
					}
					}
					setState(279);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(280);
				match(CURLY_CLOSE_BRACKET);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(283);
			match(COLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class VariableContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(pawnParser.IDENTIFIER, 0); }
		public TagContext tag() {
			return getRuleContext(TagContext.class,0);
		}
		public List<ArrayIndexContext> arrayIndex() {
			return getRuleContexts(ArrayIndexContext.class);
		}
		public ArrayIndexContext arrayIndex(int i) {
			return getRuleContext(ArrayIndexContext.class,i);
		}
		public VariableContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variable; }
	}

	public final VariableContext variable() throws RecognitionException {
		VariableContext _localctx = new VariableContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_variable);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(286);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,29,_ctx) ) {
			case 1:
				{
				setState(285);
				tag();
				}
				break;
			}
			setState(288);
			match(IDENTIFIER);
			setState(292);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==SQUARE_OPEN_BRACKET) {
				{
				{
				setState(289);
				arrayIndex();
				}
				}
				setState(294);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ArrayIndexContext extends ParserRuleContext {
		public TerminalNode SQUARE_OPEN_BRACKET() { return getToken(pawnParser.SQUARE_OPEN_BRACKET, 0); }
		public TerminalNode SQUARE_CLOSE_BRACKET() { return getToken(pawnParser.SQUARE_CLOSE_BRACKET, 0); }
		public ExpresionContext expresion() {
			return getRuleContext(ExpresionContext.class,0);
		}
		public ArrayIndexContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arrayIndex; }
	}

	public final ArrayIndexContext arrayIndex() throws RecognitionException {
		ArrayIndexContext _localctx = new ArrayIndexContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_arrayIndex);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(295);
			match(SQUARE_OPEN_BRACKET);
			setState(297);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 275083427850L) != 0) || ((((_la - 75)) & ~0x3f) == 0 && ((1L << (_la - 75)) & 33423361L) != 0)) {
				{
				setState(296);
				expresion();
				}
			}

			setState(299);
			match(SQUARE_CLOSE_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FuncDeclModifContext extends ParserRuleContext {
		public FuncModifContext funcModif() {
			return getRuleContext(FuncModifContext.class,0);
		}
		public TerminalNode FORWARD() { return getToken(pawnParser.FORWARD, 0); }
		public TerminalNode NATIVE() { return getToken(pawnParser.NATIVE, 0); }
		public FuncDeclModifContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_funcDeclModif; }
	}

	public final FuncDeclModifContext funcDeclModif() throws RecognitionException {
		FuncDeclModifContext _localctx = new FuncDeclModifContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_funcDeclModif);
		try {
			setState(304);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case STOCK:
			case PUBLIC:
				enterOuterAlt(_localctx, 1);
				{
				setState(301);
				funcModif();
				}
				break;
			case FORWARD:
				enterOuterAlt(_localctx, 2);
				{
				setState(302);
				match(FORWARD);
				}
				break;
			case NATIVE:
				enterOuterAlt(_localctx, 3);
				{
				setState(303);
				match(NATIVE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FuncModifContext extends ParserRuleContext {
		public TerminalNode STOCK() { return getToken(pawnParser.STOCK, 0); }
		public TerminalNode PUBLIC() { return getToken(pawnParser.PUBLIC, 0); }
		public FuncModifContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_funcModif; }
	}

	public final FuncModifContext funcModif() throws RecognitionException {
		FuncModifContext _localctx = new FuncModifContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_funcModif);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(306);
			_la = _input.LA(1);
			if ( !(_la==STOCK || _la==PUBLIC) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StatementContext extends ParserRuleContext {
		public TerminalNode SEMI() { return getToken(pawnParser.SEMI, 0); }
		public Var_definitionContext var_definition() {
			return getRuleContext(Var_definitionContext.class,0);
		}
		public AssigmentContext assigment() {
			return getRuleContext(AssigmentContext.class,0);
		}
		public FunctionCallContext functionCall() {
			return getRuleContext(FunctionCallContext.class,0);
		}
		public ReturnContext return_() {
			return getRuleContext(ReturnContext.class,0);
		}
		public ControlStatmentsContext controlStatments() {
			return getRuleContext(ControlStatmentsContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_statement);
		try {
			setState(317);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CURLY_OPEN_BRACKET:
			case RETURN:
			case NEW:
			case CONST:
			case STATIC:
			case STOCK:
			case PUBLIC:
			case IDENTIFIER:
				enterOuterAlt(_localctx, 1);
				{
				{
				setState(312);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,33,_ctx) ) {
				case 1:
					{
					setState(308);
					var_definition();
					}
					break;
				case 2:
					{
					setState(309);
					assigment();
					}
					break;
				case 3:
					{
					setState(310);
					functionCall();
					}
					break;
				case 4:
					{
					setState(311);
					return_();
					}
					break;
				}
				setState(314);
				match(SEMI);
				}
				}
				break;
			case IF:
			case SWITCH:
			case WHILE:
			case FOR:
			case DO:
				enterOuterAlt(_localctx, 2);
				{
				setState(316);
				controlStatments();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ControlStatmentsContext extends ParserRuleContext {
		public If_statementContext if_statement() {
			return getRuleContext(If_statementContext.class,0);
		}
		public CyclesContext cycles() {
			return getRuleContext(CyclesContext.class,0);
		}
		public SwitchContext switch_() {
			return getRuleContext(SwitchContext.class,0);
		}
		public ControlStatmentsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_controlStatments; }
	}

	public final ControlStatmentsContext controlStatments() throws RecognitionException {
		ControlStatmentsContext _localctx = new ControlStatmentsContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_controlStatments);
		try {
			setState(322);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IF:
				enterOuterAlt(_localctx, 1);
				{
				setState(319);
				if_statement();
				}
				break;
			case WHILE:
			case FOR:
			case DO:
				enterOuterAlt(_localctx, 2);
				{
				setState(320);
				cycles();
				}
				break;
			case SWITCH:
				enterOuterAlt(_localctx, 3);
				{
				setState(321);
				switch_();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AssigmentContext extends ParserRuleContext {
		public VariableContext variable() {
			return getRuleContext(VariableContext.class,0);
		}
		public List<AssigmentsContext> assigments() {
			return getRuleContexts(AssigmentsContext.class);
		}
		public AssigmentsContext assigments(int i) {
			return getRuleContext(AssigmentsContext.class,i);
		}
		public List<ExpresionContext> expresion() {
			return getRuleContexts(ExpresionContext.class);
		}
		public ExpresionContext expresion(int i) {
			return getRuleContext(ExpresionContext.class,i);
		}
		public List<ArrayInitContext> arrayInit() {
			return getRuleContexts(ArrayInitContext.class);
		}
		public ArrayInitContext arrayInit(int i) {
			return getRuleContext(ArrayInitContext.class,i);
		}
		public AssigmentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assigment; }
	}

	public final AssigmentContext assigment() throws RecognitionException {
		AssigmentContext _localctx = new AssigmentContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_assigment);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(324);
			variable();
			setState(325);
			assigments();
			setState(328);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,36,_ctx) ) {
			case 1:
				{
				setState(326);
				expresion();
				}
				break;
			case 2:
				{
				setState(327);
				arrayInit();
				}
				break;
			}
			setState(337);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 2096640L) != 0)) {
				{
				{
				setState(330);
				assigments();
				setState(333);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,37,_ctx) ) {
				case 1:
					{
					setState(331);
					expresion();
					}
					break;
				case 2:
					{
					setState(332);
					arrayInit();
					}
					break;
				}
				}
				}
				setState(339);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ArrayInitContext extends ParserRuleContext {
		public TerminalNode CURLY_OPEN_BRACKET() { return getToken(pawnParser.CURLY_OPEN_BRACKET, 0); }
		public List<ArrayInitMemberContext> arrayInitMember() {
			return getRuleContexts(ArrayInitMemberContext.class);
		}
		public ArrayInitMemberContext arrayInitMember(int i) {
			return getRuleContext(ArrayInitMemberContext.class,i);
		}
		public TerminalNode CURLY_CLOSE_BRACKET() { return getToken(pawnParser.CURLY_CLOSE_BRACKET, 0); }
		public List<TerminalNode> COMA() { return getTokens(pawnParser.COMA); }
		public TerminalNode COMA(int i) {
			return getToken(pawnParser.COMA, i);
		}
		public ArrayInitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arrayInit; }
	}

	public final ArrayInitContext arrayInit() throws RecognitionException {
		ArrayInitContext _localctx = new ArrayInitContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_arrayInit);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(340);
			match(CURLY_OPEN_BRACKET);
			setState(341);
			arrayInitMember();
			setState(346);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMA) {
				{
				{
				setState(342);
				match(COMA);
				setState(343);
				arrayInitMember();
				}
				}
				setState(348);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(349);
			match(CURLY_CLOSE_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ArrayInitMemberContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(pawnParser.IDENTIFIER, 0); }
		public NumberContext number() {
			return getRuleContext(NumberContext.class,0);
		}
		public StringContext string() {
			return getRuleContext(StringContext.class,0);
		}
		public TagContext tag() {
			return getRuleContext(TagContext.class,0);
		}
		public ArrayInitContext arrayInit() {
			return getRuleContext(ArrayInitContext.class,0);
		}
		public ArrayInitMemberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arrayInitMember; }
	}

	public final ArrayInitMemberContext arrayInitMember() throws RecognitionException {
		ArrayInitMemberContext _localctx = new ArrayInitMemberContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_arrayInitMember);
		try {
			setState(360);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,42,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(352);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,40,_ctx) ) {
				case 1:
					{
					setState(351);
					tag();
					}
					break;
				}
				setState(357);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case IDENTIFIER:
					{
					setState(354);
					match(IDENTIFIER);
					}
					break;
				case MINUS:
				case HEX:
				case INTEGER:
				case FLOAT:
					{
					setState(355);
					number();
					}
					break;
				case SHARPSTRING:
				case STRING:
					{
					setState(356);
					string();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				{
				setState(359);
				arrayInit();
				}
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AssigmentsContext extends ParserRuleContext {
		public TerminalNode ASSIGMENT() { return getToken(pawnParser.ASSIGMENT, 0); }
		public TerminalNode ASSIGMENT_PLUS() { return getToken(pawnParser.ASSIGMENT_PLUS, 0); }
		public TerminalNode ASSIGMENT_MINUS() { return getToken(pawnParser.ASSIGMENT_MINUS, 0); }
		public TerminalNode ASSIGMENT_MULT() { return getToken(pawnParser.ASSIGMENT_MULT, 0); }
		public TerminalNode ASSIGMENT_DIV() { return getToken(pawnParser.ASSIGMENT_DIV, 0); }
		public TerminalNode ASSIGMENT_REMAINDE() { return getToken(pawnParser.ASSIGMENT_REMAINDE, 0); }
		public TerminalNode ASSIGMENT_AND() { return getToken(pawnParser.ASSIGMENT_AND, 0); }
		public TerminalNode ASSIGMENT_OR() { return getToken(pawnParser.ASSIGMENT_OR, 0); }
		public TerminalNode ASSIGMENT_XOR() { return getToken(pawnParser.ASSIGMENT_XOR, 0); }
		public TerminalNode ASSIGMENT_RIGHT() { return getToken(pawnParser.ASSIGMENT_RIGHT, 0); }
		public TerminalNode ASSIGMENT_RIGHT_LOG() { return getToken(pawnParser.ASSIGMENT_RIGHT_LOG, 0); }
		public TerminalNode ASSIGMENT_LEFT() { return getToken(pawnParser.ASSIGMENT_LEFT, 0); }
		public AssigmentsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assigments; }
	}

	public final AssigmentsContext assigments() throws RecognitionException {
		AssigmentsContext _localctx = new AssigmentsContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_assigments);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(362);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 2096640L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class GroupingContext extends ParserRuleContext {
		public TerminalNode OPEN_PARENTHESIS() { return getToken(pawnParser.OPEN_PARENTHESIS, 0); }
		public ExpresionContext expresion() {
			return getRuleContext(ExpresionContext.class,0);
		}
		public TerminalNode CLOSE_PARENTHESIS() { return getToken(pawnParser.CLOSE_PARENTHESIS, 0); }
		public TagContext tag() {
			return getRuleContext(TagContext.class,0);
		}
		public GroupingContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_grouping; }
	}

	public final GroupingContext grouping() throws RecognitionException {
		GroupingContext _localctx = new GroupingContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_grouping);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(365);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CURLY_OPEN_BRACKET || _la==IDENTIFIER) {
				{
				setState(364);
				tag();
				}
			}

			setState(367);
			match(OPEN_PARENTHESIS);
			setState(368);
			expresion();
			setState(369);
			match(CLOSE_PARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ConstGroupingContext extends ParserRuleContext {
		public TerminalNode OPEN_PARENTHESIS() { return getToken(pawnParser.OPEN_PARENTHESIS, 0); }
		public ConstExpresionContext constExpresion() {
			return getRuleContext(ConstExpresionContext.class,0);
		}
		public TerminalNode CLOSE_PARENTHESIS() { return getToken(pawnParser.CLOSE_PARENTHESIS, 0); }
		public TagContext tag() {
			return getRuleContext(TagContext.class,0);
		}
		public ConstGroupingContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constGrouping; }
	}

	public final ConstGroupingContext constGrouping() throws RecognitionException {
		ConstGroupingContext _localctx = new ConstGroupingContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_constGrouping);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(372);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CURLY_OPEN_BRACKET || _la==IDENTIFIER) {
				{
				setState(371);
				tag();
				}
			}

			setState(374);
			match(OPEN_PARENTHESIS);
			setState(375);
			constExpresion();
			setState(376);
			match(CLOSE_PARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExpresionContext extends ParserRuleContext {
		public RValueContext rValue() {
			return getRuleContext(RValueContext.class,0);
		}
		public GroupingContext grouping() {
			return getRuleContext(GroupingContext.class,0);
		}
		public TernarOperatorContext ternarOperator() {
			return getRuleContext(TernarOperatorContext.class,0);
		}
		public PreOperatorsContext preOperators() {
			return getRuleContext(PreOperatorsContext.class,0);
		}
		public OperationContext operation() {
			return getRuleContext(OperationContext.class,0);
		}
		public ExpresionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expresion; }
	}

	public final ExpresionContext expresion() throws RecognitionException {
		ExpresionContext _localctx = new ExpresionContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_expresion);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(379);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,45,_ctx) ) {
			case 1:
				{
				setState(378);
				preOperators();
				}
				break;
			}
			setState(387);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,47,_ctx) ) {
			case 1:
				{
				setState(381);
				rValue();
				setState(383);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 70317202472960L) != 0)) {
					{
					setState(382);
					operation();
					}
				}

				}
				break;
			case 2:
				{
				setState(385);
				grouping();
				}
				break;
			case 3:
				{
				setState(386);
				ternarOperator();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ConstExpresionContext extends ParserRuleContext {
		public VarOrLiteralContext varOrLiteral() {
			return getRuleContext(VarOrLiteralContext.class,0);
		}
		public ConstGroupingContext constGrouping() {
			return getRuleContext(ConstGroupingContext.class,0);
		}
		public ArrayInitContext arrayInit() {
			return getRuleContext(ArrayInitContext.class,0);
		}
		public PreOperatorsContext preOperators() {
			return getRuleContext(PreOperatorsContext.class,0);
		}
		public OperationContext operation() {
			return getRuleContext(OperationContext.class,0);
		}
		public ConstExpresionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constExpresion; }
	}

	public final ConstExpresionContext constExpresion() throws RecognitionException {
		ConstExpresionContext _localctx = new ConstExpresionContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_constExpresion);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(390);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,48,_ctx) ) {
			case 1:
				{
				setState(389);
				preOperators();
				}
				break;
			}
			setState(398);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,50,_ctx) ) {
			case 1:
				{
				setState(392);
				varOrLiteral();
				setState(394);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 70317202472960L) != 0)) {
					{
					setState(393);
					operation();
					}
				}

				}
				break;
			case 2:
				{
				setState(396);
				constGrouping();
				}
				break;
			case 3:
				{
				setState(397);
				arrayInit();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TernarOperatorContext extends ParserRuleContext {
		public TerminalNode QUESTION() { return getToken(pawnParser.QUESTION, 0); }
		public List<ExpresionContext> expresion() {
			return getRuleContexts(ExpresionContext.class);
		}
		public ExpresionContext expresion(int i) {
			return getRuleContext(ExpresionContext.class,i);
		}
		public TerminalNode COLON() { return getToken(pawnParser.COLON, 0); }
		public RValueContext rValue() {
			return getRuleContext(RValueContext.class,0);
		}
		public GroupingContext grouping() {
			return getRuleContext(GroupingContext.class,0);
		}
		public OperationContext operation() {
			return getRuleContext(OperationContext.class,0);
		}
		public TernarOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ternarOperator; }
	}

	public final TernarOperatorContext ternarOperator() throws RecognitionException {
		TernarOperatorContext _localctx = new TernarOperatorContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_ternarOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(405);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,52,_ctx) ) {
			case 1:
				{
				setState(400);
				rValue();
				setState(402);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 70317202472960L) != 0)) {
					{
					setState(401);
					operation();
					}
				}

				}
				break;
			case 2:
				{
				setState(404);
				grouping();
				}
				break;
			}
			setState(407);
			match(QUESTION);
			setState(408);
			expresion();
			setState(409);
			match(COLON);
			setState(410);
			expresion();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PreOperatorsContext extends ParserRuleContext {
		public TerminalNode NOT() { return getToken(pawnParser.NOT, 0); }
		public TerminalNode MINUS() { return getToken(pawnParser.MINUS, 0); }
		public TerminalNode INCREMENTS() { return getToken(pawnParser.INCREMENTS, 0); }
		public TerminalNode DECREMENTS() { return getToken(pawnParser.DECREMENTS, 0); }
		public TerminalNode SIZEOF() { return getToken(pawnParser.SIZEOF, 0); }
		public PreOperatorsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_preOperators; }
	}

	public final PreOperatorsContext preOperators() throws RecognitionException {
		PreOperatorsContext _localctx = new PreOperatorsContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_preOperators);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(412);
			_la = _input.LA(1);
			if ( !(((((_la - 22)) & ~0x3f) == 0 && ((1L << (_la - 22)) & 9007199254806577L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class OperationContext extends ParserRuleContext {
		public OperatorContext operator() {
			return getRuleContext(OperatorContext.class,0);
		}
		public ExpresionContext expresion() {
			return getRuleContext(ExpresionContext.class,0);
		}
		public OperationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_operation; }
	}

	public final OperationContext operation() throws RecognitionException {
		OperationContext _localctx = new OperationContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_operation);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(414);
			operator();
			setState(416);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 275083427850L) != 0) || ((((_la - 75)) & ~0x3f) == 0 && ((1L << (_la - 75)) & 33423361L) != 0)) {
				{
				setState(415);
				expresion();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class VarOrLiteralContext extends ParserRuleContext {
		public LiteralContext literal() {
			return getRuleContext(LiteralContext.class,0);
		}
		public VariableContext variable() {
			return getRuleContext(VariableContext.class,0);
		}
		public VarOrLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_varOrLiteral; }
	}

	public final VarOrLiteralContext varOrLiteral() throws RecognitionException {
		VarOrLiteralContext _localctx = new VarOrLiteralContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_varOrLiteral);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(420);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,54,_ctx) ) {
			case 1:
				{
				setState(418);
				literal();
				}
				break;
			case 2:
				{
				setState(419);
				variable();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DeclParamsContext extends ParserRuleContext {
		public List<VariableContext> variable() {
			return getRuleContexts(VariableContext.class);
		}
		public VariableContext variable(int i) {
			return getRuleContext(VariableContext.class,i);
		}
		public TerminalNode CONST() { return getToken(pawnParser.CONST, 0); }
		public ReferenceContext reference() {
			return getRuleContext(ReferenceContext.class,0);
		}
		public TerminalNode ASSIGMENT() { return getToken(pawnParser.ASSIGMENT, 0); }
		public ConstExpresionContext constExpresion() {
			return getRuleContext(ConstExpresionContext.class,0);
		}
		public SizeofContext sizeof() {
			return getRuleContext(SizeofContext.class,0);
		}
		public TerminalNode OPEN_PARENTHESIS() { return getToken(pawnParser.OPEN_PARENTHESIS, 0); }
		public TerminalNode CLOSE_PARENTHESIS() { return getToken(pawnParser.CLOSE_PARENTHESIS, 0); }
		public DeclParamsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declParams; }
	}

	public final DeclParamsContext declParams() throws RecognitionException {
		DeclParamsContext _localctx = new DeclParamsContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_declParams);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(423);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CONST) {
				{
				setState(422);
				match(CONST);
				}
			}

			setState(426);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==BIT_AND) {
				{
				setState(425);
				reference();
				}
			}

			setState(428);
			variable();
			setState(441);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ASSIGMENT) {
				{
				setState(429);
				match(ASSIGMENT);
				setState(439);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,58,_ctx) ) {
				case 1:
					{
					setState(430);
					constExpresion();
					}
					break;
				case 2:
					{
					{
					setState(431);
					sizeof();
					setState(437);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case CURLY_OPEN_BRACKET:
					case IDENTIFIER:
						{
						setState(432);
						variable();
						}
						break;
					case OPEN_PARENTHESIS:
						{
						setState(433);
						match(OPEN_PARENTHESIS);
						setState(434);
						variable();
						setState(435);
						match(CLOSE_PARENTHESIS);
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
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class EllipseContext extends ParserRuleContext {
		public TerminalNode COMA() { return getToken(pawnParser.COMA, 0); }
		public TerminalNode PERIOD_FUNC() { return getToken(pawnParser.PERIOD_FUNC, 0); }
		public TagContext tag() {
			return getRuleContext(TagContext.class,0);
		}
		public EllipseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ellipse; }
	}

	public final EllipseContext ellipse() throws RecognitionException {
		EllipseContext _localctx = new EllipseContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_ellipse);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(443);
			match(COMA);
			setState(445);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CURLY_OPEN_BRACKET || _la==IDENTIFIER) {
				{
				setState(444);
				tag();
				}
			}

			setState(447);
			match(PERIOD_FUNC);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ReferenceContext extends ParserRuleContext {
		public TerminalNode BIT_AND() { return getToken(pawnParser.BIT_AND, 0); }
		public ReferenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_reference; }
	}

	public final ReferenceContext reference() throws RecognitionException {
		ReferenceContext _localctx = new ReferenceContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_reference);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(449);
			match(BIT_AND);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class VarModifiresContext extends ParserRuleContext {
		public TerminalNode CONST() { return getToken(pawnParser.CONST, 0); }
		public TerminalNode STATIC() { return getToken(pawnParser.STATIC, 0); }
		public TerminalNode STOCK() { return getToken(pawnParser.STOCK, 0); }
		public TerminalNode PUBLIC() { return getToken(pawnParser.PUBLIC, 0); }
		public VarModifiresContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_varModifires; }
	}

	public final VarModifiresContext varModifires() throws RecognitionException {
		VarModifiresContext _localctx = new VarModifiresContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_varModifires);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(451);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 2810246167479189504L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class RValueContext extends ParserRuleContext {
		public VarOrLiteralContext varOrLiteral() {
			return getRuleContext(VarOrLiteralContext.class,0);
		}
		public FunctionCallContext functionCall() {
			return getRuleContext(FunctionCallContext.class,0);
		}
		public GroupingContext grouping() {
			return getRuleContext(GroupingContext.class,0);
		}
		public RValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_rValue; }
	}

	public final RValueContext rValue() throws RecognitionException {
		RValueContext _localctx = new RValueContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_rValue);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(456);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,61,_ctx) ) {
			case 1:
				{
				setState(453);
				varOrLiteral();
				}
				break;
			case 2:
				{
				setState(454);
				functionCall();
				}
				break;
			case 3:
				{
				setState(455);
				grouping();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ConstRValueContext extends ParserRuleContext {
		public VarOrLiteralContext varOrLiteral() {
			return getRuleContext(VarOrLiteralContext.class,0);
		}
		public ConstGroupingContext constGrouping() {
			return getRuleContext(ConstGroupingContext.class,0);
		}
		public ConstRValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constRValue; }
	}

	public final ConstRValueContext constRValue() throws RecognitionException {
		ConstRValueContext _localctx = new ConstRValueContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_constRValue);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(460);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,62,_ctx) ) {
			case 1:
				{
				setState(458);
				varOrLiteral();
				}
				break;
			case 2:
				{
				setState(459);
				constGrouping();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SizeofContext extends ParserRuleContext {
		public TerminalNode SIZEOF() { return getToken(pawnParser.SIZEOF, 0); }
		public SizeofContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sizeof; }
	}

	public final SizeofContext sizeof() throws RecognitionException {
		SizeofContext _localctx = new SizeofContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_sizeof);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(462);
			match(SIZEOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class NumberContext extends ParserRuleContext {
		public IntegerContext integer() {
			return getRuleContext(IntegerContext.class,0);
		}
		public FloatContext float_() {
			return getRuleContext(FloatContext.class,0);
		}
		public HexContext hex() {
			return getRuleContext(HexContext.class,0);
		}
		public NumberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_number; }
	}

	public final NumberContext number() throws RecognitionException {
		NumberContext _localctx = new NumberContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_number);
		try {
			setState(467);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,63,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(464);
				integer();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(465);
				float_();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(466);
				hex();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IntegerContext extends ParserRuleContext {
		public TerminalNode INTEGER() { return getToken(pawnParser.INTEGER, 0); }
		public TerminalNode MINUS() { return getToken(pawnParser.MINUS, 0); }
		public IntegerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_integer; }
	}

	public final IntegerContext integer() throws RecognitionException {
		IntegerContext _localctx = new IntegerContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_integer);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(470);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==MINUS) {
				{
				setState(469);
				match(MINUS);
				}
			}

			setState(472);
			match(INTEGER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FloatContext extends ParserRuleContext {
		public TerminalNode FLOAT() { return getToken(pawnParser.FLOAT, 0); }
		public TerminalNode MINUS() { return getToken(pawnParser.MINUS, 0); }
		public FloatContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_float; }
	}

	public final FloatContext float_() throws RecognitionException {
		FloatContext _localctx = new FloatContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_float);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(475);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==MINUS) {
				{
				setState(474);
				match(MINUS);
				}
			}

			setState(477);
			match(FLOAT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class HexContext extends ParserRuleContext {
		public TerminalNode HEX() { return getToken(pawnParser.HEX, 0); }
		public HexContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_hex; }
	}

	public final HexContext hex() throws RecognitionException {
		HexContext _localctx = new HexContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_hex);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(479);
			match(HEX);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class OperatorContext extends ParserRuleContext {
		public ArefmeticOperatorContext arefmeticOperator() {
			return getRuleContext(ArefmeticOperatorContext.class,0);
		}
		public LogicOperatorContext logicOperator() {
			return getRuleContext(LogicOperatorContext.class,0);
		}
		public BitwiseOperatorContext bitwiseOperator() {
			return getRuleContext(BitwiseOperatorContext.class,0);
		}
		public OperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_operator; }
	}

	public final OperatorContext operator() throws RecognitionException {
		OperatorContext _localctx = new OperatorContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_operator);
		try {
			setState(484);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case PLUS:
			case MINUS:
			case MULTY:
			case DIV:
			case REMAINDE:
			case INCREMENTS:
			case DECREMENTS:
				enterOuterAlt(_localctx, 1);
				{
				setState(481);
				arefmeticOperator();
				}
				break;
			case EQUAL:
			case NOTEQUAL:
			case LESS:
			case LARGER:
			case LESSEQ:
			case LARGEREQ:
			case OR:
			case AND:
			case NOT:
				enterOuterAlt(_localctx, 2);
				{
				setState(482);
				logicOperator();
				}
				break;
			case BIT_AND:
			case BIT_OR:
			case BIT_XOR:
			case BIT_COMPLEMEN:
			case BIT_RIGHT:
			case BIT_LEFT:
			case BIT_RIGHT_LOG:
				enterOuterAlt(_localctx, 3);
				{
				setState(483);
				bitwiseOperator();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CanBeOverloadedContext extends ParserRuleContext {
		public ArefmeticOperatorContext arefmeticOperator() {
			return getRuleContext(ArefmeticOperatorContext.class,0);
		}
		public CompareOperatorContext compareOperator() {
			return getRuleContext(CompareOperatorContext.class,0);
		}
		public TerminalNode ASSIGMENT() { return getToken(pawnParser.ASSIGMENT, 0); }
		public CanBeOverloadedContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_canBeOverloaded; }
	}

	public final CanBeOverloadedContext canBeOverloaded() throws RecognitionException {
		CanBeOverloadedContext _localctx = new CanBeOverloadedContext(_ctx, getState());
		enterRule(_localctx, 80, RULE_canBeOverloaded);
		try {
			setState(489);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case PLUS:
			case MINUS:
			case MULTY:
			case DIV:
			case REMAINDE:
			case INCREMENTS:
			case DECREMENTS:
				enterOuterAlt(_localctx, 1);
				{
				setState(486);
				arefmeticOperator();
				}
				break;
			case EQUAL:
			case NOTEQUAL:
			case LESS:
			case LARGER:
			case LESSEQ:
			case LARGEREQ:
			case NOT:
				enterOuterAlt(_localctx, 2);
				{
				setState(487);
				compareOperator();
				}
				break;
			case ASSIGMENT:
				enterOuterAlt(_localctx, 3);
				{
				setState(488);
				match(ASSIGMENT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ArefmeticOperatorContext extends ParserRuleContext {
		public TerminalNode PLUS() { return getToken(pawnParser.PLUS, 0); }
		public TerminalNode MINUS() { return getToken(pawnParser.MINUS, 0); }
		public TerminalNode MULTY() { return getToken(pawnParser.MULTY, 0); }
		public TerminalNode DIV() { return getToken(pawnParser.DIV, 0); }
		public TerminalNode REMAINDE() { return getToken(pawnParser.REMAINDE, 0); }
		public TerminalNode INCREMENTS() { return getToken(pawnParser.INCREMENTS, 0); }
		public TerminalNode DECREMENTS() { return getToken(pawnParser.DECREMENTS, 0); }
		public ArefmeticOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arefmeticOperator; }
	}

	public final ArefmeticOperatorContext arefmeticOperator() throws RecognitionException {
		ArefmeticOperatorContext _localctx = new ArefmeticOperatorContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_arefmeticOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(491);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 266338304L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class LogicOperatorContext extends ParserRuleContext {
		public TerminalNode OR() { return getToken(pawnParser.OR, 0); }
		public TerminalNode AND() { return getToken(pawnParser.AND, 0); }
		public CompareOperatorContext compareOperator() {
			return getRuleContext(CompareOperatorContext.class,0);
		}
		public LogicOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_logicOperator; }
	}

	public final LogicOperatorContext logicOperator() throws RecognitionException {
		LogicOperatorContext _localctx = new LogicOperatorContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_logicOperator);
		try {
			setState(496);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case OR:
				enterOuterAlt(_localctx, 1);
				{
				setState(493);
				match(OR);
				}
				break;
			case AND:
				enterOuterAlt(_localctx, 2);
				{
				setState(494);
				match(AND);
				}
				break;
			case EQUAL:
			case NOTEQUAL:
			case LESS:
			case LARGER:
			case LESSEQ:
			case LARGEREQ:
			case NOT:
				enterOuterAlt(_localctx, 3);
				{
				setState(495);
				compareOperator();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CompareOperatorContext extends ParserRuleContext {
		public TerminalNode NOT() { return getToken(pawnParser.NOT, 0); }
		public TerminalNode EQUAL() { return getToken(pawnParser.EQUAL, 0); }
		public TerminalNode NOTEQUAL() { return getToken(pawnParser.NOTEQUAL, 0); }
		public TerminalNode LESS() { return getToken(pawnParser.LESS, 0); }
		public TerminalNode LARGER() { return getToken(pawnParser.LARGER, 0); }
		public TerminalNode LESSEQ() { return getToken(pawnParser.LESSEQ, 0); }
		public TerminalNode LARGEREQ() { return getToken(pawnParser.LARGEREQ, 0); }
		public CompareOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_compareOperator; }
	}

	public final CompareOperatorContext compareOperator() throws RecognitionException {
		CompareOperatorContext _localctx = new CompareOperatorContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_compareOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(498);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 291789340672L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BitwiseOperatorContext extends ParserRuleContext {
		public TerminalNode BIT_AND() { return getToken(pawnParser.BIT_AND, 0); }
		public TerminalNode BIT_OR() { return getToken(pawnParser.BIT_OR, 0); }
		public TerminalNode BIT_RIGHT() { return getToken(pawnParser.BIT_RIGHT, 0); }
		public TerminalNode BIT_LEFT() { return getToken(pawnParser.BIT_LEFT, 0); }
		public TerminalNode BIT_XOR() { return getToken(pawnParser.BIT_XOR, 0); }
		public TerminalNode BIT_COMPLEMEN() { return getToken(pawnParser.BIT_COMPLEMEN, 0); }
		public TerminalNode BIT_RIGHT_LOG() { return getToken(pawnParser.BIT_RIGHT_LOG, 0); }
		public BitwiseOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bitwiseOperator; }
	}

	public final BitwiseOperatorContext bitwiseOperator() throws RecognitionException {
		BitwiseOperatorContext _localctx = new BitwiseOperatorContext(_ctx, getState());
		enterRule(_localctx, 88, RULE_bitwiseOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(500);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 69818988363776L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class If_statementContext extends ParserRuleContext {
		public TerminalNode IF() { return getToken(pawnParser.IF, 0); }
		public ConditionContext condition() {
			return getRuleContext(ConditionContext.class,0);
		}
		public CodeBlockContext codeBlock() {
			return getRuleContext(CodeBlockContext.class,0);
		}
		public Else_statementContext else_statement() {
			return getRuleContext(Else_statementContext.class,0);
		}
		public If_statementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_if_statement; }
	}

	public final If_statementContext if_statement() throws RecognitionException {
		If_statementContext _localctx = new If_statementContext(_ctx, getState());
		enterRule(_localctx, 90, RULE_if_statement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(502);
			match(IF);
			setState(503);
			condition();
			setState(504);
			codeBlock();
			setState(506);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,69,_ctx) ) {
			case 1:
				{
				setState(505);
				else_statement();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Else_statementContext extends ParserRuleContext {
		public TerminalNode ELSE() { return getToken(pawnParser.ELSE, 0); }
		public If_statementContext if_statement() {
			return getRuleContext(If_statementContext.class,0);
		}
		public CodeBlockContext codeBlock() {
			return getRuleContext(CodeBlockContext.class,0);
		}
		public Else_statementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_else_statement; }
	}

	public final Else_statementContext else_statement() throws RecognitionException {
		Else_statementContext _localctx = new Else_statementContext(_ctx, getState());
		enterRule(_localctx, 92, RULE_else_statement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(508);
			match(ELSE);
			setState(511);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,70,_ctx) ) {
			case 1:
				{
				setState(509);
				if_statement();
				}
				break;
			case 2:
				{
				setState(510);
				codeBlock();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SwitchContext extends ParserRuleContext {
		public TerminalNode SWITCH() { return getToken(pawnParser.SWITCH, 0); }
		public ConditionContext condition() {
			return getRuleContext(ConditionContext.class,0);
		}
		public TerminalNode CURLY_OPEN_BRACKET() { return getToken(pawnParser.CURLY_OPEN_BRACKET, 0); }
		public TerminalNode CURLY_CLOSE_BRACKET() { return getToken(pawnParser.CURLY_CLOSE_BRACKET, 0); }
		public List<CaseContext> case_() {
			return getRuleContexts(CaseContext.class);
		}
		public CaseContext case_(int i) {
			return getRuleContext(CaseContext.class,i);
		}
		public DefaultContext default_() {
			return getRuleContext(DefaultContext.class,0);
		}
		public SwitchContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_switch; }
	}

	public final SwitchContext switch_() throws RecognitionException {
		SwitchContext _localctx = new SwitchContext(_ctx, getState());
		enterRule(_localctx, 94, RULE_switch);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(513);
			match(SWITCH);
			setState(514);
			condition();
			setState(515);
			match(CURLY_OPEN_BRACKET);
			setState(519);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==CASE) {
				{
				{
				setState(516);
				case_();
				}
				}
				setState(521);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(523);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==DEFAULT) {
				{
				setState(522);
				default_();
				}
			}

			setState(525);
			match(CURLY_CLOSE_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CaseContext extends ParserRuleContext {
		public TerminalNode CASE() { return getToken(pawnParser.CASE, 0); }
		public List<Case_listContext> case_list() {
			return getRuleContexts(Case_listContext.class);
		}
		public Case_listContext case_list(int i) {
			return getRuleContext(Case_listContext.class,i);
		}
		public TerminalNode COLON() { return getToken(pawnParser.COLON, 0); }
		public CodeBlockContext codeBlock() {
			return getRuleContext(CodeBlockContext.class,0);
		}
		public List<TerminalNode> COMA() { return getTokens(pawnParser.COMA); }
		public TerminalNode COMA(int i) {
			return getToken(pawnParser.COMA, i);
		}
		public CaseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_case; }
	}

	public final CaseContext case_() throws RecognitionException {
		CaseContext _localctx = new CaseContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_case);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(527);
			match(CASE);
			setState(528);
			case_list();
			setState(533);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMA) {
				{
				{
				setState(529);
				match(COMA);
				setState(530);
				case_list();
				}
				}
				setState(535);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(536);
			match(COLON);
			setState(537);
			codeBlock();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DefaultContext extends ParserRuleContext {
		public TerminalNode DEFAULT() { return getToken(pawnParser.DEFAULT, 0); }
		public TerminalNode COLON() { return getToken(pawnParser.COLON, 0); }
		public CodeBlockContext codeBlock() {
			return getRuleContext(CodeBlockContext.class,0);
		}
		public DefaultContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_default; }
	}

	public final DefaultContext default_() throws RecognitionException {
		DefaultContext _localctx = new DefaultContext(_ctx, getState());
		enterRule(_localctx, 98, RULE_default);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(539);
			match(DEFAULT);
			setState(540);
			match(COLON);
			setState(541);
			codeBlock();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Case_listContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(pawnParser.IDENTIFIER, 0); }
		public NumberContext number() {
			return getRuleContext(NumberContext.class,0);
		}
		public RangeContext range() {
			return getRuleContext(RangeContext.class,0);
		}
		public Case_listContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_case_list; }
	}

	public final Case_listContext case_list() throws RecognitionException {
		Case_listContext _localctx = new Case_listContext(_ctx, getState());
		enterRule(_localctx, 100, RULE_case_list);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(545);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IDENTIFIER:
				{
				setState(543);
				match(IDENTIFIER);
				}
				break;
			case MINUS:
			case HEX:
			case INTEGER:
			case FLOAT:
				{
				setState(544);
				number();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(548);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==PERIOD) {
				{
				setState(547);
				range();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class RangeContext extends ParserRuleContext {
		public TerminalNode PERIOD() { return getToken(pawnParser.PERIOD, 0); }
		public TerminalNode IDENTIFIER() { return getToken(pawnParser.IDENTIFIER, 0); }
		public NumberContext number() {
			return getRuleContext(NumberContext.class,0);
		}
		public RangeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_range; }
	}

	public final RangeContext range() throws RecognitionException {
		RangeContext _localctx = new RangeContext(_ctx, getState());
		enterRule(_localctx, 102, RULE_range);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(550);
			match(PERIOD);
			setState(553);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IDENTIFIER:
				{
				setState(551);
				match(IDENTIFIER);
				}
				break;
			case MINUS:
			case HEX:
			case INTEGER:
			case FLOAT:
				{
				setState(552);
				number();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ConditionContext extends ParserRuleContext {
		public TerminalNode OPEN_PARENTHESIS() { return getToken(pawnParser.OPEN_PARENTHESIS, 0); }
		public ExpresionContext expresion() {
			return getRuleContext(ExpresionContext.class,0);
		}
		public TerminalNode CLOSE_PARENTHESIS() { return getToken(pawnParser.CLOSE_PARENTHESIS, 0); }
		public ConditionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_condition; }
	}

	public final ConditionContext condition() throws RecognitionException {
		ConditionContext _localctx = new ConditionContext(_ctx, getState());
		enterRule(_localctx, 104, RULE_condition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(555);
			match(OPEN_PARENTHESIS);
			setState(556);
			expresion();
			setState(557);
			match(CLOSE_PARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CodeBlockContext extends ParserRuleContext {
		public TerminalNode CURLY_OPEN_BRACKET() { return getToken(pawnParser.CURLY_OPEN_BRACKET, 0); }
		public TerminalNode CURLY_CLOSE_BRACKET() { return getToken(pawnParser.CURLY_CLOSE_BRACKET, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public CodeBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_codeBlock; }
	}

	public final CodeBlockContext codeBlock() throws RecognitionException {
		CodeBlockContext _localctx = new CodeBlockContext(_ctx, getState());
		enterRule(_localctx, 106, RULE_codeBlock);
		int _la;
		try {
			setState(568);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,78,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(559);
				match(CURLY_OPEN_BRACKET);
				setState(563);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & -6386104271611363320L) != 0) || ((((_la - 65)) & ~0x3f) == 0 && ((1L << (_la - 65)) & 2147483705L) != 0)) {
					{
					{
					setState(560);
					statement();
					}
					}
					setState(565);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(566);
				match(CURLY_CLOSE_BRACKET);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(567);
				statement();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ReturnContext extends ParserRuleContext {
		public TerminalNode RETURN() { return getToken(pawnParser.RETURN, 0); }
		public ExpresionContext expresion() {
			return getRuleContext(ExpresionContext.class,0);
		}
		public ReturnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_return; }
	}

	public final ReturnContext return_() throws RecognitionException {
		ReturnContext _localctx = new ReturnContext(_ctx, getState());
		enterRule(_localctx, 108, RULE_return);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(570);
			match(RETURN);
			setState(572);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 275083427850L) != 0) || ((((_la - 75)) & ~0x3f) == 0 && ((1L << (_la - 75)) & 33423361L) != 0)) {
				{
				setState(571);
				expresion();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CyclesContext extends ParserRuleContext {
		public WhileContext while_() {
			return getRuleContext(WhileContext.class,0);
		}
		public ForContext for_() {
			return getRuleContext(ForContext.class,0);
		}
		public DoContext do_() {
			return getRuleContext(DoContext.class,0);
		}
		public CyclesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cycles; }
	}

	public final CyclesContext cycles() throws RecognitionException {
		CyclesContext _localctx = new CyclesContext(_ctx, getState());
		enterRule(_localctx, 110, RULE_cycles);
		try {
			setState(577);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case WHILE:
				enterOuterAlt(_localctx, 1);
				{
				setState(574);
				while_();
				}
				break;
			case FOR:
				enterOuterAlt(_localctx, 2);
				{
				setState(575);
				for_();
				}
				break;
			case DO:
				enterOuterAlt(_localctx, 3);
				{
				setState(576);
				do_();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DoContext extends ParserRuleContext {
		public TerminalNode DO() { return getToken(pawnParser.DO, 0); }
		public CycleBodyContext cycleBody() {
			return getRuleContext(CycleBodyContext.class,0);
		}
		public TerminalNode WHILE() { return getToken(pawnParser.WHILE, 0); }
		public ConditionContext condition() {
			return getRuleContext(ConditionContext.class,0);
		}
		public DoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_do; }
	}

	public final DoContext do_() throws RecognitionException {
		DoContext _localctx = new DoContext(_ctx, getState());
		enterRule(_localctx, 112, RULE_do);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(579);
			match(DO);
			setState(580);
			cycleBody();
			setState(583);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,81,_ctx) ) {
			case 1:
				{
				setState(581);
				match(WHILE);
				setState(582);
				condition();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class WhileContext extends ParserRuleContext {
		public TerminalNode WHILE() { return getToken(pawnParser.WHILE, 0); }
		public ConditionContext condition() {
			return getRuleContext(ConditionContext.class,0);
		}
		public CycleBodyContext cycleBody() {
			return getRuleContext(CycleBodyContext.class,0);
		}
		public WhileContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_while; }
	}

	public final WhileContext while_() throws RecognitionException {
		WhileContext _localctx = new WhileContext(_ctx, getState());
		enterRule(_localctx, 114, RULE_while);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(585);
			match(WHILE);
			setState(586);
			condition();
			setState(587);
			cycleBody();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ForContext extends ParserRuleContext {
		public TerminalNode FOR() { return getToken(pawnParser.FOR, 0); }
		public TerminalNode OPEN_PARENTHESIS() { return getToken(pawnParser.OPEN_PARENTHESIS, 0); }
		public Var_definitionContext var_definition() {
			return getRuleContext(Var_definitionContext.class,0);
		}
		public List<TerminalNode> SEMI() { return getTokens(pawnParser.SEMI); }
		public TerminalNode SEMI(int i) {
			return getToken(pawnParser.SEMI, i);
		}
		public List<ExpresionContext> expresion() {
			return getRuleContexts(ExpresionContext.class);
		}
		public ExpresionContext expresion(int i) {
			return getRuleContext(ExpresionContext.class,i);
		}
		public TerminalNode CLOSE_PARENTHESIS() { return getToken(pawnParser.CLOSE_PARENTHESIS, 0); }
		public CycleBodyContext cycleBody() {
			return getRuleContext(CycleBodyContext.class,0);
		}
		public ForContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_for; }
	}

	public final ForContext for_() throws RecognitionException {
		ForContext _localctx = new ForContext(_ctx, getState());
		enterRule(_localctx, 116, RULE_for);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(589);
			match(FOR);
			setState(590);
			match(OPEN_PARENTHESIS);
			setState(591);
			var_definition();
			setState(592);
			match(SEMI);
			setState(593);
			expresion();
			setState(594);
			match(SEMI);
			setState(595);
			expresion();
			setState(596);
			match(CLOSE_PARENTHESIS);
			setState(597);
			cycleBody();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CycleBodyContext extends ParserRuleContext {
		public List<CycleKeywordsContext> cycleKeywords() {
			return getRuleContexts(CycleKeywordsContext.class);
		}
		public CycleKeywordsContext cycleKeywords(int i) {
			return getRuleContext(CycleKeywordsContext.class,i);
		}
		public TerminalNode CURLY_OPEN_BRACKET() { return getToken(pawnParser.CURLY_OPEN_BRACKET, 0); }
		public TerminalNode CURLY_CLOSE_BRACKET() { return getToken(pawnParser.CURLY_CLOSE_BRACKET, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public CycleBodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cycleBody; }
	}

	public final CycleBodyContext cycleBody() throws RecognitionException {
		CycleBodyContext _localctx = new CycleBodyContext(_ctx, getState());
		enterRule(_localctx, 118, RULE_cycleBody);
		int _la;
		try {
			setState(610);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,84,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(599);
				cycleKeywords();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(600);
				match(CURLY_OPEN_BRACKET);
				setState(605);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & -6386104271611363320L) != 0) || ((((_la - 65)) & ~0x3f) == 0 && ((1L << (_la - 65)) & 2147483897L) != 0)) {
					{
					setState(603);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case CURLY_OPEN_BRACKET:
					case RETURN:
					case NEW:
					case CONST:
					case STATIC:
					case STOCK:
					case PUBLIC:
					case IF:
					case SWITCH:
					case WHILE:
					case FOR:
					case DO:
					case IDENTIFIER:
						{
						setState(601);
						statement();
						}
						break;
					case CONTINUE:
					case BREAK:
						{
						setState(602);
						cycleKeywords();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					setState(607);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(608);
				match(CURLY_CLOSE_BRACKET);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(609);
				statement();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CycleKeywordsContext extends ParserRuleContext {
		public TerminalNode SEMI() { return getToken(pawnParser.SEMI, 0); }
		public TerminalNode BREAK() { return getToken(pawnParser.BREAK, 0); }
		public TerminalNode CONTINUE() { return getToken(pawnParser.CONTINUE, 0); }
		public CycleKeywordsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cycleKeywords; }
	}

	public final CycleKeywordsContext cycleKeywords() throws RecognitionException {
		CycleKeywordsContext _localctx = new CycleKeywordsContext(_ctx, getState());
		enterRule(_localctx, 120, RULE_cycleKeywords);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(612);
			_la = _input.LA(1);
			if ( !(_la==CONTINUE || _la==BREAK) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(613);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class LiteralContext extends ParserRuleContext {
		public StringContext string() {
			return getRuleContext(StringContext.class,0);
		}
		public NumberContext number() {
			return getRuleContext(NumberContext.class,0);
		}
		public Bool_constContext bool_const() {
			return getRuleContext(Bool_constContext.class,0);
		}
		public TagContext tag() {
			return getRuleContext(TagContext.class,0);
		}
		public LiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_literal; }
	}

	public final LiteralContext literal() throws RecognitionException {
		LiteralContext _localctx = new LiteralContext(_ctx, getState());
		enterRule(_localctx, 122, RULE_literal);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(616);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CURLY_OPEN_BRACKET || _la==IDENTIFIER) {
				{
				setState(615);
				tag();
				}
			}

			setState(621);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case SHARPSTRING:
			case STRING:
				{
				setState(618);
				string();
				}
				break;
			case MINUS:
			case HEX:
			case INTEGER:
			case FLOAT:
				{
				setState(619);
				number();
				}
				break;
			case TRUE:
			case FALSE:
				{
				setState(620);
				bool_const();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Bool_constContext extends ParserRuleContext {
		public TerminalNode TRUE() { return getToken(pawnParser.TRUE, 0); }
		public TerminalNode FALSE() { return getToken(pawnParser.FALSE, 0); }
		public Bool_constContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bool_const; }
	}

	public final Bool_constContext bool_const() throws RecognitionException {
		Bool_constContext _localctx = new Bool_constContext(_ctx, getState());
		enterRule(_localctx, 124, RULE_bool_const);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(623);
			_la = _input.LA(1);
			if ( !(_la==TRUE || _la==FALSE) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StringContext extends ParserRuleContext {
		public TerminalNode STRING() { return getToken(pawnParser.STRING, 0); }
		public TerminalNode SHARPSTRING() { return getToken(pawnParser.SHARPSTRING, 0); }
		public List<StringContext> string() {
			return getRuleContexts(StringContext.class);
		}
		public StringContext string(int i) {
			return getRuleContext(StringContext.class,i);
		}
		public StringContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_string; }
	}

	public final StringContext string() throws RecognitionException {
		StringContext _localctx = new StringContext(_ctx, getState());
		enterRule(_localctx, 126, RULE_string);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(625);
			_la = _input.LA(1);
			if ( !(_la==SHARPSTRING || _la==STRING) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(629);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,87,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(626);
					string();
					}
					} 
				}
				setState(631);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,87,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AngledStringContext extends ParserRuleContext {
		public TerminalNode ANGLEDSTRING() { return getToken(pawnParser.ANGLEDSTRING, 0); }
		public AngledStringContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_angledString; }
	}

	public final AngledStringContext angledString() throws RecognitionException {
		AngledStringContext _localctx = new AngledStringContext(_ctx, getState());
		enterRule(_localctx, 128, RULE_angledString);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(632);
			match(ANGLEDSTRING);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FunctionCallContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(pawnParser.IDENTIFIER, 0); }
		public TerminalNode OPEN_PARENTHESIS() { return getToken(pawnParser.OPEN_PARENTHESIS, 0); }
		public TerminalNode CLOSE_PARENTHESIS() { return getToken(pawnParser.CLOSE_PARENTHESIS, 0); }
		public List<ExpresionContext> expresion() {
			return getRuleContexts(ExpresionContext.class);
		}
		public ExpresionContext expresion(int i) {
			return getRuleContext(ExpresionContext.class,i);
		}
		public List<TerminalNode> COMA() { return getTokens(pawnParser.COMA); }
		public TerminalNode COMA(int i) {
			return getToken(pawnParser.COMA, i);
		}
		public FunctionCallContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionCall; }
	}

	public final FunctionCallContext functionCall() throws RecognitionException {
		FunctionCallContext _localctx = new FunctionCallContext(_ctx, getState());
		enterRule(_localctx, 130, RULE_functionCall);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(634);
			match(IDENTIFIER);
			setState(635);
			match(OPEN_PARENTHESIS);
			setState(644);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 275083427850L) != 0) || ((((_la - 75)) & ~0x3f) == 0 && ((1L << (_la - 75)) & 33423361L) != 0)) {
				{
				setState(636);
				expresion();
				setState(641);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMA) {
					{
					{
					setState(637);
					match(COMA);
					setState(638);
					expresion();
					}
					}
					setState(643);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(646);
			match(CLOSE_PARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001h\u0289\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007\u0012"+
		"\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002\u0015\u0007\u0015"+
		"\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017\u0002\u0018\u0007\u0018"+
		"\u0002\u0019\u0007\u0019\u0002\u001a\u0007\u001a\u0002\u001b\u0007\u001b"+
		"\u0002\u001c\u0007\u001c\u0002\u001d\u0007\u001d\u0002\u001e\u0007\u001e"+
		"\u0002\u001f\u0007\u001f\u0002 \u0007 \u0002!\u0007!\u0002\"\u0007\"\u0002"+
		"#\u0007#\u0002$\u0007$\u0002%\u0007%\u0002&\u0007&\u0002\'\u0007\'\u0002"+
		"(\u0007(\u0002)\u0007)\u0002*\u0007*\u0002+\u0007+\u0002,\u0007,\u0002"+
		"-\u0007-\u0002.\u0007.\u0002/\u0007/\u00020\u00070\u00021\u00071\u0002"+
		"2\u00072\u00023\u00073\u00024\u00074\u00025\u00075\u00026\u00076\u0002"+
		"7\u00077\u00028\u00078\u00029\u00079\u0002:\u0007:\u0002;\u0007;\u0002"+
		"<\u0007<\u0002=\u0007=\u0002>\u0007>\u0002?\u0007?\u0002@\u0007@\u0002"+
		"A\u0007A\u0001\u0000\u0005\u0000\u0086\b\u0000\n\u0000\f\u0000\u0089\t"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0003\u0001\u0092\b\u0001\u0001\u0001\u0003\u0001\u0095"+
		"\b\u0001\u0001\u0002\u0001\u0002\u0003\u0002\u0099\b\u0002\u0001\u0002"+
		"\u0003\u0002\u009c\b\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0005\u0002\u00a2\b\u0002\n\u0002\f\u0002\u00a5\t\u0002\u0001\u0002\u0003"+
		"\u0002\u00a8\b\u0002\u0003\u0002\u00aa\b\u0002\u0001\u0002\u0001\u0002"+
		"\u0003\u0002\u00ae\b\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u0003"+
		"\u00b3\b\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0005\u0001\u0005\u0005\u0005\u00bc\b\u0005\n\u0005\f\u0005\u00bf"+
		"\t\u0005\u0001\u0005\u0004\u0005\u00c2\b\u0005\u000b\u0005\f\u0005\u00c3"+
		"\u0003\u0005\u00c6\b\u0005\u0001\u0005\u0001\u0005\u0003\u0005\u00ca\b"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0003\u0005\u00cf\b\u0005\u0005"+
		"\u0005\u00d1\b\u0005\n\u0005\f\u0005\u00d4\t\u0005\u0001\u0006\u0003\u0006"+
		"\u00d7\b\u0006\u0001\u0006\u0003\u0006\u00da\b\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0005\u0006\u00e1\b\u0006\n"+
		"\u0006\f\u0006\u00e4\t\u0006\u0001\u0006\u0003\u0006\u00e7\b\u0006\u0003"+
		"\u0006\u00e9\b\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0003"+
		"\u0006\u00ef\b\u0006\u0001\u0007\u0001\u0007\u0003\u0007\u00f3\b\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0005\u0007\u00fb\b\u0007\n\u0007\f\u0007\u00fe\t\u0007\u0001\u0007\u0003"+
		"\u0007\u0101\b\u0007\u0003\u0007\u0103\b\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0003\u0007\u0109\b\u0007\u0001\b\u0001\b\u0001"+
		"\b\u0001\b\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0005\t\u0114\b\t\n"+
		"\t\f\t\u0117\t\t\u0001\t\u0003\t\u011a\b\t\u0001\t\u0001\t\u0001\n\u0003"+
		"\n\u011f\b\n\u0001\n\u0001\n\u0005\n\u0123\b\n\n\n\f\n\u0126\t\n\u0001"+
		"\u000b\u0001\u000b\u0003\u000b\u012a\b\u000b\u0001\u000b\u0001\u000b\u0001"+
		"\f\u0001\f\u0001\f\u0003\f\u0131\b\f\u0001\r\u0001\r\u0001\u000e\u0001"+
		"\u000e\u0001\u000e\u0001\u000e\u0003\u000e\u0139\b\u000e\u0001\u000e\u0001"+
		"\u000e\u0001\u000e\u0003\u000e\u013e\b\u000e\u0001\u000f\u0001\u000f\u0001"+
		"\u000f\u0003\u000f\u0143\b\u000f\u0001\u0010\u0001\u0010\u0001\u0010\u0001"+
		"\u0010\u0003\u0010\u0149\b\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0003"+
		"\u0010\u014e\b\u0010\u0005\u0010\u0150\b\u0010\n\u0010\f\u0010\u0153\t"+
		"\u0010\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0005\u0011\u0159"+
		"\b\u0011\n\u0011\f\u0011\u015c\t\u0011\u0001\u0011\u0001\u0011\u0001\u0012"+
		"\u0003\u0012\u0161\b\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0003\u0012"+
		"\u0166\b\u0012\u0001\u0012\u0003\u0012\u0169\b\u0012\u0001\u0013\u0001"+
		"\u0013\u0001\u0014\u0003\u0014\u016e\b\u0014\u0001\u0014\u0001\u0014\u0001"+
		"\u0014\u0001\u0014\u0001\u0015\u0003\u0015\u0175\b\u0015\u0001\u0015\u0001"+
		"\u0015\u0001\u0015\u0001\u0015\u0001\u0016\u0003\u0016\u017c\b\u0016\u0001"+
		"\u0016\u0001\u0016\u0003\u0016\u0180\b\u0016\u0001\u0016\u0001\u0016\u0003"+
		"\u0016\u0184\b\u0016\u0001\u0017\u0003\u0017\u0187\b\u0017\u0001\u0017"+
		"\u0001\u0017\u0003\u0017\u018b\b\u0017\u0001\u0017\u0001\u0017\u0003\u0017"+
		"\u018f\b\u0017\u0001\u0018\u0001\u0018\u0003\u0018\u0193\b\u0018\u0001"+
		"\u0018\u0003\u0018\u0196\b\u0018\u0001\u0018\u0001\u0018\u0001\u0018\u0001"+
		"\u0018\u0001\u0018\u0001\u0019\u0001\u0019\u0001\u001a\u0001\u001a\u0003"+
		"\u001a\u01a1\b\u001a\u0001\u001b\u0001\u001b\u0003\u001b\u01a5\b\u001b"+
		"\u0001\u001c\u0003\u001c\u01a8\b\u001c\u0001\u001c\u0003\u001c\u01ab\b"+
		"\u001c\u0001\u001c\u0001\u001c\u0001\u001c\u0001\u001c\u0001\u001c\u0001"+
		"\u001c\u0001\u001c\u0001\u001c\u0001\u001c\u0003\u001c\u01b6\b\u001c\u0003"+
		"\u001c\u01b8\b\u001c\u0003\u001c\u01ba\b\u001c\u0001\u001d\u0001\u001d"+
		"\u0003\u001d\u01be\b\u001d\u0001\u001d\u0001\u001d\u0001\u001e\u0001\u001e"+
		"\u0001\u001f\u0001\u001f\u0001 \u0001 \u0001 \u0003 \u01c9\b \u0001!\u0001"+
		"!\u0003!\u01cd\b!\u0001\"\u0001\"\u0001#\u0001#\u0001#\u0003#\u01d4\b"+
		"#\u0001$\u0003$\u01d7\b$\u0001$\u0001$\u0001%\u0003%\u01dc\b%\u0001%\u0001"+
		"%\u0001&\u0001&\u0001\'\u0001\'\u0001\'\u0003\'\u01e5\b\'\u0001(\u0001"+
		"(\u0001(\u0003(\u01ea\b(\u0001)\u0001)\u0001*\u0001*\u0001*\u0003*\u01f1"+
		"\b*\u0001+\u0001+\u0001,\u0001,\u0001-\u0001-\u0001-\u0001-\u0003-\u01fb"+
		"\b-\u0001.\u0001.\u0001.\u0003.\u0200\b.\u0001/\u0001/\u0001/\u0001/\u0005"+
		"/\u0206\b/\n/\f/\u0209\t/\u0001/\u0003/\u020c\b/\u0001/\u0001/\u00010"+
		"\u00010\u00010\u00010\u00050\u0214\b0\n0\f0\u0217\t0\u00010\u00010\u0001"+
		"0\u00011\u00011\u00011\u00011\u00012\u00012\u00032\u0222\b2\u00012\u0003"+
		"2\u0225\b2\u00013\u00013\u00013\u00033\u022a\b3\u00014\u00014\u00014\u0001"+
		"4\u00015\u00015\u00055\u0232\b5\n5\f5\u0235\t5\u00015\u00015\u00035\u0239"+
		"\b5\u00016\u00016\u00036\u023d\b6\u00017\u00017\u00017\u00037\u0242\b"+
		"7\u00018\u00018\u00018\u00018\u00038\u0248\b8\u00019\u00019\u00019\u0001"+
		"9\u0001:\u0001:\u0001:\u0001:\u0001:\u0001:\u0001:\u0001:\u0001:\u0001"+
		":\u0001;\u0001;\u0001;\u0001;\u0005;\u025c\b;\n;\f;\u025f\t;\u0001;\u0001"+
		";\u0003;\u0263\b;\u0001<\u0001<\u0001<\u0001=\u0003=\u0269\b=\u0001=\u0001"+
		"=\u0001=\u0003=\u026e\b=\u0001>\u0001>\u0001?\u0001?\u0005?\u0274\b?\n"+
		"?\f?\u0277\t?\u0001@\u0001@\u0001A\u0001A\u0001A\u0001A\u0001A\u0005A"+
		"\u0280\bA\nA\fA\u0283\tA\u0003A\u0285\bA\u0001A\u0001A\u0001A\u0000\u0000"+
		"B\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a"+
		"\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ\\^`bdfhjlnprtvxz|~\u0080\u0082"+
		"\u0000\u000b\u0003\u0000\n\n\f\f\u0014\u0014\u0002\u0000::==\u0001\u0000"+
		"\t\u0014\u0004\u0000\u0016\u0016\u001a\u001b&&KK\u0002\u00008:==\u0001"+
		"\u0000\u0015\u001b\u0002\u0000\u001c!&&\u0001\u0000\'-\u0001\u0000GH\u0001"+
		"\u0000\\]\u0001\u0000^_\u02b2\u0000\u0087\u0001\u0000\u0000\u0000\u0002"+
		"\u0094\u0001\u0000\u0000\u0000\u0004\u0096\u0001\u0000\u0000\u0000\u0006"+
		"\u00af\u0001\u0000\u0000\u0000\b\u00b4\u0001\u0000\u0000\u0000\n\u00c5"+
		"\u0001\u0000\u0000\u0000\f\u00d6\u0001\u0000\u0000\u0000\u000e\u00f0\u0001"+
		"\u0000\u0000\u0000\u0010\u010a\u0001\u0000\u0000\u0000\u0012\u0119\u0001"+
		"\u0000\u0000\u0000\u0014\u011e\u0001\u0000\u0000\u0000\u0016\u0127\u0001"+
		"\u0000\u0000\u0000\u0018\u0130\u0001\u0000\u0000\u0000\u001a\u0132\u0001"+
		"\u0000\u0000\u0000\u001c\u013d\u0001\u0000\u0000\u0000\u001e\u0142\u0001"+
		"\u0000\u0000\u0000 \u0144\u0001\u0000\u0000\u0000\"\u0154\u0001\u0000"+
		"\u0000\u0000$\u0168\u0001\u0000\u0000\u0000&\u016a\u0001\u0000\u0000\u0000"+
		"(\u016d\u0001\u0000\u0000\u0000*\u0174\u0001\u0000\u0000\u0000,\u017b"+
		"\u0001\u0000\u0000\u0000.\u0186\u0001\u0000\u0000\u00000\u0195\u0001\u0000"+
		"\u0000\u00002\u019c\u0001\u0000\u0000\u00004\u019e\u0001\u0000\u0000\u0000"+
		"6\u01a4\u0001\u0000\u0000\u00008\u01a7\u0001\u0000\u0000\u0000:\u01bb"+
		"\u0001\u0000\u0000\u0000<\u01c1\u0001\u0000\u0000\u0000>\u01c3\u0001\u0000"+
		"\u0000\u0000@\u01c8\u0001\u0000\u0000\u0000B\u01cc\u0001\u0000\u0000\u0000"+
		"D\u01ce\u0001\u0000\u0000\u0000F\u01d3\u0001\u0000\u0000\u0000H\u01d6"+
		"\u0001\u0000\u0000\u0000J\u01db\u0001\u0000\u0000\u0000L\u01df\u0001\u0000"+
		"\u0000\u0000N\u01e4\u0001\u0000\u0000\u0000P\u01e9\u0001\u0000\u0000\u0000"+
		"R\u01eb\u0001\u0000\u0000\u0000T\u01f0\u0001\u0000\u0000\u0000V\u01f2"+
		"\u0001\u0000\u0000\u0000X\u01f4\u0001\u0000\u0000\u0000Z\u01f6\u0001\u0000"+
		"\u0000\u0000\\\u01fc\u0001\u0000\u0000\u0000^\u0201\u0001\u0000\u0000"+
		"\u0000`\u020f\u0001\u0000\u0000\u0000b\u021b\u0001\u0000\u0000\u0000d"+
		"\u0221\u0001\u0000\u0000\u0000f\u0226\u0001\u0000\u0000\u0000h\u022b\u0001"+
		"\u0000\u0000\u0000j\u0238\u0001\u0000\u0000\u0000l\u023a\u0001\u0000\u0000"+
		"\u0000n\u0241\u0001\u0000\u0000\u0000p\u0243\u0001\u0000\u0000\u0000r"+
		"\u0249\u0001\u0000\u0000\u0000t\u024d\u0001\u0000\u0000\u0000v\u0262\u0001"+
		"\u0000\u0000\u0000x\u0264\u0001\u0000\u0000\u0000z\u0268\u0001\u0000\u0000"+
		"\u0000|\u026f\u0001\u0000\u0000\u0000~\u0271\u0001\u0000\u0000\u0000\u0080"+
		"\u0278\u0001\u0000\u0000\u0000\u0082\u027a\u0001\u0000\u0000\u0000\u0084"+
		"\u0086\u0003\u0002\u0001\u0000\u0085\u0084\u0001\u0000\u0000\u0000\u0086"+
		"\u0089\u0001\u0000\u0000\u0000\u0087\u0085\u0001\u0000\u0000\u0000\u0087"+
		"\u0088\u0001\u0000\u0000\u0000\u0088\u008a\u0001\u0000\u0000\u0000\u0089"+
		"\u0087\u0001\u0000\u0000\u0000\u008a\u008b\u0005\u0000\u0000\u0001\u008b"+
		"\u0001\u0001\u0000\u0000\u0000\u008c\u0092\u0003\f\u0006\u0000\u008d\u0092"+
		"\u0003\u000e\u0007\u0000\u008e\u008f\u0003\n\u0005\u0000\u008f\u0090\u0005"+
		"\b\u0000\u0000\u0090\u0092\u0001\u0000\u0000\u0000\u0091\u008c\u0001\u0000"+
		"\u0000\u0000\u0091\u008d\u0001\u0000\u0000\u0000\u0091\u008e\u0001\u0000"+
		"\u0000\u0000\u0092\u0095\u0001\u0000\u0000\u0000\u0093\u0095\u0003\u0004"+
		"\u0002\u0000\u0094\u0091\u0001\u0000\u0000\u0000\u0094\u0093\u0001\u0000"+
		"\u0000\u0000\u0095\u0003\u0001\u0000\u0000\u0000\u0096\u0098\u00057\u0000"+
		"\u0000\u0097\u0099\u0005`\u0000\u0000\u0098\u0097\u0001\u0000\u0000\u0000"+
		"\u0098\u0099\u0001\u0000\u0000\u0000\u0099\u009b\u0001\u0000\u0000\u0000"+
		"\u009a\u009c\u0003\b\u0004\u0000\u009b\u009a\u0001\u0000\u0000\u0000\u009b"+
		"\u009c\u0001\u0000\u0000\u0000\u009c\u009d\u0001\u0000\u0000\u0000\u009d"+
		"\u00a9\u0005\u0003\u0000\u0000\u009e\u00a3\u0003\u0006\u0003\u0000\u009f"+
		"\u00a0\u0005\u0007\u0000\u0000\u00a0\u00a2\u0003\u0006\u0003\u0000\u00a1"+
		"\u009f\u0001\u0000\u0000\u0000\u00a2\u00a5\u0001\u0000\u0000\u0000\u00a3"+
		"\u00a1\u0001\u0000\u0000\u0000\u00a3\u00a4\u0001\u0000\u0000\u0000\u00a4"+
		"\u00a7\u0001\u0000\u0000\u0000\u00a5\u00a3\u0001\u0000\u0000\u0000\u00a6"+
		"\u00a8\u0005\u0007\u0000\u0000\u00a7\u00a6\u0001\u0000\u0000\u0000\u00a7"+
		"\u00a8\u0001\u0000\u0000\u0000\u00a8\u00aa\u0001\u0000\u0000\u0000\u00a9"+
		"\u009e\u0001\u0000\u0000\u0000\u00a9\u00aa\u0001\u0000\u0000\u0000\u00aa"+
		"\u00ab\u0001\u0000\u0000\u0000\u00ab\u00ad\u0005\u0004\u0000\u0000\u00ac"+
		"\u00ae\u0005\b\u0000\u0000\u00ad\u00ac\u0001\u0000\u0000\u0000\u00ad\u00ae"+
		"\u0001\u0000\u0000\u0000\u00ae\u0005\u0001\u0000\u0000\u0000\u00af\u00b2"+
		"\u0003\u0014\n\u0000\u00b0\u00b1\u0005\t\u0000\u0000\u00b1\u00b3\u0003"+
		",\u0016\u0000\u00b2\u00b0\u0001\u0000\u0000\u0000\u00b2\u00b3\u0001\u0000"+
		"\u0000\u0000\u00b3\u0007\u0001\u0000\u0000\u0000\u00b4\u00b5\u0005\u0001"+
		"\u0000\u0000\u00b5\u00b6\u0007\u0000\u0000\u0000\u00b6\u00b7\u0005b\u0000"+
		"\u0000\u00b7\u00b8\u0005\u0002\u0000\u0000\u00b8\t\u0001\u0000\u0000\u0000"+
		"\u00b9\u00bd\u00056\u0000\u0000\u00ba\u00bc\u0003>\u001f\u0000\u00bb\u00ba"+
		"\u0001\u0000\u0000\u0000\u00bc\u00bf\u0001\u0000\u0000\u0000\u00bd\u00bb"+
		"\u0001\u0000\u0000\u0000\u00bd\u00be\u0001\u0000\u0000\u0000\u00be\u00c6"+
		"\u0001\u0000\u0000\u0000\u00bf\u00bd\u0001\u0000\u0000\u0000\u00c0\u00c2"+
		"\u0003>\u001f\u0000\u00c1\u00c0\u0001\u0000\u0000\u0000\u00c2\u00c3\u0001"+
		"\u0000\u0000\u0000\u00c3\u00c1\u0001\u0000\u0000\u0000\u00c3\u00c4\u0001"+
		"\u0000\u0000\u0000\u00c4\u00c6\u0001\u0000\u0000\u0000\u00c5\u00b9\u0001"+
		"\u0000\u0000\u0000\u00c5\u00c1\u0001\u0000\u0000\u0000\u00c6\u00c9\u0001"+
		"\u0000\u0000\u0000\u00c7\u00ca\u0003\u0014\n\u0000\u00c8\u00ca\u0003 "+
		"\u0010\u0000\u00c9\u00c7\u0001\u0000\u0000\u0000\u00c9\u00c8\u0001\u0000"+
		"\u0000\u0000\u00ca\u00d2\u0001\u0000\u0000\u0000\u00cb\u00ce\u0005\u0007"+
		"\u0000\u0000\u00cc\u00cf\u0003\u0014\n\u0000\u00cd\u00cf\u0003 \u0010"+
		"\u0000\u00ce\u00cc\u0001\u0000\u0000\u0000\u00ce\u00cd\u0001\u0000\u0000"+
		"\u0000\u00cf\u00d1\u0001\u0000\u0000\u0000\u00d0\u00cb\u0001\u0000\u0000"+
		"\u0000\u00d1\u00d4\u0001\u0000\u0000\u0000\u00d2\u00d0\u0001\u0000\u0000"+
		"\u0000\u00d2\u00d3\u0001\u0000\u0000\u0000\u00d3\u000b\u0001\u0000\u0000"+
		"\u0000\u00d4\u00d2\u0001\u0000\u0000\u0000\u00d5\u00d7\u0003\u0018\f\u0000"+
		"\u00d6\u00d5\u0001\u0000\u0000\u0000\u00d6\u00d7\u0001\u0000\u0000\u0000"+
		"\u00d7\u00d9\u0001\u0000\u0000\u0000\u00d8\u00da\u0003\u0012\t\u0000\u00d9"+
		"\u00d8\u0001\u0000\u0000\u0000\u00d9\u00da\u0001\u0000\u0000\u0000\u00da"+
		"\u00db\u0001\u0000\u0000\u0000\u00db\u00dc\u0005`\u0000\u0000\u00dc\u00e8"+
		"\u0005\u0001\u0000\u0000\u00dd\u00e2\u00038\u001c\u0000\u00de\u00df\u0005"+
		"\u0007\u0000\u0000\u00df\u00e1\u00038\u001c\u0000\u00e0\u00de\u0001\u0000"+
		"\u0000\u0000\u00e1\u00e4\u0001\u0000\u0000\u0000\u00e2\u00e0\u0001\u0000"+
		"\u0000\u0000\u00e2\u00e3\u0001\u0000\u0000\u0000\u00e3\u00e6\u0001\u0000"+
		"\u0000\u0000\u00e4\u00e2\u0001\u0000\u0000\u0000\u00e5\u00e7\u0003:\u001d"+
		"\u0000\u00e6\u00e5\u0001\u0000\u0000\u0000\u00e6\u00e7\u0001\u0000\u0000"+
		"\u0000\u00e7\u00e9\u0001\u0000\u0000\u0000\u00e8\u00dd\u0001\u0000\u0000"+
		"\u0000\u00e8\u00e9\u0001\u0000\u0000\u0000\u00e9\u00ea\u0001\u0000\u0000"+
		"\u0000\u00ea\u00ee\u0005\u0002\u0000\u0000\u00eb\u00ef\u0005\b\u0000\u0000"+
		"\u00ec\u00ef\u0003j5\u0000\u00ed\u00ef\u0003\u0010\b\u0000\u00ee\u00eb"+
		"\u0001\u0000\u0000\u0000\u00ee\u00ec\u0001\u0000\u0000\u0000\u00ee\u00ed"+
		"\u0001\u0000\u0000\u0000\u00ef\r\u0001\u0000\u0000\u0000\u00f0\u00f2\u0003"+
		"\u0018\f\u0000\u00f1\u00f3\u0003\u0012\t\u0000\u00f2\u00f1\u0001\u0000"+
		"\u0000\u0000\u00f2\u00f3\u0001\u0000\u0000\u0000\u00f3\u00f4\u0001\u0000"+
		"\u0000\u0000\u00f4\u00f5\u0005>\u0000\u0000\u00f5\u00f6\u0003P(\u0000"+
		"\u00f6\u0102\u0005\u0001\u0000\u0000\u00f7\u00fc\u00038\u001c\u0000\u00f8"+
		"\u00f9\u0005\u0007\u0000\u0000\u00f9\u00fb\u00038\u001c\u0000\u00fa\u00f8"+
		"\u0001\u0000\u0000\u0000\u00fb\u00fe\u0001\u0000\u0000\u0000\u00fc\u00fa"+
		"\u0001\u0000\u0000\u0000\u00fc\u00fd\u0001\u0000\u0000\u0000\u00fd\u0100"+
		"\u0001\u0000\u0000\u0000\u00fe\u00fc\u0001\u0000\u0000\u0000\u00ff\u0101"+
		"\u0003:\u001d\u0000\u0100\u00ff\u0001\u0000\u0000\u0000\u0100\u0101\u0001"+
		"\u0000\u0000\u0000\u0101\u0103\u0001\u0000\u0000\u0000\u0102\u00f7\u0001"+
		"\u0000\u0000\u0000\u0102\u0103\u0001\u0000\u0000\u0000\u0103\u0104\u0001"+
		"\u0000\u0000\u0000\u0104\u0108\u0005\u0002\u0000\u0000\u0105\u0109\u0005"+
		"\b\u0000\u0000\u0106\u0109\u0003j5\u0000\u0107\u0109\u0003\u0010\b\u0000"+
		"\u0108\u0105\u0001\u0000\u0000\u0000\u0108\u0106\u0001\u0000\u0000\u0000"+
		"\u0108\u0107\u0001\u0000\u0000\u0000\u0109\u000f\u0001\u0000\u0000\u0000"+
		"\u010a\u010b\u0005\t\u0000\u0000\u010b\u010c\u0005`\u0000\u0000\u010c"+
		"\u010d\u0005\b\u0000\u0000\u010d\u0011\u0001\u0000\u0000\u0000\u010e\u011a"+
		"\u0005`\u0000\u0000\u010f\u0110\u0005\u0003\u0000\u0000\u0110\u0115\u0005"+
		"`\u0000\u0000\u0111\u0112\u0005\u0007\u0000\u0000\u0112\u0114\u0005`\u0000"+
		"\u0000\u0113\u0111\u0001\u0000\u0000\u0000\u0114\u0117\u0001\u0000\u0000"+
		"\u0000\u0115\u0113\u0001\u0000\u0000\u0000\u0115\u0116\u0001\u0000\u0000"+
		"\u0000\u0116\u0118\u0001\u0000\u0000\u0000\u0117\u0115\u0001\u0000\u0000"+
		"\u0000\u0118\u011a\u0005\u0004\u0000\u0000\u0119\u010e\u0001\u0000\u0000"+
		"\u0000\u0119\u010f\u0001\u0000\u0000\u0000\u011a\u011b\u0001\u0000\u0000"+
		"\u0000\u011b\u011c\u0005#\u0000\u0000\u011c\u0013\u0001\u0000\u0000\u0000"+
		"\u011d\u011f\u0003\u0012\t\u0000\u011e\u011d\u0001\u0000\u0000\u0000\u011e"+
		"\u011f\u0001\u0000\u0000\u0000\u011f\u0120\u0001\u0000\u0000\u0000\u0120"+
		"\u0124\u0005`\u0000\u0000\u0121\u0123\u0003\u0016\u000b\u0000\u0122\u0121"+
		"\u0001\u0000\u0000\u0000\u0123\u0126\u0001\u0000\u0000\u0000\u0124\u0122"+
		"\u0001\u0000\u0000\u0000\u0124\u0125\u0001\u0000\u0000\u0000\u0125\u0015"+
		"\u0001\u0000\u0000\u0000\u0126\u0124\u0001\u0000\u0000\u0000\u0127\u0129"+
		"\u0005\u0005\u0000\u0000\u0128\u012a\u0003,\u0016\u0000\u0129\u0128\u0001"+
		"\u0000\u0000\u0000\u0129\u012a\u0001\u0000\u0000\u0000\u012a\u012b\u0001"+
		"\u0000\u0000\u0000\u012b\u012c\u0005\u0006\u0000\u0000\u012c\u0017\u0001"+
		"\u0000\u0000\u0000\u012d\u0131\u0003\u001a\r\u0000\u012e\u0131\u0005;"+
		"\u0000\u0000\u012f\u0131\u0005<\u0000\u0000\u0130\u012d\u0001\u0000\u0000"+
		"\u0000\u0130\u012e\u0001\u0000\u0000\u0000\u0130\u012f\u0001\u0000\u0000"+
		"\u0000\u0131\u0019\u0001\u0000\u0000\u0000\u0132\u0133\u0007\u0001\u0000"+
		"\u0000\u0133\u001b\u0001\u0000\u0000\u0000\u0134\u0139\u0003\n\u0005\u0000"+
		"\u0135\u0139\u0003 \u0010\u0000\u0136\u0139\u0003\u0082A\u0000\u0137\u0139"+
		"\u0003l6\u0000\u0138\u0134\u0001\u0000\u0000\u0000\u0138\u0135\u0001\u0000"+
		"\u0000\u0000\u0138\u0136\u0001\u0000\u0000\u0000\u0138\u0137\u0001\u0000"+
		"\u0000\u0000\u0139\u013a\u0001\u0000\u0000\u0000\u013a\u013b\u0005\b\u0000"+
		"\u0000\u013b\u013e\u0001\u0000\u0000\u0000\u013c\u013e\u0003\u001e\u000f"+
		"\u0000\u013d\u0138\u0001\u0000\u0000\u0000\u013d\u013c\u0001\u0000\u0000"+
		"\u0000\u013e\u001d\u0001\u0000\u0000\u0000\u013f\u0143\u0003Z-\u0000\u0140"+
		"\u0143\u0003n7\u0000\u0141\u0143\u0003^/\u0000\u0142\u013f\u0001\u0000"+
		"\u0000\u0000\u0142\u0140\u0001\u0000\u0000\u0000\u0142\u0141\u0001\u0000"+
		"\u0000\u0000\u0143\u001f\u0001\u0000\u0000\u0000\u0144\u0145\u0003\u0014"+
		"\n\u0000\u0145\u0148\u0003&\u0013\u0000\u0146\u0149\u0003,\u0016\u0000"+
		"\u0147\u0149\u0003\"\u0011\u0000\u0148\u0146\u0001\u0000\u0000\u0000\u0148"+
		"\u0147\u0001\u0000\u0000\u0000\u0149\u0151\u0001\u0000\u0000\u0000\u014a"+
		"\u014d\u0003&\u0013\u0000\u014b\u014e\u0003,\u0016\u0000\u014c\u014e\u0003"+
		"\"\u0011\u0000\u014d\u014b\u0001\u0000\u0000\u0000\u014d\u014c\u0001\u0000"+
		"\u0000\u0000\u014e\u0150\u0001\u0000\u0000\u0000\u014f\u014a\u0001\u0000"+
		"\u0000\u0000\u0150\u0153\u0001\u0000\u0000\u0000\u0151\u014f\u0001\u0000"+
		"\u0000\u0000\u0151\u0152\u0001\u0000\u0000\u0000\u0152!\u0001\u0000\u0000"+
		"\u0000\u0153\u0151\u0001\u0000\u0000\u0000\u0154\u0155\u0005\u0003\u0000"+
		"\u0000\u0155\u015a\u0003$\u0012\u0000\u0156\u0157\u0005\u0007\u0000\u0000"+
		"\u0157\u0159\u0003$\u0012\u0000\u0158\u0156\u0001\u0000\u0000\u0000\u0159"+
		"\u015c\u0001\u0000\u0000\u0000\u015a\u0158\u0001\u0000\u0000\u0000\u015a"+
		"\u015b\u0001\u0000\u0000\u0000\u015b\u015d\u0001\u0000\u0000\u0000\u015c"+
		"\u015a\u0001\u0000\u0000\u0000\u015d\u015e\u0005\u0004\u0000\u0000\u015e"+
		"#\u0001\u0000\u0000\u0000\u015f\u0161\u0003\u0012\t\u0000\u0160\u015f"+
		"\u0001\u0000\u0000\u0000\u0160\u0161\u0001\u0000\u0000\u0000\u0161\u0165"+
		"\u0001\u0000\u0000\u0000\u0162\u0166\u0005`\u0000\u0000\u0163\u0166\u0003"+
		"F#\u0000\u0164\u0166\u0003~?\u0000\u0165\u0162\u0001\u0000\u0000\u0000"+
		"\u0165\u0163\u0001\u0000\u0000\u0000\u0165\u0164\u0001\u0000\u0000\u0000"+
		"\u0166\u0169\u0001\u0000\u0000\u0000\u0167\u0169\u0003\"\u0011\u0000\u0168"+
		"\u0160\u0001\u0000\u0000\u0000\u0168\u0167\u0001\u0000\u0000\u0000\u0169"+
		"%\u0001\u0000\u0000\u0000\u016a\u016b\u0007\u0002\u0000\u0000\u016b\'"+
		"\u0001\u0000\u0000\u0000\u016c\u016e\u0003\u0012\t\u0000\u016d\u016c\u0001"+
		"\u0000\u0000\u0000\u016d\u016e\u0001\u0000\u0000\u0000\u016e\u016f\u0001"+
		"\u0000\u0000\u0000\u016f\u0170\u0005\u0001\u0000\u0000\u0170\u0171\u0003"+
		",\u0016\u0000\u0171\u0172\u0005\u0002\u0000\u0000\u0172)\u0001\u0000\u0000"+
		"\u0000\u0173\u0175\u0003\u0012\t\u0000\u0174\u0173\u0001\u0000\u0000\u0000"+
		"\u0174\u0175\u0001\u0000\u0000\u0000\u0175\u0176\u0001\u0000\u0000\u0000"+
		"\u0176\u0177\u0005\u0001\u0000\u0000\u0177\u0178\u0003.\u0017\u0000\u0178"+
		"\u0179\u0005\u0002\u0000\u0000\u0179+\u0001\u0000\u0000\u0000\u017a\u017c"+
		"\u00032\u0019\u0000\u017b\u017a\u0001\u0000\u0000\u0000\u017b\u017c\u0001"+
		"\u0000\u0000\u0000\u017c\u0183\u0001\u0000\u0000\u0000\u017d\u017f\u0003"+
		"@ \u0000\u017e\u0180\u00034\u001a\u0000\u017f\u017e\u0001\u0000\u0000"+
		"\u0000\u017f\u0180\u0001\u0000\u0000\u0000\u0180\u0184\u0001\u0000\u0000"+
		"\u0000\u0181\u0184\u0003(\u0014\u0000\u0182\u0184\u00030\u0018\u0000\u0183"+
		"\u017d\u0001\u0000\u0000\u0000\u0183\u0181\u0001\u0000\u0000\u0000\u0183"+
		"\u0182\u0001\u0000\u0000\u0000\u0184-\u0001\u0000\u0000\u0000\u0185\u0187"+
		"\u00032\u0019\u0000\u0186\u0185\u0001\u0000\u0000\u0000\u0186\u0187\u0001"+
		"\u0000\u0000\u0000\u0187\u018e\u0001\u0000\u0000\u0000\u0188\u018a\u0003"+
		"6\u001b\u0000\u0189\u018b\u00034\u001a\u0000\u018a\u0189\u0001\u0000\u0000"+
		"\u0000\u018a\u018b\u0001\u0000\u0000\u0000\u018b\u018f\u0001\u0000\u0000"+
		"\u0000\u018c\u018f\u0003*\u0015\u0000\u018d\u018f\u0003\"\u0011\u0000"+
		"\u018e\u0188\u0001\u0000\u0000\u0000\u018e\u018c\u0001\u0000\u0000\u0000"+
		"\u018e\u018d\u0001\u0000\u0000\u0000\u018f/\u0001\u0000\u0000\u0000\u0190"+
		"\u0192\u0003@ \u0000\u0191\u0193\u00034\u001a\u0000\u0192\u0191\u0001"+
		"\u0000\u0000\u0000\u0192\u0193\u0001\u0000\u0000\u0000\u0193\u0196\u0001"+
		"\u0000\u0000\u0000\u0194\u0196\u0003(\u0014\u0000\u0195\u0190\u0001\u0000"+
		"\u0000\u0000\u0195\u0194\u0001\u0000\u0000\u0000\u0196\u0197\u0001\u0000"+
		"\u0000\u0000\u0197\u0198\u0005\"\u0000\u0000\u0198\u0199\u0003,\u0016"+
		"\u0000\u0199\u019a\u0005#\u0000\u0000\u019a\u019b\u0003,\u0016\u0000\u019b"+
		"1\u0001\u0000\u0000\u0000\u019c\u019d\u0007\u0003\u0000\u0000\u019d3\u0001"+
		"\u0000\u0000\u0000\u019e\u01a0\u0003N\'\u0000\u019f\u01a1\u0003,\u0016"+
		"\u0000\u01a0\u019f\u0001\u0000\u0000\u0000\u01a0\u01a1\u0001\u0000\u0000"+
		"\u0000\u01a15\u0001\u0000\u0000\u0000\u01a2\u01a5\u0003z=\u0000\u01a3"+
		"\u01a5\u0003\u0014\n\u0000\u01a4\u01a2\u0001\u0000\u0000\u0000\u01a4\u01a3"+
		"\u0001\u0000\u0000\u0000\u01a57\u0001\u0000\u0000\u0000\u01a6\u01a8\u0005"+
		"8\u0000\u0000\u01a7\u01a6\u0001\u0000\u0000\u0000\u01a7\u01a8\u0001\u0000"+
		"\u0000\u0000\u01a8\u01aa\u0001\u0000\u0000\u0000\u01a9\u01ab\u0003<\u001e"+
		"\u0000\u01aa\u01a9\u0001\u0000\u0000\u0000\u01aa\u01ab\u0001\u0000\u0000"+
		"\u0000\u01ab\u01ac\u0001\u0000\u0000\u0000\u01ac\u01b9\u0003\u0014\n\u0000"+
		"\u01ad\u01b7\u0005\t\u0000\u0000\u01ae\u01b8\u0003.\u0017\u0000\u01af"+
		"\u01b5\u0003D\"\u0000\u01b0\u01b6\u0003\u0014\n\u0000\u01b1\u01b2\u0005"+
		"\u0001\u0000\u0000\u01b2\u01b3\u0003\u0014\n\u0000\u01b3\u01b4\u0005\u0002"+
		"\u0000\u0000\u01b4\u01b6\u0001\u0000\u0000\u0000\u01b5\u01b0\u0001\u0000"+
		"\u0000\u0000\u01b5\u01b1\u0001\u0000\u0000\u0000\u01b6\u01b8\u0001\u0000"+
		"\u0000\u0000\u01b7\u01ae\u0001\u0000\u0000\u0000\u01b7\u01af\u0001\u0000"+
		"\u0000\u0000\u01b8\u01ba\u0001\u0000\u0000\u0000\u01b9\u01ad\u0001\u0000"+
		"\u0000\u0000\u01b9\u01ba\u0001\u0000\u0000\u0000\u01ba9\u0001\u0000\u0000"+
		"\u0000\u01bb\u01bd\u0005\u0007\u0000\u0000\u01bc\u01be\u0003\u0012\t\u0000"+
		"\u01bd\u01bc\u0001\u0000\u0000\u0000\u01bd\u01be\u0001\u0000\u0000\u0000"+
		"\u01be\u01bf\u0001\u0000\u0000\u0000\u01bf\u01c0\u0005/\u0000\u0000\u01c0"+
		";\u0001\u0000\u0000\u0000\u01c1\u01c2\u0005\'\u0000\u0000\u01c2=\u0001"+
		"\u0000\u0000\u0000\u01c3\u01c4\u0007\u0004\u0000\u0000\u01c4?\u0001\u0000"+
		"\u0000\u0000\u01c5\u01c9\u00036\u001b\u0000\u01c6\u01c9\u0003\u0082A\u0000"+
		"\u01c7\u01c9\u0003(\u0014\u0000\u01c8\u01c5\u0001\u0000\u0000\u0000\u01c8"+
		"\u01c6\u0001\u0000\u0000\u0000\u01c8\u01c7\u0001\u0000\u0000\u0000\u01c9"+
		"A\u0001\u0000\u0000\u0000\u01ca\u01cd\u00036\u001b\u0000\u01cb\u01cd\u0003"+
		"*\u0015\u0000\u01cc\u01ca\u0001\u0000\u0000\u0000\u01cc\u01cb\u0001\u0000"+
		"\u0000\u0000\u01cdC\u0001\u0000\u0000\u0000\u01ce\u01cf\u0005K\u0000\u0000"+
		"\u01cfE\u0001\u0000\u0000\u0000\u01d0\u01d4\u0003H$\u0000\u01d1\u01d4"+
		"\u0003J%\u0000\u01d2\u01d4\u0003L&\u0000\u01d3\u01d0\u0001\u0000\u0000"+
		"\u0000\u01d3\u01d1\u0001\u0000\u0000\u0000\u01d3\u01d2\u0001\u0000\u0000"+
		"\u0000\u01d4G\u0001\u0000\u0000\u0000\u01d5\u01d7\u0005\u0016\u0000\u0000"+
		"\u01d6\u01d5\u0001\u0000\u0000\u0000\u01d6\u01d7\u0001\u0000\u0000\u0000"+
		"\u01d7\u01d8\u0001\u0000\u0000\u0000\u01d8\u01d9\u0005b\u0000\u0000\u01d9"+
		"I\u0001\u0000\u0000\u0000\u01da\u01dc\u0005\u0016\u0000\u0000\u01db\u01da"+
		"\u0001\u0000\u0000\u0000\u01db\u01dc\u0001\u0000\u0000\u0000\u01dc\u01dd"+
		"\u0001\u0000\u0000\u0000\u01dd\u01de\u0005c\u0000\u0000\u01deK\u0001\u0000"+
		"\u0000\u0000\u01df\u01e0\u0005a\u0000\u0000\u01e0M\u0001\u0000\u0000\u0000"+
		"\u01e1\u01e5\u0003R)\u0000\u01e2\u01e5\u0003T*\u0000\u01e3\u01e5\u0003"+
		"X,\u0000\u01e4\u01e1\u0001\u0000\u0000\u0000\u01e4\u01e2\u0001\u0000\u0000"+
		"\u0000\u01e4\u01e3\u0001\u0000\u0000\u0000\u01e5O\u0001\u0000\u0000\u0000"+
		"\u01e6\u01ea\u0003R)\u0000\u01e7\u01ea\u0003V+\u0000\u01e8\u01ea\u0005"+
		"\t\u0000\u0000\u01e9\u01e6\u0001\u0000\u0000\u0000\u01e9\u01e7\u0001\u0000"+
		"\u0000\u0000\u01e9\u01e8\u0001\u0000\u0000\u0000\u01eaQ\u0001\u0000\u0000"+
		"\u0000\u01eb\u01ec\u0007\u0005\u0000\u0000\u01ecS\u0001\u0000\u0000\u0000"+
		"\u01ed\u01f1\u0005$\u0000\u0000\u01ee\u01f1\u0005%\u0000\u0000\u01ef\u01f1"+
		"\u0003V+\u0000\u01f0\u01ed\u0001\u0000\u0000\u0000\u01f0\u01ee\u0001\u0000"+
		"\u0000\u0000\u01f0\u01ef\u0001\u0000\u0000\u0000\u01f1U\u0001\u0000\u0000"+
		"\u0000\u01f2\u01f3\u0007\u0006\u0000\u0000\u01f3W\u0001\u0000\u0000\u0000"+
		"\u01f4\u01f5\u0007\u0007\u0000\u0000\u01f5Y\u0001\u0000\u0000\u0000\u01f6"+
		"\u01f7\u0005?\u0000\u0000\u01f7\u01f8\u0003h4\u0000\u01f8\u01fa\u0003"+
		"j5\u0000\u01f9\u01fb\u0003\\.\u0000\u01fa\u01f9\u0001\u0000\u0000\u0000"+
		"\u01fa\u01fb\u0001\u0000\u0000\u0000\u01fb[\u0001\u0000\u0000\u0000\u01fc"+
		"\u01ff\u0005@\u0000\u0000\u01fd\u0200\u0003Z-\u0000\u01fe\u0200\u0003"+
		"j5\u0000\u01ff\u01fd\u0001\u0000\u0000\u0000\u01ff\u01fe\u0001\u0000\u0000"+
		"\u0000\u0200]\u0001\u0000\u0000\u0000\u0201\u0202\u0005A\u0000\u0000\u0202"+
		"\u0203\u0003h4\u0000\u0203\u0207\u0005\u0003\u0000\u0000\u0204\u0206\u0003"+
		"`0\u0000\u0205\u0204\u0001\u0000\u0000\u0000\u0206\u0209\u0001\u0000\u0000"+
		"\u0000\u0207\u0205\u0001\u0000\u0000\u0000\u0207\u0208\u0001\u0000\u0000"+
		"\u0000\u0208\u020b\u0001\u0000\u0000\u0000\u0209\u0207\u0001\u0000\u0000"+
		"\u0000\u020a\u020c\u0003b1\u0000\u020b\u020a\u0001\u0000\u0000\u0000\u020b"+
		"\u020c\u0001\u0000\u0000\u0000\u020c\u020d\u0001\u0000\u0000\u0000\u020d"+
		"\u020e\u0005\u0004\u0000\u0000\u020e_\u0001\u0000\u0000\u0000\u020f\u0210"+
		"\u0005B\u0000\u0000\u0210\u0215\u0003d2\u0000\u0211\u0212\u0005\u0007"+
		"\u0000\u0000\u0212\u0214\u0003d2\u0000\u0213\u0211\u0001\u0000\u0000\u0000"+
		"\u0214\u0217\u0001\u0000\u0000\u0000\u0215\u0213\u0001\u0000\u0000\u0000"+
		"\u0215\u0216\u0001\u0000\u0000\u0000\u0216\u0218\u0001\u0000\u0000\u0000"+
		"\u0217\u0215\u0001\u0000\u0000\u0000\u0218\u0219\u0005#\u0000\u0000\u0219"+
		"\u021a\u0003j5\u0000\u021aa\u0001\u0000\u0000\u0000\u021b\u021c\u0005"+
		"C\u0000\u0000\u021c\u021d\u0005#\u0000\u0000\u021d\u021e\u0003j5\u0000"+
		"\u021ec\u0001\u0000\u0000\u0000\u021f\u0222\u0005`\u0000\u0000\u0220\u0222"+
		"\u0003F#\u0000\u0221\u021f\u0001\u0000\u0000\u0000\u0221\u0220\u0001\u0000"+
		"\u0000\u0000\u0222\u0224\u0001\u0000\u0000\u0000\u0223\u0225\u0003f3\u0000"+
		"\u0224\u0223\u0001\u0000\u0000\u0000\u0224\u0225\u0001\u0000\u0000\u0000"+
		"\u0225e\u0001\u0000\u0000\u0000\u0226\u0229\u0005.\u0000\u0000\u0227\u022a"+
		"\u0005`\u0000\u0000\u0228\u022a\u0003F#\u0000\u0229\u0227\u0001\u0000"+
		"\u0000\u0000\u0229\u0228\u0001\u0000\u0000\u0000\u022ag\u0001\u0000\u0000"+
		"\u0000\u022b\u022c\u0005\u0001\u0000\u0000\u022c\u022d\u0003,\u0016\u0000"+
		"\u022d\u022e\u0005\u0002\u0000\u0000\u022ei\u0001\u0000\u0000\u0000\u022f"+
		"\u0233\u0005\u0003\u0000\u0000\u0230\u0232\u0003\u001c\u000e\u0000\u0231"+
		"\u0230\u0001\u0000\u0000\u0000\u0232\u0235\u0001\u0000\u0000\u0000\u0233"+
		"\u0231\u0001\u0000\u0000\u0000\u0233\u0234\u0001\u0000\u0000\u0000\u0234"+
		"\u0236\u0001\u0000\u0000\u0000\u0235\u0233\u0001\u0000\u0000\u0000\u0236"+
		"\u0239\u0005\u0004\u0000\u0000\u0237\u0239\u0003\u001c\u000e\u0000\u0238"+
		"\u022f\u0001\u0000\u0000\u0000\u0238\u0237\u0001\u0000\u0000\u0000\u0239"+
		"k\u0001\u0000\u0000\u0000\u023a\u023c\u00055\u0000\u0000\u023b\u023d\u0003"+
		",\u0016\u0000\u023c\u023b\u0001\u0000\u0000\u0000\u023c\u023d\u0001\u0000"+
		"\u0000\u0000\u023dm\u0001\u0000\u0000\u0000\u023e\u0242\u0003r9\u0000"+
		"\u023f\u0242\u0003t:\u0000\u0240\u0242\u0003p8\u0000\u0241\u023e\u0001"+
		"\u0000\u0000\u0000\u0241\u023f\u0001\u0000\u0000\u0000\u0241\u0240\u0001"+
		"\u0000\u0000\u0000\u0242o\u0001\u0000\u0000\u0000\u0243\u0244\u0005F\u0000"+
		"\u0000\u0244\u0247\u0003v;\u0000\u0245\u0246\u0005D\u0000\u0000\u0246"+
		"\u0248\u0003h4\u0000\u0247\u0245\u0001\u0000\u0000\u0000\u0247\u0248\u0001"+
		"\u0000\u0000\u0000\u0248q\u0001\u0000\u0000\u0000\u0249\u024a\u0005D\u0000"+
		"\u0000\u024a\u024b\u0003h4\u0000\u024b\u024c\u0003v;\u0000\u024cs\u0001"+
		"\u0000\u0000\u0000\u024d\u024e\u0005E\u0000\u0000\u024e\u024f\u0005\u0001"+
		"\u0000\u0000\u024f\u0250\u0003\n\u0005\u0000\u0250\u0251\u0005\b\u0000"+
		"\u0000\u0251\u0252\u0003,\u0016\u0000\u0252\u0253\u0005\b\u0000\u0000"+
		"\u0253\u0254\u0003,\u0016\u0000\u0254\u0255\u0005\u0002\u0000\u0000\u0255"+
		"\u0256\u0003v;\u0000\u0256u\u0001\u0000\u0000\u0000\u0257\u0263\u0003"+
		"x<\u0000\u0258\u025d\u0005\u0003\u0000\u0000\u0259\u025c\u0003\u001c\u000e"+
		"\u0000\u025a\u025c\u0003x<\u0000\u025b\u0259\u0001\u0000\u0000\u0000\u025b"+
		"\u025a\u0001\u0000\u0000\u0000\u025c\u025f\u0001\u0000\u0000\u0000\u025d"+
		"\u025b\u0001\u0000\u0000\u0000\u025d\u025e\u0001\u0000\u0000\u0000\u025e"+
		"\u0260\u0001\u0000\u0000\u0000\u025f\u025d\u0001\u0000\u0000\u0000\u0260"+
		"\u0263\u0005\u0004\u0000\u0000\u0261\u0263\u0003\u001c\u000e\u0000\u0262"+
		"\u0257\u0001\u0000\u0000\u0000\u0262\u0258\u0001\u0000\u0000\u0000\u0262"+
		"\u0261\u0001\u0000\u0000\u0000\u0263w\u0001\u0000\u0000\u0000\u0264\u0265"+
		"\u0007\b\u0000\u0000\u0265\u0266\u0005\b\u0000\u0000\u0266y\u0001\u0000"+
		"\u0000\u0000\u0267\u0269\u0003\u0012\t\u0000\u0268\u0267\u0001\u0000\u0000"+
		"\u0000\u0268\u0269\u0001\u0000\u0000\u0000\u0269\u026d\u0001\u0000\u0000"+
		"\u0000\u026a\u026e\u0003~?\u0000\u026b\u026e\u0003F#\u0000\u026c\u026e"+
		"\u0003|>\u0000\u026d\u026a\u0001\u0000\u0000\u0000\u026d\u026b\u0001\u0000"+
		"\u0000\u0000\u026d\u026c\u0001\u0000\u0000\u0000\u026e{\u0001\u0000\u0000"+
		"\u0000\u026f\u0270\u0007\t\u0000\u0000\u0270}\u0001\u0000\u0000\u0000"+
		"\u0271\u0275\u0007\n\u0000\u0000\u0272\u0274\u0003~?\u0000\u0273\u0272"+
		"\u0001\u0000\u0000\u0000\u0274\u0277\u0001\u0000\u0000\u0000\u0275\u0273"+
		"\u0001\u0000\u0000\u0000\u0275\u0276\u0001\u0000\u0000\u0000\u0276\u007f"+
		"\u0001\u0000\u0000\u0000\u0277\u0275\u0001\u0000\u0000\u0000\u0278\u0279"+
		"\u0005h\u0000\u0000\u0279\u0081\u0001\u0000\u0000\u0000\u027a\u027b\u0005"+
		"`\u0000\u0000\u027b\u0284\u0005\u0001\u0000\u0000\u027c\u0281\u0003,\u0016"+
		"\u0000\u027d\u027e\u0005\u0007\u0000\u0000\u027e\u0280\u0003,\u0016\u0000"+
		"\u027f\u027d\u0001\u0000\u0000\u0000\u0280\u0283\u0001\u0000\u0000\u0000"+
		"\u0281\u027f\u0001\u0000\u0000\u0000\u0281\u0282\u0001\u0000\u0000\u0000"+
		"\u0282\u0285\u0001\u0000\u0000\u0000\u0283\u0281\u0001\u0000\u0000\u0000"+
		"\u0284\u027c\u0001\u0000\u0000\u0000\u0284\u0285\u0001\u0000\u0000\u0000"+
		"\u0285\u0286\u0001\u0000\u0000\u0000\u0286\u0287\u0005\u0002\u0000\u0000"+
		"\u0287\u0083\u0001\u0000\u0000\u0000Z\u0087\u0091\u0094\u0098\u009b\u00a3"+
		"\u00a7\u00a9\u00ad\u00b2\u00bd\u00c3\u00c5\u00c9\u00ce\u00d2\u00d6\u00d9"+
		"\u00e2\u00e6\u00e8\u00ee\u00f2\u00fc\u0100\u0102\u0108\u0115\u0119\u011e"+
		"\u0124\u0129\u0130\u0138\u013d\u0142\u0148\u014d\u0151\u015a\u0160\u0165"+
		"\u0168\u016d\u0174\u017b\u017f\u0183\u0186\u018a\u018e\u0192\u0195\u01a0"+
		"\u01a4\u01a7\u01aa\u01b5\u01b7\u01b9\u01bd\u01c8\u01cc\u01d3\u01d6\u01db"+
		"\u01e4\u01e9\u01f0\u01fa\u01ff\u0207\u020b\u0215\u0221\u0224\u0229\u0233"+
		"\u0238\u023c\u0241\u0247\u025b\u025d\u0262\u0268\u026d\u0275\u0281\u0284";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}