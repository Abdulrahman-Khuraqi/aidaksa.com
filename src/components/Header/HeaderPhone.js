import React from 'react';
import Image from 'next/image';
import headerInfo from '../../../public/assets/data/header.json';
import { goToAnchor } from 'react-scrollable-anchor';
import Link from 'next/link';

const HeaderPhone = ({ drawer, action, lang }) => {
  const gotohash = (e, link) => {
    action(e);
    goToAnchor(link, false);
  };
  return (
    <>
      {lang ? (
        <>
          <div
            onClick={(e) => action(e)}
            className={`off_canvars_overlay ${drawer ? '' : ''}`}
          ></div>
          <div className='offcanvas_menu'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-12'>
                  <div
                    className={`offcanvas_menu_wrapper ${
                      drawer ? 'active' : ''
                    }`}
                  >
                    <div className='canvas_close'>
                      <a href='#' onClick={(e) => action(e)}>
                        <Image
                          src='/icons/close.svg'
                          alt='close'
                          width='12'
                          height='12'
                        />
                      </a>
                    </div>
                    <div className='offcanvas-brand text-center '>
                      <Image
                        width='169'
                        height='67'
                        style={{ margin: '50px 0' }}
                        src='/images/logo/logo.webp'
                        alt='logo'
                      />
                    </div>
                    <div id='menu' className='text-center '>
                      <ul className='offcanvas_main_menu'>
                        {headerInfo.linksAr.map((link) => (
                          <li>
                            {link.href ? (
                              <>
                                <Link
                                  href={`/${link.to}`}
                                >
                                  {link.title}
                                  {link.tag === '' ? (
                                    ''
                                  ) : (
                                    <span className='badge rounded-pill bg__color--primary text-secondary mr-5'>
                                      {link.tag}
                                    </span>
                                  )}
                                </Link>
                              </>
                            ) : (
                              <>
                                <a
                                  href={link.to}
                                  onClick={(e) => gotohash(e, link.to)}
                                >
                                  {link.title}
                                  {link.tag === '' ? (
                                    ''
                                  ) : (
                                    <span className='badge rounded-pill bg__color--primary text-secondary mr-5'>
                                      {link.tag}
                                    </span>
                                  )}
                                </a>
                              </>
                            )}
                          </li>
                        ))}
                        <li className='menu-item-has-children '>
                          <a
                            href='#contact-us'
                            onClick={(e) => gotohash(e, 'contact-us')}
                          >
                            {headerInfo.buttonTextAr}
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* <div className="offcanvas-social">
                                            <ul className="text-center">
                                                <li>
                                                    <a href={`tel:${contactInfo.phone}`}>
                                                        <i className="fas fa-phone"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href={`mailto:${contactInfo.email}`}>
                                                        <i className="fas fa-envelope"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href={`${contactInfo.instagram}`}>
                                                        <i className="fab fa-instagram"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            onClick={(e) => action(e)}
            className={`off_canvars_overlay ${drawer ? '' : ''}`}
          ></div>
          <div className='offcanvas_menu'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-12'>
                  <div
                    className={`offcanvas_menu_wrapper ${
                      drawer ? 'active' : ''
                    }`}
                  >
                    <div className='canvas_close'>
                      <a href='#' onClick={(e) => action(e)}>
                        <Image
                          src='/icons/close.svg'
                          alt='close'
                          width='12'
                          height='12'
                        />
                      </a>
                    </div>
                    <div className='offcanvas-brand text-center '>
                      <Image
                        width='75'
                        height='56'
                        style={{ margin: '50px 0' }}
                        src='/images/logo/logo-icon.svg'
                        alt='logo'
                      />
                    </div>
                    <div id='menu' className='text-center '>
                      <ul className='offcanvas_main_menu'>
                        {headerInfo.linksEn.map((link) => (
                          <li>
                            <a
                              href={'#' + link.to}
                              onClick={(e) => action(e)}
                              offset={link.offset}
                              spy
                              smooth
                              duration={250}
                            >
                              {link.title}
                            </a>
                          </li>
                        ))}
                        <li className='menu-item-has-children '>
                          <a
                            href='#contactform'
                            onClick={(e) => action(e)}
                            spy
                            smooth
                            duration={250}
                          >
                            {headerInfo.buttonTextEn}
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* <div className="offcanvas-social">
                                            <ul className="text-center">
                                                <li>
                                                    <a href={`tel:${contactInfo.phone}`}>
                                                        <i className="fas fa-phone"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href={`mailto:${contactInfo.email}`}>
                                                        <i className="fas fa-envelope"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href={`${contactInfo.instagram}`}>
                                                        <i className="fab fa-instagram"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default HeaderPhone;
