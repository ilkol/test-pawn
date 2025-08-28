// Generated from d:/test-pawn/src/antlr/generated/PawnPMacroResolve.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class PawnPMacroResolveParser extends Parser {
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
		RULE_statement = 0, RULE_sToken = 1, RULE_stDefined = 2, RULE_stdId = 3, 
		RULE_stdiId = 4, RULE_stVariable = 5, RULE_stFunctionCall = 6, RULE_stfcArguments = 7, 
		RULE_stfcaArgument = 8, RULE_stOther = 9;
	private static String[] makeRuleNames() {
		return new String[] {
			"statement", "sToken", "stDefined", "stdId", "stdiId", "stVariable", 
			"stFunctionCall", "stfcArguments", "stfcaArgument", "stOther"
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
	public String getGrammarFileName() { return "PawnPMacroResolve.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public PawnPMacroResolveParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StatementContext extends ParserRuleContext {
		public List<STokenContext> sToken() {
			return getRuleContexts(STokenContext.class);
		}
		public STokenContext sToken(int i) {
			return getRuleContext(STokenContext.class,i);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_statement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(21); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(20);
				sToken();
				}
				}
				setState(23); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & 33030192L) != 0) );
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
	public static class STokenContext extends ParserRuleContext {
		public StDefinedContext stDefined() {
			return getRuleContext(StDefinedContext.class,0);
		}
		public StFunctionCallContext stFunctionCall() {
			return getRuleContext(StFunctionCallContext.class,0);
		}
		public StVariableContext stVariable() {
			return getRuleContext(StVariableContext.class,0);
		}
		public StOtherContext stOther() {
			return getRuleContext(StOtherContext.class,0);
		}
		public STokenContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sToken; }
	}

	public final STokenContext sToken() throws RecognitionException {
		STokenContext _localctx = new STokenContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_sToken);
		try {
			setState(29);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(25);
				stDefined();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(26);
				stFunctionCall();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(27);
				stVariable();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(28);
				stOther();
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
	public static class StDefinedContext extends ParserRuleContext {
		public TerminalNode DEFINED() { return getToken(PawnPMacroResolveParser.DEFINED, 0); }
		public StdIdContext stdId() {
			return getRuleContext(StdIdContext.class,0);
		}
		public List<TerminalNode> WS() { return getTokens(PawnPMacroResolveParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(PawnPMacroResolveParser.WS, i);
		}
		public StDefinedContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stDefined; }
	}

	public final StDefinedContext stDefined() throws RecognitionException {
		StDefinedContext _localctx = new StDefinedContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_stDefined);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(31);
			match(DEFINED);
			setState(33); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(32);
				match(WS);
				}
				}
				setState(35); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==WS );
			setState(37);
			stdId();
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
	public static class StdIdContext extends ParserRuleContext {
		public TerminalNode PAREN_OPEN() { return getToken(PawnPMacroResolveParser.PAREN_OPEN, 0); }
		public StdIdContext stdId() {
			return getRuleContext(StdIdContext.class,0);
		}
		public TerminalNode PAREN_CLOSE() { return getToken(PawnPMacroResolveParser.PAREN_CLOSE, 0); }
		public List<TerminalNode> WS() { return getTokens(PawnPMacroResolveParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(PawnPMacroResolveParser.WS, i);
		}
		public StdiIdContext stdiId() {
			return getRuleContext(StdiIdContext.class,0);
		}
		public StdIdContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stdId; }
	}

	public final StdIdContext stdId() throws RecognitionException {
		StdIdContext _localctx = new StdIdContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_stdId);
		int _la;
		try {
			setState(56);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case PAREN_OPEN:
				enterOuterAlt(_localctx, 1);
				{
				setState(39);
				match(PAREN_OPEN);
				setState(43);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==WS) {
					{
					{
					setState(40);
					match(WS);
					}
					}
					setState(45);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(46);
				stdId();
				setState(50);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==WS) {
					{
					{
					setState(47);
					match(WS);
					}
					}
					setState(52);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(53);
				match(PAREN_CLOSE);
				}
				break;
			case ID:
				enterOuterAlt(_localctx, 2);
				{
				setState(55);
				stdiId();
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
	public static class StdiIdContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(PawnPMacroResolveParser.ID, 0); }
		public StdiIdContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stdiId; }
	}

	public final StdiIdContext stdiId() throws RecognitionException {
		StdiIdContext _localctx = new StdiIdContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_stdiId);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(58);
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
	public static class StVariableContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(PawnPMacroResolveParser.ID, 0); }
		public StVariableContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stVariable; }
	}

	public final StVariableContext stVariable() throws RecognitionException {
		StVariableContext _localctx = new StVariableContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_stVariable);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(60);
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
	public static class StFunctionCallContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(PawnPMacroResolveParser.ID, 0); }
		public TerminalNode PAREN_OPEN() { return getToken(PawnPMacroResolveParser.PAREN_OPEN, 0); }
		public StfcArgumentsContext stfcArguments() {
			return getRuleContext(StfcArgumentsContext.class,0);
		}
		public TerminalNode PAREN_CLOSE() { return getToken(PawnPMacroResolveParser.PAREN_CLOSE, 0); }
		public List<TerminalNode> WS() { return getTokens(PawnPMacroResolveParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(PawnPMacroResolveParser.WS, i);
		}
		public StFunctionCallContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stFunctionCall; }
	}

	public final StFunctionCallContext stFunctionCall() throws RecognitionException {
		StFunctionCallContext _localctx = new StFunctionCallContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_stFunctionCall);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(62);
			match(ID);
			setState(66);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==WS) {
				{
				{
				setState(63);
				match(WS);
				}
				}
				setState(68);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(69);
			match(PAREN_OPEN);
			setState(70);
			stfcArguments();
			setState(71);
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
	public static class StfcArgumentsContext extends ParserRuleContext {
		public List<StfcaArgumentContext> stfcaArgument() {
			return getRuleContexts(StfcaArgumentContext.class);
		}
		public StfcaArgumentContext stfcaArgument(int i) {
			return getRuleContext(StfcaArgumentContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(PawnPMacroResolveParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(PawnPMacroResolveParser.COMMA, i);
		}
		public StfcArgumentsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stfcArguments; }
	}

	public final StfcArgumentsContext stfcArguments() throws RecognitionException {
		StfcArgumentsContext _localctx = new StfcArgumentsContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_stfcArguments);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(73);
			stfcaArgument();
			setState(78);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(74);
				match(COMMA);
				setState(75);
				stfcaArgument();
				}
				}
				setState(80);
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
	public static class StfcaArgumentContext extends ParserRuleContext {
		public List<TerminalNode> PAREN_OPEN() { return getTokens(PawnPMacroResolveParser.PAREN_OPEN); }
		public TerminalNode PAREN_OPEN(int i) {
			return getToken(PawnPMacroResolveParser.PAREN_OPEN, i);
		}
		public List<StfcaArgumentContext> stfcaArgument() {
			return getRuleContexts(StfcaArgumentContext.class);
		}
		public StfcaArgumentContext stfcaArgument(int i) {
			return getRuleContext(StfcaArgumentContext.class,i);
		}
		public List<TerminalNode> PAREN_CLOSE() { return getTokens(PawnPMacroResolveParser.PAREN_CLOSE); }
		public TerminalNode PAREN_CLOSE(int i) {
			return getToken(PawnPMacroResolveParser.PAREN_CLOSE, i);
		}
		public List<TerminalNode> STRING() { return getTokens(PawnPMacroResolveParser.STRING); }
		public TerminalNode STRING(int i) {
			return getToken(PawnPMacroResolveParser.STRING, i);
		}
		public List<TerminalNode> WS() { return getTokens(PawnPMacroResolveParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(PawnPMacroResolveParser.WS, i);
		}
		public List<TerminalNode> ID() { return getTokens(PawnPMacroResolveParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(PawnPMacroResolveParser.ID, i);
		}
		public List<TerminalNode> CHAR() { return getTokens(PawnPMacroResolveParser.CHAR); }
		public TerminalNode CHAR(int i) {
			return getToken(PawnPMacroResolveParser.CHAR, i);
		}
		public StfcaArgumentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stfcaArgument; }
	}

	public final StfcaArgumentContext stfcaArgument() throws RecognitionException {
		StfcaArgumentContext _localctx = new StfcaArgumentContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_stfcaArgument);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(91);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 22020144L) != 0)) {
				{
				setState(89);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case PAREN_OPEN:
					{
					setState(81);
					match(PAREN_OPEN);
					setState(82);
					stfcaArgument();
					setState(83);
					match(PAREN_CLOSE);
					}
					break;
				case STRING:
					{
					setState(85);
					match(STRING);
					}
					break;
				case WS:
					{
					setState(86);
					match(WS);
					}
					break;
				case ID:
					{
					setState(87);
					match(ID);
					}
					break;
				case CHAR:
					{
					setState(88);
					match(CHAR);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(93);
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
	public static class StOtherContext extends ParserRuleContext {
		public TerminalNode STRING() { return getToken(PawnPMacroResolveParser.STRING, 0); }
		public TerminalNode WS() { return getToken(PawnPMacroResolveParser.WS, 0); }
		public TerminalNode COMMA() { return getToken(PawnPMacroResolveParser.COMMA, 0); }
		public TerminalNode PAREN_OPEN() { return getToken(PawnPMacroResolveParser.PAREN_OPEN, 0); }
		public TerminalNode PAREN_CLOSE() { return getToken(PawnPMacroResolveParser.PAREN_CLOSE, 0); }
		public TerminalNode CHAR() { return getToken(PawnPMacroResolveParser.CHAR, 0); }
		public StOtherContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stOther; }
	}

	public final StOtherContext stOther() throws RecognitionException {
		StOtherContext _localctx = new StOtherContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_stOther);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(94);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 31457328L) != 0)) ) {
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

	public static final String _serializedATN =
		"\u0004\u0001\u0018a\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0001\u0000\u0004\u0000\u0016\b\u0000\u000b"+
		"\u0000\f\u0000\u0017\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0003"+
		"\u0001\u001e\b\u0001\u0001\u0002\u0001\u0002\u0004\u0002\"\b\u0002\u000b"+
		"\u0002\f\u0002#\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0005"+
		"\u0003*\b\u0003\n\u0003\f\u0003-\t\u0003\u0001\u0003\u0001\u0003\u0005"+
		"\u00031\b\u0003\n\u0003\f\u00034\t\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0003\u00039\b\u0003\u0001\u0004\u0001\u0004\u0001\u0005\u0001"+
		"\u0005\u0001\u0006\u0001\u0006\u0005\u0006A\b\u0006\n\u0006\f\u0006D\t"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0005\u0007M\b\u0007\n\u0007\f\u0007P\t\u0007\u0001"+
		"\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0005\bZ\b"+
		"\b\n\b\f\b]\t\b\u0001\t\u0001\t\u0001\t\u0000\u0000\n\u0000\u0002\u0004"+
		"\u0006\b\n\f\u000e\u0010\u0012\u0000\u0001\u0002\u0000\u0004\u0005\u0015"+
		"\u0018e\u0000\u0015\u0001\u0000\u0000\u0000\u0002\u001d\u0001\u0000\u0000"+
		"\u0000\u0004\u001f\u0001\u0000\u0000\u0000\u00068\u0001\u0000\u0000\u0000"+
		"\b:\u0001\u0000\u0000\u0000\n<\u0001\u0000\u0000\u0000\f>\u0001\u0000"+
		"\u0000\u0000\u000eI\u0001\u0000\u0000\u0000\u0010[\u0001\u0000\u0000\u0000"+
		"\u0012^\u0001\u0000\u0000\u0000\u0014\u0016\u0003\u0002\u0001\u0000\u0015"+
		"\u0014\u0001\u0000\u0000\u0000\u0016\u0017\u0001\u0000\u0000\u0000\u0017"+
		"\u0015\u0001\u0000\u0000\u0000\u0017\u0018\u0001\u0000\u0000\u0000\u0018"+
		"\u0001\u0001\u0000\u0000\u0000\u0019\u001e\u0003\u0004\u0002\u0000\u001a"+
		"\u001e\u0003\f\u0006\u0000\u001b\u001e\u0003\n\u0005\u0000\u001c\u001e"+
		"\u0003\u0012\t\u0000\u001d\u0019\u0001\u0000\u0000\u0000\u001d\u001a\u0001"+
		"\u0000\u0000\u0000\u001d\u001b\u0001\u0000\u0000\u0000\u001d\u001c\u0001"+
		"\u0000\u0000\u0000\u001e\u0003\u0001\u0000\u0000\u0000\u001f!\u0005\u0013"+
		"\u0000\u0000 \"\u0005\u0005\u0000\u0000! \u0001\u0000\u0000\u0000\"#\u0001"+
		"\u0000\u0000\u0000#!\u0001\u0000\u0000\u0000#$\u0001\u0000\u0000\u0000"+
		"$%\u0001\u0000\u0000\u0000%&\u0003\u0006\u0003\u0000&\u0005\u0001\u0000"+
		"\u0000\u0000\'+\u0005\u0016\u0000\u0000(*\u0005\u0005\u0000\u0000)(\u0001"+
		"\u0000\u0000\u0000*-\u0001\u0000\u0000\u0000+)\u0001\u0000\u0000\u0000"+
		"+,\u0001\u0000\u0000\u0000,.\u0001\u0000\u0000\u0000-+\u0001\u0000\u0000"+
		"\u0000.2\u0003\u0006\u0003\u0000/1\u0005\u0005\u0000\u00000/\u0001\u0000"+
		"\u0000\u000014\u0001\u0000\u0000\u000020\u0001\u0000\u0000\u000023\u0001"+
		"\u0000\u0000\u000035\u0001\u0000\u0000\u000042\u0001\u0000\u0000\u0000"+
		"56\u0005\u0017\u0000\u000069\u0001\u0000\u0000\u000079\u0003\b\u0004\u0000"+
		"8\'\u0001\u0000\u0000\u000087\u0001\u0000\u0000\u00009\u0007\u0001\u0000"+
		"\u0000\u0000:;\u0005\u0014\u0000\u0000;\t\u0001\u0000\u0000\u0000<=\u0005"+
		"\u0014\u0000\u0000=\u000b\u0001\u0000\u0000\u0000>B\u0005\u0014\u0000"+
		"\u0000?A\u0005\u0005\u0000\u0000@?\u0001\u0000\u0000\u0000AD\u0001\u0000"+
		"\u0000\u0000B@\u0001\u0000\u0000\u0000BC\u0001\u0000\u0000\u0000CE\u0001"+
		"\u0000\u0000\u0000DB\u0001\u0000\u0000\u0000EF\u0005\u0016\u0000\u0000"+
		"FG\u0003\u000e\u0007\u0000GH\u0005\u0017\u0000\u0000H\r\u0001\u0000\u0000"+
		"\u0000IN\u0003\u0010\b\u0000JK\u0005\u0015\u0000\u0000KM\u0003\u0010\b"+
		"\u0000LJ\u0001\u0000\u0000\u0000MP\u0001\u0000\u0000\u0000NL\u0001\u0000"+
		"\u0000\u0000NO\u0001\u0000\u0000\u0000O\u000f\u0001\u0000\u0000\u0000"+
		"PN\u0001\u0000\u0000\u0000QR\u0005\u0016\u0000\u0000RS\u0003\u0010\b\u0000"+
		"ST\u0005\u0017\u0000\u0000TZ\u0001\u0000\u0000\u0000UZ\u0005\u0004\u0000"+
		"\u0000VZ\u0005\u0005\u0000\u0000WZ\u0005\u0014\u0000\u0000XZ\u0005\u0018"+
		"\u0000\u0000YQ\u0001\u0000\u0000\u0000YU\u0001\u0000\u0000\u0000YV\u0001"+
		"\u0000\u0000\u0000YW\u0001\u0000\u0000\u0000YX\u0001\u0000\u0000\u0000"+
		"Z]\u0001\u0000\u0000\u0000[Y\u0001\u0000\u0000\u0000[\\\u0001\u0000\u0000"+
		"\u0000\\\u0011\u0001\u0000\u0000\u0000][\u0001\u0000\u0000\u0000^_\u0007"+
		"\u0000\u0000\u0000_\u0013\u0001\u0000\u0000\u0000\n\u0017\u001d#+28BN"+
		"Y[";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}