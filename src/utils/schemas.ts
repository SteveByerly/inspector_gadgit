// Lib
import { default as got } from 'got';
import {
  default as openapiTS,
  SwaggerToTSOptions,
} from 'openapi-typescript';
import { URL } from 'url';
// App
import {
  GITHUB_RAW_BASE,
  GITHUB_SCHEMA_OWNER,
  GITHUB_SCHEMA_PATH,
  GITHUB_SCHEMA_REPO,
} from '../constants';
import { writeFile } from './files';
import { Logger } from './logging';

const logger = new Logger('file utils');

export interface ContentUrlParams {
  filePath: string
  repoName: string;
  repoOwner: string;
  treeIsh: string;
}

export const buildRawContentUrl = (params: ContentUrlParams): string => {
  const {
    filePath,
    repoName,
    repoOwner,
    treeIsh,
  } = params;

  const pathname = `/${repoOwner}/${repoName}/${treeIsh}/${filePath}`;
  const url = new URL(pathname, GITHUB_RAW_BASE);
  return url.href;
};

export const getApiSchemaUrl = (treeIsh = 'main'): string => (
  buildRawContentUrl({
    treeIsh,
    filePath: GITHUB_SCHEMA_PATH,
    repoName: GITHUB_SCHEMA_REPO,
    repoOwner: GITHUB_SCHEMA_OWNER,
  })
);

export const downloadApiSchema = async (filepath: string, overwrite = false, treeIsh = 'main'): Promise<void> => {
  const schemaUrl = getApiSchemaUrl(treeIsh);
  const input = got.stream(schemaUrl);

  logger.info(`Downloading schema: ${schemaUrl}`);

  await writeFile(filepath, input, overwrite);
};

export const generateApiSchemaTypes = async (schemaPath: string, typesPath: string, overwrite = false): Promise<void> => {
  const schemaOptions: SwaggerToTSOptions = {
    immutableTypes: true,
  };

  logger.info(`Generating types: ${schemaPath}`);

  const result = await openapiTS(schemaPath, schemaOptions);
  await writeFile(typesPath, result, overwrite);
};
