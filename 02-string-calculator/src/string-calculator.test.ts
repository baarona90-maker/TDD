import { assertEquals, assertThrows } from "jsr:@std/assert"
import { add } from "./string-calculator.ts"

Deno.test("un seul nombre retourne ce nombre", () => {
  assertEquals(add("5"), 5);
});