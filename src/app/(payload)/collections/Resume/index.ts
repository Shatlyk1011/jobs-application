import type { CollectionConfig } from "payload";

import { CURRENCY, FORMAT, LEVEL, LOCATION } from "../../../../../data/filters";
import adminsAndModerator from "../../utils/adminsAndModerator";

const Resume: CollectionConfig = {
  access: {
    read: () => true,
    create: adminsAndModerator,
    delete: adminsAndModerator,
    update: adminsAndModerator,
  },
  admin: {
    defaultColumns: ["username", "feedback", "resumeLink", "isVisible", "createdAt"],
  },
  slug: "resume",
  fields: [
    {
      name: "username",
      label: "Your name",
      type: "text",
      required: true,
    },
    {
      name: "feedback",
      label: "Contact (Telegram, email)",
      type: "text",
      required: true,
    },
    {
      name: "resumeLink",
      label: "Resume link",
      type: "text",
      required: true,
      // @ts-ignore
      validate: (url: string) => {
        if (!url) return true; // Optional field
        try {
          new URL(url);
          return true;
        } catch (e) {
          return "Please provide a valid URL";
        }
      },
    },
    {
      name: "profession",
      label: "Position",
      type: "text",
      required: true,
    },

    {
      name: "level",
      label: "Level",
      type: "select",
      options: LEVEL,
      required: true,
    },

    {
      name: "location",
      label: "Location",
      type: "select",
      options: LOCATION,
      required: true,
    },

    {
      name: "format",
      label: "Format",
      type: "select",
      options: FORMAT,
      required: true,
    },

    {
      name: "salary",
      label: "Salary",
      type: "group",
      fields: [
        {
          label: "Currency",
          name: "currency",
          type: "select",
          options: CURRENCY,
        },
        {
          label: "From",
          name: "from",
          type: "text",
        },
        {
          label: "To",
          name: "to",
          type: "text",
        },
      ],
    },
    {
      name: "isVisible",
      label: "Post Status",
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
