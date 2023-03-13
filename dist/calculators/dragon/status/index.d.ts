import { CategoryKeys, LevelKeys, RankClassKeys, RarityKeys, StarKeys } from "./types";
declare function calculateStatus(category: CategoryKeys, rarity: RarityKeys, level?: LevelKeys, rankClass?: RankClassKeys | 0, stars?: StarKeys | 0, hpRunes?: number, damageRunes?: number, withTowerBonus?: boolean, extraHpMultiplier?: number, extraDamageMultiplier?: number): {};
export { calculateStatus };
