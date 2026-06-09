import { assertEquals } from "jsr:@std/assert"
import { pigLatin } from "./pig-latin.ts"
Deno.test("latin devient atinlay", () => {
  assertEquals(pigLatin("latin"), "atinlay");
});