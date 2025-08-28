// Generated from d:/test-pawn/src/antlr/generated/PawnPreprocessorLexerRule.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class PawnPreprocessorLexerRule extends Lexer {
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
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"COMMENT_BLOCK", "COMMENT_LINE", "NL_ESC", "STRING", "WS", "NEWLINE", 
			"PREPROCESS_BEGIN", "PREPROCESS_INCLUDE", "PREPROCESS_DEFINE", "PREPROCESS_UNDEF", 
			"PREPROCESS_IFDEF", "PREPROCESS_IFNDEF", "PREPROCESS_IF", "PREPROCESS_ELSE", 
			"PREPROCESS_ELIF", "PREPROCESS_ENDIF", "PREPROCESS_PRAGMA", "PREPROCESS_ERROR", 
			"DEFINED", "ID", "COMMA", "PAREN_OPEN", "PAREN_CLOSE", "CHAR", "STRING_ESC"
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


	public PawnPreprocessorLexerRule(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "PawnPreprocessorLexerRule.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u0018\u00c5\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011"+
		"\u0002\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014"+
		"\u0002\u0015\u0007\u0015\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017"+
		"\u0002\u0018\u0007\u0018\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000"+
		"\u0005\u00008\b\u0000\n\u0000\f\u0000;\t\u0000\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0005\u0001F\b\u0001\n\u0001\f\u0001I\t\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0002\u0001\u0002\u0003\u0002O\b\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0005\u0003X\b\u0003\n\u0003\f\u0003[\t\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0004\u0001\u0004\u0001\u0005\u0003\u0005b\b\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\b\u0001"+
		"\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t\u0001"+
		"\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001"+
		"\u000b\u0001\f\u0001\f\u0001\f\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r"+
		"\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000f"+
		"\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u0010"+
		"\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010"+
		"\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011"+
		"\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012"+
		"\u0001\u0012\u0001\u0012\u0001\u0013\u0001\u0013\u0005\u0013\u00b4\b\u0013"+
		"\n\u0013\f\u0013\u00b7\t\u0013\u0001\u0014\u0001\u0014\u0001\u0015\u0001"+
		"\u0015\u0001\u0016\u0001\u0016\u0001\u0017\u0001\u0017\u0001\u0017\u0001"+
		"\u0017\u0001\u0018\u0001\u0018\u0001\u0018\u00029Y\u0000\u0019\u0001\u0001"+
		"\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f"+
		"\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0019\r\u001b\u000e\u001d\u000f"+
		"\u001f\u0010!\u0011#\u0012%\u0013\'\u0014)\u0015+\u0016-\u0017/\u0018"+
		"1\u0000\u0001\u0000\u0005\u0002\u0000\n\n\r\r\u0002\u0000\t\t  \u0003"+
		"\u0000AZ__az\u0004\u000009AZ__az\u0007\u0000\"\"00\\\\bbnnrrtt\u00ca\u0000"+
		"\u0001\u0001\u0000\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000"+
		"\u0005\u0001\u0000\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000"+
		"\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r"+
		"\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011"+
		"\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015"+
		"\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000\u0000\u0000\u0000\u0019"+
		"\u0001\u0000\u0000\u0000\u0000\u001b\u0001\u0000\u0000\u0000\u0000\u001d"+
		"\u0001\u0000\u0000\u0000\u0000\u001f\u0001\u0000\u0000\u0000\u0000!\u0001"+
		"\u0000\u0000\u0000\u0000#\u0001\u0000\u0000\u0000\u0000%\u0001\u0000\u0000"+
		"\u0000\u0000\'\u0001\u0000\u0000\u0000\u0000)\u0001\u0000\u0000\u0000"+
		"\u0000+\u0001\u0000\u0000\u0000\u0000-\u0001\u0000\u0000\u0000\u0000/"+
		"\u0001\u0000\u0000\u0000\u00013\u0001\u0000\u0000\u0000\u0003A\u0001\u0000"+
		"\u0000\u0000\u0005L\u0001\u0000\u0000\u0000\u0007T\u0001\u0000\u0000\u0000"+
		"\t^\u0001\u0000\u0000\u0000\u000ba\u0001\u0000\u0000\u0000\re\u0001\u0000"+
		"\u0000\u0000\u000fg\u0001\u0000\u0000\u0000\u0011o\u0001\u0000\u0000\u0000"+
		"\u0013v\u0001\u0000\u0000\u0000\u0015|\u0001\u0000\u0000\u0000\u0017\u0082"+
		"\u0001\u0000\u0000\u0000\u0019\u0089\u0001\u0000\u0000\u0000\u001b\u008c"+
		"\u0001\u0000\u0000\u0000\u001d\u0091\u0001\u0000\u0000\u0000\u001f\u0096"+
		"\u0001\u0000\u0000\u0000!\u009c\u0001\u0000\u0000\u0000#\u00a3\u0001\u0000"+
		"\u0000\u0000%\u00a9\u0001\u0000\u0000\u0000\'\u00b1\u0001\u0000\u0000"+
		"\u0000)\u00b8\u0001\u0000\u0000\u0000+\u00ba\u0001\u0000\u0000\u0000-"+
		"\u00bc\u0001\u0000\u0000\u0000/\u00be\u0001\u0000\u0000\u00001\u00c2\u0001"+
		"\u0000\u0000\u000034\u0005/\u0000\u000045\u0005*\u0000\u000059\u0001\u0000"+
		"\u0000\u000068\t\u0000\u0000\u000076\u0001\u0000\u0000\u00008;\u0001\u0000"+
		"\u0000\u00009:\u0001\u0000\u0000\u000097\u0001\u0000\u0000\u0000:<\u0001"+
		"\u0000\u0000\u0000;9\u0001\u0000\u0000\u0000<=\u0005*\u0000\u0000=>\u0005"+
		"/\u0000\u0000>?\u0001\u0000\u0000\u0000?@\u0006\u0000\u0000\u0000@\u0002"+
		"\u0001\u0000\u0000\u0000AB\u0005/\u0000\u0000BC\u0005/\u0000\u0000CG\u0001"+
		"\u0000\u0000\u0000DF\b\u0000\u0000\u0000ED\u0001\u0000\u0000\u0000FI\u0001"+
		"\u0000\u0000\u0000GE\u0001\u0000\u0000\u0000GH\u0001\u0000\u0000\u0000"+
		"HJ\u0001\u0000\u0000\u0000IG\u0001\u0000\u0000\u0000JK\u0006\u0001\u0000"+
		"\u0000K\u0004\u0001\u0000\u0000\u0000LN\u0005\\\u0000\u0000MO\u0005\r"+
		"\u0000\u0000NM\u0001\u0000\u0000\u0000NO\u0001\u0000\u0000\u0000OP\u0001"+
		"\u0000\u0000\u0000PQ\u0005\n\u0000\u0000QR\u0001\u0000\u0000\u0000RS\u0006"+
		"\u0002\u0000\u0000S\u0006\u0001\u0000\u0000\u0000TY\u0005\"\u0000\u0000"+
		"UX\u00031\u0018\u0000VX\t\u0000\u0000\u0000WU\u0001\u0000\u0000\u0000"+
		"WV\u0001\u0000\u0000\u0000X[\u0001\u0000\u0000\u0000YZ\u0001\u0000\u0000"+
		"\u0000YW\u0001\u0000\u0000\u0000Z\\\u0001\u0000\u0000\u0000[Y\u0001\u0000"+
		"\u0000\u0000\\]\u0005\"\u0000\u0000]\b\u0001\u0000\u0000\u0000^_\u0007"+
		"\u0001\u0000\u0000_\n\u0001\u0000\u0000\u0000`b\u0005\r\u0000\u0000a`"+
		"\u0001\u0000\u0000\u0000ab\u0001\u0000\u0000\u0000bc\u0001\u0000\u0000"+
		"\u0000cd\u0005\n\u0000\u0000d\f\u0001\u0000\u0000\u0000ef\u0005#\u0000"+
		"\u0000f\u000e\u0001\u0000\u0000\u0000gh\u0005i\u0000\u0000hi\u0005n\u0000"+
		"\u0000ij\u0005c\u0000\u0000jk\u0005l\u0000\u0000kl\u0005u\u0000\u0000"+
		"lm\u0005d\u0000\u0000mn\u0005e\u0000\u0000n\u0010\u0001\u0000\u0000\u0000"+
		"op\u0005d\u0000\u0000pq\u0005e\u0000\u0000qr\u0005f\u0000\u0000rs\u0005"+
		"i\u0000\u0000st\u0005n\u0000\u0000tu\u0005e\u0000\u0000u\u0012\u0001\u0000"+
		"\u0000\u0000vw\u0005u\u0000\u0000wx\u0005n\u0000\u0000xy\u0005d\u0000"+
		"\u0000yz\u0005e\u0000\u0000z{\u0005f\u0000\u0000{\u0014\u0001\u0000\u0000"+
		"\u0000|}\u0005i\u0000\u0000}~\u0005f\u0000\u0000~\u007f\u0005d\u0000\u0000"+
		"\u007f\u0080\u0005e\u0000\u0000\u0080\u0081\u0005f\u0000\u0000\u0081\u0016"+
		"\u0001\u0000\u0000\u0000\u0082\u0083\u0005i\u0000\u0000\u0083\u0084\u0005"+
		"f\u0000\u0000\u0084\u0085\u0005n\u0000\u0000\u0085\u0086\u0005d\u0000"+
		"\u0000\u0086\u0087\u0005e\u0000\u0000\u0087\u0088\u0005f\u0000\u0000\u0088"+
		"\u0018\u0001\u0000\u0000\u0000\u0089\u008a\u0005i\u0000\u0000\u008a\u008b"+
		"\u0005f\u0000\u0000\u008b\u001a\u0001\u0000\u0000\u0000\u008c\u008d\u0005"+
		"e\u0000\u0000\u008d\u008e\u0005l\u0000\u0000\u008e\u008f\u0005s\u0000"+
		"\u0000\u008f\u0090\u0005e\u0000\u0000\u0090\u001c\u0001\u0000\u0000\u0000"+
		"\u0091\u0092\u0005e\u0000\u0000\u0092\u0093\u0005l\u0000\u0000\u0093\u0094"+
		"\u0005i\u0000\u0000\u0094\u0095\u0005f\u0000\u0000\u0095\u001e\u0001\u0000"+
		"\u0000\u0000\u0096\u0097\u0005e\u0000\u0000\u0097\u0098\u0005n\u0000\u0000"+
		"\u0098\u0099\u0005d\u0000\u0000\u0099\u009a\u0005i\u0000\u0000\u009a\u009b"+
		"\u0005f\u0000\u0000\u009b \u0001\u0000\u0000\u0000\u009c\u009d\u0005p"+
		"\u0000\u0000\u009d\u009e\u0005r\u0000\u0000\u009e\u009f\u0005a\u0000\u0000"+
		"\u009f\u00a0\u0005g\u0000\u0000\u00a0\u00a1\u0005m\u0000\u0000\u00a1\u00a2"+
		"\u0005a\u0000\u0000\u00a2\"\u0001\u0000\u0000\u0000\u00a3\u00a4\u0005"+
		"e\u0000\u0000\u00a4\u00a5\u0005r\u0000\u0000\u00a5\u00a6\u0005r\u0000"+
		"\u0000\u00a6\u00a7\u0005o\u0000\u0000\u00a7\u00a8\u0005r\u0000\u0000\u00a8"+
		"$\u0001\u0000\u0000\u0000\u00a9\u00aa\u0005d\u0000\u0000\u00aa\u00ab\u0005"+
		"e\u0000\u0000\u00ab\u00ac\u0005f\u0000\u0000\u00ac\u00ad\u0005i\u0000"+
		"\u0000\u00ad\u00ae\u0005n\u0000\u0000\u00ae\u00af\u0005e\u0000\u0000\u00af"+
		"\u00b0\u0005d\u0000\u0000\u00b0&\u0001\u0000\u0000\u0000\u00b1\u00b5\u0007"+
		"\u0002\u0000\u0000\u00b2\u00b4\u0007\u0003\u0000\u0000\u00b3\u00b2\u0001"+
		"\u0000\u0000\u0000\u00b4\u00b7\u0001\u0000\u0000\u0000\u00b5\u00b3\u0001"+
		"\u0000\u0000\u0000\u00b5\u00b6\u0001\u0000\u0000\u0000\u00b6(\u0001\u0000"+
		"\u0000\u0000\u00b7\u00b5\u0001\u0000\u0000\u0000\u00b8\u00b9\u0005,\u0000"+
		"\u0000\u00b9*\u0001\u0000\u0000\u0000\u00ba\u00bb\u0005(\u0000\u0000\u00bb"+
		",\u0001\u0000\u0000\u0000\u00bc\u00bd\u0005)\u0000\u0000\u00bd.\u0001"+
		"\u0000\u0000\u0000\u00be\u00bf\u0005\'\u0000\u0000\u00bf\u00c0\t\u0000"+
		"\u0000\u0000\u00c0\u00c1\u0005\'\u0000\u0000\u00c10\u0001\u0000\u0000"+
		"\u0000\u00c2\u00c3\u0005\\\u0000\u0000\u00c3\u00c4\u0007\u0004\u0000\u0000"+
		"\u00c42\u0001\u0000\u0000\u0000\b\u00009GNWYa\u00b5\u0001\u0006\u0000"+
		"\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}