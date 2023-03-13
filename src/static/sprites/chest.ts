import BaseStaticDownloader from "../base"

class ChestSprite extends BaseStaticDownloader {
    constructor(
        imageName: string,
        imageQuality: number
    ) {
        super()

        let imageQualityStr = ""

        if (imageQuality === 1) {

        } else if (imageQuality === 2) {
            imageQualityStr = "@2x"
        } else {
            throw new Error(`${imageQuality} Not a valid number for image quality of a chest. Choose a number between 1 and 2`)
        }

        this.url = `https://dci-static-s1.socialpointgames.com/static/dragoncity/mobile/ui/chests/ui_${imageName}${imageQualityStr}.png`
    }
}

export default ChestSprite