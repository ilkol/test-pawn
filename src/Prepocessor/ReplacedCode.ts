import { Position, Range, TextDocument } from "vscode";
import { Define } from "./Define";

export class ReplacedCode
{
    readonly length: number;
    private _stopPos: number;

    constructor(readonly text: string, readonly define: Define, private _startPos: number) {
        this.length = text.length;
        this._stopPos = this._startPos + this.length;
    }

    public shift(shift: number) {
        this._startPos += shift;
        this._stopPos += shift;
    }

    public getRange(file: TextDocument): Range {
        return new Range(file.positionAt(this._startPos), file.positionAt(this._stopPos));
    }
}