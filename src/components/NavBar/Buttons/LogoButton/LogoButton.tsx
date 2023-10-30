import React from 'react'
import Link from 'next/link'

const LogoButton= ({children, href}: {children: string, href: string}) => {
  return (
    <Link href={href}>
      <span className="flex p-2 font-bold visited: text-black">{children}</span>
    </Link>
  )
}

export default LogoButton