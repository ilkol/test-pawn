
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

interface Chunk {
    str: string;
    next: Chunk | null;
}

export class LikeCCharChunkStream {
	static readonly FILE_END_CHAR = '\0';

	private _head: Chunk;
	public curIndex: number = 0;
	private _totalLength: number;

	private _lastChunk: Chunk;
    private _lastChunkStart: number;

	public constructor(source: string) {
		this._head = { str: source, next: null };
        this._totalLength = source.length;
        this._lastChunk = this._head;
        this._lastChunkStart = 0;
	}

	public get buildString(): string {
        // ВНИМАНИЕ: Это тяжелая операция. 
        // Если вы вызываете её часто, нужно пересмотреть логику.
        let res = "";
        let curr: Chunk | null = this._head;
        while (curr) { 
			res += curr.str; curr = curr.next; 
		}
        return res;
    }

	public get length(): number {
        return this._totalLength;
    }

	private findChunkAt(index: number): { chunk: Chunk, startOffset: number } {
        // Быстрая проверка: индекс в том же чанке, что и в прошлый раз?
        if (index >= this._lastChunkStart && index < this._lastChunkStart + this._lastChunk.str.length) {
            return { chunk: this._lastChunk, startOffset: this._lastChunkStart };
        }

        // Если нет, идем с начала (или можно оптимизировать, если index > last)
        let curr = this._head;
        let start = 0;
        while (curr.next && start + curr.str.length <= index) {
            start += curr.str.length;
            curr = curr.next;
        }
        this._lastChunk = curr;
        this._lastChunkStart = start;
        return { chunk: curr, startOffset: start };
    }
	public getShiftChar(shift: number = 0): string {
        const targetIndex = this.curIndex + shift;
        if (targetIndex < 0 || targetIndex >= this._totalLength) return LikeCCharStream.FILE_END_CHAR;

        const { chunk, startOffset } = this.findChunkAt(targetIndex);
        return chunk.str[targetIndex - startOffset];
    }
	public charCodeAt(index: number = 0): number {
        if (index < 0 || index >= this._totalLength) return 0;

		const { chunk, startOffset } = this.findChunkAt(index);
		return chunk.str.charCodeAt(index - startOffset);
    }

    get char(): string { return this.getShiftChar(0); }

    public substr(length: number, shift: number = 0): string {
        let targetIndex = this.curIndex + shift;
        let result = "";
        let { chunk, startOffset } = this.findChunkAt(targetIndex);

        while (chunk && result.length < length) {
            const offsetInChunk = targetIndex - startOffset;
            const canRead = Math.min(length - result.length, chunk.str.length - offsetInChunk);
            result += chunk.str.substring(offsetInChunk, offsetInChunk + canRead);
            
            startOffset += chunk.str.length;
            chunk = chunk.next!;
            targetIndex = startOffset;
        }
        return result;
    }

    public compare(str: string): boolean {
        // Посимвольное сравнение по чанкам без склеивания
        for (let i = 0; i < str.length; i++) {
            if (this.getShiftChar(i) !== str[i]) return false;
        }
        return true;
    }

    public replaceRange(start: number, length: number, newStr: string) {
        const { chunk: targetChunk, startOffset: chunkStart } = this.findChunkAt(start);
        
        const prefix = targetChunk.str.substring(0, start - chunkStart);
        const suffix = targetChunk.str.substring(start - chunkStart + length);

        // Создаем новый чанк для вставки
        const insertChunk: Chunk = { str: newStr, next: null };
        const suffixChunk: Chunk = { str: suffix, next: targetChunk.next };
        
        // Обновляем текущий чанк (теперь он содержит только префикс)
        targetChunk.str = prefix;
        targetChunk.next = insertChunk;
        insertChunk.next = suffixChunk;

        this._totalLength = this._totalLength - length + newStr.length;
        
        // Сбрасываем кэш, так как структура изменилась
        this._lastChunk = this._head;
        this._lastChunkStart = 0;
    }

    // Совместимость со старыми методами
    public strdel(length: number) { 
		this.replaceRange(this.curIndex, length, ""); 
	}
    public strIns(str: string, shift: number = 0) { 
		this.replaceRange(this.curIndex + shift, 0, str); 
	}
}