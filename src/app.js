import { getEditDistance, cleanSpecificWordThai } from './feature/MergeAddress'

//console.log(getEditDistance("บางนา","บางจจ"))
//console.log(getEditDistance("บางแค","บางจจ"))

/* const waterWord = "น้ำ"

for (let i = 0; i < waterWord.length; i++)
    process.stdout.write("{ ." + waterWord[i] + " } ")

console.log()

const cleanThaiStr = cleanSpecificWordThai("นำ้อ้ีมู่")

for (let i = 0; i < cleanThaiStr.length; i++)
    process.stdout.write("{ ." + cleanThaiStr[i] + " } ")

console.log() */

const districtThershold = {
    default: [
        { lessthanequalLength: 2, thershold: 2 },
        { lessthanequalLength: 4, thershold: 3 },
        { lessthanequalLength: 7, thershold: 5 },
        { lessthanequalLength: Number.POSITIVE_INFINITY, thershold: 10 },
    ],
    english: [
        { lessthanequalLength: 2, thershold: 2 },
        { lessthanequalLength: 4, thershold: 3 },
        { lessthanequalLength: 7, thershold: 5 },
        { lessthanequalLength: Number.POSITIVE_INFINITY, thershold: 10 },
    ],
    thai: [
        { lessthanequalLength: 2, thershold: 2 },
        { lessthanequalLength: 4, thershold: 3 },
        { lessthanequalLength: 7, thershold: 5 },
        { lessthanequalLength: Number.POSITIVE_INFINITY, thershold: 10 },
    ],
}

//function select thershold
const selectThersholdByWord = (word, language = "default") => {
    if (language === "TH")
        return districtThershold.thai.find(x => x.lessthanequalLength >= word.length).thershold
    else if (language === "EN")
        return districtThershold.english.find(x => x.lessthanequalLength >= word.length).thershold
    else
        return districtThershold.default.find(x => x.lessthanequalLength >= word.length).thershold
}

console.log(selectThersholdByWord("aa", "TH"))



