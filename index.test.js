const { css, batch } = require('./index');

describe('animate-css', () => {
  test('should process string input', () => {
    expect(css('hello')).toBeDefined();
  });

  test('should throw on null input', () => {
    expect(() => css(null)).toThrow(TypeError);
  });

  test('should handle empty string', () => {
    const result = css('');
    expect(result).toBe('');
  });

  test('batch should process array', () => {
    const results = batch(['a', 'b', 'c']);
    expect(results).toHaveLength(3);
  });

  test('batch should throw on non-array', () => {
    expect(() => batch('not array')).toThrow(TypeError);
  });
});
