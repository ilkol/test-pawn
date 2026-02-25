import { NodeHasID } from "../NodeHasID";
import { IRightValue } from "../RightValue";

export interface NamedArgument extends NodeHasID {
	value: IRightValue;
}