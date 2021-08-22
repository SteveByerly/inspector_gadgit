import type { RequestHeaders as ClientRequestHeaders, Response as ClientResponse, ResponseHeaders as ClientResponseHeaders } from '../http-client';
import type { GitHubApiSchemas } from '../schemas';
import type { Dict, Maybe } from '../types';
export interface RequestHeaders extends ClientRequestHeaders {
    accept: string;
    authorization?: string;
    'user-agent': string;
}
export interface ResponseHeaders extends ClientResponseHeaders {
    etag: string;
    link?: string;
    'x-github-mediatype': string;
    'x-github-request-id': string;
    'x-ratelimit-limit': string;
    'x-ratelimit-remaining': string;
    'x-ratelimit-reset': string;
    'x-ratelimit-resource': string;
    'x-ratelimit-used': string;
}
export interface Response<T> extends ClientResponse<T> {
    headers: ResponseHeaders;
}
export interface RateLimit {
    limit: number;
    remaining: number;
    reset: number;
    resource: string;
    used: number;
}
export interface SearchResult<T> {
    readonly total_count: number;
    readonly incomplete_results: boolean;
    readonly items: T[];
}
export interface BaseSearchParams extends Dict<Maybe<string | number>> {
    page?: number;
    per_page?: number;
    q: string;
}
export declare type SearchQualifier = `${string}:${string}`;
export interface SearchQueryTokens {
    term?: string;
    qualifiers: SearchQualifier[];
}
export declare type OrganizationFull = GitHubApiSchemas['organization-full'];
export declare type OrganizationSimple = GitHubApiSchemas['organization-simple'];
export declare type RepositoryFull = GitHubApiSchemas['full-repository'];
export declare type RepositoryMinimal = GitHubApiSchemas['minimal-repository'];
export declare type PullRequestFull = GitHubApiSchemas['pull-request'];
export declare type PullRequestSimple = GitHubApiSchemas['pull-request-simple'];
export declare type PullRequestSearchItem = GitHubApiSchemas['issue-search-result-item'];
export declare type PullRequestSearchResult = SearchResult<PullRequestSearchItem>;
export declare type CommitSearchItem = GitHubApiSchemas['commit-search-result-item'];
export declare type IssueSearchItem = GitHubApiSchemas['issue-search-result-item'];
export declare type UserSearchItem = GitHubApiSchemas['user-search-result-item'];
