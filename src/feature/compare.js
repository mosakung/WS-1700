import getEditDistance from './factorise/minimumEditDistance'

const compare = (prevDatas, thershold, tableName, language, input, map) => {
    
    let result = []
    let minimumOfEditDistance = Number.POSITIVE_INFINITY

    prevDatas.forEach(prevData => {
        const database = [{ test_TH: "อะไรก็ไม่รู้", id: 1 }, { test_TH: "อะไรก็", id: 2 }]
        input.forEach(dataInput => {
            database.forEach(data => {
                const scoreWrong = getEditDistance(dataInput[tableName], data[tableName + '_' + language])
                if (scoreWrong == 0) {
                    //matching 100 %
                    result = []
                    //result.push({})
                }
                else if (scoreWrong <= thershold && scoreWrong < minimumOfEditDistance) {
                    //matching more than thershold & lower distance
                    result = [] // clear array
                    minimumOfEditDistance = scoreWrong
                    //result.push({})
                }
                else if (scoreWrong <= thershold && scoreWrong == minimumOfEditDistance) {
                    //matching more than thershold & equal distance
                    //result.push({})
                }
            })
        })
    })

    // if(result.length == 0){

    // }
    // else{

    // }

    // return
}

export default compare
