/**
 * Given two crystal balls that will break if dropped from high enough distance
 * determine the exact spot in which it will break in the most optmized way
 *
 * we traverse the array jumping through the sqrt of the array length
 */
export default function twoCrystalBalls(breaks: boolean[]): number {
  const jumpAmount = Math.floor(Math.sqrt(breaks.length));
  let i = jumpAmount;

  // go forward
  for (; i < breaks.length; i += jumpAmount) {
    if (breaks[i] === true) break;
  }

  // go backwards
  i -= jumpAmount;

  // iterate again
  for (let j = 0; j < jumpAmount; j++, i++) {
    if (breaks[i] === true) return i;
  }

  return -1;
}

// nice to test with bigger arrays (*high enough distance)
console.log(twoCrystalBalls([false, false, true, true])); // -1

// 4
console.log(
  twoCrystalBalls([
    false,
    false,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    true,
  ])
);
