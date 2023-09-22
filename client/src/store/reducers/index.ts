import { combineReducers } from "redux";
import { tableGamesReducer } from "./tableGamesReducer";
import { usersReducer } from "./usersReducer";

export const rootReducer = combineReducers({
    gamesList: tableGamesReducer,
    usersList: usersReducer
})

export type RootState = ReturnType<typeof rootReducer>;