import { Step } from '@/constants'
import { AppContext } from '@/contexts'
import { Button, Input, InputError } from '@/ui'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

const FormSchema = z
  .object({
    password: z
      .string()
      .min(1, { message: 'Password is required' })
      .min(8, { message: 'Must be at least 8 characters' })
      .max(12, { message: 'Must be shorter than 12 characters' }),
    repeatPassword: z.string().min(1, { message: 'Password is required' }),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Passwords don't match",
    path: ['repeatPassword'],
  })

type FormDataType = z.infer<typeof FormSchema>

function PasswordForm() {
  const { setAppState } = useContext(AppContext)
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitted },
  } = useForm<FormDataType>({
    resolver: zodResolver(FormSchema),
  })

  const onSubmit: SubmitHandler<FormDataType> = (data) => {
    setAppState('password', data.password)

    // move to next step
    setAppState('step', Step.REVIEW)
  }

  return (
    <form
      className="w-full flex flex-col gap-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-2">
        <label>Password</label>
        <Input
          {...register('password')}
          placeholder="Input password"
          type="password"
          isError={!!errors.password}
        />
        <InputError error={errors.password} />
      </div>

      <div className="flex flex-col gap-2">
        <label>Repeat Password</label>
        <Input
          {...register('repeatPassword')}
          placeholder="Input password"
          type="password"
          isError={!!errors.repeatPassword}
        />
        <InputError error={errors.repeatPassword} />
      </div>

      <Button type="submit" disabled={isSubmitted && !isValid}>
        Continue
      </Button>
    </form>
  )
}

export default PasswordForm
