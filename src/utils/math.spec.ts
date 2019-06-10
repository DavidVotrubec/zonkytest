import { average } from './math';

describe('Test counting average', () => {

  it('should work with empty array', () => {
    const result = average([]);
    expect(result).toBe(0);
  });

  it('should work with zeroed array', () => {
    const result = average([0, 0, 0]);
    expect(result).toBe(0);
  });

  it('should work with expected values', () => {
    const result = average([10, 22, 40]);
    expect(result).toBe(24);
  });
});
