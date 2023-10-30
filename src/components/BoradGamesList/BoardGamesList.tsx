'use client'
import React, { useState, useEffect, useMemo } from 'react'
import BoardGamesItem from '../BoardGamesItem/BoardGamesItem'
import { IBoardGame } from '@/common/types/boardGame'
import { SortFields } from '@/common/types/sortFields'
import * as sortingMethods from '@/utils/sortingMethods'

const BoardGamesList = ({ sortedList, setSortedList, boardGamesList }: { 
  sortedList: IBoardGame[],
  setSortedList: React.Dispatch<React.SetStateAction<IBoardGame[]>>,
  boardGamesList: IBoardGame[]}) => {

  const [ isSorted, setIsSorted ] = useState<SortFields>({
    isTitleSorted: false,
    isPlayersSorted: false,
    isPlayedTimesSorted: false,
    isRatingSorted: false
  });
  const [ category, setCategory ] = useState('#');
  const { orderSort, titleSort, playersSort, playedTimesSort, ratingSort } = sortingMethods;

  useEffect(() => {
    setSortedList(boardGamesList)
  }, [category])

  function orderSorting (e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    orderSort(category, setCategory, sortedList, setSortedList);
  }

  function titleSorting (e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    titleSort(category, setCategory, sortedList, setSortedList, isSorted, setIsSorted);
  }

  function playersSorting (e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    playersSort(category, setCategory, sortedList, setSortedList, isSorted, setIsSorted);
  }

  function playedTimesSorting (e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    playedTimesSort(category, setCategory, sortedList, setSortedList, isSorted, setIsSorted);
  }

  function ratingSorting (e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    ratingSort(category, setCategory, sortedList, setSortedList, isSorted, setIsSorted);
  }

  return (
  <div className="flex justify-center">
    <table className="w-9/12">
      <tbody>
        <tr className="text-sm">
          <th className="w-24"><a href="/browse" className="text-blue-600" onClick={orderSorting}>#</a></th>
          <th className="w-24"></th>
          <th><a href="/browse" className="text-blue-600" onClick={titleSorting}>Title</a></th>
          <th className="w-24"><a href="/browse" className="text-blue-600" onClick={playersSorting}>Players</a></th>
          <th className="w-24"><a href="/browse" className="text-blue-600" onClick={playedTimesSorting}>Played Times</a></th>
          <th className="w-24"><a href="/browse" className="text-blue-600" onClick={ratingSorting}>Avg Rating</a></th> 
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