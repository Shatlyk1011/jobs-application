import type { CollectionConfig } from "payload";
import path from "path";

const Media: CollectionConfig = {
  slug: "media",
  admin: {
    defaultColumns: ["title", "createdBy", "createdAt"],
  },
  access: {
    read: () => true,
    create: () => true
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
    staticDir: path.resolve(__dirname, "../../../../../public/api/media/file/"),
    // staticURL: "/media",
  },
};

export default Media;
