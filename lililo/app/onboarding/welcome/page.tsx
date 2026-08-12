'use client'

import { useRouter } from 'next/navigation'

export default function Welcome() {
  const router = useRouter()

  return (
    <div className="screen-no-nav" style={{ background: 'var(--parchment)' }}>
      <div className="page-hero" style={{ paddingTop: 64 }}>
        <span className="kicker">Welcome</span>
        <h1 className="serif-xl" style={{ marginBottom: 16 }}>
          Live the life<br />you <em>love.</em>
        </h1>
        <p className="body-text">
          Whatever got you here — good decisions, hard years, a bit of both —
          there&apos;s still time to live exactly the way you want.
        </p>
        <p className="body-text" style={{ marginTop: 16 }}>
          This helps you keep doing what you love, years into the future.
          It grows with you through changes. And makes sure you never
          quietly drift away from the life you actually want.
        </p>
      </div>

      <div className="divider" />

      <p className="privacy-note">
        Private by design. No bank accounts, no health apps, no wearables.
        Just what you choose to share.
      </p>

      <button
        className="btn-primary"
        onClick={() => router.push('/onboarding/name')}
      >
        Let&apos;s start →
      </button>
    </div>
  )
}
