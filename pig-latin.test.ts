import { assertEquals } from "jsr:@std/assert"
import { pigLatin } from "./pig-latin.ts"
Deno.test("glove devient oveglay", () => {
  assertEquals(pigLatin("glove"), "oveglay");
});