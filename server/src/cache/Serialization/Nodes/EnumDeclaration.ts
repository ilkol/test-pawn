import { IDeclaration } from "./Declaration";
import { IEnumMember } from "./EnumMember";

export interface IEnumDeclaration extends IDeclaration {
	lastIndex: number;
	members: IEnumMember[];
}