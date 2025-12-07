import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

import path from "path";
import { fileURLToPath } from "node:url";

import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { buildConfig } from "payload";

// collections
import AdminUsers from "./app/(payload)/collections/AdminUsers";

import Jobs from "./app/(payload)/collections/Jobs";
import Resume from "./app/(payload)/collections/Resume";
import Mentors from "./app/(payload)/collections/Mentors";
import Consultation from "./app/(payload)/collections/Consultation";
import Base64Images from "./app/(payload)/collections/Base64Images";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  editor: lexicalEditor({}),

  admin: {
    user: AdminUsers.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  defaultDepth: 2,
  // If you'd like to use Rich Text, pass your editor here

  // Define and configure your collections in this array
  collections: [Jobs, Resume, AdminUsers, Mentors, Consultation, Base64Images],

  // Your Payload secret - should be a complex and secure string, unguessable
  secret: process.env.PAYLOAD_SECRET || "",
  // Whichever Database Adapter you're using should go here
  // Mongoose is shown as an example, but you can also use Postgres
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
  }),
  sharp,
});
