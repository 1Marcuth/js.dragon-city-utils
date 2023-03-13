"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DragonSprite = exports.DragonThumb = exports.ChestSprite = void 0;
const chest_1 = __importDefault(require("./chest"));
exports.ChestSprite = chest_1.default;
const dragon_thumb_1 = __importDefault(require("./dragon-thumb"));
exports.DragonThumb = dragon_thumb_1.default;
const dragon_1 = __importDefault(require("./dragon"));
exports.DragonSprite = dragon_1.default;
