import * as actions from "utils/constants/redux-actions";

const initState = {}

const room = (state = initState, action) => {
    switch (action.type) {
        case actions.SET_ROOM:
            return { ...state, ...action.payload }
        default:
            return state
    }
}

export default room