import { useEffect, useState } from 'react'

const useDisclosure = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState)

  useEffect(() => {
    if (isOpen !== initialState) {
      setIsOpen(initialState)
    }
  }, [initialState])

  const open = () => {
    setIsOpen(true)
  }

  const close = () => {
    setIsOpen(false)
  }

  const toggle = () => (isOpen ? close() : open())

  return { isOpen, open, close, toggle }
}

export default useDisclosure
