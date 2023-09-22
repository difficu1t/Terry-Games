import React, { useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { ITableGames } from '../types/tableGames';
import { sortOption, bonusSortOption } from '../gamesbt';
import { sortGames, reverseSortGames } from '../tools/sortGames';
import { useNavigate } from 'react-router-dom';
import GamesList from '../components/list/GamesList';
import Loader from '../components/loader/Loader';
import MySort from '../components/sorter/MySort';
import MyButton from '../components/button/MyButton';
import '../styles/TableGamesList.css'

const TableGamesList : React.FC = () => {

    const { games, loading, error } = useTypedSelector(state => state.gamesList);
    const [selectedSort, setSelectedSort] = useState<string>("default");
    const [bonusSelectedSort, setBonusSelectedSort] = useState<string>("default")
    const [sortedGames, setSortedGames] = useState<ITableGames[]>(games);

    const navigate = useNavigate()


    return (<div>
        <MySort defaultState="По умолчанию" sortOption={sortOption} bonusSortOption={bonusSortOption} selectedSort={selectedSort} setSelectedSort={setSelectedSort} bonusSelectedSort={bonusSelectedSort} 
        setBonusSelectedSort={setBonusSelectedSort} sortedList={sortedGames} setSortedList={setSortedGames} list={games} sort={sortGames} reverseSort={reverseSortGames}>  
        </MySort>
        <GamesList games={sortedGames} />
        <div className='addGame'>
            <MyButton onClick={() => navigate(`/creategame`)}>Добавить игру</MyButton>
        </div>
    </div>)
}

export default TableGamesList;