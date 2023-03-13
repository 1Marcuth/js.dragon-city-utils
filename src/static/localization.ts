// import FromObjectArray from "javascript-filter/src/object-array"
// import axios from "axios"

// class Localization {
//     private localization: Array<any> = []
//     private localizationObject: {} = {}
//     private endpointUrl: string | null = null
//     public language: string | null = null

//     public constructor(
//         language: string | null = null,
//         loc: {} | null = null
//     ) {
//         if (loc == null) {
//             this.endpointUrl = `https://sp-translations.socialpointgames.com/deploy/dc/android/prod/dc_android_${language}_prod_wetd46pWuR8J5CmS.json`
             
//             this.fetch().then(data => this.localization = data)
//         }
//     }

//     private async fetch(): Promise<Array<any>> {
//         const response = await axios.get(this.endpointUrl as string)
//         const data = response.data
//         return data
//     }

//     private load(loc: [] | {}) {
//         const type = typeof loc

//         if (type === "object") {
//             this.loadObject(loc as {})
//         } else if (Array.isArray(loc)) {
//             this.loadArray(loc as [])
//         } else {
//             throw new Error(`${type} is an invalid type to load a localization`)
//         }
//     }

//     private loadArray(loc: []) {
//         this.localization = loc
//         this.localizationObject = new FromObjectArray(loc).concatenateChildObjectsIntoANewObject()
//     }

//     private loadObject(loc: {}) {
//         this.localizationObject = loc
//         this.localization = []

//         for (const key of Object.keys(loc)) {
//             const value = (loc as any)[key]
//             const object_ = { [key]: value }
//             this.localization.push(object_)
//         }
//     }

//     public getValueFromKey() {

//     }

//     public getKeyFromValue() {

//     }

//     public getDragonName() {

//     }

//     public getDragonDescription() {

//     }

//     public getAttackName() {

//     }

//     public getSkillName() {

//     }

//     public getSkillDescription() {

//     }

//     public searchKeys() {

//     }

//     public searchValues() {

//     }

//     public compare(oldLocalization: {} | []): {} {
//         if (Array.isArray(oldLocalization)) {
//             oldLocalization = new FromObjectArray(oldLocalization)
//         }

        
//     }

//     public getArray() {
//         return this.localization
//     }

//     public getObject() {
//         return this.localizationObject
//     }
// }