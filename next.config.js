/** @type {import('next').NextConfig} */

// Working fix; experimental was causing build issue
const nextConfig = {};

/*
const nextConfig = {
  experimental: {
    ppr: 'incremental',
  },
};
*/

module.exports = nextConfig;
