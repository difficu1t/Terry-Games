import React, {useState, useMemo} from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { ITableGames } from '../../types/tableGames';
import ShowCaseList from '../ShowCaseList/ShowCaseList';
import MyButton from '../button/MyButton';
import './ShowCase.css'


const ShowCase: React.FC = () => {
    const {games, loading} = useTypedSelector(store => store.gamesList);
    const [showCaseGames, setShowCaseGames] = useState<ITableGames[]>(games);

    useMemo(() => {
        setShowCaseGames(games)
    }, [games])

    const gamesLeft = (e: React.MouseEvent<HTMLButtonElement>) => {
        for(let i = 0; i < showCaseGames.length - 1; i++){
            let value = showCaseGames.pop();
            if(value)
                showCaseGames.unshift(value);
        }
        setShowCaseGames([...showCaseGames]);
    }

    const gameRight = (e: React.MouseEvent<HTMLButtonElement>) => {
        for(let i = 0; i < showCaseGames.length - 1; i++){
            let value = showCaseGames.shift();
            if(value)
                showCaseGames.push(value);
        }
        setShowCaseGames([...showCaseGames]);
    }

    return (<div className='showCaseContainer'>
        <MyButton onClick={gameRight}>{"<"}</MyButton>
            <div className='showCaseListContainer'>
                {showCaseGames.length !== 0
                ? <ShowCaseList games={showCaseGames}></ShowCaseList>
                : <div></div>}
            </div>
        <MyButton onClick={gameRight}>{">"}</MyButton>
    </div>)
}

export default ShowCase;