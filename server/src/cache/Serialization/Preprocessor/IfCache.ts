import { Serialization } from "..";
import { DirectiveCache } from "./DirectivsCache";

export interface IfCache extends DirectiveCache {
	// condition: string;
	// conditionRange: Serialization.Range;
	rest: string;
	elseRange?: Serialization.Range;
	endRange?: Serialization.Range;
	conditionResult: boolean;
	endIf?: string;
	else?: string;
}