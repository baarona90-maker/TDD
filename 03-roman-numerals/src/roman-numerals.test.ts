import { assertEquals } from "jsr:@std/assert"
import { toRoman } from "./roman-numerals.ts"

Deno.test("1 devient I", () => {
  assertEquals(toRoman(1), "I");
});