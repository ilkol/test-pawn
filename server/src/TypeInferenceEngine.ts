import { Expression } from "./antlr/AST/Nodes/Expresion";
import { FunctionCall } from "./antlr/AST/Nodes/Functions/FunctionCall";
import { BoolLiteral } from "./antlr/AST/Nodes/Literals/BoolLiteral";
import { FloatLiteral } from "./antlr/AST/Nodes/Literals/FloatLiteral";
import { Literal } from "./antlr/AST/Nodes/Literals/Literal";
import { BinarOperator } from "./antlr/AST/Nodes/Operators/BinarOperator";
import { UnarOperator } from "./antlr/AST/Nodes/Operators/UnarOperator";
import { ScopeManager } from "./Managers/ScopeManager";
import { MayBeTag } from "./SymbolSystem/Symbols/MayBeTag";
import { Range } from "./types";

export class TypeInferenceEngine {
	constructor(private scopeManager: ScopeManager, private addTag: (name: string, range: Range, nameRange?: Range) => MayBeTag) {}

	public inferTag(node: Expression): MayBeTag | null {
		console.log(node);
		if(node.isTaged) {
			return this.addTag(node.tag.id, node.tag.pos, node.tag.idPos); 
		}
		console.log(node instanceof Literal);
		if (node instanceof Literal) return this.evaluateLiteral(node);
        if (node instanceof FunctionCall) return this.evaluateCall(node);
        if (node instanceof BinarOperator) return this.evaluateBinary(node);
        if (node instanceof UnarOperator) return this.evaluateUnary(node);

		return null;
	}

	private evaluateLiteral<T>(node: Literal<T>): MayBeTag | null {
		const global = this.scopeManager.globalScope;
		if (node instanceof FloatLiteral) return global.findTag("Float")!;
        if (node instanceof BoolLiteral) return global.findTag("bool")!;
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
			return this.scopeManager.globalScope.findTag("bool")!;
		}

		if (leftTag === rightTag) return leftTag;

		if (!leftTag) return rightTag;
    	if (!rightTag) return leftTag;

		return leftTag;
	}

	private evaluateUnary(node: UnarOperator): MayBeTag | null {
		const operandTag = this.inferTag(node.value!);
		if (node.operator === "!") {
			return this.scopeManager.globalScope.findTag("bool")!;
		}
		return operandTag;
	}
}