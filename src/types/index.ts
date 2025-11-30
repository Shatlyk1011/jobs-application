import { TCurrency } from "../../data/filters";

export type SalaryType = {
  currency: TCurrency;
  from: string;
  to: string;
};

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

export type OgImageSchema = {
  heading: string;
  type: string;
};
