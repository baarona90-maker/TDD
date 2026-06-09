import { assertEquals } from "jsr:@std/assert"
import { pigLatin } from "./pig-latin.ts"
Deno.test("three devient eethray", () => {
  assertEquals(pigLatin("three"), "eethray");
});