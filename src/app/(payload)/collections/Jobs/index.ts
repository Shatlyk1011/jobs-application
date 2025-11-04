import type { CollectionConfig } from "payload";

import { FORMAT, LEVEL, LOCATION, PROFESSION } from "../../../../../data/filters";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

const Jobs: CollectionConfig = {
  slug: 'jobs',
  fields: [
    {
      name: 'companyName',
      type: 'text',
      required: true,
    },

    {
      name: 'companyDescription',
      type: 'textarea',
    },
    {
      name: 'companyWebsite',
      type: 'text',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'jobContactUrl',
      type: 'text',
      required: true,
    },
    {
      name: 'mdx',
      label: 'Описание вакансии',
      type: 'richText',
      required: true,
    },
    {
      name: 'companyLogo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'profession',
      type: 'select',
      options: PROFESSION,
      required: true,
    },
    {
      name: 'format',
      type: 'select',
      options: FORMAT,
      required: true,
    },
    {
      name: 'level',
      type: 'select',
      options: LEVEL,
      required: true,
    },
    {
      name: 'location',
      type: 'select',
      options: LOCATION,
      required: true,
    },
    {
      name: 'salary',
      type: 'group',
      fields: [
        {
          label: 'От',
          name: 'from',
          type: 'text',
        },
        {
          label: 'До',
          name: 'to',
          type: 'text',
        },
      ],
    },
  ],
}

export default Jobs