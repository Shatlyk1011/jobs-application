import type { CollectionConfig } from "payload";

const Consultation: CollectionConfig = {
  access: {
    read: () => true,
    create: () => true,
  },
  admin: {
    defaultColumns: ["username", "telegram", "resumeLink", "isVisible"],
  },
  slug: "consultation",
  fields: [
    {
      name: "username",
      label: "Имя",
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
      label: "Telegram",
      type: "text",
      required: true,
    },
    {
      name: "phoneNumber",
      label: "Номер телефона",
      type: "text",
      required: false,
    },
    {
      name: "requestBody",
      label: "Запрос",
      type: "textarea",
      required: false,
    },
    {
      name: "status",
      label: "Статус",
      type: "select",
      options: [
        {
          label: "В ожидании",
          value: "pending",
        },
        {
          label: "Выполняется",
          value: "processing",
        },
        {
          label: "Выполнено",
          value: "done",
        },
        {
          label: "Отказано",
          value: "rejected",
        },
      ],
      required: false,
      defaultValue: "pending",
      admin: {
        position: "sidebar",
      },
    },
  ],
};

export default Consultation;
