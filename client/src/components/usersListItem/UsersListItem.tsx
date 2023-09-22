import React from 'react';
import { IUsers } from '../../types/users';
import './UsersListItem.css'

interface UsersListItemParams {
    user: IUsers;
}

const UsersListItem: React.FC<UsersListItemParams> = ({user}) => {

    return (<div className='usersListItemContainer'>
        <div className='userListItemInfo'>
            <h4>{user.name}</h4>
            <h5>{user.skill}</h5>
        </div>
        <h5 className='numOfWins'>{user.numOfWins}</h5>
    </div>)
}

export default UsersListItem;