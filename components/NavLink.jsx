'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavLink({ href, exact, children, ...props }) {
  const pathname = usePathname()
  const active = ' font-bold border-b-4 border-y-reverse border-cyan-200'
  const isActive = exact ? pathname === href : pathname.startsWith(href)

  if (isActive) {
    props.className += active
  }

  return (
    <li {...props}>
      <Link href={href}>
        {children}
      </Link>
    </li>
  )
}