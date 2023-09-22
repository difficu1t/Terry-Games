import React from 'react';
import ShowCase from '../components/showCase/ShowCase';
import '../styles/WelcomePage.css'

const WelcomePage : React.FC = () => {

    return (<div className='WelcomePageContainer'>
            <h1>Популярное на сайте</h1>
            <ShowCase></ShowCase>
    </div>)
}

export default WelcomePage;