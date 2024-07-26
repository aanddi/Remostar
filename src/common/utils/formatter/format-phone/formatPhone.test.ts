import formatPhone from './index';

describe('formatPhone', () => {
  test('Корректное значение', () => {
    expect(formatPhone('79787408141')).toBe('+7 (978) 740-81-41');
  });
});
