import { expect, describe, beforeAll, afterAll, it } from '@jest/globals';

import { hasElement } from 'dotori-utils';

describe('dotori-utils tests', () => {
  beforeAll(() => {
    // 테스트 DOM 설정
    document.body.innerHTML = `
      <div id="success-test"></div>
      <div class="success-test"></div>
    `;
  });

  afterAll(() => {
    document.body.innerHTML = '';
  });

  it('should return true if element exists(id: success-test)', () => {
    expect(hasElement('div', { id: 'success-test' })).toBe(true);
  });

  it('should return true if element exists(class: success-test)', () => {
    expect(hasElement('div', { className: 'success-test' })).toBe(true);
  });

  it("should return false if element dot't exists(id: fail-test)", () => {
    expect(hasElement('div', { id: 'fail-test' })).toBe(false);
  });

  it("should return false if element dot't exists(class: fail-test)", () => {
    expect(hasElement('div', { className: 'fail-test' })).toBe(false);
  });
});
