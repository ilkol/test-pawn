grammar pawn;

/*
Объявление переменной может быть произведенно:
 * В любомй позиции, где стейтмент был бы валидным
 * Везде, где будет валидна имплементация или декларация функций
 * В первом стейтменте цикла for

Если переменная объявлена с помощь static внутри блока, то переменная будет работать и после окончания выполнения этого блока.
Если же statis перменная - глобальная, то она станет видна только в текущем файле.
 */

/* Содержание файла */
file:				processorLabel|((docs)*(declaration)*) EOF;

processorLabel:		IDENTIFIER':';

declaration:		(docs)*(functionDecl|operatorOverload|varDeclaration SEMI) | enum;

enum:				ENUM (IDENTIFIER)? enumIterator? CURLY_OPEN_BRACKET (enumMember (COMA enumMember)*  COMA?)? CURLY_CLOSE_BRACKET SEMI?;
enumMember:			variable (ASSIGMENT expresion)?;
enumIterator:		OPEN_PARENTHESIS (ASSIGMENT_PLUS | ASSIGMENT_MULT | ASSIGMENT_LEFT) INTEGER CLOSE_PARENTHESIS;

varDeclaration:     (NEW varModifires*| varModifires+) (variable | varInit) (COMA (variable | varInit))*;
varInit:			variable ASSIGMENT (expresion | arrayInit);
functionDecl:		(funcDeclModif)? tag? IDENTIFIER functionDeclarationParams;
operatorOverload:	(funcDeclModif) tag? OPERATOR canBeOverloaded functionDeclarationParams;
functionDeclarationParams: OPEN_PARENTHESIS (declParams (COMA declParams)*)? ellipse? CLOSE_PARENTHESIS (SEMI | statement | nativeAssigment);
nativeAssigment:	ASSIGMENT IDENTIFIER SEMI;
tag:				IDENTIFIER COLON;
pluralTag:			(CURLY_OPEN_BRACKET IDENTIFIER (COMA IDENTIFIER)* CURLY_CLOSE_BRACKET) COLON;

variable:			tag? IDENTIFIER (arrayIndex)*;

arrayIndex:			(SQUARE_OPEN_BRACKET (expresion CHAR?)? SQUARE_CLOSE_BRACKET) | (CURLY_OPEN_BRACKET (expresion CHAR?)? CURLY_CLOSE_BRACKET);

funcDeclModif:		funcModif | FORWARD | NATIVE;
funcModif:			STOCK | PUBLIC;

statement:			((expresion | assert | cycleKeywords | exit | goto | sleep | return | varDeclaration) SEMI | processorLabel | compoundStatment | cycles | ifStatement | switch ) BACKSLAH?;
compoundStatment:   CURLY_OPEN_BRACKET (statement)* CURLY_CLOSE_BRACKET;
assert: ASSERT expresion;
exit: EXIT expresion;
goto: GOTO expresion;
sleep: SLEEP expresion;
ifStatement: IF (condition | expresion THEN) statement (elseStatement)?;
elseStatement: ELSE statement;
return:				RETURN expresion?;
condition: OPEN_PARENTHESIS expresion CLOSE_PARENTHESIS;
switch:				SWITCH condition CURLY_OPEN_BRACKET (case)* default? CURLY_CLOSE_BRACKET;
case:				CASE case_list (COMA case_list)* COLON statement;
default:            DEFAULT COLON statement;
case_list:			(literal|IDENTIFIER) range?;
range:				PERIOD literal;

arrayInit:		CURLY_OPEN_BRACKET arrayInitMember (COMA arrayInitMember)* CURLY_CLOSE_BRACKET;
arrayInitMember:	tag? (MINUS? IDENTIFIER | MINUS? number | string) | (arrayInit);


assigments:
	ASSIGMENT |             // =
    ASSIGMENT_PLUS |        // += 
    ASSIGMENT_MINUS |       // -= 
    ASSIGMENT_MULT |        // *= 
    ASSIGMENT_DIV |         // /= 
    ASSIGMENT_REMAINDE |    // %=
    ASSIGMENT_RIGHT |       // >>=
    ASSIGMENT_RIGHT_LOG |   // >>>= 
    ASSIGMENT_LEFT |        // <<=
	ASSIGMENT_AND |         // &=
    ASSIGMENT_OR |          // |=
    ASSIGMENT_XOR           // ^=
;

declParams:			(CONST)? (reference)? pluralTag? IDENTIFIER (arrayIndex)* (ASSIGMENT (expresion|arrayInit))?;	
ellipse:			COMA? pluralTag? PERIOD_FUNC;

reference:			BIT_AND;

varModifires:		CONST|STATIC|STOCK|PUBLIC;

number: 			integer | float | hex | rational | binary;
float: FLOAT;
integer: INTEGER;
hex: HEX;
rational: RATIONAL;
binary: BINARY;

canBeOverloaded:	arefmeticOperator | compareOperator | ASSIGMENT;

