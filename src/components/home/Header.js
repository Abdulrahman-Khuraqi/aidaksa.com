// components/home/Header.js

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useIntl } from 'react-intl';
import Image from 'next/image';
import contactInfo from '../../assets/data/contactInfo.json';
import headerInfo from '../../assets/data/header.json';
import logoBlack from '../../assets/images/logo/logo.svg';
import Navigation from './Navigation';
import { useLanguage } from '../../contexts/LanguageContext';  
import StickyMenu from './StickyMenu';

const Header = ({ action }) => {
  const { formatMessage } = useIntl();
  const { isArabic, handleLanguageChange } = useLanguage();
  const lang = formatMessage({ id: 'language' })==='language'?'': formatMessage({ id: 'language' });

  useEffect(() => {
    StickyMenu();
  });

  return (
    <header className="header-area ak-sticky">
      <div className="container">
        <div className="header-nav-box">
          <div className="row align-items-center">
            <div className="col-lg-2 col-md-4 col-sm-5 col-9 order-1 order-sm-1 text-start">
              <div className="logo-box">
                <Link href={`${lang}`}>
                  <Image width="125" height="54" src={logoBlack} alt="logo" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-1 col-sm-1 order-3 order-sm-2">
              <div className="header-main-menu">
                <Navigation lang={isArabic} headerInfo={headerInfo} />
              </div>
            </div>
            <div className="col-lg-4 col-md-7 col-sm-6 col-3 order-2 order-sm-3">
              <div className="btn-box">
                <span className="align-content-center me-3 cursor-hover" onClick={handleLanguageChange}>
                  {isArabic ? 'EN' : 'عربي'}
                </span>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="main-btn main-btn-lm"
                  href={contactInfo.whatsapplink}
                >
                  {formatMessage({ id: 'contactButtonText' })}
                </a>
                <div onClick={() => action()} className="toggle-btn canvas_open d-lg-none d-block">
                  <i className="fal fa-bars" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
