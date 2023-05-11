import { isOdd } from './isOdd'

test('問4 isOdd', () => {
	expect(isOdd(-1)).toBe(true)
	expect(isOdd(0)).toBe(false)
	expect(isOdd(1)).toBe(true)
	expect(isOdd(2)).toBe(false)
})
