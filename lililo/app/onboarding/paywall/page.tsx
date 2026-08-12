'use client'

import { useRouter } from 'next/navigation'

export default function PaywallScreen() {
  const router = useRouter()

  const handleStart = () => {
    // In production: Stripe checkout. For now, go to home.
    router.push('/home')
  }

  return (
    <div className="screen-no-nav">
      <div className="page-hero" style={{ paddingTop: 40 }}>
        <span className="kicker">Ready when you are</span>
        <h1 className="serif-xl" style={{ marginBottom: 12 }}>
          Picture yourself<br /><em>twelve months</em><br />from now.
        </h1>
        <p className="body-text">
          You&apos;re doing the thing you said you loved. Your body is in better shape than it was
          this time last year. You&apos;re not anxious about money — you understand your picture clearly.
        </p>
        <p className="body-text" style={{ marginTop: 12 }}>
          Nothing dramatic happened. You just stopped drifting. You had something checking in honestly,
          every week, that knew what mattered to you — and noticed the moment things started to slide.
        </p>
        <p className="body-text" style={{ marginTop: 12, fontWeight: 400, color: 'var(--charcoal)' }}>
          That&apos;s what this is. And it costs less than a coffee a week.
        </p>
      </div>

      <div className="paywall-card">
        <p className="pw-price">$12.99</p>
        <p className="pw-per">per month — about 43 cents a day</p>
        <div className="pw-guarantee">
          If it hasn&apos;t surprised you or made you do one thing you&apos;ve been putting off
          — within 30 days, we&apos;ll refund every cent. No questions.
        </div>
        <div className="pw-divider" />
        <p className="pw-alt">Or <strong>$99/year</strong> — two months free. Most people choose this.</p>
      </div>

      <div className="founding-badge">
        <span className="founding-icon">⭐</span>
        <p className="founding-text">
          <strong>Founding member — $249 once, forever.</strong><br />
          First 100 people only. Lock in everything for life. Help shape what gets built next.
        </p>
      </div>

      <button className="btn-primary" onClick={handleStart} style={{ marginTop: 18 }}>
        Start my plan →
      </button>
      <button className="btn-ghost">See annual and lifetime options</button>

      <p className="privacy-note" style={{ marginBottom: 32 }}>
        30-day money-back guarantee. No questions.<br />
        Secure payment via Stripe. Cancel any time.
      </p>
    </div>
  )
}
