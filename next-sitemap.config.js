/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.NEXT_PUBLIC_SERVER_URL,
  priority: 1,
  exclude: ['/home'],
};

module.exports = config;
