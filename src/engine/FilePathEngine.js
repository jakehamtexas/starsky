"use strict";
exports.__esModule = true;
var os_1 = require("os");
var path_1 = require("path");
var FilePathEngine = /** @class */ (function () {
    function FilePathEngine() {
        var homeDirName = os_1.homedir();
        var starskyDirName = '/.starsky';
        this.starskyDir = path_1.join(homeDirName, starskyDirName);
    }
    FilePathEngine.prototype.GetAuthFilePath = function () {
        return path_1.join(this.starskyDir, '/auth.json');
    };
    FilePathEngine.prototype.GetConfigFilePath = function () {
        return path_1.join(this.starskyDir, '/config.json');
    };
    return FilePathEngine;
}());
exports["default"] = new FilePathEngine();
