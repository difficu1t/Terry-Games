import React from 'react'
import Link from 'next/link'

const SignInButton= ({children, href, onClick}: 
  {children: string, href: string, onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void}) => {
  return (
    <button className={` flex p-2 bg-blue-600 border rounded-md text-white hover:bg-blue-700 visited:text-black`} 
    onClick={onClick}>
      <Link href={href}>
        {children}
      </Link>
    </button>
  )
}

export default SignInButton