import {
    rankClassPower,
    oneStarPower,
    attackCategoriesPower,
    damageVariant
} from "./config"

import {
    CategoryKeys,
    LevelKeys,
    RankClassKeys,
    StarKeys
} from "./types"

function calculateAttackDamage(
    category: CategoryKeys,
    level: LevelKeys,
    attackPower: number,
    rankClass: RankClassKeys | 0,
    stars: StarKeys | 0 = 0,
) {
    const initialDamage = attackCategoriesPower[category]

    let rankClassBonus = 0
    let starsBonus = 0

    if (rankClass > 0) {
        rankClassBonus = rankClassPower[rankClass as RankClassKeys]
    }

    if (stars > 0) {
        starsBonus = oneStarPower * stars
    }

    const damage = 1.5 * (1 + rankClassBonus + starsBonus) * (initialDamage * (level ** 1.5 + 10) / 250) + attackPower

    const minimum = Math.round(damageVariant[0] * damage)
    const maximum = Math.round(damageVariant[1] * damage)
    const avarege = Math.round((minimum + maximum) / 2)
    
    const random = Math.round(
        (Math.floor(
            Math.random() * (
                (damageVariant[1] * 100) - (damageVariant[0] * 100) + 1
            )
        ) + damageVariant[0] * 100) / 100
            *
        damage
    )

    return {
        minimum,
        maximum,
        avarege,
        random
    }
}

export { calculateAttackDamage }