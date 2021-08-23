// Lib
import * as chalk from 'chalk';
// App
import type { Maybe } from '../types';

export enum LogLevel {
  DEBUG = 10,
  INFO = 20,
  WARNING = 30,
  ERROR = 40,
}

export type LogLevelAlias = keyof typeof LogLevel;

export const LogLevelName: Record<LogLevel, LogLevelAlias> = {
  [LogLevel.DEBUG]: 'DEBUG',
  [LogLevel.INFO]: 'INFO',
  [LogLevel.WARNING]: 'WARNING',
  [LogLevel.ERROR]: 'ERROR',
};

export interface LoggerParams {
  isEnabled?: boolean;
  level?: LogLevelAlias;
}

export class Logger {
  public readonly name: string;

  protected static isEnabled = true;
  protected static level: LogLevel = LogLevel.INFO;

  protected static datetimeFormatOptions: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
    month: '2-digit',
    second: 'numeric',
    year: 'numeric',
  };

  constructor(name: string) {
    this.name = name;
  }

  public static configure(options: LoggerParams): void {
    this.isEnabled = options.isEnabled ?? true;
    this.level = options.level
      ? LogLevel[options.level]
      : LogLevel.INFO;
  }

  public static debug(context: string, message: string): void {
    this.log(LogLevel.DEBUG, context, message);
  }

  public static info(context: string, message: string): void {
    this.log(LogLevel.INFO, context, message);
  }

  public static warning(context: string, message: string): void {
    this.log(LogLevel.WARNING, context, message, chalk.yellow);
  }

  public static error(context: string, message: string, stackTrace: Maybe<string>): void {
    this.log(LogLevel.ERROR, context, message, chalk.red);
    this.logStackTrace(stackTrace);
  }

  public debug(message: string): void {
    Logger.debug(this.name, message);
  }

  public info(message: string): void {
    Logger.info(this.name, message);
  }

  public warning(message: string): void {
    Logger.warning(this.name, message);
  }

  public error(message: string, stackTrace: Maybe<string>): void {
    Logger.error(this.name, message, stackTrace);
  }

  private static shouldLog(level: LogLevel): boolean {
    return Logger.isEnabled && level >= Logger.level;
  }

  private static log(
    level: LogLevel,
    context: string,
    message: string,
    style?: chalk.ChalkFunction
  ) {
    if (!this.shouldLog(level)) {
      return;
    }

    const levelName = LogLevelName[level];
    const timestamp = Logger.timestampMessage();

    let computedMessage = `[${levelName}] [${timestamp}] [${context}] ${message}`;

    if (style) {
      computedMessage = style(computedMessage);
    }

    const logStream = level >= LogLevel.ERROR ? console.error : console.log;
    logStream(computedMessage);
  }

  private static logStackTrace(stackTrace: Maybe<string>) {
    if (!stackTrace) {
      return;
    }

    console.error(`${chalk.red(stackTrace)}`);
  }

  private static timestampMessage(): string {
    const nextTimestamp = Date.now();
    return Logger.formatTimestamp(nextTimestamp);
  }

  private static formatTimestamp(timestamp: number) {
    return new Date(timestamp).toLocaleString(undefined, Logger.datetimeFormatOptions);
  }
}
