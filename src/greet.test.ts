import { greet, hello } from './greet'

test('greet() is "hello"', () => {
	expect(greet()).toBe('hello')
	expect(hello).toBe('hello')
})
