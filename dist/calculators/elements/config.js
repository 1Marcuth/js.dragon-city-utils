"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.elementsConfig = void 0;
const elementsConfig = {
    "terra": {
        "strongs": ["electric", "flame"],
        "weaknesses": ["metal", "war"]
    },
    "flame": {
        "strongs": ["nature", "ice"],
        "weaknesses": ["sea", "terra"]
    },
    "sea": {
        "strongs": ["flame", "war"],
        "weaknesses": ["nature", "electric"]
    },
    "nature": {
        "strongs": ["sea", "light"],
        "weaknesses": ["flame", "ice"]
    },
    "electric": {
        "strongs": ["sea", "metal"],
        "weaknesses": ["terra", "light"]
    },
    "ice": {
        "strongs": ["nature", "war"],
        "weaknesses": ["flame", "metal"]
    },
    "metal": {
        "strongs": ["terra", "ice"],
        "weaknesses": ["electric", "dark"]
    },
    "dark": {
        "strongs": ["metal", "light"],
        "weaknesses": ["war"]
    },
    "light": {
        "strongs": ["electric", "dark"],
        "weaknesses": ["nature"]
    },
    "war": {
        "strongs": ["terra", "dark"],
        "weaknesses": ["sea", "ice"]
    },
    "pure": {
        "strongs": ["wind"],
        "weaknesses": ["primal"]
    },
    "legend": {
        "strongs": ["primal"],
        "weaknesses": ["pure"]
    },
    "primal": {
        "strongs": ["pure"],
        "weaknesses": ["time"]
    },
    "wind": {
        "strongs": ["time"],
        "weaknesses": ["legend"]
    },
    "time": {
        "strongs": ["legend"],
        "weaknesses": ["wind"]
    },
    "happy": {
        "strongs": ["chaos", "magic"],
        "weaknesses": []
    },
    "chaos": {
        "strongs": ["magic", "soul"],
        "weaknesses": []
    },
    "magic": {
        "strongs": ["soul", "beauty"],
        "weaknesses": []
    },
    "soul": {
        "strongs": ["dream", "beauty"],
        "weaknesses": []
    },
    "beauty": {
        "strongs": ["dream", "happy"],
        "weaknesses": []
    },
    "dream": {
        "strongs": ["happy", "chaos"],
        "weaknesses": []
    }
};
exports.elementsConfig = elementsConfig;
