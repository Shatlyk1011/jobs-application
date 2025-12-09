import type { CollectionConfig } from "payload";

import { CURRENCY, FORMAT, LEVEL, LOCATION, PROFESSION } from "../../../../../data/filters";
import adminsAndModerator from "../../utils/adminsAndModerator";

const Jobs: CollectionConfig = {
  access: {
   read: () => true,
  create:adminsAndModerator,
  delete:adminsAndModerator,
  update:adminsAndModerator
  },
  slug: "jobs",
  admin: {
    defaultColumns: ["companyLogo", "companyName", "title", "jobContactUrl", "profession", "createdAt", "isVisible"],
  },
  fields: [
    {
      name: "companyName",
      label: "Company Name",
      type: "text",
      required: true,
    },

    {
      name: "companyDescription",
      label: "Company Description",
      type: "textarea",
    },
    {
      name: "companyWebsite",
      label: "Company Link (if any)",
      type: "text",
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
      name: "title",
      label: "Job Title",
      type: "text",
      required: true,
    },
    {
      name: "jobContactUrl",
      label: "Link to job posting",
      type: "text",
      required: true,
      // @ts-ignore
      validate: (url: string) => {
        try {
          new URL(url);
          return true;
        } catch (e) {
          return "Please provide a valid URL";
        }
      },
    },
    {
      name: "additionalContact",
      label: "Feedback (Telegram, form, email, or other)",
      type: "text",
      required: false,
    },
    {
      name: "additionalNote",
      label: "Note when applying for a job posting",
      type: "text",
      required: false,
    },

    {
      name: "profession",
      label: "Profession",
      type: "select",
      options: PROFESSION,
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
      name: "level",
      label: "Level",
      type: "select",
      options: LEVEL,
      required: true,
    },

    {
      name: "base64Image",
      label: "Company Logo",
      type: "relationship",
      relationTo: "base64Images",
      required: false,
    },

    {
      name: "mdx",
      label: "Job Description",
      type: "richText",
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
          type: "number",
        },
        {
          label: "To",
          name: "to",
          type: "number",
        },
      ],
    },
    {
      name: "isVisible",
      label: "Post Status",
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
