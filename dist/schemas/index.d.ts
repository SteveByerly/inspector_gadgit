import type { components, operations, paths } from './github-rest-api';
export declare type GitHubApiOperations = operations;
export declare type GitHubApiPaths = paths;
export declare type GitHubApiHeaders = components['headers'];
export declare type GitHubApiParameters = components['parameters'];
export declare type GitHubApiResponses = components['responses'];
export declare type GitHubApiSchemas = components['schemas'];
export interface GitHubApiComponents {
    headers: GitHubApiHeaders;
    parameters: GitHubApiParameters;
    responses: GitHubApiResponses;
    schemas: GitHubApiSchemas;
}
export interface GitHubApi {
    components: GitHubApiComponents;
    operations: GitHubApiOperations;
    paths: GitHubApiPaths;
}
