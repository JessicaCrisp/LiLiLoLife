'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useApp } from '@/components/AppContext'

const LOVE_CATEGORIES = [
  'Travel', 'Food & restaurants', 'Cooking', 'Sport & adventure',
  'Fitness & movement', 'Family', 'Friends & socialising',
  'Gardening & outdoors', 'Creative pursuits', 'Learning & reading',
  'Music & arts', 'Business & work', 'Volunteering', 'Something else',
]

const PROGRESS = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export default function LovesScreen() {
  const router = useRouter()
  const { state, update } = useApp()
  const [primaryLove, setPrimaryLove] = useState(state.primaryLove)
  const [secondaryLove, setSecondaryLove] = useState(state.secondaryLove)
  const [categories, setCategories] = useState<string[]>(state.loveCategories)
  const [showBlock, setShowBlock] = useState(false)

  const toggleCat = (cat: string) => {
    setCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    )
  }

  const handleContinue = () => {
    if (!primaryLove.trim()) {
      setShowBlock(true)
      return
    }
    update({ primaryLove: primaryLove.trim(), secondaryLove, loveCategories: categories })
    router.push('/onboarding/pillars')
  }

  return (
    <div className="screen-no-nav">
      <div className="progress-bar">
        {PROGRESS.map((_, i) => (
          <div key={i} className={`progress-dot ${i === 0 ? 'done' : i === 1 ? 'active' : ''}`} />
        ))}
      </div>

      <div className="page-hero">
        <span className="kicker">
          {state.name ? `Good to meet you, ${state.name}` : 'Good to meet you'}
        </span>
        <h2 className="serif-lg" style={{ marginBottom: 6 }}>
          What&apos;s the one thing in the whole world you love doing most?
        </h2>
        <p className="sub-text">
          The thing you want to still be doing as you get older.
        </p>
      </div>

      <div className="text-field-wrap">
        <textarea
          className={`text-field ${showBlock && !primaryLove.trim() ? 'required-empty' : ''}`}
          placeholder="What is the thing you love doing most?"
          value={primaryLove}
          onChange={e => { setPrimaryLove(e.target.value); setShowBlock(false) }}
          rows={2}
          style={{ resize: 'none' }}
        />
      </div>

      {showBlock && !primaryLove.trim() && (
        <p className="gentle-block">
          <i className="ti ti-info-circle" aria-hidden="true" />
          Just one word is enough — what&apos;s the thing you love most?
        </p>
      )}

      <div className="text-field-wrap">
        <label className="text-field-label">
          Anything else you&apos;d add?{' '}
          <span style={{ color: 'var(--warm-border)', fontWeight: 300 }}>(optional)</span>
        </label>
        <textarea
          className="text-field"
          placeholder="Any other loves worth knowing about..."
          value={secondaryLove}
          onChange={e => setSecondaryLove(e.target.value)}
          rows={2}
          style={{ resize: 'none' }}
        />
      </div>

      <p className="section-head" style={{ paddingTop: 20 }}>
        And more broadly — which of these are part of your life?{' '}
        <span style={{ color: 'var(--warm-border)', fontStyle: 'normal', fontSize: 10, letterSpacing: 0, textTransform: 'none', fontWeight: 300 }}>
          (optional)
        </span>
      </p>

      <div className="chips-wrap" style={{ paddingTop: 0 }}>
        {LOVE_CATEGORIES.map(cat => (
          <button
            key={cat}
            className={`chip ${categories.includes(cat) ? 'selected' : ''}`}
            onClick={() => toggleCat(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <button className={`btn-primary ${!primaryLove.trim() ? 'disabled' : ''}`} onClick={handleContinue} style={{ marginTop: 20 }}>
        That&apos;s my list →
      </button>
    </div>
  )
}
