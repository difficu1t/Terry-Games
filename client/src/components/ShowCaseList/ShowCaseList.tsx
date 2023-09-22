import React from 'react';
import { ITableGames } from '../../types/tableGames';
import ShowCaseItem from '../showCaseItem/ShowCaseItem';
import './ShowCaseList.css'

interface ShowCaseListParams {
    games: ITableGames[];
}

const ShowCaseList: React.FC<ShowCaseListParams> = ({games}) => {

    return (
        <div className='showCaseListContainer'>
            {games.map((game, index) => {
                if(index <= 3)
                    return <ShowCaseItem key={game.title} game={game} index={index}></ShowCaseItem>})}
        </div>
    )
}

export default ShowCaseList;