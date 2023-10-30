import React from 'react'

const SaveButton = ({children, onClick}: {children: string, onClick: () => void}) => {
  return (
    <button className="p-2 text-xs font-semibold border border-gray-400 bg-blue-600 text-white hover:bg-blue-700 rounded-md visited: text-black"
    onClick={onClick}>
      {children}
    </button>
  )
}

export default SaveButton