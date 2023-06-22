import type { PropsWithChildren } from 'react'

function Card({ children }: PropsWithChildren) {
  return (
    <div className="mt-16 bg-primary-500 py-10 px-5 rounded-2xl text-white w-[400px]">
      {children}
    </div>
  )
}

export default Card
