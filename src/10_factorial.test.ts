import { factoreal } from './factorial'

test('10. factoreal', () => {
  expect(factoreal(0)).toBe(1)
  expect(factoreal(1)).toBe(1)
  expect(factoreal(2)).toBe(2)
  expect(factoreal(3)).toBe(6)
  expect(factoreal(4)).toBe(24)
  expect(factoreal(5)).toBe(120)
  expect(factoreal(6)).toBe(5040)
  expect(factoreal(7)).toBe(40320)
  expect(factoreal(10)).toBe(3628880)
  expect(factoreal(15)).toBe(1307674368000)
})