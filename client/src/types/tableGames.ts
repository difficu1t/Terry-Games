import { IUsers } from "./users";

export enum TableGamesTypes {
    FETCH_TABLE_GAMES = "FETCH_TABLE_GAMES",
    FETCH_TABLE_GAMES_SUCCESS = "FETCH_TABLE_GAMES_SUCCESS",
    FETCH_TABLE_GAMES_ERROR = "FETCH_TABLE_GAMES_ERROR",

    ADD_OR_REMOVE_WINNER = "ADD_WINNER",
    ADD_WINNER_SUCCESS = "ADD_WINNER_SUCCESS",
    REMOVE_WINNER_SUCCESS = "REMOVE_WINNER_SUCCESS",
    ADD_OR_REMOVE_WINNER_ERROR = "ADD_WINNER_ERROR",

    ADD_GAME = "ADD_GAME",
    ADD_GAME_SUCCES = "ADD_GAME_SUCCES",
    ADD_GAME_ERROR = "ADD_GAME_ERROR"
}
 
export interface ITableGames {
    title: string;
    description: string;
    minPlayers: number;
    maxPlayers: number;
    tier: string;
    dls: boolean;
    winners: IUsers [];
}

export interface TableGamesState {
    games: ITableGames [];
    loading: boolean;
    error: null | string;
}

export interface TableGamesAddOrRemoveWinner {
    title: string | undefined;
    user: IUsers;
}

interface FetchTableGamesAction {
    type: TableGamesTypes.FETCH_TABLE_GAMES;
    payload: ITableGames []
}

interface FetchTableGamesSuccessAction {
    type: TableGamesTypes.FETCH_TABLE_GAMES_SUCCESS;
}

interface FetchTableGamesErrorAction {
    type: TableGamesTypes.FETCH_TABLE_GAMES_ERROR;
    payload: string;
}

interface AddOrRemoveWinnerAction {
    type: TableGamesTypes.ADD_OR_REMOVE_WINNER;
}

interface AddWinnerSuccessAction {
    type: TableGamesTypes.ADD_WINNER_SUCCESS;
    payload: TableGamesAddOrRemoveWinner;
}

export interface RemoveWinnerSuccessAction {
    type: TableGamesTypes.REMOVE_WINNER_SUCCESS;
    payload: TableGamesAddOrRemoveWinner;
}

interface AddOrRemoveWinnerErrorAction {
    type: TableGamesTypes.ADD_OR_REMOVE_WINNER_ERROR;
    payload: string;
}

interface AddTableGameAction {
    type: TableGamesTypes.ADD_GAME;
}

interface AddTableGamesSucces {
    type: TableGamesTypes.ADD_GAME_SUCCES;
    payload: ITableGames;
}

interface AddTableGamesError {
    type: TableGamesTypes.ADD_GAME_ERROR;
    payload: string;
}

export type TableGamesAction =  FetchTableGamesAction | FetchTableGamesSuccessAction | FetchTableGamesErrorAction 
| AddOrRemoveWinnerAction | AddWinnerSuccessAction | RemoveWinnerSuccessAction | AddOrRemoveWinnerErrorAction | AddTableGameAction
| AddTableGamesSucces | AddTableGamesError;


export interface Fields {
    title: HTMLInputElement;
    description: HTMLTextAreaElement;
    minPlayers: HTMLInputElement;
    maxPlayers: HTMLInputElement;
    tier: HTMLSelectElement;
    dls: HTMLInputElement;
}