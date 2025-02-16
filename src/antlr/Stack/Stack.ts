import { IStack } from "./ISTack";

export class Stack<T> implements IStack<T> {
	private storage: T[] = [];
  
	constructor() {}
  
	push(item: T): void {
	  this.storage.push(item);
	}
  
	pop(): T | undefined {
	  return this.storage.pop();
	}
  
	peek(): T | undefined {
	  return this.storage[this.size() - 1];
	}
	/**
	 * Удаляет последний элемент и добавляет другой
	 * @param item элемент, который будет вставлен
	 */
	replace(item: T): void {
		this.pop();
		this.push(item);
	}
  
	size(): number {
	  return this.storage.length;
	}
  }