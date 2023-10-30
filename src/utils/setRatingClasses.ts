import { Dispatch, SetStateAction } from "react";

export const setRatingClasses = (rating: number | undefined,
  liclass: { num: number; class: string;}[],
  setLiClass: Dispatch<SetStateAction<{num: number; class: string;}[]>>
  ) => {
  let classesArray: [{num: number, class: string}] = [{num: 0, class: ''}];
  if(rating){
    for(let i = 0; i < liclass.length; i++){
      if(i < rating){
        classesArray.push({num: i, class: "ratingIcon sbactive"})
      } else {
        classesArray.push({num: i, class: "ratingIcon sbnonactive"})
      }
    }
    classesArray.shift();
    setLiClass(classesArray);
  }
}