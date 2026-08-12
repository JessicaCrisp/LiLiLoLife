'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useApp } from '@/components/AppContext'

export default function NameScreen() {
  const router = useRouter()
  const { state, update } = useApp()
  const [name, setName] = useState(state.name)

  const handleContinue = () => {
    if (!name.trim()) return
    update({ name: name.trim() })
    router.push('/onboarding/loves')
  }

  return (
    <div className="screen-no-nav">
      <div className="page-hero" style={{ paddingTop: 64 }}>
        <span className="kicker">First things first</span>
        <h1 className="serif-xl" style={{ marginBottom: 16 }}>
          What&apos;s your<br /><em>name?</em>
        </h1>
        <p className="body-text" style={{ color: 'var(--warm-mid)' }}>
          So this feels like it&apos;s talking to you — not just anyone.
        </p>
      </div>

      <div className="name-field">
        <input
          className="name-input"
          type="text"
          placeholder="Your first name"
          value={name}
          onChange={e => setName(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleContinue()}
          autoFocus
          autoComplete="given-name"
        />
        {name.length === 0 && <div className="cursor-blink" />}
      </div>

      <p className="caption" style={{ margin: '8px 24px 0' }}>
        Just your first name is fine.
      </p>

      <button
        className={`btn-primary ${!name.trim() ? 'disabled' : ''}`}
        onClick={handleContinue}
        style={{ marginTop: 32 }}
      >
        That&apos;s me →
      </button>
    </div>
  )
}
