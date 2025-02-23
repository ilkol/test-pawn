import { Define } from "./Define";

const substindex = new Map<string, Define[]>();

export function testPreprocess(code: string, define: Define) {
	try {
		substindex.set(define.prefix[0], [define]);
	
		return substallpatterns(code);
	} catch(e) {
		console.error(e);
	}
	return "";
}
export function findFullMultyLineDerictive(input: string) {
	let stream = new LikeCCharStream(input);
		

	while(stream.char === ' ') {
		stream.curIndex++;
	}
	if(stream.char === '\0') {
		return {rest: "", endlCount: 0, fullLength: 0};
	}

	let result = "";


	let char;
		
	let endlCount = 0;

	while(stream.getChar() !== '\0') {
		char = stream.getChar();
		if(char === "\r" || char === "\n") {
			if(stream.getShiftChar(-1) !== '\\') {
				break;
			}
			endlCount++;
		}
		result += char;
		stream.curIndex++;
	}

	return {rest: result, endlCount, fullLength: stream.curIndex};
}

class LikeCCharStream {
	public curIndex: number = 0;

	get char(): string {
		return this.getShiftChar();
	}
	public getChar(): string {
		return this.char;
	}
	public substr(length: number, shift: number = 0): string {
		return this._source.substring(this.curIndex + shift, this.curIndex + shift + length);
	}

	public get source(): string {
		return this._source;
	}

	public compare(str: string) {
		for(let i = 0, index = this.curIndex; i < str.length; i++, index++) {
			if(this._source.length <= index) {
				return false;
			}
			if(this._source[index] !== str[i]) {
				return false
			}
		}
		return true;
	}

	public strdel(length: number) {
		const preStr = this._source.substring(0,this.curIndex);
		if(length >= this._source.length) {
			this._source = preStr;
		}
		else {
			const postStr = this._source.substring(this.curIndex + length);
			this._source = preStr + postStr;
		}
	}
	public strIns(str: string, shift: number = 0) {
		const preStr = this._source.substring(0,this.curIndex + shift);
		const postStr = this._source.substring(this.curIndex + shift);
		this._source = preStr + str + postStr;
	}

	public getShiftChar(shift: number = 0) {
		let index = this.curIndex + shift;
		if(this._source.length <= index) {
			return '\0';
		}
		return this._source[index];
	}

	public constructor(private _source: string) {

	}
}

function substallpatterns(line: string) {
	let 
		start: number,
		end: number,
		prefixlen: number,
		subst: Define|null = null
	;
	
	let stream = new LikeCCharStream(line);
	

	// Обход строки до ее конца
	while(stream.char !== '\0') {
		// Поиск начала префикса макроса
		while (!alpha(stream.char) && stream.char !== '\0') {
			// Пропуск строк
			if (isStringStrating(stream)) {
				stream = skipstring(stream);
				if (stream.char === '\0') {
					break;        /* abort loop on error */
				}
			}
			stream.curIndex++;          /* skip non-alphapetic character (or closing quote of a string) */
		}
		if (stream.char === '\0') {
			break; /* abort loop on error */
		}
		/* if matching the operator "defined", skip it plus the symbol behind it */
        if (stream.compare("defined") && stream.getShiftChar(7) <= ' ') {
			stream.curIndex += 7; /* skip "defined" */
			/* skip white space & parantheses */
			while ((stream.getChar() <= ' ' && stream.getChar() !== '\0') || stream.getChar() === '(') {
				stream.curIndex++;
			}
			/* skip the symbol behind it */
			while (alphanum(stream.getChar())) {
				stream.curIndex++;
			}
			/* drop back into the main loop */
			continue;
		}
		/* get the prefix (length), look for a matching definition */
        prefixlen = 0;
		while (alphanum(stream.getShiftChar(prefixlen))) {
			prefixlen++;
		} 
		if(prefixlen <= 0) {
			throw new Error("");
		}
		
		subst = find_subst(stream, prefixlen);
		if (subst != null) {
			/* properly match the pattern and substitute */
			if (!substpattern(stream, subst))
				stream.curIndex += prefixlen;      /* match failed, skip this prefix */
			/* match succeeded: do not update "start", because the substitution text
			 * may be matched by other macros
			 */
		}
		else {
			stream.curIndex += prefixlen;        /* no macro with this prefix, skip this prefix */
		}
	}

	return stream.source;
}

