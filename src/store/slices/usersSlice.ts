import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '@/common/types/user'

export type UsersState = {
  users: IUser[]
}

const initialState: UsersState = {
  users: []
}

export const usersSlilce = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUses: (state, action: PayloadAction<IUser>) => {
      state.users.push(action.payload)
    }
  }
})

export const {  } = usersSlilce.actions
export default usersSlilce.reducer