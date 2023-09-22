import React from 'react';
import './Loader.css'

const Loader: React.FC = () => {
    const img = require('../../img/Corgii.jpg');

    return (<div className='loader-container'>
        <div className='loader'>
            <img src={img} alt="" />
        </div>
    </div>)
}

export default Loader;