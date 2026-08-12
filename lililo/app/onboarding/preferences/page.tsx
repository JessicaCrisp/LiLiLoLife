'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useApp } from '@/components/AppContext'

const CHECKIN_DAYS = [
  { id: 'sunday', label: 'Sunday morning', sub: 'Start the week with a clear picture' },
  { id: 'saturday', label: 'Saturday morning', sub: 'Quiet time before the weekend fills up' },
  { id: 'friday', label: 'Friday evening', sub: 'End of week reflection' },
  { id: 'whenever', label: "I'll open it when I'm ready", sub: 'No reminder needed' },
]

const CHECKIN_TIMES = [
  { id: 'early', label: 'Early morning', sub: '6–8am' },
  { id: 'mid', label: 'Mid morning', sub: '8–10am' },
  { id: 'late', label: 'Late morning', sub: '10am–12pm' },
  { id: 'afternoon', label: 'Afternoon', sub: '12–5pm' },
  { id: 'evening', label: 'Evening', sub: '5–8pm' },
  { id: 'night', label: 'Night owl', sub: 'After 8pm' },
]

const NUDGE_FREQ = [
  { id: 'weekly', label: 'Just the weekly check-in', sub: "Minimal — I'll open it when I'm ready" },
  { id: 'couple', label: 'One or two nudges a week', sub: 'Enough to keep me on track' },
  { id: 'accountable', label: 'Keep me accountable', sub: 'Check in on me regularly' },
]

const PROGRESS = [1,2,3,4,5,6,7,8,9]

export default function PreferencesScreen() {
  const router = useRouter()
  const { state, update } = useApp()
  const [checkinDay, setCheckinDay] = useState(state.checkinDay)
  const [checkinTime, setCheckinTime] = useState(state.checkinTime)
  const [nudgeFrequency, setNudgeFrequency] = useState(state.nudgeFrequency)

  const handleContinue = () => {
    update({ checkinDay, checkinTime, nudgeFrequency })
    router.push('/onboarding/aha')
  }

  return (
    <div className="screen-no-nav">
      <div className="progress-bar">
        {PROGRESS.map((_,i) => <div key={i} className={`progress-dot ${i < 8 ? 'done' : i === 8 ? 'active' : ''}`} />)}
      </div>

      <div className="page-hero" style={{ paddingTop: 30 }}>
        <span className="kicker">Last thing</span>
        <h2 className="serif-lg" style={{ marginBottom: 6 }}>A couple of quick things about how this works best for you.</h2>
        <p className="sub-text">You can change these any time in settings.</p>
      </div>

      <p className="section-head">When would you like your weekly check-in?</p>
      <div className="option-list">
        {CHECKIN_DAYS.map(opt => (
          <div key={opt.id} className="option-row" onClick={() => setCheckinDay(opt.id)}>
            <div className="option-row-content">
              <p className="option-row-label">{opt.label}</p>
              <p className="option-row-sub">{opt.sub}</p>
            </div>
            <div className={`checkbox ${checkinDay===opt.id?'checked':''}`} />
          </div>
        ))}
      </div>

      <p className="section-head">And what time?</p>
      <div className="btn-grid">
        {CHECKIN_TIMES.map(t => (
          <button key={t.id} className={`grid-btn ${checkinTime===t.id?'selected':''}`} onClick={() => setCheckinTime(t.id)}>
            <span className="gb-label">{t.label}</span>
            <span className="gb-sub">{t.sub}</span>
          </button>
        ))}
      </div>

      <p className="section-head">How often would you like a nudge during the week?</p>
      <div className="option-list">
        {NUDGE_FREQ.map(opt => (
          <div key={opt.id} className="option-row" onClick={() => setNudgeFrequency(opt.id)}>
            <div className="option-row-content">
              <p className="option-row-label">{opt.label}</p>
              <p className="option-row-sub">{opt.sub}</p>
            </div>
            <div className={`checkbox ${nudgeFrequency===opt.id?'checked':''}`} />
          </div>
        ))}
      </div>

      <button className="btn-primary" onClick={handleContinue} style={{ marginBottom: 24 }}>
        I&apos;m ready →
      </button>
    </div>
  )
}
