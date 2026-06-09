const toInt = (n: string): number => parseInt(n);
const sum = (acc: number, n: number): number => acc + n;

export function add(numbers: string): number {
  if (numbers === "") return 0;

  const nums = numbers.split(",").map(toInt);
  const negatives = nums.filter(n => n < 0);

  if (negatives.length > 0) {
    throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
  }

  return nums.reduce(sum, 0);
}