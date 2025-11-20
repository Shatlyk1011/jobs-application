import { z } from "zod";

// new resume form scheme
export const resumeFormScheme = z.object({
  username: z.string().min(2, "Пожалуйста, введите свое имя"),
  resumeLink: z.url({ error: "Пожалуйста, введите валидный URL" }),
  profession: z.string().min(2, "Пожалуйста, выберите профессию"),
  level: z.string().min(2, "Пожалуйста, выберите ваш уровень"),
  location: z.string().min(2, "Пожалуйста, выберите ваше местонахождения"),
  format: z.string().min(2, "Пожалуйста, выберите формат работы"),
  feedback: z.string().min(2, "Пожалуйста, введите ваш Telegram или email для обратной связи"),
});

export type ResumeFormData = z.infer<typeof resumeFormScheme>;
export type ResumeFormErrors = Partial<Record<keyof ResumeFormData, string>>;

//new mentor form scheme
export const mentorFormScheme = z.object({
  username: z.string().min(2, "Пожалуйста, введите свое имя"),
  position: z.string().min(5, "Пожалуйста, укажите Вашу роль или должность"),
  profession: z.array(z.string()).min(1, "Пожалуйста, укажите сферу, где Вы полезны как ментор"),
  image: z.file({ error: "Пожалуйста, выберите изображение для профиля" }),
  language: z.array(z.string()).min(1, "Пожалуйста, укажите языки, которыми Вы владеете"),
  about: z.string().min(20, "Пожалуйста, расскажите о себе и своем профессиональном опыте"),
  howCanYouHelp: z.string().min(20, "Пожалуйста, расскажите, как Вы можете быть полезны в роли ментора"),
  resumeLink: z.string().min(5, "Пожалуйста, введите ссылку на Ваше резюме или портфолио"),
  email: z.email({ error: "Пожалуйста, введите свой email для обратной связи" }),
  telegram: z.string().min(2, "Пожалуйста, введите свой telegram для обратной связи"),
});

export type MentorFormData = z.infer<typeof mentorFormScheme>;
export type MentorFormErrors = Partial<Record<keyof MentorFormData, string>>;
