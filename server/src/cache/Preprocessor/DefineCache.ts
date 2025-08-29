import { Serialization } from "../Serialization";
import { DirectiveCache } from "./DirectivsCache";
import { UndefCache } from "./UndefCache";

export interface DefineCache extends DirectiveCache {
	prefix: string;
	postPrefix: string;
	pattern: string;
	patternRange: Serialization.Range;
	replacement: string;
	undef?: UndefCache;
	used: boolean;
}