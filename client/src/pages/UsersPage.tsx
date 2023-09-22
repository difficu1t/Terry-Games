import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import UsersList from '../components/usersList/UsersList';
import '../styles/UsersPage.css'
import MyButton from '../components/button/MyButton';
import { useNavigate } from 'react-router-dom';

const UsersPage: React.FC = () => {

    const {users} = useTypedSelector(state => state.usersList);
    const navigate = useNavigate();



    return (<div className='UsersPageContainer'>
        <h1>Таблица лидеров</h1>
        <UsersList users={users}></UsersList>
        <MyButton onClick={() => navigate('/adduser')}>Добавить пользователя</MyButton>
    </div>)
}

export default UsersPage;