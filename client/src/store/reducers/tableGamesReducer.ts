import { TableGamesTypes, TableGamesState, TableGamesAction } from '../../types/tableGames';
import { deleteWinner } from '../../tools/deleteWinner';

const defaultState : TableGamesState = {
    games: [{title: "", description: "", minPlayers: NaN, maxPlayers: NaN, tier: "", dls: false, winners: [{name: "", numOfWins: 0, skill: ""}]}],
    loading: false,
    error: null 
}

export const tableGamesReducer = (state=defaultState , action : TableGamesAction) => {
    switch(action.type){
        case TableGamesTypes.FETCH_TABLE_GAMES:
            return {loading: true, error: null, games: action.payload}; 
        case TableGamesTypes.FETCH_TABLE_GAMES_SUCCESS:
            return {loading: false, error: null, games: state.games};
        case TableGamesTypes.FETCH_TABLE_GAMES_ERROR:
            return {loading: false, error: action.payload, games: []};

        case TableGamesTypes.ADD_OR_REMOVE_WINNER:
            return {loading: true, error: null, games: state.games};

        case TableGamesTypes.ADD_WINNER_SUCCESS:
            state.games.map((game) => {
                if(game.title === action.payload.title)
                    game.winners.push(action.payload.user);
                return game;
            })
            return {loading: false, error: null, games: state.games};

        case TableGamesTypes.REMOVE_WINNER_SUCCESS:
            state.games.map((game) => deleteWinner(game, action))
            return {loading: false, error: null, games: state.games}; 

        case TableGamesTypes.ADD_OR_REMOVE_WINNER_ERROR: 
            return {loading: false, error: action.payload, games: state.games};

        case TableGamesTypes.ADD_GAME:
            return {loading: true, error: null, games: state.games}
        case TableGamesTypes.ADD_GAME_SUCCES: 
            return {loading: false, error: null, games: [...state.games, action.payload]}
        case TableGamesTypes.ADD_GAME_ERROR:
            return {loading: false, error: action.payload, games: state.games}
        default:
            return state; 
    }
}