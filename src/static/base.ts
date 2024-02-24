import axios from "axios"

class BaseStaticDownloader {
    public url: string = ""

    public async download(output: string) {
        const response = await axios.get(this.url, { responseType: "stream" })

        if (response.status !== 200) {
            throw new Error(`Request failed with status code ${response.status}`)
        }

        if (typeof window === "undefined") {
            const fs = await import("fs")
            
            const data = await response.data
            const writer = fs.createWriteStream(output)
            data.pipe(writer)

            return new Promise((resolve, reject) => {
                writer.on("finish", resolve)
                writer.on("error", reject)
            })
        } else {
            const blob = new Blob([ response.data ])
            const $link = document.createElement("a")
            const dataUrl = URL.createObjectURL(blob)

            $link.href = dataUrl
            $link.download = output
            $link.click()
            $link.remove()
            URL.revokeObjectURL(dataUrl)
        }
    }
}

export default BaseStaticDownloader