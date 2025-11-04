// // storage-adapter-import-placeholder
// import { mongooseAdapter } from "@payloadcms/db-mongodb";
// import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
// import { lexicalEditor } from "@payloadcms/richtext-lexical";
// import path from "path";
// import { buildConfig } from "payload";
// import { fileURLToPath } from "url";
// import sharp from "sharp";


// const filename = fileURLToPath(import.meta.url);
// const dirname = path.dirname(filename);

// export default buildConfig({
//   // admin: {
//   //   user: Customers.slug,
//   //   importMap: {
//   //     baseDir: path.resolve(dirname),
//   //   },
//   // },
//   cookiePrefix: "ashpez",
//   collections: [Restaurants, Orders, Dishes, Cities, Users, Customers, Media, Categories, FeedbackAndCooperations],
//   editor: lexicalEditor(),
//   secret: process.env.PAYLOAD_SECRET || "",
//   typescript: {
//     outputFile: path.resolve(dirname, "payload-types.ts"),
//   },
//   db: mongooseAdapter({
//     url: process.env.DATABASE_URI || "",
//   }),
//   sharp,
//   plugins: [
//     payloadCloudPlugin(),
//     // storage-adapter-placeholder
//   ],
// });

import sharp from 'sharp'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { buildConfig } from "payload";

// Collections
import Jobs from "./app/(payload)/collections/Jobs";
import Media from "./app/(payload)/collections/Media";

import path from "path";
import { fileURLToPath } from "node:url";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

console.log("dirname", dirname);

export default buildConfig({
  editor: lexicalEditor({}),
  admin: {
    importMap: {
      baseDir: path.resolve(dirname),
      // importMapFile: path.resolve(dirname, "app", "(payload)", "admin", "importMap.js"),
    },
  },
  // If you'd like to use Rich Text, pass your editor here

  // Define and configure your collections in this array
  collections: [Jobs, Media],

  // Your Payload secret - should be a complex and secure string, unguessable
  secret: process.env.PAYLOAD_SECRET || "",
  // Whichever Database Adapter you're using should go here
  // Mongoose is shown as an example, but you can also use Postgres
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
  }),
  // If you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.
  // This is optional - if you don't need to do these things,
  // you don't need it!
  sharp,
});