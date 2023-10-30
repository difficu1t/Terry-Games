import React from 'react'
import Link from 'next/link'

const LinkButton= ({children, href}: 
  {children: string, href: string}) => {
  return (
    <Link href={href}>
      <span className={`flex p-2 rounded-md hover:bg-orange-500 visited: text-black`}>{children}</span>
    </Link>
  )
}

export default LinkButton