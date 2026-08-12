'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useApp } from '@/components/AppContext'

const EXPENSES_COVERED = ['Comfortably','Mostly fine','A bit tight','Barely']
const LIFESTYLE_COST = ['Modest','Comfortable','Generous','Quite expensive']
const SAVE_METHOD = ['Fixed amount monthly','Lump sums when I can','Save what\'s left','Not consistently']
const SAVINGS_LOCATION = ['Cash or savings account','Shares or ETFs','Mix of both','Mostly in super/retirement fund','Property','Not sure']
const BACKUP_PLAN = ['Yes — solid plan','Sort of — I\'d figure it out','Not really','Haven\'t thought about it']

const PROGRESS = [1,2,3,4,5,6,7,8,9]

export default function MoneyBScreen() {
  const router = useRouter()
  const { state, update } = useApp()
  const [money, setMoney] = useState<Record<string,string>>(state.money)
  const [openField, setOpenField] = useState<string|null>(null)
  const [savingsAmt, setSavingsAmt] = useState('')

  const setVal = (field: string, val: string) => {
    setMoney(prev => ({ ...prev, [field]: val }))
    setOpenField(null)
  }

  const handleContinue = () => {
    const updatedMoney: Record<string, string> = { ...money }
    if (money.saveMethod === 'Fixed amount monthly') updatedMoney.monthlySavings = savingsAmt
    if (money.saveMethod === 'Lump sums when I can') updatedMoney.annualSavings = savingsAmt
    update({ money: updatedMoney })
    router.push('/onboarding/life-questions')
  }

  const showMonthlyAmt = money.saveMethod === 'Fixed amount monthly'
  const showAnnualAmt  = money.saveMethod === 'Lump sums when I can'
  const showAmtInput   = showMonthlyAmt || showAnnualAmt

  const renderGridBtn = (id: string, label: string, sub: string, fullWidth = false) => {
    const val = money[id]
    const isOpen = openField === id
    return (
      <button key={id} className={`grid-btn ${val ? 'selected' : ''} ${fullWidth ? 'full-width' : ''}`}
        onClick={() => setOpenField(isOpen ? null : id)}>
        <span className="gb-label">{label}</span>
        <span className="gb-sub">{val ? `${val} ✓` : isOpen ? 'Open ↑' : sub}</span>
      </button>
    )
  }

  return (
    <div className="screen-no-nav">
      <div className="progress-bar">
        {PROGRESS.map((_,i) => <div key={i} className={`progress-dot ${i < 5 ? 'done' : i === 5 ? 'active' : ''}`} />)}
      </div>

      <div className="page-hero">
        <h2 className="serif-lg" style={{ marginBottom: 6 }}>Almost there on money.</h2>
        <p className="sub-text">A few more things that really matter.</p>
      </div>

      {/* Going out */}
      <p className="section-head">What&apos;s going out</p>
      <div className="btn-grid">
        {renderGridBtn('expensesCovered', 'Expenses covered?', 'Comfortably / mostly / tight...')}
        {renderGridBtn('lifestyleCost', 'Lifestyle cost level', 'Modest / comfortable / generous...')}
      </div>
      {openField === 'expensesCovered' && <div className="picker-sheet"><p className="picker-label">Expenses covered by income?</p>{EXPENSES_COVERED.map(o => <div key={o} className={`picker-opt ${money.expensesCovered===o?'selected':''}`} onClick={() => setVal('expensesCovered',o)}>{o}</div>)}</div>}
      {openField === 'lifestyleCost' && <div className="picker-sheet"><p className="picker-label">Lifestyle cost level</p>{LIFESTYLE_COST.map(o => <div key={o} className={`picker-opt ${money.lifestyleCost===o?'selected':''}`} onClick={() => setVal('lifestyleCost',o)}>{o}</div>)}</div>}

      {/* Being added */}
      <p className="section-head">What&apos;s being added</p>
      <div className="btn-grid">
        {renderGridBtn('saveMethod', 'How do you typically save or invest?', 'Fixed / lump sums / what\'s left...', true)}
      </div>
      {openField === 'saveMethod' && <div className="picker-sheet"><p className="picker-label">How do you typically save?</p>{SAVE_METHOD.map(o => <div key={o} className={`picker-opt ${money.saveMethod===o?'selected':''}`} onClick={() => setVal('saveMethod',o)}>{o}</div>)}</div>}

      {showAmtInput && (
        <div className="follow-up-card">
          <p className="follow-up-label">{showMonthlyAmt ? 'Roughly how much per month?' : 'Roughly how much per year?'}</p>
          <div className="num-input-wrap" style={{ margin: '8px 0 0' }}>
            <span style={{ fontSize: 20, fontFamily: 'var(--font-serif)', color: 'var(--warm-light)' }}>$</span>
            <input className="num-input" type="number" placeholder={showMonthlyAmt ? 'e.g. 2500' : 'e.g. 30000'} value={savingsAmt} onChange={e => setSavingsAmt(e.target.value)} inputMode="numeric" />
            <span className="num-hint">rough is fine</span>
          </div>
        </div>
      )}

      {/* Savings location */}
      <p className="section-head">Where is most of your savings sitting?</p>
      <div className="chips-wrap" style={{ paddingTop: 0 }}>
        {SAVINGS_LOCATION.map(l => (
          <button key={l} className={`chip ${money.savingsLocation===l?'selected':''}`} onClick={() => setMoney(prev => ({ ...prev, savingsLocation: l }))}>{l}</button>
        ))}
      </div>

      {/* Backup plan */}
      <p className="section-head">If you couldn&apos;t work or earn — is there a backup plan?</p>
      <div className="option-list">
        {BACKUP_PLAN.map(opt => (
          <div key={opt} className="option-row" onClick={() => setMoney(prev => ({ ...prev, backupPlan: opt }))}>
            <div className="option-row-content">
              <p className="option-row-label">{opt}</p>
            </div>
            <div className={`checkbox ${money.backupPlan===opt?'checked':''}`} />
          </div>
        ))}
      </div>

      <button className="btn-primary" onClick={handleContinue} style={{ marginBottom: 24 }}>
        That&apos;s my picture →
      </button>
    </div>
  )
}
