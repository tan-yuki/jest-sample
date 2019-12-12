import * as $ from 'jquery';

__DEV__ = true;

export default function add(a: number, b: number): number {
  return a + b;
}

$.support.isIE = (ua: string): boolean => ua.indexOf("MSIE ") > 0;
