"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Base_1 = __importDefault(require("./Base"));
var Channel_1 = __importDefault(require("./Channel"));
var User_1 = __importDefault(require("./User"));
var ChannelUser = /** @class */ (function (_super) {
    __extends(ChannelUser, _super);
    function ChannelUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.ManyToOne(function (type) { return User_1.default; }, function (user) { return user.channelUsers; }),
        __metadata("design:type", Promise)
    ], ChannelUser.prototype, "user", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Channel_1.default; }, function (channel) { return channel.channelUsers; }),
        __metadata("design:type", Promise)
    ], ChannelUser.prototype, "channel", void 0);
    ChannelUser = __decorate([
        typeorm_1.Entity()
    ], ChannelUser);
    return ChannelUser;
}(Base_1.default));
exports.default = ChannelUser;
