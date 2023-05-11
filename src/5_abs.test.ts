import { abs } from './abs'

test('5. abs', () => {
	expect(abs(-1)).toBe(1)
	expect(abs(1)).toBe(1)
	expect(abs(0)).toBe(0)
})
