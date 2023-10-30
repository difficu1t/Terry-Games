'use client'
import React, { useEffect, useState } from 'react'

const Modal = ({children, isHidden, setIsHidden}: 
  {children: React.ReactNode, isHidden: boolean, setIsHidden: React.Dispatch<React.SetStateAction<boolean>>}) => {

  const [ display, setDisplay ] = useState('hidden')

  useEffect(() => {
    if(isHidden){
      setDisplay('hidden')
    } else {
      setDisplay('')
    }
  }, [isHidden])

  function hideModal () {
    setIsHidden(true)
  }

  return (
    <div className={display + " flex justify-center items-start pt-5 fixed min-w-full min-h-full bg-gray-500 bg-opacity-50"} onClick={hideModal}>
      {children}  
    </div>
  )
}

export default Modal