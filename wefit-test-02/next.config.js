/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },

  images: {
    domains: ["wefit-react-web-test.s3.amazonaws.com"],
  },
};

module.exports = nextConfig;
