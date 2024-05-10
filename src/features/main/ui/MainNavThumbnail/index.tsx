import Image from 'next/image'

import { mainMenuOption } from '../../constants/mainNavOptions'
import QuestionBanner from '../QuestionBanner'

export default function MainNavThumbnail() {
  return (
    <nav className="flex flex-col justify-center">
      <QuestionBanner title="원하시는 메뉴를 선택해 주세요." />
      <div className="flex">
        {mainMenuOption.map(({ label, path }) => (
          <figure
            key={label}
            className="flex flex-1 flex-col items-center justify-center gap-[20px] rounded-[8px] p-[30px] hover:border hover:bg-[#F2F2F2]"
          >
            <Image
              src={path}
              width={250}
              height={180}
              alt={label}
              className="rounded-full"
              priority
            />
            <figcaption className="text-[26px] font-bold">{label}</figcaption>
          </figure>
        ))}
      </div>
    </nav>
  )
}
