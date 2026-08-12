'use client'

import { useRouter } from 'next/navigation'
import BottomNav from '@/components/BottomNav'

export default function MoneyScreen() {
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
        <span className="kicker">Your money</span>
        <h1 className="serif-xl" style={{ marginBottom: 8 }}>
          An honest<br /><em>picture.</em>
        </h1>
        <p className="sub-text">
          Not a retirement calculator. A clear view of whether your money supports the life you&apos;ve described — and what to actually do about it.
        </p>
      </div>

      {/* Disclaimer */}
      <div className="disclaimer-bar">
        <i className="ti ti-info-circle" style={{ fontSize: 15, color: 'var(--warm-light)', flexShrink: 0, marginTop: 1 }} aria-hidden="true" />
        <p className="disclaimer-text">
          This is not financial advice. It&apos;s a reflection of what you&apos;ve told us.
          For decisions that matter, talk to a financial advisor.
        </p>
      </div>

      {/* Honest card */}
      <div className="north-star" style={{ marginTop: 16 }}>
        <p className="ns-kicker">The honest picture</p>
        <p className="ns-text" style={{ fontSize: 16 }}>
          You own your home, earn well, and save{' '}
          <strong style={{ fontWeight: 500, color: '#E8D5BB' }}>$30,000 a year.</strong>{' '}
          Your money picture is better than it probably feels. The one thing your whole plan rests on
          is the business keeping going — that&apos;s what deserves the most attention.
        </p>
      </div>

      {/* Four rows */}
      <p className="section-head">Your four numbers</p>
      <div className="four-rows">
        {[
          { icon: 'ti-home', bg: 'fi-watch', label: 'What you have', detail: 'Home owned outright. Savings $50–100k in cash. Retirement savings under $100k.', dot: 'dot-watch' },
          { icon: 'ti-briefcase', bg: 'fi-good', label: "What's coming in", detail: 'Self employed, $85k. Planning to keep working 1–2 days a week.', dot: 'dot-good' },
          { icon: 'ti-credit-card', bg: 'fi-good', label: "What's going out", detail: 'Expenses covered comfortably. Three trips a year. Comfortable lifestyle.', dot: 'dot-good' },
          { icon: 'ti-trending-up', bg: 'fi-good', label: "What's being added", detail: '$30,000 a year in lump sums. Strong rate for your income and lifestyle.', dot: 'dot-good' },
        ].map((row, i) => (
          <div key={i} className="four-row">
            <div className={`four-icon ${row.bg}`}>
              <i className={`ti ${row.icon}`} style={{ fontSize: 15, color: row.bg === 'fi-good' ? '#0F6E56' : '#BA7517' }} aria-hidden="true" />
            </div>
            <div style={{ flex: 1 }}>
              <p className="fr-label">{row.label}</p>
              <p className="fr-detail">{row.detail}</p>
            </div>
            <div className={`status-dot ${row.dot}`} />
          </div>
        ))}
      </div>

      {/* Recommendations */}
      <p className="section-head">Two things worth doing something about</p>
      {[
        {
          num: 1, color: 'var(--alert)',
          title: 'Make sure the business keeps going even if you can\'t',
          body: 'Your whole financial plan rests on one thing — the business. You don\'t need a complicated plan. You need honest answers to two questions: who could run things if you couldn\'t for a while? And what would month one look like financially if it stopped suddenly?',
          action: 'Think of one person who could step in temporarily. You don\'t have to ask them yet. Just know who it would be.',
        },
        {
          num: 2, color: 'var(--watch)',
          title: 'Your savings are in cash — most of them don\'t need to be',
          body: 'You only need 6–12 months of living expenses liquid. Everything above that is sitting still when it could be doing more. This isn\'t about risk. It\'s about not letting caution guarantee a worse outcome.',
          action: 'Ask a friend or two who they use for financial advice — a personal recommendation beats a Google search.',
        },
      ].map(rec => (
        <div key={rec.num} style={{ margin: '0 20px 10px', background: 'var(--white)', borderRadius: 'var(--r-md)', border: '0.5px solid var(--warm-hairline)', overflow: 'hidden', boxShadow: 'var(--shadow-card)' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: '16px 18px' }}>
            <div style={{ width: 32, height: 32, borderRadius: 9, background: rec.num === 1 ? '#FAECE7' : '#FAEEDA', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ fontSize: 16, fontWeight: 500, color: rec.color }}>{rec.num}</span>
            </div>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: 16, color: 'var(--charcoal)', lineHeight: 1.35, flex: 1 }}>{rec.title}</p>
          </div>
          <div style={{ borderTop: '0.5px solid var(--warm-hairline)', padding: '14px 18px', background: '#FAFAF8' }}>
            <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--charcoal-mid)', lineHeight: 1.65, marginBottom: 12 }}>{rec.body}</p>
            <div style={{ background: '#F0E8DC', borderRadius: 10, padding: '11px 13px' }}>
              <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--warm-light)', marginBottom: 5 }}>One small step</p>
              <p style={{ fontSize: 13, fontWeight: 400, color: 'var(--charcoal)', lineHeight: 1.55 }}>{rec.action}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Nudge */}
      <div className="nudge-card">
        <p className="nudge-kicker">This week</p>
        <p className="nudge-text">Think of one person who could step in and keep things going if you needed them to. You don&apos;t have to ask them. Just know who it would be.</p>
        <div className="nudge-actions" style={{ marginTop: 16 }}>
          <button className="btn-dark-sm">Done it</button>
          <button className="btn-ghost-sm">Not yet</button>
        </div>
      </div>

      {/* Something changed */}
      <button style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '20px 24px 0', background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 300, color: 'var(--warm-light)' }}>
        <i className="ti ti-plus-circle" style={{ fontSize: 16 }} aria-hidden="true" />
        Something changed with your finances? Tell me
      </button>

      <div style={{ height: 24 }} />
      <BottomNav />
    </div>
  )
}
