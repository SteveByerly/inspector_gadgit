// Lib
import type {
  BeforeRequestHook,
  BeforeRetryHook,
  Options as LibOptions,
  RequestError,
} from 'got';
import { URL } from 'url';
// App
import { ApiError } from '../errors';
import type { Dict } from '../types';
import type { Logger } from '../utils';
import type { Response } from './types';

export const logRequest = (logger: Logger): BeforeRequestHook => (options) => {
  const message = `[${options.method}] ${options.url}`;
  logger.info(message);
};

export const logRetry = (logger: Logger): BeforeRetryHook => (_options, error, retryCount) => {
  const message = `[${error?.response?.statusCode}] Attempt ${retryCount}`;
  logger.warning(message);
};

export const parseLibError = (originalError: RequestError): ApiError => {
  const {
    request,
    response,
  } = originalError;

  let errorMessage = originalError.message;

  if (response?.body != null) {
    errorMessage = (response.body as Dict)['message'] as string;
  }

  const statusMessage = response?.statusMessage ?? 'Unknown';
  const statusCode = response?.statusCode ?? 'Unknown';

  const errorParams = {
    request,
    response,
    statusCode,
    statusMessage,
  };

  return new ApiError(errorMessage, errorParams);
};

/*
  Workaround for pagination losing the new `page` param when merging SearchParams option.
  Without this change, the same URL will be requested in a continuous loop.
  https://github.com/sindresorhus/got/issues/1052#issuecomment-622125307

  The only difference in this code is the addition of `searchParams: '',` to the return value.
  https://github.com/sindresorhus/got/blob/v11.8.2/source/index.ts#L80
*/
export const paginatePatch = <T>(response: Response<T>): LibOptions | false => {
  if (!Reflect.has(response.headers, 'link')) {
    return false;
  }

  const link = response.headers['link'] as string ?? '';
  const items = link.split(',');

  let next;
  for (const item of items) {
    const parsed = item.split(';');

    if (parsed[1]?.includes('next')) {
      next = parsed[0]?.trimStart().trim();
      next = next?.slice(1, -1);
      break;
    }
  }

  if (!next) {
    return false;
  }

  return {
    searchParams: '',
    url: new URL(next),
  };
};
