import { NodeList as ENodeList }	from "./NodeList";
import { Position as EPosition, Range as ERange }	from "./types";
import { Serialize as ESerialize } from "./Serialize";
import { Deserialize as EDeserialize } from "./Deserialize";
import * as AllNodes from "./Nodes";
import { Serializable as ESerializable } from "./Serializable";

export namespace Serialization {
	export import NodeList = ENodeList;
	export type Position = EPosition;
	export type Range = ERange;
	export import Nodes = AllNodes;

	export import Serialize = ESerialize;
	export import Deserialize = EDeserialize;
	export type Serializable = ESerializable;
}