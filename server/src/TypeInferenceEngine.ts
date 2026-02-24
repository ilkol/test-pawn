import { Expression } from "./antlr/AST/Nodes/Expresion";
import { FunctionCall } from "./antlr/AST/Nodes/Functions/FunctionCall";
import { BoolLiteral } from "./antlr/AST/Nodes/Literals/BoolLiteral";
import { FloatLiteral } from "./antlr/AST/Nodes/Literals/FloatLiteral";
import { Literal } from "./antlr/AST/Nodes/Literals/Literal";
import { BinarOperator } from "./antlr/AST/Nodes/Operators/BinarOperator";
import { UnarOperator } from "./antlr/AST/Nodes/Operators/UnarOperator";
import { Analyzer } from "./antlr/AST/visitor/Analyzer";
import { ScopeManager } from "./Managers/ScopeManager";
import { Symbols } from "./SymbolSystem";
import { MayBeTag } from "./SymbolSystem/Symbols/MayBeTag";
import { SymbolsFactory } from "./SymbolSystem/SymbolsFactory";
import { Range } from "./types";

export class TypeInferenceEngine {
	constructor(private scopeManager: ScopeManager, private addTag: (name: string, range: Range, nameRange?: Range) => MayBeTag) {}

	public inferTag(node: Expression): MayBeTag | null {
		if(node.isTaged) {
			return this.addTag(node.tag.id, node.tag.pos, node.tag.idPos); 
		}
		if (node instanceof Literal) return this.evaluateLiteral(node);
        if (node instanceof FunctionCall) return this.evaluateCall(node);
        if (node instanceof BinarOperator) return this.evaluateBinary(node);
        if (node instanceof UnarOperator) return this.evaluateUnary(node);

		return null;
	}

	private evaluateLiteral<T>(node: Literal<T>): MayBeTag | null {
		const global = this.scopeManager.globalScope;
		if (node instanceof FloatLiteral) return global.findTag("Float")!;
        if (node instanceof BoolLiteral) return SymbolsFactory.boolTag;
		return null;
	}
	private evaluateCall(node: FunctionCall) {
		return node.symbol?.returnTag || null;
	}
	private evaluateBinary(node: BinarOperator) {
		const leftTag = node.left!.inferredTag;
		const rightTag = node.right!.inferredTag;
		const op = node.operator;

		if (["==", "!=", "<", ">", "<=", ">=", "&&", "||"].includes(op)) {
			return SymbolsFactory.boolTag;
		}
		if(!leftTag || !rightTag ) {
			throw new Error("Undefined tag");
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

	private evaluateUnary(node: UnarOperator): MayBeTag | null {
		const operandTag = this.inferTag(node.value!);
		if (node.operator === "!") {
			return SymbolsFactory.boolTag;
		}
		return operandTag;
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
		if(!symbol && !this.isEqulTags(tag1, tag2) && Analyzer.isCommutativeOperation(operator)) {
			operatorName = Analyzer.operatorName(operator, tag2, tag1, paramsCount, tag1);
			symbol = this.scopeManager.globalScope.findSymbol(operatorName) as Symbols.Function;
		}

		return symbol || null;
	}
	
}