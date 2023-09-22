import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import MiniImageItem from '../miniImageItem/MiniImageItem';

const NavBar : React.FC = () => {

    const path = require('../../img/usersicon.png')
    return (<div className='nav-bar'>
        <div>
            <Link to="/" className='nav-bar-items'>Terry Games</Link>
            <Link to="/tablegames" className='nav-bar-items'>List</Link>
        </div>
        <Link to="/users"><MiniImageItem path={path} title={"users"}></MiniImageItem></Link>
    </div>)
}

export default NavBar;