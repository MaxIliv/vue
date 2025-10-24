import { expect, it, describe } from 'vitest'
import { increment } from './increment'

describe('increment', () => {
  it('should increment 4 to 5', () => {
    const result = increment(4, 10)
    expect(result).toBe(5)
  })

  it('should keep max value at 10', () => {
    const result = increment(10, 10)
    expect(result).toBe(10)
  })

  it('should use default max value at 10', () => {
    expect(increment(10)).toBe(10)
  })
  it('should be able to use custom max value', () => {
    const result = increment(11, 20)
    expect(result).toBe(12)
  })
})
