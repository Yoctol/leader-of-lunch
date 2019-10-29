"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bottender_1 = require("bottender");
var addChannel_1 = __importDefault(require("./addChannel"));
var addUser_1 = __importDefault(require("./addUser"));
var addText_1 = __importDefault(require("./addText"));
exports.default = bottender_1.chain([addChannel_1.default, addUser_1.default, addText_1.default]);
