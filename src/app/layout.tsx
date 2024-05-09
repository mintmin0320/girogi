import type { Metadata } from 'next'

import Header from '@/shared/@common/ui/Header'
import '../../css/globals.css'

export const metadata: Metadata = {
  title: '기로기',
  description: '나의 회의록 관리 도우미 기로기',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
