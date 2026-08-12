'use client'

import { useRouter } from 'next/navigation'
import BottomNav from '@/components/BottomNav'

function ActionBox({ text }: { text: string }) {
  return (
    <div style={{ background: '#F0E8DC', borderRadius: 10, padding: '12px 14px', marginTop: 14 }}>
      <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--warm-light)', marginBottom: 6 }}>One small step</p>
      <p style={{ fontSize: 13, fontWeight: 400, color: 'var(--charcoal)', lineHeight: 1.55 }}>{text}</p>
    </div>
  )
}

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
        <h1 className="serif-xl" style={{ marginBottom: 8 }}>Your people.<br />Your joy.<br /><em>Your mind.</em></h1>
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
      <div style={{ margin: '10px 20px 0', background: 'var(--white)', borderRadius: 'var(--r-md)', border: '0.5px solid var(--warm-hairline)', padding: '16px 18px', boxShadow: 'var(--shadow-card)' }}>
        <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--charcoal-mid)', lineHeight: 1.65, marginBottom: 12 }}>
          Friends move away. People get busy. The people you used to see every week become people you see twice a year without anyone deciding that&apos;s what they wanted.{' '}
          <strong style={{ fontWeight: 500, color: 'var(--charcoal)' }}>Connection at this stage of life takes a bit more deliberate effort than it used to.</strong>
        </p>
        <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--charcoal-mid)', lineHeight: 1.65 }}>
          The question isn&apos;t whether you have people around — you do. It&apos;s whether the right people are getting enough of your time. The ones who fill you up, not the ones who quietly drain you.
        </p>
        <ActionBox text="Think of one person who always leaves you feeling good. When did you last reach out? Message them this week — not to organise something big, just to say you were thinking of them." />
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
      <div style={{ margin: '10px 20px 0', background: 'var(--white)', borderRadius: 'var(--r-md)', border: '0.5px solid var(--warm-hairline)', padding: '16px 18px', boxShadow: 'var(--shadow-card)' }}>
        <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--charcoal-mid)', lineHeight: 1.65, marginBottom: 12 }}>
          You said three trips a year matters to you. Bali is one.{' '}
          <strong style={{ fontWeight: 500, color: 'var(--charcoal)' }}>Where are the other two?</strong>{' '}
          You do better when there&apos;s something on the horizon — not because you need it, but because anticipation is part of the enjoyment. The planning, the thinking about it, the looking forward.
        </p>
        <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--charcoal-mid)', lineHeight: 1.65 }}>
          Don&apos;t let the year fill up with obligation before the good things get a slot.
        </p>
        <ActionBox text="Spend 15 minutes this week thinking about where trip two could be. Not booking it — just researching it. Something on the horizon changes how the next few months feel." />
      </div>

      {/* Staying sharp */}
      <p className="section-head">Staying sharp</p>
      <div style={{ margin: '0 20px', background: 'var(--white)', borderRadius: 'var(--r-md)', border: '0.5px solid var(--warm-hairline)', padding: '16px 18px', boxShadow: 'var(--shadow-card)' }}>
        <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--charcoal-mid)', lineHeight: 1.65, marginBottom: 14 }}>
          You&apos;re curious, you&apos;re learning, and you&apos;re staying interested in the world. That&apos;s the single strongest predictor of staying sharp as you get older — not puzzles, not supplements. Just staying genuinely engaged with things that interest you.
        </p>
        {[
          { title: 'AI tools that could save your business hours every week', tag: 'Your business', detail: 'You run things solo — there are tools that handle follow-up, scheduling and content in minutes. Worth knowing about before your competition does.' },
          { title: 'How to find where locals actually eat when you travel', tag: 'Travel + food', detail: 'Not TripAdvisor. Instagram geotags, local food blogs, asking at your accommodation. Worth knowing before Bali.' },
          { title: 'Reading a wind forecast properly', tag: 'Your sport', detail: 'Windy, PredictWind, Windguru — 15 minutes understanding these changes how you plan every session and whether you\'re on the water when conditions are right.' },
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', gap: 12, paddingTop: i === 0 ? 0 : 12, borderTop: i === 0 ? 'none' : '0.5px solid var(--warm-hairline)', marginTop: i === 0 ? 0 : 12 }}>
            <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#F0E8DC', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 500, color: 'var(--warm-light)', flexShrink: 0, marginTop: 2 }}>{i + 1}</div>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 13, fontWeight: 500, color: 'var(--charcoal)', marginBottom: 4 }}>{item.title}</p>
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
      <div style={{ margin: '10px 20px 0', background: '#FAEEDA', borderRadius: 'var(--r-sm)', padding: '14px 16px' }}>
        <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#BA7517', marginBottom: 6 }}>One thing worth thinking about</p>
        <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--charcoal-mid)', lineHeight: 1.6, marginBottom: 10 }}>
          Your business gives you more than income — it gives you structure and identity.{' '}
          <strong style={{ fontWeight: 500, color: 'var(--charcoal)' }}>What happens to that when the business eventually changes?</strong>{' '}
          Not asking you to retire. Just asking you to have a quiet answer ready — because the people who navigate that transition best are the ones who thought about it before they needed to.
        </p>
        <ActionBox text="No action needed right now. Just sit with this question for a week: 'If the business wasn't there tomorrow, what would give my days structure?' You don't have to answer it — just let it be there." />
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

      {/* Ask */}
      <div style={{ margin: '18px 20px 0', background: 'var(--white)', borderRadius: 'var(--r-md)', border: '0.5px solid var(--warm-hairline)', padding: 18, boxShadow: 'var(--shadow-card)' }}>
        <p style={{ fontSize: 14, fontWeight: 500, color: 'var(--charcoal)', marginBottom: 4 }}>Something on your mind?</p>
        <p style={{ fontSize: 12, fontWeight: 300, color: 'var(--warm-light)', marginBottom: 12, lineHeight: 1.5 }}>
          Ask anything about your relationships, enjoyment, or sense of purpose. There are no right answers here — just honest ones.
        </p>
        <div style={{ background: '#F7F3ED', border: '0.5px solid rgba(44,35,24,0.15)', borderRadius: 10, padding: '12px 14px', fontSize: 14, color: 'var(--warm-light)', fontWeight: 300 }}>
          e.g. How do I find new people to connect with at this stage of life?
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
          {['How do I stop feeling guilty about prioritising myself?', "What if I don't know what my purpose is?", 'Is it normal to feel like this at my age?'].map(c => (
            <span key={c} style={{ background: '#F7F3ED', border: '0.5px solid rgba(44,35,24,0.12)', borderRadius: 20, padding: '7px 13px', fontSize: 12, color: 'var(--warm-mid)', fontWeight: 300 }}>{c}</span>
          ))}
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
