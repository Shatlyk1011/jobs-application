import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { buildConfig } from "payload";

// collections
import Jobs from "./app/(payload)/collections/Jobs";
import Media from "./app/(payload)/collections/Media";
import Resume from "./app/(payload)/collections/Resume";
import Mentors from "./app/(payload)/collections/Mentors";

import path from "path";
import { fileURLToPath } from "node:url";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  editor: lexicalEditor({}),
  admin: {
    importMap: {
      baseDir: path.resolve(dirname),
      // importMapFile: path.resolve(dirname, "app", "(payload)", "admin", "importMap.js"),
    },
  },
  defaultDepth: 2,
  // If you'd like to use Rich Text, pass your editor here

  // Define and configure your collections in this array
  collections: [Jobs, Media, Resume, Mentors],

  // Your Payload secret - should be a complex and secure string, unguessable
  secret: process.env.PAYLOAD_SECRET || "",
  // Whichever Database Adapter you're using should go here
  // Mongoose is shown as an example, but you can also use Postgres
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
  }),
  sharp,
});
