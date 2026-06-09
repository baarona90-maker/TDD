import { assertEquals } from "jsr:@std/assert"
import { toRoman } from "./roman-numerals.ts"

Deno.test("14 devient XIV", () => {
  assertEquals(toRoman(14), "XIV");
});