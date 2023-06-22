import classNames from 'classnames'
import type { MouseEventHandler, PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
}>

function Button({ children, ...props }: Props) {
  return (
    <button
      className={classNames('py-4 text-2xl rounded', {
        'bg-primary-400 text-primary-600': props.disabled,
        'bg-white text-primary-700': !props.disabled,
      })}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
