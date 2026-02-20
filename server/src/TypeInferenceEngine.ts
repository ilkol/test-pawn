import { Expression } from "./antlr/AST/Nodes/Expresion";
import { BoolLiteral } from "./antlr/AST/Nodes/Literals/BoolLiteral";
import { FloatLiteral } from "./antlr/AST/Nodes/Literals/FloatLiteral";
import { Literal } from "./antlr/AST/Nodes/Literals/Literal";

export class TypeInferenceEngine {
	// public inferTag(node: Expression) {
	// 	if (node instanceof Literal) return this.evaluateLiteral(node);
    //     if (node instanceof Identifier) return this.evaluateIdentifier(node);
    //     if (node instanceof FunctionCall) return this.evaluateCall(node);
    //     if (node instanceof BinaryExpression) return this.evaluateBinary(node);
    //     if (node instanceof UnaryExpression) return this.evaluateUnary(node);
    //     if (node instanceof ConditionExpression) return this.evaluateTernary(node);

    //     return TagSymbol.default();
	// }

	// private evaluateLiteral<T>(node: Literal<T>): TagSymbol {
	// 	if(node instanceof FloatLiteral) {
	// 		return 
	// 	} else if(node instanceof BoolLiteral) {
	// 		return 
	// 	} else {
	// 		return 
	// 	}
    // }
}