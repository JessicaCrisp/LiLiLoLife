'use client'

import BottomNav from '@/components/BottomNav'

interface SettingsRowProps {
  icon: string
  iconBg: string
  iconColor: string
  label: string
  sub?: string
  rightEl?: React.ReactNode
  onClick?: () => void
}

function SettingsRow({ icon, iconBg, iconColor, label, sub, rightEl, onClick }: SettingsRowProps) {
  return (
    <div className="settings-row" onClick={onClick}>
      <div className="settings-icon" style={{ background: iconBg }}>
        <i className={`ti ${icon}`} style={{ fontSize: 17, color: iconColor }} aria-hidden="true" />
      </div>
      <div style={{ flex: 1 }}>
        <p className="settings-label">{label}</p>
        {sub && <p className="settings-sub">{sub}</p>}
      </div>
      {rightEl ?? <i className="ti ti-chevron-right settings-chevron" aria-hidden="true" />}
    </div>
  )
}

export default function SettingsScreen() {
  return (
    <div className="screen">

      <div className="page-hero" style={{ paddingTop: 56 }}>
        <span className="kicker">Your account</span>
        <h1 className="serif-xl" style={{ marginBottom: 0 }}>Settings</h1>
      </div>

      {/* Profile */}
      <p className="section-head">Your profile</p>
      <div className="settings-list">
        <SettingsRow icon="ti-user" iconBg="#F0E8DC" iconColor="var(--warm-light)" label="Your name" sub="Sarah" />
        <SettingsRow icon="ti-star" iconBg="#FAEEDA" iconColor="var(--watch)" label="Your north star" sub="Still windsurfing, travelling and eating well..." />
        <SettingsRow icon="ti-heart" iconBg="#FAECE7" iconColor="var(--alert)" label="What you love" sub="Windsurfing, travel, food..." />
        <SettingsRow icon="ti-run" iconBg="#E1F5EE" iconColor="var(--good)" label="Body information" sub="Update age, fitness, injuries..." />
        <SettingsRow icon="ti-coin" iconBg="#FAEEDA" iconColor="var(--watch)" label="Money picture" sub="Update your financial overview" />
      </div>

      {/* Check-in preferences */}
      <p className="section-head">Check-in preferences</p>
      <div className="settings-list">
        <SettingsRow icon="ti-calendar" iconBg="#E1F5EE" iconColor="var(--good)" label="Check-in day" sub="Sunday mornings" />
        <SettingsRow icon="ti-clock" iconBg="#E1F5EE" iconColor="var(--good)" label="Check-in time" sub="Mid morning — 8–10am" />
        <SettingsRow
          icon="ti-bell"
          iconBg="#F0E8DC"
          iconColor="var(--warm-light)"
          label="Nudge frequency"
          sub="One or two per week"
        />
      </div>

      {/* Notifications */}
      <p className="section-head">Notifications</p>
      <div className="settings-list">
        <SettingsRow
          icon="ti-bell-ringing"
          iconBg="#F0E8DC"
          iconColor="var(--warm-light)"
          label="Push notifications"
          sub="Weekly reminders and nudges"
          rightEl={<button className="toggle" aria-label="Toggle notifications" />}
        />
        <SettingsRow
          icon="ti-moon"
          iconBg="#EDE5D8"
          iconColor="var(--warm-mid)"
          label="Quiet hours"
          sub="No nudges after 9pm"
          rightEl={<button className="toggle" aria-label="Toggle quiet hours" />}
        />
      </div>

      {/* Subscription */}
      <p className="section-head">Subscription</p>
      <div className="settings-list">
        <SettingsRow icon="ti-credit-card" iconBg="#FAEEDA" iconColor="var(--watch)" label="Your plan" sub="Monthly — $12.99/month" />
        <SettingsRow icon="ti-receipt" iconBg="#EDE5D8" iconColor="var(--warm-mid)" label="Billing history" />
        <SettingsRow icon="ti-x" iconBg="#FAECE7" iconColor="var(--alert)" label="Cancel subscription" sub="30-day money-back guarantee applies" />
      </div>

      {/* About */}
      <p className="section-head">About</p>
      <div className="settings-list">
        <SettingsRow icon="ti-info-circle" iconBg="#EDE5D8" iconColor="var(--warm-mid)" label="About LiLiLo" sub="Version 1.0" />
        <SettingsRow icon="ti-lock" iconBg="#EDE5D8" iconColor="var(--warm-mid)" label="Privacy policy" />
        <SettingsRow icon="ti-file-text" iconBg="#EDE5D8" iconColor="var(--warm-mid)" label="Terms of service" />
      </div>

      <p style={{ margin: '20px 24px 0', fontSize: 13, fontWeight: 300, color: 'var(--warm-border)', textAlign: 'center', lineHeight: 1.6 }}>
        LiLiLo — Live the Life You Love<br />
        <span style={{ fontSize: 11 }}>lililolife.com</span>
      </p>

      <div style={{ height: 24 }} />
      <BottomNav />
    </div>
  )
}
