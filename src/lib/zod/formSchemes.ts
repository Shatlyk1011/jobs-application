import { z } from "zod";

// new resume form scheme
export const resumeFormScheme = z.object({
  username: z.string().min(2, "Please enter your name"),
  resumeLink: z.url({ error: "Please enter a valid URL" }),
  profession: z.string().min(2, "Please select a profession"),
  level: z.string().min(2, "Please select your level"),
  location: z.string().min(2, "Please select your location"),
  format: z.string().min(2, "Please select your work format"),
  feedback: z.string().min(2, "Please enter your Telegram or email address for feedback"),
});

export type ResumeFormData = z.infer<typeof resumeFormScheme>;
export type ResumeFormErrors = Partial<Record<keyof ResumeFormData, string>>;

//new mentor form scheme
export const mentorFormScheme = z.object({
  username: z.string().min(2, "Please enter your name"),
  position: z.string().min(5, "Please indicate your role or position"),
  profession: z.array(z.string()).min(1, "Please indicate the area where you are useful as a mentor"),
  image: z.file({ error: "Please select a profile image" }),
  language: z.array(z.string()).min(1, "Please indicate the languages ​​you speak"),
  about: z.string().min(20, "Please tell us about yourself and your professional experience"),
  howCanYouHelp: z.string().min(20, "Please tell us how you can be useful as a mentor"),
  resumeLink: z.string().min(5, "Please provide a link to your resume or portfolio"),
  email: z.email({ error: "Please provide your email address for feedback" }),
  telegram: z.string().min(2, "Please provide your Telegram account for feedback"),
});

export type MentorFormData = z.infer<typeof mentorFormScheme>;
export type MentorFormErrors = Partial<Record<keyof MentorFormData, string>>;

//new consultation form scheme
export const consultationFormScheme = z.object({
  username: z.string().min(2, "Please enter your name"),
  email: z.email({ error: "Please enter your email" }),
  telegram: z.string().min(2, "Please enter your Telegram account for feedback"),
});

export type ConsultationFormData = z.infer<typeof consultationFormScheme>;
export type ConsultationFormErrors = Partial<Record<keyof ConsultationFormData, string>>;
