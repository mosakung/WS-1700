import { getEditDistance, cleanSpecificWordThai } from './feature/MergeAddress'
import compare from './feature/factorise/compare'
import map from './feature/config/compareMap'

//console.log(getEditDistance("บางนา","บางจจ"))
//console.log(getEditDistance("บางแค","บางจจ"))

// const waterWord = "น้ำ"

// for (let i = 0; i < waterWord.length; i++)
//     process.stdout.write("{ ." + waterWord[i] + " } ")

// console.log()

// const cleanThaiStr = cleanSpecificWordThai("นำ้ก้ำท้ำร่ำสำ่")

// for (let i = 0; i < cleanThaiStr.length; i++)
//     process.stdout.write("{ ." + cleanThaiStr[i] + " } ")

// console.log()

const database = [{test: "อะไรก็ไม่รู้"},{test: "อะไรก็"}]
const prevArrays = [ { id: 1 } ]
const test = compare(prevArrays,'','test','TH',database,map)


console.log(test)
//console.log(map.state.find(x => x.status === false))