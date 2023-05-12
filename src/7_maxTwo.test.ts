import { maxTwo } from './maxTwo'

test('7 maxTwo', () => {
	expect(maxTwo(1, 2)).toBe(2)
	expect(maxTwo(3, 2)).toBe(3)
	expect(maxTwo(1, -2)).toBe(1)
	expect(maxTwo(2, 2)).toBe(2)
	expect(maxTwo(-2, -1)).toBe(-1)
})