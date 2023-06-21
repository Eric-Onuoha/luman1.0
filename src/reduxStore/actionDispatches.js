import { createAction } from "./createAction";
import { currentUserTypes } from "./actionTypes";

export const updateCurrentUser = (user) => (
    createAction(currentUserTypes.setCurrentUser, user)
)