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
var express_1 = require("express");
var passport_1 = require("passport");
var body_parser_1 = require("body-parser");
var passport_github2_1 = require("passport-github2");
var openurl_1 = require("openurl");
var AuthServerEngine = /** @class */ (function () {
    function AuthServerEngine() {
    }
    AuthServerEngine.prototype.InitiateAuthServerWorkflowAndGetToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, clientID, clientSecret;
            return __generator(this, function (_b) {
                _a = process.env, clientID = _a.CLIENT_ID, clientSecret = _a.CLIENT_SECRET;
                return [2 /*return*/, new Promise(function (resolve) {
                        passport_1["default"].use(new passport_github2_1.Strategy({
                            clientID: clientID,
                            clientSecret: clientSecret,
                            callbackURL: 'https://localhost:9001/callback'
                        }, function (accessToken, _refreshToken, _profile, done) {
                            resolve(accessToken);
                            return done(null, accessToken);
                        }));
                        var app = express_1["default"]();
                        app.use(body_parser_1["default"].urlencoded({ extended: true }));
                        app.use(body_parser_1["default"].json());
                        app.use(passport_1["default"].initialize());
                        app.use(passport_1["default"].session());
                        app.get('/login', passport_1["default"].authenticate('github', { scope: ['starred'] }), function (_req, _res) { });
                        app.get('/callback', passport_1["default"].authenticate('github', { failureRedirect: '/login' }), function (_, res) {
                            res.end('Close it!');
                        });
                        app.listen(9001);
                        openurl_1.open('http://localhost:9001/login');
                    })];
            });
        });
    };
    return AuthServerEngine;
}());
exports["default"] = new AuthServerEngine();
