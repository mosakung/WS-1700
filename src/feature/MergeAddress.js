import { checkLanguage } from "./checkLanguage"
import { selectThersholdByWord } from "./factorise/selectThersholdByWord"
import { cleanSpecificWord } from "./factorise/cleanSpecificWord"
import mapStage from "./config/compareMap"
import compare from "./compare"
export const MergeObject = (inputObject) => {
    //parser addressObject
    const { country, province, district, subDistrict, zipCode } = inputObject
    const language = checkLanguage(inputObject["country"])
    if (language == "TH") {
        inputObject["country"] = cleanSpecificWord(inputObject["country"])
        inputObject["province"] = cleanSpecificWord(inputObject["province"])
        inputObject["district"] = cleanSpecificWord(inputObject["district"])
        inputObject["subDistrict"] = cleanSpecificWord(inputObject["subDistrict"])
        inputObject["zipCode"] = cleanSpecificWord(inputObject["zipCode"])
    }
    let selectArray = []
    let state = 0
    while (mapStage.tableName != "mark" && state != "setAll") {
        const threshold = selectThersholdByWord(addressObject[mapStage.tableName], language = "default")
        { selectArray, mapStage } = compare(selectArray, threshold, inputObject[mapStage.tableName], language, inputObject[mapStage.tableName], mapStage)
        if (mapStage.tableName == "zipCode") {
            selectedID = selectArray.id
        }
    }


}


const addressObject = {
    country: "Thailand",
    province: "สมุทรปราการ",
    district: "เขตเมืองสมุทรปราการ",
    subDistrict: "แขวง",
    zipCode: "10270",
}

MergeObject(addressObject)
export default {}