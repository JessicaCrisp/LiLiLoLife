'use client'

import { useRouter } from 'next/navigation'
import { useApp } from '@/components/AppContext'

export default function AhaScreen() {
  const router = useRouter()
  const { state } = useApp()

  const name = state.name || 'You'
  const love = state.primaryLove || 'doing what you love'

  return (
    <div className="screen-no-nav">
      <div className="page-hero" style={{ paddingTop: 36 }}>
        <span className="kicker">Here&apos;s what I know about you</span>
        <h2 className="serif-lg" style={{ marginBottom: 0 }}>
          You want to keep doing what you love — for as long as possible.
        </h2>
      </div>

      <div className="north-star">
        <p className="ns-kicker">What you&apos;re living for</p>
        <p className="ns-text">
          Still {love.toLowerCase().charAt(0) === love.toLowerCase().charAt(0) ? love : love} —
          on your own terms, for as long as possible.
        </p>
        <p className="ns-note">As your life changes, so can this. This is just where you&apos;re starting from.</p>
      </div>

      <div className="summary-rows">
        <div className="summary-row">
          <div className="status-dot dot-watch" />
          <div>
            <p className="sr-label">Your body needs some attention</p>
            <p className="sr-detail">Based on what you&apos;ve shared — there&apos;s real room to build toward what you love doing for longer.</p>
          </div>
        </div>
        <div className="summary-row">
          <div className="status-dot dot-good" />
          <div>
            <p className="sr-label">Your money picture has a foundation</p>
            <p className="sr-detail">The picture is better than it probably feels. A few things are worth watching — we&apos;ll look at those together.</p>
          </div>
        </div>
        <div className="summary-row">
          <div className="status-dot dot-good" />
          <div>
            <p className="sr-label">You&apos;re enjoying life and staying curious</p>
            <p className="sr-detail">Genuinely good. Keep doing exactly this.</p>
          </div>
        </div>
        <div className="summary-row">
          <div className="status-dot dot-watch" />
          <div>
            <p className="sr-label">Your connections are worth paying attention to</p>
            <p className="sr-detail">Who gives you energy and who takes it — this matters more than most people realise at this stage.</p>
          </div>
        </div>
      </div>

      <p className="serif-italic" style={{ margin: '20px 24px 0' }}>
        You know what matters. You know what needs a little attention. Now you&apos;re in —{' '}
        <strong style={{ fontStyle: 'normal', fontWeight: 500, color: 'var(--charcoal)' }}>where do you want to start?</strong>
      </p>

      <button className="btn-primary" onClick={() => router.push('/onboarding/conversion')} style={{ marginBottom: 24 }}>
        Let&apos;s go →
      </button>
    </div>
  )
}
