import { add } from './add'

test('問3 add関数', () => {
  expect(add(1, 3)).toBe(4)
  expect(add(-10, 3)).toBe(-7)
  expect(add(0.1, 3)).toBe(3.1)
  expect(add(100000, 3)).toBe(100003)
  expect(add(7, 3)).toBe(10)
})