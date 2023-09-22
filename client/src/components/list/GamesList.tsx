import React, { PropsWithChildren } from 'react';
import { ITableGames } from '../../types/tableGames';
import GamesListItem from '../listItem/GamesListItem';
import './GamesList.css'

interface ListParams {
    games: ITableGames[];
}


const GamesList : React.FC<PropsWithChildren<ListParams>> = ({games}) => {
    
    return (
            <div className='list-container'> 
                <div className='games-list'>
                    {games.map((game) => 
                        <GamesListItem title={game.title} game={game} key={game.title}/>
                    )}
                </div>
            </div>
        )
}

export default GamesList;