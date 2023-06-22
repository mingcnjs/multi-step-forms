import { ChangeEvent, ChangeEventHandler, forwardRef, useState } from 'react'
import classNames from 'classnames'

import { useDisclosure, useOnClickOutside } from '@/hooks'
import { Input } from '.'

import down from '@/assets/down.svg'
import check from '@/assets/check.svg'

type Props = {
  name: string
  placeholder?: string
  options?: string[]
  onChange?: ChangeEventHandler<HTMLInputElement>
}

const Select = forwardRef<HTMLInputElement, Props>(
  ({ options, ...props }, ref) => {
    const [selected, setSelected] = useState('')
    const [inputKey, setInputKey] = useState('')
    const { isOpen, open, close } = useDisclosure()
    const containerRef = useOnClickOutside(close)

    return (
      <div className="relative" ref={containerRef}>
        <Input
          ref={ref}
          {...props}
          onFocus={open}
          value={selected}
          autoComplete="off"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value
            return setInputKey(value.charAt(value.length - 1))
          }}
        />
        <img
          src={down}
          alt="down"
          className="absolute z-10 right-3 top-0 bottom-0 m-auto"
        />
        {isOpen && (
          <div className="absolute z-10 border bg-white text-primary-700 flex flex-col w-full rounded-sm mt-1 max-h-52 overflow-auto">
            {options
              ?.filter((option) =>
                inputKey.length === 1
                  ? option.toLowerCase().startsWith(inputKey)
                  : true
              )
              .map((option) => (
                <div
                  key={option}
                  className={classNames(
                    'cursor-pointer py-3 px-4 flex items-center gap-2 hover:bg-primary-100',
                    { 'font-bold bg-primary-100': selected === option }
                  )}
                  onClick={() => {
                    const target = { value: option, name: props.name ?? '' }
                    close()
                    setSelected(option)
                    return props.onChange?.({
                      target,
                    } as ChangeEvent<HTMLInputElement>)
                  }}
                >
                  <span>{option}</span>
                  {selected === option && (
                    <img src={check} alt="selected" className="w-4 h-4" />
                  )}
                </div>
              ))}
          </div>
        )}
      </div>
    )
  }
)

export default Select
