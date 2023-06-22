import type { FieldError } from 'react-hook-form'

type Props = {
  error?: FieldError
}

function InputError({ error }: Props) {
  if (!error) return null
  return <div className="text-[#DA2121]">{error.message}</div>
}

export default InputError
