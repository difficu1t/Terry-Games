import React from 'react'
import Link from 'next/link'

const FormButton= ({children, href, onClick}: 
  {children: string, href: string, onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void}) => {
  return (
    <button className={`flex justify-center p-2 bg-blue-600 border rounded-md text-white hover:bg-blue-700 visited:text-black w-full`} 
    onClick={onClick}>
      <Link href={href}>
        {children}
      </Link>
    </button>
  )
}

export default FormButton