"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var render_1 = __importDefault(require("../render"));
var Election_1 = __importDefault(require("../../entity/Election"));
var Option_1 = __importDefault(require("../../entity/Option"));
var ChannelRestaurant_1 = __importDefault(require("../../entity/ChannelRestaurant"));
function ElectionsCreate(context) {
    return __awaiter(this, void 0, void 0, function () {
        var channel, election, channelRestaurants, restaurants, options, i, restaurant, option;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    channel = context.channel;
                    election = new Election_1.default();
                    election.channel = channel;
                    return [4 /*yield*/, election.save()
                        //get random 4 restaurants
                    ];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, ChannelRestaurant_1.default
                            .createQueryBuilder('cr')
                            .leftJoinAndSelect("cr.restaurant", "restaurant")
                            .where('"cr"."channelId" = :channelId', { channelId: channel.id })
                            .orderBy('random()')
                            .limit(4)
                            .getMany()];
                case 2:
                    channelRestaurants = _a.sent();
                    restaurants = channelRestaurants.map(function (cr) { return cr.restaurant; });
                    console.log(restaurants);
                    options = [];
                    i = 0;
                    _a.label = 3;
                case 3:
                    if (!(i < restaurants.length)) return [3 /*break*/, 6];
                    restaurant = restaurants[i];
                    console.log(restaurant);
                    option = new Option_1.default();
                    option.restaurant = restaurant;
                    option.election = election;
                    option.index = i + 1;
                    options.push(option);
                    return [4 /*yield*/, option.save()];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5:
                    i++;
                    return [3 /*break*/, 3];
                case 6: return [2 /*return*/, render_1.default('elections/create', { options: options })];
            }
        });
    });
}
exports.default = ElectionsCreate;
;
