import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BoardGameWithRating, IBoardGame } from '@/common/types/boardGame'
import { IUser } from '@/common/types/user'

export type boardGamesState = {
  boardGames: IBoardGame[]
}

const initialState: boardGamesState = {
  boardGames: [{
    id: '1',
    title: 'Twilight Imperium: Fourth Edition',
    description: 'Build an intergalactic empire through trade, research, conquest and grand politics.',
    dls: true,
    maxPlayers: 8,
    minPlayers: 3,
    avgRating: 0,
    numberOfVoters: 0,
    playedTimes: 0,
    ratingValues: [],
    winners: []
  },{
    id: '2',
    title: 'Test1',
    description: 'Test1',
    dls: true,
    maxPlayers: 1,
    minPlayers: 1,
    avgRating: 0,
    numberOfVoters: 1,
    playedTimes: 0,
    ratingValues: [],
    winners: []
  },{
    id: '3',
    title: 'Test2',
    description: 'Test2',
    dls: false,
    maxPlayers: 2,
    minPlayers: 2,
    avgRating: 0,
    numberOfVoters: 0,
    playedTimes: 0,
    ratingValues: [],
    winners: []
  }]
}

export const boardGamesSlice = createSlice({
  name: 'boardGames',
  initialState,
  reducers: {
    calculateRating: (state, action: PayloadAction<IUser[]>) => {
      for(let boardGame of state.boardGames){
        if(boardGame.numberOfVoters !== 0){
          boardGame.avgRating = boardGame.ratingValues.reduce((rating, value) => { return rating + value }, 0) / boardGame.numberOfVoters;
        } else {
          boardGame.avgRating = 0;
        }
      }
    },
    changeBoardGameRating: (state, action: PayloadAction<BoardGameWithRating>) => {
      for(let boardGame of state.boardGames){
        if(boardGame.title === action.payload.title){
          if(!action.payload.isRated){
            boardGame.numberOfVoters += 1;
            boardGame.ratingValues.push(action.payload.newRating);
          } else { 
            boardGame.ratingValues.sort((a, b) => {
              if(a === action.payload.lastRating){
                return 1;
              }
              return a - b;
            })
            boardGame.ratingValues.pop();
            boardGame.ratingValues.push(action.payload.newRating);
          }
        }
      }
    }
  }
})

export const { actions } = boardGamesSlice
export default boardGamesSlice.reducer