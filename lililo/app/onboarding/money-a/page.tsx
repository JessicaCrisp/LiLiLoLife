'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useApp } from '@/components/AppContext'

const HOME_OPTS = ['Own outright','Mortgage','Renting','Other arrangement']
const SAVINGS_OPTS = ['Under $25k','$25k–$50k','$50k–$100k','$100k–$250k','$250k–$500k','$500k+']
const RETIREMENT_OPTS = ['Under $100k','$100k–$250k','$250k–$500k','$500k–$750k','$750k–$1m','$1m+']
const INVESTMENTS = ['Investment property','Shares or ETFs','Managed funds','Crypto','Business equity','None']
const LIABILITIES = ['No — pretty much debt free','Car loan','Credit card balance I carry','Business loan','Personal loan','Something else']
const CC_RANGES = ['Under $2k','$2k–$5k','$5k–$15k','$15k–$30k','$30k+']
const DEBT_FEELING = ["Fine — it's just part of life","It's there but I don't think about it","It's on my mind sometimes","I carry stress about it"]
const WORK_STATUS = ['Full time employed','Part time employed','Self employed','Running a business','Semi-retired','Retired','Not currently working']
const KEEP_WORKING = ['Yes — definitely','Probably yes','Maybe — not sure yet','No — I\'m done with work']
const INCOME_SECURITY = ['Very secure','Mostly secure','A bit uncertain','Depends on my health']

const PROGRESS = [1,2,3,4,5,6,7,8,9]

