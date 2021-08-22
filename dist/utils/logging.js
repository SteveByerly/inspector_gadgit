"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLogTimestamp = void 0;
const datetimeFormatOptions = {
    day: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
    month: '2-digit',
    second: 'numeric',
    year: 'numeric',
};
const getLogTimestamp = () => {
    const timestamp = Date.now();
    return new Date(timestamp).toLocaleString(undefined, datetimeFormatOptions);
};
exports.getLogTimestamp = getLogTimestamp;
