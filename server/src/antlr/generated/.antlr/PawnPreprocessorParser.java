// Generated from d:/test-pawn/src/antlr/generated/PawnPreprocessor.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class PawnPreprocessorParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		COMMENT_BLOCK=1, COMMENT_LINE=2, NL_ESC=3, STRING=4, WS=5, NEWLINE=6, 
		PREPROCESS_BEGIN=7, PREPROCESS_INCLUDE=8, PREPROCESS_DEFINE=9, PREPROCESS_UNDEF=10, 
		PREPROCESS_IFDEF=11, PREPROCESS_IFNDEF=12, PREPROCESS_IF=13, PREPROCESS_ELSE=14, 
		PREPROCESS_ELIF=15, PREPROCESS_ENDIF=16, PREPROCESS_PRAGMA=17, PREPROCESS_ERROR=18, 
		DEFINED=19, ID=20, COMMA=21, PAREN_OPEN=22, PAREN_CLOSE=23, CHAR=24;
	public static final int
		RULE_program = 0, RULE_statement = 1, RULE_preprocess = 2, RULE_ppChars = 3, 
		RULE_ppInclude = 4, RULE_ppPragma = 5, RULE_ppError = 6, RULE_ppUndef = 7, 
		RULE_ppDefineVar = 8, RULE_ppDefineFunc = 9, RULE_ppdfId = 10, RULE_ppdfiArguments = 11, 
		RULE_ppdfiArgument = 12, RULE_ppdfChars = 13, RULE_ppdfcId = 14, RULE_ppdfcNotId = 15, 
		RULE_ppIfStatement = 16, RULE_ppisIF = 17, RULE_ppisElif = 18, RULE_ppisElse = 19, 
		RULE_ppisEndif = 20, RULE_ppisIfDef = 21, RULE_ppisIfNdef = 22, RULE_ppisStatement = 23, 
		RULE_ppisElifElseEndif = 24, RULE_ppisElseEndif = 25;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "statement", "preprocess", "ppChars", "ppInclude", "ppPragma", 
			"ppError", "ppUndef", "ppDefineVar", "ppDefineFunc", "ppdfId", "ppdfiArguments", 
			"ppdfiArgument", "ppdfChars", "ppdfcId", "ppdfcNotId", "ppIfStatement", 
			"ppisIF", "ppisElif", "ppisElse", "ppisEndif", "ppisIfDef", "ppisIfNdef", 
			"ppisStatement", "ppisElifElseEndif", "ppisElseEndif"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, null, null, null, "'#'", "'include'", "'define'", 
			"'undef'", "'ifdef'", "'ifndef'", "'if'", "'else'", "'elif'", "'endif'", 
			"'pragma'", "'error'", "'defined'", null, "','", "'('", "')'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "COMMENT_BLOCK", "COMMENT_LINE", "NL_ESC", "STRING", "WS", "NEWLINE", 
			"PREPROCESS_BEGIN", "PREPROCESS_INCLUDE", "PREPROCESS_DEFINE", "PREPROCESS_UNDEF", 
			"PREPROCESS_IFDEF", "PREPROCESS_IFNDEF", "PREPROCESS_IF", "PREPROCESS_ELSE", 
			"PREPROCESS_ELIF", "PREPROCESS_ENDIF", "PREPROCESS_PRAGMA", "PREPROCESS_ERROR", 
			"DEFINED", "ID", "COMMA", "PAREN_OPEN", "PAREN_CLOSE", "CHAR"
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
	public String getGrammarFileName() { return "PawnPreprocessor.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }


	    protected const int EOF = Eof;

	public PawnPreprocessorParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgramContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(PawnPreprocessorParser.EOF, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(55);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 33030384L) != 0)) {
				{
				{
				setState(52);
				statement();
				}
				}
				setState(57);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(58);
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
	public static class StatementContext extends ParserRuleContext {
		public PreprocessContext preprocess() {
			return getRuleContext(PreprocessContext.class,0);
		}
		public TerminalNode STRING() { return getToken(PawnPreprocessorParser.STRING, 0); }
		public PpCharsContext ppChars() {
			return getRuleContext(PpCharsContext.class,0);
		}
		public TerminalNode NEWLINE() { return getToken(PawnPreprocessorParser.NEWLINE, 0); }
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_statement);
		try {
			setState(66);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(60);
				preprocess();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(61);
				match(STRING);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(64);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case STRING:
				case WS:
				case PREPROCESS_BEGIN:
				case DEFINED:
				case ID:
				case COMMA:
				case PAREN_OPEN:
				case PAREN_CLOSE:
				case CHAR:
					{
					setState(62);
					ppChars();
					}
					break;
				case NEWLINE:
					{
					setState(63);
					match(NEWLINE);
					}
					break;
				default:
					throw new NoViableAltException(this);
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
	public static class PreprocessContext extends ParserRuleContext {
		public PpIncludeContext ppInclude() {
			return getRuleContext(PpIncludeContext.class,0);
		}
		public PpDefineFuncContext ppDefineFunc() {
			return getRuleContext(PpDefineFuncContext.class,0);
		}
		public PpDefineVarContext ppDefineVar() {
			return getRuleContext(PpDefineVarContext.class,0);
		}
		public PpUndefContext ppUndef() {
			return getRuleContext(PpUndefContext.class,0);
		}
		public PpPragmaContext ppPragma() {
			return getRuleContext(PpPragmaContext.class,0);
		}
		public PpErrorContext ppError() {
			return getRuleContext(PpErrorContext.class,0);
		}
		public PpIfStatementContext ppIfStatement() {
			return getRuleContext(PpIfStatementContext.class,0);
		}
		public PreprocessContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_preprocess; }
	}

	public final PreprocessContext preprocess() throws RecognitionException {
		PreprocessContext _localctx = new PreprocessContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_preprocess);
		try {
			setState(75);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(68);
				ppInclude();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(69);
				ppDefineFunc();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(70);
				ppDefineVar();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(71);
				ppUndef();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(72);
				ppPragma();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(73);
				ppError();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(74);
				ppIfStatement();
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
	public static class PpCharsContext extends ParserRuleContext {
		public List<TerminalNode> STRING() { return getTokens(PawnPreprocessorParser.STRING); }
		public TerminalNode STRING(int i) {
			return getToken(PawnPreprocessorParser.STRING, i);
		}
		public List<TerminalNode> WS() { return getTokens(PawnPreprocessorParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(PawnPreprocessorParser.WS, i);
		}
		public List<TerminalNode> PREPROCESS_BEGIN() { return getTokens(PawnPreprocessorParser.PREPROCESS_BEGIN); }
		public TerminalNode PREPROCESS_BEGIN(int i) {
			return getToken(PawnPreprocessorParser.PREPROCESS_BEGIN, i);
		}
		public List<TerminalNode> DEFINED() { return getTokens(PawnPreprocessorParser.DEFINED); }
		public TerminalNode DEFINED(int i) {
			return getToken(PawnPreprocessorParser.DEFINED, i);
		}
		public List<TerminalNode> ID() { return getTokens(PawnPreprocessorParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(PawnPreprocessorParser.ID, i);
		}
		public List<TerminalNode> COMMA() { return getTokens(PawnPreprocessorParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(PawnPreprocessorParser.COMMA, i);
		}
		public List<TerminalNode> PAREN_OPEN() { return getTokens(PawnPreprocessorParser.PAREN_OPEN); }
		public TerminalNode PAREN_OPEN(int i) {
			return getToken(PawnPreprocessorParser.PAREN_OPEN, i);
		}
		public List<TerminalNode> PAREN_CLOSE() { return getTokens(PawnPreprocessorParser.PAREN_CLOSE); }
		public TerminalNode PAREN_CLOSE(int i) {
			return getToken(PawnPreprocessorParser.PAREN_CLOSE, i);
		}
		public List<TerminalNode> CHAR() { return getTokens(PawnPreprocessorParser.CHAR); }
		public TerminalNode CHAR(int i) {
			return getToken(PawnPreprocessorParser.CHAR, i);
		}
		public PpCharsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ppChars; }
	}

	public final PpCharsContext ppChars() throws RecognitionException {
		PpCharsContext _localctx = new PpCharsContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_ppChars);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(78); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(77);
					_la = _input.LA(1);
					if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 33030320L) != 0)) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(80); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,4,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
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
	public static class PpIncludeContext extends ParserRuleContext {
		public TerminalNode PREPROCESS_BEGIN() { return getToken(PawnPreprocessorParser.PREPROCESS_BEGIN, 0); }
		public TerminalNode PREPROCESS_INCLUDE() { return getToken(PawnPreprocessorParser.PREPROCESS_INCLUDE, 0); }
		public PpCharsContext ppChars() {
			return getRuleContext(PpCharsContext.class,0);
		}
		public TerminalNode NEWLINE() { return getToken(PawnPreprocessorParser.NEWLINE, 0); }
		public TerminalNode EOF() { return getToken(PawnPreprocessorParser.EOF, 0); }
		public List<TerminalNode> WS() { return getTokens(PawnPreprocessorParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(PawnPreprocessorParser.WS, i);
		}
		public PpIncludeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ppInclude; }
	}

	public final PpIncludeContext ppInclude() throws RecognitionException {
		PpIncludeContext _localctx = new PpIncludeContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_ppInclude);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(82);
			match(PREPROCESS_BEGIN);
			setState(86);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==WS) {
				{
				{
				setState(83);
				match(WS);
				}
				}
				setState(88);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(89);
			match(PREPROCESS_INCLUDE);
			setState(93);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,6,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(90);
					match(WS);
					}
					} 
				}
				setState(95);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,6,_ctx);
			}
			setState(96);
			ppChars();
			setState(100);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==WS) {
				{
				{
				setState(97);
				match(WS);
				}
				}
				setState(102);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(103);
			_la = _input.LA(1);
			if ( !(_la==EOF || _la==NEWLINE) ) {
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
	public static class PpPragmaContext extends ParserRuleContext {
		public TerminalNode PREPROCESS_BEGIN() { return getToken(PawnPreprocessorParser.PREPROCESS_BEGIN, 0); }
		public TerminalNode PREPROCESS_PRAGMA() { return getToken(PawnPreprocessorParser.PREPROCESS_PRAGMA, 0); }
		public PpCharsContext ppChars() {
			return getRuleContext(PpCharsContext.class,0);
		}
		public TerminalNode NEWLINE() { return getToken(PawnPreprocessorParser.NEWLINE, 0); }
		public TerminalNode EOF() { return getToken(PawnPreprocessorParser.EOF, 0); }
		public List<TerminalNode> WS() { return getTokens(PawnPreprocessorParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(PawnPreprocessorParser.WS, i);
		}
		public PpPragmaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ppPragma; }
	}

	public final PpPragmaContext ppPragma() throws RecognitionException {
		PpPragmaContext _localctx = new PpPragmaContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_ppPragma);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(105);
			match(PREPROCESS_BEGIN);
			setState(109);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==WS) {
				{
				{
				setState(106);
				match(WS);
				}
				}
				setState(111);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(112);
			match(PREPROCESS_PRAGMA);
			setState(116);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(113);
					match(WS);
					}
					} 
				}
				setState(118);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
			}
			setState(119);
			ppChars();
			setState(123);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==WS) {
				{
				{
				setState(120);
				match(WS);
				}
				}
				setState(125);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(126);
			_la = _input.LA(1);
			if ( !(_la==EOF || _la==NEWLINE) ) {
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
	public static class PpErrorContext extends ParserRuleContext {
		public TerminalNode PREPROCESS_BEGIN() { return getToken(PawnPreprocessorParser.PREPROCESS_BEGIN, 0); }
		public TerminalNode PREPROCESS_ERROR() { return getToken(PawnPreprocessorParser.PREPROCESS_ERROR, 0); }
		public PpCharsContext ppChars() {
			return getRuleContext(PpCharsContext.class,0);
		}
		public TerminalNode NEWLINE() { return getToken(PawnPreprocessorParser.NEWLINE, 0); }
		public TerminalNode EOF() { return getToken(PawnPreprocessorParser.EOF, 0); }
		public List<TerminalNode> WS() { return getTokens(PawnPreprocessorParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(PawnPreprocessorParser.WS, i);
		}
		public PpErrorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ppError; }
	}

	public final PpErrorContext ppError() throws RecognitionException {
		PpErrorContext _localctx = new PpErrorContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_ppError);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(128);
			match(PREPROCESS_BEGIN);
			setState(132);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==WS) {
				{
				{
				setState(129);
				match(WS);
				}
				}
				setState(134);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(135);
			match(PREPROCESS_ERROR);
			setState(139);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,12,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(136);
					match(WS);
					}
					} 
				}
				setState(141);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,12,_ctx);
			}
			setState(142);
			ppChars();
			setState(146);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==WS) {
				{
				{
				setState(143);
				match(WS);
				}
				}
				setState(148);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(149);
			_la = _input.LA(1);
			if ( !(_la==EOF || _la==NEWLINE) ) {
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
	public static class PpUndefContext extends ParserRuleContext {
		public TerminalNode PREPROCESS_BEGIN() { return getToken(PawnPreprocessorParser.PREPROCESS_BEGIN, 0); }
		public TerminalNode PREPROCESS_UNDEF() { return getToken(PawnPreprocessorParser.PREPROCESS_UNDEF, 0); }
		public TerminalNode ID() { return getToken(PawnPreprocessorParser.ID, 0); }
		public TerminalNode NEWLINE() { return getToken(PawnPreprocessorParser.NEWLINE, 0); }
		public TerminalNode EOF() { return getToken(PawnPreprocessorParser.EOF, 0); }
		public List<TerminalNode> WS() { return getTokens(PawnPreprocessorParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(PawnPreprocessorParser.WS, i);
		}
		public PpUndefContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ppUndef; }
	}

	public final PpUndefContext ppUndef() throws RecognitionException {
		PpUndefContext _localctx = new PpUndefContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_ppUndef);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(151);
			match(PREPROCESS_BEGIN);
			setState(155);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==WS) {
				{
				{
				setState(152);
				match(WS);
				}
				}
				setState(157);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(158);
			match(PREPROCESS_UNDEF);
			setState(160); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(159);
				match(WS);
				}
				}
				setState(162); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==WS );
			setState(164);
			match(ID);
			setState(168);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==WS) {
				{
				{
				setState(165);
				match(WS);
				}
				}
				setState(170);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(171);
			_la = _input.LA(1);
			if ( !(_la==EOF || _la==NEWLINE) ) {
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
	public static class PpDefineVarContext extends ParserRuleContext {
		public TerminalNode PREPROCESS_BEGIN() { return getToken(PawnPreprocessorParser.PREPROCESS_BEGIN, 0); }
		public TerminalNode PREPROCESS_DEFINE() { return getToken(PawnPreprocessorParser.PREPROCESS_DEFINE, 0); }
		public TerminalNode ID() { return getToken(PawnPreprocessorParser.ID, 0); }
		public TerminalNode NEWLINE() { return getToken(PawnPreprocessorParser.NEWLINE, 0); }
		public TerminalNode EOF() { return getToken(PawnPreprocessorParser.EOF, 0); }
		public List<TerminalNode> WS() { return getTokens(PawnPreprocessorParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(PawnPreprocessorParser.WS, i);
		}
		public PpCharsContext ppChars() {
			return getRuleContext(PpCharsContext.class,0);
		}
		public PpDefineVarContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ppDefineVar; }
	}

	public final PpDefineVarContext ppDefineVar() throws RecognitionException {
		PpDefineVarContext _localctx = new PpDefineVarContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_ppDefineVar);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(173);
			match(PREPROCESS_BEGIN);
			setState(177);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==WS) {
				{
				{
				setState(174);
				match(WS);
				}
				}
				setState(179);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(180);
			match(PREPROCESS_DEFINE);
			setState(182); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(181);
				match(WS);
				}
				}
				setState(184); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==WS );
			setState(186);
			match(ID);
			setState(193);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,20,_ctx) ) {
			case 1:
				{
				setState(188); 
				_errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						setState(187);
						match(WS);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					setState(190); 
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,19,_ctx);
				} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
				setState(192);
				ppChars();
				}
				break;
			}
			setState(198);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==WS) {
				{
				{
				setState(195);
				match(WS);
				}
				}
				setState(200);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(201);
			_la = _input.LA(1);
			if ( !(_la==EOF || _la==NEWLINE) ) {
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
	public static class PpDefineFuncContext extends ParserRuleContext {
		public TerminalNode PREPROCESS_BEGIN() { return getToken(PawnPreprocessorParser.PREPROCESS_BEGIN, 0); }
		public TerminalNode PREPROCESS_DEFINE() { return getToken(PawnPreprocessorParser.PREPROCESS_DEFINE, 0); }
		public PpdfIdContext ppdfId() {
			return getRuleContext(PpdfIdContext.class,0);
		}
		public PpdfCharsContext ppdfChars() {
			return getRuleContext(PpdfCharsContext.class,0);
		}
		public TerminalNode NEWLINE() { return getToken(PawnPreprocessorParser.NEWLINE, 0); }
		public TerminalNode EOF() { return getToken(PawnPreprocessorParser.EOF, 0); }
		public List<TerminalNode> WS() { return getTokens(PawnPreprocessorParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(PawnPreprocessorParser.WS, i);
		}
		public PpDefineFuncContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ppDefineFunc; }
	}

	public final PpDefineFuncContext ppDefineFunc() throws RecognitionException {
		PpDefineFuncContext _localctx = new PpDefineFuncContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_ppDefineFunc);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(203);
			match(PREPROCESS_BEGIN);
			setState(207);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==WS) {
				{
				{
				setState(204);
				match(WS);
				}
				}
				setState(209);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(210);
			match(PREPROCESS_DEFINE);
			setState(212); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(211);
				match(WS);
				}
				}
				setState(214); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==WS );
			setState(216);
			ppdfId();
			setState(220);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,24,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(217);
					match(WS);
					}
					} 
				}
				setState(222);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,24,_ctx);
			}
			setState(223);
			ppdfChars();
			setState(227);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==WS) {
				{
				{
				setState(224);
				match(WS);
				}
				}
				setState(229);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(230);
			_la = _input.LA(1);
			if ( !(_la==EOF || _la==NEWLINE) ) {
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
	public static class PpdfIdContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(PawnPreprocessorParser.ID, 0); }
		public TerminalNode PAREN_OPEN() { return getToken(PawnPreprocessorParser.PAREN_OPEN, 0); }
		public PpdfiArgumentsContext ppdfiArguments() {
			return getRuleContext(PpdfiArgumentsContext.class,0);
		}
		public TerminalNode PAREN_CLOSE() { return getToken(PawnPreprocessorParser.PAREN_CLOSE, 0); }
		public List<TerminalNode> WS() { return getTokens(PawnPreprocessorParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(PawnPreprocessorParser.WS, i);
		}
		public PpdfIdContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ppdfId; }
	}

	public final PpdfIdContext ppdfId() throws RecognitionException {
		PpdfIdContext _localctx = new PpdfIdContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_ppdfId);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(232);
			match(ID);
			setState(233);
			match(PAREN_OPEN);
			setState(237);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==WS) {
				{
				{
				setState(234);
				match(WS);
				}
				}
				setState(239);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(240);
			ppdfiArguments();
			setState(244);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==WS) {
				{
				{
				setState(241);
				match(WS);
				}
				}
				setState(246);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(247);
			match(PAREN_CLOSE);
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
	public static class PpdfiArgumentsContext extends ParserRuleContext {
		public List<PpdfiArgumentContext> ppdfiArgument() {
			return getRuleContexts(PpdfiArgumentContext.class);
		}
		public PpdfiArgumentContext ppdfiArgument(int i) {
			return getRuleContext(PpdfiArgumentContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(PawnPreprocessorParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(PawnPreprocessorParser.COMMA, i);
		}
		public List<TerminalNode> WS() { return getTokens(PawnPreprocessorParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(PawnPreprocessorParser.WS, i);
		}
		public PpdfiArgumentsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ppdfiArguments; }
	}

	public final PpdfiArgumentsContext ppdfiArguments() throws RecognitionException {
		PpdfiArgumentsContext _localctx = new PpdfiArgumentsContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_ppdfiArguments);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(249);
			ppdfiArgument();
			setState(266);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,30,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(253);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==WS) {
						{
						{
						setState(250);
						match(WS);
						}
						}
						setState(255);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					setState(256);
					match(COMMA);
					setState(260);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==WS) {
						{
						{
						setState(257);
						match(WS);
						}
						}
						setState(262);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					setState(263);
					ppdfiArgument();
					}
					} 
				}
				setState(268);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,30,_ctx);
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
	public static class PpdfiArgumentContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(PawnPreprocessorParser.ID, 0); }
		public PpdfiArgumentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ppdfiArgument; }
	}

	public final PpdfiArgumentContext ppdfiArgument() throws RecognitionException {
		PpdfiArgumentContext _localctx = new PpdfiArgumentContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_ppdfiArgument);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(269);
			match(ID);
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
	public static class PpdfCharsContext extends ParserRuleContext {
		public List<PpdfcIdContext> ppdfcId() {
			return getRuleContexts(PpdfcIdContext.class);
		}
		public PpdfcIdContext ppdfcId(int i) {
			return getRuleContext(PpdfcIdContext.class,i);
		}
		public List<PpdfcNotIdContext> ppdfcNotId() {
			return getRuleContexts(PpdfcNotIdContext.class);
		}
		public PpdfcNotIdContext ppdfcNotId(int i) {
			return getRuleContext(PpdfcNotIdContext.class,i);
		}
		public PpdfCharsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ppdfChars; }
	}

	public final PpdfCharsContext ppdfChars() throws RecognitionException {
		PpdfCharsContext _localctx = new PpdfCharsContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_ppdfChars);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(273); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					setState(273);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case ID:
						{
						setState(271);
						ppdfcId();
						}
						break;
					case STRING:
					case WS:
					case PREPROCESS_BEGIN:
					case DEFINED:
					case COMMA:
					case PAREN_OPEN:
					case PAREN_CLOSE:
					case CHAR:
						{
						setState(272);
						ppdfcNotId();
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
				setState(275); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,32,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
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
	public static class PpdfcIdContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(PawnPreprocessorParser.ID, 0); }
		public PpdfcIdContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ppdfcId; }
	}

	public final PpdfcIdContext ppdfcId() throws RecognitionException {
		PpdfcIdContext _localctx = new PpdfcIdContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_ppdfcId);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(277);
			match(ID);
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
	public static class PpdfcNotIdContext extends ParserRuleContext {
		public TerminalNode STRING() { return getToken(PawnPreprocessorParser.STRING, 0); }
		public TerminalNode WS() { return getToken(PawnPreprocessorParser.WS, 0); }
		public TerminalNode PREPROCESS_BEGIN() { return getToken(PawnPreprocessorParser.PREPROCESS_BEGIN, 0); }
		public TerminalNode DEFINED() { return getToken(PawnPreprocessorParser.DEFINED, 0); }
		public TerminalNode COMMA() { return getToken(PawnPreprocessorParser.COMMA, 0); }
		public TerminalNode PAREN_OPEN() { return getToken(PawnPreprocessorParser.PAREN_OPEN, 0); }
		public TerminalNode PAREN_CLOSE() { return getToken(PawnPreprocessorParser.PAREN_CLOSE, 0); }
		public TerminalNode CHAR() { return getToken(PawnPreprocessorParser.CHAR, 0); }
		public PpdfcNotIdContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ppdfcNotId; }
	}

	public final PpdfcNotIdContext ppdfcNotId() throws RecognitionException {
		PpdfcNotIdContext _localctx = new PpdfcNotIdContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_ppdfcNotId);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(279);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 31981744L) != 0)) ) {
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
	public static class PpIfStatementContext extends ParserRuleContext {
		public PpisIFContext ppisIF() {
			return getRuleContext(PpisIFContext.class,0);
		}
		public PpisIfDefContext ppisIfDef() {
			return getRuleContext(PpisIfDefContext.class,0);
		}
		public PpisIfNdefContext ppisIfNdef() {
			return getRuleContext(PpisIfNdefContext.class,0);
		}
		public PpIfStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ppIfStatement; }
	}

	public final PpIfStatementContext ppIfStatement() throws RecognitionException {
		PpIfStatementContext _localctx = new PpIfStatementContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_ppIfStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(284);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,33,_ctx) ) {
			case 1:
				{
				setState(281);
				ppisIF();
				}
				break;
			case 2:
				{
				setState(282);
				ppisIfDef();
				}
				break;
			case 3:
				{
				setState(283);
				ppisIfNdef();
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
	public static class PpisIFContext extends ParserRuleContext {
		public TerminalNode PREPROCESS_BEGIN() { return getToken(PawnPreprocessorParser.PREPROCESS_BEGIN, 0); }
		public TerminalNode PREPROCESS_IF() { return getToken(PawnPreprocessorParser.PREPROCESS_IF, 0); }
		public PpCharsContext ppChars() {
			return getRuleContext(PpCharsContext.class,0);
		}
		public TerminalNode NEWLINE() { return getToken(PawnPreprocessorParser.NEWLINE, 0); }
		public PpisStatementContext ppisStatement() {
			return getRuleContext(PpisStatementContext.class,0);
		}
		public PpisElifElseEndifContext ppisElifElseEndif() {
			return getRuleContext(PpisElifElseEndifContext.class,0);
		}
		public List<TerminalNode> WS() { return getTokens(PawnPreprocessorParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(PawnPreprocessorParser.WS, i);
		}
		public PpisIFContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ppisIF; }
	}

	public final PpisIFContext ppisIF() throws RecognitionException {
		PpisIFContext _localctx = new PpisIFContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_ppisIF);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(286);
			match(PREPROCESS_BEGIN);
			setState(290);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==WS) {
				{
				{
				setState(287);
				match(WS);
				}
				}
				setState(292);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(293);
			match(PREPROCESS_IF);
			setState(295); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(294);
					match(WS);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(297); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,35,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			setState(299);
			ppChars();
			setState(303);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==WS) {
				{
				{
				setState(300);
				match(WS);
				}
				}
				setState(305);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(306);
			match(NEWLINE);
			setState(307);
			ppisStatement();
			setState(308);
			ppisElifElseEndif();
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
	public static class PpisElifContext extends ParserRuleContext {
		public TerminalNode PREPROCESS_BEGIN() { return getToken(PawnPreprocessorParser.PREPROCESS_BEGIN, 0); }
		public TerminalNode PREPROCESS_ELIF() { return getToken(PawnPreprocessorParser.PREPROCESS_ELIF, 0); }
		public PpCharsContext ppChars() {
			return getRuleContext(PpCharsContext.class,0);
		}
		public TerminalNode NEWLINE() { return getToken(PawnPreprocessorParser.NEWLINE, 0); }
		public PpisStatementContext ppisStatement() {
			return getRuleContext(PpisStatementContext.class,0);
		}
		public PpisElifElseEndifContext ppisElifElseEndif() {
			return getRuleContext(PpisElifElseEndifContext.class,0);
		}
		public List<TerminalNode> WS() { return getTokens(PawnPreprocessorParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(PawnPreprocessorParser.WS, i);
		}
		public PpisElifContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ppisElif; }
	}

	public final PpisElifContext ppisElif() throws RecognitionException {
		PpisElifContext _localctx = new PpisElifContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_ppisElif);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(310);
			match(PREPROCESS_BEGIN);
			setState(314);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==WS) {
				{
				{
				setState(311);
				match(WS);
				}
				}
				setState(316);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(317);
			match(PREPROCESS_ELIF);
			setState(319); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(318);
					match(WS);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(321); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,38,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			setState(323);
			ppChars();
			setState(327);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==WS) {
				{
				{
				setState(324);
				match(WS);
				}
				}
				setState(329);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(330);
			match(NEWLINE);
			setState(331);
			ppisStatement();
			setState(332);
			ppisElifElseEndif();
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
	public static class PpisElseContext extends ParserRuleContext {
		public TerminalNode PREPROCESS_BEGIN() { return getToken(PawnPreprocessorParser.PREPROCESS_BEGIN, 0); }
		public TerminalNode PREPROCESS_ELSE() { return getToken(PawnPreprocessorParser.PREPROCESS_ELSE, 0); }
		public TerminalNode NEWLINE() { return getToken(PawnPreprocessorParser.NEWLINE, 0); }
		public PpisStatementContext ppisStatement() {
			return getRuleContext(PpisStatementContext.class,0);
		}
		public PpisEndifContext ppisEndif() {
			return getRuleContext(PpisEndifContext.class,0);
		}
		public List<TerminalNode> WS() { return getTokens(PawnPreprocessorParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(PawnPreprocessorParser.WS, i);
		}
		public PpisElseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ppisElse; }
	}

	public final PpisElseContext ppisElse() throws RecognitionException {
		PpisElseContext _localctx = new PpisElseContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_ppisElse);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(334);
			match(PREPROCESS_BEGIN);
			setState(338);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==WS) {
				{
				{
				setState(335);
				match(WS);
				}
				}
				setState(340);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(341);
			match(PREPROCESS_ELSE);
			setState(345);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==WS) {
				{
				{
				setState(342);
				match(WS);
				}
				}
				setState(347);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(348);
			match(NEWLINE);
			setState(349);
			ppisStatement();
			setState(350);
			ppisEndif();
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
	public static class PpisEndifContext extends ParserRuleContext {
		public TerminalNode PREPROCESS_BEGIN() { return getToken(PawnPreprocessorParser.PREPROCESS_BEGIN, 0); }
		public TerminalNode PREPROCESS_ENDIF() { return getToken(PawnPreprocessorParser.PREPROCESS_ENDIF, 0); }
		public TerminalNode NEWLINE() { return getToken(PawnPreprocessorParser.NEWLINE, 0); }
		public TerminalNode EOF() { return getToken(PawnPreprocessorParser.EOF, 0); }
		public List<TerminalNode> WS() { return getTokens(PawnPreprocessorParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(PawnPreprocessorParser.WS, i);
		}
		public PpisEndifContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ppisEndif; }
	}

	public final PpisEndifContext ppisEndif() throws RecognitionException {
		PpisEndifContext _localctx = new PpisEndifContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_ppisEndif);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(352);
			match(PREPROCESS_BEGIN);
			setState(356);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==WS) {
				{
				{
				setState(353);
				match(WS);
				}
				}
				setState(358);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(359);
			match(PREPROCESS_ENDIF);
			setState(363);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==WS) {
				{
				{
				setState(360);
				match(WS);
				}
				}
				setState(365);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(366);
			_la = _input.LA(1);
			if ( !(_la==EOF || _la==NEWLINE) ) {
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
	public static class PpisIfDefContext extends ParserRuleContext {
		public TerminalNode PREPROCESS_BEGIN() { return getToken(PawnPreprocessorParser.PREPROCESS_BEGIN, 0); }
		public TerminalNode PREPROCESS_IFDEF() { return getToken(PawnPreprocessorParser.PREPROCESS_IFDEF, 0); }
		public TerminalNode ID() { return getToken(PawnPreprocessorParser.ID, 0); }
		public TerminalNode NEWLINE() { return getToken(PawnPreprocessorParser.NEWLINE, 0); }
		public PpisStatementContext ppisStatement() {
			return getRuleContext(PpisStatementContext.class,0);
		}
		public PpisElseEndifContext ppisElseEndif() {
			return getRuleContext(PpisElseEndifContext.class,0);
		}
		public List<TerminalNode> WS() { return getTokens(PawnPreprocessorParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(PawnPreprocessorParser.WS, i);
		}
		public PpisIfDefContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ppisIfDef; }
	}

	public final PpisIfDefContext ppisIfDef() throws RecognitionException {
		PpisIfDefContext _localctx = new PpisIfDefContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_ppisIfDef);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(368);
			match(PREPROCESS_BEGIN);
			setState(372);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==WS) {
				{
				{
				setState(369);
				match(WS);
				}
				}
				setState(374);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(375);
			match(PREPROCESS_IFDEF);
			setState(377); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(376);
				match(WS);
				}
				}
				setState(379); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==WS );
			setState(381);
			match(ID);
			setState(385);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==WS) {
				{
				{
				setState(382);
				match(WS);
				}
				}
				setState(387);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(388);
			match(NEWLINE);
			setState(389);
			ppisStatement();
			setState(390);
			ppisElseEndif();
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
	public static class PpisIfNdefContext extends ParserRuleContext {
		public TerminalNode PREPROCESS_BEGIN() { return getToken(PawnPreprocessorParser.PREPROCESS_BEGIN, 0); }
		public TerminalNode PREPROCESS_IFNDEF() { return getToken(PawnPreprocessorParser.PREPROCESS_IFNDEF, 0); }
		public TerminalNode ID() { return getToken(PawnPreprocessorParser.ID, 0); }
		public TerminalNode NEWLINE() { return getToken(PawnPreprocessorParser.NEWLINE, 0); }
		public PpisStatementContext ppisStatement() {
			return getRuleContext(PpisStatementContext.class,0);
		}
		public PpisElseEndifContext ppisElseEndif() {
			return getRuleContext(PpisElseEndifContext.class,0);
		}
		public List<TerminalNode> WS() { return getTokens(PawnPreprocessorParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(PawnPreprocessorParser.WS, i);
		}
		public PpisIfNdefContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ppisIfNdef; }
	}

	public final PpisIfNdefContext ppisIfNdef() throws RecognitionException {
		PpisIfNdefContext _localctx = new PpisIfNdefContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_ppisIfNdef);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(392);
			match(PREPROCESS_BEGIN);
			setState(396);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==WS) {
				{
				{
				setState(393);
				match(WS);
				}
				}
				setState(398);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(399);
			match(PREPROCESS_IFNDEF);
			setState(401); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(400);
				match(WS);
				}
				}
				setState(403); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==WS );
			setState(405);
			match(ID);
			setState(409);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==WS) {
				{
				{
				setState(406);
				match(WS);
				}
				}
				setState(411);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(412);
			match(NEWLINE);
			setState(413);
			ppisStatement();
			setState(414);
			ppisElseEndif();
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
	public static class PpisStatementContext extends ParserRuleContext {
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public PpisStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ppisStatement; }
	}

	public final PpisStatementContext ppisStatement() throws RecognitionException {
		PpisStatementContext _localctx = new PpisStatementContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_ppisStatement);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(419);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,50,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(416);
					statement();
					}
					} 
				}
				setState(421);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,50,_ctx);
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
	public static class PpisElifElseEndifContext extends ParserRuleContext {
		public PpisElifContext ppisElif() {
			return getRuleContext(PpisElifContext.class,0);
		}
		public PpisElseEndifContext ppisElseEndif() {
			return getRuleContext(PpisElseEndifContext.class,0);
		}
		public PpisElifElseEndifContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ppisElifElseEndif; }
	}

	public final PpisElifElseEndifContext ppisElifElseEndif() throws RecognitionException {
		PpisElifElseEndifContext _localctx = new PpisElifElseEndifContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_ppisElifElseEndif);
		try {
			setState(424);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,51,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(422);
				ppisElif();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(423);
				ppisElseEndif();
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
	public static class PpisElseEndifContext extends ParserRuleContext {
		public PpisElseContext ppisElse() {
			return getRuleContext(PpisElseContext.class,0);
		}
		public PpisEndifContext ppisEndif() {
			return getRuleContext(PpisEndifContext.class,0);
		}
		public PpisElseEndifContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ppisElseEndif; }
	}

	public final PpisElseEndifContext ppisElseEndif() throws RecognitionException {
		PpisElseEndifContext _localctx = new PpisElseEndifContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_ppisElseEndif);
		try {
			setState(428);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,52,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(426);
				ppisElse();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(427);
				ppisEndif();
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

	public static final String _serializedATN =
		"\u0004\u0001\u0018\u01af\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001"+
		"\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004"+
		"\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007"+
		"\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b"+
		"\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007"+
		"\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007"+
		"\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002\u0015\u0007"+
		"\u0015\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017\u0002\u0018\u0007"+
		"\u0018\u0002\u0019\u0007\u0019\u0001\u0000\u0005\u00006\b\u0000\n\u0000"+
		"\f\u00009\t\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0003\u0001A\b\u0001\u0003\u0001C\b\u0001\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0003\u0002L\b\u0002\u0001\u0003\u0004\u0003O\b\u0003\u000b\u0003\f\u0003"+
		"P\u0001\u0004\u0001\u0004\u0005\u0004U\b\u0004\n\u0004\f\u0004X\t\u0004"+
		"\u0001\u0004\u0001\u0004\u0005\u0004\\\b\u0004\n\u0004\f\u0004_\t\u0004"+
		"\u0001\u0004\u0001\u0004\u0005\u0004c\b\u0004\n\u0004\f\u0004f\t\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0005\u0005l\b\u0005"+
		"\n\u0005\f\u0005o\t\u0005\u0001\u0005\u0001\u0005\u0005\u0005s\b\u0005"+
		"\n\u0005\f\u0005v\t\u0005\u0001\u0005\u0001\u0005\u0005\u0005z\b\u0005"+
		"\n\u0005\f\u0005}\t\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006"+
		"\u0005\u0006\u0083\b\u0006\n\u0006\f\u0006\u0086\t\u0006\u0001\u0006\u0001"+
		"\u0006\u0005\u0006\u008a\b\u0006\n\u0006\f\u0006\u008d\t\u0006\u0001\u0006"+
		"\u0001\u0006\u0005\u0006\u0091\b\u0006\n\u0006\f\u0006\u0094\t\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0005\u0007\u009a\b\u0007\n"+
		"\u0007\f\u0007\u009d\t\u0007\u0001\u0007\u0001\u0007\u0004\u0007\u00a1"+
		"\b\u0007\u000b\u0007\f\u0007\u00a2\u0001\u0007\u0001\u0007\u0005\u0007"+
		"\u00a7\b\u0007\n\u0007\f\u0007\u00aa\t\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\b\u0001\b\u0005\b\u00b0\b\b\n\b\f\b\u00b3\t\b\u0001\b\u0001\b\u0004\b"+
		"\u00b7\b\b\u000b\b\f\b\u00b8\u0001\b\u0001\b\u0004\b\u00bd\b\b\u000b\b"+
		"\f\b\u00be\u0001\b\u0003\b\u00c2\b\b\u0001\b\u0005\b\u00c5\b\b\n\b\f\b"+
		"\u00c8\t\b\u0001\b\u0001\b\u0001\t\u0001\t\u0005\t\u00ce\b\t\n\t\f\t\u00d1"+
		"\t\t\u0001\t\u0001\t\u0004\t\u00d5\b\t\u000b\t\f\t\u00d6\u0001\t\u0001"+
		"\t\u0005\t\u00db\b\t\n\t\f\t\u00de\t\t\u0001\t\u0001\t\u0005\t\u00e2\b"+
		"\t\n\t\f\t\u00e5\t\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0005\n\u00ec"+
		"\b\n\n\n\f\n\u00ef\t\n\u0001\n\u0001\n\u0005\n\u00f3\b\n\n\n\f\n\u00f6"+
		"\t\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0005\u000b\u00fc\b\u000b"+
		"\n\u000b\f\u000b\u00ff\t\u000b\u0001\u000b\u0001\u000b\u0005\u000b\u0103"+
		"\b\u000b\n\u000b\f\u000b\u0106\t\u000b\u0001\u000b\u0005\u000b\u0109\b"+
		"\u000b\n\u000b\f\u000b\u010c\t\u000b\u0001\f\u0001\f\u0001\r\u0001\r\u0004"+
		"\r\u0112\b\r\u000b\r\f\r\u0113\u0001\u000e\u0001\u000e\u0001\u000f\u0001"+
		"\u000f\u0001\u0010\u0001\u0010\u0001\u0010\u0003\u0010\u011d\b\u0010\u0001"+
		"\u0011\u0001\u0011\u0005\u0011\u0121\b\u0011\n\u0011\f\u0011\u0124\t\u0011"+
		"\u0001\u0011\u0001\u0011\u0004\u0011\u0128\b\u0011\u000b\u0011\f\u0011"+
		"\u0129\u0001\u0011\u0001\u0011\u0005\u0011\u012e\b\u0011\n\u0011\f\u0011"+
		"\u0131\t\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0012"+
		"\u0001\u0012\u0005\u0012\u0139\b\u0012\n\u0012\f\u0012\u013c\t\u0012\u0001"+
		"\u0012\u0001\u0012\u0004\u0012\u0140\b\u0012\u000b\u0012\f\u0012\u0141"+
		"\u0001\u0012\u0001\u0012\u0005\u0012\u0146\b\u0012\n\u0012\f\u0012\u0149"+
		"\t\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0013\u0001"+
		"\u0013\u0005\u0013\u0151\b\u0013\n\u0013\f\u0013\u0154\t\u0013\u0001\u0013"+
		"\u0001\u0013\u0005\u0013\u0158\b\u0013\n\u0013\f\u0013\u015b\t\u0013\u0001"+
		"\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0014\u0001\u0014\u0005"+
		"\u0014\u0163\b\u0014\n\u0014\f\u0014\u0166\t\u0014\u0001\u0014\u0001\u0014"+
		"\u0005\u0014\u016a\b\u0014\n\u0014\f\u0014\u016d\t\u0014\u0001\u0014\u0001"+
		"\u0014\u0001\u0015\u0001\u0015\u0005\u0015\u0173\b\u0015\n\u0015\f\u0015"+
		"\u0176\t\u0015\u0001\u0015\u0001\u0015\u0004\u0015\u017a\b\u0015\u000b"+
		"\u0015\f\u0015\u017b\u0001\u0015\u0001\u0015\u0005\u0015\u0180\b\u0015"+
		"\n\u0015\f\u0015\u0183\t\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0001"+
		"\u0015\u0001\u0016\u0001\u0016\u0005\u0016\u018b\b\u0016\n\u0016\f\u0016"+
		"\u018e\t\u0016\u0001\u0016\u0001\u0016\u0004\u0016\u0192\b\u0016\u000b"+
		"\u0016\f\u0016\u0193\u0001\u0016\u0001\u0016\u0005\u0016\u0198\b\u0016"+
		"\n\u0016\f\u0016\u019b\t\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0001"+
		"\u0016\u0001\u0017\u0005\u0017\u01a2\b\u0017\n\u0017\f\u0017\u01a5\t\u0017"+
		"\u0001\u0018\u0001\u0018\u0003\u0018\u01a9\b\u0018\u0001\u0019\u0001\u0019"+
		"\u0003\u0019\u01ad\b\u0019\u0001\u0019\u0000\u0000\u001a\u0000\u0002\u0004"+
		"\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \""+
		"$&(*,.02\u0000\u0003\u0003\u0000\u0004\u0005\u0007\u0007\u0013\u0018\u0001"+
		"\u0001\u0006\u0006\u0004\u0000\u0004\u0005\u0007\u0007\u0013\u0013\u0015"+
		"\u0018\u01d0\u00007\u0001\u0000\u0000\u0000\u0002B\u0001\u0000\u0000\u0000"+
		"\u0004K\u0001\u0000\u0000\u0000\u0006N\u0001\u0000\u0000\u0000\bR\u0001"+
		"\u0000\u0000\u0000\ni\u0001\u0000\u0000\u0000\f\u0080\u0001\u0000\u0000"+
		"\u0000\u000e\u0097\u0001\u0000\u0000\u0000\u0010\u00ad\u0001\u0000\u0000"+
		"\u0000\u0012\u00cb\u0001\u0000\u0000\u0000\u0014\u00e8\u0001\u0000\u0000"+
		"\u0000\u0016\u00f9\u0001\u0000\u0000\u0000\u0018\u010d\u0001\u0000\u0000"+
		"\u0000\u001a\u0111\u0001\u0000\u0000\u0000\u001c\u0115\u0001\u0000\u0000"+
		"\u0000\u001e\u0117\u0001\u0000\u0000\u0000 \u011c\u0001\u0000\u0000\u0000"+
		"\"\u011e\u0001\u0000\u0000\u0000$\u0136\u0001\u0000\u0000\u0000&\u014e"+
		"\u0001\u0000\u0000\u0000(\u0160\u0001\u0000\u0000\u0000*\u0170\u0001\u0000"+
		"\u0000\u0000,\u0188\u0001\u0000\u0000\u0000.\u01a3\u0001\u0000\u0000\u0000"+
		"0\u01a8\u0001\u0000\u0000\u00002\u01ac\u0001\u0000\u0000\u000046\u0003"+
		"\u0002\u0001\u000054\u0001\u0000\u0000\u000069\u0001\u0000\u0000\u0000"+
		"75\u0001\u0000\u0000\u000078\u0001\u0000\u0000\u00008:\u0001\u0000\u0000"+
		"\u000097\u0001\u0000\u0000\u0000:;\u0005\u0000\u0000\u0001;\u0001\u0001"+
		"\u0000\u0000\u0000<C\u0003\u0004\u0002\u0000=C\u0005\u0004\u0000\u0000"+
		">A\u0003\u0006\u0003\u0000?A\u0005\u0006\u0000\u0000@>\u0001\u0000\u0000"+
		"\u0000@?\u0001\u0000\u0000\u0000AC\u0001\u0000\u0000\u0000B<\u0001\u0000"+
		"\u0000\u0000B=\u0001\u0000\u0000\u0000B@\u0001\u0000\u0000\u0000C\u0003"+
		"\u0001\u0000\u0000\u0000DL\u0003\b\u0004\u0000EL\u0003\u0012\t\u0000F"+
		"L\u0003\u0010\b\u0000GL\u0003\u000e\u0007\u0000HL\u0003\n\u0005\u0000"+
		"IL\u0003\f\u0006\u0000JL\u0003 \u0010\u0000KD\u0001\u0000\u0000\u0000"+
		"KE\u0001\u0000\u0000\u0000KF\u0001\u0000\u0000\u0000KG\u0001\u0000\u0000"+
		"\u0000KH\u0001\u0000\u0000\u0000KI\u0001\u0000\u0000\u0000KJ\u0001\u0000"+
		"\u0000\u0000L\u0005\u0001\u0000\u0000\u0000MO\u0007\u0000\u0000\u0000"+
		"NM\u0001\u0000\u0000\u0000OP\u0001\u0000\u0000\u0000PN\u0001\u0000\u0000"+
		"\u0000PQ\u0001\u0000\u0000\u0000Q\u0007\u0001\u0000\u0000\u0000RV\u0005"+
		"\u0007\u0000\u0000SU\u0005\u0005\u0000\u0000TS\u0001\u0000\u0000\u0000"+
		"UX\u0001\u0000\u0000\u0000VT\u0001\u0000\u0000\u0000VW\u0001\u0000\u0000"+
		"\u0000WY\u0001\u0000\u0000\u0000XV\u0001\u0000\u0000\u0000Y]\u0005\b\u0000"+
		"\u0000Z\\\u0005\u0005\u0000\u0000[Z\u0001\u0000\u0000\u0000\\_\u0001\u0000"+
		"\u0000\u0000][\u0001\u0000\u0000\u0000]^\u0001\u0000\u0000\u0000^`\u0001"+
		"\u0000\u0000\u0000_]\u0001\u0000\u0000\u0000`d\u0003\u0006\u0003\u0000"+
		"ac\u0005\u0005\u0000\u0000ba\u0001\u0000\u0000\u0000cf\u0001\u0000\u0000"+
		"\u0000db\u0001\u0000\u0000\u0000de\u0001\u0000\u0000\u0000eg\u0001\u0000"+
		"\u0000\u0000fd\u0001\u0000\u0000\u0000gh\u0007\u0001\u0000\u0000h\t\u0001"+
		"\u0000\u0000\u0000im\u0005\u0007\u0000\u0000jl\u0005\u0005\u0000\u0000"+
		"kj\u0001\u0000\u0000\u0000lo\u0001\u0000\u0000\u0000mk\u0001\u0000\u0000"+
		"\u0000mn\u0001\u0000\u0000\u0000np\u0001\u0000\u0000\u0000om\u0001\u0000"+
		"\u0000\u0000pt\u0005\u0011\u0000\u0000qs\u0005\u0005\u0000\u0000rq\u0001"+
		"\u0000\u0000\u0000sv\u0001\u0000\u0000\u0000tr\u0001\u0000\u0000\u0000"+
		"tu\u0001\u0000\u0000\u0000uw\u0001\u0000\u0000\u0000vt\u0001\u0000\u0000"+
		"\u0000w{\u0003\u0006\u0003\u0000xz\u0005\u0005\u0000\u0000yx\u0001\u0000"+
		"\u0000\u0000z}\u0001\u0000\u0000\u0000{y\u0001\u0000\u0000\u0000{|\u0001"+
		"\u0000\u0000\u0000|~\u0001\u0000\u0000\u0000}{\u0001\u0000\u0000\u0000"+
		"~\u007f\u0007\u0001\u0000\u0000\u007f\u000b\u0001\u0000\u0000\u0000\u0080"+
		"\u0084\u0005\u0007\u0000\u0000\u0081\u0083\u0005\u0005\u0000\u0000\u0082"+
		"\u0081\u0001\u0000\u0000\u0000\u0083\u0086\u0001\u0000\u0000\u0000\u0084"+
		"\u0082\u0001\u0000\u0000\u0000\u0084\u0085\u0001\u0000\u0000\u0000\u0085"+
		"\u0087\u0001\u0000\u0000\u0000\u0086\u0084\u0001\u0000\u0000\u0000\u0087"+
		"\u008b\u0005\u0012\u0000\u0000\u0088\u008a\u0005\u0005\u0000\u0000\u0089"+
		"\u0088\u0001\u0000\u0000\u0000\u008a\u008d\u0001\u0000\u0000\u0000\u008b"+
		"\u0089\u0001\u0000\u0000\u0000\u008b\u008c\u0001\u0000\u0000\u0000\u008c"+
		"\u008e\u0001\u0000\u0000\u0000\u008d\u008b\u0001\u0000\u0000\u0000\u008e"+
		"\u0092\u0003\u0006\u0003\u0000\u008f\u0091\u0005\u0005\u0000\u0000\u0090"+
		"\u008f\u0001\u0000\u0000\u0000\u0091\u0094\u0001\u0000\u0000\u0000\u0092"+
		"\u0090\u0001\u0000\u0000\u0000\u0092\u0093\u0001\u0000\u0000\u0000\u0093"+
		"\u0095\u0001\u0000\u0000\u0000\u0094\u0092\u0001\u0000\u0000\u0000\u0095"+
		"\u0096\u0007\u0001\u0000\u0000\u0096\r\u0001\u0000\u0000\u0000\u0097\u009b"+
		"\u0005\u0007\u0000\u0000\u0098\u009a\u0005\u0005\u0000\u0000\u0099\u0098"+
		"\u0001\u0000\u0000\u0000\u009a\u009d\u0001\u0000\u0000\u0000\u009b\u0099"+
		"\u0001\u0000\u0000\u0000\u009b\u009c\u0001\u0000\u0000\u0000\u009c\u009e"+
		"\u0001\u0000\u0000\u0000\u009d\u009b\u0001\u0000\u0000\u0000\u009e\u00a0"+
		"\u0005\n\u0000\u0000\u009f\u00a1\u0005\u0005\u0000\u0000\u00a0\u009f\u0001"+
		"\u0000\u0000\u0000\u00a1\u00a2\u0001\u0000\u0000\u0000\u00a2\u00a0\u0001"+
		"\u0000\u0000\u0000\u00a2\u00a3\u0001\u0000\u0000\u0000\u00a3\u00a4\u0001"+
		"\u0000\u0000\u0000\u00a4\u00a8\u0005\u0014\u0000\u0000\u00a5\u00a7\u0005"+
		"\u0005\u0000\u0000\u00a6\u00a5\u0001\u0000\u0000\u0000\u00a7\u00aa\u0001"+
		"\u0000\u0000\u0000\u00a8\u00a6\u0001\u0000\u0000\u0000\u00a8\u00a9\u0001"+
		"\u0000\u0000\u0000\u00a9\u00ab\u0001\u0000\u0000\u0000\u00aa\u00a8\u0001"+
		"\u0000\u0000\u0000\u00ab\u00ac\u0007\u0001\u0000\u0000\u00ac\u000f\u0001"+
		"\u0000\u0000\u0000\u00ad\u00b1\u0005\u0007\u0000\u0000\u00ae\u00b0\u0005"+
		"\u0005\u0000\u0000\u00af\u00ae\u0001\u0000\u0000\u0000\u00b0\u00b3\u0001"+
		"\u0000\u0000\u0000\u00b1\u00af\u0001\u0000\u0000\u0000\u00b1\u00b2\u0001"+
		"\u0000\u0000\u0000\u00b2\u00b4\u0001\u0000\u0000\u0000\u00b3\u00b1\u0001"+
		"\u0000\u0000\u0000\u00b4\u00b6\u0005\t\u0000\u0000\u00b5\u00b7\u0005\u0005"+
		"\u0000\u0000\u00b6\u00b5\u0001\u0000\u0000\u0000\u00b7\u00b8\u0001\u0000"+
		"\u0000\u0000\u00b8\u00b6\u0001\u0000\u0000\u0000\u00b8\u00b9\u0001\u0000"+
		"\u0000\u0000\u00b9\u00ba\u0001\u0000\u0000\u0000\u00ba\u00c1\u0005\u0014"+
		"\u0000\u0000\u00bb\u00bd\u0005\u0005\u0000\u0000\u00bc\u00bb\u0001\u0000"+
		"\u0000\u0000\u00bd\u00be\u0001\u0000\u0000\u0000\u00be\u00bc\u0001\u0000"+
		"\u0000\u0000\u00be\u00bf\u0001\u0000\u0000\u0000\u00bf\u00c0\u0001\u0000"+
		"\u0000\u0000\u00c0\u00c2\u0003\u0006\u0003\u0000\u00c1\u00bc\u0001\u0000"+
		"\u0000\u0000\u00c1\u00c2\u0001\u0000\u0000\u0000\u00c2\u00c6\u0001\u0000"+
		"\u0000\u0000\u00c3\u00c5\u0005\u0005\u0000\u0000\u00c4\u00c3\u0001\u0000"+
		"\u0000\u0000\u00c5\u00c8\u0001\u0000\u0000\u0000\u00c6\u00c4\u0001\u0000"+
		"\u0000\u0000\u00c6\u00c7\u0001\u0000\u0000\u0000\u00c7\u00c9\u0001\u0000"+
		"\u0000\u0000\u00c8\u00c6\u0001\u0000\u0000\u0000\u00c9\u00ca\u0007\u0001"+
		"\u0000\u0000\u00ca\u0011\u0001\u0000\u0000\u0000\u00cb\u00cf\u0005\u0007"+
		"\u0000\u0000\u00cc\u00ce\u0005\u0005\u0000\u0000\u00cd\u00cc\u0001\u0000"+
		"\u0000\u0000\u00ce\u00d1\u0001\u0000\u0000\u0000\u00cf\u00cd\u0001\u0000"+
		"\u0000\u0000\u00cf\u00d0\u0001\u0000\u0000\u0000\u00d0\u00d2\u0001\u0000"+
		"\u0000\u0000\u00d1\u00cf\u0001\u0000\u0000\u0000\u00d2\u00d4\u0005\t\u0000"+
		"\u0000\u00d3\u00d5\u0005\u0005\u0000\u0000\u00d4\u00d3\u0001\u0000\u0000"+
		"\u0000\u00d5\u00d6\u0001\u0000\u0000\u0000\u00d6\u00d4\u0001\u0000\u0000"+
		"\u0000\u00d6\u00d7\u0001\u0000\u0000\u0000\u00d7\u00d8\u0001\u0000\u0000"+
		"\u0000\u00d8\u00dc\u0003\u0014\n\u0000\u00d9\u00db\u0005\u0005\u0000\u0000"+
		"\u00da\u00d9\u0001\u0000\u0000\u0000\u00db\u00de\u0001\u0000\u0000\u0000"+
		"\u00dc\u00da\u0001\u0000\u0000\u0000\u00dc\u00dd\u0001\u0000\u0000\u0000"+
		"\u00dd\u00df\u0001\u0000\u0000\u0000\u00de\u00dc\u0001\u0000\u0000\u0000"+
		"\u00df\u00e3\u0003\u001a\r\u0000\u00e0\u00e2\u0005\u0005\u0000\u0000\u00e1"+
		"\u00e0\u0001\u0000\u0000\u0000\u00e2\u00e5\u0001\u0000\u0000\u0000\u00e3"+
		"\u00e1\u0001\u0000\u0000\u0000\u00e3\u00e4\u0001\u0000\u0000\u0000\u00e4"+
		"\u00e6\u0001\u0000\u0000\u0000\u00e5\u00e3\u0001\u0000\u0000\u0000\u00e6"+
		"\u00e7\u0007\u0001\u0000\u0000\u00e7\u0013\u0001\u0000\u0000\u0000\u00e8"+
		"\u00e9\u0005\u0014\u0000\u0000\u00e9\u00ed\u0005\u0016\u0000\u0000\u00ea"+
		"\u00ec\u0005\u0005\u0000\u0000\u00eb\u00ea\u0001\u0000\u0000\u0000\u00ec"+
		"\u00ef\u0001\u0000\u0000\u0000\u00ed\u00eb\u0001\u0000\u0000\u0000\u00ed"+
		"\u00ee\u0001\u0000\u0000\u0000\u00ee\u00f0\u0001\u0000\u0000\u0000\u00ef"+
		"\u00ed\u0001\u0000\u0000\u0000\u00f0\u00f4\u0003\u0016\u000b\u0000\u00f1"+
		"\u00f3\u0005\u0005\u0000\u0000\u00f2\u00f1\u0001\u0000\u0000\u0000\u00f3"+
		"\u00f6\u0001\u0000\u0000\u0000\u00f4\u00f2\u0001\u0000\u0000\u0000\u00f4"+
		"\u00f5\u0001\u0000\u0000\u0000\u00f5\u00f7\u0001\u0000\u0000\u0000\u00f6"+
		"\u00f4\u0001\u0000\u0000\u0000\u00f7\u00f8\u0005\u0017\u0000\u0000\u00f8"+
		"\u0015\u0001\u0000\u0000\u0000\u00f9\u010a\u0003\u0018\f\u0000\u00fa\u00fc"+
		"\u0005\u0005\u0000\u0000\u00fb\u00fa\u0001\u0000\u0000\u0000\u00fc\u00ff"+
		"\u0001\u0000\u0000\u0000\u00fd\u00fb\u0001\u0000\u0000\u0000\u00fd\u00fe"+
		"\u0001\u0000\u0000\u0000\u00fe\u0100\u0001\u0000\u0000\u0000\u00ff\u00fd"+
		"\u0001\u0000\u0000\u0000\u0100\u0104\u0005\u0015\u0000\u0000\u0101\u0103"+
		"\u0005\u0005\u0000\u0000\u0102\u0101\u0001\u0000\u0000\u0000\u0103\u0106"+
		"\u0001\u0000\u0000\u0000\u0104\u0102\u0001\u0000\u0000\u0000\u0104\u0105"+
		"\u0001\u0000\u0000\u0000\u0105\u0107\u0001\u0000\u0000\u0000\u0106\u0104"+
		"\u0001\u0000\u0000\u0000\u0107\u0109\u0003\u0018\f\u0000\u0108\u00fd\u0001"+
		"\u0000\u0000\u0000\u0109\u010c\u0001\u0000\u0000\u0000\u010a\u0108\u0001"+
		"\u0000\u0000\u0000\u010a\u010b\u0001\u0000\u0000\u0000\u010b\u0017\u0001"+
		"\u0000\u0000\u0000\u010c\u010a\u0001\u0000\u0000\u0000\u010d\u010e\u0005"+
		"\u0014\u0000\u0000\u010e\u0019\u0001\u0000\u0000\u0000\u010f\u0112\u0003"+
		"\u001c\u000e\u0000\u0110\u0112\u0003\u001e\u000f\u0000\u0111\u010f\u0001"+
		"\u0000\u0000\u0000\u0111\u0110\u0001\u0000\u0000\u0000\u0112\u0113\u0001"+
		"\u0000\u0000\u0000\u0113\u0111\u0001\u0000\u0000\u0000\u0113\u0114\u0001"+
		"\u0000\u0000\u0000\u0114\u001b\u0001\u0000\u0000\u0000\u0115\u0116\u0005"+
		"\u0014\u0000\u0000\u0116\u001d\u0001\u0000\u0000\u0000\u0117\u0118\u0007"+
		"\u0002\u0000\u0000\u0118\u001f\u0001\u0000\u0000\u0000\u0119\u011d\u0003"+
		"\"\u0011\u0000\u011a\u011d\u0003*\u0015\u0000\u011b\u011d\u0003,\u0016"+
		"\u0000\u011c\u0119\u0001\u0000\u0000\u0000\u011c\u011a\u0001\u0000\u0000"+
		"\u0000\u011c\u011b\u0001\u0000\u0000\u0000\u011d!\u0001\u0000\u0000\u0000"+
		"\u011e\u0122\u0005\u0007\u0000\u0000\u011f\u0121\u0005\u0005\u0000\u0000"+
		"\u0120\u011f\u0001\u0000\u0000\u0000\u0121\u0124\u0001\u0000\u0000\u0000"+
		"\u0122\u0120\u0001\u0000\u0000\u0000\u0122\u0123\u0001\u0000\u0000\u0000"+
		"\u0123\u0125\u0001\u0000\u0000\u0000\u0124\u0122\u0001\u0000\u0000\u0000"+
		"\u0125\u0127\u0005\r\u0000\u0000\u0126\u0128\u0005\u0005\u0000\u0000\u0127"+
		"\u0126\u0001\u0000\u0000\u0000\u0128\u0129\u0001\u0000\u0000\u0000\u0129"+
		"\u0127\u0001\u0000\u0000\u0000\u0129\u012a\u0001\u0000\u0000\u0000\u012a"+
		"\u012b\u0001\u0000\u0000\u0000\u012b\u012f\u0003\u0006\u0003\u0000\u012c"+
		"\u012e\u0005\u0005\u0000\u0000\u012d\u012c\u0001\u0000\u0000\u0000\u012e"+
		"\u0131\u0001\u0000\u0000\u0000\u012f\u012d\u0001\u0000\u0000\u0000\u012f"+
		"\u0130\u0001\u0000\u0000\u0000\u0130\u0132\u0001\u0000\u0000\u0000\u0131"+
		"\u012f\u0001\u0000\u0000\u0000\u0132\u0133\u0005\u0006\u0000\u0000\u0133"+
		"\u0134\u0003.\u0017\u0000\u0134\u0135\u00030\u0018\u0000\u0135#\u0001"+
		"\u0000\u0000\u0000\u0136\u013a\u0005\u0007\u0000\u0000\u0137\u0139\u0005"+
		"\u0005\u0000\u0000\u0138\u0137\u0001\u0000\u0000\u0000\u0139\u013c\u0001"+
		"\u0000\u0000\u0000\u013a\u0138\u0001\u0000\u0000\u0000\u013a\u013b\u0001"+
		"\u0000\u0000\u0000\u013b\u013d\u0001\u0000\u0000\u0000\u013c\u013a\u0001"+
		"\u0000\u0000\u0000\u013d\u013f\u0005\u000f\u0000\u0000\u013e\u0140\u0005"+
		"\u0005\u0000\u0000\u013f\u013e\u0001\u0000\u0000\u0000\u0140\u0141\u0001"+
		"\u0000\u0000\u0000\u0141\u013f\u0001\u0000\u0000\u0000\u0141\u0142\u0001"+
		"\u0000\u0000\u0000\u0142\u0143\u0001\u0000\u0000\u0000\u0143\u0147\u0003"+
		"\u0006\u0003\u0000\u0144\u0146\u0005\u0005\u0000\u0000\u0145\u0144\u0001"+
		"\u0000\u0000\u0000\u0146\u0149\u0001\u0000\u0000\u0000\u0147\u0145\u0001"+
		"\u0000\u0000\u0000\u0147\u0148\u0001\u0000\u0000\u0000\u0148\u014a\u0001"+
		"\u0000\u0000\u0000\u0149\u0147\u0001\u0000\u0000\u0000\u014a\u014b\u0005"+
		"\u0006\u0000\u0000\u014b\u014c\u0003.\u0017\u0000\u014c\u014d\u00030\u0018"+
		"\u0000\u014d%\u0001\u0000\u0000\u0000\u014e\u0152\u0005\u0007\u0000\u0000"+
		"\u014f\u0151\u0005\u0005\u0000\u0000\u0150\u014f\u0001\u0000\u0000\u0000"+
		"\u0151\u0154\u0001\u0000\u0000\u0000\u0152\u0150\u0001\u0000\u0000\u0000"+
		"\u0152\u0153\u0001\u0000\u0000\u0000\u0153\u0155\u0001\u0000\u0000\u0000"+
		"\u0154\u0152\u0001\u0000\u0000\u0000\u0155\u0159\u0005\u000e\u0000\u0000"+
		"\u0156\u0158\u0005\u0005\u0000\u0000\u0157\u0156\u0001\u0000\u0000\u0000"+
		"\u0158\u015b\u0001\u0000\u0000\u0000\u0159\u0157\u0001\u0000\u0000\u0000"+
		"\u0159\u015a\u0001\u0000\u0000\u0000\u015a\u015c\u0001\u0000\u0000\u0000"+
		"\u015b\u0159\u0001\u0000\u0000\u0000\u015c\u015d\u0005\u0006\u0000\u0000"+
		"\u015d\u015e\u0003.\u0017\u0000\u015e\u015f\u0003(\u0014\u0000\u015f\'"+
		"\u0001\u0000\u0000\u0000\u0160\u0164\u0005\u0007\u0000\u0000\u0161\u0163"+
		"\u0005\u0005\u0000\u0000\u0162\u0161\u0001\u0000\u0000\u0000\u0163\u0166"+
		"\u0001\u0000\u0000\u0000\u0164\u0162\u0001\u0000\u0000\u0000\u0164\u0165"+
		"\u0001\u0000\u0000\u0000\u0165\u0167\u0001\u0000\u0000\u0000\u0166\u0164"+
		"\u0001\u0000\u0000\u0000\u0167\u016b\u0005\u0010\u0000\u0000\u0168\u016a"+
		"\u0005\u0005\u0000\u0000\u0169\u0168\u0001\u0000\u0000\u0000\u016a\u016d"+
		"\u0001\u0000\u0000\u0000\u016b\u0169\u0001\u0000\u0000\u0000\u016b\u016c"+
		"\u0001\u0000\u0000\u0000\u016c\u016e\u0001\u0000\u0000\u0000\u016d\u016b"+
		"\u0001\u0000\u0000\u0000\u016e\u016f\u0007\u0001\u0000\u0000\u016f)\u0001"+
		"\u0000\u0000\u0000\u0170\u0174\u0005\u0007\u0000\u0000\u0171\u0173\u0005"+
		"\u0005\u0000\u0000\u0172\u0171\u0001\u0000\u0000\u0000\u0173\u0176\u0001"+
		"\u0000\u0000\u0000\u0174\u0172\u0001\u0000\u0000\u0000\u0174\u0175\u0001"+
		"\u0000\u0000\u0000\u0175\u0177\u0001\u0000\u0000\u0000\u0176\u0174\u0001"+
		"\u0000\u0000\u0000\u0177\u0179\u0005\u000b\u0000\u0000\u0178\u017a\u0005"+
		"\u0005\u0000\u0000\u0179\u0178\u0001\u0000\u0000\u0000\u017a\u017b\u0001"+
		"\u0000\u0000\u0000\u017b\u0179\u0001\u0000\u0000\u0000\u017b\u017c\u0001"+
		"\u0000\u0000\u0000\u017c\u017d\u0001\u0000\u0000\u0000\u017d\u0181\u0005"+
		"\u0014\u0000\u0000\u017e\u0180\u0005\u0005\u0000\u0000\u017f\u017e\u0001"+
		"\u0000\u0000\u0000\u0180\u0183\u0001\u0000\u0000\u0000\u0181\u017f\u0001"+
		"\u0000\u0000\u0000\u0181\u0182\u0001\u0000\u0000\u0000\u0182\u0184\u0001"+
		"\u0000\u0000\u0000\u0183\u0181\u0001\u0000\u0000\u0000\u0184\u0185\u0005"+
		"\u0006\u0000\u0000\u0185\u0186\u0003.\u0017\u0000\u0186\u0187\u00032\u0019"+
		"\u0000\u0187+\u0001\u0000\u0000\u0000\u0188\u018c\u0005\u0007\u0000\u0000"+
		"\u0189\u018b\u0005\u0005\u0000\u0000\u018a\u0189\u0001\u0000\u0000\u0000"+
		"\u018b\u018e\u0001\u0000\u0000\u0000\u018c\u018a\u0001\u0000\u0000\u0000"+
		"\u018c\u018d\u0001\u0000\u0000\u0000\u018d\u018f\u0001\u0000\u0000\u0000"+
		"\u018e\u018c\u0001\u0000\u0000\u0000\u018f\u0191\u0005\f\u0000\u0000\u0190"+
		"\u0192\u0005\u0005\u0000\u0000\u0191\u0190\u0001\u0000\u0000\u0000\u0192"+
		"\u0193\u0001\u0000\u0000\u0000\u0193\u0191\u0001\u0000\u0000\u0000\u0193"+
		"\u0194\u0001\u0000\u0000\u0000\u0194\u0195\u0001\u0000\u0000\u0000\u0195"+
		"\u0199\u0005\u0014\u0000\u0000\u0196\u0198\u0005\u0005\u0000\u0000\u0197"+
		"\u0196\u0001\u0000\u0000\u0000\u0198\u019b\u0001\u0000\u0000\u0000\u0199"+
		"\u0197\u0001\u0000\u0000\u0000\u0199\u019a\u0001\u0000\u0000\u0000\u019a"+
		"\u019c\u0001\u0000\u0000\u0000\u019b\u0199\u0001\u0000\u0000\u0000\u019c"+
		"\u019d\u0005\u0006\u0000\u0000\u019d\u019e\u0003.\u0017\u0000\u019e\u019f"+
		"\u00032\u0019\u0000\u019f-\u0001\u0000\u0000\u0000\u01a0\u01a2\u0003\u0002"+
		"\u0001\u0000\u01a1\u01a0\u0001\u0000\u0000\u0000\u01a2\u01a5\u0001\u0000"+
		"\u0000\u0000\u01a3\u01a1\u0001\u0000\u0000\u0000\u01a3\u01a4\u0001\u0000"+
		"\u0000\u0000\u01a4/\u0001\u0000\u0000\u0000\u01a5\u01a3\u0001\u0000\u0000"+
		"\u0000\u01a6\u01a9\u0003$\u0012\u0000\u01a7\u01a9\u00032\u0019\u0000\u01a8"+
		"\u01a6\u0001\u0000\u0000\u0000\u01a8\u01a7\u0001\u0000\u0000\u0000\u01a9"+
		"1\u0001\u0000\u0000\u0000\u01aa\u01ad\u0003&\u0013\u0000\u01ab\u01ad\u0003"+
		"(\u0014\u0000\u01ac\u01aa\u0001\u0000\u0000\u0000\u01ac\u01ab\u0001\u0000"+
		"\u0000\u0000\u01ad3\u0001\u0000\u0000\u000057@BKPV]dmt{\u0084\u008b\u0092"+
		"\u009b\u00a2\u00a8\u00b1\u00b8\u00be\u00c1\u00c6\u00cf\u00d6\u00dc\u00e3"+
		"\u00ed\u00f4\u00fd\u0104\u010a\u0111\u0113\u011c\u0122\u0129\u012f\u013a"+
		"\u0141\u0147\u0152\u0159\u0164\u016b\u0174\u017b\u0181\u018c\u0193\u0199"+
		"\u01a3\u01a8\u01ac";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}