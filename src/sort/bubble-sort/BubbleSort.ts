/**
 * BubbleSort
 *
 * Big O (time complexity) = O(N²)
 *
 * On the first iteration the last value will always be the largest, and so on.
 *
 * We keep runing until we have 1 position left.
 * Since an array with 1 item will always be sorted.
 *
 * Sorted arrays will obey this rule: array[i] <= array[i] + 1
 */
export default function BubbleSort(array: number[]): number[] {
  /**
   * Pseudo Code
   *
   * array from 0...N
   * we go from 0..N-1
   *
   * for i..n
   *    for j..n-i-1 (-i - 1 = skip the last updated item that is the largest)
   *        if (array[i] > array[j])
   *            swap(i,j)
   */

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
}
const array1 = [3, 1, 7, 4, 6];
console.log(array1);
console.log(BubbleSort(array1));

const array2 = [12, 98, 3];
console.log(array2);
console.log(BubbleSort(array2));
