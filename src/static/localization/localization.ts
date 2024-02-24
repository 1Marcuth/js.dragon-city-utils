import axios from "axios"

import { Optional } from "../../types"

export type LocalizationArrayItem = { [key: string]: string }
export type LocalizationArray = LocalizationArrayItem[]
export type LocalizationObject = { [key: string]: string }

export type LocalizationOptions = {
    language?: string
    loc?: LocalizationArray | LocalizationObject
}

type QueryfyStringOptions = {
    text: string
    lowerCase?: boolean
    normalizeLetters?: boolean
    trimSpaces?: boolean
}

export type SearchKeysOptions = {
    query: string
} & Omit<QueryfyStringOptions, "text">

export type ComparisonResultNewField = {
    key: string
    value: string
}

export type ComparisonResultEditedFieldValues = {
    old: string
    new: string
}

export type ComparisonResultEditedField = {
    key: string
    values: ComparisonResultEditedFieldValues
}

export type ComparisonResultDeletedField = {
    key: string
    value: string
}

export type ComparisonResult = {
    newFields: ComparisonResultNewField[]
    editedFields: ComparisonResultEditedField[]
    deletedFields: ComparisonResultDeletedField[]
}

export type AnyLocalization = LocalizationArray | LocalizationObject | Localization

class Localization {
    private localization: LocalizationArray = []
    private localizationObject: LocalizationObject = {}
    private endpointUrl?: string
    public language: string

    private constructor({
        loc,
        language
    }: LocalizationOptions) {
        this.language = language ?? "en"

        if (loc) {
            if (Array.isArray(loc)) {
                this.loadArray(loc as LocalizationArray)
            } else if (Array.isArray(loc)) {
                this.loadObject(loc as LocalizationObject)
            } else {
                throw new Error(`${typeof loc} is an invalid type to load a localization`)
            }
        } else {
            if (language) {
                this.endpointUrl = `https://sp-translations.socialpointgames.com/deploy/dc/android/prod/dc_android_${language}_prod_wetd46pWuR8J5CmS.json`
            } else {
                throw new Error("You must pass the `loc` or `language` parameter at least!")
            }
        }
    }

    public static async create({
        loc,
        language
    }: LocalizationOptions): Promise<Localization> {
        const instance = new Localization({
            loc: loc,
            language: language
        })

        if (language) {
            instance.localization = await Localization.fetch(instance.endpointUrl as string)
            instance.localizationObject = Object.assign({}, ...instance.localization)
        }
        
        return instance
    }

    public static async fetch(endpointUrl: string): Promise<LocalizationArray> {
        const response = await axios.get(endpointUrl)
        const data = response.data
        return data
    }

    public load(loc: LocalizationArray | LocalizationObject): Localization {
        const localization = new Localization({ loc: loc })
        return localization
    }

    private loadArray(loc: LocalizationArray): void {
        this.localization = loc
        this.localizationObject = Object.assign({}, ...loc)
    }

    private loadObject(loc: LocalizationObject): void {
        this.localizationObject = loc
        this.localization = []

        for (const key of Object.keys(loc)) {
            const value = loc[key]
            const object = { [key]: value }
            this.localization.push(object)
        }
    }

    public getValueFromKey(key: string): Optional<string> {
        const value = key in this.localizationObject ? this.localizationObject[key] : undefined
        return value
    }

    public getKeyFromValue(value: string): Optional<string> {
        let key: Optional<string> = undefined

        for (const [ currentKey, currentValue ] of Object.entries(this.localizationObject)) {
            if (value === currentValue) {
                key = currentKey
                break
            }
        }

        return key
    }

    public getDragonName(id: number): Optional<string> {
        const key = `tid_unit_${id}_name`
        return this.getValueFromKey(key)
    }

    public getDragonDescription(id: number): Optional<string> {
        const key = `tid_unit_${id}_description`
        return this.getValueFromKey(key)
    }

    public getAttackName(id: number): Optional<string> {
        const key = `tid_attack_name_${id}`
        return this.getValueFromKey(key)
    }

    public getSkillName(id: number): Optional<string> {
        const key = `tid_skill_name_${id}`
        return this.getValueFromKey(key)
    }

    public getSkillDescription(id: number): Optional<string> {
        const key = `tid_skill_description_${id}`
        return this.getValueFromKey(key)
    }

    private queryfyString({
        text,
        lowerCase,
        normalizeLetters,
        trimSpaces
    }: QueryfyStringOptions): string {
        if (lowerCase) {
            text = text.toLowerCase()
        }

        if (normalizeLetters) {
            text = text
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
        }

        if (trimSpaces) {
            text = text.trim()
        }

        return text
    }

