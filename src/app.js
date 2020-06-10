import { getEditDistance, cleanSpecificWordThai } from './feature/MergeAddress'
import { compare } from './feature/compare'

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

const database = [{test: "อะไรก็ไม่รู้"}]
compare('','','test','TH',database)