export default function MoneyAScreen() {
  const router = useRouter()
  const { state, update } = useApp()
  const [money, setMoney] = useState<Record<string,string>>(state.money)
  const [liabilities, setLiabilities] = useState<string[]>(state.liabilities)
  const [investments, setInvestments] = useState<string[]>([])
  const [liabilityFeeling, setLiabilityFeeling] = useState(state.liabilityFeeling)
  const [creditCardRange, setCreditCardRange] = useState(state.creditCardRange)
  const [openField, setOpenField] = useState<string|null>(null)
  const [annualIncome, setAnnualIncome] = useState(money.annualIncome || '')

  const setVal = (field: string, val: string) => {
    setMoney(prev => ({ ...prev, [field]: val }))
    setOpenField(null)
  }

  const toggleLiability = (item: string) => {
    if (item === 'No — pretty much debt free') { setLiabilities(['No — pretty much debt free']); setLiabilityFeeling(''); setCreditCardRange(''); return }
    const without = liabilities.filter(i => i !== 'No — pretty much debt free')
    if (without.includes(item)) setLiabilities(without.filter(i => i !== item))
    else setLiabilities([...without, item])
  }

  const toggleInv = (item: string) => {
    if (item === 'None') { setInvestments(['None']); return }
    const without = investments.filter(i => i !== 'None')
    setInvestments(without.includes(item) ? without.filter(i => i !== item) : [...without, item])
  }

  const hasDebt = liabilities.some(l => l !== 'No — pretty much debt free') && liabilities.length > 0
  const hasCreditCard = liabilities.includes('Credit card balance I carry')

  const handleContinue = () => {
    update({ money: { ...money, annualIncome }, liabilities, liabilityFeeling, creditCardRange })
    router.push('/onboarding/money-b')
  }

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
        {PROGRESS.map((_,i) => <div key={i} className={`progress-dot ${i < 4 ? 'done' : i === 4 ? 'active' : ''}`} />)}
      </div>

      <div className="page-hero">
        <h2 className="serif-lg" style={{ marginBottom: 6 }}>Your money picture.</h2>
        <p className="sub-text">Ranges are fine. Honesty matters more than precision.</p>
      </div>

      {/* What you have */}
      <p className="section-head">What you have — tap each to select</p>
      <div className="btn-grid">
        {renderGridBtn('home', 'Home situation', 'Own / mortgage / renting?')}
        {renderGridBtn('savings', 'Savings and cash', 'Rough range')}
      </div>
      {openField === 'home' && <div className="picker-sheet"><p className="picker-label">Home situation</p>{HOME_OPTS.map(o => <div key={o} className={`picker-opt ${money.home===o?'selected':''}`} onClick={() => setVal('home',o)}>{o}</div>)}</div>}
      {openField === 'savings' && <div className="picker-sheet"><p className="picker-label">Savings and cash</p>{SAVINGS_OPTS.map(o => <div key={o} className={`picker-opt ${money.savings===o?'selected':''}`} onClick={() => setVal('savings',o)}>{o}</div>)}</div>}

      <div className="btn-grid" style={{ paddingTop: 8 }}>
        {renderGridBtn('retirement', 'Retirement savings (401k / IRA / super / pension)', 'Rough range', true)}
      </div>
      {openField === 'retirement' && <div className="picker-sheet"><p className="picker-label">Retirement savings</p>{RETIREMENT_OPTS.map(o => <div key={o} className={`picker-opt ${money.retirement===o?'selected':''}`} onClick={() => setVal('retirement',o)}>{o}</div>)}</div>}

      {/* Other investments */}
      <p className="section-head">Other investments — select all that apply</p>
      <div className="chips-wrap" style={{ paddingTop: 0 }}>
        {INVESTMENTS.map(inv => (
          <button key={inv} className={`chip ${investments.includes(inv)?'selected':''}`} onClick={() => toggleInv(inv)}>{inv}</button>
        ))}
      </div>

      {/* Liabilities */}
      <p className="section-head">Any debt or liabilities?</p>
      <div className="chips-wrap" style={{ paddingTop: 0 }}>
        {LIABILITIES.map(l => (
          <button key={l} className={`chip ${liabilities.includes(l)?'selected':''}`} onClick={() => toggleLiability(l)}>{l}</button>
        ))}
      </div>

      {hasCreditCard && (
        <div className="follow-up-card">
          <p className="follow-up-label">Credit card balance — roughly how much?</p>
          <div className="follow-up-opts">
            {CC_RANGES.map(r => <button key={r} className={`fu-opt ${creditCardRange===r?'selected':''}`} onClick={() => setCreditCardRange(r)}>{r}</button>)}
          </div>
        </div>
      )}

      {hasDebt && (
        <div className="follow-up-card">
          <p className="follow-up-label">How does it sit with you?</p>
          <div className="follow-up-opts">
            {DEBT_FEELING.map(f => <button key={f} className={`fu-opt ${liabilityFeeling===f?'selected':''}`} onClick={() => setLiabilityFeeling(f)}>{f}</button>)}
          </div>
        </div>
      )}

      {/* What's coming in */}
      <p className="section-head">What&apos;s coming in</p>
      <div className="btn-grid">
        {renderGridBtn('workStatus', 'Work status', 'Tap to select')}
        {renderGridBtn('keepWorking', 'Plan to keep working?', 'Tap to select')}
      </div>
      {openField === 'workStatus' && <div className="picker-sheet"><p className="picker-label">Work status</p>{WORK_STATUS.map(o => <div key={o} className={`picker-opt ${money.workStatus===o?'selected':''}`} onClick={() => setVal('workStatus',o)}>{o}</div>)}</div>}
      {openField === 'keepWorking' && <div className="picker-sheet"><p className="picker-label">Plan to keep working?</p>{KEEP_WORKING.map(o => <div key={o} className={`picker-opt ${money.keepWorking===o?'selected':''}`} onClick={() => setVal('keepWorking',o)}>{o}</div>)}</div>}

      <div className="btn-grid" style={{ paddingTop: 8 }}>
        {renderGridBtn('incomeSecurity', 'Income security', 'How secure is it?', true)}
      </div>
      {openField === 'incomeSecurity' && <div className="picker-sheet"><p className="picker-label">Income security</p>{INCOME_SECURITY.map(o => <div key={o} className={`picker-opt ${money.incomeSecurity===o?'selected':''}`} onClick={() => setVal('incomeSecurity',o)}>{o}</div>)}</div>}

      <p className="section-head">Annual income — roughly</p>
      <div className="num-input-wrap">
        <span style={{ fontSize: 22, fontFamily: 'var(--font-serif)', color: 'var(--warm-light)' }}>$</span>
        <input
          className="num-input"
          type="number"
          placeholder="e.g. 85000"
          value={annualIncome}
          onChange={e => setAnnualIncome(e.target.value)}
          inputMode="numeric"
        />
        <span className="num-hint">rough is fine</span>
      </div>

      <button className="btn-primary" onClick={handleContinue} style={{ marginBottom: 24 }}>
        Keep going →
      </button>
    </div>
  )
}
