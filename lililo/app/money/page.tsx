'use client'

import { useRouter } from 'next/navigation'
import BottomNav from '@/components/BottomNav'

export default function MoneyScreen() {
  const router = useRouter()

  return (
    <div className="screen">

      {/* Back nav */}
      <div style={{ padding: '56px 24px 0' }}>
        <button onClick={() => router.push('/home')} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
          <i className="ti ti-arrow-left" style={{ fontSize: 14, color: 'var(--warm-light)' }} aria-hidden="true" />
          <span style={{ fontSize: 13, color: 'var(--warm-light)', fontFamily: 'var(--font-sans)' }}>Home</span>
        </button>
      </div>

      {/* Hero */}
      <div className="page-hero" style={{ paddingTop: 16 }}>
        <span className="kicker">Your money</span>
        <h1 className="serif-xl" style={{ marginBottom: 8 }}>An honest<br /><em>picture.</em></h1>
        <p className="sub-text">Not a retirement calculator. A clear view of whether your money supports the life you&apos;ve described — and what to actually do about it.</p>
      </div>

      {/* Disclaimer */}
      <div style={{ margin: '16px 20px 0', background: 'var(--white)', borderRadius: 12, border: '0.5px solid var(--warm-hairline)', padding: '12px 16px', display: 'flex', alignItems: 'flex-start', gap: 10, boxShadow: 'var(--shadow-card)' }}>
        <i className="ti ti-info-circle" style={{ fontSize: 16, color: 'var(--warm-light)', flexShrink: 0, marginTop: 1 }} aria-hidden="true" />
        <p style={{ fontSize: 12, fontWeight: 300, color: 'var(--warm-mid)', lineHeight: 1.6 }}>
          This is not financial advice. It&apos;s a reflection of what you&apos;ve told us. For decisions that matter, talk to a financial advisor.
        </p>
      </div>

      {/* Honest card */}
      <div style={{ margin: '18px 20px 0', background: 'var(--charcoal)', borderRadius: 16, padding: '22px 24px' }}>
        <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.13em', textTransform: 'uppercase', color: '#5A5048', marginBottom: 10 }}>The honest picture</p>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: 17, color: '#F0E8DC', lineHeight: 1.55 }}>
          You own your home, earn well, and save{' '}
          <strong style={{ fontWeight: 500, color: '#E8D5BB' }}>$30,000 a year.</strong>{' '}
          Your money picture is better than it probably feels. The thing worth watching isn&apos;t how much you&apos;re saving — it&apos;s making sure the business keeps flowing, because that&apos;s what your whole plan rests on.
        </p>
      </div>

      {/* Four numbers */}
      <p className="section-head">Your four numbers</p>
      <div className="four-rows">
        <div className="four-row">
          <div className="four-icon fi-watch"><i className="ti ti-home" style={{ fontSize: 15, color: '#BA7517' }} aria-hidden="true" /></div>
          <div style={{ flex: 1 }}>
            <p className="fr-label">What you have</p>
            <p className="fr-detail">Home owned outright. Savings $50–100k. Super under $100k. Shares and business equity.</p>
          </div>
          <div className="status-dot dot-watch" />
        </div>
        <div className="four-row">
          <div className="four-icon fi-good"><i className="ti ti-briefcase" style={{ fontSize: 15, color: '#0F6E56' }} aria-hidden="true" /></div>
          <div style={{ flex: 1 }}>
            <p className="fr-label">What&apos;s coming in</p>
            <p className="fr-detail">Self employed, earning $85k. Planning to keep working 1–2 days a week.</p>
          </div>
          <div className="status-dot dot-good" />
        </div>
        <div className="four-row">
          <div className="four-icon fi-good"><i className="ti ti-credit-card" style={{ fontSize: 15, color: '#0F6E56' }} aria-hidden="true" /></div>
          <div style={{ flex: 1 }}>
            <p className="fr-label">What&apos;s going out</p>
            <p className="fr-detail">Expenses covered comfortably. Three trips a year. Comfortable lifestyle.</p>
          </div>
          <div className="status-dot dot-good" />
        </div>
        <div className="four-row">
          <div className="four-icon fi-good"><i className="ti ti-trending-up" style={{ fontSize: 15, color: '#0F6E56' }} aria-hidden="true" /></div>
          <div style={{ flex: 1 }}>
            <p className="fr-label">What&apos;s being added</p>
            <p className="fr-detail">$30,000 a year in lump sums. Strong rate for your income and lifestyle.</p>
          </div>
          <div className="status-dot dot-good" />
        </div>
      </div>

      {/* Rec 1 */}
      <p className="section-head">Three things worth doing something about</p>
      <div style={{ margin: '0 20px 10px', background: 'var(--white)', borderRadius: 'var(--r-md)', border: '0.5px solid var(--warm-hairline)', overflow: 'hidden', boxShadow: 'var(--shadow-card)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 18px' }}>
          <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#F0E8DC', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 500, color: 'var(--warm-light)', flexShrink: 0 }}>1</div>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: 16, color: 'var(--charcoal)', flex: 1, lineHeight: 1.3 }}>Your savings are working harder as cash than they could be</p>
        </div>
        <div style={{ borderTop: '0.5px solid var(--warm-hairline)', padding: '16px 18px', background: '#FAFAF8' }}>
          <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--charcoal-mid)', lineHeight: 1.65, marginBottom: 12 }}>
            You told me your savings are in cash because the market feels risky. That&apos;s completely understandable — and it&apos;s one of the most common decisions people make in this age group. But here&apos;s the honest reality: most financial planners suggest keeping 6–12 months of living expenses liquid and investing the rest. Based on your expenses, your buffer is probably around $40–50k. Everything above that is sitting still when it could be moving.
          </p>
          <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--charcoal-mid)', lineHeight: 1.65, marginBottom: 0 }}>
            This isn&apos;t about timing the market. It&apos;s about not letting fear of the worst outcome quietly guarantee a worse one.
          </p>
          <div style={{ background: '#F0E8DC', borderRadius: 10, padding: '12px 14px', marginTop: 14 }}>
            <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--warm-light)', marginBottom: 6 }}>One small step</p>
            <p style={{ fontSize: 13, fontWeight: 400, color: 'var(--charcoal)', lineHeight: 1.55 }}>This week — google &ldquo;fee-only financial advisor&rdquo; in your city and save two names. You don&apos;t have to call them yet. Just have them ready.</p>
          </div>
        </div>
      </div>

      {/* Rec 2 */}
      <div style={{ margin: '0 20px 10px', background: 'var(--white)', borderRadius: 'var(--r-md)', border: '0.5px solid var(--warm-hairline)', overflow: 'hidden', boxShadow: 'var(--shadow-card)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 18px' }}>
          <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#F0E8DC', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 500, color: 'var(--warm-light)', flexShrink: 0 }}>2</div>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: 16, color: 'var(--charcoal)', flex: 1, lineHeight: 1.3 }}>Your super is low — but you have options as a self-employed person</p>
        </div>
        <div style={{ borderTop: '0.5px solid var(--warm-hairline)', padding: '16px 18px', background: '#FAFAF8' }}>
          <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--charcoal-mid)', lineHeight: 1.65, marginBottom: 12 }}>
            Your super balance is low for your age — but you own your home outright, which partly offsets that. And as a self-employed person, you control exactly what goes into super. Even an extra $500 a month between now and 65 makes a real difference — and it&apos;s tax-deductible, which means the government is effectively contributing too.
          </p>
          <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--charcoal-mid)', lineHeight: 1.65, marginBottom: 0 }}>
            This is worth one conversation with an accountant — not to overhaul everything, just to check whether you&apos;re leaving a tax advantage on the table.
          </p>
          <div style={{ background: '#F0E8DC', borderRadius: 10, padding: '12px 14px', marginTop: 14 }}>
            <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--warm-light)', marginBottom: 6 }}>One small step</p>
            <p style={{ fontSize: 13, fontWeight: 400, color: 'var(--charcoal)', lineHeight: 1.55 }}>Next time you speak to your accountant, ask one question: &ldquo;Am I making the most of my super contributions as a self-employed person?&rdquo; That&apos;s it.</p>
          </div>
        </div>
      </div>

      {/* Rec 3 */}
      <div style={{ margin: '0 20px 10px', background: 'var(--white)', borderRadius: 'var(--r-md)', border: '0.5px solid var(--warm-hairline)', overflow: 'hidden', boxShadow: 'var(--shadow-card)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 18px' }}>
          <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#FAECE7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 500, color: 'var(--alert)', flexShrink: 0 }}>3</div>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: 16, color: 'var(--charcoal)', flex: 1, lineHeight: 1.3 }}>Your backup plan needs one honest answer</p>
        </div>
        <div style={{ borderTop: '0.5px solid var(--warm-hairline)', padding: '16px 18px', background: '#FAFAF8' }}>
          <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--charcoal-mid)', lineHeight: 1.65, marginBottom: 12 }}>
            You said &ldquo;sort of — I&apos;d figure it out&rdquo; if the business couldn&apos;t operate. That&apos;s honest. But your whole financial plan rests on that business keeping going. You don&apos;t need a complicated backup plan — you need one clear answer to this question: if the business stopped tomorrow for a year, what would you actually do?
          </p>
          <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--charcoal-mid)', lineHeight: 1.65, marginBottom: 0 }}>
            Could your expenses drop significantly? Is there someone who could run things temporarily? Would you draw down savings? Just knowing the answer — even roughly — changes how secure this feels.
          </p>
          <div style={{ background: '#F0E8DC', borderRadius: 10, padding: '12px 14px', marginTop: 14 }}>
            <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--warm-light)', marginBottom: 6 }}>One small step</p>
            <p style={{ fontSize: 13, fontWeight: 400, color: 'var(--charcoal)', lineHeight: 1.55 }}>Write one sentence — just for yourself — that answers: &ldquo;If the business stopped for a year, I would...&rdquo; Don&apos;t overthink it. Just write it down.</p>
          </div>
        </div>
      </div>

      {/* Nudge */}
      <div className="nudge-card">
        <p className="nudge-kicker">This week</p>
        <p className="nudge-text">Google &ldquo;fee-only financial advisor&rdquo; and save two names. You don&apos;t have to call them. Just have them ready for when you&apos;re ready.</p>
        <div className="nudge-actions" style={{ marginTop: 16 }}>
          <button className="btn-dark-sm">Done it</button>
          <button className="btn-ghost-sm">Not yet</button>
        </div>
      </div>

      {/* Ask */}
      <div style={{ margin: '18px 20px 0', background: 'var(--white)', borderRadius: 'var(--r-md)', border: '0.5px solid var(--warm-hairline)', padding: 18, boxShadow: 'var(--shadow-card)' }}>
        <p style={{ fontSize: 14, fontWeight: 500, color: 'var(--charcoal)', marginBottom: 4 }}>Questions about your money picture?</p>
        <p style={{ fontSize: 12, fontWeight: 300, color: 'var(--warm-light)', marginBottom: 12, lineHeight: 1.5 }}>Ask anything about what you&apos;ve shared. For advice on what to actually do, we&apos;ll point you to the right professional.</p>
        <div style={{ background: '#F7F3ED', border: '0.5px solid rgba(44,35,24,0.15)', borderRadius: 10, padding: '12px 14px', fontSize: 14, color: 'var(--warm-light)', fontWeight: 300 }}>
          e.g. Am I on track for three trips a year?
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
          {['How much should I keep in cash?', 'What does retirement look like for me?', 'Should I put more into super?'].map(c => (
            <span key={c} style={{ background: '#F7F3ED', border: '0.5px solid rgba(44,35,24,0.12)', borderRadius: 20, padding: '7px 13px', fontSize: 12, color: 'var(--warm-mid)', fontWeight: 300 }}>{c}</span>
          ))}
        </div>
        <p style={{ marginTop: 12, paddingTop: 12, borderTop: '0.5px solid var(--warm-hairline)', fontSize: 12, fontWeight: 300, color: 'var(--warm-light)', lineHeight: 1.5 }}>
          This reflects your picture honestly — it doesn&apos;t give financial advice. For anything that involves a real decision with your money, a financial advisor or accountant is the right call.
        </p>
      </div>

      <button style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '20px 24px 0', background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 300, color: 'var(--warm-light)' }}>
        <i className="ti ti-plus-circle" style={{ fontSize: 16 }} aria-hidden="true" />
        Something changed with your finances? Tell me
      </button>

      <div style={{ height: 24 }} />
      <BottomNav />
    </div>
  )
}
