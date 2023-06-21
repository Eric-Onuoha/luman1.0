import { currentUserTypes } from "../actionTypes";

const initialState = {
    currentUser: ""
}

export const currentUserReducer = (state = initialState, action = {}) => {
    const {type, payload} = action;

    switch(type){
        case currentUserTypes.setCurrentUser:
            return{...state, currentUser: payload};
        default:
            return state;
    }
}