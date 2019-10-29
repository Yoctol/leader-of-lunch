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
var router_1 = require("bottender/router");
var debug_1 = __importDefault(require("./debug"));
var menu_1 = __importDefault(require("./menu"));
var show_1 = __importDefault(require("./users/show"));
var update_1 = __importDefault(require("./users/update"));
var index_1 = __importDefault(require("./users/index"));
var create_1 = __importDefault(require("./restaurants/create"));
var delete_1 = __importDefault(require("./restaurants/delete"));
var index_2 = __importDefault(require("./restaurants/index"));
var create_2 = __importDefault(require("./elections/create"));
var show_2 = __importDefault(require("./elections/show"));
var create_3 = __importDefault(require("./votes/create"));
var delete_2 = __importDefault(require("./votes/delete"));
function ActionsRouter() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, router_1.router([
                    {
                        predicate: function (context) { return context.text == 'follow' || context.text == 'join'; },
                        action: menu_1.default,
                    },
                    router_1.text(/menu|help|午餐隊長|教學|\/start|開始使用/, menu_1.default),
                    router_1.text(/^餐廳/, index_2.default),
                    router_1.text(/^新增(?<name>[\s\S]+)/, create_1.default),
                    router_1.text(/^刪除(?<name>[\s\S]+)/, delete_1.default),
                    router_1.text(/^不吃|pass/, delete_2.default),
                    router_1.text(/^(餓|想?吃|午餐)/, create_2.default),
                    router_1.text(/^走|出發|統計/, show_2.default),
                    router_1.text(/^(1|2|3|4|one|two|three|four).*$/, create_3.default),
                    router_1.text(/^我是?誰/, show_1.default),
                    router_1.text(/^(叫我|我叫)(?<name>.+)/, update_1.default),
                    router_1.text(['暱稱', 'users'], index_1.default),
                    router_1.text("*", debug_1.default),
                ])];
        });
    });
}
exports.default = ActionsRouter;
