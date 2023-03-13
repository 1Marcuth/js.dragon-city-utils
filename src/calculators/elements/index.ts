import { elementsConfig } from "./config"

import { ElementKey } from "./types"

function calculateStrongs(elements: string[]): string[] {
    let strongs: string[] = []

    for (const element of elements) {
        const previewStrongs = elementsConfig[element as ElementKey].strongs

        for (const element of previewStrongs) {
            if (!strongs.includes(element)) {
                strongs.push(element)
            }
        }
    }

    return strongs
}

function calculateWeaknessses(firstElement: string): string[] | [] {
    let weaknesses: string[] = []

    for (const element of Object.keys(elementsConfig)) {
        const elementStrongs = elementsConfig[element as ElementKey].strongs

        if (elementStrongs.includes(firstElement)) {
            weaknesses.push(element)
        }
    }

    return weaknesses
}

export default { calculateStrongs, calculateWeaknessses }