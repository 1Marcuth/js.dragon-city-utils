declare class BaseStaticDownloader {
    url: string;
    download(output: string): Promise<unknown>;
}
export default BaseStaticDownloader;
