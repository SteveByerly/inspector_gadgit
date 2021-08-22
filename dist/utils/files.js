"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadFile = exports.writeFile = exports.pathExists = void 0;
const chalk = require("chalk");
const fs_1 = require("fs");
const fs = require("fs/promises");
const promises_1 = require("stream/promises");
const got_1 = require("got");
const errors_1 = require("../errors");
const pathExists = async (path) => {
    try {
        await fs.access(path);
        return true;
    }
    catch {
        return false;
    }
};
exports.pathExists = pathExists;
const writeFile = async (filepath, source, overwrite = false) => {
    const fileExists = await exports.pathExists(filepath);
    if (fileExists !== false) {
        if (overwrite !== true) {
            throw new errors_1.PathExistsError(filepath);
        }
        console.log(chalk.yellow(`Overwriting file: ${filepath}`));
    }
    const dest = fs_1.createWriteStream(filepath);
    await promises_1.pipeline(source, dest);
};
exports.writeFile = writeFile;
const downloadFile = async (filepath, url, overwrite = false) => {
    const input = got_1.default.stream(url);
    await exports.writeFile(filepath, input, overwrite);
};
exports.downloadFile = downloadFile;
