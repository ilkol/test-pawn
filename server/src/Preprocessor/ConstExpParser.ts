import { Define } from "./Directives/Defining";

type Token = { type: 'num' | 'op' | 'word', val: string | number };

export function tokenize(str: string): Token[] {
    const tokens: Token[] = [];
    const regex = /\s*(0x[0-9A-Fa-f]+|0b[01]+|\d+|&&|\|\||[=!<>]=|[!<>+\-*/&|^()]|[a-zA-Z_]\w*)\s*/g;
    let match;
    while ((match = regex.exec(str)) !== null) {
        const v = match[1];
        if (/^\d+|0x|0b/.test(v)) tokens.push({ type: 'num', val: parseInt(v) });
        else if (/^[a-zA-Z_]/.test(v)) tokens.push({ type: 'word', val: v });
        else tokens.push({ type: 'op', val: v });
    }
    return tokens;
}

export class ConstExprParser {
    private pos = 0;
    constructor(private tokens: Token[], private findDefinedSymbol: (name: string) => Define | undefined) {}

    private peek() { return this.tokens[this.pos]; }
    private eat() { return this.tokens[this.pos++]; }

    // Главная точка входа
    public parse(): number {
        return this.logicalOr();
    }

    private logicalOr(): number {
        let left = this.logicalAnd();
        while (this.peek()?.val === '||') {
            this.eat();
            left = (left !== 0 || this.logicalAnd() !== 0) ? 1 : 0;
        }
        return left;
    }

    private logicalAnd(): number {
        let left = this.equality();
        while (this.peek()?.val === '&&') {
            this.eat();
            left = (left !== 0 && this.equality() !== 0) ? 1 : 0;
        }
        return left;
    }

    private equality(): number {
        let left = this.relational();
        const op = this.peek()?.val;
        if (op === '==' || op === '!=') {
            this.eat();
            const right = this.relational();
            left = (op === '==' ? (left === right) : (left !== right)) ? 1 : 0;
        }
        return left;
    }

    private relational(): number {
        let left = this.additive();
        const ops = ['<', '>', '<=', '>='];
        while (ops.includes(this.peek()?.val as string)) {
            const op = this.eat().val;
            const right = this.additive();
            if (op === '<') left = left < right ? 1 : 0;
            if (op === '>') left = left > right ? 1 : 0;
            if (op === '<=') left = left <= right ? 1 : 0;
            if (op === '>=') left = left >= right ? 1 : 0;
        }
        return left;
    }

    private additive(): number {
        let left = this.multiplicative();
        while (['+', '-'].includes(this.peek()?.val as string)) {
            const op = this.eat().val;
            const right = this.multiplicative();
            left = op === '+' ? left + right : left - right;
        }
        return left;
    }

    private multiplicative(): number {
        let left = this.unary();
        while (['*', '/'].includes(this.peek()?.val as string)) {
            const op = this.eat().val;
            const right = this.unary();
            left = op === '*' ? left * right : Math.floor(left / right);
        }
        return left;
    }

    private unary(): number {
        const token = this.peek();
        if (token?.val === '!') { this.eat(); return this.unary() === 0 ? 1 : 0; }
        if (token?.val === '-') { this.eat(); return -this.unary(); }
        
        // Обработка defined
        if (token?.val === 'defined') {
            this.eat();
            if (this.peek()?.val === '(') this.eat();
            const name = this.eat().val as string;
            if (this.peek()?.val === ')') this.eat();
            return (this.findDefinedSymbol(name)) ? 1 : 0;
        }
        
        return this.primary();
    }

    private primary(): number {
        const t = this.eat();
        if (t.type === 'num') return t.val as number;
        if (t.val === '(') {
            const res = this.parse();
            this.eat(); // ')'
            return res;
        }
        if (t.type === 'word') {
            const name = t.val as string;
            // 1. Сначала смотрим макросы
			const def = this.findDefinedSymbol(name);
            if (def) {
                return parseInt(def.replacement) || 1; 
            }
            
            return 0; // В Pawn неизвестный символ в #if = 0
        }
        return 0;
    }
}
