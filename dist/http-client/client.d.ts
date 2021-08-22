import { Got as GotInstance, RequestError } from 'got';
import type { UrlLike } from '../types';
import type { DeleteOptions, FetchOptions, GetOptions, PatchOptions, PostOptions, PutOptions, RequestHeaders, Response, ResponseType } from './types';
interface HttpClientParams {
    baseUrl?: UrlLike;
    headers?: RequestHeaders;
    responseType?: ResponseType;
}
export declare class HttpClient {
    defaultBackoff: number;
    private readonly _instance;
    constructor(params: HttpClientParams);
    get internalClient(): GotInstance;
    handleError(error: Error | RequestError): never;
    delete(path: UrlLike, options?: DeleteOptions): Promise<Response<void>>;
    fetch<TParsed, TRaw>(path: UrlLike, options?: FetchOptions<TParsed, TRaw>): AsyncIterableIterator<TParsed>;
    get<TParsed>(path: UrlLike, options?: GetOptions): Promise<Response<TParsed>>;
    patch<TParsed>(path: UrlLike, options?: PatchOptions): Promise<Response<TParsed>>;
    post<TParsed>(path: UrlLike, options?: PostOptions): Promise<Response<TParsed>>;
    put<TParsed>(path: UrlLike, options?: PutOptions): Promise<Response<TParsed>>;
}
export {};
