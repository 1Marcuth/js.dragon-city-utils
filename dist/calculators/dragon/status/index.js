"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateStatus = void 0;
const config_1 = require("./config");
function calculateStatus(category, rarity, level = 1, rankClass = 0, stars = 0, hpRunes = 0, damageRunes = 0, withTowerBonus = false, extraHpMultiplier = 0.0, extraDamageMultiplier = 0.0) {
    const initialStatus = config_1.categoryAndLevelPower[category][level];
    const initialHp = initialStatus.hp;
    const initialDamage = initialStatus.damage;
    let rankClassHpBonus = 0;
    let rankClassDamageBonus = 0;
    let starsHpBonus = 0;
    let starsDamageBonus = 0;
    let runesHpBonus = 0;
    let runesDamageBonus = 0;
    let towerHpBonus = 0;
    let towerDamageBonus = 0;
    let extraHpBonus = 0;
    let extraDamageBonus = 0;
    let hp = Number(initialHp);
    let damage = Number(initialDamage);
    if (rankClass > 0) {
        const rankClassFactor = config_1.rankClassPower[rankClass] / 100;
        rankClassHpBonus = initialHp * rankClassFactor;
        rankClassDamageBonus = initialDamage * rankClassFactor;
    }
    if (stars > 0) {
        const starsFactor = config_1.dragonRarityPower[rarity][stars] / 100;
        starsHpBonus = initialHp * starsFactor;
        starsDamageBonus = initialDamage * starsFactor;
    }
    if (hpRunes > 0) {
        runesHpBonus = initialHp * (config_1.hpRunePower * hpRunes);
    }
    if (damageRunes > 0) {
        runesDamageBonus = initialDamage * (config_1.damageRunePower * damageRunes);
    }
    if (withTowerBonus) {
        towerHpBonus = (hp + (starsHpBonus + runesHpBonus + rankClassHpBonus)) * config_1.hpTowerPower;
        towerDamageBonus = (damage + (starsDamageBonus + runesDamageBonus + rankClassDamageBonus)) * config_1.damageTowerPower;
    }
    if (extraHpMultiplier > 0.0) {
        extraHpBonus = (hp + (starsHpBonus + runesHpBonus + rankClassHpBonus)) * extraHpBonus;
    }
    if (extraDamageMultiplier > 0.0) {
        extraDamageBonus = (damage + (starsDamageBonus + runesDamageBonus + rankClassDamageBonus)) * extraDamageBonus;
    }
    hp += starsHpBonus + runesHpBonus + rankClassHpBonus + towerHpBonus + extraHpBonus;
    damage += rankClassDamageBonus + starsDamageBonus + runesDamageBonus + towerDamageBonus + extraDamageBonus;
    if (category === 9) {
        hp += hp * config_1.category9DragonsHpFix;
    }
    hp = Math.round(hp);
    damage = Math.round(damage);
    return {
        result: {
            hp,
            damage
        },
        initial: {
            hp: Math.round(initialHp != 9 ? initialHp : initialHp * (config_1.category9DragonsHpFix + 1)),
            damage: Math.round(initialDamage)
        },
        bonus: {
            rankClass: {
                hp: Math.round(rankClassHpBonus),
                damage: Math.round(rankClassDamageBonus)
            },
            stars: {
                hp: Math.round(starsHpBonus),
                damage: Math.round(starsDamageBonus)
            },
            runes: {
                hp: Math.round(runesHpBonus),
                damage: Math.round(runesDamageBonus)
            },
            tower: {
                hp: Math.round(towerHpBonus),
                damage: Math.round(towerDamageBonus)
            },
            extra: {
                hp: Math.round(extraHpBonus),
                damage: Math.round(extraDamageBonus)
            }
        }
    };
}
exports.calculateStatus = calculateStatus;
