'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useApp } from '@/components/AppContext'

const PILLAR_OPTIONS = [
  { id: 'body', label: 'My body keeps working', sub: 'Strength, balance, energy to do what I love' },
  { id: 'money', label: 'Money keeps flowing', sub: 'Enough to fund the life I\'ve described' },
  { id: 'people', label: 'The right people around me', sub: 'People who give me energy, not take it' },
  { id: 'enjoyment', label: 'I keep enjoying life', sub: 'Not just getting through the week' },
  { id: 'growth', label: 'I stay curious and growing', sub: 'Learning, trying new things, staying sharp' },
  { id: 'purpose', label: 'A reason to get up', sub: 'Something that pulls me forward every day' },
]

const PROGRESS = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export default function PillarsScreen() {
  const router = useRouter()
  const { state, update } = useApp()
  const [selected, setSelected] = useState<string[]>(state.pillarsSelected)

  const toggle = (id: string) => {
    if (selected.includes(id)) {
      setSelected(prev => prev.filter(s => s !== id))
    } else if (selected.length < 4) {
      setSelected(prev => [...prev, id])
    }
  }

  const handleContinue = () => {
    update({ pillarsSelected: selected })
    router.push('/onboarding/body')
  }

  return (
    <div className="screen-no-nav">
      <div className="progress-bar">
        {PROGRESS.map((_, i) => (
          <div key={i} className={`progress-dot ${i < 2 ? 'done' : i === 2 ? 'active' : ''}`} />
        ))}
      </div>

      <div className="page-hero">
        <h2 className="serif-lg" style={{ marginBottom: 8 }}>
          To keep doing those things as you get older, a few things need to stay true.
        </h2>
        <p className="sub-text">Which of these matter to you? Pick up to four.</p>
      </div>

      <div className="option-list" style={{ marginTop: 18 }}>
        {PILLAR_OPTIONS.map(opt => (
          <div
            key={opt.id}
            className="option-row"
            onClick={() => toggle(opt.id)}
          >
            <div className="option-row-content">
              <p className="option-row-label">{opt.label}</p>
              <p className="option-row-sub">{opt.sub}</p>
            </div>
            <div className={`checkbox ${selected.includes(opt.id) ? 'checked' : ''}`} />
          </div>
        ))}
      </div>

      {selected.length === 4 && (
        <p className="caption" style={{ margin: '10px 24px 0', textAlign: 'center', color: 'var(--watch)' }}>
          Maximum of four selected
        </p>
      )}

      <button className="btn-primary" onClick={handleContinue} style={{ marginTop: 20 }}>
        These are mine →
      </button>
    </div>
  )
}
