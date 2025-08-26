// Generated from d:/test-pawn/src/antlr/generated/pawnPP.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class pawnPPParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		STRING=1, WS=2, NEWLINE=3, PREPROCESS_BEGIN=4, PREPROCESS_INCLUDE=5, DEFINED=6, 
		ID=7, COMMA=8, PAREN_OPEN=9, PAREN_CLOSE=10, CHAR=11;
	public static final int
		RULE_file = 0, RULE_preprocessor = 1, RULE_ppChars = 2, RULE_ppInclude = 3;
	private static String[] makeRuleNames() {
		return new String[] {
			"file", "preprocessor", "ppChars", "ppInclude"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, "'#'", "'include'", "'defined'", null, "','", 
			"'('", "')'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "STRING", "WS", "NEWLINE", "PREPROCESS_BEGIN", "PREPROCESS_INCLUDE", 
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
	public String getGrammarFileName() { return "pawnPP.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public pawnPPParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FileContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(pawnPPParser.EOF, 0); }
		public List<PreprocessorContext> preprocessor() {
			return getRuleContexts(PreprocessorContext.class);
		}
		public PreprocessorContext preprocessor(int i) {
			return getRuleContext(PreprocessorContext.class,i);
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
			setState(11);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==PREPROCESS_BEGIN) {
				{
				{
				setState(8);
				preprocessor();
				}
				}
				setState(13);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(14);
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
	public static class PreprocessorContext extends ParserRuleContext {
		public PpIncludeContext ppInclude() {
			return getRuleContext(PpIncludeContext.class,0);
		}
		public PreprocessorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_preprocessor; }
	}

	public final PreprocessorContext preprocessor() throws RecognitionException {
		PreprocessorContext _localctx = new PreprocessorContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_preprocessor);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(16);
			ppInclude();
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
		public List<TerminalNode> STRING() { return getTokens(pawnPPParser.STRING); }
		public TerminalNode STRING(int i) {
			return getToken(pawnPPParser.STRING, i);
		}
		public List<TerminalNode> WS() { return getTokens(pawnPPParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(pawnPPParser.WS, i);
		}
		public List<TerminalNode> PREPROCESS_BEGIN() { return getTokens(pawnPPParser.PREPROCESS_BEGIN); }
		public TerminalNode PREPROCESS_BEGIN(int i) {
			return getToken(pawnPPParser.PREPROCESS_BEGIN, i);
		}
		public List<TerminalNode> DEFINED() { return getTokens(pawnPPParser.DEFINED); }
		public TerminalNode DEFINED(int i) {
			return getToken(pawnPPParser.DEFINED, i);
		}
		public List<TerminalNode> ID() { return getTokens(pawnPPParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(pawnPPParser.ID, i);
		}
		public List<TerminalNode> COMMA() { return getTokens(pawnPPParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(pawnPPParser.COMMA, i);
		}
		public List<TerminalNode> PAREN_OPEN() { return getTokens(pawnPPParser.PAREN_OPEN); }
		public TerminalNode PAREN_OPEN(int i) {
			return getToken(pawnPPParser.PAREN_OPEN, i);
		}
		public List<TerminalNode> PAREN_CLOSE() { return getTokens(pawnPPParser.PAREN_CLOSE); }
		public TerminalNode PAREN_CLOSE(int i) {
			return getToken(pawnPPParser.PAREN_CLOSE, i);
		}
		public List<TerminalNode> CHAR() { return getTokens(pawnPPParser.CHAR); }
		public TerminalNode CHAR(int i) {
			return getToken(pawnPPParser.CHAR, i);
		}
		public PpCharsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ppChars; }
	}

	public final PpCharsContext ppChars() throws RecognitionException {
		PpCharsContext _localctx = new PpCharsContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_ppChars);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(19); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(18);
					_la = _input.LA(1);
					if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 4054L) != 0)) ) {
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
				setState(21); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,1,_ctx);
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
		public TerminalNode PREPROCESS_BEGIN() { return getToken(pawnPPParser.PREPROCESS_BEGIN, 0); }
		public TerminalNode PREPROCESS_INCLUDE() { return getToken(pawnPPParser.PREPROCESS_INCLUDE, 0); }
		public PpCharsContext ppChars() {
			return getRuleContext(PpCharsContext.class,0);
		}
		public TerminalNode NEWLINE() { return getToken(pawnPPParser.NEWLINE, 0); }
		public TerminalNode EOF() { return getToken(pawnPPParser.EOF, 0); }
		public List<TerminalNode> WS() { return getTokens(pawnPPParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(pawnPPParser.WS, i);
		}
		public PpIncludeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ppInclude; }
	}

	public final PpIncludeContext ppInclude() throws RecognitionException {
		PpIncludeContext _localctx = new PpIncludeContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_ppInclude);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(23);
			match(PREPROCESS_BEGIN);
			setState(27);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==WS) {
				{
				{
				setState(24);
				match(WS);
				}
				}
				setState(29);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(30);
			match(PREPROCESS_INCLUDE);
			setState(34);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,3,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(31);
					match(WS);
					}
					} 
				}
				setState(36);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,3,_ctx);
			}
			setState(37);
			ppChars();
			setState(41);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==WS) {
				{
				{
				setState(38);
				match(WS);
				}
				}
				setState(43);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(44);
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

	public static final String _serializedATN =
		"\u0004\u0001\u000b/\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0001\u0000\u0005\u0000\n\b"+
		"\u0000\n\u0000\f\u0000\r\t\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001"+
		"\u0001\u0001\u0002\u0004\u0002\u0014\b\u0002\u000b\u0002\f\u0002\u0015"+
		"\u0001\u0003\u0001\u0003\u0005\u0003\u001a\b\u0003\n\u0003\f\u0003\u001d"+
		"\t\u0003\u0001\u0003\u0001\u0003\u0005\u0003!\b\u0003\n\u0003\f\u0003"+
		"$\t\u0003\u0001\u0003\u0001\u0003\u0005\u0003(\b\u0003\n\u0003\f\u0003"+
		"+\t\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0000\u0000\u0004\u0000"+
		"\u0002\u0004\u0006\u0000\u0002\u0003\u0000\u0001\u0002\u0004\u0004\u0006"+
		"\u000b\u0001\u0001\u0003\u0003/\u0000\u000b\u0001\u0000\u0000\u0000\u0002"+
		"\u0010\u0001\u0000\u0000\u0000\u0004\u0013\u0001\u0000\u0000\u0000\u0006"+
		"\u0017\u0001\u0000\u0000\u0000\b\n\u0003\u0002\u0001\u0000\t\b\u0001\u0000"+
		"\u0000\u0000\n\r\u0001\u0000\u0000\u0000\u000b\t\u0001\u0000\u0000\u0000"+
		"\u000b\f\u0001\u0000\u0000\u0000\f\u000e\u0001\u0000\u0000\u0000\r\u000b"+
		"\u0001\u0000\u0000\u0000\u000e\u000f\u0005\u0000\u0000\u0001\u000f\u0001"+
		"\u0001\u0000\u0000\u0000\u0010\u0011\u0003\u0006\u0003\u0000\u0011\u0003"+
		"\u0001\u0000\u0000\u0000\u0012\u0014\u0007\u0000\u0000\u0000\u0013\u0012"+
		"\u0001\u0000\u0000\u0000\u0014\u0015\u0001\u0000\u0000\u0000\u0015\u0013"+
		"\u0001\u0000\u0000\u0000\u0015\u0016\u0001\u0000\u0000\u0000\u0016\u0005"+
		"\u0001\u0000\u0000\u0000\u0017\u001b\u0005\u0004\u0000\u0000\u0018\u001a"+
		"\u0005\u0002\u0000\u0000\u0019\u0018\u0001\u0000\u0000\u0000\u001a\u001d"+
		"\u0001\u0000\u0000\u0000\u001b\u0019\u0001\u0000\u0000\u0000\u001b\u001c"+
		"\u0001\u0000\u0000\u0000\u001c\u001e\u0001\u0000\u0000\u0000\u001d\u001b"+
		"\u0001\u0000\u0000\u0000\u001e\"\u0005\u0005\u0000\u0000\u001f!\u0005"+
		"\u0002\u0000\u0000 \u001f\u0001\u0000\u0000\u0000!$\u0001\u0000\u0000"+
		"\u0000\" \u0001\u0000\u0000\u0000\"#\u0001\u0000\u0000\u0000#%\u0001\u0000"+
		"\u0000\u0000$\"\u0001\u0000\u0000\u0000%)\u0003\u0004\u0002\u0000&(\u0005"+
		"\u0002\u0000\u0000\'&\u0001\u0000\u0000\u0000(+\u0001\u0000\u0000\u0000"+
		")\'\u0001\u0000\u0000\u0000)*\u0001\u0000\u0000\u0000*,\u0001\u0000\u0000"+
		"\u0000+)\u0001\u0000\u0000\u0000,-\u0007\u0001\u0000\u0000-\u0007\u0001"+
		"\u0000\u0000\u0000\u0005\u000b\u0015\u001b\")";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}