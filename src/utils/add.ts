export function add(a: number, b: number) {
  if (!a || !b) throw new Error('[add] Please, provide correct arguments')
  return a + b
}
