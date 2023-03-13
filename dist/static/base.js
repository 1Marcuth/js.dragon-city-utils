"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const fs_1 = __importDefault(require("fs"));
class BaseStaticDownloader {
    constructor() {
        this.url = "";
    }
    download(output) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.get(this.url, { responseType: "stream" });
            const data = yield response.data;
            const writer = fs_1.default.createWriteStream(output);
            data.pipe(writer);
            if (response.status !== 200) {
                throw new Error(`Request failed with status code ${response.status}`);
            }
            return new Promise((resolve, reject) => {
                writer.on("finish", resolve);
                writer.on("error", reject);
            });
        });
    }
}
exports.default = BaseStaticDownloader;
