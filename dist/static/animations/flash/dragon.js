"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../../constants");
const base_1 = __importDefault(require("../../base"));
class DragonFlashAnimation extends base_1.default {
    constructor(imageName, phase, skin = null) {
        super();
        let skinStr = "";
        if (phase < constants_1.dragonPhases.EGG || phase > constants_1.dragonPhases.ADULT) {
            throw new Error(`${phase} Not a valid number for a dragon's phase. Choose a number between ${constants_1.dragonPhases.EGG} and ${constants_1.dragonPhases.ADULT}`);
        }
        if (skin && skin > 0) {
            skinStr = `_skin${skin}`;
        }
        this.url = `https://dci-static-s1.socialpointgames.com/static/dragoncity/assets/sprites/${imageName}${skinStr}_${phase}.swf`;
    }
}
exports.default = DragonFlashAnimation;
