export interface IContainsVars<T>
{
	push(el: T): void;
	get vars(): T[];
}