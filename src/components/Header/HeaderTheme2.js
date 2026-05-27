import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useIntl } from 'react-intl';
import contactInfo from '../../../public/assets/data/contactInfo.json';
import headerInfo from '../../../public/assets/data/headerTwo.json';
import styles from './headertheme2.module.css';
import Navigation from './NavigationTwo';
import StickyMenu from './StickyMenu';
import { useLanguage } from '../../contexts/LanguageContext'; // تأكد من أن المسار صحيح

const HeaderTheme2 = ({ action, className ,langUrl}) => {
  const { formatMessage } = useIntl();
  const { isArabic, handleLanguageChange } = useLanguage();
  // const lang = formatMessage({ id: 'language' })==='language'?'': formatMessage({ id: 'language' });

  useEffect(() => {
    StickyMenu();
  }, []);

  return (
    <header className={`header-area header-theme2 theme2-sticky ak-sticky ${className || ''}`}>
      <div className='container'>
        <div className={styles.headercontainer}>
          <div className='header-nav-box'>
            <div className='row align-items-center'>
              <div className='col-lg-2 col-md-4 col-sm-5 col-9 order-1 order-sm-1 text-right'>
                <div className='logo-box'>
                <Link href={`/${langUrl}`}>
                    <Image
                      width='125'
                      height='54'
                      src='/../../images/logo/logo-whitefull.svg'
                      alt='logo'
                    />
                  </Link>
                </div>
              </div>
              <div className='col-lg-6 col-md-1 col-sm-1 order-3 order-sm-2'>
                <div className='header-main-menu white'>
                  <Navigation lang={isArabic} headerInfo={headerInfo} />
                </div>
              </div>
              <div className='col-lg-4 col-md-7 col-sm-6 col-3 order-2 order-sm-3'>
                <div className='btn-box '>
                  {isArabic ? (
                    <>
                      <button className='me-3 white' onClick={handleLanguageChange}>
                        EN
                      </button>
                      <a
                        rel='noreferrer'
                        target='_blank'
                        className='main-btn btn-white'
                        href={contactInfo.whatsapplink}
                      >
                        {headerInfo.buttonTextAr}
                      </a>
                      <div
                        onClick={(e) => action(e)}
                        className='toggle-btn toggle-ar mr-30 canvas_open d-lg-none d-block'
                      >
                        <Image
                          src='/icons/bar-white.svg'
                          width='32'
                          height='18'
                          alt='Menu'
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <button className='me-3 white' onClick={handleLanguageChange}>
                        عربي
                      </button>
                      <a
                        rel='noreferrer'
                        target='_blank'
                        className='main-btn btn-white'
                        href={contactInfo.whatsapplink}
                      >
                        {headerInfo.buttonTextEn}
                      </a>
                      <div
                        onClick={(e) => action(e)}
                        className='toggle-btn ml-30 canvas_open d-lg-none d-block'
                      >
                        <Image
                          src='/icons/bar-white.svg'
                          width='32'
                          height='18'
                          alt='Menu'
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderTheme2;
