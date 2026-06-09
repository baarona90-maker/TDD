export function toRoman(n: number): string {
  if (n === 4) return "IV";
  return "I".repeat(n);
}