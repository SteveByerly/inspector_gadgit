// Lib
import * as chalk from 'chalk';
import { Command } from 'commander';
// App
import {
  CLI_COMMAND,
  CLI_VERSION,
} from './constants';
import { getApiCommand } from './rest-api/cli';
import { getSchemaCommand } from './schemas/cli';
import {
  getLogTimestamp,
} from './utils';

export const cliApp = new Command();

cliApp
  .name(CLI_COMMAND)
  .version(CLI_VERSION, '--version')
  .description('CLI application for inspecting GitHub resources')
  .allowExcessArguments(false)
  .showHelpAfterError(true)
  .configureOutput({ outputError: (str, write) => write(chalk.red(str)) })
  .option('--verbose', 'Show verbose logging')
  .addCommand(getApiCommand())
  .addCommand(getSchemaCommand());

cliApp.parseAsync(process.argv)
  .then(() => process.exit(0))
  .catch(error => {
    const errorTime = getLogTimestamp();
    const message = `[${errorTime}] ${error.message}`;
    console.error(chalk.red(message));

    if (cliApp.getOptionValue('verbose')) {
      console.error(chalk.red(error.stack));
    }
  });
