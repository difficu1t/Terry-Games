'use client'
import React, { useState } from 'react'
import SignButton from './Buttons/SignButton/SignButton'
import LogoButton from './Buttons/LogoButton/LogoButton'
import Button from './Buttons/Button/Button'
import LogInForm from './LogInForm/LogInForm'
import Modal from '../Modal/Modal'
import LinkButton from './Buttons/LinkButton/LinkButton'

const NavBar: React.FC = () => {

  const [ isHidden, setIsHidden ] = useState(true);

  function changeVisibility () {
    setIsHidden(!isHidden);
  }

  return (
    <header>
      <Modal isHidden={isHidden} setIsHidden={setIsHidden}>
        <LogInForm setIsHidden={setIsHidden}/>
      </Modal>
      <nav className="flex px-2 py-1 justify-between bg-orange-400">
        <ul className="flex"> 
          <li><LogoButton href="/">Terry Games</LogoButton></li>
          <LinkButton href="/browse">Browse</LinkButton>
        </ul>
        <ul className="flex">
          <li><Button onClick={changeVisibility}>Sign In</Button></li>
          <li><SignButton href="/join">Join</SignButton></li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar