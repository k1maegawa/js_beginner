import { fizzbuzz } from './fizzbuzz'

test('9. fizzbuzz', () => {
  expect(fizzbuzz(1)).toBe(1)
  expect(fizzbuzz(2)).toBe(1)
  expect(fizzbuzz(3)).toBe('fizz')
  expect(fizzbuzz(4)).toBe(1)
  expect(fizzbuzz(5)).toBe('buzz')
  expect(fizzbuzz(15)).toBe('fizzbuzz')
})