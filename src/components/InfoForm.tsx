import { useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import validator from 'validator'

import { Step } from '@/constants'
import { AppContext } from '@/contexts'
import { Button, Input, InputError, Select } from '@/ui'
import { useCountries } from '@/hooks'

const FormSchema = z.object({
  username: z
    .string()
    .min(1, { message: 'Username is required' })
    .min(4, { message: 'Must be at least 4 characters' })
    .max(12, { message: 'Must be shorter than 12 characters' }),
  email: z.string().email().min(1, { message: 'Email is required' }),
  phone: z
    .string()
    .min(1, { message: 'Phone number is required' })
    .refine(validator.isMobilePhone, { message: 'Invalid phone number' }),
  country: z.string().min(1, { message: 'Country is required' }),
})

type FormDataType = z.infer<typeof FormSchema>

function InfoForm() {
  const countries = useCountries()
  const { setAppState } = useContext(AppContext)
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitted },
  } = useForm<FormDataType>({
    resolver: zodResolver(FormSchema),
  })

  const onSubmit: SubmitHandler<FormDataType> = (data) => {
    setAppState('username', data.username)
    setAppState('email', data.email)
    setAppState('phone', data.phone)
    setAppState('country', data.country)

    // move to next step
    setAppState('step', Step.PASSWORD)
  }

  return (
    <form
      className="w-full flex flex-col gap-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-2">
        <label>Username</label>
        <Input
          {...register('username')}
          placeholder="Input username"
          isError={!!errors.username}
        />
        <InputError error={errors.username} />
      </div>

      <div className="flex flex-col gap-2">
        <label>Email</label>
        <Input
          {...register('email')}
          placeholder="Input email"
          isError={!!errors.email}
        />
        <InputError error={errors.email} />
      </div>

      <div className="flex flex-col gap-2">
        <label>Phone number</label>
        <Input
          {...register('phone')}
          placeholder="Input phone number"
          isError={!!errors.phone}
        />
        <InputError error={errors.phone} />
      </div>

      <div className="flex flex-col gap-2">
        <label>Country</label>
        <Select
          {...register('country')}
          placeholder="Select country"
          options={countries}
        />
        <InputError error={errors.country} />
      </div>

      <Button type="submit" disabled={isSubmitted && !isValid}>
        Continue
      </Button>
    </form>
  )
}

export default InfoForm
