import BaseStaticDownloader from "../base";

class GeneralMusic extends BaseStaticDownloader {
    constructor(musicName: string) {
        super()

        this.url = `http://dci-static-s1.socialpointgames.com/static/dragoncity/mobile/sounds/music/${musicName}.mp3`
    }
}

export default GeneralMusic