    public searchKeys({
        query,
        lowerCase = true,
        normalizeLetters = true,
        trimSpaces = true
    }: SearchKeysOptions): string[] {
        query = this.queryfyString({
            text: query,
            lowerCase: lowerCase,
            normalizeLetters: normalizeLetters,
            trimSpaces: trimSpaces
        })
            
        const keys = Object.keys(this.localizationObject)

        const results = keys.filter(key => {
            const parsedKey = this.queryfyString({
                text: key,
                lowerCase: lowerCase,
                normalizeLetters: normalizeLetters,
                trimSpaces: trimSpaces
            })

            return parsedKey.includes(query)
        })

        return results
    }

    public searchValues({
        query,
        lowerCase = true,
        normalizeLetters = true,
        trimSpaces = true
    }: SearchKeysOptions): string[] {
        query = this.queryfyString({
            text: query,
            lowerCase: lowerCase,
            normalizeLetters: normalizeLetters,
            trimSpaces: trimSpaces
        })
            
        const values = Object.values(this.localizationObject)

        const results = values.filter(value => {
            const parsedValue = this.queryfyString({
                text: value,
                lowerCase: lowerCase,
                normalizeLetters: normalizeLetters,
                trimSpaces: trimSpaces
            })

            return parsedValue.includes(query)
        })

        return results
    }

    public static toObject(anyLocalization: AnyLocalization): LocalizationObject {
        const object = 
            anyLocalization instanceof Localization ?
            anyLocalization.object :
            Array.isArray(anyLocalization) ?
            Object.assign({}, ...anyLocalization) :
            anyLocalization

        return object
    }

    public static toArray(anyLocalization: AnyLocalization): LocalizationArray {
        const array = 
            anyLocalization instanceof Localization ?
            anyLocalization.array :
            !Array.isArray(anyLocalization) ?
            Object.entries(anyLocalization).map(entry => ({ [entry[0]]: entry[1] })) :
            anyLocalization

        return array
    }

    public static toInstance(anyLocalization: AnyLocalization): Localization {
        const instance = 
            !(anyLocalization instanceof Localization) ?
            new Localization({ loc: anyLocalization }) :
            anyLocalization

        return instance
    }

    public compare(oldLocalization: AnyLocalization): ComparisonResult {
        const oldLocalizationObject = Localization.toObject(oldLocalization)
        const newFields: ComparisonResultNewField[] = []
        const editedFields: ComparisonResultEditedField[] = []
        const deletedFields: ComparisonResultDeletedField[] = []

        for (const key in this.localizationObject) {
            if (!(key in oldLocalizationObject)) {
                newFields.push({
                    key: key,
                    value: this.localizationObject[key]
                })
            } else if (this.localizationObject[key] !== oldLocalizationObject[key]) {
                editedFields.push({
                    key: key,
                    values: {
                        old: oldLocalizationObject[key],
                        new: this.localizationObject[key]
                    }
                })
            }
        }

        for (const key in oldLocalizationObject) {
            if (!(key in this.localizationObject)) {
                deletedFields.push({
                    key: key,
                    value: oldLocalizationObject[key]
                })
            }
        }

        return {
            newFields: newFields,
            editedFields: editedFields,
            deletedFields: deletedFields
        }
    }

    public static compare(a: AnyLocalization, b: AnyLocalization): ComparisonResult {
        const aObject = Localization.toObject(a)
        const bObject = Localization.toObject(b)
    
        const newFields: ComparisonResultNewField[] = []
        const editedFields: ComparisonResultEditedField[] = []
        const deletedFields: ComparisonResultDeletedField[] = []
    
        for (const key in bObject) {
            if (!(key in aObject)) {
                newFields.push({
                    key: key,
                    value: bObject[key]
                })
            } else if (bObject[key] !== aObject[key]) {
                editedFields.push({
                    key: key,
                    values: {
                        old: aObject[key],
                        new: bObject[key]
                    }
                })
            }
        }
    
        for (const key in aObject) {
            if (!(key in bObject)) {
                deletedFields.push({
                    key: key,
                    value: aObject[key]
                })
            }
        }
    
        return {
            newFields: newFields,
            editedFields: editedFields,
            deletedFields: deletedFields
        }
    }

    public get array(): LocalizationArray {
        return this.localization
    }

    public get object(): LocalizationObject {
        return this.localizationObject
    }
}

export default Localization