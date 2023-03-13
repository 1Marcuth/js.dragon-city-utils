"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.damageVariant = exports.attackCategoriesPower = exports.oneStarPower = exports.rankClassPower = void 0;
const rankClassPower = {
    1: .5,
    2: .10,
    3: .15,
    4: .20,
    5: .25,
    6: .30,
    7: .35,
    8: .40,
    9: .50,
    10: .55,
    11: .60,
    12: .70
};
exports.rankClassPower = rankClassPower;
const oneStarPower = 0.38223;
exports.oneStarPower = oneStarPower;
const attackCategoriesPower = {
    1: 3200,
    2: 3600,
    3: 4000,
    4: 4800,
    5: 5600,
    6: 5000,
    7: 4500,
    8: 3000,
    9: 6000,
    10: 7300,
    11: 9000
};
exports.attackCategoriesPower = attackCategoriesPower;
const damageVariant = [.9, 1.1];
exports.damageVariant = damageVariant;
const dragonMinLevel = 1;
const dragonMaxLevel = 70;
const dragonMinStars = 0;
const dragonMaxStars = 5;
const dragonMinHpRunes = 0;
const dragonMaxHpRunes = 30;
const dragonMinDamageRunes = 0;
const dragonMaxDamageRunes = 30;
