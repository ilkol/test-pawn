import { IncludeCache } from "../../cache/Preprocessor/IncludeCache";
import { Serialization } from "../../cache/Serialization";
import { Range } from "../../types";
import { PreprocessorDirective } from "./PreprocessorDirective";

export enum IncludeType {
	system,
	default
}

interface IncludePathInfo {
	type: IncludeType;
	path: string;
	range: Range;
}

export class Include extends PreprocessorDirective
{
	readonly pathText: string;
	absolutePath?: string;
	readonly pathRange: Range;
	type: IncludeType = IncludeType.default;
	public exist: boolean = false;
	public silent: boolean = false;

	constructor(range: Range, pathInfo: IncludePathInfo, startIndex: number, endIndex: number) {
		super(range, startIndex, endIndex);

		this.pathText = pathInfo.path;
		this.pathRange = pathInfo.range;
		this.type = pathInfo.type;
	}

	static fromCache(cache: IncludeCache) {
		const instance = new Include(
			Serialization.Deserialize.range(cache.range), 
			{
				type: cache.type,
				path: cache.parsedPathText,
				range: Serialization.Deserialize.range(cache.pathRange)
			},
			cache.startIndex,
			cache.endIndex
		);
		instance.absolutePath = cache.absolutePath;
		instance.exist = cache.exist;
		instance.silent = cache.silent;
		
		return instance;
	}

}