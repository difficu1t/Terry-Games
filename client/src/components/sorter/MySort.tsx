import React, { useMemo, PropsWithChildren } from 'react';
import './MySort.css'

interface SortProps {
    defaultState: string
    sortOption: {value :string, element: string}[];
    bonusSortOption: {value: string}[];
    selectedSort: string;
    setSelectedSort: React.Dispatch<React.SetStateAction<string>>;
    bonusSelectedSort: string;
    setBonusSelectedSort: React.Dispatch<React.SetStateAction<string>>;
    sortedList: any[];
    setSortedList: React.Dispatch<React.SetStateAction<any>>;
    list: any[];
    sort: (selectedSort: string, sortedList: any[], setSortedList:  React.Dispatch<React.SetStateAction<any[]>>, list: any[]) => void;
    reverseSort: (bonusSelectedSort: string, sortedList: any[], setSortedList:  React.Dispatch<React.SetStateAction<any[]>>, list: any[]) => void;
}

const MySort: React.FC<PropsWithChildren<SortProps>> = ({defaultState, sortOption, bonusSortOption, selectedSort, setSelectedSort, bonusSelectedSort, setBonusSelectedSort, sortedList, setSortedList, list, sort, reverseSort}) => {
    
    const changeSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedSort(e.target.value);
    }

    const changeReverseSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setBonusSelectedSort(e.target.value);
    }

    useMemo(() => {
        sort(selectedSort, sortedList, setSortedList, list);
    }, [selectedSort, list]);

    useMemo(() => {
        reverseSort(bonusSelectedSort, sortedList, setSortedList, list);
    }, [bonusSelectedSort, list]);

    return(
    <div className='sort-container'>
        <div className='sort-item'>
            <select className='sorter' onChange={changeSort}>
                <option value="default">{defaultState}</option>
                {sortOption.map((option) => <option key={option.element} value={option.element}>{option.value}</option>)}
            </select> 
            <select className='sorter' onChange={changeReverseSort}>
                {bonusSortOption.map((option) => <option key={option.value}>{option.value}</option>)}
            </select>
        </div>
    </div>)
}

export default MySort;