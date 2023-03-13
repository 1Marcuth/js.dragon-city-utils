"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
function calculateStrongs(elements) {
    let strongs = [];
    for (const element of elements) {
        const previewStrongs = config_1.elementsConfig[element].strongs;
        for (const element of previewStrongs) {
            if (!strongs.includes(element)) {
                strongs.push(element);
            }
        }
    }
    return strongs;
}
function calculateWeaknessses(firstElement) {
    let weaknesses = [];
    for (const element of Object.keys(config_1.elementsConfig)) {
        const elementStrongs = config_1.elementsConfig[element].strongs;
        if (elementStrongs.includes(firstElement)) {
            weaknesses.push(element);
        }
    }
    return weaknesses;
}
exports.default = { calculateStrongs, calculateWeaknessses };
