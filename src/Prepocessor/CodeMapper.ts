import { FindedDefine } from "./PPParser";

interface Change {

	/**
	 * Определяет начальную позицию изменения в оригинальном тексте файла.
	 */
	originalStartPos: number;
	/**
	 * Определяет начальную позицию изменения в файле.
	 */
	startIndex: number;
	/**
	 * Определяет разницу между заменным и оригинальным кодом.
	 * Положительное значение означает, что код был увеличен, отрицательное - уменьшен
	 */
	changeLength: number;
}

export class CodeMapper {

	private changes: Change[] = [];
	private cumulativeOffsets: number[] = [];

	constructor() {}

	/**
	 * Добавляет изменение в маппер.
	 * @param change изменение, которое нужно добавить в маппер
	 */
	public addChange(change: Change): void {
		const index = this.findStartIndex(change.startIndex, (change) => change.startIndex);
		this.changes.splice(index, 0, change);

		this.cumulativeOffsets.splice(index, 0, change.changeLength + (this.cumulativeOffsets[index - 1] || 0));

		for (let i = index + 1; i < this.cumulativeOffsets.length; i++) {
			this.cumulativeOffsets[i] += change.changeLength;
		}
	}

	/**
	 * Выполняет поиск индекса, в который нужно вставить изменение.
	 * @param start начальная позиция изменения
	 * @returns индекс, в который нужно вставить изменение
	 */
	private findStartIndex(start: number, getIndex: (change: Change) => number): number {
		let left = 0;
		let right = this.changes.length;

		while (left < right) {
		const mid = Math.floor((left + right) / 2);
		if (getIndex(this.changes[mid]) > start) {
			right = mid;
		} else {
			left = mid + 1;
		}
		}
		return left;
	}

	/**
	 * Преобразует позицию в файле после препроцессинга в позицию в оригинальном файле.
	 * @param pos позиция в файле после препроцессинга
	 * @returns позиция в оригинальном файле
	 */
	public getOriginalPos(pos: number): number {
		const index = this.findStartIndex(pos, (change) => change.startIndex);
		let offset = 0;
		if (index > 0) {
			offset = this.cumulativeOffsets[index - 1];
		}
		return pos + offset;
	}

	/**
	 * Преобразует позицию в оригинальном файле в позицию в файле после препроцессинга.
	 * @param pos позияиц в оригинальном файле
	 * @returns позиция в файле после препроцессинга
	 */
	public getMappedPos(pos: number): number {
		const index = this.findStartIndex(pos, (change) => change.originalStartPos);
		let offset = 0;
		if (index > 0) {
			offset = this.cumulativeOffsets[index - 1];
		}
		return pos - offset;
	}
}