import type { GitHubApiOperations } from '../schemas';
import { GitHubService } from './service';
import type { RepositoryFull } from './types';
export declare type RepositoryGetOperation = GitHubApiOperations['repos/get'];
export declare type RepositoryGetParams = RepositoryGetOperation['parameters']['path'];
export declare class RepositoryService extends GitHubService {
    get(params: RepositoryGetParams): Promise<RepositoryFull>;
}
