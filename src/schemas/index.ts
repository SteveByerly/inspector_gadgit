import type {
  components,
  operations,
  paths,
} from './github-rest-api';

export type GitHubApiOperations = operations;
export type GitHubApiPaths = paths;

export type GitHubApiHeaders = components['headers'];
export type GitHubApiParameters = components['parameters'];
export type GitHubApiResponses = components['responses'];
export type GitHubApiSchemas = components['schemas'];

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
