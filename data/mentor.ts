import { IConsultation, IMentorResponse } from "@/types/mentors";

export const InitialMentorFormState: IMentorResponse = {
  username: "",
  resumeLink: "",
  profession: [],
  language: [],
  about: "",
  howCanYouHelp: "",
  position: "",
  image: null,
  slug: "",

  email: "",
  telegram: "",
};

export const InitialConsultationFormState: IConsultation = {
  username: "",
  email: "",
  telegram: "",
  phoneNumber: "",
  requestBody: "",
};

export const MENTOR_PROFESSION = [
  {
    label: "Development",
    value: "Development",
  },
  {
    label: "Testing",
    value: "Testing",
  },
  {
    label: "Admin",
    value: "Admin",
  },
  {
    label: "Analytics",
    value: "Analytics",
  },
  {
    label: "HR",
    value: "HR",
  },
  {
    label: "Design",
    value: "Design",
  },
  {
    label: "Management",
    value: "Management",
  },
  {
    label: "Marketing",
    value: "Marketing",
  },
  {
    label: "Sales",
    value: "Sales",
  },
];
