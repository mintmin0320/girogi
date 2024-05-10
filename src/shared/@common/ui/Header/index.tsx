import Link from 'next/link'

import { menuOption } from '../../constants/menuOptions'

export default function Header() {
  return (
    <header className="mx-auto flex items-center border border-x-0 border-t-0 bg-[#FAFAFA] px-[48px] py-[23px]">
      <nav className="flex w-full justify-between">
        <Link href="/" className="text-[28px] font-bold">
          기로기
        </Link>
        <ul className="flex items-center gap-[22px] text-[19px] font-medium">
          {menuOption.map(({ title, path }) => (
            <li key={title}>
              <Link href={path} className="p-2">
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
