export class LikeCCharStream {
	static readonly FILE_END_CHAR = '\0';

	public curIndex: number = 0;

	get char(): string {
		return this.getShiftChar();
	}
	public getChar(): string {
		return this.char;
	}
	public substr(length: number, shift: number = 0): string {
		return this._source.substring(this.curIndex + shift, this.curIndex + shift + length);
	}

	public get source(): string {
		return this._source;
	}

	public compare(str: string) {
		for (let i = 0, index = this.curIndex; i < str.length; i++, index++) {
			if (this._source.length <= index) {
				return false;
			}
			if (this._source[index] !== str[i]) {
				return false;
			}
		}
		return true;
	}

	public strdel(length: number) {
		const preStr = this._source.substring(0, this.curIndex);
		if (length >= this._source.length) {
			this._source = preStr;
		}
		else {
			const postStr = this._source.substring(this.curIndex + length);
			this._source = preStr + postStr;
		}
	}
	public strIns(str: string, shift: number = 0) {
		const preStr = this._source.substring(0, this.curIndex + shift);
		const postStr = this._source.substring(this.curIndex + shift);
		this._source = preStr + str + postStr;
	}

	public getShiftChar(shift: number = 0) {
		let index = this.curIndex + shift;
		if (this._source.length <= index) {
			return LikeCCharStream.FILE_END_CHAR;
		}
		return this._source[index];
	}

	public constructor(private _source: string) {

	}

	public replaceRange(start: number, length: number, newStr: string) {
		// Делаем ОДНУ конкатенацию вместо сотен
		this._source =
			this._source.substring(0, start) +
			newStr +
			this._source.substring(start + length);
	}
}