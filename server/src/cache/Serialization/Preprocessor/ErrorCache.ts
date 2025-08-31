import { Error } from "../../../Preprocessor/Directives/Error";
import { DirectiveCache } from "./DirectivsCache";

export interface ErrorCache extends DirectiveCache { 
	type: Error.Type;
	message: string;
}