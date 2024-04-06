export class ASTNode {
	protected startPos: number = 0;
	protected endPos: number = 0;

	public constructor() {

	}

	
	public get start() : number {
		return this.startPos;
	}
	public set start(v : number) {
		this.startPos = v;
	}
	
	public get end() : number {
		return this.endPos;
	}
	public set end(v : number) {
		this.endPos = v;
	}
	
	public setPos(start: number, end: number) {
		this.start = start;
		this.end = end;
	}
	
}