"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
function calculateRecallGain(dragonLevel, dragonStars) {
    let orbsGain = 0;
    if (dragonLevel < config_1.dragonMinLevel || dragonLevel > config_1.dragonMaxLevel) {
        throw new Error(`'${dragonLevel}' is not a valid level for a dragon, choose a level between '${config_1.dragonMinLevel}' and '${config_1.dragonMaxLevel}'`);
    }
    if (dragonStars < config_1.dragonMinStars || dragonStars > config_1.dragonMaxStars) {
        throw new Error(`'${dragonStars}' It is not a number of stars valid for a dragon, choose a number of stars between '${config_1.dragonMinStars}' and '${config_1.dragonMaxStars}'`);
    }
    for (let i = 0; i < (dragonLevel <= 30 ? dragonLevel : 30); i++) {
        orbsGain += config_1.orbRecallConfig.perLevels[i];
    }
    for (let i = 0; i < dragonStars; i++) {
        orbsGain += config_1.orbRecallConfig.perStars[i];
    }
    return orbsGain;
}
exports.default = { calculateRecallGain };
