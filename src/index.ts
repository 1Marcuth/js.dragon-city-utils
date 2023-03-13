// import elements from "./calculators/elements"
// import orbRecall from "./calculators/orb-recall"
// import dragon from "./calculators/dragon"



// console.log(dragon.calculateAttackDamage(
//     11,
//     50,
//     2600,
//     12,
//     3
// ))
// console.log(dragon.calculateStatus(
//     11,
//     "H",
//     50,
//     12,
//     2,
//     5,
//     5
// ))
//console.log(elements.calculateWeaknessses("terra"))
//console.log(elements.calculateStrongs(["terra", "flame"]))
//console.log(orbRecall.calculateRecallGain(50, 5))

import {
    DragonThumb,
    ChestSprite,
    DragonSprite
} from "./static/sprites"

;(async () => {
    const dragonSprite = new DragonSprite("1000_dragon_nature", 3, 1, 2)
    const dragonThumb = new DragonThumb("1000_dragon_nature", 3, 1)
    const chestSprite = new ChestSprite("100_bamboo_chest", 2)

    await dragonSprite.download("dragão_natureza_adulto_skin_01.png")
    await dragonThumb.download("dragão_natureza_adulto_skin_01_thumb.png")
    await chestSprite.download("baú_de_bamboo.png")
})();