import {
    orbRecallConfig,
    dragonMinLevel,
    dragonMaxLevel,
    dragonMinStars,
    dragonMaxStars
} from "./config"

function calculateRecallGain(dragonLevel: number, dragonStars: number) {
    let orbsGain = 0

    if (dragonLevel < dragonMinLevel || dragonLevel > dragonMaxLevel) {
        throw new Error(`'${dragonLevel}' is not a valid level for a dragon, choose a level between '${dragonMinLevel}' and '${dragonMaxLevel}'`)
    }

    if (dragonStars < dragonMinStars || dragonStars > dragonMaxStars) {
        throw new Error(`'${dragonStars}' It is not a number of stars valid for a dragon, choose a number of stars between '${dragonMinStars}' and '${dragonMaxStars}'`)
    }

    for (let i = 0; i < (dragonLevel <= 30 ? dragonLevel : 30); i++) {
        orbsGain += orbRecallConfig.perLevels[i]
    }

    for (let i = 0; i < dragonStars; i++) {
        orbsGain += orbRecallConfig.perStars[i]
    }

    return orbsGain
}

export { calculateRecallGain }