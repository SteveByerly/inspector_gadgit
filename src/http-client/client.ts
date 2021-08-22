// Lib
import {
  default as got,
  Got as GotInstance,
  RequestError,
} from 'got';
// App
import { AppError } from '../errors';
import type { UrlLike } from '../types';
import {
  logRequest,
  logRetry,
  paginatePatch,
  parseLibError,
} from './handlers';
import type {
  DeleteOptions,
  FetchOptions,
  GetOptions,
  PatchOptions,
  PostOptions,
  PutOptions,
  RequestHeaders,
  Response,
  ResponseType,
} from './types';

interface HttpClientParams {
  baseUrl?: UrlLike;
  headers?: RequestHeaders;
  responseType?: ResponseType;
}

export class HttpClient {
  public defaultBackoff = 1000;
  private readonly _instance: GotInstance;

  constructor(params: HttpClientParams) {
    const {
      baseUrl: prefixUrl,
      headers,
      responseType = 'json',
    } = params;

    this._instance = got.extend({
      headers,
      prefixUrl,
      responseType,
      hooks: {
        beforeError: [],
        beforeRequest: [
          logRequest,
        ],
        beforeRetry: [
          logRetry,
        ],
      },
    });
  }

  public get internalClient(): GotInstance {
    return this._instance.extend();
  }

  public handleError(error: Error | RequestError): never {
    const parsedError = error instanceof RequestError
      ? parseLibError(error)
      : new AppError('Unknown client error');

    throw parsedError;
  }

  public async delete(path: UrlLike, options?: DeleteOptions): Promise<Response<void>> {
    try {
      return await this._instance.delete<void>(path, options);
    } catch (error) {
      this.handleError(error);
    }
  }

  public fetch<TParsed, TRaw>(path: UrlLike, options?: FetchOptions<TParsed, TRaw>): AsyncIterableIterator<TParsed> {
    const backoff = options?.pagination?.backoff ?? this.defaultBackoff;

    const newOptions = {
      ...options,
      pagination: {
        ...options?.pagination,
        backoff,
        paginate: paginatePatch,
      },
    };

    try {
      return this._instance.paginate<TParsed, TRaw>(path, newOptions);
    } catch (error) {
      this.handleError(error);
    }
  }

  public async get<TParsed>(path: UrlLike, options?: GetOptions): Promise<Response<TParsed>> {
    try {
      return await this._instance.get<TParsed>(path, options);
    } catch (error) {
      this.handleError(error);
    }
  }

  public async patch<TParsed>(path: UrlLike, options?: PatchOptions): Promise<Response<TParsed>> {
    try {
      return await this._instance.patch<TParsed>(path, options);
    } catch (error) {
      this.handleError(error);
    }
  }

  public async post<TParsed>(path: UrlLike, options?: PostOptions): Promise<Response<TParsed>> {
    try {
      return await this._instance.post<TParsed>(path, options);
    } catch (error) {
      this.handleError(error);
    }
  }

  public async put<TParsed>(path: UrlLike, options?: PutOptions): Promise<Response<TParsed>> {
    try {
      return await this._instance.put<TParsed>(path, options);
    } catch (error) {
      this.handleError(error);
    }
  }
}
