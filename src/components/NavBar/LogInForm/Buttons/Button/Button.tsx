import React from 'react'

const Button= ({children, onClick}: {children: string, onClick?: () => void}) => {
  return (
    <button onClick={onClick}>
      <span className="flex p-2 border border-gray-400 hover:text-blue-600 rounded-md visited: text-black">{children}</span>
    </button>
  )
}

export default Button