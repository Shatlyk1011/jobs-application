import { FormEvent, useState } from "react"

import { z } from "zod"

import { IResumeForm } from "@/types/resume"

// form scheme
const formSchema = z.object({
  name: z.string().min(2, "Please type your name"),
  email: z
    .string()
    .min(4, "Please type your email address")
    .refine((val) => val.length < 4 || z.string().email().safeParse(val).success, {
      message: "Incorrect email address",
    }),
})

// types
type FormData = z.infer<typeof formSchema>

type FormErrors = Partial<Record<keyof FormData, string>>

// use form hook
export const useZodForm = (form: IResumeForm, onSubmit: () => Promise<void>) => {
  const [errors, setErrors] = useState<FormErrors>({})

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Validate form data with Zod
    const result = formSchema.safeParse(form)

    if (!result.success) {
      const newErrors: FormErrors = {}
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof FormData
        newErrors[field] = issue.message
      })
      setErrors(newErrors)
      return
    }

    setErrors({})
    await onSubmit()
  }

  return { errors, handleSubmit }
}
