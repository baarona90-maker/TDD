const toInt = (n: string): number => parseInt(n);
const sum = (acc: number, n: number): number => acc + n;
const isNegative = (n: number): boolean => n < 0;

function checkNegatives(nums: number[]): void {
  const negatives = nums.filter(isNegative);
  if (negatives.length > 0) {
    throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
  }
}

export function add(numbers: string): number {
  if (numbers === "") return 0;

  const nums = numbers.split(",").map(toInt);
  checkNegatives(nums);
  return nums.reduce(sum, 0);
}