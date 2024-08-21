grammar pawn;

/* Содержание файла */
file:				(declaration)* EOF;

declaration:		(functionDecl|operatorOverload|var_definition SEMI) | enum;

enum:				ENUM (IDENTIFIER)? enumIterator? CURLY_OPEN_BRACKET (enumMember (COMA enumMember)*  COMA?)? CURLY_CLOSE_BRACKET SEMI?;
enumMember:			variable (ASSIGMENT expresion)?;
enumIterator:		OPEN_PARENTHESIS (ASSIGMENT_PLUS | ASSIGMENT_MULT | ASSIGMENT_LEFT) INTEGER CLOSE_PARENTHESIS;

var_definition: 	((NEW varModifires*) | (varModifires+)) (variable | assigment) (COMA (variable | assigment))*;
functionDecl:		(funcDeclModif)? tag? IDENTIFIER OPEN_PARENTHESIS (declParams (COMA declParams)* ellipse?)? CLOSE_PARENTHESIS (SEMI | codeBlock | nativeAssigment);
operatorOverload:	(funcDeclModif) tag? OPERATOR canBeOverloaded OPEN_PARENTHESIS (declParams (COMA declParams)* ellipse?)? CLOSE_PARENTHESIS (SEMI | codeBlock | nativeAssigment);
nativeAssigment:	ASSIGMENT IDENTIFIER SEMI;
tag:				(IDENTIFIER|(CURLY_OPEN_BRACKET IDENTIFIER (COMA IDENTIFIER)* CURLY_CLOSE_BRACKET)) COLON;

variable:			tag? IDENTIFIER (arrayIndex)*;

arrayIndex:			SQUARE_OPEN_BRACKET (expresion)? SQUARE_CLOSE_BRACKET;

funcDeclModif:		funcModif | FORWARD | NATIVE;
funcModif:			STOCK | PUBLIC;

/* Какое-то утверждение */
statement:			((var_definition|assigment|functionCall|return) SEMI) | controlStatments;
controlStatments:	if_statement | cycles | switch;
/* Объявление переменной */

assigment:			variable assigments (expresion | arrayInit) (assigments (expresion | arrayInit))*;

arrayInit:		CURLY_OPEN_BRACKET arrayInitMember (COMA arrayInitMember)* CURLY_CLOSE_BRACKET;
arrayInitMember:	tag? (IDENTIFIER | number | string) | (arrayInit);


assigments:
	ASSIGMENT | ASSIGMENT_PLUS | ASSIGMENT_MINUS | ASSIGMENT_MULT | ASSIGMENT_DIV | ASSIGMENT_REMAINDE |
	ASSIGMENT_AND | ASSIGMENT_OR | ASSIGMENT_XOR | ASSIGMENT_RIGHT | ASSIGMENT_RIGHT_LOG | ASSIGMENT_LEFT;

grouping:			tag? OPEN_PARENTHESIS expresion CLOSE_PARENTHESIS;
constGrouping:		tag? OPEN_PARENTHESIS constExpresion CLOSE_PARENTHESIS;

expresion:		(preOperators)? (rValue operation? | grouping | ternarOperator);
constExpresion:	(preOperators)? (varOrLiteral operation? | constGrouping | arrayInit);

ternarOperator:	(rValue operation? | grouping) QUESTION expresion COLON expresion;

preOperators:	NOT | MINUS | INCREMENTS | DECREMENTS | SIZEOF;

operation:			operator expresion?;
varOrLiteral:		(literal | variable);

declParams:			(CONST)? (reference)? variable (ASSIGMENT (constExpresion | (sizeof (variable | OPEN_PARENTHESIS variable CLOSE_PARENTHESIS))))?;	
ellipse:			COMA tag? PERIOD_FUNC;

reference:			BIT_AND;

varModifires:		CONST|STATIC|STOCK|PUBLIC;

rValue:			    (varOrLiteral | functionCall | grouping);
constRValue:		(varOrLiteral | constGrouping);
sizeof:				SIZEOF;

number: 			integer | float | hex;
integer:			MINUS? INTEGER;
float:				MINUS? FLOAT;
hex:				HEX;

operator:			arefmeticOperator | logicOperator | bitwiseOperator;

canBeOverloaded:	arefmeticOperator | compareOperator | ASSIGMENT;

arefmeticOperator:	PLUS | MINUS | MULTY | DIV | REMAINDE | INCREMENTS | DECREMENTS;
logicOperator:		OR | AND | compareOperator;
compareOperator:	NOT | EQUAL | NOTEQUAL | LESS | LARGER | LESSEQ | LARGEREQ;
bitwiseOperator:	BIT_AND | BIT_OR | BIT_RIGHT | BIT_LEFT  | BIT_XOR | BIT_COMPLEMEN | BIT_RIGHT_LOG;



if_statement:		IF condition
						codeBlock
					(else_statement)?;
else_statement: 	ELSE (if_statement | codeBlock);

switch:				SWITCH condition CURLY_OPEN_BRACKET (case)* default? CURLY_CLOSE_BRACKET;
case:				CASE case_list (COMA case_list)* COLON codeBlock;
default:            DEFAULT COLON codeBlock;
case_list:			(IDENTIFIER | number) range?;
range:				PERIOD (IDENTIFIER | number);

condition:			OPEN_PARENTHESIS expresion CLOSE_PARENTHESIS;

codeBlock:			CURLY_OPEN_BRACKET (statement)* CURLY_CLOSE_BRACKET | statement;
return:				RETURN expresion?;
cycles:				while | for | do;
do:					DO cycleBody (WHILE condition)?;

while:				WHILE condition cycleBody;
for:				FOR OPEN_PARENTHESIS var_definition SEMI expresion SEMI expresion CLOSE_PARENTHESIS
					cycleBody;
cycleBody:			
	cycleKeywords | 
	CURLY_OPEN_BRACKET (statement|cycleKeywords)* CURLY_CLOSE_BRACKET | 
	statement;

cycleKeywords:		(BREAK|CONTINUE) SEMI;


literal:			tag? (string | number | bool_const);
bool_const:			TRUE | FALSE;

string:				(STRING | SHARPSTRING) (string)*;
angledString:		ANGLEDSTRING;

// path:				PATH;

functionCall:		IDENTIFIER OPEN_PARENTHESIS (expresion (COMA expresion)*)? CLOSE_PARENTHESIS;

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
LINE:		'line';
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



SHARPSTRING:		HASHTAG CHARS* HASHTAG?;
STRING:				'"' CHARS* '"';
// ANGLEDSTRING:		'<' SCHARS* '>';

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
;

IDENTIFIER:		[@a-zA-Z_][@a-zA-Z0-9_]*;

HEX:			'0x'[a-fA-F0-9]+;
INTEGER:		[0-9]+;
FLOAT:			[0-9]+'.'[0-9]+;

Whitespace: [ \t]+ -> skip;

Newline: ('\r' '\n'? | '\n') -> skip;

BlockComment: '/*' .*? '*/' -> skip;

LineComment: '//' ~ [\r\n]* -> skip;