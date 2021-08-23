"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginatePatch = exports.parseLibError = exports.logRetry = exports.logRequest = void 0;
const url_1 = require("url");
const errors_1 = require("../errors");
const logRequest = (logger) => (options) => {
    const message = `[${options.method}] ${options.url}`;
    logger.info(message);
};
exports.logRequest = logRequest;
const logRetry = (logger) => (_options, error, retryCount) => {
    const message = `[${error?.response?.statusCode}] Attempt ${retryCount}`;
    logger.warning(message);
};
exports.logRetry = logRetry;
const parseLibError = (originalError) => {
    const { request, response, } = originalError;
    let errorMessage = originalError.message;
    if (response?.body != null) {
        errorMessage = response.body['message'];
    }
    const statusMessage = response?.statusMessage ?? 'Unknown';
    const statusCode = response?.statusCode ?? 'Unknown';
    const errorParams = {
        request,
        response,
        statusCode,
        statusMessage,
    };
    return new errors_1.ApiError(errorMessage, errorParams);
};
exports.parseLibError = parseLibError;
const paginatePatch = (response) => {
    if (!Reflect.has(response.headers, 'link')) {
        return false;
    }
    const link = response.headers['link'] ?? '';
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
        url: new url_1.URL(next),
    };
};
exports.paginatePatch = paginatePatch;
