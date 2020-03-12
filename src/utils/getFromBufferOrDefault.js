"use strict";
exports.__esModule = true;
var getFromBufferOrDefault = function (buffer) {
    return buffer.length === 0 ? {} : JSON.parse(buffer.toString());
};
exports["default"] = getFromBufferOrDefault;
