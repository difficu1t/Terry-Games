import { Dispatch } from "react"
import { Fields, TableGamesAction, TableGamesTypes } from "../../types/tableGames"
import { gamesbd } from "../../gamesbt";
import { IUsers } from "../../types/users";
import { convertToGame } from "../../tools/convertToGame";

export const fetchTableGames = () => {
    return async (dispatch: Dispatch<TableGamesAction>) => {
        try {
            dispatch({type: TableGamesTypes.FETCH_TABLE_GAMES, payload: gamesbd});
            dispatch({type: TableGamesTypes.FETCH_TABLE_GAMES_SUCCESS})  
        } catch (e) {
            dispatch({type: TableGamesTypes.FETCH_TABLE_GAMES_ERROR, payload: "Error during loading."});
        }
    } 
}

export const addWinner = (user: IUsers, title: string | undefined) => {
    return (dispatch: Dispatch<TableGamesAction>) => {
        try {
            dispatch({type: TableGamesTypes.ADD_OR_REMOVE_WINNER});
            dispatch({type: TableGamesTypes.ADD_WINNER_SUCCESS, payload: {user, title}})
        } catch (e) {
            dispatch({type: TableGamesTypes.ADD_OR_REMOVE_WINNER_ERROR, payload: "Error during adding a winner."})
        }
    }
}

export const removeWinner = (user: IUsers, title: string | undefined) => {
    return (dispatch: Dispatch<TableGamesAction>) => {
        try {
            dispatch({type: TableGamesTypes.ADD_OR_REMOVE_WINNER});
            dispatch({type: TableGamesTypes.REMOVE_WINNER_SUCCESS, payload: {user, title}})
        } catch (e) {
            dispatch({type: TableGamesTypes.ADD_OR_REMOVE_WINNER_ERROR, payload: "Error during adding a winner."})
        }
    }
}

export const addTableGames = (fields : Fields) => {
    return (dispatch: Dispatch<TableGamesAction>) => {
        try {
            dispatch({type: TableGamesTypes.ADD_GAME});
            const game = convertToGame(fields);
            dispatch({type: TableGamesTypes.ADD_GAME_SUCCES, payload: game})
        } catch (e) {
            dispatch({type: TableGamesTypes.ADD_GAME_ERROR, payload: "Error during adding a table game."})
        }
    }
}