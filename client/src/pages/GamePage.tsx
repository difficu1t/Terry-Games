import React from 'react';
import { useParams } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector';
import GameItem from '../components/gameItem/GameItem';


interface GameParams {
    title: string;
}

const GamePage : React.FC = () => {

    const {games} = useTypedSelector(state => state.gamesList);
    const {users} = useTypedSelector(state => state.usersList);
    const {title} = useParams<keyof GameParams>();

    return (<div>
        <GameItem games={games} users={users} title={title}/>
    </div>)
}   

export default GamePage;