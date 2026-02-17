import { Serialization } from "../../../../cache/Serialization";
import { IVisitor } from "../../visitor/IVisitor";
import { ASTNode } from "../ASTNode";
import { Tag } from "../Tag";

export class Ellipse extends ASTNode
{
	public accept(visitor: IVisitor): void {
		throw new Error("Method not implemented.");
	}
	private _tags: Tag[] | Tag | undefined = undefined;

	get tags(): Tag[] | Tag | undefined {
		return this._tags;
	}
	set tag(value: Tag) {
		this._tags = value;
	}

	get tagString(): string {
		if(!this.tags) {
			return "_";
		}
		if(Array.isArray(this.tags)) {
			return this.tags ? this.tags.map(tag => tag.id).join(", ") : "_";
		} 
		return this.tags.id;
	}

	addTag(tag: Tag) {
		if(!this._tags) {
			this._tags = [];
			return;
		}
		if(!Array.isArray(this._tags)) {
			this._tags = [this._tags];
		} 
		this._tags.push(tag);
	}
	
	toJSON(): Serialization.Nodes.Ellipse {
		return {
			...super.toJSON(),
			tags: this._tags ?( Array.isArray(this._tags) ? this._tags.map(tag => tag.toJSON()) : this._tags.toJSON()) : undefined,
			// eslint-disable-next-line @typescript-eslint/naming-convention
			__type: Serialization.NodeList.Ellipse,
		};
	}

	static fromJSON(json: Serialization.Nodes.Ellipse): Ellipse {
		const instance = new Ellipse();
		instance.prepareFromJSON(json);
		if(json.tags) {
			if(Array.isArray(json.tags)) {
				instance._tags = json.tags.map(tag => Serialization.Deserialize.object(tag));
			} else {
				instance._tags = Serialization.Deserialize.object<Tag>(json.tags);
			}
		} else {
			instance._tags = undefined;
		}
		return instance;
	}

}