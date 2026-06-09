import { assertEquals, assertThrows } from "jsr:@std/assert"
import { add } from "./string-calculator.ts"

Deno.test("plusieurs nombres séparés par des virgules", () => {
  assertEquals(add("1,2,3,4"), 10);
});