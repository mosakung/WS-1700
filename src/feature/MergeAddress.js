const addressObject = {
    country: "Thailand",
    province: "สมุทรปราการ",
    district: "เขตเมืองสมุทรปราการ",
    subDistrict: "แขวง",
    zipCode: "10270",
}

export const getEditDistance = (word, compareWord) => {
    if (word.length == 0) return compareWord.length;
    if (compareWord.length == 0) return word.length;

    var matrix = [];

    //config
    var substitutionConfig = 1;
    var insertionConfig = 1;
    var deletionConfig = 1;

    // increment along the first column of each row
    var i;
    for (i = 0; i <= compareWord.length; i++) {
        matrix[i] = [i];
    }

    // increment each column in the first row
    var j;
    for (j = 0; j <= word.length; j++) {
        matrix[0][j] = j;
    }

    // Fill in the rest of the matrix
    for (i = 1; i <= compareWord.length; i++) {
        for (j = 1; j <= word.length; j++) {
            if (compareWord.charAt(i - 1) == word.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(matrix[i - 1][j - 1] + substitutionConfig, // substitution
                    Math.min(matrix[i][j - 1] + insertionConfig, // insertion
                        matrix[i - 1][j] + deletionConfig)); // deletion
            }
        }
    }

    return matrix[compareWord.length][word.length];
}

export const cleanSpecificWordThai = (inputWord) => {
    const specificWordTonesList = [
        "่", "้", "๊", "๋"
    ]

    specificWordTonesList.forEach(specificWord => {
        const swapString = (str, firstIndex, secIndex) => {
            return str.substr(0, firstIndex)
                + str[secIndex]
                + str.substring(firstIndex + 1, secIndex)
                + str[firstIndex]
                + str.substr(secIndex + 1);
        }

        for (let i = 0; i < inputWord.length - 1; i++) {
            if (inputWord[i].localeCompare("ำ") == 0 && inputWord[i + 1].localeCompare(specificWord) == 0) {
                inputWord = swapString(inputWord, i, i + 1)
            }
        }
    })

    return inputWord
}

export const requestCompareDistrict = () => {
    //querry database
    //return db object District
}

export const compare = (addressObject) => {
    //parser addressObject
    const { country, province, district, subDistrict, zipCode } = {
        country: addressObject.country,
        province: addressObject.province,
        district: addressObject.district,
        subDistrict: addressObject.subDistrict,
        zipCode: addressObject.zipCode
    }

    //config thershold {lessthanequalLength, thershold}
    const districtThershold = {
        default: [
            { lessthanequalLength: 2, thershold: 2 },
            { lessthanequalLength: 4, thershold: 3 },
            { lessthanequalLength: 7, thershold: 5 },
            { lessthanequalLength: Number.POSITIVE_INFINITY, thershold: 10},
        ],
        english: [ 
            { lessthanequalLength: 2, thershold: 2 },
            { lessthanequalLength: 4, thershold: 3 },
            { lessthanequalLength: 7, thershold: 5 },
            { lessthanequalLength: Number.POSITIVE_INFINITY, thershold: 10},
        ],
        thai: [
            { lessthanequalLength: 2, thershold: 2 },
            { lessthanequalLength: 4, thershold: 3 },
            { lessthanequalLength: 7, thershold: 5 },
            { lessthanequalLength: Number.POSITIVE_INFINITY, thershold: 10},
        ],
    }

    //function select thershold
    const selectThersholdByWord = (infoThersholdConfig ,word) => {
        return infoThersholdConfig.find(x => x.lessthanequalLength >= word.length).thershold
    }

    //querry all district
    const objCmpDistricts = requestCompareDistrict()

    //first condition compare all district from querry
    const pickDistrictList = []
    objCmpDistricts.forEach((objCmpDistrict, index) => {
        //parser objCmpDistrict
        const { idDistrict, cmpDistrict } = {
            id: objCmpDistrict.idDistrict,
            cmpDistrict: objCmpDistrict.cmpDistrict,
        }

        //find minimum edit distance District
        const editDistanceDistrict = getEditDistance(district, cmpDistrict)

        //condition check search [input district] VS [compare district] | pass by matching OR minimum edit distance < thershold
        if(editDistanceDistrict <= selectThersholdByWord(districtThershold.default, district)) {
            
        }

        if(editDistanceDistrict == 0) {
            //matching 100%
            pickDistrictList.push({idDistrict, cmpDistrict, exactly: true, distance: editDistanceDistrict})
        }
        else if (editDistanceDistrict <= selectThersholdByWord(districtThershold.default, district)) {
            //matching more than thershold
            pickDistrictList.push({idDistrict, cmpDistrict, exactly: false, distance: editDistanceDistrict})
        }
    });

    if(pickDistrictList.find(element => element.exactly === true)) {

    }
    
}

export default {}