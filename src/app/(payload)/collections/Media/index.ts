import type { CollectionConfig } from "payload";
import path from "path";

const Media: CollectionConfig = {
  admin: {
    defaultColumns: ["title", "createdBy", "createdAt"],
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
  slug: "media",

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
