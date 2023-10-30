import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IBoardGame } from '@/common/types/boardGame'

export type boardGamesState = {
  boardGames: IBoardGame[]
}

const initialState: boardGamesState = {
  boardGames: [{
    title: 'Twilight Imperium: Fourth Edition',
    description: 'Build an intergalactic empire through trade, research, conquest and grand politics.',
    dls: true,
    maxPlayers: 8,
    minPlayers: 3,
    rating: 9.3,
    playedTimes: 0,
    winners: []
  },{
    title: 'Test1',
    description: 'Test1',
    dls: true,
    maxPlayers: 1,
    minPlayers: 1,
    rating: 1,
    playedTimes: 1,
    winners: []
  },{
    title: 'Test2',
    description: 'Test2',
    dls: true,
    maxPlayers: 2,
    minPlayers: 2,
    rating: 2,
    playedTimes: 2,
    winners: []
  }]
}

export const boardGamesSlice = createSlice({
  name: 'boardGames',
  initialState,
  reducers: {

  }
})

export const {  } = boardGamesSlice.actions
export default boardGamesSlice.reducer