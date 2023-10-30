import { IUser } from '@/common/types/user';

export function getRating(title: string | undefined, currentUser: IUser) {
  for (let review of currentUser.reviews){
    if(review.title === title){
      return review.rating;
    }
  }
}