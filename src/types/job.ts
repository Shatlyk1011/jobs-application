import { IBaseFields, SalaryType } from ".";

type JobImage = {
  createdAt: string;
  updatedAt: string;
  alt: string;
  filename: string;
  mimeType: string;
  id: string;
  url: string;
};

export interface IJob {
  createdAt: string;
  updatedAt: string;
  companyName: string;
  companyDescription: string;
  companyWebsite: string;
  companyLogo?: JobImage;
  title: string;
  mdx: any;
  jobContactUrl: string;
  profession: string;
  format: string;
  level: string;
  location: string;
  salary: SalaryType;
  id: string;
}

export interface IJobs extends IBaseFields {
  docs: IJob[];
}
