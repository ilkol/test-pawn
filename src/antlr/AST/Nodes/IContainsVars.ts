import { ASTNode } from "./ASTNode";

export interface IContainsVars<T extends ASTNode>
{
	push(el: T): void;
	get vars(): T[];
}