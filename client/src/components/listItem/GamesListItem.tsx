import React, { useState, useMemo, PropsWithChildren } from 'react';
import { useNavigate } from "react-router-dom";
import { ITableGames } from '../../types/tableGames';
import MiniImageItem from '../miniImageItem/MiniImageItem';
import './GamesListItem.css';

interface ItemParams {
    title: string | undefined;
    game: ITableGames;
}

const GamesListItem : React.FC<PropsWithChildren<ItemParams>> = ({title, game}) => {

    const [path, setPath] = useState<any>();
    const navigate = useNavigate();
    
    useMemo(() => {
        if(title !== ""){
            try {
                setPath(require(`../../img/${game.title}mini.png`));
            } catch(exception) {
                
            }
        }
    }, [title]) 

    return (<div className='list-item'>
        <MiniImageItem path={path} title={title}></MiniImageItem>
        <div className="list-title" onClick={(e) => { navigate(`/tablegames/${game.title}`)}}>
            {game.title}
        </div>
    </div>)
}

export default GamesListItem;