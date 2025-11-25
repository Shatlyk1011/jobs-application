import type { CollectionConfig } from "payload";

const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: "alt",
      label: "Image alt text",
      defaultValue: "alt text sample",
      required: true,
      type: "text",
    },
  ],
  labels: { plural: "Images", singular: "Image" },

  upload: {
    formatOptions: {
      format: "webp",
      options: {
        quality: 60,
      },
    },
    mimeTypes: ["image/*"],
    disableLocalStorage: true,
  },
};

export default Media;
