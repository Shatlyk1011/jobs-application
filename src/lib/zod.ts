"use client";
import { FormEvent, useState } from "react";

import { z } from "zod";

import { IResumeForm } from "@/types/resume";

// form scheme
const formSchema = z.object({
  username: z.string().min(2, "Пожалуйста, введите свое имя"),
  resumeLink: z.url({ error: "Пожалуйста, введите валидный URL" }),
  profession: z.string().min(2, "Пожалуйста, выберите профессию"),
  level: z.string().min(2, "Пожалуйста, выберите ваш уровень"),
  location: z.string().min(2, "Пожалуйста, выберите ваше местонахождения"),
  format: z.string().min(2, "Пожалуйста, выберите формат работы"),
  feedback: z.string().min(2, "Пожалуйста, введите ваш Telegram или email для обратной связи"),
});

// types
type FormData = z.infer<typeof formSchema>;

type FormErrors = Partial<Record<keyof FormData, string>>;

// use form hook
export const useZodForm = (form: IResumeForm, onSubmit: () => Promise<void>) => {
  const [errors, setErrors] = useState<FormErrors>({});

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validate form data with Zod
    const result = formSchema.safeParse(form);

    if (!result.success) {
      const newErrors: FormErrors = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof FormData;
        newErrors[field] = issue.message;
      });
      setErrors(newErrors);
      return;
    }

    setErrors({});
    await onSubmit();
  };

  return { errors, handleSubmit };
};
