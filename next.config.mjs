import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig = {
  experimental: {
    turbopack: false,
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },

  async redirects() {
    return [
      {
        source: "/mentor",
        destination: "/mentors",
        permanent: true,
      },
      {
        source: "/mentors/new",
        destination: "/mentor/new",
        permanent: true,
      },
      {
        source: "/job",
        destination: "/jobs",
        permanent: true,
      },
    ];
  },

  /* config options here */
};

export default withPayload(nextConfig);
