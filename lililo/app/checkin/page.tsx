'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import BottomNav from '@/components/BottomNav'

const TOTAL_STEPS = 9

type Answer = string | string[]

interface Answers {
  energy?: string
  energyWhy?: string
  mobility?: string
  strength?: string
  cardio?: string
  strengthWhy?: string
  connection?: string
  connectionWho?: string
  whatDid?: string[]
  workPulse?: string
  moneyPulse?: string
  moneyWhy?: string
  overallFeeling?: string
  feelingWhy?: string
  pointedAnswer?: string
  something?: string
}

function ProgressBar({ step, total }: { step: number; total: number }) {
  return (
    <div className="progress-bar">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className={`progress-dot ${i < step ? 'done' : i === step ? 'active' : ''}`} />
      ))}
    </div>
  )
}

function CheckinOpt({ emoji, label, sub, selected, onClick }: { emoji: string; label: string; sub?: string; selected: boolean; onClick: () => void }) {
  return (
    <div className={`checkin-opt ${selected ? 'selected' : ''}`} onClick={onClick}>
      <span className="co-emoji">{emoji}</span>
      <div style={{ flex: 1 }}>
        <p className="co-label">{label}</p>
        {sub && <p className="co-sub">{sub}</p>}
      </div>
      <div className={`checkbox ${selected ? 'checked' : ''}`} />
    </div>
  )
}

