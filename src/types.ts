// Lib
import type { URL } from 'url';


// Values
// --------------------------------------------------------

/*
  A date value that may not be a parsed Date object.
*/
export type DateLike = Date | string;

/*
  A date value that may not be a parsed URL object.
*/
export type UrlLike = URL | string;

/*
  An entity identifier that helps ensure values are compared properly.
  e.g. { id: 7 }.id == { id: '7' }.id
*/
export type KeyLike = number | string;

/*
  A possibly empty version of type T, unioning `null` and `undefined`
*/
export type Maybe<T> = T | null | undefined;

/*
  A possibly null version of type T by unioning `null`
*/
export type Nullable<T> = T | null;

// ----------------------------------------------------------
// Collections
// ----------------------------------------------------------

/*
  Generic object where all values are of type TValue and keys are string
*/
export type Dict<TValue extends unknown = string> = {
  [key: string]: TValue;
};

/*
  Generic object where all values are of type TValue,
  all keys are string, and both keys and values are readonly
*/
export interface ReadonlyDict<TValue extends unknown> {
  readonly [key: string]: Readonly<TValue>;
}

/*
  Generic object where properties exist for all values of TKey,
  all values are of type TValue, and both keys and values are readonly
*/
export type ReadonlyRecord<TKey extends keyof unknown, TValue> = {
  readonly [P in TKey]: Readonly<TValue>;
};

// --------------------------------------------------------
// Sets
// --------------------------------------------------------

/*
  Extract from T those types that are assignable to K, where K must be a key of T
*/
export type ExtractKey<T, K extends keyof T> = Extract<keyof T, K>;
