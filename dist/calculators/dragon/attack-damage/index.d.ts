import { CategoryKeys, LevelKeys, RankClassKeys, StarKeys } from "./types";
declare function calculateAttackDamage(category: CategoryKeys, level: LevelKeys, attackPower: number, rankClass: RankClassKeys | 0, stars?: StarKeys | 0): {
    minimum: number;
    maximum: number;
    avarege: number;
    random: number;
};
export { calculateAttackDamage };
