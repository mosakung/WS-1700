import getEditDistance from './minimumEditDistance'

const compare = (prevArray, thershold, tableName, language, input, mapStage) => {

    let result = []
    let minimumOfEditDistance = Number.POSITIVE_INFINITY

    try {
        prevArray.forEach(prevData => {
            const database = [{ test_TH: "อะไรก็ไม่รู้", id: 1, tableName: tableName }, { test_TH: "อะไรก็", id: 2, tableName: mapStage.tableName }]
            input.forEach(dataInput => {
                database.forEach(dataDB => {
                    const scoreWrong = getEditDistance(dataInput[tableName], dataDB[tableName + '_' + language])
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
                    }
                    else if (scoreWrong <= thershold && scoreWrong == minimumOfEditDistance) {
                        //matching more than thershold & equal distance
                        result.push({ id: dataDB.id })
                    }

                })
            })
        })
    }
    catch(e){}

    if (result.length == 0) {
        mapStage = mapStage.state.find(x => x.status === false)
    }
    else {
        mapStage = mapStage.state.find(x => x.status === true)
    }

    return { selectArray: result, mapStage: mapStage }
}

export default compare
