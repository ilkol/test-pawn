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

enum:				STATIC? ENUM tag? (IDENTIFIER)? enumIterator? CURLY_OPEN_BRACKET (enumMember (COMA enumMember)* COMA?)? CURLY_CLOSE_BRACKET SEMI?;
enumMember:			tag? IDENTIFIER (SQUARE_OPEN_BRACKET expresion SQUARE_CLOSE_BRACKET)? (ASSIGMENT expresion)?;
enumIterator:		OPEN_PARENTHESIS (ASSIGMENT_PLUS | ASSIGMENT_MULT | ASSIGMENT_LEFT) INTEGER CLOSE_PARENTHESIS;

varDeclaration:     (NEW varModifires*| varModifires+) variableDeclaration (COMA variableDeclaration)*;
variableDeclaration: tag? IDENTIFIER (SQUARE_OPEN_BRACKET expresion? SQUARE_CLOSE_BRACKET)* (ASSIGMENT (expresion | arrayInit))?;

functionDecl:		(funcDeclModif)? tag? IDENTIFIER functionDeclarationParams;
operatorOverload:	(funcDeclModif)? tag? OPERATOR canBeOverloaded functionDeclarationParams;
functionDeclarationParams: OPEN_PARENTHESIS (declParams (COMA declParams)*)? ellipse? CLOSE_PARENTHESIS (SEMI | statement | nativeAssigment);
nativeAssigment:	ASSIGMENT IDENTIFIER SEMI;
tag:				IDENTIFIER COLON;
pluralTag:			(CURLY_OPEN_BRACKET IDENTIFIER (COMA IDENTIFIER)* CURLY_CLOSE_BRACKET) COLON;

arrayIndex:			(SQUARE_OPEN_BRACKET (expresion CHAR?)? SQUARE_CLOSE_BRACKET) | (CURLY_OPEN_BRACKET (expresion CHAR?)? CURLY_CLOSE_BRACKET);

funcDeclModif:		funcModif | FORWARD | NATIVE;
funcModif:			STOCK | PUBLIC;

statement:			(((varDeclaration | enum | goto | return | cycleKeywords | exit  | assert |  sleep /*| state | emit*/ | compoundExpression) SEMI) | SEMI | processorLabel | compoundStatment |  ifStatement | cycles | switch ) BACKSLAH?;
compoundStatment:   CURLY_OPEN_BRACKET (statement)* CURLY_CLOSE_BRACKET;
assert: ASSERT expresion;
exit: EXIT compoundExpression;
goto: GOTO symbol;
sleep: SLEEP compoundExpression;
ifStatement: IF (condition | expresion THEN) statement (elseStatement)?;
elseStatement: ELSE statement;
return:				RETURN compoundExpression?;
condition: OPEN_PARENTHESIS compoundExpression CLOSE_PARENTHESIS;
switch:				SWITCH condition CURLY_OPEN_BRACKET (case)* default? CURLY_CLOSE_BRACKET;
case:				CASE case_list (COMA case_list)* COLON statement;
default:            DEFAULT COLON statement;
case_list:			expresion (PERIOD expresion)?;

arrayInit: CURLY_OPEN_BRACKET arrayInitMember (COMA arrayInitMember)* COMA? CURLY_CLOSE_BRACKET;
arrayInitMember: arrayInit | ellipse | expresion;


assigments:
    ASSIGMENT_OR |          // |=
    ASSIGMENT_XOR |          // ^=
	ASSIGMENT_AND |         // &=
    ASSIGMENT_PLUS |        // += 
    ASSIGMENT_MINUS |       // -= 
    ASSIGMENT_MULT |        // *= 
    ASSIGMENT_DIV |         // /= 
    ASSIGMENT_REMAINDE |    // %=
    ASSIGMENT_RIGHT_LOG |   // >>>= 
    ASSIGMENT_RIGHT |       // >>=
    ASSIGMENT_LEFT |        // <<=
	ASSIGMENT             // =
;

declParams:			(CONST)? (reference)? (pluralTag | tag)? IDENTIFIER (arrayIndex)* (ASSIGMENT (expresion|arrayInit))?;	
ellipse:			COMA? (pluralTag | tag)? PERIOD_FUNC;

reference:			BIT_AND;

varModifires:		CONST|STATIC|STOCK|PUBLIC;

number: 			integer | float | hex | rational | binary;
float: FLOAT;
integer: INTEGER;
hex: HEX;
rational: RATIONAL;
binary: BINARY;

canBeOverloaded:	arefmeticOperator | compareOperator | ASSIGMENT | BIT_COMPLEMEN;

