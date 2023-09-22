import React, {useState, useMemo} from 'react';
import { ITableGames } from '../../types/tableGames';
import ImageItem from '../imageItem/ImageItem';
import GameInfo from '../gameInfo/GameInfo';
import { IUsers } from '../../types/users';
import './GameItem.css';

interface GameItemParams {
    games: ITableGames[];
    users: IUsers[];
    title: string | undefined;
}

const GameItem: React.FC<GameItemParams> = ({games, users, title}) => {

    const [path, setPath] = useState<any>();
    const game = games.find(item => item.title === title);

    useMemo(() => {
        try {
            setPath(require(`../../img/${title}.png`));
        } catch(exception) {
            
        }
    }, [title])

    return (
    <div className="main-container">
            <div className='game-container'>
                <ImageItem path={path} title={title} />
                <GameInfo game={game} users={users}/>
            </div>
    </div>) 
}

export default GameItem;