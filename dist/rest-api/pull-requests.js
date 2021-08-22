"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PullRequestService = void 0;
const service_1 = require("./service");
class PullRequestService extends service_1.GitHubService {
    search(query, params) {
        const searchParams = this.buildSearchParams(query, params);
        const pathname = 'search/issues';
        return this._search(pathname, searchParams);
    }
    async count(query, params) {
        const searchParams = this.buildSearchParams(query, { ...params, per_page: 1 });
        const pathname = 'search/issues';
        const response = await this._client.get(pathname, { searchParams });
        return response.body.total_count;
    }
    fetch(params, query) {
        const pathname = `repos/${params.owner}/${params.repo}/pulls`;
        return this._client.fetch(pathname, { searchParams: query });
    }
    async get(params) {
        const pathname = `repos/${params.owner}/${params.repo}/pulls/${params.pull_number}`;
        const response = await this._client.get(pathname);
        return response.body;
    }
    buildSearchParams(query, params) {
        const qualifiers = [
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
exports.PullRequestService = PullRequestService;
