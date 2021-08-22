"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoryService = void 0;
const service_1 = require("./service");
class RepositoryService extends service_1.GitHubService {
    async get(params) {
        const pathname = `repos/${params.owner}/${params.repo}`;
        const response = await this._client.get(pathname);
        return response.body;
    }
}
exports.RepositoryService = RepositoryService;
