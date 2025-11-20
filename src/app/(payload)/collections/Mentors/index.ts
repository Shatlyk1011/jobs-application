import type { CollectionConfig } from "payload";

import { LANGUAGES } from "../../../../../data/filters";
import { MENTOR_PROFESSION } from "../../../../../data/mentor";

const Mentors: CollectionConfig = {
  access: {
    read: () => true,
    create: () => true,
  },
  admin: {
    defaultColumns: [ "username", "telegram", "resumeLink", "isVisible"],
  },
  slug: "mentors",
  fields: [
    {
      name: "username",
      label: "Имя",
      type: "text",
      required: true,
    },
    {
      name: "position",
      label: "Позиция",
      type: "text",
      required: true,
    },
    {
      name: "profession",
      label: "Профессия",
      type: "select",
      options: MENTOR_PROFESSION,
      hasMany: true,
      required: true,
    },
    {
      name: "language",
      label: "Языки общения с учениками",
      type: "select",
      options: LANGUAGES,
      hasMany: true,
      required: true,
    },

    {
      name: "imageUrl",
      label: "Ссылка на фотографию",
      type: "text",
      required: true,
    },

    {
      name: "about",
      label: "О себе",
      type: "textarea",
      required: true,
    },

    {
      name: "howCanYouHelp",
      label: "С чем можете помочь ученикам?",
      type: "textarea",
      required: true,
    },

    {
      name: "resumeLink",
      label: "Ссылка на резюме или на успешные кейсы",
      type: "text",
      required: true,
    },

    {
      name: "email",
      label: "Email",
      type: "text",
      required: true,
    },

    {
      name: "telegram",
      label: "Ник в Телеграм",
      type: "text",
      required: false,
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

export default Mentors;
