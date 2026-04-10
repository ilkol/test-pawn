import { Expression } from "./antlr/AST/Nodes/Expresion";
import { FunctionCall } from "./antlr/AST/Nodes/Functions/FunctionCall";
import { BoolLiteral } from "./antlr/AST/Nodes/Literals/BoolLiteral";
import { FloatLiteral } from "./antlr/AST/Nodes/Literals/FloatLiteral";
import { Literal } from "./antlr/AST/Nodes/Literals/Literal";
import { ArrayIndex } from "./antlr/AST/Nodes/Operators/ArrayIndex";
import { BinarOperator } from "./antlr/AST/Nodes/Operators/BinarOperator";
import { TernarOperator } from "./antlr/AST/Nodes/Operators/TernarOperator";
import { UnarOperator } from "./antlr/AST/Nodes/Operators/UnarOperator";
import { Variable } from "./antlr/AST/Nodes/Variable";
import { Analyzer } from "./antlr/AST/visitor/Analyzer";
import { ScopeManager } from "./Managers/ScopeManager";
import { Symbols } from "./SymbolSystem";
import { MayBeTag } from "./SymbolSystem/Symbols/MayBeTag";
import { SymbolsFactory } from "./SymbolSystem/SymbolsFactory";
import { Range } from "./types";

export class TypeInferenceEngine {
	constructor(private scopeManager: ScopeManager, private addTag: (name: string, range: Range, nameRange?: Range) => MayBeTag) {}

	public inferTag(node: Expression): MayBeTag {
		if(node.isTaged) {
			return this.addTag(node.tag.id, node.tag.pos, node.tag.idPos); 
		}
		if(node.inferredTag) {
			return node.inferredTag;
		}
		if (node instanceof Literal) return this.evaluateLiteral(node);
        if (node instanceof FunctionCall) return this.evaluateCall(node);
        if (node instanceof TernarOperator) return this.evaluateTernar(node);
       	// if (node instanceof ArrayIndex) return this.evaluateArrayIndex(node);
        if (node instanceof BinarOperator) return this.evaluateBinary(node);
        if (node instanceof UnarOperator) return this.evaluateUnary(node);
		if (node instanceof Variable) return this.evaluateVariable(node);

		return SymbolsFactory.defaultTag;
	}

	private evaluateLiteral<T>(node: Literal<T>): MayBeTag {
		const global = this.scopeManager.globalScope;
		if (node instanceof FloatLiteral) return global.findTag("Float")!;
        if (node instanceof BoolLiteral) return SymbolsFactory.boolTag;
		return SymbolsFactory.defaultTag;
	}
	private evaluateCall(node: FunctionCall) {
		return node.symbol?.returnTag || SymbolsFactory.defaultTag;
	}
	private evaluateTernar(node: TernarOperator) {
		return node.onTrue?.inferredTag || SymbolsFactory.defaultTag;
	}
	private evaluateBinary(node: BinarOperator) {
		const leftTag = node.left!.inferredTag;
		const rightTag = node.right!.inferredTag;
		const op = node.operator;

		if (["==", "!=", "<", ">", "<=", ">=", "&&", "||"].includes(op)) {
			return SymbolsFactory.boolTag;
		}
		if(!leftTag || !rightTag ) {
			console.error("Undefined tag", node.left?.name, node.right?.name);
			return SymbolsFactory.defaultTag;
		}

		if (leftTag === rightTag) return leftTag;

		const operator = this.findUserOperator(node.operator, leftTag, rightTag, 2);
		if(operator) {
			return operator.returnTag;
		}

		if (!leftTag) return rightTag;
    	if (!rightTag) return leftTag;

		return leftTag;
	}

	private evaluateUnary(node: UnarOperator): MayBeTag {
		const tag = node.value?.inferredTag ?? SymbolsFactory.defaultTag;

		if (node.operator === "!") {
			return SymbolsFactory.boolTag;
		}

		const userOp = this.findUserOperator(node.operator, tag, tag, 1);
		
		return userOp?.returnTag ?? tag;
	}

	static isDefaultTag(tag: MayBeTag) {
		return tag.name === "_";
	}
	static isEqulTags(tag1: MayBeTag, tag2: MayBeTag) {
		return tag1.name === tag2.name;
	}

	isDefaultTag(tag: MayBeTag) {
		return TypeInferenceEngine.isDefaultTag(tag);
	}

	isEqulTags(tag1: MayBeTag, tag2: MayBeTag) {
		return TypeInferenceEngine.isEqulTags(tag1, tag2);
	}

	public findUserOperator(operator: string, tag1: MayBeTag, tag2: MayBeTag, paramsCount: number) {
		if(this.isDefaultTag(tag1) && (paramsCount === 1 || this.isDefaultTag(tag2))) {
			return null;
		}

		let operatorName = Analyzer.operatorName(operator, tag1, tag2, paramsCount, tag2);
		let symbol = this.scopeManager.globalScope.findSymbol(operatorName) as Symbols.Function;
		if(!symbol && !this.isEqulTags(tag1, tag2) && operator != "=" && Analyzer.isCommutativeOperation(operator)) {
			operatorName = Analyzer.operatorName(operator, tag2, tag1, paramsCount, tag1);
			symbol = this.scopeManager.globalScope.findSymbol(operatorName) as Symbols.Function;
		}

		return symbol || null;
	}

	private evaluateVariable(node: Variable) {
		const symbol = node.symbol;
		if(!symbol) {
			return SymbolsFactory.defaultTag;
		}
		if(symbol instanceof Symbols.EnumMember) {
			return symbol.indexTag;
		}
		if(symbol instanceof Symbols.Variable) {
			return symbol.tag;
		}
		if(symbol instanceof Symbols.Enum) {
			return symbol;
		}
		if(symbol instanceof Symbols.Function) {
			return symbol.returnTag;
		}		
		if(symbol instanceof Symbols.Parameter) {
			return symbol.validTags[0] ?? SymbolsFactory.defaultTag;
		}
		

		return SymbolsFactory.defaultTag;
	}
	
}