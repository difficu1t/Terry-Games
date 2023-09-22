import React, { useState, useCallback } from 'react';
import { useTableGamesAction } from '../../hooks/useTableGamesAction';
import axios from 'axios';
import './TableGamesFrom.css'

const TableGamesFrom: React.FC = () => {

    const [imagemini, setImagemini] = useState<File>();
    const [image, setImage] = useState<File>();

    const { addTableGames } = useTableGamesAction()

    function submitClick(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        sendFile();
        getGameElements(gameTitle, gameDescription, gameMinPlayers, gameMaxPlayers, hasDls, gameTier);
    }

    function getGameElements(title: HTMLInputElement, description: HTMLTextAreaElement, minPlayers: HTMLInputElement, 
        maxPlayers: HTMLInputElement, dls: HTMLInputElement, tier: HTMLSelectElement) {
        addTableGames({title, description, minPlayers, maxPlayers, dls, tier});
    }

    function getImage(e: React.ChangeEvent<HTMLInputElement>){
        if(e.target.files){
            setImage(e.target.files[0]);
        }
    }

    function getImageMini(e: React.ChangeEvent<HTMLInputElement>){
        if(e.target.files){
            setImagemini(e.target.files[0]);
        }
    }


    const sendFile = useCallback(async () => {
        try {
            if(!image) return console.log('lol');
            const dataimg = new FormData();
            dataimg.append('img', image);
            await axios.post('/api/upload', dataimg, {headers: {'content-Type' : 'multipart/form-data'}})

            if(!imagemini) return console.log('lol');
            const dataimgmini = new FormData();
            dataimgmini.append('img', imagemini);
            await axios.post('/api/upload', dataimgmini, {headers: {'content-Type' : 'multipart/form-data'}})
        } catch (error) {
            console.log(error);
        }
    }, [image, imagemini])

    const gameTitle = document.getElementById("gameTitle") as HTMLInputElement;
    const gameDescription = document.getElementById("gameDescription") as HTMLTextAreaElement;
    const gameMaxPlayers = document.getElementById("gameMaxPlayers") as HTMLInputElement;
    const gameMinPlayers = document.getElementById("gameMinPlayers") as HTMLInputElement;
    const hasDls = document.getElementById("hasDls") as HTMLInputElement;
    const gameTier = document.getElementById("gameTier") as HTMLSelectElement;

    return (
    <div className='tableGamesContainer'>
        <div className='tableGamesForm'>
            <form className="formContainer" action="/tablegames" method="GET" id="gameForm" encType='multipart/form-data'>
                <div>
                    <p className='explanationTo'>Загрузите изображение</p>
                    <input type="file" accept="image/png" onChange={getImage}/>
                </div>
                <div>
                    <p className='explanationTo'>Загрузите изображение</p><input type="file" accept="image/png" onChange={getImageMini}/>
                </div>
                <div>
                    <p className='fieldHeader'>Название игры</p>
                    <input className="titleGameField" type="text" name="title" id="gameTitle" placeholder="Введите название"/>
                </div>
                <div>
                    <p className='playersHeader'>Кол-во игроков</p>
                    <input className='numberField' type="number" name="minPlayers" id="gameMinPlayers"></input>&nbsp;-&nbsp;
                    <input className='numberField' type="number" name="maxPlayers" id="gameMaxPlayers"></input>
                </div>
                
                <div className='extraInfo'>
                    <div className='extraContainer'>
                        <p>DLS</p>
                        <input type="checkbox" name="dls" id="hasDls"></input>
                    </div>
                    <div className='extraContainer'>
                        <p>Tier</p>
                        <select className='selectField' name="tier" id="gameTier">
                                <option value="S" label="S"></option>
                                <option value="A" label="A"></option>
                                <option value="B" label="B"></option>
                                <option value="C" label="C"></option>
                                <option value="D" label="D"></option>
                                <option value="E" label="E"></option>
                                <option value="F" label="F"></option>
                        </select>
                    </div>
                </div>
                <div>
                    <p className='fieldHeader'>Описание</p>
                    <textarea maxLength={1000} name="description" id="gameDescription" required></textarea>
                </div>
                <div>
                    <button className="submitButton" type='submit' onClick={submitClick}>Добавить настольную игру</button>        
                </div>
            </form>
        </div>
    </div>)
}

export default TableGamesFrom;