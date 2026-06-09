import { assertEquals } from "jsr:@std/assert"
import { pigLatin } from "./pig-latin.ts"
Deno.test("igloo devient iglooay", () => {
  assertEquals(pigLatin("igloo"), "iglooay");
});