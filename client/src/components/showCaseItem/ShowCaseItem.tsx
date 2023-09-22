import React, {useState,useMemo} from 'react';
import { ITableGames } from '../../types/tableGames';
import './ShowCaseItem.css'
import MiniImageItem from '../miniImageItem/MiniImageItem';
import { useNavigate } from 'react-router-dom';

interface ShowCaseItemParams {
    game: ITableGames;
    index: number;
}

const ShowCaseItem: React.FC<ShowCaseItemParams> = ({game, index}) => {

    const [path, setPath] = useState<any>();
    const navigate = useNavigate();

    useMemo(() => {
        if(game.title !== ""){
            try {
                setPath(require(`../../img/${game.title}mini.png`));
            } catch(exception) {
                
            }
        }
    }, [game.title])
 
    return(<div onClick={() => {navigate(`/tablegames/${game.title}`)}} className='showGame'> 
        <MiniImageItem path={path} title={game.title}></MiniImageItem>
    </div>)
}

export default ShowCaseItem;