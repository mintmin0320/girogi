import QuestionBanner from '../QuestionBanner'

export default function MainInfoSection() {
  return (
    <section className="h-[180px]">
      <QuestionBanner title="프로젝트 소개를 작성해 주세요. (최대 500자)" />
      <article className="h-[120px] content-center text-center">
        <p>
          &quot;회의에 집중하느라 중요한 기록을 놓친 경험이 있으신가요?&quot;{' '}
          <br />
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
  )
}
