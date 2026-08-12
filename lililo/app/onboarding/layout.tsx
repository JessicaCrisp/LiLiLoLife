'use client'

import { AppProvider } from '@/components/AppContext'

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AppProvider>{children}</AppProvider>
}
