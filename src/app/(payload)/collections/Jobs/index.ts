import type { CollectionConfig } from "payload";

import { CURRENCY, FORMAT, LEVEL, LOCATION, PROFESSION } from "../../../../../data/filters";

const Jobs: CollectionConfig = {
  access: {
    read: () => true,
  },
  slug: "jobs",
  admin: {
    defaultColumns: [
      "companyLogo",
      "companyName",
      "title",
      "jobContactUrl",
      "profession",
      "createdAt",
      "companyWebsite",
    ],
  },
  fields: [
    {
      name: "companyName",
      label: "Название компании",
      type: "text",
      required: true,
    },

    {
      name: "companyDescription",
      label: "Описание компании",
      type: "textarea",
    },
    {
      name: "companyWebsite",
      label: "Ссылка на компанию (если есть)",
      type: "text",
      // @ts-ignore
      validate: (url: string) => {
        if (!url) return true; // Optional field
        try {
          new URL(url);
          return true;
        } catch (e) {
          return "Пожалуйста укажите валидный url";
        }
      },
    },
    {
      name: "title",
      label: "Загаловок (название вакансии)",
      type: "text",
      required: true,
    },
    {
      name: "jobContactUrl",
      label: "Ссылка на вакансию",
      type: "text",
      required: true,
      // @ts-ignore
      validate: (url: string) => {
        try {
          new URL(url);
          return true;
        } catch (e) {
          return "Пожалуйста укажите валидный url";
        }
      },
    },
    {
      name: "mdx",
      label: "Описание вакансии",
      type: "richText",
      required: true,
    },

    {
      name: "base64Image",
      label: "Логотип компании",
      type: "relationship",
      relationTo: "base64Images",
      required: false,
    },
    {
      name: "profession",
      label: "Профессия",
      type: "select",
      options: PROFESSION,
      required: true,
    },
    {
      name: "location",
      label: "Местонахождение",
      type: "select",
      options: LOCATION,
      required: true,
    },
    {
      name: "format",
      label: "Формат",
      type: "select",
      options: FORMAT,
      required: true,
    },
    {
      name: "level",
      label: "Уровень",
      type: "select",
      options: LEVEL,
      required: true,
    },

    {
      name: "salary",
      label: "Зарплата",
      type: "group",
      fields: [
        {
          label: "Валюта",
          name: "currency",
          type: "select",
          options: CURRENCY,
        },
        {
          label: "От",
          name: "from",
          type: "text",
        },
        {
          label: "До",
          name: "to",
          type: "text",
        },
      ],
    },
    {
      name: "isVisible",
      label: "Статус публикации",
      type: "checkbox",
      required: false,
      defaultValue: true,
      admin: {
        position: "sidebar",
      },
    },
  ],
};

export default Jobs;
