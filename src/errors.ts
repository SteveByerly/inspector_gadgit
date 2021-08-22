// App
import type { Request, Response } from './http-client';
import type { Maybe } from './types';

export class AppError extends Error {
  constructor(message: string) {
    const {
      name: trueName,
      prototype: trueProto,
    } = new.target;

    super(message);

    Object.setPrototypeOf(this, trueProto);
    this.name = trueName;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export class PathExistsError extends AppError {
  constructor(path: string) {
    const message = `[PathExists] The path ${path} already exists`;
    super(message);
  }
}

export interface ApiErrorParams {
  request: Maybe<Request>;
  response: Maybe<Response<unknown>>;
  statusCode: string | number;
  statusMessage: string;
}

export class ApiError extends AppError {
  public readonly request: Maybe<Request>;
  public readonly response: Maybe<Response<unknown>>;
  public readonly statusCode: string | number;
  public readonly statusMessage: string;

  constructor(message: string, params: ApiErrorParams) {
    const {
      request,
      response,
      statusCode,
      statusMessage,
    } = params;

    const errorMessage = `[${statusCode}] [${statusMessage}] ${message}`;
    super(errorMessage);

    this.request = request;
    this.response = response;
    this.statusCode = statusCode;
    this.statusMessage = statusMessage;
  }
}
