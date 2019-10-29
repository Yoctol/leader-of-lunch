"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bottender_1 = require("bottender");
var router_1 = require("bottender/router");
var line_1 = __importDefault(require("./line"));
var telegram_1 = __importDefault(require("./telegram"));
var slack_1 = __importDefault(require("./slack"));
exports.default = bottender_1.chain([
    router_1.router([
        router_1.platform('line', line_1.default),
        router_1.platform('slack', slack_1.default),
        router_1.platform('telegram', telegram_1.default),
    ]),
]);
