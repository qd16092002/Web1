import { combineReducers } from "redux"

// reducers
import profile from "./profile";
import room from "./room";

const rootReducer = combineReducers({
    profile,
    room
})

export default rootReducer;