import { dragonPhases, assetsPlatforms } from "../../../constants"
import BaseStaticDownloader from "../../base"

class DragonSpineAnimation extends BaseStaticDownloader {
    constructor(
        imageName: string,
        phase: number,
        skin: number | null = null,
        platform: string = assetsPlatforms.WINDOWS,
        useNewUrl: boolean = true
    ) {
        super()

        let skinStr = ""

        if (phase < dragonPhases.EGG || phase > dragonPhases.ADULT) {
            throw new Error(`${phase} Not a valid number for a dragon's phase. Choose a number between ${dragonPhases.EGG} and ${dragonPhases.ADULT}`)
        }

        if (skin && skin > 0) {
            skinStr = `_skin${skin}`
        }

        if (useNewUrl) {
            this.url  = `https://dci-static-s1.socialpointgames.com/static/dragoncity/mobile/engine/version_1_1/dragons/${imageName}_${phase}/${imageName}${skinStr}_${phase}_HD_tweened_${platform}.zip`
        } else {
            this.url = `https://dci-static-s1.socialpointgames.com/static/dragoncity/mobile/engine/version_1_1/dragons/${imageName}_${phase}/basic_${imageName}${skinStr}_${phase}_HD_spine-3-8-59_${platform}.zip`
        }
    }
}

export default DragonSpineAnimation