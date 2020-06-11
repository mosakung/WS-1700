import getEditDistance from './minimumEditDistance'

const compare = (prevArray, thershold, tableName, language, input, mapStage) => {
    let result = []
    let minimumOfEditDistance = Number.POSITIVE_INFINITY
    try {
        prevArray.forEach(prevData => {
            const database = [{ district_TH: "เขตจอ", id: 1, tableName: tableName, subDistrict_TH: "แขวงบางขุนเทียน", zipCode_TH:"1" }, { district_TH: "เขตจอ", subDistrict_TH: "แขวงบางขุนเทีย", id: 2, tableName: mapStage.tableName ,zipCode_TH:"1" }]
            database.forEach(dataDB => {
                const scoreWrong = getEditDistance(input, dataDB[tableName + '_' + language])
                if (scoreWrong == 0) {
                    //matching 100 %
                    result = []
                    result.push({ id: dataDB.id })
                    throw "matching"
                }
                else if (scoreWrong <= thershold && scoreWrong < minimumOfEditDistance) {
                    //matching more than thershold & lower distance
                    result = [] // clear array
                    minimumOfEditDistance = scoreWrong
                    result.push({ id: dataDB.id })
                    console.log(result)
                    console.log("less than threshold")
                }
                else if (scoreWrong <= thershold && scoreWrong == minimumOfEditDistance) {
                    //matching more than thershold & equal distance

                    result.push({ id: dataDB.id })
                    console.log(result)
                    console.log("equal min")
                }

            })
        })
    }
    catch (e) {
        console.log(e)
    }

    if (result.length == 0) {
        mapStage = mapStage.state.find(x => x.status === false)
    }
    else {
        mapStage = mapStage.state.find(x => x.status === true)
    }
    if (result.length==0) {
        result.push({})
    }
    return { selectArray: result, mapStage: mapStage }
}

export default compare
