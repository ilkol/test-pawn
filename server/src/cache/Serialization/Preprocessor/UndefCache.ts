import { Serialization } from "..";
import { DirectiveCache } from "./DirectivsCache";

export interface UndefCache extends DirectiveCache {
	definePattern: string;
	definePatternRange: Serialization.Range;
}