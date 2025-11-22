import { IMentor } from "@/types/mentors";

export const InitialMentorFormState: Omit<IMentor, 'id' | 'createdAt' | 'updatedAt' | 'price'> = {
  username: "",
  resumeLink: "",
  profession: [],
  language: [],
  about: "",
  howCanYouHelp: "",
  position: "",
  image: null,
  slug: '',

  email: "",
  telegram: "",
};

export const MENTOR_PROFESSION = [
  {
    label: "Разработка",
    value: "Разработка",
  },
  {
    label: "Тестирование",
    value: "Тестирование",
  },
  {
    label: "Администрирование",
    value: "Администрирование",
  },
  {
    label: "Аналитика",
    value: "Аналитика",
  },
  {
    label: "HR",
    value: "HR",
  },
  {
    label: "Дизайн",
    value: "Дизайн",
  },
  {
    label: "Менеджмент",
    value: "Менеджмент",
  },
  {
    label: "Маркетинг",
    value: "Маркетинг",
  },
  {
    label: "Продажи",
    value: "Продажи",
  },
];
