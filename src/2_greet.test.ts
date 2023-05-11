import { greet } from './greet'

test('問2 greet関数', () => {
	expect(greet('ibuki')).toBe('ibukiさん、こんにちは！')
	expect(greet('昂亮')).toBe('昂亮さん、こんにちは！')
})
