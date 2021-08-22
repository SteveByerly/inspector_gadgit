import type { GitHubApiOperations } from '../schemas';
import { GitHubService } from './service';
import type { BaseSearchParams, PullRequestFull, PullRequestSearchItem, PullRequestSimple, SearchQueryTokens } from './types';
declare type SearchOperation = GitHubApiOperations['search/issues-and-pull-requests'];
declare type SearchParams = Omit<SearchOperation['parameters']['query'], 'q'>;
declare type FetchOperation = GitHubApiOperations['pulls/list'];
declare type FetchParams = FetchOperation['parameters']['path'];
declare type FetchQuery = FetchOperation['parameters']['query'];
declare type GetOperation = GitHubApiOperations['pulls/get'];
declare type GetParams = GetOperation['parameters']['path'];
export declare class PullRequestService extends GitHubService {
    search(query: SearchQueryTokens, params?: SearchParams): AsyncIterableIterator<PullRequestSearchItem>;
    count(query: SearchQueryTokens, params?: SearchParams): Promise<number>;
    fetch(params: FetchParams, query?: FetchQuery): AsyncIterableIterator<PullRequestSimple>;
    get(params: GetParams): Promise<PullRequestFull>;
    buildSearchParams(query: SearchQueryTokens, params?: SearchParams): BaseSearchParams;
}
export {};
