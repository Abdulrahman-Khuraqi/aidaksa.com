import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { goToAnchor } from 'react-scrollable-anchor';
import headerInfo from '../../../public/assets/data/headerTwo.json';
import contactInfo from '../../../public/assets/data/contactInfo.json';
import { Link as LinkScroll } from 'react-scroll';

function HeaderPhoneTwo({ drawer, action, langUrl }) {
  const gotohash = (e, link) => {
    action(e);
    goToAnchor(link, false);
  };
  return (
    <>
      {langUrl !== 'en' ? (
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
                        src='/images/logo/logo.svg'
                        alt='logo'
                      />
                    </div>
                    <div id='menu' className='text-center '>
                      <ul className='offcanvas_main_menu'>
                        {headerInfo.linksAr.map((link) => (
                          <li>
                            <Link href={link.to}>{link.title}</Link>
                          </li>
                        ))}
                        <li className='menu-item-has-children '>
                          <a
                            rel='noreferrer'
                            target='_blank'
                            href={contactInfo.whatsapplink}
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
                        width='169'
                        height='67'
                        style={{ margin: '50px 0' }}
                        src='/images/logo/logo.svg'
                        alt='logo'
                      />
                    </div>
                    <div id='menu' className='text-center '>
                      <ul className='offcanvas_main_menu'>
                        {headerInfo.linksEn.map((link) => (
                          <li>
                            <Link href={link.to}>{link.title}</Link>
                          </li>
                        ))}
                        <li className='menu-item-has-children '>
                          <LinkScroll
                            to='contactform'
                            onClick={(e) => action(e)}
                            spy
                            smooth
                            duration={250}
                          >
                            {headerInfo.buttonTextEn}
                          </LinkScroll>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default HeaderPhoneTwo;
