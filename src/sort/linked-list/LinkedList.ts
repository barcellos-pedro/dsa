export interface LinkedList<T> {
  get length(): number;
  insertAt(item: T, index: number): void;
  append(item: T): void;
  prepend(item: T): void;
  remove(item: T): T | undefined;
  removeAt(index: number): T | undefined;
  get(index: number): T | undefined;
}
