const Dotenv = require("dotenv-webpack");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack: (config) => {
    config.plugins.push(new Dotenv());
    return config;
  },
};

module.exports = nextConfig;
