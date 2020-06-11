import { checkLanguage } from "./checkLanguage"
import selectThersholdByWord from "./factorise/selectThersholdByWord"
import cleanSpecificWord from "./factorise/cleanSpecificWord"
import mapStage from "./config/compareMap"
import compare from "./factorise/compare"
export const MergeAddress = (inputObject) => {
    let map = mapStage
    //parser addressObject
    const language = checkLanguage(inputObject["district"])
    if (language == "TH") {
        inputObject["country"] = cleanSpecificWord(inputObject["country"])
        inputObject["province"] = cleanSpecificWord(inputObject["province"])
        inputObject["district"] = cleanSpecificWord(inputObject["district"])
        inputObject["subDistrict"] = cleanSpecificWord(inputObject["subDistrict"])
        inputObject["zipCode"] = cleanSpecificWord(inputObject["zipCode"])
    }
    let inputArray = []
    let state = 0
    while (map.tableName != "mark" && map.tableName != "setAll") {
        if (inputArray.length == 0) {
            inputArray.push({})
        }
        console.log("table name = " + map.tableName)
        console.log(inputArray)
        console.log("language = " + language)
        const threshold = selectThersholdByWord(inputObject[map.tableName])
        console.log("threshold = " + threshold)
        const { selectArray: returnArray, mapStage: returnMap } = compare(inputArray, 2, map.tableName, language, inputObject[map.tableName], map)
        if (returnMap.tableName == "zipCode" || returnMap.tableName == "setAll") {

        }
        inputArray = returnArray
        map = returnMap
    }
    console.log(inputArray)
    if (map.tableName == "mark") {
        //Call mark
        console.log("Mark")

    }
    else if (map.tableName == "setAll") {
        //Call set ALL (selectedID)
        console.log("setALL")

    }
}
export default {}