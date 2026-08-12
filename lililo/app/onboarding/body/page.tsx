'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useApp } from '@/components/AppContext'

const BODY_FIELDS: { id: string; label: string; opts: string[] }[] = [
  { id: 'age', label: 'Age', opts: ['Under 35','35–44','45–54','55–59','60–64','65–69','70–74','75–79','80+'] },
  { id: 'height_cm', label: 'Height', opts: ['Under 150cm','150–155cm','155–160cm','160–165cm','165–170cm','170–175cm','175–180cm','180–185cm','185–190cm','190cm+'] },
  { id: 'weight_kg', label: 'Weight', opts: ['Under 50kg','50–55kg','55–60kg','60–65kg','65–70kg','70–75kg','75–80kg','80–90kg','90–100kg','100–110kg','110–120kg','120kg+'] },
  { id: 'fitness', label: 'Fitness level', opts: ['Low','Medium','High','Very high'] },
  { id: 'cardio', label: 'Cardio', opts: ['Never','1–2x week','3–4x week','5+ week'] },
  { id: 'strength', label: 'Strength training', opts: ['Never','1x week','2–4x week','5+ week'] },
  { id: 'mobility', label: 'Mobility work', opts: ['Never','1–2x week','3–4x week','Daily'] },
  { id: 'sleep', label: 'Sleep', opts: ['Under 5 hours','5–6 hours','6–7 hours','7–8 hours','8+ hours'] },
  { id: 'bp', label: 'Blood pressure', opts: ['Normal','High','Medicated','Don\'t know'] },
  { id: 'smoker', label: 'Smoker', opts: ['Non-smoker','Ex-smoker','Current smoker'] },
]

const WEIGHT_COMFORT = { id: 'weight_comfort', label: 'How do you feel about your current weight?',
  opts: ['Happy where I am','Could lose a few kilos','It\'s affecting my health','Rather not focus on this'] }

const INJURIES = [
  'None','Knee pain or replacement','Hip pain or replacement','Lower back pain',
  'Shoulder injury','Osteoporosis','Heart condition','Diabetes','Arthritis','Something else',
]

const PROGRESS = [1,2,3,4,5,6,7,8,9]

