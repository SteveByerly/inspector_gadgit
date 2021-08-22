import type { BeforeRequestHook, BeforeRetryHook, Options as LibOptions, RequestError } from 'got';
import { ApiError } from '../errors';
import type { Response } from './types';
export declare const logRequest: BeforeRequestHook;
export declare const logRetry: BeforeRetryHook;
export declare const parseLibError: (originalError: RequestError) => ApiError;
export declare const paginatePatch: <T>(response: Response<T>) => LibOptions | false;
