import { describe, expect, it } from 'vitest'
import { add } from './add'

describe('add', () => {
  it('should add numbers correctly', () => {
    expect(add(5, 10)).toBe(15)
  })

  it('should throw error on bad arguments', () => {
    // @ts-expect-error error
    expect(() => add(1)).toThrowError()
  })
})
