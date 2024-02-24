import { UrlPlatformPrefixes } from "../../enums"
import BaseStaticDownloader from "../base"

class DragonSprite extends BaseStaticDownloader {
    public constructor(
        imageName: string,
        phase: number,
        skin: string = "",
        imageQuality: number = 1,
        urlPlatformPrefix: string = UrlPlatformPrefixes.Ios
    ) {
        super()

        let imageQualityStr = ""

        if (phase < 0 || phase > 3) {
            throw new Error(`${phase} Not a valid number for a dragon's phase. Choose a number between 0 and 3`)
        }

        if (imageQuality === 2) {
            imageQualityStr = "@2x"
        } else {
            throw new Error(`${imageQuality} Not a valid number for image quality of a dragon. Choose a number between 1 and 2`)
        }

        this.url = `https://${urlPlatformPrefix}-static-s1.socialpointgames.com/static/dragoncity/mobile/ui/dragons/ui_${imageName}${skin}_${phase}${imageQualityStr}.png`
    }
}

export default DragonSprite