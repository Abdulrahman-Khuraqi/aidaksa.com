import { useRouter } from 'next/router';
import { useLanguage } from '../contexts/LanguageContext';
import { useEffect } from 'react';

const useLocalizedRouter = () => {
  const router = useRouter();
  const { isArabic } = useLanguage();

  useEffect(() => {
    const originalPush = router.push;
    const originalReplace = router.replace;

    router.push = (url, as, options) => {
      const localizedUrl = localizePath(url);
      const localizedAs = localizePath(as || url);
      return originalPush.call(router, localizedUrl, localizedAs, options);
    };

    router.replace = (url, as, options) => {
      const localizedUrl = localizePath(url);
      const localizedAs = localizePath(as || url);
      return originalReplace.call(router, localizedUrl, localizedAs, options);
    };

    const localizePath = (path) => {
      if (typeof path === 'string') {
        if (isArabic) {
          return path.startsWith('/ar') ? path : `/ar${path}`;
        } else {
          return path.startsWith('/en') ? path : `/en${path}`;
        }
      } else {
        return path;
      }
    };
  }, [isArabic, router]);

  return router;
};

export default useLocalizedRouter;
