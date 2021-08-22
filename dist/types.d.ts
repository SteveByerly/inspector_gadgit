/// <reference types="node" />
import type { URL } from 'url';
export declare type DateLike = Date | string;
export declare type UrlLike = URL | string;
export declare type KeyLike = number | string;
export declare type Maybe<T> = T | null | undefined;
export declare type Nullable<T> = T | null;
export declare type Dict<TValue extends unknown = string> = {
    [key: string]: TValue;
};
export interface ReadonlyDict<TValue extends unknown> {
    readonly [key: string]: Readonly<TValue>;
}
export declare type ReadonlyRecord<TKey extends keyof unknown, TValue> = {
    readonly [P in TKey]: Readonly<TValue>;
};
export declare type ExtractKey<T, K extends keyof T> = Extract<keyof T, K>;
