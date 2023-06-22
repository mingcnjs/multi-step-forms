import { useEffect, useRef } from 'react'

const useOnClickOutside = (
  handler: (event: MouseEvent | TouchEvent) => unknown
) => {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (
        !ref?.current ||
        ref?.current.contains(event.target as HTMLDivElement)
      ) {
        return
      }
      handler(event)
    }
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])

  return ref
}

export default useOnClickOutside
