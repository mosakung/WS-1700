import {getEditDistance} from './MergeAddress'


export const compare = (prevArray, thershold, tableName, language, input) => {

    const database = [{test_TH: "อะไรก็ไม่รู้"}]
    database.forEach(data => {
        getEditDistance(input.tableName, data[tableName+'_'+language])
    })
    

}

export default {}
