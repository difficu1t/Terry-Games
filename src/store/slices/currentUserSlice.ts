import { IUser, Review } from "@/common/types/user";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type UserState = {
  currentUser: IUser;
}

const initialState: UserState = {
  currentUser: {
    email: 'me@gmail.com', 
    username: 'me',
    wins: 0,
    reviews: []
  }
}

export const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    addReview: (state, action: PayloadAction<Review>) => {
      let coincidence = 0;
      for (let review of state.currentUser.reviews){
        if(review.title === action.payload.title)
          coincidence++;
        if(coincidence > 0){
          review.rating = action.payload.rating
        }
      }
      if(coincidence === 0){
        state.currentUser.reviews?.push(action.payload);
      }
    }
  }
})

export const { actions } = currentUserSlice
export default currentUserSlice.reducer