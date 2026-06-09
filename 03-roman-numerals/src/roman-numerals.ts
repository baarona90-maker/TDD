const ROMAN_TABLE: [number, string][] = [
  [50, "L"], [40, "XL"], [10, "X"],
  [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]
];

export function toRoman(n: number): string {
  let result = "";
  for (const [value, symbol] of ROMAN_TABLE) {
    while (n >= value) {
      result += symbol;
      n -= value;
    }
  }
  return result;
}