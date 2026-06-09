import { assertEquals } from "jsr:@std/assert"
import { toRoman } from "./roman-numerals.ts"

Deno.test("3 devient III", () => {
  assertEquals(toRoman(3), "III");
});