import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/app/firebase'
import SignInButton from './Buttons/SignInButton/SignInButton'
import Button from './Buttons/Button/Button'
import Link from 'next/link'

const LogInForm = ({setIsHidden}: {setIsHidden: React.Dispatch<React.SetStateAction<boolean>>}) => {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const logUpHandle = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      })
      .catch((error) => {
        console.log(error)
      })
    setIsHidden(true);
    setEmail('');
    setPassword('');
  }

  function closeForm () {
    setIsHidden(true);
  }

  function changeEmail (e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function changePassword (e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  return (
      <div className={"flex flex-col w-[500px] bg-white rounded-md overflow-hidden"} onClick={e => e.stopPropagation()}>
        <div className="flex justify-between w-full bg-orange-400 p-3">
          <span>Sign in</span>
          <button onClick={closeForm}>
            <AiOutlineClose className="w-full h-full"/>
          </button> 
        </div>
          <div className="flex flex-col p-3 gap-2">
            <input type="email" className="border border-gray-400 rounded-md p-2 px-3" placeholder="Email" 
            value={email} 
            onChange={changeEmail}/>
            <input type="password" className="border border-gray-400 rounded-md p-2 px-3" placeholder="Password" 
            value={password} 
            onChange={changePassword}/>
          </div>
          <span className='mx-3 text-xs'>Don't have an account? <Link href="/join" className="text-blue-600" onClick={closeForm}>Sign up</Link></span>
          <div className="border-t border-gray-400 m-3"></div>
          <div className="flex gap-1 p2 px-3 mb-3">
            <SignInButton href="/" onClick={logUpHandle}>Sign In</SignInButton>
            <Button onClick={closeForm}>Close</Button>
          </div>
      </div>
  )
}

export default LogInForm