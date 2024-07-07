import { Position, Range, TextDocument } from "vscode";
import { Define } from "./Define";

export class ReplacedCode
{
    private _shift: number | undefined = undefined;
    // private readonly newText: string;
  
    constructor(readonly text: string, private readonly _newText: string, readonly define: Define, private origPos: number, private curPos: number) {
        // this.newText = this.define.replace;
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
}
