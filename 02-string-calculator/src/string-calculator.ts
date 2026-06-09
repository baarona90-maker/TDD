const toInt = (n: string): number => parseInt(n);
const sum = (acc: number, n: number): number => acc + n;

export function add(numbers: string): number {
  if (numbers === "") return 0;
  return numbers.split(",").map(toInt).reduce(sum, 0);
}