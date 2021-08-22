"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpClient = void 0;
const got_1 = require("got");
const errors_1 = require("../errors");
const handlers_1 = require("./handlers");
class HttpClient {
    constructor(params) {
        this.defaultBackoff = 1000;
        const { baseUrl: prefixUrl, headers, responseType = 'json', } = params;
        this._instance = got_1.default.extend({
            headers,
            prefixUrl,
            responseType,
            hooks: {
                beforeError: [],
                beforeRequest: [
                    handlers_1.logRequest,
                ],
                beforeRetry: [
                    handlers_1.logRetry,
                ],
            },
        });
    }
    get internalClient() {
        return this._instance.extend();
    }
    handleError(error) {
        const parsedError = error instanceof got_1.RequestError
            ? handlers_1.parseLibError(error)
            : new errors_1.AppError('Unknown client error');
        throw parsedError;
    }
    async delete(path, options) {
        try {
            return await this._instance.delete(path, options);
        }
        catch (error) {
            this.handleError(error);
        }
    }
    fetch(path, options) {
        const backoff = options?.pagination?.backoff ?? this.defaultBackoff;
        const newOptions = {
            ...options,
            pagination: {
                ...options?.pagination,
                backoff,
                paginate: handlers_1.paginatePatch,
            },
        };
        try {
            return this._instance.paginate(path, newOptions);
        }
        catch (error) {
            this.handleError(error);
        }
    }
    async get(path, options) {
        try {
            return await this._instance.get(path, options);
        }
        catch (error) {
            this.handleError(error);
        }
    }
    async patch(path, options) {
        try {
            return await this._instance.patch(path, options);
        }
        catch (error) {
            this.handleError(error);
        }
    }
    async post(path, options) {
        try {
            return await this._instance.post(path, options);
        }
        catch (error) {
            this.handleError(error);
        }
    }
    async put(path, options) {
        try {
            return await this._instance.put(path, options);
        }
        catch (error) {
            this.handleError(error);
        }
    }
}
exports.HttpClient = HttpClient;
