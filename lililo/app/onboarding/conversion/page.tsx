'use client'

import { useRouter } from 'next/navigation'

export default function ConversionScreen() {
  const router = useRouter()

  return (
    <div className="screen-no-nav">
      <div className="page-hero" style={{ paddingTop: 36 }}>
        <span className="kicker">What happens next</span>
        <h1 className="serif-xl" style={{ marginBottom: 0 }}>
          Here&apos;s what this <em>does.</em>
        </h1>
      </div>

      <div className="divider" />

      <div className="conv-body">
        <p className="conv-para">
          You just told us more about your life than most apps ever ask.{' '}
          <strong>Now it gets useful.</strong>
        </p>
        <p className="conv-para">
          Most of us already know, roughly, what we should be doing. We know we need to move more.
          We know the savings plan needs attention. We know we&apos;d feel better if we called that person.{' '}
          <strong>The gap isn&apos;t knowledge. It&apos;s doing it — and noticing when you&apos;ve quietly stopped.</strong>
        </p>
        <p className="conv-para" style={{ marginBottom: 0 }}>
          Most things that matter don&apos;t disappear all at once. The trips get pushed back. The things
          that light you up get replaced by things that just need doing. Nobody notices — until they
          look back and can&apos;t quite remember when it changed.
        </p>
      </div>

      <div className="trio-list">
        <div className="trio-row">
          <div className="trio-icon">👁</div>
          <div>
            <p className="trio-label">It notices what you can&apos;t</p>
            <p className="trio-detail">A weekly check-in that watches for the slow drift — the kind nobody sees coming until it&apos;s already happened.</p>
          </div>
        </div>
        <div className="trio-row">
          <div className="trio-icon">→</div>
          <div>
            <p className="trio-label">It tells you the one thing that actually matters this week</p>
            <p className="trio-detail">Not a list. The single most useful nudge for you, right now, based on everything you&apos;ve said.</p>
          </div>
        </div>
        <div className="trio-row">
          <div className="trio-icon">📅</div>
          <div>
            <p className="trio-label">Every month — what actually moved</p>
            <p className="trio-detail">An honest account of what improved, what slipped, and what deserves your attention next. No spin.</p>
          </div>
        </div>
      </div>

      <div className="conv-closer">
        <p className="conv-closer-text">
          LiLiLo has been quietly paying attention — every week — to the gap between the life you said
          you wanted and what you&apos;re actually doing about it.
        </p>
      </div>

      <button className="btn-primary" onClick={() => router.push('/onboarding/paywall')} style={{ marginTop: 24, marginBottom: 24 }}>
        I want that →
      </button>
    </div>
  )
}
