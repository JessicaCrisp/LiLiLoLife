'use client'

import { useRouter } from 'next/navigation'
import BottomNav from '@/components/BottomNav'

interface RecCardProps {
  num: number
  urgent?: boolean
  title: string
  body: string[]
  action: string
}

function RecCard({ num, urgent, title, body, action }: RecCardProps) {
  return (
    <div style={{ background: 'var(--white)', borderRadius: 'var(--r-md)', border: '0.5px solid var(--warm-hairline)', marginBottom: 10, overflow: 'hidden', boxShadow: 'var(--shadow-card)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 18px' }}>
        <div style={{ width: 28, height: 28, borderRadius: '50%', background: urgent ? '#FAECE7' : '#F0E8DC', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 500, color: urgent ? 'var(--alert)' : 'var(--warm-light)', flexShrink: 0 }}>{num}</div>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: 16, color: 'var(--charcoal)', flex: 1, lineHeight: 1.3 }}>{title}</p>
      </div>
      <div style={{ borderTop: '0.5px solid var(--warm-hairline)', padding: '16px 18px', background: '#FAFAF8' }}>
        {body.map((para, i) => (
          <p key={i} style={{ fontSize: 13, fontWeight: 300, color: 'var(--charcoal-mid)', lineHeight: 1.65, marginBottom: i < body.length - 1 ? 12 : 0 }} dangerouslySetInnerHTML={{ __html: para }} />
        ))}
        <div style={{ background: '#F0E8DC', borderRadius: 10, padding: '12px 14px', marginTop: 14 }}>
          <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--warm-light)', marginBottom: 6 }}>One small step</p>
          <p style={{ fontSize: 13, fontWeight: 400, color: 'var(--charcoal)', lineHeight: 1.55 }}>{action}</p>
        </div>
      </div>
    </div>
  )
}

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
        <h1 className="serif-xl" style={{ marginBottom: 8 }}>An honest<br /><em>picture.</em></h1>
        <p className="sub-text">Not a retirement calculator. A clear view of whether your money supports the life you&apos;ve described — and what to actually do about it.</p>
      </div>

      {/* Disclaimer */}
      <div style={{ margin: '16px 20px 0', background: 'var(--white)', borderRadius: 12, border: '0.5px solid var(--warm-hairline)', padding: '12px 16px', display: 'flex', alignItems: 'flex-start', gap: 10, boxShadow: 'var(--shadow-card)' }}>
        <i className="ti ti-info-circle" style={{ fontSize: 16, color: 'var(--warm-light)', flexShrink: 0, marginTop: 1 }} aria-hidden="true" />
        <p style={{ fontSize: 12, fontWeight: 300, color: 'var(--warm-mid)', lineHeight: 1.6 }}>This is not financial advice. It&apos;s a reflection of what you&apos;ve told us. For decisions that matter, talk to a financial advisor.</p>
      </div>

      {/* Honest card */}
      <div style={{ margin: '18px 20px 0', background: 'var(--charcoal)', borderRadius: 16, padding: '22px 24px' }}>
        <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.13em', textTransform: 'uppercase', color: '#5A5048', marginBottom: 10 }}>The honest picture</p>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: 17, color: '#F0E8DC', lineHeight: 1.55 }}>
          You own your home, earn well, and save <strong style={{ fontWeight: 500, color: '#E8D5BB' }}>$30,000 a year.</strong> Your money picture is better than it probably feels. The thing worth watching isn&apos;t how much you&apos;re saving — it&apos;s making sure the business keeps flowing, because that&apos;s what your whole plan rests on.
        </p>
      </div>

      {/* Four rows */}
      <p className="section-head">Your four numbers</p>
      <div className="four-rows">
        {[
          { icon: 'ti-home', bg: 'fi-watch', col: '#BA7517', label: 'What you have', detail: 'Home owned outright. Savings $50–100k. Super under $100k. Shares and business equity.', dot: 'dot-watch' },
          { icon: 'ti-briefcase', bg: 'fi-good', col: '#0F6E56', label: "What's coming in", detail: 'Self employed, earning $85k. Planning to keep working 1–2 days a week.', dot: 'dot-good' },
          { icon: 'ti-credit-card', bg: 'fi-good', col: '#0F6E56', label: "What's going out", detail: 'Expenses covered comfortably. Three trips a year. Comfortable lifestyle.', dot: 'dot-good' },
          { icon: 'ti-trending-up', bg: 'fi-good', col: '#0F6E56', label: "What's being added", detail: '$30,000 a year in lump sums. Strong rate for your income and lifestyle.', dot: 'dot-good' },
        ].map((row, i) => (
          <div key={i} className="four-row">
            <div className={`four-icon ${row.bg}`}>
              <i className={`ti ${row.icon}`} style={{ fontSize: 15, color: row.col }} aria-hidden="true" />
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
      <p className="section-head">Three things worth doing something about</p>
      <div style={{ padding: '0 20px' }}>
        <RecCard
          num={1}
          title="Your savings are working harder as cash than they could be"
          body={[
            'You told me your savings are in cash because the market feels risky. That\'s completely understandable — and it\'s one of the most common decisions people make in this age group. But here\'s the honest reality: <strong style="color:var(--charcoal)">most financial planners suggest keeping 6–12 months of living expenses liquid and investing the rest.</strong> Based on your expenses, your buffer is probably around $40–50k. Everything above that is sitting still when it could be moving.',
            'This isn\'t about timing the market. It\'s about not letting fear of the worst outcome quietly guarantee a worse one.',
          ]}
          action="This week — google 'fee-only financial advisor' in your city and save two names. You don't have to call them yet. Just have them ready."
        />
        <RecCard
          num={2}
          title="Your super is low — but you have options as a self-employed person"
          body={[
            'Your super balance is low for your age — but you own your home outright, which partly offsets that. And as a self-employed person, <strong style="color:var(--charcoal)">you control exactly what goes into super.</strong> Even an extra $500 a month between now and 65 makes a real difference — and it\'s tax-deductible, which means the government is effectively contributing too.',
            'This is worth one conversation with an accountant — not to overhaul everything, just to check whether you\'re leaving a tax advantage on the table.',
          ]}
          action="Next time you speak to your accountant, ask one question: 'Am I making the most of my super contributions as a self-employed person?' That's it."
        />
        <RecCard
          num={3}
          urgent
          title="Your backup plan needs one honest answer"
          body={[
            'You said "sort of — I\'d figure it out" if the business couldn\'t operate. That\'s honest. But <strong style="color:var(--charcoal)">your whole financial plan rests on that business keeping going.</strong> You don\'t need a complicated backup plan — you need one clear answer to this question: if the business stopped tomorrow for a year, what would you actually do?',
            'Could your expenses drop significantly? Is there someone who could run things temporarily? Would you draw down savings? Just knowing the answer — even roughly — changes how secure this feels.',
          ]}
          action="Write one sentence — just for yourself — that answers: 'If the business stopped for a year, I would...' Don't overthink it. Just write it down."
        />
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
        <div style={{ background: '#F7F3ED', border: '0.5px solid rgba(44,35,24,0.15)', borderRadius: 10, padding: '12px 14px', fontSize: 14, color: 'var(--warm-light)', fontWeight: 300 }}>e.g. Am I on track for three trips a year?</div>
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
