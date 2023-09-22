import React from 'react';
import "./ImageItem.css";
import './ImageItem.css'

interface ImageParams { 
    path: string;
    title: string | undefined;
}

const ImageItem: React.FC<ImageParams> = ({path, title}) => {

    return (
        <div className='image-container'>
            <img className='image-item' src={path} alt={title}></img>
        </div>
    )
}

export default ImageItem;

