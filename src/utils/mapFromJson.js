"use strict";
exports.__esModule = true;
var toOwner = function (_a) {
    var owner = _a.owner;
    var login = owner['login'];
    var id = owner['id'];
    var url = owner['url'];
    return {
        login: login,
        id: id,
        url: url
    };
};
var toStarredRepo = function (repo) {
    var id = repo['id'];
    var name = repo['name'];
    var owner = toOwner(repo);
    var description = repo['description'];
    var language = repo['language'];
    return {
        id: id,
        name: name,
        owner: owner,
        description: description,
        language: language
    };
};
var mapFromJson = function (repos) {
    return repos.map(toStarredRepo);
};
exports["default"] = mapFromJson;
