import { reverceAbs } from './reverceAbs'

test('問6 reverceAbs', () => {
	expect(reverceAbs(-1)).toBe(-1)
	expect(reverceAbs(0)).toBe(0)
	expect(reverceAbs(1)).toBe(-1)
	expect(reverceAbs(100)).toBe(-100)
})
