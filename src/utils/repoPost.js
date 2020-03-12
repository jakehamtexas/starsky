"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var axios_1 = require("axios");
var params = {
    per_page: 100
};
var repoPost = function (endpoint, token, reqParams) {
    if (reqParams === void 0) { reqParams = {}; }
    return axios_1["default"].post(endpoint, {
        params: __assign({}, params, reqParams),
        headers: {
            Authorization: "Bearer " + token,
            'Content-Type': 'application/json'
        }
    });
};
exports["default"] = repoPost;
