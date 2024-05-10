import Image from 'next/image'

import stamp from '@/assets/image/stamp.png'

export default function MainTitleSection() {
  return (
    <section className="flex h-[130px]">
      <div className="flex w-[790px] items-center justify-center text-[32px] font-bold">
        <h1>나의 회의록 관리 도우미 기로기</h1>
      </div>
      <div className="w-[134px] border border-y-0 border-r-0 border-black">
        <div className="h-[40px] content-center border border-x-0 border-t-0 border-black bg-[#E6E6E6] text-center text-[20px] font-semibold">
          승인
        </div>
        <figure className="flex h-[90px] w-[134px] items-center justify-center">
          <Image src={stamp} width={85} height={15} alt="stamp" />
        </figure>
      </div>
    </section>
  )
}
