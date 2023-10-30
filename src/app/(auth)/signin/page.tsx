'use client'
import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/app/firebase'
import SignInButton from "@/components/NavBar/LogInForm/Buttons/SignInButton/SignInButton"
import Link from "next/link"
import CancleButton from "@/components/FormButton/CancleButton/CancleButton"
import { useUsersActions } from '@/utils/hooks/useUsersActions'

export default function SignUp() {
  
  const { addUser } = useUsersActions();
  const [ username, setUsername ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const changeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  }

  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const signInHandle = (e: React.MouseEvent<HTMLButtonElement>) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setPassword('');
        setEmail('');
        setUsername('');
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
  <div className="flex w-full h-screen justify-center">
    <div className={"flex flex-col w-[500px] h-fit mt-24 bg-white rounded-md border border-gray-300"}>
      <div className="flex justify-center w-full p-3">
        <span className="text-lg font-black pt-3">Welcome back, sign in!</span>
      </div>
      <div className="flex flex-col p-3 px-10 gap-2">
        <div>
          <input type="text" className="w-full border border-gray-400 rounded-md p-2 px-3" placeholder="Username" value={username} onChange={changeUsername}/>
        </div>
        <div>
          <input type="email" className="w-full border border-gray-400 rounded-md p-2 px-3" placeholder="Email" value={email} onChange={changeEmail}/>
        </div>
        <div> 
          <input type="password" className="w-full border border-gray-400 rounded-md p-2 px-3" placeholder="Password" value={password} onChange={changePassword}/>
        </div>
      </div>
      <div className="flex px-10">
        <span className="text-xs font-bold">Don't have an account? <Link href="/join" className="text-blue-600">Sign up</Link></span>
      </div>
      <div className="border-t border-gray-400 m-3 mx-10"></div>
      <div className="flex gap-1 p2 px-10 mb-3">
        <SignInButton href="/">Sign In</SignInButton>
        <CancleButton>Cancel</CancleButton>
      </div>
    </div>
  </div>
  )
}