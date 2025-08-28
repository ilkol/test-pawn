import { Position, Range, TextDocument } from "vscode";
import { Define } from "./Define";

export class ReplacedCode
{
    private _shift: number | undefined = undefined;
    private range: Range | undefined = undefined;
    private length: number;

    constructor(readonly text: string, private readonly _newText: string, readonly define: Define, private origPos: number, private curPos: number) {
        this.length = text.length;
    }

    //Длина, на которую УМЕНЬШИЛАСЬ строка
    get shift(): number
    {
        if(!this._shift)
            this._shift = this.text.length - this._newText.length;
        return this._shift;
    }

    //Сдвигает координату в новой строке на shift позиций
	move(shift: number) {
		this.curPos += shift;
	}
    moveOrig(shift: number) {
        this.origPos += shift;
    }

    get newIndex(): number
    {
        return this.curPos;
    }

    get origText(): string
    {
        return this.text;
    }
    get newText(): string
    {
        return this._newText;
    }

    getRange(file: TextDocument): Range
    {
        if(!this.range)
            this.range = new Range(file.positionAt(this.origPos), file.positionAt(this.origPos + this.length));
        return this.range;
    }

	private _end?: number;


	get start(): number {
		return this.origPos;
	}
	get end(): number {
		if(!this._end) {
			this._end = this.origPos + this.length;
		}
		return this._end;
	}
	set end(v: number) {
		this._end = this.origPos + this.length;
	}
}
