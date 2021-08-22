"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitHubService = void 0;
const constants_1 = require("../constants");
const utils_1 = require("../utils");
const http_client_1 = require("../http-client");
class GitHubService {
    constructor(params) {
        this.authToken = params.authToken ?? process.env['GITHUB_TOKEN'];
        this.baseUrl = params.baseUrl ?? constants_1.GITHUB_API_BASE;
        this.version = params.version ?? constants_1.GITHUB_API_VERSION;
        const headers = this.buildRequestHeaders();
        this._client = new http_client_1.HttpClient({
            headers,
            baseUrl: this.baseUrl,
            responseType: 'json',
        });
    }
    buildRequestHeaders() {
        const defaultMediaType = this.getMediaType(this.version);
        const headers = {
            accept: defaultMediaType,
            'user-agent': constants_1.USER_AGENT,
        };
        if (this.authToken) {
            headers.authorization = `token ${this.authToken}`;
        }
        return headers;
    }
    getMediaType(format) {
        const specifier = format?.length
            ? `${this.version}.${format}`
            : `${this.version}`;
        return `application/vnd.github.${specifier}+json`;
    }
    parseRateLimit(headers) {
        return {
            limit: utils_1.toInteger(headers['x-ratelimit-limit']),
            remaining: utils_1.toInteger(headers['x-ratelimit-remaining']),
            reset: utils_1.toInteger(headers['x-ratelimit-reset']),
            resource: headers['x-ratelimit-resource'],
            used: utils_1.toInteger(headers['x-ratelimit-used']),
        };
    }
    buildSearchQuery(queryTokens) {
        const { qualifiers, term = '', } = queryTokens;
        const parsedTokens = [term, ...qualifiers]
            .map(value => value.trim())
            .filter(value => value.length);
        return parsedTokens.join(' ');
    }
    _search(pathname, searchParams) {
        const transform = async (response) => {
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
exports.GitHubService = GitHubService;
