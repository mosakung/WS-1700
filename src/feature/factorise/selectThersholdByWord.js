import standardThershold from '../config/thershold'

const selectThersholdByWord = (word, language = "default") => {
    if (language === "TH")
        return standardThershold.thai.find(x => x.lessthanequalLength >= word.length).thershold
    else if (language === "EN")
        return standardThershold.english.find(x => x.lessthanequalLength >= word.length).thershold
    else
        return standardThershold.default.find(x => x.lessthanequalLength >= word.length).thershold
}

export default selectThersholdByWord