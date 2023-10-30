import Link from 'next/link'
import React from 'react'

const CancleButton = ({children, onClick}: {children: string, onClick?: () => void}) => {
  return (
    <button className="flex p-2 border border-gray-400 hover:text-blue-600 rounded-md visited: text-black">
      <Link href="/">{children}</Link>
    </button>
  )
}

export default CancleButton