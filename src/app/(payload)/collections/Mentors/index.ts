import type { CollectionConfig } from "payload";

import { LANGUAGES } from "../../../../../data/filters";
import { MENTOR_PROFESSION } from "../../../../../data/mentor";
import adminsAndModerator from "../../utils/adminsAndModerator";

const Mentors: CollectionConfig = {
  access: {
    read: () => true,
    create:adminsAndModerator,
    delete:adminsAndModerator,
    update:adminsAndModerator
  },
  admin: {
    defaultColumns: ["username", "telegram", "resumeLink", "slug", "isVisible"],
  },
  slug: "mentors",
  fields: [
    {
      name: "username",
      label: "Name",
      type: "text",
      required: true,
    },
    {
      name: "position",
      label: "Position",
      type: "text",
      required: true,
    },
    {
      name: "profession",
      label: "Profession",
      type: "select",
      options: MENTOR_PROFESSION,
      hasMany: true,
      required: true,
    },
    {
      name: "language",
      label: "Languages ​​spoken with students",
      type: "select",
      options: LANGUAGES,
      hasMany: true,
      required: true,
    },

    {
      name: "about",
      label: "About me",
      type: "textarea",
      required: true,
    },

    {
      name: "howCanYouHelp",
      label: "What can you help students with?",
      type: "textarea",
      required: true,
    },

    {
      name: "mdx",
      label: "Mentor description (mdx)",
      type: "richText",
      required: false,
    },

    {
      name: "resumeLink",
      label: "Link to resume or successful case studies",
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
      label: "Telegram username",
      type: "text",
      required: false,
    },

    {
      name: "isVisible",
      label: "Post status",
      type: "checkbox",
      required: false,
      defaultValue: false,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "price",
      label: "Price per hour",
      type: "text",
      required: false,
      defaultValue: 200,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "slug",
      label: "Slug (url-name)",
      type: "text",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "imageBase64",
      label: "Base64 image ",
      type: "textarea",
      validate: () => true,
      admin: {
        // hidden: true
        position: "sidebar",
      },
      required: true,
    },
  ],
};

export default Mentors;
