import React from 'react';
import './MiniImageItem.css';

interface MiniImageItemProps {
    path: string;
    title: string | undefined;
}

const MiniImageItem: React.FC<MiniImageItemProps> = ({path, title}) => {
    return (
        <div className='mini-image-container'>
            <img className='mini-image-item' src={path} alt={title}></img>
        </div>
    )
}

export default MiniImageItem; 