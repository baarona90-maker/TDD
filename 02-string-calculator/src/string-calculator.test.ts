import { assertEquals, assertThrows } from "jsr:@std/assert"
import { add } from "./string-calculator.ts"

Deno.test("un nombre négatif lance une erreur", () => {
  assertThrows(
    () => add("1,-2,3"),
    Error,
    "negatives not allowed: -2"
  );
});