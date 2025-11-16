import { CURRENCY, TCurrency } from "../../data/filters";

type JobImage = {
  createdAt: string,
  updatedAt: string,
  alt: string,
  filename: string,
  mimeType: string,
  id: string,
  url: string,
}

export interface IBaseFields {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  nextPage: number | null;
  page: number;
  pagingCounter: number;
  prevPage: number | null;
  totalDocs: number;
  totalPages: number;
}

export interface IJob {
  createdAt: string;
  updatedAt: string;
  companyName: string;
  companyDescription: string;
  companyWebsite: string;
  companyLogo?: JobImage
  title: string;
  mdx: any
  jobContactUrl: string;
  profession: string;
  format: string;
  level: string;
  location: string;
  salary: {
    currency: TCurrency;
    from: string;
    to: string;
  };
  id: string;
}

export interface IJobs extends IBaseFields {
  docs: IJob[];
}


