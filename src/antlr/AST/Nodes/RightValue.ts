import { Range } from "vscode";
import { ASTNode } from "./ASTNode";
import { DefaultTag } from "./DefaultTag";
import { IHasID } from "./IHasID";
import { IHasTag } from "./IHasTag";
import { Tag } from "./Tag";
import { Expresion } from "./Expresion";

export abstract class RightValue extends Expresion implements IHasTag 
{
	
}

