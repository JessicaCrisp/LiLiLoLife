'use client'

import { useRouter } from 'next/navigation'
import BottomNav from '@/components/BottomNav'

export default function LifeScreen() {
  const router = useRouter()

  return (
    <div className="screen">

      <div style={{ padding: '56px 24px 0' }}>
        <button onClick={() => router.push('/home')} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
          <i className="ti ti-arrow-left" style={{ fontSize: 14, color: 'var(--warm-light)' }} aria-hidden="true" />
          <span style={{ fontSize: 13, color: 'var(--warm-light)', fontFamily: 'var(--font-sans)' }}>Home</span>
        </button>
      </div>

      <div className="page-hero" style={{ paddingTop: 16 }}>
        <span className="kicker">Your life</span>
        <h1 className="serif-xl" style={{ marginBottom: 8 }}>
          Your people.<br />Your joy.<br /><em>Your mind.</em>
        </h1>
        <p className="sub-text">The things that make life feel full — not just busy.</p>
      </div>

      {/* People */}
      <p className="section-head">The people around you</p>
      <div style={{ margin: '0 20px', background: '#FAECE7', borderRadius: 'var(--r-md)', padding: '18px 20px' }}>
        <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.13em', textTransform: 'uppercase', color: 'var(--alert)', marginBottom: 8 }}>Worth paying attention to</p>
        <p style={{ fontSize: 14, fontWeight: 300, color: 'var(--charcoal)', lineHeight: 1.6 }}>
          You feel connected — but you&apos;ve been coming away from your people feeling drained lately.{' '}
          <strong style={{ fontWeight: 500 }}>Having people around and being energised by them are two very different things.</strong>
        </p>
      </div>
      <div style={{ margin: '10px 20px 0', background: 'var(--white)', borderRadius: 'var(--r-md)', border: '0.5px solid var(--warm-hairline)', boxShadow: 'var(--shadow-card)' }}>
        <div style={{ padding: '14px 18px', background: '#FAFAF8', borderRadius: 'var(--r-md)' }}>
          <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--charcoal-mid)', lineHeight: 1.65, marginBottom: 12 }}>
            Friends move away. People get busy. The people you used to see every week become people you see twice a year without anyone deciding that&apos;s what they wanted. Connection at this stage of life takes a bit more deliberate effort than it used to.
          </p>
          <div style={{ background: '#F0E8DC', borderRadius: 10, padding: '11px 13px' }}>
            <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--warm-light)', marginBottom: 5 }}>One small step</p>
            <p style={{ fontSize: 13, fontWeight: 400, color: 'var(--charcoal)', lineHeight: 1.55 }}>Think of one person who always leaves you feeling good. When did you last reach out? Message them this week.</p>
          </div>
        </div>
      </div>

      {/* Enjoyment */}
      <p className="section-head">What you&apos;re enjoying</p>
      <div style={{ margin: '0 20px', background: '#E1F5EE', borderRadius: 'var(--r-md)', padding: '18px 20px' }}>
        <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.13em', textTransform: 'uppercase', color: 'var(--good)', marginBottom: 8 }}>This is genuinely good</p>
        <p style={{ fontSize: 14, fontWeight: 300, color: 'var(--charcoal)', lineHeight: 1.6 }}>
          You&apos;re doing things you love, you mix planned and spontaneous, and you&apos;ve got Bali coming up.{' '}
          <strong style={{ fontWeight: 500 }}>The only question is whether the other two trips are on the horizon yet.</strong>
        </p>
      </div>
      <div style={{ margin: '10px 20px 0', background: 'var(--white)', borderRadius: 'var(--r-md)', border: '0.5px solid var(--warm-hairline)', boxShadow: 'var(--shadow-card)' }}>
        <div style={{ padding: '14px 18px', background: '#FAFAF8', borderRadius: 'var(--r-md)' }}>
          <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--charcoal-mid)', lineHeight: 1.65, marginBottom: 12 }}>
            You said three trips a year matters to you. Bali is one. <strong style={{ fontWeight: 500, color: 'var(--charcoal)' }}>Where are the other two?</strong> You do better when there&apos;s something on the horizon.
          </p>
          <div style={{ background: '#F0E8DC', borderRadius: 10, padding: '11px 13px' }}>
            <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--warm-light)', marginBottom: 5 }}>One small step</p>
            <p style={{ fontSize: 13, fontWeight: 400, color: 'var(--charcoal)', lineHeight: 1.55 }}>Spend 15 minutes this week thinking about where trip two could be. Just research it — even roughly.</p>
          </div>
        </div>
      </div>

      {/* Staying sharp */}
      <p className="section-head">Staying sharp</p>
      <div style={{ margin: '0 20px', background: 'var(--white)', borderRadius: 'var(--r-md)', border: '0.5px solid var(--warm-hairline)', boxShadow: 'var(--shadow-card)', padding: '16px 18px' }}>
        {[
          { title: 'AI tools that could save your business hours every week', tag: 'Your business', detail: 'There are tools that handle follow-up, scheduling and content in minutes. Worth knowing about.' },
          { title: 'How to find where locals actually eat when you travel', tag: 'Travel + food', detail: 'Not TripAdvisor. Instagram geotags, local food blogs. Worth knowing before Bali.' },
          { title: 'Reading a wind forecast properly', tag: 'Your sport', detail: 'Windy, PredictWind, Windguru — 15 minutes changes how you plan every session.' },
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', gap: 12, paddingTop: i === 0 ? 0 : 12, borderTop: i === 0 ? 'none' : '0.5px solid var(--warm-hairline)', marginTop: i === 0 ? 0 : 12 }}>
            <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#F0E8DC', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 500, color: 'var(--warm-light)', flexShrink: 0, marginTop: 2 }}>{i + 1}</div>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 13, fontWeight: 500, color: 'var(--charcoal)', marginBottom: 3 }}>{item.title}</p>
              <p style={{ fontSize: 12, fontWeight: 300, color: 'var(--charcoal-mid)', lineHeight: 1.55, marginBottom: 6 }}>{item.detail}</p>
              <span style={{ display: 'inline-block', background: '#F7F3ED', border: '0.5px solid rgba(44,35,24,0.12)', borderRadius: 20, padding: '3px 10px', fontSize: 11, color: 'var(--warm-mid)' }}>{item.tag}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Purpose */}
      <p className="section-head">What pulls you forward</p>
      <div style={{ margin: '0 20px', background: 'var(--charcoal)', borderRadius: 16, padding: '20px 22px' }}>
        <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.13em', textTransform: 'uppercase', color: '#5A5048', marginBottom: 10 }}>Your purpose right now</p>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: 17, color: '#F0E8DC', lineHeight: 1.55 }}>
          Your business gives you structure. Windsurfing gives you a goal worth training for. Travel gives you something to plan toward.{' '}
          <strong style={{ fontWeight: 500, color: '#E8D5BB' }}>Right now your purpose is clear and strong.</strong>
        </p>
      </div>
      <div style={{ margin: '10px 20px 0', background: '#FAEEDA', borderRadius: 'var(--r-sm)', padding: '13px 16px' }}>
        <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#BA7517', marginBottom: 6 }}>One thing worth thinking about</p>
        <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--charcoal-mid)', lineHeight: 1.6 }}>
          Your business gives you more than income — it gives you structure and identity.{' '}
          <strong style={{ fontWeight: 500, color: 'var(--charcoal)' }}>What happens to that when the business eventually changes?</strong>{' '}
          Worth having an answer before you need one.
        </p>
      </div>

      {/* Nudge */}
      <div className="nudge-card">
        <p className="nudge-kicker">This week</p>
        <p className="nudge-text">Message one person who always leaves you feeling good. And spend 15 minutes thinking about where trip two could be.</p>
        <div className="nudge-actions" style={{ marginTop: 16 }}>
          <button className="btn-dark-sm">Done it</button>
          <button className="btn-ghost-sm">Not yet</button>
        </div>
      </div>

      <button style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '20px 24px 0', background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 300, color: 'var(--warm-light)' }}>
        <i className="ti ti-plus-circle" style={{ fontSize: 16 }} aria-hidden="true" />
        Something significant changed in your life? Tell me
      </button>

      <div style={{ height: 24 }} />
      <BottomNav />
    </div>
  )
}
