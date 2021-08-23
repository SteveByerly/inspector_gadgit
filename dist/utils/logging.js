"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = exports.LogLevelName = exports.LogLevel = void 0;
const chalk = require("chalk");
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["DEBUG"] = 10] = "DEBUG";
    LogLevel[LogLevel["INFO"] = 20] = "INFO";
    LogLevel[LogLevel["WARNING"] = 30] = "WARNING";
    LogLevel[LogLevel["ERROR"] = 40] = "ERROR";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
exports.LogLevelName = {
    [LogLevel.DEBUG]: 'DEBUG',
    [LogLevel.INFO]: 'INFO',
    [LogLevel.WARNING]: 'WARNING',
    [LogLevel.ERROR]: 'ERROR',
};
class Logger {
    constructor(name) {
        this.name = name;
    }
    static configure(options) {
        this.isEnabled = options.isEnabled ?? true;
        this.level = options.level
            ? LogLevel[options.level]
            : LogLevel.INFO;
    }
    static debug(context, message) {
        this.log(LogLevel.DEBUG, context, message);
    }
    static info(context, message) {
        this.log(LogLevel.INFO, context, message);
    }
    static warning(context, message) {
        this.log(LogLevel.WARNING, context, message, chalk.yellow);
    }
    static error(context, message, stackTrace) {
        this.log(LogLevel.ERROR, context, message, chalk.red);
        this.logStackTrace(stackTrace);
    }
    debug(message) {
        Logger.debug(this.name, message);
    }
    info(message) {
        Logger.info(this.name, message);
    }
    warning(message) {
        Logger.warning(this.name, message);
    }
    error(message, stackTrace) {
        Logger.error(this.name, message, stackTrace);
    }
    static shouldLog(level) {
        return Logger.isEnabled && level >= Logger.level;
    }
    static log(level, context, message, style) {
        if (!this.shouldLog(level)) {
            return;
        }
        const levelName = exports.LogLevelName[level];
        const timestamp = Logger.timestampMessage();
        let computedMessage = `[${levelName}] [${timestamp}] [${context}] ${message}`;
        if (style) {
            computedMessage = style(computedMessage);
        }
        const logStream = level >= LogLevel.ERROR ? console.error : console.log;
        logStream(computedMessage);
    }
    static logStackTrace(stackTrace) {
        if (!stackTrace) {
            return;
        }
        console.error(`${chalk.red(stackTrace)}`);
    }
    static timestampMessage() {
        const nextTimestamp = Date.now();
        return Logger.formatTimestamp(nextTimestamp);
    }
    static formatTimestamp(timestamp) {
        return new Date(timestamp).toLocaleString(undefined, Logger.datetimeFormatOptions);
    }
}
exports.Logger = Logger;
Logger.isEnabled = true;
Logger.level = LogLevel.INFO;
Logger.datetimeFormatOptions = {
    day: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
    month: '2-digit',
    second: 'numeric',
    year: 'numeric',
};
