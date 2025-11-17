import { IResumeForm } from "@/types/resume";

export const InitialResumeFormState: IResumeForm = {
  username: "",
  resumeLink: "",
  profession: "",
  level: "",
  location: "",
  format: "",
  feedback: "",
  salary: { currency: "TMT", from: "", to: "" },
};
