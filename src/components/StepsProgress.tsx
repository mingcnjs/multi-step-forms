import { steps } from '@/constants'
import { AppContext } from '@/contexts'
import classNames from 'classnames'
import { useContext } from 'react'

function StepsProgress() {
  const { appState } = useContext(AppContext)
  const currentIndex = steps.indexOf(appState['step'] as string)
  return (
    <div className="absolute top-[205px] left-20 flex flex-col gap-5 text-primary-500">
      {steps.map((step, index) => (
        <div
          key={step}
          className={classNames(
            'before:w-4 before:h-4 before:block flex items-center gap-3 before:rounded-sm',
            {
              'before:bg-primary-550': currentIndex > index,
              'before:bg-accent': currentIndex === index,
              'before:bg-primary-300': currentIndex < index,
            }
          )}
        >
          {step}
        </div>
      ))}
    </div>
  )
}

export default StepsProgress
