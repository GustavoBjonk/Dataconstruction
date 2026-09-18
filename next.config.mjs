/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/projetos-sobre",
        destination: "/projetos",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
