export interface SemanticToken {
    line: number;
    char: number;
    length: number;
    tokenType: number;
    tokenModifiers: number[];
} 