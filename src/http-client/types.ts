// Lib
import type {
  IncomingHttpHeaders as LibResponseHeaders,
} from 'http';
import type {
  GotReturn as LibPendingRequest,
  Headers as LibRequestHeaders,
  Options as LibOptions,
  PaginationOptions as LibPaginationOptions,
  Response as LibResponse,
  ResponseType as LibResponseType,
} from 'got';

export type ResponseHeaders = LibResponseHeaders;
export type ResponseType = LibResponseType;
export type Response<T> = LibResponse<T>;

export type RequestHeaders = LibRequestHeaders;
export type Request = LibPendingRequest;

export type BaseRequestOptions = Pick<
  LibOptions,
  | 'context'
  | 'headers'
>;

export type DeleteOptions = BaseRequestOptions;

export type GetOptions = BaseRequestOptions & Pick<LibOptions, 'searchParams'>;

export type PaginationOptions<T, R> = Pick<
  Required<LibPaginationOptions<T, R>>['pagination'],
  | 'backoff'
  | 'countLimit'
  | 'filter'
  | 'requestLimit'
  | 'shouldContinue'
  | 'transform'
>;

export interface FetchOptions<T = unknown, R = unknown> extends GetOptions {
  pagination?: PaginationOptions<T, R>;
}

type BodyPayload = Required<Pick<LibOptions, 'body'>>;
type FormDataPayload = Required<Pick<LibOptions, 'form'>>;
type JsonPayload = Required<Pick<LibOptions, 'json'>>;

type PayloadOptions =
  | BodyPayload
  | FormDataPayload
  | JsonPayload;

export type PatchOptions = BaseRequestOptions & PayloadOptions;

export type PostOptions = BaseRequestOptions & PayloadOptions;

export type PutOptions = BaseRequestOptions & PayloadOptions;
