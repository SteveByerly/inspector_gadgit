// App
import type { GitHubApiOperations } from '../schemas';
import { GitHubService } from './service';
import type { RepositoryFull } from './types';

export type RepositoryGetOperation = GitHubApiOperations['repos/get'];
export type RepositoryGetParams = RepositoryGetOperation['parameters']['path'];

export class RepositoryService extends GitHubService {
  public async get(params: RepositoryGetParams): Promise<RepositoryFull> {
    const pathname = `repos/${params.owner}/${params.repo}`;
    const response = await this._client.get<RepositoryFull>(pathname);
    return response.body;
  }
}
