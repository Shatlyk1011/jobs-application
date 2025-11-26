import type { CollectionConfig } from "payload";
import adminsAndModerator from "../../utils/adminsAndModerator";

const Base64Images: CollectionConfig = {
  slug: "base64Images",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
    create: adminsAndModerator,
  },
  fields: [
    { name: "name", label: "Название", type: "text", required: true },
    { name: "data", label: "Base64 изображение", type: "textarea", maxLength: 1000000, required: true }, // Store base64 string
    { name: "alt", label: "alt text", type: "text" },
  ],
  labels: { plural: "Images", singular: "Image" },
};

export default Base64Images;
