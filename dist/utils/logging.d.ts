import type { Maybe } from '../types';
export declare enum LogLevel {
    DEBUG = 10,
    INFO = 20,
    WARNING = 30,
    ERROR = 40
}
export declare type LogLevelAlias = keyof typeof LogLevel;
export declare const LogLevelName: Record<LogLevel, LogLevelAlias>;
export interface LoggerParams {
    isEnabled?: boolean;
    level?: LogLevelAlias;
}
export declare class Logger {
    readonly name: string;
    protected static isEnabled: boolean;
    protected static level: LogLevel;
    protected static datetimeFormatOptions: Intl.DateTimeFormatOptions;
    constructor(name: string);
    static configure(options: LoggerParams): void;
    static debug(context: string, message: string): void;
    static info(context: string, message: string): void;
    static warning(context: string, message: string): void;
    static error(context: string, message: string, stackTrace: Maybe<string>): void;
    debug(message: string): void;
    info(message: string): void;
    warning(message: string): void;
    error(message: string, stackTrace: Maybe<string>): void;
    private static shouldLog;
    private static log;
    private static logStackTrace;
    private static timestampMessage;
    private static formatTimestamp;
}
