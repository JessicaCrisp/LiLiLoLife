'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useApp } from '@/components/AppContext'

const LIVING_OPTS = ['Living with a partner','Living alone','With family','With housemates','Other']
const CHILDREN_OPTS = ['No children','Yes — at home','Yes — grown up and nearby','Yes — grown up and far away','Grandchildren too']
const WHERE_OPTS = ['Big city','Small city','Suburbs','Regional town','Rural / remote','Moving around']
const WORRY_OPTS = ['Money running out','Health declining','Missing out on life','Losing independence','Relationships drifting','Nothing major right now']

const LIFE_STAGES = [
  'Still working, thinking about what\'s next',
  'Life has recently changed in a big way',
  'Finding my feet in a new chapter',
  'Pretty settled — making the most of it',
  'Going through something hard right now',
]

const PROGRESS = [1,2,3,4,5,6,7,8,9]

export default function LifeContextScreen() {
  const router = useRouter()
  const { state, update } = useApp()
  const [ctx, setCtx] = useState<Record<string,string>>(state.lifeContext)
  const [lifeStage, setLifeStage] = useState(state.lifeStage)
  const [lifeNote, setLifeNote] = useState(state.lifeNote)
  const [openField, setOpenField] = useState<string|null>(null)

  const setVal = (field: string, val: string) => {
    setCtx(prev => ({ ...prev, [field]: val }))
    setOpenField(null)
  }

  const handleContinue = () => {
    update({ lifeContext: ctx, lifeStage, lifeNote })
    router.push('/onboarding/preferences')
  }

  const renderGridBtn = (id: string, label: string, sub: string) => {
    const val = ctx[id]
    const isOpen = openField === id
    return (
      <button key={id} className={`grid-btn ${val?'selected':''}`} onClick={() => setOpenField(isOpen ? null : id)}>
        <span className="gb-label">{label}</span>
        <span className="gb-sub">{val ? `${val} ✓` : isOpen ? 'Open ↑' : sub}</span>
      </button>
    )
  }

  return (
    <div className="screen-no-nav">
      <div className="progress-bar">
        {PROGRESS.map((_,i) => <div key={i} className={`progress-dot ${i < 7 ? 'done' : i === 7 ? 'active' : ''}`} />)}
      </div>

      <div className="page-hero">
        <h2 className="serif-lg" style={{ marginBottom: 6 }}>Almost there. A few things that help me understand your life properly.</h2>
      </div>

      <div className="btn-grid" style={{ marginTop: 14 }}>
        {renderGridBtn('living', 'Living situation', 'Who you live with')}
        {renderGridBtn('children', 'Children', 'Do you have them?')}
        {renderGridBtn('where', 'Where you live', 'City / regional / rural...')}
        {renderGridBtn('worry', 'Biggest worry', 'What weighs on you most?')}
      </div>

      {openField === 'living'   && <div className="picker-sheet"><p className="picker-label">Living situation</p>{LIVING_OPTS.map(o => <div key={o} className={`picker-opt ${ctx.living===o?'selected':''}`} onClick={() => setVal('living',o)}>{o}</div>)}</div>}
      {openField === 'children' && <div className="picker-sheet"><p className="picker-label">Children</p>{CHILDREN_OPTS.map(o => <div key={o} className={`picker-opt ${ctx.children===o?'selected':''}`} onClick={() => setVal('children',o)}>{o}</div>)}</div>}
      {openField === 'where'    && <div className="picker-sheet"><p className="picker-label">Where you live</p>{WHERE_OPTS.map(o => <div key={o} className={`picker-opt ${ctx.where===o?'selected':''}`} onClick={() => setVal('where',o)}>{o}</div>)}</div>}
      {openField === 'worry'    && <div className="picker-sheet"><p className="picker-label">Biggest worry</p>{WORRY_OPTS.map(o => <div key={o} className={`picker-opt ${ctx.worry===o?'selected':''}`} onClick={() => setVal('worry',o)}>{o}</div>)}</div>}

      <p className="section-head">Where are you right now in life?</p>
      <div className="option-list">
        {LIFE_STAGES.map(stage => (
          <div key={stage} className="option-row" onClick={() => setLifeStage(stage)}>
            <div className="option-row-content">
              <p className="option-row-label">{stage}</p>
            </div>
            <div className={`checkbox ${lifeStage===stage?'checked':''}`} />
          </div>
        ))}
      </div>

      <p className="section-head">
        Anything else on your mind?{' '}
        <span style={{ color: 'var(--warm-border)', fontSize: 10, fontWeight: 300, textTransform: 'none', letterSpacing: 0 }}>(optional)</span>
      </p>

      <div className="text-field-wrap">
        <textarea
          className="text-field"
          placeholder="Anything you want me to know about where you are in life right now..."
          value={lifeNote}
          onChange={e => setLifeNote(e.target.value)}
          rows={4}
          style={{ resize: 'none' }}
        />
      </div>
      <p className="caption" style={{ margin: '6px 24px 0' }}>
        Some people write one word. Some write a paragraph. Both are useful.
      </p>

      <button className={`btn-primary ${!lifeStage ? 'disabled' : ''}`} onClick={handleContinue} style={{ marginBottom: 24 }}>
        That&apos;s me →
      </button>
    </div>
  )
}