arefmeticOperator:	PLUS | MINUS | MULTY | DIV | REMAINDE | INCREMENTS | DECREMENTS;
compareOperator:	NOT | EQUAL | NOTEQUAL | LESS | LARGER | LESSEQ | LARGEREQ;


cycles:				while | for | do;
do:					DO statement (WHILE condition)?;

while:				WHILE condition statement;
for:				FOR OPEN_PARENTHESIS first=forFirstExp? SEMI second=expresion? SEMI third=expresion? CLOSE_PARENTHESIS statement;
forFirstExp:        varDeclaration|expresion;


cycleKeywords:		BREAK|CONTINUE;


literal:			(string | number | bool_const | predefinedConstants);
bool_const:			TRUE | FALSE;
predefinedConstants: CELLBITS | CELLMAX | CELLMIN | CHARBITS | CHARMAX | CHARMIN | DEBUG | LINE | PAWN | UCHARMAX;

string:				(STRING | CHAR_STRING | SHARPSTRING) (string)*;

docs: docBlock;

docBlock: DocBlock;
// docLine: DocLine;

expresion: 
    tagableExpression
    (CHAR? | ternarOperator | chainedRelationalOperator | binarExpressionOperator)
;
tagableExpression: 
	(literal |
    symbol |
    functionCallOperator |
    OPEN_PARENTHESIS expresion CLOSE_PARENTHESIS |
    unarOperator |
    binarOperator)
;
ternarOperator: QUESTION expresion COLON expresion;
chainedRelationalOperator: (chainedRelationalOperators expresion)+;
binarExpressionOperator: operator=binarExpressionOperators right=expresion;

unarOperator:
    postIncrement |         // v++ 
    preIncrement |          // ++v 
    postDecrement |         // v--  
    preDecrement |          // --v 

    (preExpresionOperator expresion) |
    (preSymbolOperator symbol)
;

preExpresionOperator:
	BIT_COMPLEMEN|		// ~e
	MINUS|				// -e
	NOT	|				// !e
	SIZEOF				// sizeof e
;
preSymbolOperator:
	DEFINED|			// defined e
	STATE|				// state e
	TAGOF				// tagof e
;


binarOperator:

    assigmentOperator |     // v = e

	arrayIndexOperator |
    tagOperator             // tagname : e

;

arrayIndexOperator:
	symbol (
		arrayOperatorIndex |    // a[e]    
		arrayOperatorChar     // a{e}
	)+    
;

binarExpressionOperators:
    PLUS |                  // e1 + e2
    MINUS |                 // e1 - e2
    MULTY |                 // e1 * e2
    DIV |                   // e1 / e2
    REMAINDE |              // e1 % e2

    BIT_RIGHT |             // e1 >> e2
    BIT_RIGHT_LOG |         // e1 >>> e2
    BIT_LEFT |              // e1 << e2
    BIT_AND |               // e1 & e2
    BIT_OR |                // e1 | e2
    BIT_XOR |               // e1 ^ e2

    EQUAL |                 // e1 == e2
    NOTEQUAL |              // e1 != e2

    OR |                    // e1 || e2
    AND |                   // e1 && e2

    COMA |                  // e1 , e2

    ASSIGMENT |             // e1 = e2
    ASSIGMENT_PLUS |        // e1 += e2
    ASSIGMENT_MINUS |       // e1 -= e2
    ASSIGMENT_MULT |        // e1 *= e2
    ASSIGMENT_DIV |         // e1 /= e2
    ASSIGMENT_REMAINDE |    // e1 %= e2
    ASSIGMENT_RIGHT |       // e1 >>= e2
    ASSIGMENT_RIGHT_LOG |   // e1 >>>= e2
    ASSIGMENT_LEFT |        // e1 <<= e2
	ASSIGMENT_AND |         // e1 &= e2
    ASSIGMENT_OR |          // e1 |= e2
    ASSIGMENT_XOR           // e1 ^= e2
;


assigmentOperator:
    lvalue ASSIGMENT expresion     // v = e
;


arrayOperatorIndex: 
    (SQUARE_OPEN_BRACKET expresion? SQUARE_CLOSE_BRACKET)
;
arrayOperatorChar: 
    (CURLY_OPEN_BRACKET expresion? CURLY_CLOSE_BRACKET)
;
functionCallOperator:
    IDENTIFIER OPEN_PARENTHESIS (expresion (COMA expresion)*)? CLOSE_PARENTHESIS
;
tagOperator:
    tag tagableExpression
;

symbol: IDENTIFIER;


lvalue: symbol | arrayIndexOperator;

postIncrement: lvalue INCREMENTS;
preIncrement: INCREMENTS lvalue;
postDecrement: lvalue DECREMENTS;
preDecrement: DECREMENTS lvalue;

chainedRelationalOperators: 
    LESS |      // e1 < e2
    LESSEQ |    // e1 <= e2
    LARGER |    // e1 > e2
    LARGEREQ    // e1 >= e2
;








OPEN_PARENTHESIS: '(';
CLOSE_PARENTHESIS: ')';

CURLY_OPEN_BRACKET: '{';
CURLY_CLOSE_BRACKET: '}';

