import * as assert from 'power-assert';
import add from './index';

describe(`add`, () => {
  it(`should return sum number`, () => {
    assert(add(1, 2) === 3);
  });

  it(`__DEV__ is true`, () => {
    assert(__DEV__ === true);
  });
});


