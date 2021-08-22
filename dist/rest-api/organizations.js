"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationService = void 0;
const service_1 = require("./service");
class OrganizationService extends service_1.GitHubService {
    fetch() {
        const pathname = 'organizations';
        return this._client.fetch(pathname);
    }
    async get(params) {
        const pathname = `orgs/${params.org}`;
        const response = await this._client.get(pathname);
        return response.body;
    }
}
exports.OrganizationService = OrganizationService;
