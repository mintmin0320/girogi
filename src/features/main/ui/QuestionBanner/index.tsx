export default function QuestionBanner({ title }: { title: string }) {
  return (
    <div className="h-[50px] content-center border border-x-0 border-black bg-[#E6E6E6] text-center font-semibold">
      {title}
    </div>
  )
}
