import giftData from '@/lib/giftData'
import GiftClient from '@/components/GiftClient'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Happy Birthday Hussien!🎂',
  description: 'A special birthday message for Hussien',
}

export default function Home() {
  const data = giftData.hussien || giftData.yahya || giftData.aya
  return <GiftClient data={data} />
}
