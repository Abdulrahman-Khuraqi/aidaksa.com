import { useTranslation } from "next-i18next";
import i18n from 'i18next';

const LanguageSwitcher = () => {
  const { t } = useTranslation('common');

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.setAttribute('dir', lng === 'ar' ? 'rtl' : 'ltr');
  };

  return (
    <div>
      <button onClick={() => handleLanguageChange('ar')}>AR</button>
      <button onClick={() => handleLanguageChange('en')}>EN</button>
    </div>
  );
};

export default LanguageSwitcher;
