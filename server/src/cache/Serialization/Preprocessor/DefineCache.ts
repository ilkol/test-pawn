import { Serialization } from "..";
import { Visibility } from "../../../Preprocessor/Directives/Defining";
import { DirectiveCache } from "./DirectivsCache";

export interface DefineCache extends DirectiveCache {
	prefix: string;
	postPrefix: string;
	pattern: string;
	patternRange: Serialization.Range;
	replacement: string;
	undef?: string;
	used: boolean;

	references?: {[key: string]: Serialization.Range[]};
	includingPos?: {[key: string]: Visibility};
}