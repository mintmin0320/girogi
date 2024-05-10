import MainInfoSection from '@/features/main/ui/MainInfoSection'
import MainNavThumbnail from '@/features/main/ui/MainNavThumbnail'
import MainTitleSection from '@/features/main/ui/MainTitleSection'

export default function MainPage() {
  return (
    <main className="mx-auto flex h-dvh max-w-[924px] items-center">
      <section className="border border-black">
        <MainTitleSection />
        <MainInfoSection />
        <MainNavThumbnail />
      </section>
    </main>
  )
}
