import type { CollectionConfig } from "payload";

import { CURRENCY, FORMAT, LEVEL, LOCATION, PROFESSION } from "../../../../../data/filters";

const Resume: CollectionConfig = {
  access: {
    read: () => true,
  },
  admin: {
    defaultColumns: ["username", "resumeLink", "isVisible", "createdAt"],
  },
  slug: "resume",
  fields: [
    {
      name: "username",
      label: "Имя",
      type: "text",
      required: true,
    },
    {
      name: "resumeLink",
      label: "Ссылка на резюме",
      type: "text",
      required: true,
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
      name: "profession",
      label: "Профессия",
      type: "select",
      options: PROFESSION,
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
      defaultValue: false,
      admin: {
        position: "sidebar",
      },
    },
  ],
};

export default Resume;
