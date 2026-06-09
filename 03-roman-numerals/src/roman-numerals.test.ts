import { assertEquals } from "jsr:@std/assert"
import { toRoman } from "./roman-numerals.ts"

Deno.test("4 devient IV", () => {
  assertEquals(toRoman(4), "IV");
});