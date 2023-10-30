import React from 'react'

const CancelButton = ({children, onClick}: {children: string, onClick: () => void}) => {
  return (
    <button className="p-2 text-xs font-semibold border border-gray-400 hover:text-blue-600 rounded-md visited: text-black" onClick={onClick}>
      {children}
    </button>
  )
}

export default CancelButton