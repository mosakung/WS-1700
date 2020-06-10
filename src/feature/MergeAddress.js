const addressObject = {
    country: "Thailand",
    province: "สมุทรปราการ",
    district: "เขตเมืองสมุทรปราการ",
    subDistrict: "แขวง",
    zipCode: "10270",
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
        return districtThershold.language.find(x => x.lessthanequalLength >= word.length).thershold
    }

    //querry all district
    const objCmpDistricts = requestCompareDistrict()

    //first condition compare all district from querry
    const pickDistrictList = []
    let minimumOfEditDistance = getEditDistance(district, objCmpDistricts[0])

    objCmpDistricts.forEach((objCmpDistrict, index) => {
        //parser objCmpDistrict
        const { idDistrict, cmpDistrict } = {
            id: objCmpDistrict.idDistrict,
            cmpDistrict: objCmpDistrict.cmpDistrict,
        }

        //find minimum edit distance District
        const editDistanceDistrict = getEditDistance(district, cmpDistrict)

        //condition check search [input district] VS [compare district] | pass by matching OR minimum edit distance < thershold
        if (editDistanceDistrict == 0) {
            //matching 100 %

        } else if (editDistanceDistrict <= selectThersholdByWord(districtThershold.default, district) && editDistanceDistrict < minimumOfEditDistance) {
            //matching more than thershold & lower distance
            pickDistrictList = [] // clear array
            minimumOfEditDistance = editDistanceDistrict
            pickDistrictList.push({ idDistrict, cmpDistrict, distance: editDistanceDistrict, index })
        } else if (editDistanceDistrict <= selectThersholdByWord(districtThershold.default, district) && editDistanceDistrict == minimumOfEditDistance) {
            //matching more than thershold & equal distance
            pickDistrictList.push({ idDistrict, cmpDistrict, distance: editDistanceDistrict, index })
        }

        if (editDistanceDistrict == 0) {
            //matching 100%
            pickDistrictList.push({ idDistrict, cmpDistrict, exactly: true, distance: editDistanceDistrict })
        }
        else if (editDistanceDistrict <= selectThersholdByWord(districtThershold.default, district)) {
            //matching more than thershold
            pickDistrictList.push({ idDistrict, cmpDistrict, exactly: false, distance: editDistanceDistrict })
        }
    });

    if (pickDistrictList.find(element => element.exactly === true)) {

    }

}

export default {}