export default function CheckinScreen() {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Answers>({})
  const [something, setSomething] = useState('')

  const set = (key: keyof Answers, val: Answer) => setAnswers(prev => ({ ...prev, [key]: val }))

  const next = () => {
    if (step < TOTAL_STEPS - 1) setStep(s => s + 1)
    else router.push('/home')
  }

  const back = () => {
    if (step > 0) setStep(s => s - 1)
    else router.push('/home')
  }

  const toggleDid = (item: string) => {
    const current = (answers.whatDid as string[]) || []
    const updated = current.includes(item) ? current.filter(i => i !== item) : [...current, item]
    set('whatDid', updated)
  }

  return (
    <div className="screen">
      <div style={{ padding: '56px 24px 0', display: 'flex', alignItems: 'center', gap: 8 }}>
        <button onClick={back} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
          <i className="ti ti-arrow-left" style={{ fontSize: 14, color: 'var(--warm-light)' }} aria-hidden="true" />
          <span style={{ fontSize: 13, color: 'var(--warm-light)', fontFamily: 'var(--font-sans)' }}>
            {step === 0 ? 'Home' : 'Back'}
          </span>
        </button>
      </div>

      <ProgressBar step={step} total={TOTAL_STEPS} />

      {/* Q1: Energy */}
      {step === 0 && (
        <div>
          <div className="page-hero">
            <span className="kicker">Weekly check-in · Week 4</span>
            <h2 className="serif-lg">How has your energy been this week?</h2>
          </div>
          <div className="checkin-options">
            <CheckinOpt emoji="😴" label="Pretty low" sub="Hard to get going most days" selected={answers.energy === 'low'} onClick={() => set('energy', 'low')} />
            <CheckinOpt emoji="😐" label="Up and down" sub="Some good days, some not" selected={answers.energy === 'mixed'} onClick={() => set('energy', 'mixed')} />
            <CheckinOpt emoji="🙂" label="Good" sub="Mostly felt like myself" selected={answers.energy === 'good'} onClick={() => set('energy', 'good')} />
            <CheckinOpt emoji="✨" label="Really good" sub="Lots of get up and go" selected={answers.energy === 'great'} onClick={() => set('energy', 'great')} />
          </div>
          {(answers.energy === 'low' || answers.energy === 'mixed') && (
            <div className="follow-up-card">
              <p className="follow-up-label">Any idea why?</p>
              <div className="follow-up-opts">
                {['Poor sleep','Stressed about something','Been unwell','Just one of those weeks','Not sure'].map(opt => (
                  <button key={opt} className={`fu-opt ${answers.energyWhy === opt ? 'selected' : ''}`} onClick={() => set('energyWhy', opt)}>{opt}</button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Q2: Routine */}
      {step === 1 && (
        <div>
          <div className="page-hero">
            <span className="kicker">Weekly check-in · Week 4</span>
            <h2 className="serif-lg">Your routine this week — how did each go?</h2>
            <p className="sub-text" style={{ marginTop: 6 }}>Tap each to mark it.</p>
          </div>
          <div className="routine-items">
            {[
              { key: 'mobility', label: 'Mobility', detail: 'Every morning — 3 min', icon: 'ti-run', bg: '#E1F5EE', col: '#0F6E56' },
              { key: 'strength', label: 'Strength', detail: '2x this week — bodyweight', icon: 'ti-barbell', bg: '#FAEEDA', col: '#BA7517' },
              { key: 'cardio', label: 'Cardio', detail: '3x this week — walk with a hill', icon: 'ti-heart-rate-monitor', bg: '#FAECE7', col: '#D85A30' },
            ].map(item => {
              const val = answers[item.key as keyof Answers] as string
              const cycle = () => set(item.key as keyof Answers, val === 'done' ? 'skipped' : val === 'skipped' ? '' : 'done')
              return (
                <div key={item.key} className={`routine-item ${val === 'done' ? 'done-it' : val === 'skipped' ? 'skipped' : ''}`} onClick={cycle}>
                  <div className="routine-icon" style={{ background: item.bg }}>
                    <i className={`ti ${item.icon}`} style={{ fontSize: 16, color: item.col }} aria-hidden="true" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <p className="routine-name">{item.label}</p>
                    <p className="routine-detail">{item.detail}</p>
                  </div>
                  <span className={`routine-status ${val === 'done' ? 'done' : val === 'skipped' ? 'skip' : ''}`}>
                    {val === 'done' ? 'Done ✓' : val === 'skipped' ? 'Skipped' : 'Tap to mark'}
                  </span>
                </div>
              )
            })}
          </div>
          {answers.strength === 'skipped' && (
            <div className="follow-up-card">
              <p className="follow-up-label">What got in the way with strength?</p>
              <div className="follow-up-opts">
                {['No time','No energy','Forgot','Something came up','Just didn\'t'].map(opt => (
                  <button key={opt} className={`fu-opt ${answers.strengthWhy === opt ? 'selected' : ''}`} onClick={() => set('strengthWhy', opt)}>{opt}</button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Q3: Connection */}
      {step === 2 && (
        <div>
          <div className="page-hero">
            <span className="kicker">Weekly check-in · Week 4</span>
            <h2 className="serif-lg">The people in your life this week — what was it like?</h2>
          </div>
          <div className="checkin-options">
            <CheckinOpt emoji="😔" label="Didn't really connect with anyone" sub="Quiet week socially" selected={answers.connection === 'alone'} onClick={() => set('connection', 'alone')} />
            <CheckinOpt emoji="😐" label="Saw people but came away tired" sub="More draining than energising" selected={answers.connection === 'drained'} onClick={() => set('connection', 'drained')} />
            <CheckinOpt emoji="🙂" label="Had some good moments with people" sub="Felt connected" selected={answers.connection === 'good'} onClick={() => set('connection', 'good')} />
            <CheckinOpt emoji="❤️" label="Really connected with someone" sub="One of those genuinely good catch-ups" selected={answers.connection === 'great'} onClick={() => set('connection', 'great')} />
          </div>
          {answers.connection === 'drained' && (
            <div className="follow-up-card">
              <p className="follow-up-label">Who was it with?</p>
              <div className="follow-up-opts">
                {['My usual group','One specific person','A work situation','Mixed — some good some not'].map(opt => (
                  <button key={opt} className={`fu-opt ${answers.connectionWho === opt ? 'selected' : ''}`} onClick={() => set('connectionWho', opt)}>{opt}</button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Q4: What you did */}
      {step === 3 && (
        <div>
          <div className="page-hero">
            <span className="kicker">Weekly check-in · Week 4</span>
            <h2 className="serif-lg">Did you do any of the things that matter most to you?</h2>
            <p className="sub-text" style={{ marginTop: 6 }}>Select everything that happened — big or small.</p>
          </div>
          <div className="chips-wrap">
            {[
              '🌊 Got out windsurfing','✈️ Something travel or adventure',
              '🍽️ Great meal or new restaurant','🍳 Cooked something I loved',
              '📚 Learned something interesting','💼 Good week in the business',
              '🤝 Did something for someone else','😊 Something else I loved',
            ].map(item => (
              <button key={item} className={`chip ${(answers.whatDid as string[] || []).includes(item) ? 'selected' : ''}`} onClick={() => toggleDid(item)}>{item}</button>
            ))}
          </div>
          <div style={{ margin: '10px 24px 0' }}>
            <button
              className={`chip ${(answers.whatDid as string[] || []).includes('nothing') ? 'selected' : ''}`}
              onClick={() => set('whatDid', ['nothing'])}
              style={{ width: '100%', textAlign: 'center' }}
            >
              Nothing much that stood out this week
            </button>
          </div>
        </div>
      )}

      {/* Q5: Work pulse */}
      {step === 4 && (
        <div>
          <div className="page-hero">
            <span className="kicker">Weekly check-in · Week 4</span>
            <h2 className="serif-lg">How did the business feel this week?</h2>
            <p className="sub-text" style={{ marginTop: 6 }}>Even working 1–2 days, it matters to keep an eye on it.</p>
          </div>
          <div className="checkin-options">
            <CheckinOpt emoji="😟" label="Difficult week" sub="Something felt off or hard" selected={answers.workPulse === 'hard'} onClick={() => set('workPulse', 'hard')} />
            <CheckinOpt emoji="😐" label="Quiet" sub="Not much happening" selected={answers.workPulse === 'quiet'} onClick={() => set('workPulse', 'quiet')} />
            <CheckinOpt emoji="🙂" label="Good week" sub="Ticking along well" selected={answers.workPulse === 'good'} onClick={() => set('workPulse', 'good')} />
            <CheckinOpt emoji="🚀" label="Really good week" sub="Something went well" selected={answers.workPulse === 'great'} onClick={() => set('workPulse', 'great')} />
          </div>
        </div>
      )}

      {/* Q6: Money pulse */}
      {step === 5 && (
        <div>
          <div className="page-hero">
            <span className="kicker">Weekly check-in · Week 4</span>
            <h2 className="serif-lg">How are you feeling about money this week?</h2>
            <p className="sub-text" style={{ marginTop: 6 }}>Just a quick pulse — no numbers needed.</p>
          </div>
          <div className="checkin-options">
            <CheckinOpt emoji="😟" label="Worried" sub="It's on my mind in a heavy way" selected={answers.moneyPulse === 'worried'} onClick={() => set('moneyPulse', 'worried')} />
            <CheckinOpt emoji="😐" label="Thinking about it" sub="A bit of background noise" selected={answers.moneyPulse === 'thinking'} onClick={() => set('moneyPulse', 'thinking')} />
            <CheckinOpt emoji="🙂" label="Fine" sub="Not something I'm focused on" selected={answers.moneyPulse === 'fine'} onClick={() => set('moneyPulse', 'fine')} />
            <CheckinOpt emoji="😌" label="Not on my mind at all" sub="Feeling pretty settled about it" selected={answers.moneyPulse === 'settled'} onClick={() => set('moneyPulse', 'settled')} />
          </div>
          {answers.moneyPulse === 'worried' && (
            <div className="follow-up-card">
              <p className="follow-up-label">What triggered it?</p>
              <div className="follow-up-opts">
                {['Slow week in the business','Unexpected expense','Thinking about retirement','Market news','Not sure'].map(opt => (
                  <button key={opt} className={`fu-opt ${answers.moneyWhy === opt ? 'selected' : ''}`} onClick={() => set('moneyWhy', opt)}>{opt}</button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Q7: Overall */}
      {step === 6 && (
        <div>
          <div className="page-hero">
            <span className="kicker">Weekly check-in · Week 4</span>
            <h2 className="serif-lg">Standing back — how do you feel about your life right now?</h2>
          </div>
          <div className="checkin-options">
            <CheckinOpt emoji="😟" label="Something feels off" sub="Hard to put my finger on it" selected={answers.overallFeeling === 'off'} onClick={() => set('overallFeeling', 'off')} />
            <CheckinOpt emoji="😐" label="Okay" sub="Getting through it" selected={answers.overallFeeling === 'okay'} onClick={() => set('overallFeeling', 'okay')} />
            <CheckinOpt emoji="🙂" label="Good" sub="Generally feels like things are going well" selected={answers.overallFeeling === 'good'} onClick={() => set('overallFeeling', 'good')} />
            <CheckinOpt emoji="❤️" label="Really good" sub="Genuinely enjoying this chapter" selected={answers.overallFeeling === 'great'} onClick={() => set('overallFeeling', 'great')} />
          </div>
          {answers.overallFeeling === 'off' && (
            <div className="follow-up-card">
              <p className="follow-up-label">Is there something specific?</p>
              <div className="follow-up-opts">
                {['Health worries','Relationship stuff','Work or money','Feeling stuck','Not sure — just flat'].map(opt => (
                  <button key={opt} className={`fu-opt ${answers.feelingWhy === opt ? 'selected' : ''}`} onClick={() => set('feelingWhy', opt)}>{opt}</button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Q8: Pointed question */}
      {step === 7 && (
        <div>
          <div className="page-hero">
            <span className="kicker">Weekly check-in · Week 4</span>
            <h2 className="serif-lg">One thing I&apos;ve been wondering about.</h2>
            <p className="sub-text" style={{ marginTop: 6 }}>This changes every week — always specific to you.</p>
          </div>
          <div style={{ margin: '20px 20px 0', background: 'var(--parchment-dark)', borderRadius: 'var(--r-md)', padding: '18px 20px' }}>
            <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.13em', textTransform: 'uppercase', color: 'var(--warm-light)', marginBottom: 8 }}>About your trips</p>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: 18, color: 'var(--charcoal)', lineHeight: 1.4, marginBottom: 14 }}>
              You mentioned looking at options for trip two. Any closer to knowing where?
            </p>
            <div className="follow-up-opts">
              {['Not yet','Have a destination in mind','Almost booked it','Changed my mind — different idea'].map(opt => (
                <button key={opt} className={`fu-opt ${answers.pointedAnswer === opt ? 'selected' : ''}`} onClick={() => set('pointedAnswer', opt)}>{opt}</button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Q9: Something happened */}
      {step === 8 && (
        <div>
          <div style={{ padding: '20px 24px 0' }}>
            <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.13em', textTransform: 'uppercase', color: 'var(--warm-light)', display: 'block', marginBottom: 10 }}>Last thing</span>
            <h2 className="serif-lg">Did anything significant happen this week?</h2>
            <p className="sub-text" style={{ marginTop: 8, marginBottom: 14, lineHeight: 1.6 }}>
              A health change, something with the business, a relationship shift, a win you&apos;re proud of.
              Anything worth telling me — I&apos;ll update your picture from this week forward.
            </p>
            <textarea
              className="text-field"
              placeholder="Write as much or as little as you want..."
              value={something}
              onChange={e => setSomething(e.target.value)}
              rows={5}
              style={{ resize: 'none' }}
            />
            <p className="caption" style={{ marginTop: 8 }}>
              This is the most important thing you can tell me each week. The more specific you are, the more useful I get.
            </p>
          </div>
        </div>
      )}

      {/* Next button */}
      <button className="btn-primary" onClick={next} style={{ marginTop: 24 }}>
        {step === TOTAL_STEPS - 1 ? 'Done →' : 'Next →'}
      </button>

      {step === TOTAL_STEPS - 1 && (
        <button className="btn-ghost" onClick={next}>Nothing significant this week</button>
      )}

      <BottomNav />
    </div>
  )
}