arefmeticOperator:	PLUS | MINUS | MULTY | DIV | REMAINDE | INCREMENTS | DECREMENTS;
compareOperator:	NOT | EQUAL | NOTEQUAL | LESS | LARGER | LESSEQ | LARGEREQ;


cycles:				while | do | for;
do:					DO statement (WHILE condition)?;

while:				WHILE condition statement;
for:				FOR OPEN_PARENTHESIS first=forFirstExp? SEMI second=expresion? SEMI third=compoundExpression? CLOSE_PARENTHESIS statement;
forFirstExp:        varDeclaration|compoundExpression;


cycleKeywords:		BREAK|CONTINUE;


literal:			(string | number | bool_const | predefinedConstants);
bool_const:			TRUE | FALSE;
predefinedConstants: CELLBITS | CELLMAX | CELLMIN | CHARBITS | CHARMAX | CHARMIN | DEBUG | LINE | PAWN | UCHARMAX;

string:				(STRING | CHAR_STRING | SHARPSTRING) (string)*;

docs: docBlock;

docBlock: DocBlock;
// docLine: DocLine;
// hier14
assigmentExpression: ternaryExpression (assigments ternaryExpression)*;
// hier13
ternaryExpression: logicalOrExpression (QUESTION ternaryExpression COLON ternaryExpression)?;

// hier12
logicalOrExpression: logicalAndExpression (op=OR logicalAndExpression)*;
// hier11
logicalAndExpression: equalOrNotExpression (op=AND equalOrNotExpression)*;

// hier10
equalOrNotExpression: compareExpression (op=(EQUAL | NOTEQUAL) compareExpression)*;
// hier9
compareExpression: bitOrExpression (op=(LESSEQ | LARGEREQ | LESS | LARGER) bitOrExpression)*;

// hier8
bitOrExpression: xorExpression (op=BIT_OR xorExpression)*;
// hier7
xorExpression: bitAndExpression (op=BIT_XOR bitAndExpression)*;
// hier6
bitAndExpression: bitShiftExpression (op=BIT_AND bitShiftExpression)*;
// hier5
bitShiftExpression: additiveExpression  (op=(BIT_LEFT | BIT_RIGHT | BIT_RIGHT_LOG) additiveExpression )*;

// hier4
additiveExpression : multiplicativeExpression  (op=(PLUS | MINUS) multiplicativeExpression )*;
// hier3
multiplicativeExpression : prefixExpression (op=(MULTY | DIV | REMAINDE) prefixExpression)*;

// hier2
prefixExpression: 
	((INCREMENTS | DECREMENTS | BIT_COMPLEMEN | NOT | MINUS | tag) prefixExpression) |
	// ADDRESSOF symbol | 
	// ADDRESSOF OPEN_PARENTHESIS symbol CLOSE_PARENTHESIS |
	((/* ADDRESSOF |*/ DEFINED | SIZEOF | TAGOF | STATE /* | EMIT */ ) (literalOrSymbol | OPEN_PARENTHESIS literalOrSymbol CLOSE_PARENTHESIS)) |
	postfixExpression
;

postfixExpression: functionOrArrayExpression (INCREMENTS | DECREMENTS | CHAR)*;

// hier1
functionOrArrayExpression: 
	primaryExpression 
	(
		SQUARE_OPEN_BRACKET assigmentExpression SQUARE_CLOSE_BRACKET
		| CURLY_OPEN_BRACKET assigmentExpression CURLY_CLOSE_BRACKET
	)*
	(functionCallOperator)?
;

// аналог primary
primaryExpression: 
	OPEN_PARENTHESIS assigmentExpression (COMA assigmentExpression)* CLOSE_PARENTHESIS |
	literalOrSymbol
;

literalOrSymbol: symbol | literal;

compoundExpression: expresion (COMA expresion)*;
expresion: assigmentExpression;


functionCallOperator:
    OPEN_PARENTHESIS (functionArgument (COMA functionArgument)*)? CLOSE_PARENTHESIS
;
functionArgument: SKIP_PARAM | (('.' symbol ASSIGMENT)? expresion);
symbol: IDENTIFIER;







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
// DEFINE:		'define';
// ELSEIF:		'elseif';
// EMIT:		'emit';
// ENDIF:		'endif';
// ENDINPUT:	'endinput';
// ENDSCRIPT:	'endscript';
// // ERROR:		'error';
// // FILE: 		'file';
// INCLUDE:	'include';
// PRAGMA:		'pragma';
// SECTION:	'section';
// TRYINCLUDE:	'tryinclude';
// UNDEF:		'undef';

// DYNAMIC:	'dynamic';
// WARNING:	'warning';
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
SKIP_PARAM: '_';

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