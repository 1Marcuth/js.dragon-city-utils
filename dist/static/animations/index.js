"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dragon_1 = __importDefault(require("./flash/dragon"));
const dragon_2 = __importDefault(require("./spine/dragon"));
exports.default = {
    DragonFlashAnimation: dragon_1.default,
    DragonSpineAnimation: dragon_2.default
};
