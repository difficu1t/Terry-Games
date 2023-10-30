import React from 'react'

const Button= ({children, onClick}: {children: string, onClick?: () => void}) => {
  return (
    <button onClick={onClick}>
      <span className="flex p-2 hover:bg-orange-500 rounded-md visited: text-black">{children}</span>
    </button>
  )
}

export default Button