import { NodeHasID } from "./NodeHasID";

export interface IDeclaration extends NodeHasID {
	used: boolean,
	stocked: boolean,
	native: boolean,
	file?: string;
}