let sc_needsemicolon = true;

function substpattern(stream: LikeCCharStream, define: Define)
{
    let prefixlen: number;
	let instring: number;

    /* pattern prefix matches; match the rest of the pattern, gather
     * the parameters
     */
	let args = [];
	let arg = 0;
    let sourceShift = define.prefixLen;
    let pattern = new LikeCCharStream(define.postPrefix);
    let match = 1;         /* so far, pattern matches */
    while (match && stream.getShiftChar(sourceShift) != '\0' && pattern.char != '\0') {
		if (pattern.char == '%') {
			pattern.curIndex++;
            if (isdigit(pattern.getChar())) {
                arg = +pattern.getChar();
				
				if(!(arg >= 0 && arg <= 9)) {
					throw new Error("");
				}
				pattern.curIndex++;          /* skip parameter id */
				if(!(pattern.getChar() != '\0')) {
					throw new Error("");	
				}
                /* match the source string up to the character after the digit
                 * (skipping strings in the process
                 */
				let e = new LikeCCharStream(stream.source);
				e.curIndex = stream.curIndex + sourceShift;
                while (e.char != pattern.char && e.char != '\0' && e.char != '\n') {
					// console.log(e.getChar());

                    if (isStringStrating(e))              /* skip strings */
                        e = skipstring(e);
                    else if (/\(\{\[/.exec(e.char))    /* skip parenthized groups */
                        e = skippgroup(e);
                    if (e.char != '\0') {
                        e.curIndex++;      /* skip non-alphapetic character (or closing quote of
											* a string, or the closing paranthese of a group) */
					}
                }
                /* store the parameter (overrule any earlier) */
				let len = e.curIndex - stream.curIndex;
				args[arg] = (stream.substr(len - sourceShift, sourceShift));
                /* character behind the pattern was matched too */
                if (e.char == pattern.char) {
					sourceShift = len + 1;
                }
                else if (e.char == '\n' && pattern.getChar() == ';' && pattern.getShiftChar(1) == '\0' && !sc_needsemicolon) {
                    sourceShift = len;    /* allow a trailing ; in the pattern match to end of line */
                }
                else {
                    match = 0;
                    sourceShift = len;
                } /* if */
                pattern.curIndex++;
            }
            else {
                match = 1;
            } /* if */
        }
        else if (pattern.char == ';' && pattern.getShiftChar(1) == '\0' && !sc_needsemicolon) {
            /* source may be ';' or end of the line */
            while (stream.getShiftChar(sourceShift) <= ' ' && stream.getShiftChar(sourceShift) != '\0')
                stream.curIndex++;          /* skip white space */
            if (stream.getShiftChar(sourceShift) != ';' && stream.getShiftChar(sourceShift) != '\0')
                match = 0;
            pattern.curIndex++;            /* skip the semicolon in the pattern */
        }
        else {
            let ch: number;
            /* skip whitespace between two non-alphanumeric characters, except
             * for two identical symbols
             */
            if (!alphanum(pattern.char) && pattern.getShiftChar(1) != pattern.char)
                while (stream.getShiftChar(sourceShift) <= ' ' && stream.getShiftChar(sourceShift) != '\0')
                    sourceShift++;                  /* skip white space */
            ch = litchar(pattern, 0);         /* this increments "p" */
            if (stream.getShiftChar(sourceShift).charCodeAt(0) != ch)
                match = 0;
            else
				sourceShift++;                    /* this character matches */
        } 
    }

    if (match && pattern.char == '\0') {
        /* if the last character to match is an alphanumeric character, the
         * current character in the source may not be alphanumeric
         */
        if (alphanum(pattern.getShiftChar(-1)) && alphanum(stream.getShiftChar(sourceShift)))
            match = 0;
    } /* if */

    if (match) {
        /* calculate the length of the substituted string */
        instring = 0;
        for (let e = new LikeCCharStream(define.replacement), len = 0; e.char != '\0'; e.curIndex++) {
            if (e.getChar() == '%' && isdigit(e.getShiftChar(1)) && !instring) {
                let argNum = +e.getShiftChar(1);
				let arg = args[argNum];
                if (arg)
                    len += arg.length;
                else
                    len += 2;     /* copy '%' plus digit */
				e.curIndex++;          /* skip %, digit is skipped later */
            }
            else {
                if (e.getChar() == '"')
                    instring = instring > 0 ? 0 : 1;
                len++;
            }
        }
        /* substitute pattern */
		instring = 0;
		stream.strdel(sourceShift);
		sourceShift = 0;
		for (let e = new LikeCCharStream(define.replacement); e.char != '\0'; e.curIndex++) {
			if (e.getChar() == '%' && isdigit(e.getShiftChar(1)) && !instring) {
				let argNum = +e.getShiftChar(1);
				let arg = args.at(argNum);
				if (arg !== undefined) {

					stream.strIns(arg, sourceShift);
					sourceShift += arg.length;
				}
				else {
					throw new Error("236"); /* parameter does not exist, incorrect #define pattern */
					stream.strIns(e.substr(2), sourceShift);
					sourceShift += 2;
				} /* if */
				e.curIndex++;          /* skip %, digit is skipped later */
			}
			else {
				if (e.char == '"')
					instring = instring > 0 ? 0 : 1;
				stream.strIns(e.substr(1), sourceShift);
				sourceShift++;
			}
		}
    }


    return match;
}

function skippgroup(stream: LikeCCharStream): LikeCCharStream
{
    let nest = 0;
    let open = stream.char;
    let close;

    switch (open) {
    case '(':
        close = ')';
        break;
    case '{':
        close = '}';
        break;
    case '[':
        close = ']';
        break;
    case '<':
        close = '>';
        break;
    default:
		throw new Error();
	}/* switch */

    stream.curIndex++;
    while (stream.char != close || nest > 0) {
        if (stream.char == open)
            nest++;
        else if (stream.char == close)
            nest--;
        else if (isStringStrating(stream))
            stream = skipstring(stream);
        if (stream.char == '\0')
            break;
        stream.curIndex++;
    } /* while */
    return stream;
}


function find_subst(stream: LikeCCharStream, len: number)
{
    let item = substindex.get(stream.char);
    return item != null ? find_stringpair(item, stream, len) : null;
}

function find_stringpair(array: Define[], stream: LikeCCharStream, matchlength: number): Define|null
{
	for(let define of array) {
		if (matchlength !== define.prefixLen) {
			continue;
		}
		if (stream.compare(define.prefix)) {
			return define;
		}
	};
    return null;
}

function alphanum(c: string): boolean
{
    return (alpha(c) || isdigit(c));
}

function skipstring(stream: LikeCCharStream)
{
    let 
    	flags: number = 0
	;

    while (stream.char == '!' || stream.char == '\\') {
        if (stream.char == '\\')
            flags = 1;
        stream.curIndex++;
    }

	let endquote : string = stream.char;

	// Пропускаем открывающую ковычку
	stream.curIndex++;
    while (stream.char !== endquote && stream.char !== '\0') {
        litchar(stream, flags);

	}
    return stream;
}

function litchar(lptr: LikeCCharStream, flags: number): number
{
    let c = 0;
    let cptr: LikeCCharStream = new LikeCCharStream(lptr.source);
	cptr.curIndex = lptr.curIndex;

	if ((flags & 1) != 0 || cptr.char != '\\') {  /* no escape character */
            c = cptr.char.charCodeAt(0);
            cptr.curIndex += 1;
    }
    else {
        cptr.curIndex += 1;
        if (cptr.char == "\\") {
            c = cptr.char.charCodeAt(0);          /* \\ == \ (the escape character itself) */
            cptr.curIndex += 1;
        }
        else {
            switch (cptr.getChar()) {
            case 'a':         /* \a == audible alarm */
                c = 7;
                cptr.curIndex += 1;
                break;
            case 'b':         /* \b == backspace */
                c = 8;
				cptr.curIndex += 1;
                break;
            case 'e':         /* \e == escape */
                c = 27;
                cptr.curIndex += 1;
                break;
            case 'f':         /* \f == form feed */
                c = 12;
                cptr.curIndex += 1;
                break;
            case 'n':         /* \n == NewLine character */
                c = 10;
                cptr.curIndex += 1;
                break;
            case 'r':         /* \r == carriage return */
                c = 13;
                cptr.curIndex += 1;
                break;
            case 't':         /* \t == horizontal TAB */
                c = 9;
                cptr.curIndex += 1;
                break;
            case 'v':         /* \v == vertical TAB */
                c = 11;
                cptr.curIndex += 1;
                break;
            case 'x':
                cptr.curIndex += 1;
                c = 0;
                while (ishex(cptr.getChar())) {
                    if (isdigit(cptr.getChar()))
                        c = (c << 4) + (cptr.getChar().charCodeAt(0) - '0'.charCodeAt(0));
                    else
                        c = (c << 4) + (cptr.getChar().toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0) + 10);
					cptr.curIndex++;
                }
                if (cptr.getChar() == ';')
                    cptr.curIndex++;       /* swallow a trailing ';' */
                break;
            case '\'':        /* \' == ' (single quote) */
            case '"':         /* \" == " (single quote) */
            case '%':         /* \% == % (percent) */
                c = cptr.getChar().charCodeAt(0);
                cptr.curIndex += 1;
                break;
            case '#':
            case ',':
            case ';':
            case ')':
            case '}':
                if (flags & 4) {
                    c = cptr.getChar().charCodeAt(0);
                    cptr.curIndex += 1;
                }
                else {
					throw new Error("27"); /* invalid character constant - only valid in stringize */
                }
                break;
			case '\r':
				c = 13;
				break;
			case '\n':
				c = 10;
				break;
            default:
                if (isdigit(cptr.getChar())) {   /* \ddd */
                    c = 0;
                    while (cptr.getChar() >= '0' && cptr.getChar() <= '9') {  /* decimal! */
						c = c * 10 + cptr.getChar().charCodeAt(0) - '0'.charCodeAt(0);
						cptr.curIndex++;
					}
                    if (cptr.getChar() == ';')
						cptr.curIndex++; /* swallow a trailing ';' */
                }
                else {
					throw new Error("27");    /* invalid character constant */
                }
            }
        }
    }
	lptr.curIndex = cptr.curIndex;
	if(!(c >= 0)) {
		throw new Error("");
	}
    return c;
}

function ishex(c: string): boolean
{
	return /[0-9a-fA-F]/.test(c);
    // return (c >= '0' && c <= '9') || (c >= 'a' && c <= 'f') || (c >= 'A' && c <= 'F');
}
function isdigit(c: string): boolean
{
	return /\d/.test(c);
}


function alpha(c: string): boolean
{
    return /[a-zA-Z_@]/.test(c);
}
function isStringStrating(stream: LikeCCharStream): boolean
{
	let c = stream.char;
    if (c === '\"' || c === '\'') {
		return true;                        /* "..." */
	}
	
	if (c === '!') {
		stream.curIndex++;
		if (stream.char === '\"' || stream.char === '\'') {
			return true;                      /* !"..." */
		}
		// if (stream.char === '\\') {
		// 	stream.curIndex++;
		// 	// Пришлось делать костыли ввиде getChar, потому что ебанный typescript
		// 	if (stream.getChar() === '\"' || stream.getChar() === '\'') {
		// 		return true;                    
		// 	}
		// }
	}
	// else if (stream.char === '\\') {
	// 	stream.curIndex++;
	// 	if (stream.getChar() === '\"' || stream.getChar() === '\'') {
	// 		return true;                      /* \"..." */
	// 	}
	// 	if (stream.getChar() === '!') {
	// 		stream.curIndex++;
	// 		if (stream.getChar() === '\"' || stream.getChar() === '\'') {
	// 			return true;                    /* \!"..." */
	// 		}
	// 	}
	// }
	
	return false;
}