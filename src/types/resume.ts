import { IBaseFields, SalaryType } from ".";

export interface IResume {
  createdAt: string,
  updatedAt: string,
  username: string,
  resumeLink: string,
  profession: string,
  level: string,
  location: string,
  format: string,

  salary?: SalaryType,
  isVisible: boolean,
  id: string
}

export interface IResumeForm extends Omit<IResume, 'createdAt' | 'isVisible' | 'id' | 'updatedAt'> {}

export interface IResumes extends IBaseFields {
  docs: IResume[];
}