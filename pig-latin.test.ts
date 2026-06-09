import { assertEquals } from "jsr:@std/assert"
import { pigLatin } from "./pig-latin.ts"
Deno.test("pig devient igpay", () => {
  assertEquals(pigLatin("pig"), "igpay");
});