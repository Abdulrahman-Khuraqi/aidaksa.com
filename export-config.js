const { locales, defaultLocale } = require('./next-i18next.config').i18n;

module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    const paths = {
      '/': { page: '/' },
    };

    locales.forEach((locale) => {
      if (locale !== defaultLocale) {
        paths[`/${locale}`] = { page: '/', query: { locale } };
      }
    });

    return paths;
  },
  i18n: {
    locales,
    defaultLocale,
  },
};
