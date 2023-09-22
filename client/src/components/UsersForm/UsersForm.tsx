import React, {useState} from 'react';
import { useUsersAction } from '../../hooks/useUsersAction';
import './UsersForm.css'

const UsersForm : React.FC = () => {

    const {addUser} = useUsersAction();

    const [name, setName] = useState<string>("");
    const [skill, setSkill] = useState<string>("");
    
    const submitClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addUser(name, skill);
    }

    const nameValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const skillValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSkill(e.target.value);
    }

    return (
    <div className='usersContainer'>
        <div className='usersForm'>
            <form className='formContainer' action="/" method="GET" id="userForm" encType='multipart/form-data'>
                <div>
                    <p className='fieldHeader'>Имя</p>
                    <input className="userField" type="text" placeholder="Введите имя" value={name} onChange={nameValue}/>
                </div>
                <div>
                    <p className='fieldHeader'>Титул</p>
                    <input className="userField" type="text" placeholder="Введите титул" value={skill} onChange={skillValue}/>
                </div>
                <div>
                    <button className="submitButton" type='submit' onClick={submitClick}>Добавить настольную игру</button>        
                </div>
            </form>
        </div>
    </div>)
}   

export default UsersForm;