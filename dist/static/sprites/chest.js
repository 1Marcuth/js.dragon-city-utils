"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = __importDefault(require("../base"));
class ChestSprite extends base_1.default {
    constructor(imageName, imageQuality) {
        super();
        let imageQualityStr = "";
        if (imageQuality === 1) {
        }
        else if (imageQuality === 2) {
            imageQualityStr = "@2x";
        }
        else {
            throw new Error(`${imageQuality} Not a valid number for image quality of a chest. Choose a number between 1 and 2`);
        }
        this.url = `https://dci-static-s1.socialpointgames.com/static/dragoncity/mobile/ui/chests/ui_${imageName}${imageQualityStr}.png`;
    }
}
exports.default = ChestSprite;
