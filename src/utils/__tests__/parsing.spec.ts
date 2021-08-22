// App
import type { Maybe } from '../../types';
import {
  isNumber,
  isString,
  toFloat,
  toInteger,
} from '../parsing';

describe('utils', () => {
  describe('parsing', () => {
    describe('isNumber', () => {
      it.each<[boolean, unknown]>([
        [false, '27.094'],
        [true, 27.094],
        [false, true],
        [false, undefined],
        [true, 7],
        [false, {}],
        [false, ''],
        [false, null],
      ])('should return %s with a value of %p', (expected, testValue) => {
        const actual = isNumber(testValue);
        expect(actual).toBe(expected);
      });
    });

    describe('isString', () => {
      it.each<[boolean, unknown]>([
        [true, '27.094'],
        [false, 27.094],
        [false, true],
        [false, undefined],
        [false, 9],
        [false, {}],
        [true, ''],
        [false, null],
      ])('should return %s with a value of %p', (expected, testValue) => {
        const actual = isString(testValue);
        expect(actual).toBe(expected);
      });
    });

    describe('toFloat', () => {
      it.each<[Maybe<number>, Maybe<string>]>([
        [13.032, '13.032'],
        [null, null],
        [37, '37'],
        [undefined, undefined],
        [9.00, '9.00'],
      ])('should return %s with a value of %p', (expected, testValue) => {
        const actual = toFloat(testValue);
        expect(actual).toBe(expected);
      });
    });

    describe('toInteger', () => {
      it.each<[Maybe<number>, Maybe<string | number>]>([
        [17, '17'],
        [512, 512],
        [null, null],
        [37, '37'],
        [undefined, undefined],
        [11, '11.072'],
      ])('should return %s with a value of %p', (expected, testValue) => {
        const actual = toInteger(testValue);
        expect(actual).toBe(expected);
      });
    });
  });
});
