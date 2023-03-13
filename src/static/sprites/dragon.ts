import BaseStaticDownloader from "../base"

class DragonSprite extends BaseStaticDownloader {
    public constructor(
        imageName: string,
        phase: number,
        skin: number | null = null,
        imageQuality: number = 1
    ) {
        super()

        let skinStr = ""
        let imageQualityStr = ""

        if (phase < 0 || phase > 3) {
            throw new Error(`${phase} Not a valid number for a dragon's phase. Choose a number between 0 and 3`)
        }

        if (skin) {
            skinStr = `_skin${skin}`
        }

        if (imageQuality === 1) {

        } else if (imageQuality === 2) {
            imageQualityStr = "@2x"
        } else {
            throw new Error(`${imageQuality} Not a valid number for image quality of a dragon. Choose a number between 1 and 2`)
        }

        this.url = `https://dci-static-s1.socialpointgames.com/static/dragoncity/mobile/ui/dragons/ui_${imageName}${skinStr}_${phase}${imageQualityStr}.png`
    }
}

export default DragonSprite