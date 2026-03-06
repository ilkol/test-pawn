import { Serialization } from "../../../cache/Serialization";
import { IVisitor } from "../visitor/IVisitor";
import { RightValue } from "./RightValue";
import { VarDeclaration } from "./Variables/VarDeclaration";

// export class VariableInit extends VarDeclaration
// {
// 	name = "инициализация переменной";

// 	private _value?: RightValue = undefined;
// 	private _var?: VarDeclaration = undefined;
	
// 	public accept(visitor: IVisitor): void {
// 		visitor.visitVarInit(this);
// 	}

// 	public get rightValue() : RightValue | undefined {
// 		return this._value;
// 	}
	
// 	public set rightValue(v : RightValue) {
// 		this._value = v;
// 	}

// 	public set var(v : VarDeclaration) {
// 		this._var = v;
// 		this.tag = v.tag;
// 		this.id = v.id;
// 		this.idPos = v.idPos;
// 		this._modifires = v.modifires;
// 		this._native = v.native;
// 	}

// 	public toJSON(): Serialization.Nodes.VariableInit {
// 		return {
// 			...super.toJSON(),
// 			// eslint-disable-next-line @typescript-eslint/naming-convention
// 			__type: Serialization.NodeList.VariableInit,
// 			value: this._value?.toJSON(),
// 			variable: this._var?.toJSON()
// 		};
// 	}

// 	static fromJSON(json: Serialization.Nodes.VariableInit): VariableInit {
// 		const instance = new VariableInit();
// 		instance.prepareFromJSON(json);
// 		return instance;
// 	}

// 	protected prepareFromJSON(json: Serialization.Nodes.VariableInit): void {
// 		this._var = Serialization.Deserialize.object(json.variable);
// 		super.prepareFromJSON(json);
// 		this._value = Serialization.Deserialize.object(json.value);
// 	}
	
// }