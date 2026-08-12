'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import BottomNav from '@/components/BottomNav'

type TickState = 'none' | 'done' | 'skipped'

interface ExCardProps {
  icon: string
  iconBg: string
  iconColor: string
  title: string
  meta: string
  tickState: TickState
  onTick: () => void
  steps: { title: string; text: string }[]
  focus: string
  watch: string
  mod?: string
  modLabel?: string
}

function ExCard({ icon, iconBg, iconColor, title, meta, tickState, onTick, steps, focus, watch, mod, modLabel }: ExCardProps) {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ background: 'var(--white)', borderRadius: 'var(--r-md)', border: '0.5px solid var(--warm-hairline)', marginBottom: 10, overflow: 'hidden', boxShadow: 'var(--shadow-card)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 18px', cursor: 'pointer' }} onClick={() => setOpen(!open)}>
        <div style={{ width: 36, height: 36, borderRadius: 10, background: iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <i className={`ti ${icon}`} style={{ fontSize: 17, color: iconColor }} aria-hidden="true" />
        </div>
        <div style={{ flex: 1 }}>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: 16, color: 'var(--charcoal)', marginBottom: 2 }}>{title}</p>
          <p style={{ fontSize: 12, fontWeight: 300, color: 'var(--warm-light)' }}>{meta}</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginLeft: 'auto' }}>
          <span style={{ fontSize: 11, color: 'var(--warm-light)', whiteSpace: 'nowrap' }}>{open ? 'Less ↑' : 'How to ↓'}</span>
          <button
            onClick={e => { e.stopPropagation(); onTick() }}
            style={{ width: 28, height: 28, borderRadius: '50%', border: tickState === 'done' ? 'none' : '0.5px solid var(--warm-border)', background: tickState === 'done' ? 'var(--charcoal)' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}
          >
            <i className="ti ti-check" style={{ fontSize: 13, color: tickState === 'done' ? 'var(--parchment)' : 'var(--warm-border)' }} aria-hidden="true" />
          </button>
        </div>
      </div>
      {open && (
        <div style={{ borderTop: '0.5px solid var(--warm-hairline)', padding: 18, background: '#FAFAF8' }}>
          <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--warm-light)', marginBottom: 12 }}>How to do this well</p>
          {steps.map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 12 }}>
              <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'var(--charcoal)', color: 'var(--parchment)', fontSize: 11, fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>{i + 1}</div>
              <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--charcoal-mid)', lineHeight: 1.6 }}>{s.text}</p>
            </div>
          ))}
          <div style={{ background: '#F0E8DC', borderRadius: 10, padding: '12px 14px', marginTop: 4 }}>
            <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--warm-light)', marginBottom: 6 }}>Focus on</p>
            <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--charcoal-mid)', lineHeight: 1.6 }}>{focus}</p>
          </div>
          <div style={{ background: '#FAECE7', borderRadius: 10, padding: '12px 14px', marginTop: 8 }}>
            <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--alert)', marginBottom: 6 }}>Watch out for</p>
            <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--charcoal-mid)', lineHeight: 1.6 }}>{watch}</p>
          </div>
          {mod && (
            <div style={{ background: 'var(--white)', border: '0.5px solid var(--warm-hairline)', borderRadius: 10, padding: '12px 14px', marginTop: 8 }}>
              <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--warm-light)', marginBottom: 6 }}>{modLabel || 'Modification'}</p>
              <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--charcoal-mid)', lineHeight: 1.6 }}>{mod}</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default function BodyScreen() {
  const router = useRouter()
  const [cardio, setCardio] = useState<TickState>('done')
  const [strength, setStrength] = useState<TickState>('none')
  const [mobility, setMobility] = useState<TickState>('none')

  const cycle = (s: TickState): TickState => s === 'none' ? 'done' : s === 'done' ? 'skipped' : 'none'

  return (
    <div className="screen">
      <div style={{ padding: '56px 24px 0' }}>
        <button onClick={() => router.push('/home')} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
          <i className="ti ti-arrow-left" style={{ fontSize: 14, color: 'var(--warm-light)' }} aria-hidden="true" />
          <span style={{ fontSize: 13, color: 'var(--warm-light)', fontFamily: 'var(--font-sans)' }}>Home</span>
        </button>
      </div>

      <div className="page-hero" style={{ paddingTop: 16 }}>
        <span className="kicker">Your body</span>
        <h1 className="serif-xl" style={{ marginBottom: 8 }}>Built to keep<br />you <em>moving.</em></h1>
        <p className="sub-text">Everything here is built around what you love doing and what your body needs to keep doing it.</p>
      </div>

      {/* North star */}
      <div style={{ margin: '16px 20px 0', background: 'var(--charcoal)', borderRadius: 14, padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ width: 28, height: 28, borderRadius: 8, background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <i className="ti ti-wave-sine" style={{ fontSize: 14, color: 'var(--warm-light)' }} aria-hidden="true" />
        </div>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: 14, fontStyle: 'italic', color: '#F0E8DC', lineHeight: 1.4 }}>
          Windsurfing at 70 needs strength, balance and mobile shoulders. That&apos;s what we&apos;re building toward.
        </p>
      </div>

      {/* Snapshot */}
      <p className="section-head">Where you are right now</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, padding: '0 20px' }}>
        {[['Medium', 'Fitness'], ['Good', 'Sleep'], ['None', 'Injuries']].map(([val, label]) => (
          <div key={label} style={{ background: 'var(--white)', borderRadius: 12, border: '0.5px solid var(--warm-hairline)', padding: '12px 14px' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: 18, color: 'var(--charcoal)', marginBottom: 2 }}>{val}</p>
            <p style={{ fontSize: 11, fontWeight: 300, color: 'var(--warm-light)' }}>{label}</p>
          </div>
        ))}
      </div>

      {/* Exercise cards */}
      <p className="section-head">Your routine this week</p>
      <div style={{ padding: '0 20px' }}>
        <ExCard
          icon="ti-run" iconBg="#FAECE7" iconColor="#D85A30"
          title="Cardio" meta="30 min walk with a hill — 3x this week"
          tickState={cardio} onTick={() => setCardio(cycle(cardio))}
          steps={[
            { title: '', text: 'Start easy for the first 5 minutes — your joints need time to warm up, especially in the morning. Don\'t push straight away.' },
            { title: '', text: 'On the hill, lean slightly forward from the ankles — not the waist. Shorter steps, arms moving, breathing steady. This is the same core stability that keeps you upright on a board in a gust.' },
            { title: '', text: 'Aim to be slightly breathless but still able to talk. That\'s the zone that builds the cardiovascular base you need for a full day on the water.' },
          ]}
          focus="Head up, shoulders relaxed, arms swinging naturally. Good posture on the walk trains the same postural muscles you use when you're powered up and planing."
          watch="Pushing too hard on the hill. This should feel challenging, not painful. If your chest tightens or you feel dizzy, slow down immediately and rest."
        />
        <ExCard
          icon="ti-barbell" iconBg="#FAEEDA" iconColor="#BA7517"
          title="Strength" meta="Bodyweight — 2x this week"
          tickState={strength} onTick={() => setStrength(cycle(strength))}
          steps={[
            { title: '', text: 'Squats: feet shoulder-width apart, toes slightly out. Lower slowly — 3 counts down, 1 up. Keep your chest up. This builds the leg power that drives your gybes and tacks.' },
            { title: '', text: 'Lunges: step forward, lower your back knee toward the floor without touching it. Front knee stays directly above your ankle. This is single-leg stability — exactly what you need when the board is moving under you.' },
            { title: '', text: 'Single leg balance: stand on one foot for 30 seconds, then switch. Hold a wall if you need to. The goal is to need it less every week — this is your most windsurfing-specific exercise.' },
          ]}
          focus="Slow and controlled beats fast and sloppy every time. Three slow squats done properly build more functional strength than ten rushed ones."
          watch="Knees caving inward on squats — gently push them out to track over your second toe. Lower back aching means you're rounding your spine. Stop, reset your posture, and try again."
          modLabel="If your knees are a concern"
          mod="Place a chair behind you and just touch it before standing back up. This limits the range of motion while still building the same strength. Never push through sharp knee pain."
        />
        <ExCard
          icon="ti-yoga" iconBg="#E1F5EE" iconColor="#0F6E56"
          title="Mobility" meta="10 min — every morning before anything else"
          tickState={mobility} onTick={() => setMobility(cycle(mobility))}
          steps={[
            { title: '', text: 'Hip circles: hands on hips, feet shoulder-width. Draw large slow circles — 10 each direction. Your hips are the pivot point of every manoeuvre on the water. Keep them moving.' },
            { title: '', text: 'Shoulder rolls and cross-body stretch: roll both shoulders backward 10 times, then forward 10. Then pull one arm across your chest and hold 20 seconds. Switch. Your shoulders take the load of every gust — look after them.' },
            { title: '', text: 'Ankle rotations: lift one foot, draw slow circles — 10 each direction, then switch. Do this while the kettle boils. Ankle mobility affects your stance and balance on an unstable board more than most people realise.' },
            { title: '', text: 'Cat/cow: on hands and knees, arch your back up toward the ceiling then let it dip toward the floor. 10 slow reps. Breathe with the movement. This keeps your spine supple for the rotation you need when you\'re looking upwind.' },
          ]}
          focus="Slow is the whole point. This isn't a workout — it's maintenance. The slower and more deliberate you move, the more you're actually doing."
          watch="Pushing into pain on the shoulder stretch — you should feel a gentle pull, never a sharp pinch. If something feels wrong in your shoulder, skip that movement. Your shoulders are too important to your sport to risk."
          modLabel="If you have shoulder issues"
          mod="Skip the cross-body stretch and do gentle pendulum swings instead — lean forward, let your arm hang loose, and make small circles. This keeps the joint moving without loading it."
        />
      </div>

      <p style={{ margin: '8px 20px 0', fontSize: 12, fontWeight: 300, color: 'var(--warm-light)', textAlign: 'center', lineHeight: 1.5 }}>
        If something hurts, stop. When in doubt, talk to your physio or doctor first.
      </p>

      {/* Nudge */}
      <div className="nudge-card">
        <p className="nudge-kicker">This week</p>
        <p className="nudge-text">Tomorrow morning before anything else — hip circles, shoulder rolls, ankles. This is what keeps you on a board at 70.</p>
        <p className="nudge-time">Only 3 minutes.</p>
        <div className="nudge-actions">
          <button className="btn-dark-sm">Done it</button>
          <button className="btn-ghost-sm">Not yet</button>
        </div>
      </div>

      {/* Ask */}
      <div style={{ margin: '18px 20px 0', background: 'var(--white)', borderRadius: 'var(--r-md)', border: '0.5px solid var(--warm-hairline)', padding: 18, boxShadow: 'var(--shadow-card)' }}>
        <p style={{ fontSize: 14, fontWeight: 500, color: 'var(--charcoal)', marginBottom: 4 }}>Questions about your exercises?</p>
        <p style={{ fontSize: 12, fontWeight: 300, color: 'var(--warm-light)', marginBottom: 12, lineHeight: 1.5 }}>Ask anything about your routine — swaps, technique, what to do when something&apos;s sore.</p>
        <div style={{ background: '#F7F3ED', border: '0.5px solid rgba(44,35,24,0.15)', borderRadius: 10, padding: '12px 14px', fontSize: 14, color: 'var(--warm-light)', fontWeight: 300 }}>e.g. Can I swap lunges for something easier on my knees?</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
          {['How do I know if I\'m doing squats right?', 'What can I do instead of walking?', 'My shoulder feels tight — what should I skip?'].map(c => (
            <span key={c} style={{ background: '#F7F3ED', border: '0.5px solid rgba(44,35,24,0.12)', borderRadius: 20, padding: '7px 13px', fontSize: 12, color: 'var(--warm-mid)', fontWeight: 300 }}>{c}</span>
          ))}
        </div>
        <p style={{ marginTop: 12, paddingTop: 12, borderTop: '0.5px solid var(--warm-hairline)', fontSize: 12, fontWeight: 300, color: 'var(--warm-light)', lineHeight: 1.5 }}>
          For anything medical — pain, injuries, heart concerns — please check with your doctor or physio. I&apos;ll always tell you when something is worth a professional&apos;s opinion.
        </p>
      </div>

      <button style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '20px 24px 0', background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 300, color: 'var(--warm-light)' }}>
        <i className="ti ti-plus-circle" style={{ fontSize: 16 }} aria-hidden="true" />
        Something changed with your health or body? Tell me
      </button>

      <div style={{ height: 24 }} />
      <BottomNav />
    </div>
  )
}
