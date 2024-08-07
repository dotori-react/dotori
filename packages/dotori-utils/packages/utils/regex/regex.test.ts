import { escapeRegex } from '@dotori-utils/utils';

describe('regex util test', () => {
  it('should return processed escape(bracket)', () => {
    expect(escapeRegex('[a]')).toBe('\\[a\\]'); // '\[a\]'
  });

  it('should return processed escape(dot, question)', () => {
    expect(escapeRegex('Hello. How are you?')).toBe('Hello\\. How are you\\?'); // "Hello\. How are you\?"
  });
});
