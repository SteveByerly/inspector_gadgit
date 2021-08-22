// Lib
import { Command } from 'commander';
// App
import {
  DEFAULT_SCHEMA_PATH,
  DEFAULT_TYPES_PATH,
} from '../constants';
import {
  downloadApiSchema,
  generateApiSchemaTypes,
} from '../utils';

interface SchemaOptions {
  overwrite: boolean;
}

export const getSchemaCommand = (): Command => {
  const command = new Command();

  const getRootOptions = (): SchemaOptions => command.opts() as SchemaOptions;

  command
    .name('schema')
    .description('Update the OpenAPI schema and TypeScript typings')
    .option('--overwrite', 'Overwrite existing files', false);

  command
    .command('download')
    .description('Download the GitHub OpenAPI schema')
    .option('--dest <filepath>', 'Path to save OpenAPI schema (.json)', DEFAULT_SCHEMA_PATH)
    .action(async options => {
      const rootOptions = getRootOptions();
      await downloadApiSchema(options.dest, rootOptions.overwrite);
    });

  command
    .command('generate')
    .description('Generate typings from an OpenAPI schema')
    .option('--src <filepath>', 'Path of OpenAPI schema (.json)', DEFAULT_SCHEMA_PATH)
    .option('--dest <filepath>', 'Path to save TypeScript definition (.ts)', DEFAULT_TYPES_PATH)
    .action(async options => {
      const rootOptions = getRootOptions();
      await generateApiSchemaTypes(options.src, options.dest, rootOptions.overwrite);
    });

  return command;
};
