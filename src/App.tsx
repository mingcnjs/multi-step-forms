import { useContext } from 'react'

import { InfoForm, PasswordForm, Review } from '@/components'
import { AppContext } from '@/contexts'
import { BaseLayout } from '@/layouts'
import { Card } from '@/ui'
import { Step } from '@/constants'

function App() {
  const { appState } = useContext(AppContext)
  const step = appState['step']
  return (
    <BaseLayout>
      <Card>
        {step === Step.INITIAL && <InfoForm />}
        {step === Step.PASSWORD && <PasswordForm />}
        {step === Step.REVIEW && <Review />}
      </Card>
    </BaseLayout>
  )
}

export default App
