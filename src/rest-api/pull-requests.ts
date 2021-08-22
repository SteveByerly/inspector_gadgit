// App
import type { GitHubApiOperations } from '../schemas';
import { GitHubService } from './service';
import type {
  BaseSearchParams,
  PullRequestFull,
  PullRequestSearchItem,
  PullRequestSearchResult,
  PullRequestSimple,
  SearchQualifier,
  SearchQueryTokens,
} from './types';

type SearchOperation = GitHubApiOperations['search/issues-and-pull-requests'];
type SearchParams = Omit<SearchOperation['parameters']['query'], 'q'>;

type FetchOperation = GitHubApiOperations['pulls/list'];
type FetchParams = FetchOperation['parameters']['path'];
type FetchQuery = FetchOperation['parameters']['query'];

type GetOperation = GitHubApiOperations['pulls/get'];
type GetParams = GetOperation['parameters']['path'];

export class PullRequestService extends GitHubService {
  public search(query: SearchQueryTokens, params?: SearchParams): AsyncIterableIterator<PullRequestSearchItem> {
    const searchParams = this.buildSearchParams(query, params);
    const pathname = 'search/issues';
    return this._search(pathname, searchParams);
  }

  public async count(query: SearchQueryTokens, params?: SearchParams): Promise<number> {
    const searchParams = this.buildSearchParams(query, { ...params, per_page: 1 });
    const pathname = 'search/issues';
    const response = await this._client.get<PullRequestSearchResult>(pathname, { searchParams });
    return response.body.total_count;
  }

  public fetch(params: FetchParams, query?: FetchQuery): AsyncIterableIterator<PullRequestSimple> {
    const pathname = `repos/${params.owner}/${params.repo}/pulls`;
    return this._client.fetch(pathname, { searchParams: query });
  }

  public async get(params: GetParams): Promise<PullRequestFull> {
    const pathname = `repos/${params.owner}/${params.repo}/pulls/${params.pull_number}`;
    const response = await this._client.get<PullRequestFull>(pathname);
    return response.body;
  }

  public buildSearchParams(query: SearchQueryTokens, params?: SearchParams): BaseSearchParams {
    const qualifiers: SearchQualifier[] = [
      ...query.qualifiers,
      'is:pull-request',
    ];

    const queryTokens = { term: query.term, qualifiers };

    const searchQuery = this.buildSearchQuery(queryTokens);

    return {
      ...params,
      q: searchQuery,
    };
  }
}
