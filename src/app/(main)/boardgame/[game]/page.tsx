'use client'
import { useState, useMemo } from 'react'
import { useTypedSelector } from '@/utils/hooks/useTypedSelector'
import RatingBar from '@/components/RatingBar/RatingBar';
import SideModal from '@/components/Modal/SideModal/SideModal';
import RatingSideBar from '@/components/RatingSideBar/RatingSideBar';
import './style.css'
import Image from 'next/image';

export default function BoardGame ({ params }: { params: { game: string }}) {
  
  const [ isHidden, setIsHidden ] = useState(true);
  const [ isRated, setIsRated ] = useState(false);
  const [ isClicked, setIsClicked ] = useState(false);
  const [ preRating, setPreRating ] = useState(0);
  const { boardGames } = useTypedSelector(store => store.boardGames);
  const game = boardGames.find(item => item.id === params.game);
  const gameID = String(game?.id);

  return (
    <div>
      <SideModal isHidden={isHidden} setIsHidden={setIsHidden} setIsClicked={setIsClicked}>
        <RatingSideBar game={game} 
        setIsHidden={setIsHidden} isHidden={isHidden} 
        isRated={isRated} setIsRated={setIsRated} 
        setIsClicked={setIsClicked} 
        preRating={preRating} setPreRating={setPreRating}></RatingSideBar>
      </SideModal>
      <div className="flex justify-center text-white">
        <div className="flex flex-wrap w-4/5 m-5 bg-black">
          <div className="w-48 p-3">
            <Image className="bg-white" src={ gameID == '1' ? `/img/${gameID}.png` : '/img/test.png'}
              width={184}
              height={148}
              priority
              alt={`${game?.title}`}>
            </Image>
          </div>
          <div className="flex flex-col p-3 pl-0">
            <div className="flex gap-3">
              <div className="icon hb">
                <span>
                  {game?.avgRating}
                </span>
              </div>
              <div className="flex flex-col pt-1">
                <h1 className="text-lg font-bold">{game?.title}</h1>
                <h3 className="text-sm">{game?.description}</h3>
              </div>
            </div>
            <div className="w-[600px] py-4">
              <ul className="flex border-t border-gray-500">
                <li className="flex flex-col w-[150px] border-r border-gray-500 p-3 py-1 pl-0">{game?.minPlayers} - {game?.maxPlayers} Players
                  <span className="text-xs">Number of Players</span>
                </li>
                <li className="flex flex-col w-[150px] border-r border-gray-500 p-3 py-1">{game?.dls ? 'Has DLC': 'No DLC'}
                  <span className="text-xs">dlc</span>
                </li>
                <li className="flex flex-col w-[150px] border-r border-gray-500 border-y-0 p-3 py-1">{game?.playedTimes}
                  <span className="text-xs">Played Times</span>
                </li>
                <li className="flex flex-col w-[150px] p-3 py-1">Best Player
                  <span className="text-xs">Best Player</span>
                </li>
              </ul>
            </div>
            <RatingBar game={game} 
            isHidden={isHidden} setIsHidden={setIsHidden} 
            isRated={isRated} setIsRated={setIsRated} 
            isClicked={isClicked} setIsClicked={setIsClicked} 
            preRating={preRating} setPreRating={setPreRating}>My Rating</RatingBar>
          </div>
        </div>
      </div>
    </div>
  )
}