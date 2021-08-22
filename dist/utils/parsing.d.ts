import type { Maybe } from '../types';
export declare const isNumber: (value: unknown) => value is number;
export declare const isString: (value: unknown) => value is string;
export declare function toInteger(value: string | number): number;
export declare function toInteger(value: Maybe<string | number>): Maybe<number>;
export declare function toFloat(value: string | number): number;
export declare function toFloat(value: Maybe<string | number>): Maybe<number>;
