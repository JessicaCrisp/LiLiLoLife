'use client'

import { usePathname, useRouter } from 'next/navigation'

const NAV_ITEMS = [
  { id: 'home',     label: 'Home',     path: '/home',     icon: 'ti-home' },
  { id: 'body',     label: 'Body',     path: '/body',     icon: 'ti-run' },
  { id: 'money',    label: 'Money',    path: '/money',    icon: 'ti-coin' },
  { id: 'life',     label: 'Life',     path: '/life',     icon: 'ti-heart' },
  { id: 'settings', label: 'Settings', path: '/settings', icon: 'ti-settings' },
]

export default function BottomNav() {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <nav className="bottom-nav" aria-label="Main navigation">
      {NAV_ITEMS.map(item => {
        const active = pathname.startsWith(item.path)
        return (
          <button
            key={item.id}
            className={`nav-item ${active ? 'active' : ''}`}
            onClick={() => router.push(item.path)}
            aria-current={active ? 'page' : undefined}
          >
            <i className={`ti ${item.icon} nav-icon`} aria-hidden="true" />
            <span>{item.label}</span>
          </button>
        )
      })}
    </nav>
  )
}
