"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiError = exports.PathExistsError = exports.AppError = void 0;
class AppError extends Error {
    constructor(message) {
        const { name: trueName, prototype: trueProto, } = new.target;
        super(message);
        Object.setPrototypeOf(this, trueProto);
        this.name = trueName;
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
exports.AppError = AppError;
class PathExistsError extends AppError {
    constructor(path) {
        const message = `[PathExists] The path ${path} already exists`;
        super(message);
    }
}
exports.PathExistsError = PathExistsError;
class ApiError extends AppError {
    constructor(message, params) {
        const { request, response, statusCode, statusMessage, } = params;
        const errorMessage = `[${statusCode}] [${statusMessage}] ${message}`;
        super(errorMessage);
        this.request = request;
        this.response = response;
        this.statusCode = statusCode;
        this.statusMessage = statusMessage;
    }
}
exports.ApiError = ApiError;
