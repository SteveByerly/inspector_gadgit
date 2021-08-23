"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateApiSchemaTypes = exports.downloadApiSchema = exports.getApiSchemaUrl = exports.buildRawContentUrl = void 0;
const got_1 = require("got");
const openapi_typescript_1 = require("openapi-typescript");
const url_1 = require("url");
const constants_1 = require("../constants");
const files_1 = require("./files");
const logging_1 = require("./logging");
const logger = new logging_1.Logger('file utils');
const buildRawContentUrl = (params) => {
    const { filePath, repoName, repoOwner, treeIsh, } = params;
    const pathname = `/${repoOwner}/${repoName}/${treeIsh}/${filePath}`;
    const url = new url_1.URL(pathname, constants_1.GITHUB_RAW_BASE);
    return url.href;
};
exports.buildRawContentUrl = buildRawContentUrl;
const getApiSchemaUrl = (treeIsh = 'main') => (exports.buildRawContentUrl({
    treeIsh,
    filePath: constants_1.GITHUB_SCHEMA_PATH,
    repoName: constants_1.GITHUB_SCHEMA_REPO,
    repoOwner: constants_1.GITHUB_SCHEMA_OWNER,
}));
exports.getApiSchemaUrl = getApiSchemaUrl;
const downloadApiSchema = async (filepath, overwrite = false, treeIsh = 'main') => {
    const schemaUrl = exports.getApiSchemaUrl(treeIsh);
    const input = got_1.default.stream(schemaUrl);
    logger.info(`Downloading schema: ${schemaUrl}`);
    await files_1.writeFile(filepath, input, overwrite);
};
exports.downloadApiSchema = downloadApiSchema;
const generateApiSchemaTypes = async (schemaPath, typesPath, overwrite = false) => {
    const schemaOptions = {
        immutableTypes: true,
    };
    logger.info(`Generating types: ${schemaPath}`);
    const result = await openapi_typescript_1.default(schemaPath, schemaOptions);
    await files_1.writeFile(typesPath, result, overwrite);
};
exports.generateApiSchemaTypes = generateApiSchemaTypes;
