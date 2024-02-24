import { UrlPlatformPrefixes } from "../../enums"
import BaseStaticDownloader from "../base"

class DragonThumb extends BaseStaticDownloader {
    public constructor(
        imageName: string,
        phase: number,
        skin: string = "",
        urlPlatfromPrefix: UrlPlatformPrefixes.Ios
    ) {
        super()

        if (phase < 0 || phase > 3) {
            throw new Error(`${phase} Not a valid number for a dragon's phase. Choose a number between 0 and 3`)
        }

        this.url = `https://${urlPlatfromPrefix}-static-s1.socialpointgames.com/static/dragoncity/mobile/ui/dragons/HD/thumb_${imageName}${skin}_${phase}.png`
    }
}

export default DragonThumb