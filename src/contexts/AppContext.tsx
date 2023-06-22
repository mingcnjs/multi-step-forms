import { Step } from '@/constants'
import { type PropsWithChildren, useReducer, createContext } from 'react'

const initialState = {
  step: Step.INITIAL,
}

export const AppContext = createContext<{
  appState: Record<string, string | undefined>
  setAppState: (type: string, payload?: string) => void
}>({
  appState: initialState,
  setAppState: () => {
    throw new Error('Function not implemented.')
  },
})

type Action = {
  type: string
  payload?: string
}

function reducer(state: Record<string, string | undefined>, action: Action) {
  return { ...state, [action.type]: action.payload }
}

export function AppProvider({ children }: PropsWithChildren) {
  const [appState, dispatch] = useReducer(reducer, initialState)

  const setAppState = (type: string, payload?: string) => {
    dispatch({ type, payload })
  }

  return (
    <AppContext.Provider value={{ appState, setAppState }}>
      {children}
    </AppContext.Provider>
  )
}
