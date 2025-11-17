import { IBaseFields, SalaryType } from ".";

export interface IResume {
  username: string;
  resumeLink: string;
  profession: string;
  level: string;
  location: string;
  format: string;
  feedback: string;
  salary?: SalaryType;

  createdAt: string;
  updatedAt: string;
  isVisible: boolean;
  id: string;
}

export interface IResumeForm extends Omit<IResume, "createdAt" | "updatedAt" | "isVisible" | "id"> {}

export interface IResumes extends IBaseFields {
  docs: IResume[];
}
