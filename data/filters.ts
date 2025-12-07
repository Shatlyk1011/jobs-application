export const PROFESSION = [
  {
    label: "Development",
    value: "Development",
  },
  {
    label: "Testing",
    value: "Testing",
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
    label: "PR",
    value: "PR",
  },
  {
    label: "Content",
    value: "Content",
  },
  {
    label: "Sales",
    value: "Sales",
  },
  {
    label: "Other",
    value: "Other",
  },
];

export const LEVEL = [
  {
    label: "Intern",
    value: "Intern",
  },
  {
    label: "Junior",
    value: "Junior",
  },
  {
    label: "Middle",
    value: "Middle",
  },
  {
    label: "Senior",
    value: "Senior",
  },
  {
    label: "Lead",
    value: "Lead",
  },
];

export const LOCATION = [
  {
    label: "Ashgabat",
    value: "Ashgabat",
  },
  {
    label: "Turkmenabat",
    value: "Turkmenabat",
  },
  {
    label: "Abroad",
    value: "Abroad",
  },
  {
    label: "Other",
    value: "Other",
  },
];

export const FORMAT = [
  {
    label: "Remote",
    value: "Remote",
  },
  {
    label: "On site",
    value: "On site",
  },
  {
    label: "Hybrid",
    value: "Hybrid",
  },
  {
    label: "Relocation",
    value: "Relocation",
  },
];

export const LANGUAGES: ILanguage[] = [
  {
    label: "Turkmen",
    value: "Turkmen",
  },
  {
    label: "Russian",
    value: "Russian",
  },
  {
    label: "English",
    value: "English",
  },
];

export const CURRENCY: TCurrency[] = ["TMT", "USD", "RUB", "EURO"];

export type TCurrency = "TMT" | "USD" | "RUB" | "EURO";

export type TLanguage = "Turkmen" | "Russian" | "English";

export interface ILanguage {
  label: TLanguage;
  value: TLanguage;
}
