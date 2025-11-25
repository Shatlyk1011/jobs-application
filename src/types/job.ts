import { IBaseFields, SalaryType } from ".";

type Base64 = {
  createdAt: string;
  updatedAt: string;
  data: string;
  id: string;
  name: string;
  alt?: string;
};

export interface IJob {
  createdAt: string;
  updatedAt: string;
  companyName: string;
  companyDescription: string;
  companyWebsite: string;
  base64Image?: Base64;
  title: string;
  mdx: any;
  jobContactUrl: string;
  profession: string;
  format: string;
  level: string;
  location: string;
  isVisible: boolean;
  salary: SalaryType;
  id: string;
}

export interface IJobs extends IBaseFields {
  docs: IJob[];
}
