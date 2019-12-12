import * as assert from 'power-assert';
import * as $ from 'jquery';
import add from './index';

describe(`add`, () => {
  it(`should return sum number`, () => {
    assert(add(1, 2) === 3);
  });
});

describe(`global variables`, () => {
  it(`__DEV__ is true`, () => {
    assert(__DEV__ === true);
  });

  describe(`$.support.isIE`, () => {
    it(`should return true if UserAgent is IE`, () => {
      assert($.support.isIE(`Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0`));
    });

    it(`should return false if UserAgent is not IE`, () => {
      assert(!$.support.isIE(`Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36`));
    });
  });
});
