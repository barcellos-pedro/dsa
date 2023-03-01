import { assertEquals } from "https://deno.land/std@0.178.0/testing/asserts.ts";
import binarySearch from "./BinarySearch.ts";

Deno.test(function binary_search() {
  assertEquals(binarySearch([12, 3, 4, 5, 6], 99), false);
  assertEquals(binarySearch([12, 3, 4, 5, 6, 23, 9, 2], 2), true);
  assertEquals(binarySearch([10, 20, 30, 40, 50, 60], 30), true);
});