export default function BodyScreen() {
  const router = useRouter()
  const { state, update } = useApp()
  const [body, setBody] = useState<Record<string, string>>(state.body)
  const [injuries, setInjuries] = useState<string[]>(state.injuries)
  const [openField, setOpenField] = useState<string | null>(null)
  const [units, setUnits] = useState<'metric' | 'imperial'>('metric')

  const selectVal = (fieldId: string, val: string) => {
    setBody(prev => ({ ...prev, [fieldId]: val }))
    setOpenField(null)
  }

  const toggleInjury = (inj: string) => {
    if (inj === 'None') { setInjuries(['None']); return }
    setInjuries(prev => {
      const without = prev.filter(i => i !== 'None')
      return without.includes(inj) ? without.filter(i => i !== inj) : [...without, inj]
    })
  }

  const handleContinue = () => {
    update({ body, injuries })
    router.push('/onboarding/money-a')
  }

  const getHeightOpts = () => units === 'metric'
    ? ['Under 150cm','150–155cm','155–160cm','160–165cm','165–170cm','170–175cm','175–180cm','180–185cm','185–190cm','190cm+']
    : ['Under 5\'0"','5\'0"–5\'2"','5\'2"–5\'4"','5\'4"–5\'6"','5\'6"–5\'8"','5\'8"–5\'10"','5\'10"–6\'0"','6\'0"–6\'2"','6\'2"+']

  const getWeightOpts = () => units === 'metric'
    ? ['Under 50kg','50–55kg','55–60kg','60–65kg','65–70kg','70–75kg','75–80kg','80–90kg','90–100kg','100–110kg','110–120kg','120kg+']
    : ['Under 110 lbs','110–125 lbs','125–140 lbs','140–155 lbs','155–170 lbs','170–185 lbs','185–200 lbs','200–220 lbs','220–240 lbs','240–265 lbs','265+ lbs']

  const allFields = [...BODY_FIELDS, WEIGHT_COMFORT]

  const renderGridBtn = (field: { id: string; label: string }) => {
    const val = body[field.id]
    const isOpen = openField === field.id
    return (
      <button
        key={field.id}
        className={`grid-btn ${val ? 'selected' : ''} ${field.id === WEIGHT_COMFORT.id ? 'full-width' : ''}`}
        onClick={() => setOpenField(isOpen ? null : field.id)}
      >
        <span className="gb-label">{field.label}</span>
        <span className="gb-sub">{val ? `${val} ✓` : isOpen ? 'Open ↑' : 'Tap to select'}</span>
      </button>
    )
  }

  return (
    <div className="screen-no-nav">
      <div className="progress-bar">
        {PROGRESS.map((_,i) => (
          <div key={i} className={`progress-dot ${i < 3 ? 'done' : i === 3 ? 'active' : ''}`} />
        ))}
      </div>

      <div className="page-hero">
        <h2 className="serif-lg" style={{ marginBottom: 6 }}>Let&apos;s get specific about your body.</h2>
        <p className="sub-text" style={{ marginBottom: 12 }}>Tap each button — a list drops down. The more honest, the more useful.</p>
        <div style={{ display: 'flex', gap: 8 }}>
          <button
            style={{
              background: units === 'metric' ? 'var(--charcoal)' : 'var(--white)',
              color: units === 'metric' ? 'var(--parchment)' : 'var(--warm-mid)',
              border: '0.5px solid var(--warm-border)', borderRadius: 16,
              padding: '7px 16px', fontSize: 13, fontFamily: 'var(--font-sans)', cursor: 'pointer',
            }}
            onClick={() => { setUnits('metric'); setBody(prev => ({ ...prev, height_cm: '', weight_kg: '' })) }}
          >
            cm / kg
          </button>
          <button
            style={{
              background: units === 'imperial' ? 'var(--charcoal)' : 'var(--white)',
              color: units === 'imperial' ? 'var(--parchment)' : 'var(--warm-mid)',
              border: '0.5px solid var(--warm-border)', borderRadius: 16,
              padding: '7px 16px', fontSize: 13, fontFamily: 'var(--font-sans)', cursor: 'pointer',
            }}
            onClick={() => { setUnits('imperial'); setBody(prev => ({ ...prev, height_cm: '', weight_kg: '' })) }}
          >
            ft·in / lbs
          </button>
        </div>
      </div>

      {/* First row: Age + Height */}
      <div className="btn-grid">
        {renderGridBtn(BODY_FIELDS[0])}
        {renderGridBtn(BODY_FIELDS[1])}
      </div>
      {openField === 'age' && (
        <div className="picker-sheet">
          <p className="picker-label">Age — select one</p>
          {BODY_FIELDS[0].opts.map(o => (
            <div key={o} className={`picker-opt ${body.age === o ? 'selected' : ''}`} onClick={() => selectVal('age', o)}>{o}</div>
          ))}
        </div>
      )}
      {openField === 'height_cm' && (
        <div className="picker-sheet">
          <p className="picker-label">Height</p>
          {getHeightOpts().map(o => (
            <div key={o} className={`picker-opt ${body.height_cm === o ? 'selected' : ''}`} onClick={() => selectVal('height_cm', o)}>{o}</div>
          ))}
        </div>
      )}

      {/* Second row: Weight + Fitness */}
      <div className="btn-grid" style={{ paddingTop: 8 }}>
        {renderGridBtn(BODY_FIELDS[2])}
        {renderGridBtn(BODY_FIELDS[3])}
      </div>
      {openField === 'weight_kg' && (
        <div className="picker-sheet">
          <p className="picker-label">Weight</p>
          {getWeightOpts().map(o => (
            <div key={o} className={`picker-opt ${body.weight_kg === o ? 'selected' : ''}`} onClick={() => selectVal('weight_kg', o)}>{o}</div>
          ))}
        </div>
      )}
      {openField === 'fitness' && (
        <div className="picker-sheet">
          <p className="picker-label">Overall fitness level</p>
          {BODY_FIELDS[3].opts.map(o => (
            <div key={o} className={`picker-opt ${body.fitness === o ? 'selected' : ''}`} onClick={() => selectVal('fitness', o)}>{o}</div>
          ))}
        </div>
      )}

      {/* Third row: Cardio + Strength */}
      <div className="btn-grid" style={{ paddingTop: 8 }}>
        {renderGridBtn(BODY_FIELDS[4])}
        {renderGridBtn(BODY_FIELDS[5])}
      </div>
      {openField === 'cardio' && (
        <div className="picker-sheet">
          <p className="picker-label">Cardio (walking, cycling, swimming, sport)</p>
          {BODY_FIELDS[4].opts.map(o => (
            <div key={o} className={`picker-opt ${body.cardio === o ? 'selected' : ''}`} onClick={() => selectVal('cardio', o)}>{o}</div>
          ))}
        </div>
      )}
      {openField === 'strength' && (
        <div className="picker-sheet">
          <p className="picker-label">Strength training</p>
          {BODY_FIELDS[5].opts.map(o => (
            <div key={o} className={`picker-opt ${body.strength === o ? 'selected' : ''}`} onClick={() => selectVal('strength', o)}>{o}</div>
          ))}
        </div>
      )}

      {/* Fourth row: Mobility + Sleep */}
      <div className="btn-grid" style={{ paddingTop: 8 }}>
        {renderGridBtn(BODY_FIELDS[6])}
        {renderGridBtn(BODY_FIELDS[7])}
      </div>
      {openField === 'mobility' && (
        <div className="picker-sheet">
          <p className="picker-label">Mobility (stretching, yoga, Pilates)</p>
          {BODY_FIELDS[6].opts.map(o => (
            <div key={o} className={`picker-opt ${body.mobility === o ? 'selected' : ''}`} onClick={() => selectVal('mobility', o)}>{o}</div>
          ))}
        </div>
      )}
      {openField === 'sleep' && (
        <div className="picker-sheet">
          <p className="picker-label">Sleep (average per night)</p>
          {BODY_FIELDS[7].opts.map(o => (
            <div key={o} className={`picker-opt ${body.sleep === o ? 'selected' : ''}`} onClick={() => selectVal('sleep', o)}>{o}</div>
          ))}
        </div>
      )}

      {/* Fifth row: Blood pressure + Smoker */}
      <div className="btn-grid" style={{ paddingTop: 8 }}>
        {renderGridBtn(BODY_FIELDS[8])}
        {renderGridBtn(BODY_FIELDS[9])}
      </div>
      {openField === 'bp' && (
        <div className="picker-sheet">
          <p className="picker-label">Blood pressure</p>
          {BODY_FIELDS[8].opts.map(o => (
            <div key={o} className={`picker-opt ${body.bp === o ? 'selected' : ''}`} onClick={() => selectVal('bp', o)}>{o}</div>
          ))}
        </div>
      )}
      {openField === 'smoker' && (
        <div className="picker-sheet">
          <p className="picker-label">Smoking</p>
          {BODY_FIELDS[9].opts.map(o => (
            <div key={o} className={`picker-opt ${body.smoker === o ? 'selected' : ''}`} onClick={() => selectVal('smoker', o)}>{o}</div>
          ))}
        </div>
      )}

      {/* Weight comfort — full width */}
      <div className="btn-grid" style={{ paddingTop: 8 }}>
        {renderGridBtn(WEIGHT_COMFORT)}
      </div>
      {openField === 'weight_comfort' && (
        <div className="picker-sheet">
          <p className="picker-label">Weight comfort</p>
          {WEIGHT_COMFORT.opts.map(o => (
            <div key={o} className={`picker-opt ${body.weight_comfort === o ? 'selected' : ''}`} onClick={() => selectVal('weight_comfort', o)}>{o}</div>
          ))}
        </div>
      )}

      {/* Injuries */}
      <p className="section-head">Any injuries, surgeries or ongoing conditions?</p>
      <div className="chips-wrap" style={{ paddingTop: 0 }}>
        {INJURIES.map(inj => (
          <button key={inj} className={`chip ${injuries.includes(inj) ? 'selected' : ''}`} onClick={() => toggleInjury(inj)}>
            {inj}
          </button>
        ))}
      </div>

      <div className="warm-note">
        If you have a heart condition or have been told to avoid certain exercise,
        please check with your doctor before starting any new routine.
        We&apos;ll always tell you when something needs a professional&apos;s opinion.
      </div>

      <button className="btn-primary" onClick={handleContinue} style={{ marginTop: 16, marginBottom: 20 }}>
        That&apos;s accurate →
      </button>
    </div>
  )
}
