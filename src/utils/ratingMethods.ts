import { BoardGameWithRating, IBoardGame } from "@/common/types/boardGame";
import { IUser, Review, ReviewWithUser } from "@/common/types/user";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

export function estimate(item: number, 
  addReview: ActionCreatorWithPayload<Review, "currentUser/addReview">,
  addUserReview: ActionCreatorWithPayload<ReviewWithUser, "users/addUserReview">,
  setLiClass: React.Dispatch<React.SetStateAction<{
    num: number;
    class: string;
  }[]>>, 
  liclass: {
    num: number;
    class: string;
  }[],
  game: IBoardGame | undefined,
  currentUser: IUser,
  isRated: boolean,
  lastRating: number | undefined,
  changeBoardGameRating: ActionCreatorWithPayload<BoardGameWithRating, "boardGames/changeBoardGameRating">,
  setIsRated: React.Dispatch<React.SetStateAction<boolean>>,
  ){

  addReview({title: game?.title, rating: item});
  addUserReview({currentUser: currentUser, title: game?.title, rating: item});
  setIsRated(true);
  changeBoardGameRating({isRated: isRated, title: game?.title, newRating: item, lastRating: lastRating})
  let classesArray: [{num: number, class: string}] = [{num: 0, class: ''}];
  for(let i = 0; i < liclass.length; i++){
    if(i <= item){
      classesArray.push({num: i, class: "ratingIcon sbactive"});
    } else {
      classesArray.push({num: i, class: "ratingIcon sbnonactive"});
    }
  }
  classesArray.shift();
  setLiClass(classesArray);
}

export function clickRating(item: number,
  setLiClass: React.Dispatch<React.SetStateAction<{
    num: number;
    class: string;
  }[]>>,
  liclass: {
    num: number;
    class: string;
  }[]) {
  
  let classesArray: [{num: number, class: string}] = [{num: 0, class: ''}];
  for(let i = 0; i < liclass.length; i++){
    if(i <= item){
      classesArray.push({num: i, class: "ratingIcon sbactive"});
    } else {
      classesArray.push({num: i, class: "ratingIcon sbnonactive"});
    }
  }
  classesArray.shift();
  setLiClass(classesArray);
}

export function clickSideRating(item: number,
  setPreRating: React.Dispatch<React.SetStateAction<number>>,
  setLiClass: React.Dispatch<React.SetStateAction<{
    num: number;
    class: string;
  }[]>>,
  liclass: {
    num: number;
    class: string;
  }[]) {
  
    setPreRating(item);
  let classesArray: [{num: number, class: string}] = [{num: 0, class: ''}];
  for(let i = 0; i < liclass.length; i++){
    if(i <= item){
      classesArray.push({num: i, class: "ratingIcon sbactive"});
    } else {
      classesArray.push({num: i, class: "ratingIcon sbnonactive"});
    }
  }
  classesArray.shift();
  setLiClass(classesArray);
}

export function overRating(item: number, 
  setLiClass: React.Dispatch<React.SetStateAction<{
    num: number;
    class: string;
  }[]>>, 
  liclass: {
  num: number;
  class: string;
  }[]) {

  let classesArray: [{num: number, class: string}] = [{num: 0, class: ''}];
  for(let i = 0; i < liclass.length; i++){
    if(i <= item){
      classesArray.push({num: i, class: "ratingIcon sbactive"});
    } else {
      classesArray.push({num: i, class: "ratingIcon sbnonactive"});
    }
  }
  classesArray.shift();
  setLiClass(classesArray);
}

export function outRating(currentUser: IUser,
  game: IBoardGame | undefined,
  isRated: boolean,
  isClicked: boolean,
  rating: number | undefined,
  preRating: number,
  setLiClass: React.Dispatch<React.SetStateAction<{
  num: number;
  class: string;
  }[]>>, 
  liclass: {
  num: number;
  class: string;
  }[]) {

  let classesArray: [{num: number, class: string}] = [{num: 0, class: ''}];
  if(isClicked){
    for(let i = 0; i < liclass.length; i++){
      if(i < preRating){
        classesArray.push({num: i, class: "ratingIcon sbactive"});
      } else {
        classesArray.push({num: i, class: "ratingIcon sbnonactive"});
      }
    }
    classesArray.shift();
    setLiClass(classesArray);
  } else if(!isRated){
    for(let i = 0; i < liclass.length; i++){
      classesArray.push({num: i, class: "ratingIcon sbnonactive"});
    }
    classesArray.shift();
    setLiClass(classesArray);
  } else {
    console.log(rating)
    for (let review of currentUser.reviews){
      if(review.title === game?.title){
        for(let i = 0; i < liclass.length; i++){
          if(rating){
            if(i < rating){
              classesArray.push({num: i, class: "ratingIcon sbactive"});
            } else {
              classesArray.push({num: i, class: "ratingIcon sbnonactive"});
            }
          }
        }
        classesArray.shift();
        setLiClass(classesArray);
      }
    }
  }
}

export function mouseOutSideRating(
  preRating: number,
  setLiClass: React.Dispatch<React.SetStateAction<{
  num: number;
  class: string;
  }[]>>, 
  liclass: {
  num: number;
  class: string;
  }[]) {

  let classesArray: [{num: number, class: string}] = [{num: 0, class: ''}];
  for(let i = 0; i < liclass.length; i++){
    if(i < preRating){
      classesArray.push({num: i, class: "ratingIcon sbactive"});
    } else {
      classesArray.push({num: i, class: "ratingIcon sbnonactive"});
    }
  }
  classesArray.shift();
  setLiClass(classesArray);
}