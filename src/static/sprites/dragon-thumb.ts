import BaseStaticDownloader from "../base"

class DragonThumb extends BaseStaticDownloader {
    constructor(
        imageName: string,
        phase: number,
        skin: number | null = null
    ) {
        super()

        let skinStr = ""

        if (phase < 0 || phase > 3) {
            throw new Error(`${phase} Not a valid number for a dragon's phase. Choose a number between 0 and 3`)
        }

        if (skin) {
            skinStr = `_skin${skin}`
        }

        this.url = `https://dci-static-s1.socialpointgames.com/static/dragoncity/mobile/ui/dragons/HD/thumb_${imageName}${skinStr}_${phase}.png`
    }
}

export default DragonThumb