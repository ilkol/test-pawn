// Generated from d:/test-pawn/src/antlr/generated/PawnPCondition.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class PawnPConditionParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		LOP_AND=1, LOP_OR=2, LOP_NOT=3, BOP_NOT=4, BOP_XOR=5, BOP_AND=6, BOP_OR=7, 
		BOP_SHL=8, BOP_SHR=9, AOP_ADD=10, AOP_SUB=11, AOP_MUL=12, AOP_DIV=13, 
		AOP_MOD=14, CMP_EQ=15, CMP_NE=16, CMP_LE=17, CMP_LT=18, CMP_GE=19, CMP_GT=20, 
		TER_IF=21, TER_ELS=22, PAREN_OPEN=23, PAREN_CLOSE=24, DEFINED=25, TRUE=26, 
		FALSE=27, FLOAT=28, INT=29, HEX=30, OCT=31, ID=32, NL_ESC=33, WS=34;
	public static final int
		RULE_condition = 0, RULE_expression = 1, RULE_unaryExpression = 2, RULE_value = 3;
	private static String[] makeRuleNames() {
		return new String[] {
			"condition", "expression", "unaryExpression", "value"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'&&'", "'||'", "'!'", "'~'", "'^'", "'&'", "'|'", "'<<'", "'>>'", 
			"'+'", "'-'", "'*'", "'/'", "'%'", "'=='", "'!='", "'<='", "'<'", "'>='", 
			"'>'", "'?'", "':'", "'('", "')'", "'defined'", "'true'", "'false'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "LOP_AND", "LOP_OR", "LOP_NOT", "BOP_NOT", "BOP_XOR", "BOP_AND", 
			"BOP_OR", "BOP_SHL", "BOP_SHR", "AOP_ADD", "AOP_SUB", "AOP_MUL", "AOP_DIV", 
			"AOP_MOD", "CMP_EQ", "CMP_NE", "CMP_LE", "CMP_LT", "CMP_GE", "CMP_GT", 
			"TER_IF", "TER_ELS", "PAREN_OPEN", "PAREN_CLOSE", "DEFINED", "TRUE", 
			"FALSE", "FLOAT", "INT", "HEX", "OCT", "ID", "NL_ESC", "WS"
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
	public String getGrammarFileName() { return "PawnPCondition.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public PawnPConditionParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ConditionContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ConditionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_condition; }
	}

	public final ConditionContext condition() throws RecognitionException {
		ConditionContext _localctx = new ConditionContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_condition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(8);
			expression(0);
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
	public static class ExpressionContext extends ParserRuleContext {
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	 
		public ExpressionContext() { }
		public void copyFrom(ExpressionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class CeMulDivModContext extends ExpressionContext {
		public Token op;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode AOP_MUL() { return getToken(PawnPConditionParser.AOP_MUL, 0); }
		public TerminalNode AOP_DIV() { return getToken(PawnPConditionParser.AOP_DIV, 0); }
		public TerminalNode AOP_MOD() { return getToken(PawnPConditionParser.AOP_MOD, 0); }
		public CeMulDivModContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class CeValueContext extends ExpressionContext {
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public CeValueContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class CeAddSubContext extends ExpressionContext {
		public Token op;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode AOP_ADD() { return getToken(PawnPConditionParser.AOP_ADD, 0); }
		public TerminalNode AOP_SUB() { return getToken(PawnPConditionParser.AOP_SUB, 0); }
		public CeAddSubContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class CeCmpLeLtGeGtContext extends ExpressionContext {
		public Token op;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode CMP_LE() { return getToken(PawnPConditionParser.CMP_LE, 0); }
		public TerminalNode CMP_LT() { return getToken(PawnPConditionParser.CMP_LT, 0); }
		public TerminalNode CMP_GE() { return getToken(PawnPConditionParser.CMP_GE, 0); }
		public TerminalNode CMP_GT() { return getToken(PawnPConditionParser.CMP_GT, 0); }
		public CeCmpLeLtGeGtContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class CeBitAndContext extends ExpressionContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode BOP_AND() { return getToken(PawnPConditionParser.BOP_AND, 0); }
		public CeBitAndContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class CeTerIfContext extends ExpressionContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode TER_IF() { return getToken(PawnPConditionParser.TER_IF, 0); }
		public TerminalNode TER_ELS() { return getToken(PawnPConditionParser.TER_ELS, 0); }
		public CeTerIfContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class CeUnaryContext extends ExpressionContext {
		public UnaryExpressionContext unaryExpression() {
			return getRuleContext(UnaryExpressionContext.class,0);
		}
		public CeUnaryContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class CeLogicOrContext extends ExpressionContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode LOP_OR() { return getToken(PawnPConditionParser.LOP_OR, 0); }
		public CeLogicOrContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class CeBitXorContext extends ExpressionContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode BOP_XOR() { return getToken(PawnPConditionParser.BOP_XOR, 0); }
		public CeBitXorContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class CeLogicAndContext extends ExpressionContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode LOP_AND() { return getToken(PawnPConditionParser.LOP_AND, 0); }
		public CeLogicAndContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class CeBitOrContext extends ExpressionContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode BOP_OR() { return getToken(PawnPConditionParser.BOP_OR, 0); }
		public CeBitOrContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class CeCmpEqNeContext extends ExpressionContext {
		public Token op;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode CMP_EQ() { return getToken(PawnPConditionParser.CMP_EQ, 0); }
		public TerminalNode CMP_NE() { return getToken(PawnPConditionParser.CMP_NE, 0); }
		public CeCmpEqNeContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class CeParenContext extends ExpressionContext {
		public TerminalNode PAREN_OPEN() { return getToken(PawnPConditionParser.PAREN_OPEN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode PAREN_CLOSE() { return getToken(PawnPConditionParser.PAREN_CLOSE, 0); }
		public CeParenContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class CeShlShrContext extends ExpressionContext {
		public Token op;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode BOP_SHL() { return getToken(PawnPConditionParser.BOP_SHL, 0); }
		public TerminalNode BOP_SHR() { return getToken(PawnPConditionParser.BOP_SHR, 0); }
		public CeShlShrContext(ExpressionContext ctx) { copyFrom(ctx); }
	}

	public final ExpressionContext expression() throws RecognitionException {
		return expression(0);
	}

	private ExpressionContext expression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExpressionContext _localctx = new ExpressionContext(_ctx, _parentState);
		ExpressionContext _prevctx = _localctx;
		int _startState = 2;
		enterRecursionRule(_localctx, 2, RULE_expression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(17);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case PAREN_OPEN:
				{
				_localctx = new CeParenContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(11);
				match(PAREN_OPEN);
				setState(12);
				expression(0);
				setState(13);
				match(PAREN_CLOSE);
				}
				break;
			case LOP_NOT:
			case BOP_NOT:
			case AOP_ADD:
			case AOP_SUB:
				{
				_localctx = new CeUnaryContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(15);
				unaryExpression();
				}
				break;
			case TRUE:
			case FALSE:
			case FLOAT:
			case INT:
			case HEX:
			case OCT:
			case ID:
				{
				_localctx = new CeValueContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(16);
				value();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(57);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,2,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(55);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
					case 1:
						{
						_localctx = new CeMulDivModContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(19);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						setState(20);
						((CeMulDivModContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 28672L) != 0)) ) {
							((CeMulDivModContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(21);
						expression(13);
						}
						break;
					case 2:
						{
						_localctx = new CeAddSubContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(22);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(23);
						((CeAddSubContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==AOP_ADD || _la==AOP_SUB) ) {
							((CeAddSubContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(24);
						expression(12);
						}
						break;
					case 3:
						{
						_localctx = new CeShlShrContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(25);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(26);
						((CeShlShrContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==BOP_SHL || _la==BOP_SHR) ) {
							((CeShlShrContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(27);
						expression(11);
						}
						break;
					case 4:
						{
						_localctx = new CeCmpLeLtGeGtContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(28);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(29);
						((CeCmpLeLtGeGtContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 1966080L) != 0)) ) {
							((CeCmpLeLtGeGtContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(30);
						expression(10);
						}
						break;
					case 5:
						{
						_localctx = new CeCmpEqNeContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(31);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(32);
						((CeCmpEqNeContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==CMP_EQ || _la==CMP_NE) ) {
							((CeCmpEqNeContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(33);
						expression(9);
						}
						break;
					case 6:
						{
						_localctx = new CeBitAndContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(34);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(35);
						match(BOP_AND);
						setState(36);
						expression(8);
						}
						break;
					case 7:
						{
						_localctx = new CeBitXorContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(37);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(38);
						match(BOP_XOR);
						setState(39);
						expression(7);
						}
						break;
					case 8:
						{
						_localctx = new CeBitOrContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(40);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(41);
						match(BOP_OR);
						setState(42);
						expression(6);
						}
						break;
					case 9:
						{
						_localctx = new CeLogicAndContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(43);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(44);
						match(LOP_AND);
						setState(45);
						expression(5);
						}
						break;
					case 10:
						{
						_localctx = new CeLogicOrContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(46);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(47);
						match(LOP_OR);
						setState(48);
						expression(4);
						}
						break;
					case 11:
						{
						_localctx = new CeTerIfContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(49);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(50);
						match(TER_IF);
						setState(51);
						expression(0);
						setState(52);
						match(TER_ELS);
						setState(53);
						expression(3);
						}
						break;
					}
					} 
				}
				setState(59);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,2,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class UnaryExpressionContext extends ParserRuleContext {
		public Token op;
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode AOP_ADD() { return getToken(PawnPConditionParser.AOP_ADD, 0); }
		public TerminalNode AOP_SUB() { return getToken(PawnPConditionParser.AOP_SUB, 0); }
		public TerminalNode BOP_NOT() { return getToken(PawnPConditionParser.BOP_NOT, 0); }
		public TerminalNode LOP_NOT() { return getToken(PawnPConditionParser.LOP_NOT, 0); }
		public UnaryExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unaryExpression; }
	}

	public final UnaryExpressionContext unaryExpression() throws RecognitionException {
		UnaryExpressionContext _localctx = new UnaryExpressionContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_unaryExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(60);
			((UnaryExpressionContext)_localctx).op = _input.LT(1);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 3096L) != 0)) ) {
				((UnaryExpressionContext)_localctx).op = (Token)_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(61);
			expression(0);
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
	public static class ValueContext extends ParserRuleContext {
		public Token val;
		public TerminalNode FLOAT() { return getToken(PawnPConditionParser.FLOAT, 0); }
		public TerminalNode INT() { return getToken(PawnPConditionParser.INT, 0); }
		public TerminalNode HEX() { return getToken(PawnPConditionParser.HEX, 0); }
		public TerminalNode OCT() { return getToken(PawnPConditionParser.OCT, 0); }
		public TerminalNode TRUE() { return getToken(PawnPConditionParser.TRUE, 0); }
		public TerminalNode FALSE() { return getToken(PawnPConditionParser.FALSE, 0); }
		public TerminalNode ID() { return getToken(PawnPConditionParser.ID, 0); }
		public ValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_value; }
	}

	public final ValueContext value() throws RecognitionException {
		ValueContext _localctx = new ValueContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_value);
		try {
			setState(70);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case FLOAT:
				enterOuterAlt(_localctx, 1);
				{
				setState(63);
				((ValueContext)_localctx).val = match(FLOAT);
				}
				break;
			case INT:
				enterOuterAlt(_localctx, 2);
				{
				setState(64);
				((ValueContext)_localctx).val = match(INT);
				}
				break;
			case HEX:
				enterOuterAlt(_localctx, 3);
				{
				setState(65);
				((ValueContext)_localctx).val = match(HEX);
				}
				break;
			case OCT:
				enterOuterAlt(_localctx, 4);
				{
				setState(66);
				((ValueContext)_localctx).val = match(OCT);
				}
				break;
			case TRUE:
				enterOuterAlt(_localctx, 5);
				{
				setState(67);
				((ValueContext)_localctx).val = match(TRUE);
				}
				break;
			case FALSE:
				enterOuterAlt(_localctx, 6);
				{
				setState(68);
				((ValueContext)_localctx).val = match(FALSE);
				}
				break;
			case ID:
				enterOuterAlt(_localctx, 7);
				{
				setState(69);
				((ValueContext)_localctx).val = match(ID);
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

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 1:
			return expression_sempred((ExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expression_sempred(ExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 12);
		case 1:
			return precpred(_ctx, 11);
		case 2:
			return precpred(_ctx, 10);
		case 3:
			return precpred(_ctx, 9);
		case 4:
			return precpred(_ctx, 8);
		case 5:
			return precpred(_ctx, 7);
		case 6:
			return precpred(_ctx, 6);
		case 7:
			return precpred(_ctx, 5);
		case 8:
			return precpred(_ctx, 4);
		case 9:
			return precpred(_ctx, 3);
		case 10:
			return precpred(_ctx, 2);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001\"I\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0001\u0000\u0001\u0000\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0003\u0001\u0012\b\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0005\u00018\b\u0001\n\u0001\f\u0001;\t"+
		"\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u0003G\b"+
		"\u0003\u0001\u0003\u0000\u0001\u0002\u0004\u0000\u0002\u0004\u0006\u0000"+
		"\u0006\u0001\u0000\f\u000e\u0001\u0000\n\u000b\u0001\u0000\b\t\u0001\u0000"+
		"\u0011\u0014\u0001\u0000\u000f\u0010\u0002\u0000\u0003\u0004\n\u000bW"+
		"\u0000\b\u0001\u0000\u0000\u0000\u0002\u0011\u0001\u0000\u0000\u0000\u0004"+
		"<\u0001\u0000\u0000\u0000\u0006F\u0001\u0000\u0000\u0000\b\t\u0003\u0002"+
		"\u0001\u0000\t\u0001\u0001\u0000\u0000\u0000\n\u000b\u0006\u0001\uffff"+
		"\uffff\u0000\u000b\f\u0005\u0017\u0000\u0000\f\r\u0003\u0002\u0001\u0000"+
		"\r\u000e\u0005\u0018\u0000\u0000\u000e\u0012\u0001\u0000\u0000\u0000\u000f"+
		"\u0012\u0003\u0004\u0002\u0000\u0010\u0012\u0003\u0006\u0003\u0000\u0011"+
		"\n\u0001\u0000\u0000\u0000\u0011\u000f\u0001\u0000\u0000\u0000\u0011\u0010"+
		"\u0001\u0000\u0000\u0000\u00129\u0001\u0000\u0000\u0000\u0013\u0014\n"+
		"\f\u0000\u0000\u0014\u0015\u0007\u0000\u0000\u0000\u00158\u0003\u0002"+
		"\u0001\r\u0016\u0017\n\u000b\u0000\u0000\u0017\u0018\u0007\u0001\u0000"+
		"\u0000\u00188\u0003\u0002\u0001\f\u0019\u001a\n\n\u0000\u0000\u001a\u001b"+
		"\u0007\u0002\u0000\u0000\u001b8\u0003\u0002\u0001\u000b\u001c\u001d\n"+
		"\t\u0000\u0000\u001d\u001e\u0007\u0003\u0000\u0000\u001e8\u0003\u0002"+
		"\u0001\n\u001f \n\b\u0000\u0000 !\u0007\u0004\u0000\u0000!8\u0003\u0002"+
		"\u0001\t\"#\n\u0007\u0000\u0000#$\u0005\u0006\u0000\u0000$8\u0003\u0002"+
		"\u0001\b%&\n\u0006\u0000\u0000&\'\u0005\u0005\u0000\u0000\'8\u0003\u0002"+
		"\u0001\u0007()\n\u0005\u0000\u0000)*\u0005\u0007\u0000\u0000*8\u0003\u0002"+
		"\u0001\u0006+,\n\u0004\u0000\u0000,-\u0005\u0001\u0000\u0000-8\u0003\u0002"+
		"\u0001\u0005./\n\u0003\u0000\u0000/0\u0005\u0002\u0000\u000008\u0003\u0002"+
		"\u0001\u000412\n\u0002\u0000\u000023\u0005\u0015\u0000\u000034\u0003\u0002"+
		"\u0001\u000045\u0005\u0016\u0000\u000056\u0003\u0002\u0001\u000368\u0001"+
		"\u0000\u0000\u00007\u0013\u0001\u0000\u0000\u00007\u0016\u0001\u0000\u0000"+
		"\u00007\u0019\u0001\u0000\u0000\u00007\u001c\u0001\u0000\u0000\u00007"+
		"\u001f\u0001\u0000\u0000\u00007\"\u0001\u0000\u0000\u00007%\u0001\u0000"+
		"\u0000\u00007(\u0001\u0000\u0000\u00007+\u0001\u0000\u0000\u00007.\u0001"+
		"\u0000\u0000\u000071\u0001\u0000\u0000\u00008;\u0001\u0000\u0000\u0000"+
		"97\u0001\u0000\u0000\u00009:\u0001\u0000\u0000\u0000:\u0003\u0001\u0000"+
		"\u0000\u0000;9\u0001\u0000\u0000\u0000<=\u0007\u0005\u0000\u0000=>\u0003"+
		"\u0002\u0001\u0000>\u0005\u0001\u0000\u0000\u0000?G\u0005\u001c\u0000"+
		"\u0000@G\u0005\u001d\u0000\u0000AG\u0005\u001e\u0000\u0000BG\u0005\u001f"+
		"\u0000\u0000CG\u0005\u001a\u0000\u0000DG\u0005\u001b\u0000\u0000EG\u0005"+
		" \u0000\u0000F?\u0001\u0000\u0000\u0000F@\u0001\u0000\u0000\u0000FA\u0001"+
		"\u0000\u0000\u0000FB\u0001\u0000\u0000\u0000FC\u0001\u0000\u0000\u0000"+
		"FD\u0001\u0000\u0000\u0000FE\u0001\u0000\u0000\u0000G\u0007\u0001\u0000"+
		"\u0000\u0000\u0004\u001179F";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}