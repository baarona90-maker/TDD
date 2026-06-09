import { assertEquals } from "jsr:@std/assert"
import { toRoman } from "./roman-numerals.ts"

Deno.test("5 devient V", () => {
  assertEquals(toRoman(5), "V");
});