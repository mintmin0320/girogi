import { StaticImageData } from 'next/image'

import recordingThumbnail from '@/assets/image/recording-thumbnail.webp'
import storageThumbnail from '@/assets/image/storage-thumbnail.webp'

interface MenuOption {
  readonly label: string
  readonly path: StaticImageData
}

export const mainMenuOption: MenuOption[] = [
  { label: '녹음 시작하기', path: recordingThumbnail },
  { label: '저장된 회의록 확인하기', path: storageThumbnail },
]
