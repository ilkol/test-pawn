export function isDefaultTag(tag: string): boolean {
	switch(tag) {
		case "int":
		case "Float":
		case "char":
		case "bool":
			return true;
		default: return false;
	}
}