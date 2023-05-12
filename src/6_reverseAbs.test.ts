import { reverseAbs } from './reverseAbs'

test('問6 reverceAbs', () => {
	expect(reverseAbs(-1)).toBe(-1)
	expect(reverseAbs(0)).toBe(0)
	expect(reverseAbs(1)).toBe(-1)
	expect(reverseAbs(100)).toBe(-100)
})
