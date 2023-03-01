/** Array must be sorted */
export default function binarySearch(
  haystack: number[],
  needle: number
): boolean {
  let low = 0;
  let high = haystack.length;

  do {
    const middle = Math.floor(low + (high - low) / 2); // offset from low + middle
    const value = haystack[middle];

    if (value === needle) {
      return true;
    } else if (value > needle) {
      high = middle;
    } else { // value < needle
      low = middle + 1;
    }
  } while (low < high);

  return false;
}

const arr1 = [2, 3, 4, 5, 6, 12];
console.log(binarySearch(arr1, 99));

const arr2 = [2, 4, 6, 9, 13, 23];
console.log(binarySearch(arr2, 2));

const arr3 = [3, 6, 9, 12, 15, 30];
console.log(binarySearch(arr3, 30));
