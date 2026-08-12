'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useApp } from '@/components/AppContext'

const CONNECTION_QS = [
  { id: 'connected', q: 'How connected do you feel to people you choose to spend time with?', opts: ['Lonely','Could be better','Good','Really good'] },
  { id: 'afterPeople', q: 'How do you feel after spending time with your people?', opts: ['Energised','Mixed','Drained','Don\'t see people much'] },
  { id: 'socialCircle', q: 'Are you happy with the number of people in your life?', opts: ['Want more people','Happy as is','Want less','It varies'] },
  { id: 'honestTalk', q: 'Do you have at least one person you can talk to honestly?', opts: ['Yes definitely','Sort of','Not really','No'] },
]

const ENJOYMENT_QS = [
  { id: 'doingLoves', q: 'Are you doing things you love regularly?', opts: ['Rarely','Sometimes','Yes','All the time'] },
  { id: 'spontaneous', q: 'Do things tend to happen spontaneously or does everything need planning?', opts: ['Always planned','Mostly planned','Mix','Pretty spontaneous'] },
  { id: 'lastExcited', q: 'When did you last do something that genuinely excited you?', opts: ['This week','This month','Few months ago','Can\'t remember'] },
  { id: 'lookingFwd', q: 'Are you looking forward to things?', opts: ['Not really','A little','Yes','Always got something coming up'] },
]

const GROWTH_QS = [
  { id: 'learning', q: 'Are you learning new things?', opts: ['Not really','Sometimes','Yes regularly','Constantly'] },
  { id: 'curious', q: 'Are you staying curious — reading, listening, exploring ideas?', opts: ['Not really','Sometimes','Yes','Always'] },
  { id: 'newThings', q: 'Are you doing new things — places, people, experiences?', opts: ['Rarely','Sometimes','Yes','All the time'] },
  { id: 'lifeHeading', q: 'How do you feel about where your life is heading?', opts: ['Worried','Uncertain','Okay','Excited'] },
]

const PURPOSE_CHIPS = ['My work or business','My family','Creative projects','Helping others','A sport or passion','Staying healthy','Travel and adventure','Something I\'m building','Not sure right now']
const PURPOSE_STRENGTH = [
  { id: 'strong', label: 'Really strong', sub: 'Clear and energising' },
  { id: 'good', label: 'Pretty good most days', sub: 'There but not always loud' },
  { id: 'flat', label: 'A bit flat lately', sub: 'Going through the motions a bit' },
  { id: 'searching', label: 'I\'m searching for it', sub: 'This chapter feels uncertain' },
]

const PROGRESS = [1,2,3,4,5,6,7,8,9]

function QuestionRow({ q, opts, selected, onSelect }: { q: string; opts: string[]; selected: string; onSelect: (v: string) => void }) {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <div className="option-row" onClick={() => setOpen(!open)} style={{ cursor: 'pointer' }}>
        <div className="option-row-content">
          <p className="option-row-label" style={{ fontSize: 14 }}>{q}</p>
          {selected && <p className="option-row-sub">{selected} ✓</p>}
          {!selected && <p className="option-row-sub" style={{ color: 'var(--warm-border)' }}>Tap to answer</p>}
        </div>
        <span style={{ fontSize: 13, color: 'var(--warm-border)', flexShrink: 0 }}>{open ? '↑' : '↓'}</span>
      </div>
      {open && (
        <div style={{ background: 'var(--parchment-dark)', borderRadius: '0 0 var(--r-md) var(--r-md)', overflow: 'hidden' }}>
          {opts.map(opt => (
            <div key={opt} style={{
              padding: '12px 18px', fontSize: 14, color: selected === opt ? 'var(--parchment)' : 'var(--charcoal)',
              background: selected === opt ? 'var(--charcoal)' : 'transparent',
              borderTop: '0.5px solid var(--warm-hairline)', cursor: 'pointer', fontFamily: 'var(--font-serif)',
            }}
              onClick={() => { onSelect(opt); setOpen(false) }}>
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function LifeQuestionsScreen() {
  const router = useRouter()
  const { state, update } = useApp()
  const [connection, setConnection] = useState<Record<string,string>>(state.connection)
  const [enjoyment, setEnjoyment] = useState<Record<string,string>>(state.enjoyment)
  const [growth, setGrowth] = useState<Record<string,string>>(state.growth)
  const [purposeChips, setPurposeChips] = useState<string[]>(state.purposeChips)
  const [purposeStrength, setPurposeStrength] = useState(state.purposeStrength)

  const togglePurpose = (chip: string) => {
    setPurposeChips(prev => prev.includes(chip) ? prev.filter(c => c !== chip) : [...prev, chip])
  }

  const handleContinue = () => {
    update({ connection, enjoyment, growth, purposeChips, purposeStrength })
    router.push('/onboarding/life-context')
  }

  return (
    <div className="screen-no-nav">
      <div className="progress-bar">
        {PROGRESS.map((_,i) => <div key={i} className={`progress-dot ${i < 6 ? 'done' : i === 6 ? 'active' : ''}`} />)}
      </div>

      <div className="page-hero">
        <h2 className="serif-lg" style={{ marginBottom: 6 }}>A few more honest questions.</h2>
        <p className="sub-text">Tap each question — four options appear. Pick the one that fits.</p>
      </div>

      <p className="section-head">The people around you</p>
      <div className="option-list">
        {CONNECTION_QS.map(q => (
          <QuestionRow key={q.id} q={q.q} opts={q.opts} selected={connection[q.id] || ''} onSelect={v => setConnection(prev => ({ ...prev, [q.id]: v }))} />
        ))}
      </div>

      <p className="section-head">What you&apos;re enjoying</p>
      <div className="option-list">
        {ENJOYMENT_QS.map(q => (
          <QuestionRow key={q.id} q={q.q} opts={q.opts} selected={enjoyment[q.id] || ''} onSelect={v => setEnjoyment(prev => ({ ...prev, [q.id]: v }))} />
        ))}
      </div>

      <p className="section-head">Staying sharp</p>
      <div className="option-list">
        {GROWTH_QS.map(q => (
          <QuestionRow key={q.id} q={q.q} opts={q.opts} selected={growth[q.id] || ''} onSelect={v => setGrowth(prev => ({ ...prev, [q.id]: v }))} />
        ))}
      </div>

      <p className="section-head">What gives you a reason to get up?</p>
      <div className="chips-wrap" style={{ paddingTop: 0 }}>
        {PURPOSE_CHIPS.map(chip => (
          <button key={chip} className={`chip ${purposeChips.includes(chip)?'selected':''}`} onClick={() => togglePurpose(chip)}>{chip}</button>
        ))}
      </div>

      <p className="section-head">How strong does that feel right now?</p>
      <div className="option-list">
        {PURPOSE_STRENGTH.map(opt => (
          <div key={opt.id} className="option-row" onClick={() => setPurposeStrength(opt.id)}>
            <div className="option-row-content">
              <p className="option-row-label">{opt.label}</p>
              <p className="option-row-sub">{opt.sub}</p>
            </div>
            <div className={`checkbox ${purposeStrength===opt.id?'checked':''}`} />
          </div>
        ))}
      </div>

      <button className="btn-primary" onClick={handleContinue} style={{ marginBottom: 24 }}>
        Keep going →
      </button>
    </div>
  )
}
