import { attackCategoriesPower } from "./config";
import { LevelKeys, RankClassKeys, StarKeys } from "../status/types";
type CategoryKeys = keyof typeof attackCategoriesPower;
export { CategoryKeys, LevelKeys, RankClassKeys, StarKeys };
