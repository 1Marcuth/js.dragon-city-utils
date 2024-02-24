import { AssetsPlatforms, DragonPhases, UrlPlatformPrefixes } from "../../../enums"
import BaseStaticDownloader from "../../base"

class DragonSpineAnimation extends BaseStaticDownloader {
    public constructor(
        imageName: string,
        phase: number,
        urlPlatformPrefix: string = UrlPlatformPrefixes.Ios,
        skin: string = "",
        platform: string = AssetsPlatforms.Windows,
        useNewUrl: boolean = true
    ) {
        super()

        if (phase < DragonPhases.Egg || phase > DragonPhases.Adult) {
            throw new Error(`${phase} Not a valid number for a dragon's phase. Choose a number between ${DragonPhases.Egg} and ${DragonPhases.Adult}`)
        }

        if (useNewUrl) {
            this.url  = `https://${urlPlatformPrefix}-static-s1.socialpointgames.com/static/dragoncity/mobile/engine/version_1_1/dragons/${imageName}_${phase}/${imageName}${skin}_${phase}_HD_tweened_${platform}.zip`
        } else {
            this.url = `https://${urlPlatformPrefix}-static-s1.socialpointgames.com/static/dragoncity/mobile/engine/version_1_1/dragons/${imageName}_${phase}/basic_${imageName}${skin}_${phase}_HD_spine-3-8-59_${platform}.zip`
        }
    }
}

export default DragonSpineAnimation