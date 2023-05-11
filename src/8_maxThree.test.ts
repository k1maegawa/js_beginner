import { maxThree } from './maxThree'

test('8. maxThree', () => {
  expect(maxThree(1, 2, 3)).toBe(3)
  expect(maxThree(1, 4, 3)).toBe(4)
  expect(maxThree(5, 2, 3)).toBe(5)
  expect(maxThree(1, 2, -3)).toBe(2)
})