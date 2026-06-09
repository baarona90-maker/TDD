import { assertEquals } from "jsr:@std/assert"
import { pigLatin } from "./pig-latin.ts"
Deno.test("school devient oolschay", () => {
  assertEquals(pigLatin("school"), "oolschay");
});