"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toFloat = exports.toInteger = exports.isString = exports.isNumber = void 0;
const isNumber = (value) => {
    return typeof value === 'number';
};
exports.isNumber = isNumber;
const isString = (value) => {
    return typeof value === 'string';
};
exports.isString = isString;
function toInteger(value) {
    if (value == null || exports.isNumber(value)) {
        return value;
    }
    return parseInt(value, 10);
}
exports.toInteger = toInteger;
function toFloat(value) {
    if (value == null || exports.isNumber(value)) {
        return value;
    }
    return parseFloat(value);
}
exports.toFloat = toFloat;
