import '@/styles/globals.css';
import '@/styles/bootstrap.css';
import '@/styles/default.css';
import '@/styles/header.css';
import '@/styles/style.css';
import '@/styles/main.css';
import '@/styles/button.css';
import '@/styles/hero.css';
import '@/styles/image.css';
import '@/styles/font-awesome.css';

import { IntlProvider } from 'react-intl';
import { Suspense } from 'react';
import { LanguageProvider, useLanguage } from '../contexts/LanguageContext';

// Arabic Messages
import arCommonMessages from '../locales/ar/common.json';
import arHeaderMessages from '../locales/ar/header.json';
import arHeroMessages from '../locales/ar/hero.json';
import arAidaMessages from '../locales/ar/aida.json';
import arAboutusMessages from '../locales/ar/aboutus.json';
import arServicesMessages from '../locales/ar/services.json';
import arEstoreMessages from '../locales/ar/estore.json';
import arClientsMessages from '../locales/ar/clients.json';
import arReviewsMessages from '../locales/ar/reviews.json';
import arCallToActionMessages from '../locales/ar/callToAction.json';
import arBlogMessages from '../locales/ar/blog.json';
import arFooterInfoMessages from '../locales/ar/footerInfo.json';
import arFooterMessages from '../locales/ar/footer.json';
import arBoostSalesMessages from '../locales/ar/boostSales.json';
import arBoostSalesFormMessages from '../locales/ar/boostSales/form.json';
import arContentCreatorsMessages from '../locales/ar/contentCreators.json';
import arMediaBuyingMessages from '../locales/ar/mediaBuying.json';

// English Messages
import enCommonMessages from '../locales/en/common.json';
import enHeaderMessages from '../locales/en/header.json';
import enHeroMessages from '../locales/en/hero.json';
import enAidaMessages from '../locales/en/aida.json';
import enAboutusMessages from '../locales/en/aboutus.json';
import enServicesMessages from '../locales/en/services.json';
import enEstoreMessages from '../locales/en/estore.json';
import enClientsMessages from '../locales/en/clients.json';
import enReviewsMessages from '../locales/en/reviews.json';
import enCallToActionMessages from '../locales/en/callToAction.json';
import enBlogMessages from '../locales/en/blog.json';
import enFooterInfoMessages from '../locales/en/footerInfo.json';
import enFooterMessages from '../locales/en/footer.json';
import enBoostSalesMessages from '../locales/en/boostSales.json';
import enBoostSalesFormMessages from '../locales/en/boostSales/form.json';
import enContentCreatorsMessages from '../locales/en/contentCreators.json';
import enMediaBuyingMessages from '../locales/en/mediaBuying.json';

const messages = {
  ar: {
    ...arCommonMessages,
    ...arHeaderMessages,
    ...arHeroMessages,
    ...arAidaMessages,
    ...arAboutusMessages,
    ...arServicesMessages,
    ...arEstoreMessages,
    ...arClientsMessages,
    ...arReviewsMessages,
    ...arCallToActionMessages,
    ...arBlogMessages,
    ...arFooterInfoMessages,
    ...arFooterMessages,
    ...arBoostSalesMessages,
    ...arBoostSalesFormMessages,
    ...arContentCreatorsMessages,
    ...arMediaBuyingMessages,
  },
  en: {
    ...enCommonMessages,
    ...enHeaderMessages,
    ...enHeroMessages,
    ...enAidaMessages,
    ...enAboutusMessages,
    ...enServicesMessages,
    ...enEstoreMessages,
    ...enClientsMessages,
    ...enReviewsMessages,
    ...enCallToActionMessages,
    ...enBlogMessages,
    ...enFooterInfoMessages,
    ...enFooterMessages,
    ...enBoostSalesMessages,
    ...enBoostSalesFormMessages,
    ...enContentCreatorsMessages,
    ...enMediaBuyingMessages,
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <LanguageConsumer Component={Component} pageProps={pageProps} />
    </LanguageProvider>
  );
}

const LanguageConsumer = ({ Component, pageProps }) => {
  const { isArabic, langUrl, handleLanguageChange } = useLanguage();
  const localeMessages = isArabic ? messages['ar'] : messages['en'];
  const locale = isArabic ? 'ar' : 'en';

  return (
    <IntlProvider locale={locale} messages={localeMessages} defaultLocale="ar">
      <Suspense fallback={<div>Loading...</div>}>
        <Component {...pageProps} langUrl={langUrl} toggleLanguage={handleLanguageChange} />
      </Suspense>
    </IntlProvider>
  );
};

export default MyApp;