SQUARE_OPEN_BRACKET: '[';
SQUARE_CLOSE_BRACKET: ']';

fragment HASHTAG:	'#';

COMA:		',';
SEMI:		';';

ASSIGMENT:			'=';
ASSIGMENT_PLUS:		'+=';
ASSIGMENT_MINUS:	'-=';
ASSIGMENT_MULT:		'*=';
ASSIGMENT_DIV:		'/=';
ASSIGMENT_REMAINDE:	'%=';
ASSIGMENT_AND:		'&=';
ASSIGMENT_OR:		'|=';
ASSIGMENT_XOR:		'^=';
ASSIGMENT_RIGHT:	'>>=';
ASSIGMENT_RIGHT_LOG:'>>>=';
ASSIGMENT_LEFT:		'<<=';


PLUS:		'+';
MINUS:		'-';
MULTY:		'*';
DIV:		'/';
REMAINDE:	'%';
INCREMENTS:	'++';
DECREMENTS:	'--';

EQUAL:		'==';
NOTEQUAL:	'!=';
LESS:		'<';
LARGER:		'>';
LESSEQ:		'<=';
LARGEREQ:	'>=';

QUESTION:	'?';
COLON:		':';

OR:			'||';
AND:		'&&';
NOT:		'!';

BIT_AND:	'&';
BIT_OR:		'|';
BIT_XOR:	'^';
BIT_COMPLEMEN: '~';
BIT_RIGHT:	'>>';
BIT_LEFT:	'<<';
BIT_RIGHT_LOG:	'>>>';

PERIOD:		'..';
PERIOD_FUNC:	'...';

ASSERT:		'assert';
EXIT:		'exit';
GOTO:		'goto';
SLEEP:		'sleep';
STATE:		'state';
RETURN:		'return';

NEW:		'new';
ENUM:		'enum';

CONST:		'const';
STATIC:		'static';
STOCK:		'stock';

FORWARD:	'forward';
NATIVE:		'native';
PUBLIC:		'public';

OPERATOR:	'operator';

IF:			'if';
THEN:		'*then';
ELSE:		'else';

SWITCH:		'switch';
CASE:		'case';
DEFAULT:	'default';

WHILE:		'while';
FOR:		'for';
DO:			'do';
CONTINUE:	'continue';
BREAK:		'break';

CHAR:		'char';
DEFINED:	'defined';
SIZEOF:		'sizeof';
TAGOF:		'tagof';

//команды препроцессора
DEFINE:		'define';
ELSEIF:		'elseif';
EMIT:		'emit';
ENDIF:		'endif';
ENDINPUT:	'endinput';
ENDSCRIPT:	'endscript';
// ERROR:		'error';
FILE: 		'file';
INCLUDE:	'include';
PRAGMA:		'pragma';
SECTION:	'section';
TRYINCLUDE:	'tryinclude';
UNDEF:		'undef';

DYNAMIC:	'dynamic';
WARNING:	'warning';
// DISABLE:	'disable';
// ENABLE:		'enable';

TRUE:		'true';
FALSE:		'false';
CELLBITS:   'cellbits';
CELLMAX:    'cellmax';
CELLMIN:    'cellmin';
CHARBITS:   'charbits';
CHARMAX:    'charmax';
CHARMIN:    'charmin';
DEBUG:      'debug';
LINE:       '__line';
PAWN:       '__Pawn';
UCHARMAX:   'ucharmax';


SHARPSTRING:		HASHTAG CHARS* HASHTAG?;
STRING:				'"' CHARS* '"';
CHAR_STRING:				'\'' CCHARS* '\'';

fragment CCHARS:				~ ['\\\r\n] | ESCAPESEQUENCE ;
fragment CHARS:				~ ["\\\r\n] | ESCAPESEQUENCE ;
fragment SCHARS:				~ [>\\\r\n];
fragment ESCAPESEQUENCE: SIMPLEESCAPESEQUENCE;
fragment SIMPLEESCAPESEQUENCE:
    '\\\''
    | '\\"'
    | '\\?'
    | '\\\\'
    | '\\a'
    | '\\b'
    | '\\f'
    | '\\n'
    | '\\r'
    | '\\' ('\r' '\n'? | '\n')
    | '\\t'
    | '\\v'
	| '\\0'
;

IDENTIFIER:		[@a-zA-Z_][@a-zA-Z0-9_]*;

BINARY:			'0b'[01_]+;
HEX:			'0x'[a-fA-F0-9_]+;
INTEGER:		[0-9_]+;
FLOAT:			[0-9_]+'.'[0-9_]+;
RATIONAL:		[0-9_]+'.'[0-9_]+'e'[0-9]+;

BACKSLAH: '\\';

Whitespace: [ \t]+ -> skip;

Newline: ('\r' '\n'? | '\n') -> skip;

DocBlock: '/**' .*? '*/';
// DocLine: '///' ~ [\r\n]*;

BlockComment: '/*' .*? '*/' -> skip;

LineComment: '//' ~ [\r\n]* -> skip;