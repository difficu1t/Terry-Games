'use client'
import React from 'react'
import { IBoardGame } from '@/common/types/boardGame'
import Link from 'next/link'
import Image from 'next/image'

const BoardGamesItem = ({item, index}: {item: IBoardGame, index: number}) => {
  const gameID = String(item.id);

  return (
  <tr className="h-16 text-xs border border-gray-300">
    <td className="border border-gray-300">
      <div className="flex justify-center">
        {index+1}
      </div>
    </td>
    <td className="border border-gray-300">
      <div className="flex justify-center p-1">
        <Image src={ gameID == '1' ? `/img/${gameID}.png` : '/img/test.png'}
              width={96}
              height={80}
              priority
              alt={`${item.title}`}>
        </Image>
      </div>
    </td>
    <td className="border border-gray-300">
      <div className="flex flex-col items-start justify-center">
        <Link href={`/boardgame/${item.id}`} className="text-blue-600">{item.title}</Link>
        <span>{item.description}</span>
      </div>
    </td>
    <td className="border border-gray-300">
      <div className="flex justify-center">
        {item.minPlayers} - {item.maxPlayers}
      </div>
    </td>
    <td className="border border-gray-300">
      <div className="flex justify-center">
        {item.playedTimes}
      </div>
    </td>
    <td className="border border-gray-300">
      <div className="flex justify-center">
        {item.avgRating}
      </div>
    </td>
  </tr>
  )
}

export default BoardGamesItem