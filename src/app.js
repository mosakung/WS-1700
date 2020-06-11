import { getEditDistance, cleanSpecificWordThai } from './feature/MergeAddress'
import compare from './feature/factorise/compare'
import map from './feature/config/compareMap'
import {MergeAddress} from "./feature/MergeAddress"
const addressObject = {
    country: "Thailand",
    province: "สมุทรปราการ",
    district: "เขตจอมทอง",
    subDistrict: "แขวงบางขุนเทียน",
    zipCode: "10150",
}
MergeAddress(addressObject)
