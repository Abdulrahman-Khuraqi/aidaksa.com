import React, { useEffect } from 'react';
import Link from 'next/link';
import contactInfo from '../../../public/assets/data/contactInfo.json';
import headerInfo from '../../../public/assets/data/headerTwo.json';
import Image from 'next/image';
import NavigationTwo from './NavigationTwo';
import StickyMenu from './StickyMenu';
import { useLanguage } from '../../contexts/LanguageContext'; // تأكد من أن المسار صحيح
import { useIntl } from 'react-intl';

const HeaderTwo = ({ action, className,langUrl }) => {
  const { formatMessage } = useIntl();

  const { isArabic, handleLanguageChange } = useLanguage();
  // const lang = formatMessage({ id: 'language' })==='language'?'': formatMessage({ id: 'language' });

  useEffect(() => {
    StickyMenu();
  }, []);

  return (
    <header className={`header-area ak-sticky ${className || ''}`}>
      <div className='container'>
        <div className='header-nav-box'>
          <div className='row align-items-center'>
            <div className='col-lg-2 col-md-4 col-sm-5 col-9 order-1 order-sm-1 text-right'>
              <div className='logo-box'>
              <Link href={`/${langUrl}`}>
              <Image
                    width='125'
                    height='54'
                    src='/images/logo/logo.svg'
                    alt='logo'
                  />
                </Link>
              </div>
            </div>
            <div className='col-lg-6 col-md-1 col-sm-1 order-3 order-sm-2'>
              <div className='header-main-menu'>
                <NavigationTwo lang={isArabic} headerInfo={headerInfo} />
              </div>
            </div>
            <div className='col-lg-4 col-md-7 col-sm-6 col-3 order-2 order-sm-3'>
              <div className='btn-box'>
                {isArabic ? (
                  <>
                  <button className='me-3' onClick={handleLanguageChange}>EN</button>

                    <a
                      className='main-btn main-btn-lm'
                      offset={-100}
                      spy
                      smooth
                      duration={250}
                      href={contactInfo.whatsapplink}
                    >
                      {headerInfo.buttonTextAr}
                    </a>
                    <div
                      onClick={(e) => action(e)}
                      className='toggle-btn toggle-ar mr-30 canvas_open d-lg-none d-block'
                    >
                      <Image src='/icons/bar.svg' width='32' height='18' alt='Menu' />
                    </div>
                  </>
                ) : (
                  <>
                  <button className='me-3' onClick={handleLanguageChange}>عربي</button>

                    <a
                      className='main-btn'
                      href={contactInfo.whatsapplink}
                    >
                      {headerInfo.buttonTextEn}
                    </a>
                    <div
                      onClick={(e) => action(e)}
                      className='toggle-btn ml-30 canvas_open d-lg-none d-block'
                    >
                      <Image src='/icons/bar.svg' width='32' height='18' alt='Menu' />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderTwo;
