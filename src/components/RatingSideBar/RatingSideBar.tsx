import { IBoardGame } from "@/common/types/boardGame"
import { listItemClass } from "@/common/variables/liclass"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { AiOutlineClose } from "react-icons/ai"
import * as ratingMethods from '@/utils/ratingMethods'
import { useTypedSelector } from "@/utils/hooks/useTypedSelector"
import { getRating } from "@/utils/getRating"
import { setRatingClasses } from "@/utils/setRatingClasses"
import { useUsersActions } from "@/utils/hooks/useUsersActions"
import { useCurrentUserActions } from "@/utils/hooks/useCurrentUserActions"
import { useBoardGamesActions } from "@/utils/hooks/useBoardGamesActions"
import CancelButton from "./Buttons/CancelButton/CancelButton"
import SaveButton from "./Buttons/SaveButton.tsx/SaveButton"


const RatingSideBar = ({isHidden, setIsHidden, game, isRated, setIsRated, setIsClicked, preRating, setPreRating}: {
  isHidden: boolean,
  setIsHidden: Dispatch<SetStateAction<boolean>>,
  game: IBoardGame | undefined,
  isRated: boolean,
  setIsRated: Dispatch<SetStateAction<boolean>>,
  setIsClicked: Dispatch<SetStateAction<boolean>>,
  preRating: number,
  setPreRating: Dispatch<SetStateAction<number>>
  }) => {

  const [ liclass, setLiClass ] = useState(listItemClass);
  const { currentUser } = useTypedSelector(state => state.currentUser)
  const { addReview } = useCurrentUserActions();
  const { addUserReview } = useUsersActions();
  const { changeBoardGameRating } = useBoardGamesActions();
  const { estimate, overRating, mouseOutSideRating, clickRating } = ratingMethods;
  let rating: number | undefined = 0;

  useEffect(() => {
    rating = getRating(game?.title, currentUser);
    setRatingClasses(preRating, liclass, setLiClass);
  }, [isHidden])
  
  function mouseClickRating(item: number) {
    clickRating(item, setLiClass, liclass);
    setPreRating(item)
  }

  function makeEstimate() {
    let lastRating: number | undefined;
    for(let review of currentUser.reviews){
      if(review.title === game?.title){
        lastRating = review.rating;
      }
    }
    estimate(preRating, addReview, addUserReview, setLiClass, liclass, game, currentUser, isRated, lastRating,  changeBoardGameRating, setIsRated);
    setIsHidden(true);
  }

  function mouseOverRating(item: number) {
    overRating(item, setLiClass, liclass);
  }

  function mouseOutRating() {
    rating = getRating(game?.title, currentUser);
    mouseOutSideRating(preRating, setLiClass, liclass);
  }

  function closeModal() {
    setIsClicked(false);
    setIsHidden(true);
  }

  return (
    <div className="w-[400px] h-screen bg-white" onClick={e => e.stopPropagation()}>
      <div className="flex justify-between p-3 bg-orange-400">
        <span className="w-full text-center font-bold">
          Edit
        </span>
        <button onClick={closeModal}>
            <AiOutlineClose className="w-full h-full"/>
        </button> 
      </div>
      <div className="flex p-3">
        <div className="w-20"></div>
        <div className="flex flex-col">
          <span className="text-sm">{game?.title}</span>
          <ul className="flex items-center">
            {liclass.map((item) => {
              return <li key={item.num} onClick={() => mouseClickRating(item.num)}
              onMouseOver={() => mouseOverRating(item.num)} 
              onMouseOut={() => mouseOutRating()}
              className={item.class}></li>})
            }
          </ul>
        </div>
      </div>
      <div className="flex p-3 gap-2">
        <SaveButton onClick={makeEstimate}>Save</SaveButton>
        <CancelButton onClick={closeModal}>Cancel</CancelButton>
      </div>  
    </div>
  )
}

export default RatingSideBar