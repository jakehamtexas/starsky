"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var resource_1 = require("../resource");
var engine_1 = require("../engine");
var utils_1 = require("../utils");
var StarredRepoManager = /** @class */ (function () {
    function StarredRepoManager() {
    }
    StarredRepoManager.prototype.ListStarred = function () {
        return __awaiter(this, void 0, void 0, function () {
            var queryUsername, token, jsonArray;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._getQueryUsername()];
                    case 1:
                        queryUsername = _a.sent();
                        return [4 /*yield*/, this._getToken()];
                    case 2:
                        token = _a.sent();
                        return [4 /*yield*/, resource_1.RepoRA.ListStarredJson(queryUsername, token)];
                    case 3:
                        jsonArray = _a.sent();
                        return [2 /*return*/, utils_1.mapFromJson(jsonArray)];
                }
            });
        });
    };
    StarredRepoManager.prototype._getQueryUsername = function () {
        return __awaiter(this, void 0, void 0, function () {
            var configFilePath, configBuffer, queryUsername;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        configFilePath = engine_1.FilePathEngine.GetConfigFilePath();
                        return [4 /*yield*/, resource_1.FileSystemRA.ReadFile(configFilePath)];
                    case 1:
                        configBuffer = _a.sent();
                        queryUsername = utils_1.getFromBufferOrDefault(configBuffer).queryUsername;
                        return [2 /*return*/, queryUsername];
                }
            });
        });
    };
    StarredRepoManager.prototype._getToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var authFilePath, hasDir;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        authFilePath = engine_1.FilePathEngine.GetAuthFilePath();
                        hasDir = resource_1.FileSystemRA.HasFile(authFilePath);
                        if (!!hasDir) return [3 /*break*/, 2];
                        return [4 /*yield*/, resource_1.FileSystemRA.CreateDirForFile(authFilePath)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/, resource_1.TokenRA.GetToken()];
                }
            });
        });
    };
    return StarredRepoManager;
}());
exports["default"] = new StarredRepoManager();
