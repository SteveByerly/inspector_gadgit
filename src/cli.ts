// Lib
import * as chalk from 'chalk';
import { Command, CommanderError } from 'commander';
// App
import {
  CLI_COMMAND,
  CLI_VERSION,
} from './constants';
import { getApiCommand } from './rest-api/cli';
import { getSchemaCommand } from './schemas/cli';
import type { Maybe } from './types';
import {
  Logger,
} from './utils';

const logger = new Logger(CLI_COMMAND);

const handleExit = (error: CommanderError | Error | string) => {
  let exitCode = 1;
  let parsedError: Maybe<string | Error> = error;
  let logMessage: Maybe<string>;

  if (error instanceof CommanderError) {
    exitCode = error.exitCode;
    logMessage = error.message;
    parsedError = error.nestedError;

    if (!error.code.startsWith('commander.help')) {
      cliApp.outputHelp({ error: true });
    }
  }

  if (parsedError instanceof Error) {
    logger.error(parsedError.message, parsedError.stack);
  } else {
    logMessage = parsedError ?? 'Unknown error';
    logger.error(logMessage, null);
  }

  process.exit(exitCode);
};

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
  .catch(handleExit);
