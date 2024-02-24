import * as _dragon from "./dragon"
import * as _orbRecall from "./orb-recall"

module calculators {
    export const dragon = _dragon
    export const orbRecall = _orbRecall
}

export {
    _dragon as dragon,
    _orbRecall as orbRecall
}

export default calculators