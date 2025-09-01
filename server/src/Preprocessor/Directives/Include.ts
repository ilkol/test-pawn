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

	static fromJSON(cache: Serialization.Preprocessor.IncludeCache) {
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

	toJSON(): Serialization.Preprocessor.IncludeCache {
		return {
			...super.toJSON(),
			__type: Serialization.Preprocessor.List.Include,
			parsedPathText: this.pathText,
			exist: this.exist,
			silent: this.silent,
			type: this.type,
			absolutePath: this.absolutePath,
			pathRange: Serialization.Serialize.range(this.pathRange),
		}
	}
}