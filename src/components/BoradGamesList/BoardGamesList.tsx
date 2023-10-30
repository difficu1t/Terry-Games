'use client'
import React, { useState, useEffect, useMemo } from 'react'
import BoardGamesItem from '../BoardGamesItem/BoardGamesItem'
import { IBoardGame } from '@/common/types/boardGame'

const BoardGamesList = ({ sortedList, setSortedList, boardGamesList }: { 
  sortedList: IBoardGame[],
  setSortedList: React.Dispatch<React.SetStateAction<IBoardGame[]>>,
  boardGamesList: IBoardGame[]}) => {

  const [ isTitleSorted, setIsTitleSorted ] = useState(false);
  const [ isPlayersSorted, setIsPlayersSorted ] = useState(false);
  const [ isPlayedTimesSorted, setIsPlayedTimesSorted ] = useState(false);
  const [ isRatingSorted, setIsRatingSorted ] = useState(false);
  const [ category, setCategory ] = useState('#');

  useEffect(() => {
    setSortedList(boardGamesList)
  }, [category])

  function orderSort (e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    if(category === '#'){
      const reverseArray = sortedList.slice();
      setSortedList(reverseArray.reverse());
    }
    setCategory('#');
  }

  async function titleSort (e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    if(category === 'title'){
      const sortedArray = sortedList.slice();
      sortedArray.sort((a, b) => a.title.localeCompare(b.title));
      if(isTitleSorted){
        sortedArray.reverse();
      }
      setIsTitleSorted(!isTitleSorted);
      setSortedList(sortedArray);
    }
    setCategory('title');
  }

  function playersSort (e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    if(category === 'players'){
      const sortedArray = sortedList.slice();
      sortedArray.sort((a, b) => a.minPlayers - b.minPlayers);
      if(isPlayersSorted){
        sortedArray.reverse();
      }
      setIsPlayersSorted(!isPlayersSorted);
      setSortedList(sortedArray);
    }
    setCategory('players');
  }

  function playedTimesSort (e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    if(category === 'playedTimes'){
      const sortedArray = sortedList.slice();
      sortedArray.sort((a, b) => a.playedTimes - b.playedTimes);
      if(isPlayedTimesSorted){
        sortedArray.reverse();
      }
      setIsPlayedTimesSorted(!isPlayedTimesSorted);
      setSortedList(sortedArray);
    }
    setCategory('playedTimes');
  }

  function ratingSort (e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    if(category === 'rating'){
      const sortedArray = sortedList.slice();
      sortedArray.sort((a, b) => a.rating - b.rating);
      if(isRatingSorted){
        sortedArray.reverse();
      }
      setIsRatingSorted(!isRatingSorted);
      setSortedList(sortedArray);
    }
    setCategory('rating');
  }

  return (
  <div className="flex justify-center">
    <table className="w-9/12">
      <tbody>
        <tr className="text-sm">
          <th className="w-24"><a href="/browse" className="text-blue-600" onClick={orderSort}>#</a></th>
          <th className="w-24"></th>
          <th><a href="/browse" className="text-blue-600" onClick={titleSort}>Title</a></th>
          <th className="w-24"><a href="/browse" className="text-blue-600" onClick={playersSort}>Players</a></th>
          <th className="w-24"><a href="/browse" className="text-blue-600" onClick={playedTimesSort}>Played Times</a></th>
          <th className="w-24"><a href="/browse" className="text-blue-600" onClick={ratingSort}>Avg Rating</a></th> 
        </tr>
        {sortedList.map((item, index) => {
          return <BoardGamesItem key={index} item={item} index={index}></BoardGamesItem>
        })}
      </tbody>
    </table>
  </div>
  )
}

export default BoardGamesList