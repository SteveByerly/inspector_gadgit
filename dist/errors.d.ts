import type { Request, Response } from './http-client';
import type { Maybe } from './types';
export declare class AppError extends Error {
    constructor(message: string);
}
export declare class PathExistsError extends AppError {
    constructor(path: string);
}
export interface ApiErrorParams {
    request: Maybe<Request>;
    response: Maybe<Response<unknown>>;
    statusCode: string | number;
    statusMessage: string;
}
export declare class ApiError extends AppError {
    readonly request: Maybe<Request>;
    readonly response: Maybe<Response<unknown>>;
    readonly statusCode: string | number;
    readonly statusMessage: string;
    constructor(message: string, params: ApiErrorParams);
}
