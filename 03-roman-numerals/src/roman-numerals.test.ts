import { assertEquals } from "jsr:@std/assert"
import { toRoman } from "./roman-numerals.ts"

Deno.test("42 devient XLII", () => {
  assertEquals(toRoman(42), "XLII");
});