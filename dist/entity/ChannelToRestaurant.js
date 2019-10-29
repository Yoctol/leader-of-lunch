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
var Restaurant_1 = __importDefault(require("./Restaurant"));
var Election_1 = __importDefault(require("./Election"));
var User_1 = __importDefault(require("./User"));
var ChannelToRestaurant = /** @class */ (function (_super) {
    __extends(ChannelToRestaurant, _super);
    function ChannelToRestaurant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.Column({ unique: true }),
        __metadata("design:type", String)
    ], ChannelToRestaurant.prototype, "key", void 0);
    __decorate([
        typeorm_1.ManyToMany(function (type) { return Restaurant_1.default; }, function (restaurant) { return restaurant.channels; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], ChannelToRestaurant.prototype, "restaurants", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Election_1.default; }, function (election) { return election.channel; }),
        __metadata("design:type", Array)
    ], ChannelToRestaurant.prototype, "elections", void 0);
    __decorate([
        typeorm_1.ManyToMany(function (type) { return User_1.default; }, function (user) { return user.channels; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], ChannelToRestaurant.prototype, "users", void 0);
    ChannelToRestaurant = __decorate([
        typeorm_1.Entity()
    ], ChannelToRestaurant);
    return ChannelToRestaurant;
}(Base_1.default));
exports.default = ChannelToRestaurant;
