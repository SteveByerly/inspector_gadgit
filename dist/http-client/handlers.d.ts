import type { BeforeRequestHook, BeforeRetryHook, Options as LibOptions, RequestError } from 'got';
import { ApiError } from '../errors';
import type { Logger } from '../utils';
import type { Response } from './types';
export declare const logRequest: (logger: Logger) => BeforeRequestHook;
export declare const logRetry: (logger: Logger) => BeforeRetryHook;
export declare const parseLibError: (originalError: RequestError) => ApiError;
export declare const paginatePatch: <T>(response: Response<T>) => LibOptions | false;
