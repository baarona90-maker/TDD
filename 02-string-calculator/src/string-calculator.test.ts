import { assertEquals, assertThrows } from "jsr:@std/assert"
import { add } from "./string-calculator.ts"

Deno.test("deux nombres séparés par une virgule", () => {
  assertEquals(add("1,2"), 3);
});