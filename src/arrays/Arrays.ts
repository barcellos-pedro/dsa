export default class MyArray {
  array: Uint8Array;

  constructor(size: number) {
    this.array = new Uint8Array(new ArrayBuffer(size));
  }

  get firstValue() {
    return this.array[0];
  }

  get lastValue() {
    return this.array[this.length - 1];
  }

  get length() {
    return this.array.length;
  }

  push(index: number, value: number) {
    this.array[index] = value;
  }

  clear(index: number) {
    this.array[index] = 0;
  }

  fill(value: number) {
    for (let i = 0; i < this.length; i++) {
      this.array[i] = value;
    }
  }

  clearAll() {
    for (let i = 0; i < this.length; i++) {
      this.array[i] = 0;
    }
  }
}

const array = new MyArray(4);
console.log(array.array);

array.push(0, 1);
array.push(1, 2);
array.push(2, 3);
array.push(3, 4);

console.log(array);

array.clear(1);

console.log(array);

console.log(array.firstValue);
console.log(array.lastValue);

array.clearAll();

console.log(array);

array.fill(99);

console.log(array);

array.clearAll();

console.log(array);
