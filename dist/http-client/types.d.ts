/// <reference types="node" />
import type { IncomingHttpHeaders as LibResponseHeaders } from 'http';
import type { GotReturn as LibPendingRequest, Headers as LibRequestHeaders, Options as LibOptions, PaginationOptions as LibPaginationOptions, Response as LibResponse, ResponseType as LibResponseType } from 'got';
export declare type ResponseHeaders = LibResponseHeaders;
export declare type ResponseType = LibResponseType;
export declare type Response<T> = LibResponse<T>;
export declare type RequestHeaders = LibRequestHeaders;
export declare type Request = LibPendingRequest;
export declare type BaseRequestOptions = Pick<LibOptions, 'context' | 'headers'>;
export declare type DeleteOptions = BaseRequestOptions;
export declare type GetOptions = BaseRequestOptions & Pick<LibOptions, 'searchParams'>;
export declare type PaginationOptions<T, R> = Pick<Required<LibPaginationOptions<T, R>>['pagination'], 'backoff' | 'countLimit' | 'filter' | 'requestLimit' | 'shouldContinue' | 'transform'>;
export interface FetchOptions<T = unknown, R = unknown> extends GetOptions {
    pagination?: PaginationOptions<T, R>;
}
declare type BodyPayload = Required<Pick<LibOptions, 'body'>>;
declare type FormDataPayload = Required<Pick<LibOptions, 'form'>>;
declare type JsonPayload = Required<Pick<LibOptions, 'json'>>;
declare type PayloadOptions = BodyPayload | FormDataPayload | JsonPayload;
export declare type PatchOptions = BaseRequestOptions & PayloadOptions;
export declare type PostOptions = BaseRequestOptions & PayloadOptions;
export declare type PutOptions = BaseRequestOptions & PayloadOptions;
export {};
