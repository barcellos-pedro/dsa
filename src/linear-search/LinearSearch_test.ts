import { assertEquals } from "https://deno.land/std@0.178.0/testing/asserts.ts";
import linearSearch from "./LinearSearch.ts";

Deno.test(function linear_search() {
  assertEquals(linearSearch([2, 3], 5), false);
  assertEquals(linearSearch([2, 3], 3), true);
});
