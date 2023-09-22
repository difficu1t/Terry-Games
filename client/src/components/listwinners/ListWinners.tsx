import React from 'react';
import { IUsers } from '../../types/users';
import './ListWinners.css'


interface ListWinnersProps {
    winners: IUsers[] | undefined;
}

const ListWinners: React.FC<ListWinnersProps> = ({winners}) => {
    
    return (
        <div className='winners-container'>
            {winners?.map((winner, index, array) => {
                if(index !== array.length - 1){
                    return <h3>{winner.name + ","}&nbsp;</h3>
                }
                else {
                    return <h3>{winner.name + "."}</h3>
                }
                }
            )}
        </div>
    )
} 

export default ListWinners;