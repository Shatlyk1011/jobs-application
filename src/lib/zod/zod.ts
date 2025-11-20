"use client";
import { FormEvent, useState } from "react";

import { IResumeForm } from "@/types/resume";
import {
  ResumeFormErrors,
  ResumeFormData,
  resumeFormScheme,
  MentorFormErrors,
  MentorFormData,
  mentorFormScheme,
} from "./formSchemes";
import { IMentor } from "@/types/mentors";

// use form hook
export const useResumeZodForm = (form: IResumeForm, onSubmit: () => Promise<void>) => {
  const [errors, setErrors] = useState<ResumeFormErrors>({});

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validate form data with Zod
    const result = resumeFormScheme.safeParse(form);

    if (!result.success) {
      const newErrors: ResumeFormErrors = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof ResumeFormData;
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

export const useMentorZodForm = (form: IMentor, onSubmit: () => Promise<void>) => {
  const [errors, setErrors] = useState<MentorFormErrors>({});

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validate form data with Zod
    const result = mentorFormScheme.safeParse(form);

    if (!result.success) {
      const newErrors: MentorFormErrors = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof MentorFormData;
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
