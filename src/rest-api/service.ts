// App
import {
  GITHUB_API_BASE,
  GITHUB_API_VERSION,
  USER_AGENT,
} from '../constants';
import { toInteger } from '../utils';
import { HttpClient, Response } from '../http-client';
import type { Maybe } from '../types';
import type {
  BaseSearchParams,
  RateLimit,
  RequestHeaders,
  ResponseHeaders,
  SearchQueryTokens,
  SearchResult,
} from './types';

export interface GitHubServiceParams {
  authToken?: string;
  baseUrl?: string;
  version?: string;
}

export class GitHubService {
  public readonly authToken: Maybe<string>;
  public readonly baseUrl: string;
  public readonly version: string;
  protected readonly _client: HttpClient;

  constructor(params: GitHubServiceParams) {
    this.authToken = params.authToken ?? process.env['GITHUB_TOKEN'];
    this.baseUrl = params.baseUrl ?? GITHUB_API_BASE;
    this.version = params.version ?? GITHUB_API_VERSION;

    const headers = this.buildRequestHeaders();

    this._client = new HttpClient({
      headers,
      baseUrl: this.baseUrl,
      responseType: 'json',
    });
  }

  public buildRequestHeaders(): RequestHeaders {
    const defaultMediaType = this.getMediaType(this.version);

    const headers: RequestHeaders = {
      accept: defaultMediaType,
      'user-agent': USER_AGENT,
    };

    if (this.authToken) {
      headers.authorization = `token ${this.authToken}`;
    }

    return headers;
  }

  public getMediaType(format?: string): string {
    const specifier = format?.length
      ? `${this.version}.${format}`
      : `${this.version}`;

    return `application/vnd.github.${specifier}+json`;
  }

  public parseRateLimit(headers: ResponseHeaders): RateLimit {
    return {
      limit: toInteger(headers['x-ratelimit-limit']),
      remaining: toInteger(headers['x-ratelimit-remaining']),
      reset: toInteger(headers['x-ratelimit-reset']),
      resource: headers['x-ratelimit-resource'],
      used: toInteger(headers['x-ratelimit-used']),
    };
  }

  /*
    See GitHub docs for specific search token logic
    https://docs.github.com/en/rest/reference/search#constructing-a-search-query
  */
  public buildSearchQuery(queryTokens: SearchQueryTokens): string {
    const {
      qualifiers,
      term = '',
    } = queryTokens;

    const parsedTokens = [term, ...qualifiers]
      .map(value => value.trim())
      .filter(value => value.length);

    return parsedTokens.join(' ');
  }

  protected _search<T>(pathname: string, searchParams: BaseSearchParams): AsyncIterableIterator<T> {
    const transform = async (response: Response<SearchResult<T>>): Promise<T[]> => {
      const body = response.body;
      return body.items;
    };

    const options = {
      searchParams,
      pagination: {
        transform,
      },
    };

    return this._client.fetch(pathname, options);
  }
}
