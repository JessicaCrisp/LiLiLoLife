'use client'

import { useRouter } from 'next/navigation'
import BottomNav from '@/components/BottomNav'

export default function HomeScreen() {
  const router = useRouter()

  return (
    <div className="screen">

      {/* Header */}
      <div className="page-hero" style={{ paddingTop: 56 }}>
        <span className="kicker">Sunday, 1 September</span>
        <h1 className="serif-xl">
          Good morning,<br /><em>Sarah.</em>
        </h1>
      </div>

      {/* North star */}
      <div className="north-star">
        <p className="ns-kicker">What you&apos;re living for</p>
        <p className="ns-text">
          Still windsurfing, travelling and eating well — on your own terms, for as long as possible.
        </p>
        <div className="ns-tags">
          <span className="ns-tag">Body</span>
          <span className="ns-tag">Money</span>
          <span className="ns-tag">Enjoyment</span>
        </div>
      </div>

      {/* Pillars */}
      <p className="section-head">How things are</p>
      <div className="pillar-list">
        <div className="pillar-row" onClick={() => router.push('/body')}>
          <div style={{ flex: 1 }}>
            <p className="pillar-name">Body</p>
            <p className="pillar-sub">Three weeks without strength work — let&apos;s fix that</p>
          </div>
          <div className="status-dot dot-alert" />
        </div>
        <div className="pillar-row" onClick={() => router.push('/money')}>
          <div style={{ flex: 1 }}>
            <p className="pillar-name">Money</p>
            <p className="pillar-sub">Looking okay — worth a closer look together soon</p>
          </div>
          <div className="status-dot dot-watch" />
        </div>
        <div className="pillar-row" onClick={() => router.push('/life')}>
          <div style={{ flex: 1 }}>
            <p className="pillar-name">Life</p>
            <p className="pillar-sub">Bali in October — and trip two taking shape</p>
          </div>
          <div className="status-dot dot-good" />
        </div>
      </div>

      {/* Nudge card */}
      <div className="nudge-card">
        <p className="nudge-kicker">One thing this week</p>
        <p className="nudge-text">
          Tomorrow morning, before anything else — hip circles, shoulder rolls, ankles.
          This is what keeps you on a board at 70.
        </p>
        <p className="nudge-time">Only 3 minutes.</p>
        <div className="nudge-actions">
          <button className="btn-dark-sm">Done it</button>
          <button className="btn-ghost-sm">Not yet</button>
        </div>
      </div>

      {/* Joy card */}
      <div className="joy-card">
        <div className="joy-header">
          <span className="kicker" style={{ marginBottom: 6 }}>Something for you today</span>
          <p className="joy-title">
            A restaurant worth trying before Bali — so you know what great Southeast Asian food actually tastes like.
          </p>
        </div>
        <div className="joy-body">
          <p className="joy-body-text">
            A small Vietnamese place in Surry Hills locals rate above everything on TripAdvisor —
            family run, no reservations, worth the queue.{' '}
            <strong style={{ color: 'var(--charcoal)', fontWeight: 500 }}>Perfect Bali prep.</strong>
          </p>
          <div className="joy-actions">
            <button className="joy-chip primary">Tell me more</button>
            <button className="joy-chip">Save this</button>
            <button className="joy-chip">Not for me</button>
          </div>
        </div>
      </div>

      {/* Check-in strip */}
      <div className="checkin-strip" onClick={() => router.push('/checkin')}>
        <div style={{ flex: 1 }}>
          <p className="checkin-strip-title">Your weekly check-in</p>
          <p className="checkin-strip-sub">30 seconds — when you&apos;re ready</p>
        </div>
        <i className="ti ti-arrow-right" style={{ fontSize: 20, color: 'var(--parchment)' }} aria-hidden="true" />
      </div>

      <BottomNav />
    </div>
  )
}
