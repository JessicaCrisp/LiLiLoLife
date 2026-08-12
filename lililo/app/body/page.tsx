'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import BottomNav from '@/components/BottomNav'

type RoutineState = 'none' | 'done' | 'skipped'

export default function BodyScreen() {
  const router = useRouter()
  const [mobility, setMobility] = useState<RoutineState>('done')
  const [strength, setStrength] = useState<RoutineState>('skipped')
  const [cardio, setCardio] = useState<RoutineState>('done')
  const [mobilityOpen, setMobilityOpen] = useState(false)

  const cycleState = (current: RoutineState): RoutineState => {
    if (current === 'none') return 'done'
    if (current === 'done') return 'skipped'
    return 'none'
  }

  return (
    <div className="screen">

      {/* Back nav */}
      <div style={{ padding: '56px 24px 0' }}>
        <button
          onClick={() => router.push('/home')}
          style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          <i className="ti ti-arrow-left" style={{ fontSize: 14, color: 'var(--warm-light)' }} aria-hidden="true" />
          <span style={{ fontSize: 13, color: 'var(--warm-light)', fontFamily: 'var(--font-sans)' }}>Home</span>
        </button>
      </div>

      <div className="page-hero" style={{ paddingTop: 16 }}>
        <span className="kicker">Your body</span>
        <h1 className="serif-xl" style={{ marginBottom: 8 }}>
          Built to keep<br />you <em>moving.</em>
        </h1>
        <p className="sub-text">
          Everything here is built around what you love doing and what your body needs to keep doing it.
        </p>
      </div>

      {/* North star mini */}
      <div className="north-star" style={{ padding: '16px 20px' }}>
        <p className="ns-kicker">What we&apos;re building toward</p>
        <p className="ns-text" style={{ fontSize: 15, marginBottom: 0 }}>
          Windsurfing at 70 needs strength, balance and mobile shoulders. That&apos;s what we&apos;re working on.
        </p>
      </div>

      {/* Routine */}
      <p className="section-head">Your routine this week</p>
      <div className="routine-items">
        <div className={`routine-item ${mobility === 'done' ? 'done-it' : mobility === 'skipped' ? 'skipped' : ''}`}
          onClick={() => setMobility(cycleState(mobility))}>
          <div className="routine-icon" style={{ background: '#E1F5EE' }}>
            <i className="ti ti-run" style={{ fontSize: 16, color: '#0F6E56' }} aria-hidden="true" />
          </div>
          <div style={{ flex: 1 }}>
            <p className="routine-name">Mobility</p>
            <p className="routine-detail">Every morning — 3 minutes</p>
          </div>
          <span className={`routine-status ${mobility === 'done' ? 'done' : mobility === 'skipped' ? 'skip' : ''}`}>
            {mobility === 'done' ? 'Done ✓' : mobility === 'skipped' ? 'Skipped' : 'Tap to mark'}
          </span>
        </div>
        <div className={`routine-item ${strength === 'done' ? 'done-it' : strength === 'skipped' ? 'skipped' : ''}`}
          onClick={() => setStrength(cycleState(strength))}>
          <div className="routine-icon" style={{ background: '#FAEEDA' }}>
            <i className="ti ti-barbell" style={{ fontSize: 16, color: '#BA7517' }} aria-hidden="true" />
          </div>
          <div style={{ flex: 1 }}>
            <p className="routine-name">Strength</p>
            <p className="routine-detail">2x this week — bodyweight</p>
          </div>
          <span className={`routine-status ${strength === 'done' ? 'done' : strength === 'skipped' ? 'skip' : ''}`}>
            {strength === 'done' ? 'Done ✓' : strength === 'skipped' ? 'Skipped' : 'Tap to mark'}
          </span>
        </div>
        <div className={`routine-item ${cardio === 'done' ? 'done-it' : cardio === 'skipped' ? 'skipped' : ''}`}
          onClick={() => setCardio(cycleState(cardio))}>
          <div className="routine-icon" style={{ background: '#FAECE7' }}>
            <i className="ti ti-heart-rate-monitor" style={{ fontSize: 16, color: '#D85A30' }} aria-hidden="true" />
          </div>
          <div style={{ flex: 1 }}>
            <p className="routine-name">Cardio</p>
            <p className="routine-detail">3x this week — walk with a hill</p>
          </div>
          <span className={`routine-status ${cardio === 'done' ? 'done' : cardio === 'skipped' ? 'skip' : ''}`}>
            {cardio === 'done' ? 'Done ✓' : cardio === 'skipped' ? 'Skipped' : 'Tap to mark'}
          </span>
        </div>
      </div>

      {/* How to — expandable */}
      <p className="section-head">How to do it well</p>
      <div style={{ padding: '0 20px' }}>
        <div style={{ background: 'var(--white)', borderRadius: 'var(--r-md)', border: '0.5px solid var(--warm-hairline)', overflow: 'hidden', boxShadow: 'var(--shadow-card)' }}>
          <button
            style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 18px', width: '100%', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
            onClick={() => setMobilityOpen(!mobilityOpen)}
          >
            <div className="routine-icon" style={{ background: '#E1F5EE', flexShrink: 0 }}>
              <i className="ti ti-run" style={{ fontSize: 15, color: '#0F6E56' }} aria-hidden="true" />
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: 16, color: 'var(--charcoal)' }}>Mobility</p>
              <p className="routine-detail">10 min every morning before anything else</p>
            </div>
            <span style={{ fontSize: 12, color: 'var(--warm-light)' }}>{mobilityOpen ? 'Less ↑' : 'How to ↓'}</span>
          </button>

          {mobilityOpen && (
            <div style={{ borderTop: '0.5px solid var(--warm-hairline)', padding: 18, background: '#FAFAF8' }}>
              <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--warm-light)', marginBottom: 14 }}>
                How to do this well
              </p>
              {[
                ['Hip circles', 'Hands on hips, feet shoulder-width. Draw large slow circles — 10 each direction. Your hips are the pivot point of every manoeuvre on the water.'],
                ['Shoulder rolls', 'Roll both shoulders backward 10 times, then forward 10. Pull one arm across your chest, hold 20 seconds each side.'],
                ['Ankle rotations', 'Lift one foot, draw slow circles — 10 each direction, then switch. Do this while the kettle boils.'],
              ].map(([title, desc], i) => (
                <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 12 }}>
                  <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'var(--charcoal)', color: 'var(--parchment)', fontSize: 11, fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>{i + 1}</div>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 500, color: 'var(--charcoal)', marginBottom: 2 }}>{title}</p>
                    <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--charcoal-mid)', lineHeight: 1.6 }}>{desc}</p>
                  </div>
                </div>
              ))}
              <div style={{ background: '#F0E8DC', borderRadius: 10, padding: '12px 14px', marginTop: 4 }}>
                <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--warm-light)', marginBottom: 6 }}>Focus on</p>
                <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--charcoal-mid)', lineHeight: 1.6 }}>Slow and deliberate. This is maintenance not a workout. The slower you move, the more useful it is.</p>
              </div>
              <div style={{ background: '#FAECE7', borderRadius: 10, padding: '12px 14px', marginTop: 8 }}>
                <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--alert)', marginBottom: 6 }}>Watch out for</p>
                <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--charcoal-mid)', lineHeight: 1.6 }}>Pushing into pain on the shoulder stretch. You should feel a gentle pull, never a sharp pinch.</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <p style={{ margin: '8px 20px 0', fontSize: 12, fontWeight: 300, color: 'var(--warm-light)', textAlign: 'center' }}>
        If something hurts, stop. When in doubt, talk to your physio or doctor first.
      </p>

      {/* Nudge card */}
      <div className="nudge-card">
        <p className="nudge-kicker">This week</p>
        <p className="nudge-text">
          Tomorrow morning before anything else — hip circles, shoulder rolls, ankles.
          This is what keeps you on a board at 70.
        </p>
        <p className="nudge-time">Only 3 minutes.</p>
        <div className="nudge-actions">
          <button className="btn-dark-sm">Done it</button>
          <button className="btn-ghost-sm">Not yet</button>
        </div>
      </div>

      {/* Something changed */}
      <button style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '20px 24px 0', background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 300, color: 'var(--warm-light)' }}>
        <i className="ti ti-plus-circle" style={{ fontSize: 16 }} aria-hidden="true" />
        Something changed with your health or body? Tell me
      </button>

      <div style={{ height: 24 }} />
      <BottomNav />
    </div>
  )
}
