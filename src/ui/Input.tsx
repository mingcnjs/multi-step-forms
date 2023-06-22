import { forwardRef, type HTMLProps } from 'react'
import error from '@/assets/error.svg'

type Props = HTMLProps<HTMLInputElement> & {
  isError?: boolean
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ isError, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          ref={ref}
          className="w-full px-4 py-3 text-primary-700 outline-none"
          {...props}
        />
        {isError && (
          <img
            src={error}
            alt="error"
            className="absolute w-4 h-4 right-3 top-0 bottom-0 m-auto"
          />
        )}
      </div>
    )
  }
)

export default Input
