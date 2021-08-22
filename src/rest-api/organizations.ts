// App
import type {
  GitHubApiOperations,
  GitHubApiSchemas,
} from '../schemas';
import { GitHubService } from './service';

export type OrganizationFull = GitHubApiSchemas['organization-full'];
export type OrganizationSimple = GitHubApiSchemas['organization-simple'];

export type OrganizationGetOperation = GitHubApiOperations['orgs/get'];
export type OrganizationGetParams = OrganizationGetOperation['parameters']['path'];

export class OrganizationService extends GitHubService {
  public fetch(): AsyncIterableIterator<OrganizationSimple> {
    const pathname = 'organizations';
    return this._client.fetch(pathname);
  }

  public async get(params: OrganizationGetParams): Promise<OrganizationFull> {
    const pathname = `orgs/${params.org}`;
    const response = await this._client.get<OrganizationFull>(pathname);
    return response.body;
  }
}
