import type { CollectionConfig } from "payload";

const Consultation: CollectionConfig = {
  access: {
    read: () => true,
    create: () => true,
  },
  admin: {
    defaultColumns: ["username", "telegram", "consultationWithSlug", "status"],
  },
  slug: "consultation",
  fields: [
    {
      name: "username",
      label: "Name",
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
      label: "Phone number",
      type: "text",
      required: false,
    },
    {
      name: "requestBody",
      label: "Request",
      type: "textarea",
      required: false,
    },
    {
      name: "consultationWithSlug",
      label: "Consultation with (slug)",
      type: "text",
      required: true,
    },

    {
      name: "status",
      label: "Status",
      type: "select",
      options: [
        {
          label: "Pending",
          value: "pending",
        },
        {
          label: "In Progress",
          value: "processing",
        },
        {
          label: "Completed",
          value: "done",
        },
        {
          label: "Denied",
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
