import { checkLanguage } from "./checkLanguage"
import { selectThersholdByWord } from "./factorise/selectThersholdByWord"
import { cleanSpecificWord } from "./factorise/cleanSpecificWord"

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
    while (state != "Mark" && state != "setData") {
        //  const threshold = selectThersholdByWord(addressObject[map.tableName], language = "default")
        //           const selectArray,map = compare(selectArray,threshold,inputObject[map.tableName],language,inputObject[map.tableName],map)
    }

    //function select thershold


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