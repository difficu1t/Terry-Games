import React, { PropsWithChildren, useState } from "react";
import { IUsers } from "../../types/users";
import { useTableGamesAction } from "../../hooks/useTableGamesAction";
import './MySelector.css'
import { ITableGames } from "../../types/tableGames";
import MyButton from "../button/MyButton";
import { useUsersAction } from "../../hooks/useUsersAction";

interface MySelectorProps {
    users: IUsers[];
    game: ITableGames | undefined;
}

const MySelector: React.FC<PropsWithChildren<MySelectorProps>> = ({users, game}) => {

    const [selectedUser, setSelectedUser] = useState<IUsers>();
    const { addWinner, removeWinner } = useTableGamesAction();
    const {addOrRemoveWin} = useUsersAction();

    const newWinner = (e: React.MouseEvent<HTMLButtonElement>) => {
        if(selectedUser !== undefined){
            addWinner(selectedUser, game?.title); 
            addOrRemoveWin({currentuser: selectedUser.name, add: true});
        }
    }

    const deleteWinner = (e: React.MouseEvent<HTMLButtonElement>) => {
        if(selectedUser !== undefined){
            removeWinner(selectedUser, game?.title);
            addOrRemoveWin({currentuser: selectedUser.name, add: false});
        }
    } 

    const selectUser = (e: React.ChangeEvent<HTMLSelectElement>) => {
        for (const user of users) {
            if(user.name === e.target.value)
                setSelectedUser(user);
        }
    }

    return (<div>
        <select className="mySelector" onChange={selectUser}>
            <option selected disabled value='Выберите победителя'>Выберите победителя</option>
            {users.map(user => <option value={user.name} label={user.name} key={user.name}></option>)}
        </select>
        <div>
            <MyButton onClick={newWinner}>Добавить победителя</MyButton>
            <MyButton onClick={deleteWinner}>Удалить победителя</MyButton>
        </div>
    </div>)
}

export default MySelector;