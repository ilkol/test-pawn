// Generated from d:/test-pawn/src/antlr/generated/pawnPP.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class pawnPPLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		STRING=1, WS=2, NEWLINE=3, PREPROCESS_BEGIN=4, PREPROCESS_INCLUDE=5, DEFINED=6, 
		ID=7, COMMA=8, PAREN_OPEN=9, PAREN_CLOSE=10, CHAR=11;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"STRING", "WS", "NEWLINE", "PREPROCESS_BEGIN", "PREPROCESS_INCLUDE", 
			"DEFINED", "ID", "COMMA", "PAREN_OPEN", "PAREN_CLOSE", "CHAR", "ID_LETTER", 
			"DIGIT", "STRING_ESC", "NL"
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


	public pawnPPLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "pawnPP.g4"; }

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
		"\u0004\u0000\u000b_\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0005\u0000#\b\u0000\n\u0000\f\u0000&\t"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0002\u0001"+
		"\u0002\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0005\u0006C\b\u0006\n\u0006"+
		"\f\u0006F\t\u0006\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\t\u0001"+
		"\t\u0001\n\u0001\n\u0001\n\u0001\n\u0003\nR\b\n\u0001\u000b\u0001\u000b"+
		"\u0001\f\u0001\f\u0001\r\u0001\r\u0001\r\u0001\u000e\u0003\u000e\\\b\u000e"+
		"\u0001\u000e\u0001\u000e\u0001$\u0000\u000f\u0001\u0001\u0003\u0002\u0005"+
		"\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n"+
		"\u0015\u000b\u0017\u0000\u0019\u0000\u001b\u0000\u001d\u0000\u0001\u0000"+
		"\u0004\u0002\u0000\t\t  \u0003\u0000AZ__az\u0001\u000009\u0007\u0000\""+
		"\"00\\\\bbnnrrtt`\u0000\u0001\u0001\u0000\u0000\u0000\u0000\u0003\u0001"+
		"\u0000\u0000\u0000\u0000\u0005\u0001\u0000\u0000\u0000\u0000\u0007\u0001"+
		"\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001\u0000"+
		"\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000\u0000"+
		"\u0000\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000\u0000"+
		"\u0000\u0000\u0015\u0001\u0000\u0000\u0000\u0001\u001f\u0001\u0000\u0000"+
		"\u0000\u0003)\u0001\u0000\u0000\u0000\u0005+\u0001\u0000\u0000\u0000\u0007"+
		"-\u0001\u0000\u0000\u0000\t/\u0001\u0000\u0000\u0000\u000b7\u0001\u0000"+
		"\u0000\u0000\r?\u0001\u0000\u0000\u0000\u000fG\u0001\u0000\u0000\u0000"+
		"\u0011I\u0001\u0000\u0000\u0000\u0013K\u0001\u0000\u0000\u0000\u0015Q"+
		"\u0001\u0000\u0000\u0000\u0017S\u0001\u0000\u0000\u0000\u0019U\u0001\u0000"+
		"\u0000\u0000\u001bW\u0001\u0000\u0000\u0000\u001d[\u0001\u0000\u0000\u0000"+
		"\u001f$\u0005\"\u0000\u0000 #\u0003\u001b\r\u0000!#\t\u0000\u0000\u0000"+
		"\" \u0001\u0000\u0000\u0000\"!\u0001\u0000\u0000\u0000#&\u0001\u0000\u0000"+
		"\u0000$%\u0001\u0000\u0000\u0000$\"\u0001\u0000\u0000\u0000%\'\u0001\u0000"+
		"\u0000\u0000&$\u0001\u0000\u0000\u0000\'(\u0005\"\u0000\u0000(\u0002\u0001"+
		"\u0000\u0000\u0000)*\u0007\u0000\u0000\u0000*\u0004\u0001\u0000\u0000"+
		"\u0000+,\u0003\u001d\u000e\u0000,\u0006\u0001\u0000\u0000\u0000-.\u0005"+
		"#\u0000\u0000.\b\u0001\u0000\u0000\u0000/0\u0005i\u0000\u000001\u0005"+
		"n\u0000\u000012\u0005c\u0000\u000023\u0005l\u0000\u000034\u0005u\u0000"+
		"\u000045\u0005d\u0000\u000056\u0005e\u0000\u00006\n\u0001\u0000\u0000"+
		"\u000078\u0005d\u0000\u000089\u0005e\u0000\u00009:\u0005f\u0000\u0000"+
		":;\u0005i\u0000\u0000;<\u0005n\u0000\u0000<=\u0005e\u0000\u0000=>\u0005"+
		"d\u0000\u0000>\f\u0001\u0000\u0000\u0000?D\u0003\u0017\u000b\u0000@C\u0003"+
		"\u0017\u000b\u0000AC\u0003\u0019\f\u0000B@\u0001\u0000\u0000\u0000BA\u0001"+
		"\u0000\u0000\u0000CF\u0001\u0000\u0000\u0000DB\u0001\u0000\u0000\u0000"+
		"DE\u0001\u0000\u0000\u0000E\u000e\u0001\u0000\u0000\u0000FD\u0001\u0000"+
		"\u0000\u0000GH\u0005,\u0000\u0000H\u0010\u0001\u0000\u0000\u0000IJ\u0005"+
		"(\u0000\u0000J\u0012\u0001\u0000\u0000\u0000KL\u0005)\u0000\u0000L\u0014"+
		"\u0001\u0000\u0000\u0000MN\u0005\'\u0000\u0000NO\t\u0000\u0000\u0000O"+
		"R\u0005\'\u0000\u0000PR\t\u0000\u0000\u0000QM\u0001\u0000\u0000\u0000"+
		"QP\u0001\u0000\u0000\u0000R\u0016\u0001\u0000\u0000\u0000ST\u0007\u0001"+
		"\u0000\u0000T\u0018\u0001\u0000\u0000\u0000UV\u0007\u0002\u0000\u0000"+
		"V\u001a\u0001\u0000\u0000\u0000WX\u0005\\\u0000\u0000XY\u0007\u0003\u0000"+
		"\u0000Y\u001c\u0001\u0000\u0000\u0000Z\\\u0005\r\u0000\u0000[Z\u0001\u0000"+
		"\u0000\u0000[\\\u0001\u0000\u0000\u0000\\]\u0001\u0000\u0000\u0000]^\u0005"+
		"\n\u0000\u0000^\u001e\u0001\u0000\u0000\u0000\u0007\u0000\"$BDQ[\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}