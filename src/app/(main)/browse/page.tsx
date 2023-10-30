'use client'
import React, { useState, useEffect } from 'react'
import BoardGamesList from '@/components/BoradGamesList/BoardGamesList'
import { useTypedSelector } from '@/utils/hooks/useTypedSelector'

export default function BrowseBoardGames() {

  const { boardGames } = useTypedSelector(state => state.boardGames)
  const [ sortBoardGames, setSortBoardGames ] = useState(boardGames);

  useEffect(() => {
    setSortBoardGames(boardGames);
  }, [boardGames])

  return (
    <BoardGamesList sortedList={sortBoardGames} setSortedList={setSortBoardGames} boardGamesList={boardGames}></BoardGamesList>
  )
}