import { HttpClient } from '../http-client';
import type { Maybe } from '../types';
import type { BaseSearchParams, RateLimit, RequestHeaders, ResponseHeaders, SearchQueryTokens } from './types';
export interface GitHubServiceParams {
    authToken?: string;
    baseUrl?: string;
    version?: string;
}
export declare class GitHubService {
    readonly authToken: Maybe<string>;
    readonly baseUrl: string;
    readonly version: string;
    protected readonly _client: HttpClient;
    constructor(params: GitHubServiceParams);
    buildRequestHeaders(): RequestHeaders;
    getMediaType(format?: string): string;
    parseRateLimit(headers: ResponseHeaders): RateLimit;
    buildSearchQuery(queryTokens: SearchQueryTokens): string;
    protected _search<T>(pathname: string, searchParams: BaseSearchParams): AsyncIterableIterator<T>;
}
