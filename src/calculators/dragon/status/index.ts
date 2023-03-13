import {
    category9DragonsHpFix,
    hpRunePower,
    damageRunePower,
    hpTowerPower,
    damageTowerPower,
    categoryAndLevelPower,
    rankClassPower,
    dragonRarityPower
} from "./config"

import { CategoryKeys, LevelKeys, RankClassKeys, RarityKeys, StarKeys } from "./types"

function calculateStatus(
    category: CategoryKeys,
    rarity: RarityKeys,
    level: LevelKeys = 1,
    rankClass: RankClassKeys | 0 = 0,
    stars: StarKeys | 0 = 0,
    hpRunes: number = 0,
    damageRunes: number = 0,
    withTowerBonus: boolean = false,
    extraHpMultiplier: number = 0.0,
    extraDamageMultiplier: number = 0.0
): {} {
    const initialStatus = categoryAndLevelPower[category][level]
    const initialHp = initialStatus.hp
    const initialDamage = initialStatus.damage

    let rankClassHpBonus = 0
    let rankClassDamageBonus = 0
    let starsHpBonus = 0
    let starsDamageBonus = 0
    let runesHpBonus = 0
    let runesDamageBonus = 0
    let towerHpBonus = 0
    let towerDamageBonus = 0
    let extraHpBonus = 0
    let extraDamageBonus = 0

    let hp = Number(initialHp)
    let damage = Number(initialDamage)

    if (rankClass > 0) {
        const rankClassFactor = rankClassPower[rankClass as RankClassKeys] / 100
        rankClassHpBonus = initialHp * rankClassFactor
        rankClassDamageBonus = initialDamage * rankClassFactor
    }

    if (stars > 0) {
        const starsFactor = dragonRarityPower[rarity][stars as StarKeys] / 100
        starsHpBonus = initialHp * starsFactor
        starsDamageBonus = initialDamage * starsFactor
    }

    if (hpRunes > 0) {
        runesHpBonus = initialHp * (hpRunePower * hpRunes)
    }

    if (damageRunes > 0) {
        runesDamageBonus = initialDamage * (damageRunePower * damageRunes)
    }

    if (withTowerBonus) {
        towerHpBonus = (hp + (starsHpBonus + runesHpBonus + rankClassHpBonus)) * hpTowerPower
        towerDamageBonus = (damage + (starsDamageBonus + runesDamageBonus + rankClassDamageBonus)) * damageTowerPower
    }

    if (extraHpMultiplier > 0.0) {
        extraHpBonus = (hp + (starsHpBonus + runesHpBonus + rankClassHpBonus)) * extraHpBonus
    }

    if (extraDamageMultiplier > 0.0) {
        extraDamageBonus = (damage + (starsDamageBonus + runesDamageBonus + rankClassDamageBonus)) * extraDamageBonus
    }

    hp += starsHpBonus + runesHpBonus + rankClassHpBonus + towerHpBonus + extraHpBonus
    damage += rankClassDamageBonus + starsDamageBonus + runesDamageBonus + towerDamageBonus + extraDamageBonus

    if (category === 9) {
        hp += hp * category9DragonsHpFix
    }

    hp = Math.round(hp)
    damage = Math.round(damage)

    return {
        result: {
            hp,
            damage
        },
        initial: {
            hp: Math.round(initialHp != 9 ? initialHp : initialHp * (category9DragonsHpFix + 1)),
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
    }
}

export { calculateStatus }