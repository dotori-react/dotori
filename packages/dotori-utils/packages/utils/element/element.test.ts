import { hasElement } from '@/utils';

describe('element util test', () => {
  beforeAll(() => {
    // 테스트 DOM 설정
    document.body.innerHTML = `
      <div id="fail-test"></div>
      <div id="success-test"></div>
      <div class="success-test"></div>
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
});
