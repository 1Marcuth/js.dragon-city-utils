"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = __importDefault(require("../base"));
class GeneralMusic extends base_1.default {
    constructor(musicName) {
        super();
        this.url = `http://dci-static-s1.socialpointgames.com/static/dragoncity/mobile/sounds/music/${musicName}.mp3`;
    }
}
exports.default = GeneralMusic;
