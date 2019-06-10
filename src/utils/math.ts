export function average(array: number[]): number {
  if (!array.length) {
    return 0;
  }
  return array.reduce((a, b) => a + b, 0) / array.length;
}
