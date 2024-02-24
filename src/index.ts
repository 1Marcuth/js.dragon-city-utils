import _static from "./static"
import _calculators from "./calculators"

module dcutils {
    export const static_ = _static
    export const calculators = _calculators
}

export {
    _static as static_,
    _calculators as calculators
}

export default dcutils