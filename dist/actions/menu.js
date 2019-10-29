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
Object.defineProperty(exports, "__esModule", { value: true });
function Menu(context) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, context.sendText("\u4F7F\u7528\u8005\u76F8\u95DC\u6307\u4EE4\uFF1A\n  \u67E5\u770B\u66B1\u7A31\uFF1A\u300C\u6211\u8AB0\u300D\n  \u4FEE\u6539\u66B1\u7A31\uFF1A\u300C\u53EB\u6211{\u66B1\u7A31}\u300D\n\n\u9910\u5EF3\u76F8\u95DC\u6307\u4EE4\uFF1A\n  \u67E5\u770B\u6240\u6709\u9910\u5EF3\uFF1A\u300C\u9910\u5EF3\u300D\n  \u65B0\u589E\u9910\u5EF3\uFF1A\u300C\u65B0\u589E{\u9910\u5EF3\u540D\u7A31}\u300D\n  \u522A\u9664\u9910\u5EF3\uFF1A\u300C\u522A\u9664{\u9910\u5EF3\u540D\u7A31}\u300D\n  \u4E00\u6B21\u5BEB\u5165\u591A\u7B46\u6642\u4F7F\u7528/\u548C\u7A7A\u767D\u4F5C\u70BA\u9593\u9694\u7B26\u865F\n\n\u6295\u7968\u76F8\u95DC\u6307\u4EE4\uFF1A\n  \u5EFA\u7ACB\u7968\u9078\u6D3B\u52D5\uFF1A\u300C\u9913\u4E86|\u5403\u98EF|\u5348\u9910\u300D\n  \u53C3\u8207\u6295\u7968\uFF1A\u300C1\u300D\u300C2\u300D\u300C3\u300D\u300C4\u300D\n  \u986F\u793A\u7D71\u8A08\uFF1A\u300C\u8D70|\u51FA\u767C|\u7D71\u8A08\u300D\n")];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.default = Menu;
;
