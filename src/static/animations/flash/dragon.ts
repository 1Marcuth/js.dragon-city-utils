import { DragonPhases } from "../../../enums"
import BaseStaticDownloader from "../../base"

class DragonFlashAnimation extends BaseStaticDownloader {
    public constructor(
        imageName: string,
        phase: number,
        skin: number | null = null
    ) {
        super()

        let skinStr = ""

        if (phase < DragonPhases.Egg || phase > DragonPhases.Adult) {
            throw new Error(`${phase} Not a valid number for a dragon's phase. Choose a number between ${DragonPhases.Egg} and ${DragonPhases.Adult}`)
        }

        if (skin && skin > 0) {
            skinStr = `_skin${skin}`
        }

        this.url = `https://dci-static-s1.socialpointgames.com/static/dragoncity/assets/sprites/${imageName}${skinStr}_${phase}.swf`
    }
}

export default DragonFlashAnimation