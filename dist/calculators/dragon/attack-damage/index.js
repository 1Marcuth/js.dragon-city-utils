"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateAttackDamage = void 0;
const config_1 = require("./config");
function calculateAttackDamage(category, level, attackPower, rankClass, stars = 0) {
    const initialDamage = config_1.attackCategoriesPower[category];
    let rankClassBonus = 0;
    let starsBonus = 0;
    if (rankClass > 0) {
        rankClassBonus = config_1.rankClassPower[rankClass];
    }
    if (stars > 0) {
        starsBonus = config_1.oneStarPower * stars;
    }
    const damage = 1.5 * (1 + rankClassBonus + starsBonus) * (initialDamage * (level ** 1.5 + 10) / 250) + attackPower;
    const minimum = Math.round(config_1.damageVariant[0] * damage);
    const maximum = Math.round(config_1.damageVariant[1] * damage);
    const avarege = Math.round((minimum + maximum) / 2);
    const random = Math.round((Math.floor(Math.random() * ((config_1.damageVariant[1] * 100) - (config_1.damageVariant[0] * 100) + 1)) + config_1.damageVariant[0] * 100) / 100
        *
            damage);
    return {
        minimum,
        maximum,
        avarege,
        random
    };
}
exports.calculateAttackDamage = calculateAttackDamage;
