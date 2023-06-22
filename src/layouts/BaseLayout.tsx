import { useContext, type PropsWithChildren } from 'react'
import { StepsProgress } from '@/components'
import { AppContext } from '@/contexts'

function BaseLayout({ children }: PropsWithChildren) {
  const { appState } = useContext(AppContext)
  const step = appState['step']
  return (
    <div className="flex flex-col items-center h-screen overflow-auto pb-20">
      <h1 className="font-medium text-4xl mt-20">Super test form</h1>
      <div className="text-primary-500 text-xl mt-4">{step}</div>
      <StepsProgress />
      {children}
    </div>
  )
}

export default BaseLayout
