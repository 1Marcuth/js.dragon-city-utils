import {
    categoryAndLevelPower,
    dragonRarityPower,
    rankClassPower
} from "./config"

const category1 = categoryAndLevelPower[1]
const rarityCommon = dragonRarityPower.C

type CategoryKeys = keyof typeof categoryAndLevelPower
type LevelKeys = keyof typeof category1
type RankClassKeys = keyof typeof rankClassPower
type RarityKeys = keyof typeof dragonRarityPower
type StarKeys = keyof typeof rarityCommon

export {
    CategoryKeys,
    LevelKeys,
    RankClassKeys,
    RarityKeys,
    StarKeys
}