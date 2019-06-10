export function average(array: number[]): number {
  return array.reduce((a, b) => a + b) / array.length;
}
