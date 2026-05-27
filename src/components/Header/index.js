import React, { useEffect, useState } from 'react';
import headerInfo from '../../../public/assets/data/header.json';
import Image from 'next/image';
import Navigation from './Navigation';
import StickyMenu from './StickyMenu';

const Header = ({ action, className, lang, changeModeLan }) => {

  useEffect(() => {
    StickyMenu();
  });
  return (
    <header className={`header-area ak-sticky ${className || ''}`}>
      <div className='container'>
        <div className='header-nav-box'>
          <div className='row align-items-center'>
            <div className='col-lg-2 col-md-4 col-sm-5 col-9 order-1 order-sm-1 text-right'>
              <div className='logo-box'>
                <a href="#home"   spy smooth duration={250}>
                  <Image
                    height='67'
                    width='169'
                    src='/images/logo/logo.webp'
                    alt='logo'
                    className='header__logo'
                    priority
                  />
                </a>
              </div>
            </div>
            <div className='col-lg-8 col-md-1 col-sm-1 order-3 order-sm-2'>
              <div className='header-main-menu '>
                <Navigation lang={lang} headerInfo={headerInfo} />
              </div>
            </div>
            <div className='col-lg-2  col-md-7 col-sm-6 col-3 order-2 order-sm-3'>
              <div className='btn-box'>
                {lang ? (
                  <>
                  {/* <span
                      className='align-content-center pe-3 cursor-hover'
                      onClick={handleLanguageChange}
                    >
                      EN
                    </span> */}
                    <a href="#contact-us"
                    spy smooth duration={400}
                      className='main-btn main-btn-lm'
                    >
                      {headerInfo.buttonTextAr}
                    </a>

                    <div
                      onClick={(e) => action(e)}
                      className='toggle-btn toggle-ar mr-30 canvas_open d-lg-none d-block'
                    >
                      <Image alt="bar" src='/icons/bar.svg' width='32' height='18' />
                    </div>
                  </>
                ) : (
                  <>
                    {/* <span
                      className='align-content-center ps-3 cursor-hover'
                      onClick={handleLanguageChange}
                    >
                      AR
                    </span> */}
                    <a href='#contactform' className='main-btn' 
                    spy smooth duration={400}>
                      {headerInfo.buttonTextEn}
                    </a>
                    <div
                      onClick={(e) => action(e)}
                      className='toggle-btn ml-30 canvas_open d-lg-none d-block'
                    >
                      <Image alt="bar" src='/icons/bar.svg' width='32' height='18' />
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

export default Header;
