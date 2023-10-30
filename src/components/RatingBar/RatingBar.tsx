'use client'
import React, { useEffect, useState, Dispatch, SetStateAction, useMemo } from 'react'
import { IBoardGame } from '@/common/types/boardGame'
import { useCurrentUserActions } from '@/utils/hooks/useCurrentUserActions'
import { useTypedSelector } from '@/utils/hooks/useTypedSelector'
import { getRating } from '@/utils/getRating'
import * as ratingMethods from '@/utils/ratingMethods'
import { listItemClass } from '@/common/variables/liclass'
import { useBoardGamesActions } from '@/utils/hooks/useBoardGamesActions'

const RatingBar = ({children, game, isHidden, setIsHidden, isRated, setIsRated, isClicked, setIsClicked, preRating, setPreRating}: {children: string, 
  game: IBoardGame | undefined,
  isHidden: boolean, 
  setIsHidden: Dispatch<SetStateAction<boolean>>,
  isRated: boolean,
  setIsRated: Dispatch<SetStateAction<boolean>>,
  isClicked: boolean,
  setIsClicked: Dispatch<SetStateAction<boolean>>,
  preRating: number,
  setPreRating: Dispatch<SetStateAction<number>>
}) => {

  const [ liclass, setLiClass ] = useState(listItemClass)
  const { currentUser } = useTypedSelector(state => state.currentUser)
  const { addReview } = useCurrentUserActions();
  const { changeBoardGameRating } = useBoardGamesActions();
  const { overRating, outRating, clickRating } = ratingMethods;
  let rating: number | undefined = 0;

  useEffect(() => {
    rating = getRating(game?.title, currentUser);
  }, [addReview, changeBoardGameRating])

  useEffect(() => {
    outRating(currentUser, game, isRated, isClicked, rating, preRating, setLiClass, liclass);
  }, [isHidden])

  useEffect(() => {
    let classesArray: [{num: number, class: string}] = [{num: 0, class: ''}];
    for(let i = 0; i < liclass.length; i++){
      if(rating){
        setIsRated(true);
        if(i < rating){
          classesArray.push({num: i, class: "ratingIcon sbactive"})
        } else {
          classesArray.push({num: i, class: "ratingIcon sbnonactive"})
        }
      } else {
        classesArray.push({num: i, class: "ratingIcon sbnonactive"})
      }
    }
    classesArray.shift();
    setLiClass(classesArray);
  }, [])

  function mouseClickRating(item: number) {
    clickRating(item, setLiClass, liclass);
    setPreRating(item + 1);
    setIsClicked(true);
    setIsHidden(false);
  }
 
  function mouseOverRating(item: number) {
    overRating(item, setLiClass, liclass);
  }

  function mouseOutRating() {
    outRating(currentUser, game, isRated, isClicked, rating, preRating, setLiClass, liclass);
  }
  return(
    <div>
      <span className="flex"><span>{children}</span>&nbsp;
        <ul className="flex items-center">
          {liclass.map((item) => {
            return <li key={item.num} onMouseOver={() => mouseOverRating(item.num)} 
            onMouseOut={() => mouseOutRating()} 
            onClick={() => mouseClickRating(item.num)} className={item.class}></li>
          })}
        </ul>
      </span>
    </div>
  )
}

export default RatingBar