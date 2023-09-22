import React, { PropsWithChildren, Dispatch, SetStateAction } from 'react';
import './MyModal.css';

interface ModalWinnersPropts {
    visible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;
}

const ModalWinners: React.FC<PropsWithChildren<ModalWinnersPropts>> = ({children, visible, setVisible}) => {
    const rootClasse = ["myModal"]; 

    if(visible) {
        rootClasse.push("active");
    }

    const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
        setVisible(false);
    }

    const contentClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    }
    
    return (
        <div className={rootClasse.join(" ")} onClick={closeModal}>
            <div className='modalContent' onClick={contentClick}>
                {children}
            </div>
        </div>
    )
} 

export default ModalWinners;