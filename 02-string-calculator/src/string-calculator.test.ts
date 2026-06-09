import { assertEquals, assertThrows } from "jsr:@std/assert"
import { add } from "./string-calculator.ts"

Deno.test("chaîne vide retourne 0", () => {
  assertEquals(add(""), 0);
});