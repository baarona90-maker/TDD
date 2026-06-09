import { assertEquals } from "jsr:@std/assert"
import { toRoman } from "./roman-numerals.ts"

Deno.test("2 devient II", () => {
  assertEquals(toRoman(2), "II");
});