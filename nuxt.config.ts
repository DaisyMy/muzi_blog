const path = require('path');

export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    baseURL: '/muzi_blog',
    head: {
      title: 'muzi_blog',
    },
  },
  nitro: {
    output: {
      publicDir: path.join(__dirname, 'docs'),
    },
  },
});
