const greeting = require('./index.js').greeting;

test('should return hello world', () => {
	expect(greeting()).toBe('hello world');
});
