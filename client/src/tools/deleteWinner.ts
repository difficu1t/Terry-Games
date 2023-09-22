import { ITableGames, RemoveWinnerSuccessAction } from "../types/tableGames";

export function deleteWinner(game: ITableGames, action: RemoveWinnerSuccessAction) {
    if(game.title === action.payload.title){
        game.winners.reverse();
        let temporalArray = [];
        let repeat = 0;
        for (let i = 0; i < game.winners.length; i++){
            if (game.winners[i].name !== action.payload.user.name){
                temporalArray.push(game.winners[i]);
            }
            else {
                if(repeat !== 0){
                    temporalArray.push(game.winners[i]);
                }
                else{
                    repeat++;
                }
            }
        }
        game.winners = temporalArray;
        game.winners.reverse();
    }
}