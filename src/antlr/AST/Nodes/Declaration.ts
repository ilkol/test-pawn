import { AbstractOpenFile } from "../../../AbstractOpenFile";
import { Serialization } from "../../../cache/Serialization";
import { HasID } from "./HasID";

export abstract class Declaration extends HasID
{
	name = "декларация";
	public used: boolean = false;
	protected _stocked: boolean = false;
	protected _native: boolean = false;

	private fileName?: string = "";
	private file?: AbstractOpenFile = undefined; 

	public get importFileName(): string | undefined {
		return this.fileName;
	}
	public set importFileName(v: string) {
		this.fileName = v;
	}
	public set importFile(v: AbstractOpenFile) {
		this.fileName = v.uri.path;
		this.file = v;
	}
	public get importFile(): AbstractOpenFile | undefined {
		return this.file;
	}


	constructor(instance: Declaration|undefined = undefined) {
		super(instance);
		if(instance) {
			this.idPos = instance.idPos;
		}
	}

	public get stock(): boolean {
		return this._stocked;
	}
	public set stock(v: true) {
		this._stocked = v;
	}
	public get native(): boolean {
		return this._native;
	}
	public set native(v: true) {
		this._native = v;
	}



	
	toJSON(): Serialization.Nodes.Declaration {
		return {
			...super.toJSON(),
			used: this.used,
			stocked: this._stocked,
			native: this.native,
			file: this.fileName,
		};
	}

	protected prepareFromJSON(json: Serialization.Nodes.Declaration) {
		super.prepareFromJSON(json);
		this.used = json.used;
		this._stocked = json.stocked;
		this._native = json.native;
		if(json.file) {
			this.fileName = json.file;
		}
	}
}