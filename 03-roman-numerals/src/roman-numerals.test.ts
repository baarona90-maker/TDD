import { assertEquals } from "jsr:@std/assert"
import { toRoman } from "./roman-numerals.ts"

Deno.test("1994 devient MCMXCIV", () => {
  assertEquals(toRoman(1994), "MCMXCIV");
});