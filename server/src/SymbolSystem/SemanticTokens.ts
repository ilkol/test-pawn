export enum SemanticTokens {
    variable = "variable" , 
    function = 'function', 
    enumMember = 'enumMember', 
    type = 'type', 
    enum  = 'enum', 
    parameter = 'parameter', 
    string = 'string', 
    keyword = 'keyword', 
    number = 'number', 
    operator = 'operator', 
    macro = 'macro',
    comment = 'comment', 
}
export enum SemanticTokensModifiers {
    declaration = 'declaration',
    definition = 'definition',
    const = 'readonly',
    static = 'static',
    deprecated = 'deprecated',
    doc = 'documentation',
    modification = 'modification',
    default = 'defaultLibrary'
}