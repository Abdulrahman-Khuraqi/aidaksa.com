import i18n from 'i18next';
import { initReactI18next , i } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', // اللغة الافتراضية
    supportedLngs: ['en', 'ar'], // اللغات المدعومة
    debug: true,
    interpolation: {
      escapeValue: false, // React يعتني بالـ XSS
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
