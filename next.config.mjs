import { withPayload } from "@payloadcms/next/withPayload";


const nextConfig = {
  experimental: {
    turbopack: true,
  },
  /* config options here */
};

export default withPayload(nextConfig);
