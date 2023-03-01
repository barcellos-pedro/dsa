export default function binarySearch(
  haystack: number[],
  needle: number
): boolean {
  haystack = haystack.sort((a, b) => a - b); // Array must be sorted
  let low = 0;
  let high = haystack.length;

  while (low < high) {
    const m = Math.floor(low + (high - low) / 2);
    const value = haystack[m];

    if (needle === value) {
      return true;
    } else if (value > needle) {
      high = m;
    } else {
      low = value + 1;
    }
  }

  return false;
}

console.log("binary search");
console.log(binarySearch([12, 3, 4, 5, 6], 99));
console.log(binarySearch([12, 3, 4, 5, 6, 23, 9, 2], 2));
console.log(binarySearch([10, 20, 30, 40, 50, 60], 30));
