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

}