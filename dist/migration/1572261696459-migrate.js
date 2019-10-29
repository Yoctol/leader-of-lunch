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
var migrate1572261696459 = /** @class */ (function () {
    function migrate1572261696459() {
        this.name = 'migrate1572261696459';
    }
    migrate1572261696459.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("CREATE TABLE \"channel_restaurant\" (\"id\" SERIAL NOT NULL, \"createdAt\" integer NOT NULL DEFAULT 0, \"updatedAt\" integer, \"restaurantId\" integer, \"channelId\" integer, CONSTRAINT \"PK_18d886f072fe8a412ca480a15cc\" PRIMARY KEY (\"id\"))", undefined)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"restaurant\" (\"id\" SERIAL NOT NULL, \"createdAt\" integer NOT NULL DEFAULT 0, \"updatedAt\" integer, \"name\" character varying NOT NULL, CONSTRAINT \"UQ_9315499c5bf5ead89fbb877a0b5\" UNIQUE (\"name\"), CONSTRAINT \"PK_649e250d8b8165cb406d99aa30f\" PRIMARY KEY (\"id\"))", undefined)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"channel_user\" (\"id\" SERIAL NOT NULL, \"createdAt\" integer NOT NULL DEFAULT 0, \"updatedAt\" integer, \"userId\" integer, \"channelId\" integer, CONSTRAINT \"PK_7e5d4007402f6c41e35003494f8\" PRIMARY KEY (\"id\"))", undefined)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"user\" (\"id\" SERIAL NOT NULL, \"createdAt\" integer NOT NULL DEFAULT 0, \"updatedAt\" integer, \"key\" character varying NOT NULL, \"name\" character varying, CONSTRAINT \"UQ_7b57429bcc6c6265ddd4e92f063\" UNIQUE (\"key\"), CONSTRAINT \"PK_cace4a159ff9f2512dd42373760\" PRIMARY KEY (\"id\"))", undefined)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"vote\" (\"id\" SERIAL NOT NULL, \"createdAt\" integer NOT NULL DEFAULT 0, \"updatedAt\" integer, \"optionId\" integer NOT NULL, \"userId\" integer NOT NULL, CONSTRAINT \"PK_2d5932d46afe39c8176f9d4be72\" PRIMARY KEY (\"id\"))", undefined)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"option\" (\"id\" SERIAL NOT NULL, \"createdAt\" integer NOT NULL DEFAULT 0, \"updatedAt\" integer, \"index\" integer NOT NULL, \"restaurantId\" integer NOT NULL, \"electionId\" integer NOT NULL, CONSTRAINT \"PK_e6090c1c6ad8962eea97abdbe63\" PRIMARY KEY (\"id\"))", undefined)];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"election\" (\"id\" SERIAL NOT NULL, \"createdAt\" integer NOT NULL DEFAULT 0, \"updatedAt\" integer, \"channelId\" integer NOT NULL, CONSTRAINT \"PK_17467b9ade12257d01912737bdb\" PRIMARY KEY (\"id\"))", undefined)];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"channel\" (\"id\" SERIAL NOT NULL, \"createdAt\" integer NOT NULL DEFAULT 0, \"updatedAt\" integer, \"key\" character varying NOT NULL, CONSTRAINT \"UQ_fe659b0f152b4274d665e49c043\" UNIQUE (\"key\"), CONSTRAINT \"PK_590f33ee6ee7d76437acf362e39\" PRIMARY KEY (\"id\"))", undefined)];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"channel_restaurant\" ADD CONSTRAINT \"FK_b6809dd201391eba6090ae3226e\" FOREIGN KEY (\"restaurantId\") REFERENCES \"restaurant\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION", undefined)];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"channel_restaurant\" ADD CONSTRAINT \"FK_2b84db2577917ec1ddd932974ce\" FOREIGN KEY (\"channelId\") REFERENCES \"channel\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION", undefined)];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"channel_user\" ADD CONSTRAINT \"FK_a34f8beb8e568f64e24abce71b6\" FOREIGN KEY (\"userId\") REFERENCES \"user\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION", undefined)];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"channel_user\" ADD CONSTRAINT \"FK_3836ee173cdde32bd330bcfd81a\" FOREIGN KEY (\"channelId\") REFERENCES \"channel\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION", undefined)];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"vote\" ADD CONSTRAINT \"FK_4ae2eb8e398ff87416da92ea286\" FOREIGN KEY (\"optionId\") REFERENCES \"option\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION", undefined)];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"vote\" ADD CONSTRAINT \"FK_f5de237a438d298031d11a57c3b\" FOREIGN KEY (\"userId\") REFERENCES \"user\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION", undefined)];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"option\" ADD CONSTRAINT \"FK_cb605937698405ddabd0d70f419\" FOREIGN KEY (\"restaurantId\") REFERENCES \"restaurant\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION", undefined)];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"option\" ADD CONSTRAINT \"FK_676fc375ad33708e08aba363bb3\" FOREIGN KEY (\"electionId\") REFERENCES \"election\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION", undefined)];
                    case 16:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"election\" ADD CONSTRAINT \"FK_bd2f51c1c0f717c8c16f5b573e4\" FOREIGN KEY (\"channelId\") REFERENCES \"channel\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION", undefined)];
                    case 17:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    migrate1572261696459.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE \"election\" DROP CONSTRAINT \"FK_bd2f51c1c0f717c8c16f5b573e4\"", undefined)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"option\" DROP CONSTRAINT \"FK_676fc375ad33708e08aba363bb3\"", undefined)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"option\" DROP CONSTRAINT \"FK_cb605937698405ddabd0d70f419\"", undefined)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"vote\" DROP CONSTRAINT \"FK_f5de237a438d298031d11a57c3b\"", undefined)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"vote\" DROP CONSTRAINT \"FK_4ae2eb8e398ff87416da92ea286\"", undefined)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"channel_user\" DROP CONSTRAINT \"FK_3836ee173cdde32bd330bcfd81a\"", undefined)];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"channel_user\" DROP CONSTRAINT \"FK_a34f8beb8e568f64e24abce71b6\"", undefined)];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"channel_restaurant\" DROP CONSTRAINT \"FK_2b84db2577917ec1ddd932974ce\"", undefined)];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"channel_restaurant\" DROP CONSTRAINT \"FK_b6809dd201391eba6090ae3226e\"", undefined)];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"channel\"", undefined)];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"election\"", undefined)];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"option\"", undefined)];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"vote\"", undefined)];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"user\"", undefined)];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"channel_user\"", undefined)];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"restaurant\"", undefined)];
                    case 16:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"channel_restaurant\"", undefined)];
                    case 17:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return migrate1572261696459;
}());
exports.migrate1572261696459 = migrate1572261696459;
