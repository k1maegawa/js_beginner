import { factorial } from './factorial'

test('10. factorial', () => {
  expect(factorial(0)).toBe(1)
  expect(factorial(1)).toBe(1)
  expect(factorial(2)).toBe(2)
  expect(factorial(3)).toBe(6)
  expect(factorial(4)).toBe(24)
  expect(factorial(5)).toBe(120)
  expect(factorial(6)).toBe(720)
  expect(factorial(7)).toBe(5040)
  expect(factorial(10)).toBe(3628800)
  expect(factorial(15)).toBe(1307674368000)
})