"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSchemaCommand = void 0;
const commander_1 = require("commander");
const constants_1 = require("../constants");
const utils_1 = require("../utils");
const getSchemaCommand = () => {
    const command = new commander_1.Command();
    const getRootOptions = () => command.opts();
    command
        .name('schema')
        .description('Update the OpenAPI schema and TypeScript typings')
        .showHelpAfterError(true)
        .option('--overwrite', 'Overwrite existing files', false);
    command
        .command('download')
        .description('Download the GitHub OpenAPI schema')
        .option('--dest <filepath>', 'Path to save OpenAPI schema (.json)', constants_1.DEFAULT_SCHEMA_PATH)
        .action(async (options) => {
        const rootOptions = getRootOptions();
        await utils_1.downloadApiSchema(options.dest, rootOptions.overwrite);
    });
    command
        .command('generate')
        .description('Generate typings from an OpenAPI schema')
        .option('--src <filepath>', 'Path of OpenAPI schema (.json)', constants_1.DEFAULT_SCHEMA_PATH)
        .option('--dest <filepath>', 'Path to save TypeScript definition (.ts)', constants_1.DEFAULT_TYPES_PATH)
        .action(async (options) => {
        const rootOptions = getRootOptions();
        await utils_1.generateApiSchemaTypes(options.src, options.dest, rootOptions.overwrite);
    });
    return command;
};
exports.getSchemaCommand = getSchemaCommand;
