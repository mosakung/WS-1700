const cleanSpecificWord = (inputWord) => {
    const specificWordTonesList = [
        "่", "้", "๊", "๋"
    ]

    const specificUpOrLowWord = [
        "ิ", "ี", "ึ", "ื", "ุ", "ู"
    ]

    const swapString = (str, firstIndex, secIndex) => {
        return str.substr(0, firstIndex)
            + str[secIndex]
            + str.substring(firstIndex + 1, secIndex)
            + str[firstIndex]
            + str.substr(secIndex + 1);
    }

    specificWordTonesList.forEach(specificWord => {
        for (let i = 0; i < inputWord.length - 1; i++) {
            if (inputWord[i].localeCompare("ำ") == 0 && inputWord[i + 1].localeCompare(specificWord) == 0) {
                inputWord = swapString(inputWord, i, i + 1)
            }

            specificUpOrLowWord.forEach(upOrLowWord => {
                if (inputWord[i].localeCompare(specificWord) == 0 && inputWord[i + 1].localeCompare(upOrLowWord) == 0) {
                    inputWord = swapString(inputWord, i, i + 1)
                }
            })
        }
    })

    return inputWord
}

export default cleanSpecificWord