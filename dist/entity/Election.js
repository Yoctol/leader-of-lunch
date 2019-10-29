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
var Option_1 = __importDefault(require("./Option"));
var Election = /** @class */ (function (_super) {
    __extends(Election, _super);
    function Election() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Channel_1.default; }, function (channel) { return channel.elections; }, { nullable: false }),
        __metadata("design:type", Promise)
    ], Election.prototype, "channel", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Option_1.default; }, function (option) { return option.election; }, {
            eager: true
        }),
        __metadata("design:type", Option_1.default)
    ], Election.prototype, "options", void 0);
    Election = __decorate([
        typeorm_1.Entity()
    ], Election);
    return Election;
}(Base_1.default));
exports.default = Election;
