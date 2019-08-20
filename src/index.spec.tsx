import React from 'react';
import { useSum } from '.';
import { mount } from 'enzyme';

type Callback = () => void;

interface TestHookProps {
  cb: Callback;
}

const TestHook: React.FC<TestHookProps> = props => {
  props.cb();
  return null;
};

const testHook = (cb: Callback) => {
  return mount(<TestHook cb={cb} />);
};

let result = 0;
describe('sum', () => {
  beforeEach(() => {
    testHook(() => {
      result = useSum(1, 2);
    });
  });

  it('sums two numbers', () => {
    expect(result).toEqual(3);
  });
});
