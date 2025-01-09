import { CharStream } from "antlr4ts";

export class ChunkedCharStream implements CharStream {
    private chunks: string[];
    private chunkIndex: number = 0; // Индекс текущего чанка
    private positionInChunk: number = 0; // Позиция в текущем чанке
    private totalConsumed: number = 0; // Общее количество прочитанных символов

	private _size: number = 0;

    constructor(chunks: string[]) {
        this.chunks = chunks;
		this._size = this.chunks.reduce((total, chunk) => total + chunk.length, 0);
    }
	getText(interval: { a: number; b: number }): string {
		let start = interval.a;
		let stop = interval.b;
	
		if (start < 0 || stop < start || stop >= this.size) {
			throw new Error("Invalid interval");
		}
	
		let text = "";
		
		const startPos = this.getChnunkAndIndexByIndex(start);
		const stopPos = this.getChnunkAndIndexByIndex(stop);

		if(startPos.chunkIndex === stopPos.chunkIndex) {
			text = this.chunks[startPos.chunkIndex].substring(startPos.positionInChunk, stopPos.positionInChunk + 1);	
		}
		else {
			text = this.chunks[startPos.chunkIndex].substring(startPos.positionInChunk);
			for(let chunkIndex = startPos.chunkIndex + 1; chunkIndex < stopPos.chunkIndex; chunkIndex++) {
				text += this.chunks[chunkIndex];
			}
			text += this.chunks[stopPos.chunkIndex].substring(0, stopPos.positionInChunk + 1);
		}
		
	
		return text;
	}
	sourceName: string = "test";

    consume(): void {
        if (this.LA(1) === -1) {
            throw new Error("Cannot consume EOF");
        }

        this.positionInChunk++;
        this.totalConsumed++;

        // Если мы дошли до конца текущего чанка, переходим к следующему
        if (this.positionInChunk >= this.chunks[this.chunkIndex].length) {
            this.chunkIndex++;
            this.positionInChunk = 0;
        }
    }

    LA(offset: number): number {
		
        if (offset === 0) return 0; // Undefined behavior
		if (offset < 0) offset++;  // ANTLR использует 1-базированное смещение

		const absoluteIndex = this.totalConsumed + offset - 1;
		if (absoluteIndex < 0 || absoluteIndex >= this.size) {
			return -1; // EOF
		}

		const { chunkIndex, positionInChunk } = this.findChunkAndPosition(absoluteIndex);
		return this.chunks[chunkIndex].charCodeAt(positionInChunk);
    }

	
    get index(): number {
        return this.totalConsumed;
    }

    get size(): number {
        return this._size; // Неизвестный размер
    }

    getSourceName(): string {
        return "ChunkedCharStream";
    }

    seek(index: number): void {
        if (index < 0) {
            throw new Error("Index cannot be negative");
        }

        this.totalConsumed = index;

		const res = this.getChnunkAndIndexByIndex(index);
        this.chunkIndex = res.chunkIndex;
	    this.positionInChunk = res.positionInChunk;
    }

	private findChunkAndPosition(absoluteIndex: number): { chunkIndex: number; positionInChunk: number } {
		if (absoluteIndex < 0 || absoluteIndex >= this.size) {
			throw new Error("Index out of bounds");
		}
	
		let remaining = absoluteIndex;
		for (let i = 0; i < this.chunks.length; i++) {
			const chunk = this.chunks[i];
			if (remaining < chunk.length) {
				return { chunkIndex: i, positionInChunk: remaining };
			}
			remaining -= chunk.length;
		}
	
		throw new Error("Unexpected error in findChunkAndPosition");
	}
	private getChnunkAndIndexByIndex(index: number)
	{
		let remaining = index;
		let chunkIndex = 0;
		let positionInChunk = 0;

		while (chunkIndex < this.chunks.length) {
            const chunk = this.chunks[chunkIndex];
            if (remaining < chunk.length) {
                positionInChunk = remaining;
                break;
            } else {
                remaining -= chunk.length;
                chunkIndex++;
            }
        }
		return {
			chunkIndex,
			positionInChunk
		};
	}

	private markers: number[] = [];

	mark(): number {
		this.markers.push(this.index);
		return this.index;
	}

	release(marker: number): void {
		const markerIndex = this.markers.indexOf(marker);
		if (markerIndex >= 0) {
			this.markers.splice(markerIndex, 1);
		}
	}

}