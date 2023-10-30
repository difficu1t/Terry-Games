import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser, Review, ReviewWithUser } from '@/common/types/user'

export type UsersState = {
  users: IUser[]
}

const initialState: UsersState = {
  users: [{
    email: 'me@gmail.com', 
    username: 'me',
    wins: 0,
    reviews: []
  },{
    email: 'notme@gmail.com', 
    username: 'notme',
    wins: 0,
    reviews: [{title: 'Test1', rating: 5}]
  }]
}

export const userSlilce = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {
      state.users.push(action.payload)
    },
    addUserReview: (state, action: PayloadAction<ReviewWithUser>) => {
      let coincidence = 0;
      for(let user of state.users){
        if(user.email === action.payload.currentUser.email){
          for(let review of user.reviews){
            if(review.title === action.payload.title)
              coincidence++;
            if(coincidence > 0){
              review.rating = action.payload.rating
            }
          }
          if(coincidence === 0){
            user.reviews?.push(action.payload);
          }
        }
      }
    }
  }
})

export const { actions } = userSlilce
export default userSlilce.reducer