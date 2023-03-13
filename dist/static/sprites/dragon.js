"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = __importDefault(require("../base"));
class DragonSprite extends base_1.default {
    constructor(imageName, phase, skin = null, imageQuality = 1) {
        super();
        let skinStr = "";
        let imageQualityStr = "";
        if (phase < 0 || phase > 3) {
            throw new Error(`${phase} Not a valid number for a dragon's phase. Choose a number between 0 and 3`);
        }
        if (skin) {
            skinStr = `_skin${skin}`;
        }
        if (imageQuality === 1) {
        }
        else if (imageQuality === 2) {
            imageQualityStr = "@2x";
        }
        else {
            throw new Error(`${imageQuality} Not a valid number for image quality of a dragon. Choose a number between 1 and 2`);
        }
        this.url = `https://dci-static-s1.socialpointgames.com/static/dragoncity/mobile/ui/dragons/ui_${imageName}${skinStr}_${phase}${imageQualityStr}.png`;
    }
}
exports.default = DragonSprite;
