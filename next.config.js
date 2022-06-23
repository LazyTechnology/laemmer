require('dotenv').config();

const { sizes } = require('./blocks/Image/sizes');

module.exports = {
  i18n: {
    locales: ['fr'],
    defaultLocale: 'fr',
  },
  publicRuntimeConfig: {
    SERVER_URL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  },
  images: {
    domains: [
      'localhost',
      // '192.168.1.235',
    ],
    deviceSizes: sizes,
  },
};
