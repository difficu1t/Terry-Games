import React, { useState } from 'react';
import { ITableGames } from '../../types/tableGames';
import ListWinners from '../listwinners/ListWinners';
import MyButton from '../button/MyButton';
import { IUsers } from '../../types/users';
import ModalWinners from '../modal/MyModal';
import MySelector from '../selector/MySelector';
import './GameInfo.css';

interface GameInfoProps {
    game: ITableGames | undefined;
    users: IUsers[];
}

const GameInfo: React.FC<GameInfoProps> = ({game, users}) => {

    const [visible, setVisible] = useState(false);

    const openModal = (e: React.MouseEvent<HTMLButtonElement>) => {
        setVisible(true);
    }

    return <div className='info-container'>
            <ModalWinners visible={visible} setVisible={setVisible}>
                <MySelector users={users} game={game}></MySelector>
            </ModalWinners>

            <h1>{game?.title}</h1>
            <h2>Tier: <b>{game?.tier}</b></h2>
            <h2>Количество игроков: {game?.minPlayers} - {game?.maxPlayers}</h2>
            <h3>{game?.description}</h3>

            <div className='winners'>
                <MyButton onClick={openModal}>Победители:</MyButton>
                <ListWinners winners={game?.winners}/>
            </div>
        </div>
} 

export default GameInfo;