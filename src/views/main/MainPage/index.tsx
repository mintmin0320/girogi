import Image from 'next/image'

import stamp from '@/assets/image/stamp.png'

import MainNavThumbnail from '@/features/main/ui/MainNavThumbnail'
import QuestionBanner from '@/features/main/ui/QuestionBanner'

export default function MainPage() {
  return (
    <main className="mx-auto flex h-dvh max-w-[924px] items-center">
      <section className="border border-black">
        {/** section header */}
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

        {/** section nav */}
        <section className="h-[180px]">
          <QuestionBanner title="프로젝트 소개를 작성해 주세요. (최대 500자)" />
          <article className="h-[120px] content-center text-center">
            <p>
              &quot;회의에 집중하느라 중요한 기록을 놓친 경험이
              있으신가요?&quot; <br />
              &quot;앞으로는 회의 시간에는 회의에만 집중할 수 있도록 기록은
              기로기한테 맡겨주세요!&quot;
            </p>
            <br />
            <p>
              녹음된 내용을 수정 및 출력(PDF, 프린트), 보관(업데이트 예정)할 수
              있어요. 🙂
            </p>
          </article>
        </section>

        {/** section nav */}
        <MainNavThumbnail />
      </section>
    </main>
  )
}
