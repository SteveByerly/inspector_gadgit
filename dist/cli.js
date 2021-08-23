"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliApp = void 0;
const chalk = require("chalk");
const commander_1 = require("commander");
const constants_1 = require("./constants");
const cli_1 = require("./rest-api/cli");
const cli_2 = require("./schemas/cli");
const utils_1 = require("./utils");
const logger = new utils_1.Logger(constants_1.CLI_COMMAND);
const handleExit = (error) => {
    let exitCode = 1;
    let parsedError = error;
    let logMessage;
    if (error instanceof commander_1.CommanderError) {
        exitCode = error.exitCode;
        logMessage = error.message;
        parsedError = error.nestedError;
        if (!error.code.startsWith('commander.help')) {
            exports.cliApp.outputHelp({ error: true });
        }
    }
    if (parsedError instanceof Error) {
        logger.error(parsedError.message, parsedError.stack);
    }
    else {
        logMessage = parsedError ?? 'Unknown error';
        logger.error(logMessage, null);
    }
    process.exit(exitCode);
};
exports.cliApp = new commander_1.Command();
exports.cliApp
    .name(constants_1.CLI_COMMAND)
    .version(constants_1.CLI_VERSION, '--version')
    .description('CLI application for inspecting GitHub resources')
    .allowExcessArguments(false)
    .showHelpAfterError(true)
    .configureOutput({ outputError: (str, write) => write(chalk.red(str)) })
    .option('--verbose', 'Show verbose logging')
    .addCommand(cli_1.getApiCommand())
    .addCommand(cli_2.getSchemaCommand());
exports.cliApp.parseAsync(process.argv)
    .then(() => process.exit(0))
    .catch(handleExit);
