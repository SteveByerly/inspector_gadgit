import type { GitHubApiOperations, GitHubApiSchemas } from '../schemas';
import { GitHubService } from './service';
export declare type OrganizationFull = GitHubApiSchemas['organization-full'];
export declare type OrganizationSimple = GitHubApiSchemas['organization-simple'];
export declare type OrganizationGetOperation = GitHubApiOperations['orgs/get'];
export declare type OrganizationGetParams = OrganizationGetOperation['parameters']['path'];
export declare class OrganizationService extends GitHubService {
    fetch(): AsyncIterableIterator<OrganizationSimple>;
    get(params: OrganizationGetParams): Promise<OrganizationFull>;
}
