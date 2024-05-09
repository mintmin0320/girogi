import Link from 'next/link'

export default function Header() {
  return (
    <header className="mx-auto flex items-center border border-x-0 border-t-0 px-[48px] py-[23px]">
      <nav className="flex w-full justify-between">
        <Link href="/" className="text-[28px] font-bold">
          기로기
        </Link>
        <ul className="flex items-center gap-[22px] text-[19px] font-medium">
          <Link href="/">
            <li className="p-3">녹음</li>
          </Link>
          <Link href="/">
            <li className=" p-3">보관함</li>
          </Link>
        </ul>
      </nav>
    </header>
  )
}
