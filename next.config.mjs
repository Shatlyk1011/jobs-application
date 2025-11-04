import { withPayload } from "@payloadcms/next/withPayload";


const nextConfig = {
  // fix it: turn on turbopack
   experimental: {
      turbopack: false, 
    },
  /* config options here */
};

export default withPayload(nextConfig);
