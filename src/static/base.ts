import axios from "axios"
import fs from "fs"

class BaseStaticDownloader {
    public url: string = ""

    public async download(output: string) {
        const response = await axios.get(this.url, { responseType: "stream" })
        const data = await response.data
        const writer = fs.createWriteStream(output)
        data.pipe(writer)

        if (response.status !== 200) {
            throw new Error(`Request failed with status code ${response.status}`)
        }

        return new Promise((resolve, reject) => {
            writer.on("finish", resolve)
            writer.on("error", reject)
        })
    }
}

export default BaseStaticDownloader