export function increment(current: number, max = 10) {
  return Math.min(current + 1, max)
}
