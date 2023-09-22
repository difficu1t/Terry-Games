import React from 'react';
import { IUsers } from '../../types/users';
import UsersListItem from '../usersListItem/UsersListItem';
import './UsersList.css'

interface UsersListParams {
    users: IUsers[]
}

const UsersList: React.FC<UsersListParams> = ({users}) => {

    return (<div className='userListContainer'>
        {users.map(user => <UsersListItem user={user}></UsersListItem>)}
    </div>)
}

export default UsersList;