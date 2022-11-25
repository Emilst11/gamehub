import { combineReducers } from "redux";
import mode from "./mode";
import data from "./data";
import detail from "./detail";

export default combineReducers({
    mode, data, detail
})