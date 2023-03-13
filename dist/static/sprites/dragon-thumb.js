"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = __importDefault(require("../base"));
class DragonThumb extends base_1.default {
    constructor(imageName, phase, skin = null) {
        super();
        let skinStr = "";
        if (phase < 0 || phase > 3) {
            throw new Error(`${phase} Not a valid number for a dragon's phase. Choose a number between 0 and 3`);
        }
        if (skin) {
            skinStr = `_skin${skin}`;
        }
        this.url = `https://dci-static-s1.socialpointgames.com/static/dragoncity/mobile/ui/dragons/HD/thumb_${imageName}${skinStr}_${phase}.png`;
    }
}
exports.default = DragonThumb;
