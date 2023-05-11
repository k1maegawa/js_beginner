import { isPrime } from './isPrime'

test('11. isPrime', () => {
  expect(isPrime(-1000000000)).toBe(false)

  expect(isPrime(-1)).toBe(false)
  expect(isPrime(0)).toBe(false)
  expect(isPrime(1)).toBe(false)
  expect(isPrime(2)).toBe(true)
  expect(isPrime(3)).toBe(true)
  expect(isPrime(4)).toBe(false)
  expect(isPrime(5)).toBe(true)
  expect(isPrime(6)).toBe(false)
  expect(isPrime(7)).toBe(true)
  expect(isPrime(8)).toBe(false)
  expect(isPrime(9)).toBe(false)
  expect(isPrime(10)).toBe(false)
  expect(isPrime(11)).toBe(true)
  expect(isPrime(12)).toBe(false)

  expect(isPrime(49)).toBe(false)
  expect(isPrime(97)).toBe(true)

  expect(isPrime(977)).toBe(true)
  expect(isPrime(989)).toBe(false)

  expect(isPrime(68271)).toBe(false)
  expect(isPrime(68279)).toBe(true)

  expect(isPrime(104729)).toBe(true)
  expect(isPrime(104731)).toBe(false)

  expect(isPrime(8939790071)).toBe(true)
})