import { assertEquals } from "jsr:@std/assert"
import { pigLatin } from "./pig-latin.ts"
Deno.test("ear devient earay", () => {
  assertEquals(pigLatin("ear"), "earay");
});