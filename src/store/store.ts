import { configureStore } from '@reduxjs/toolkit';
import boardGamesReducer from '@/store/slices/boardGamesSlice'
import usersReducer from '@/store/slices/usersSlice'

export const store = configureStore({
  devTools: true,
  reducer: {
    boardGames: boardGamesReducer,
    users: usersReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispat = typeof store.dispatch