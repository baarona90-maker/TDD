import { assertEquals, assertThrows } from "jsr:@std/assert"
import { add } from "./string-calculator.ts"

Deno.test("plusieurs négatifs dans le message d'erreur", () => {
  assertThrows(
    () => add("1,-2,-5"),
    Error,
    "negatives not allowed: -2, -5"
  );
});