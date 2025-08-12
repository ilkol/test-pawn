import { Serialization } from "../../../cache/Serialization";
import { Node } from "../../../cache/Serialization/Nodes";
import { ASTNode } from "./ASTNode";

export abstract class AbstractStatement extends ASTNode
{
	name = "утверждение";
}