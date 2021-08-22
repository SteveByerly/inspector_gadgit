// App
import type { Maybe } from '../types';

export const isNumber = (value: unknown): value is number => {
  return typeof value === 'number';
};

export const isString = (value: unknown): value is string => {
  return typeof value === 'string';
};

export function toInteger(value: string | number): number;
export function toInteger(value: Maybe<string | number>): Maybe<number>;
export function toInteger(value: Maybe<string | number>): Maybe<number> {
  if (value == null || isNumber(value)) {
    return value;
  }

  return parseInt(value, 10);
}

export function toFloat(value: string | number): number;
export function toFloat(value: Maybe<string | number>): Maybe<number>;
export function toFloat(value: Maybe<string | number>): Maybe<number> {
  if (value == null || isNumber(value)) {
    return value;
  }

  return parseFloat(value);
}
