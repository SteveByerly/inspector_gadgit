// Lib
import * as path from 'path';

export const CLI_COMMAND = 'gogo-gadgit';
export const CLI_VERSION = '0.1.0';

export const USER_AGENT = 'https://github.com/stevebyerly/inspector_gadgit';

export const GITHUB_API_BASE = 'https://api.github.com';
export const GITHUB_API_VERSION = 'v3';

export const GITHUB_RAW_BASE = 'https://raw.githubusercontent.com';

export const GITHUB_SCHEMA_OWNER = 'github';
export const GITHUB_SCHEMA_REPO = 'rest-api-description';
export const GITHUB_SCHEMA_PATH = 'descriptions/api.github.com/api.github.com.json';

export const DEFAULT_SCHEMA_PATH = path.resolve(__dirname, './schemas/github-rest-api.json');
export const DEFAULT_TYPES_PATH = path.resolve(__dirname, './schemas/github-rest-api.ts');
