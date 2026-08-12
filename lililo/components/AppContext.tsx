'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

export interface AppState {
  name: string
  primaryLove: string
  secondaryLove: string
  loveCategories: string[]
  pillarsSelected: string[]
  body: Record<string, string>
  injuries: string[]
  money: Record<string, string>
  liabilities: string[]
  liabilityFeeling: string
  creditCardRange: string
  enjoyment: Record<string, string>
  connection: Record<string, string>
  growth: Record<string, string>
  purposeChips: string[]
  purposeStrength: string
  lifeContext: Record<string, string>
  lifeStage: string
  lifeNote: string
  checkinDay: string
  checkinTime: string
  nudgeFrequency: string
}

const defaultState: AppState = {
  name: '',
  primaryLove: '',
  secondaryLove: '',
  loveCategories: [],
  pillarsSelected: [],
  body: {},
  injuries: [],
  money: {},
  liabilities: [],
  liabilityFeeling: '',
  creditCardRange: '',
  enjoyment: {},
  connection: {},
  growth: {},
  purposeChips: [],
  purposeStrength: '',
  lifeContext: {},
  lifeStage: '',
  lifeNote: '',
  checkinDay: '',
  checkinTime: '',
  nudgeFrequency: '',
}

interface AppContextType {
  state: AppState
  update: (partial: Partial<AppState>) => void
}

const AppContext = createContext<AppContextType>({
  state: defaultState,
  update: () => {},
})

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>(defaultState)

  const update = (partial: Partial<AppState>) => {
    setState(prev => ({ ...prev, ...partial }))
  }

  return (
    <AppContext.Provider value={{ state, update }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  return useContext(AppContext)
}
