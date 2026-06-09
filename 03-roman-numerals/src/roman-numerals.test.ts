import { assertEquals } from "jsr:@std/assert"
import { toRoman } from "./roman-numerals.ts"

Deno.test("9 devient IX", () => {
  assertEquals(toRoman(9), "IX");
});