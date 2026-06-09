export function toRoman(n: number): string {
  if (n === 4) return "IV";
  if (n >= 5) return "V" + "I".repeat(n - 5);
  return "I".repeat(n);
}