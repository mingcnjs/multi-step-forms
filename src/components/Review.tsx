import { Step } from '@/constants'
import { AppContext } from '@/contexts'
import { Button } from '@/ui'
import { useContext } from 'react'

function Review() {
  const { appState, setAppState } = useContext(AppContext)
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between">
        <div className="text-sm text-primary-200">Username</div>
        <div>{appState['username']}</div>
      </div>

      <div className="flex justify-between">
        <div className="text-sm text-primary-200">Email</div>
        <div>{appState['email']}</div>
      </div>

      <div className="flex justify-between">
        <div className="text-sm text-primary-200">Phone number</div>
        <div>{appState['phone']}</div>
      </div>

      <div className="flex justify-between">
        <div className="text-sm text-primary-200">Country</div>
        <div>{appState['country']}</div>
      </div>

      <Button onClick={() => setAppState('step', Step.INITIAL)}>
        Complete
      </Button>
    </div>
  )
}

export default Review
