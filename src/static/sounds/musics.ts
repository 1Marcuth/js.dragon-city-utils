import { getMusicNameByTag } from "./config"
import BaseStaticDownloader from "../base"

class GeneralMusic extends BaseStaticDownloader {
    public constructor(musicName?: string, tag?: string) {
        super()

        if (!musicName && !tag) {
            throw new Error("You must enter at least one name or tag!")
        }

        if (tag) {
            const musicName = getMusicNameByTag(tag)
        }

        if (!musicName) {
            throw new Error("Please enter a valid song name! If you have entered a tag please check it as it was not possible to get a song name from it.")
        }

        this.url = `http://dci-static-s1.socialpointgames.com/static/dragoncity/mobile/sounds/music/${musicName}.mp3`
    }
}

export default GeneralMusic