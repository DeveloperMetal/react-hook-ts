import { sum } from '.';

describe('sum', () => {
  it('sums two numbers', () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
