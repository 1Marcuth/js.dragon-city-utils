"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../../constants");
const base_1 = __importDefault(require("../../base"));
class DragonSpineAnimation extends base_1.default {
    constructor(imageName, phase, skin = null, platform = constants_1.assetsPlatforms.WINDOWS, useNewUrl = true) {
        super();
        let skinStr = "";
        if (phase < constants_1.dragonPhases.EGG || phase > constants_1.dragonPhases.ADULT) {
            throw new Error(`${phase} Not a valid number for a dragon's phase. Choose a number between ${constants_1.dragonPhases.EGG} and ${constants_1.dragonPhases.ADULT}`);
        }
        if (skin && skin > 0) {
            skinStr = `_skin${skin}`;
        }
        if (useNewUrl) {
            this.url = `https://dci-static-s1.socialpointgames.com/static/dragoncity/mobile/engine/version_1_1/dragons/${imageName}_${phase}/${imageName}${skinStr}_${phase}_HD_tweened_${platform}.zip`;
        }
        else {
            this.url = `https://dci-static-s1.socialpointgames.com/static/dragoncity/mobile/engine/version_1_1/dragons/${imageName}_${phase}/basic_${imageName}${skinStr}_${phase}_HD_spine-3-8-59_${platform}.zip`;
        }
    }
}
exports.default = DragonSpineAnimation;
