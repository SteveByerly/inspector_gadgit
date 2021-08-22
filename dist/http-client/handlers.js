"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginatePatch = exports.parseLibError = exports.logRetry = exports.logRequest = void 0;
const chalk = require("chalk");
const url_1 = require("url");
const errors_1 = require("../errors");
const utils_1 = require("../utils");
const logRequest = (options) => {
    const requestTime = utils_1.getLogTimestamp();
    const message = `[${requestTime}] [${options.method}] ${options.url}`;
    console.info(chalk.yellow(message));
};
exports.logRequest = logRequest;
const logRetry = (_options, error, retryCount) => {
    const requestTime = utils_1.getLogTimestamp();
    const message = `[${requestTime}] [${error?.response?.statusCode}] Attempt ${retryCount}`;
    console.warn(chalk.yellow(message));
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
