import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Link as LinkScroll } from 'react-scroll';
import contactInfo from '../../../public/assets/data/contactInfo.json';
import headerInfo from '../../../public/assets/data/header.json';

function Drawer({ drawer, action, lang }) {
    return (
        <>
            {lang ? (
                <>
                    <div
                        onClick={(e) => action(e)}
                        className={`off_canvars_overlay ${drawer ? '' : ''}`}
                    ></div>
                    <div className="offcanvas_menu">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <div
                                        className={`offcanvas_menu_wrapper ${
                                            drawer ? 'active' : ''
                                        }`}
                                    >
                                        <div className="canvas_close">
                                            <a href="#" onClick={(e) => action(e)}>
                                                <Image
                                                    src="/icons/close.svg"
                                                    alt="close"
                                                    width="12"
                                                    height="12"
                                                />
                                            </a>
                                        </div>
                                        <div className="offcanvas-brand text-center ">
                                            <Image
                                                width="250"
                                                height="67"
                                                style={{ margin: '50px 0' }}
                                                src="/img/logo.svg"
                                                alt="logo"
                                            />
                                        </div>
                                        <div id="menu" className="text-center ">
                                            <ul className="offcanvas_main_menu">
                                                {headerInfo.linksAr.map((link) => (
                                                    <li>
                                                        <LinkScroll
                                                            to={link.to}
                                                            onClick={(e) => action(e)}
                                                            offset={link.offset}
                                                            spy
                                                            smooth
                                                            duration={250}
                                                        >
                                                            {link.title}
                                                        </LinkScroll>
                                                    </li>
                                                ))}
                                                <li className="menu-item-has-children ">
                                                    <Link href="/contact">
                                                        {headerInfo.buttonTextAr}
                                                    </Link>
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
                        className={`off_canvars_overlay ${drawer ? 'active' : ''}`}
                    ></div>
                    <div className="offcanvas_menu">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <div
                                        className={`offcanvas_menu_wrapper ${
                                            drawer ? 'active' : ''
                                        }`}
                                    >
                                        <div className="canvas_close">
                                            <a href="#" onClick={(e) => action(e)}>
                                                <Image
                                                    src="/icons/close.svg"
                                                    alt="close"
                                                    width="12"
                                                    height="12"
                                                />
                                            </a>
                                        </div>
                                        <div className="offcanvas-brand text-center mb-40">
                                            <Image
                                                width="250"
                                                height="67"
                                                style={{ margin: '50px 0' }}
                                                src="/group-26.svg"
                                                alt="logo"
                                            />
                                        </div>
                                        <div id="menu" className="text-center ">
                                            <ul className="offcanvas_main_menu">
                                                {headerInfo.linksEn.map((link) => (
                                                    <li>
                                                        <Link
                                                            href={link.to}
                                                            onClick={(e) => action(e)}
                                                            offset={0}
                                                            spy
                                                            smooth
                                                            duration={250}
                                                        >
                                                            {link.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                                <li className="menu-item-has-children ">
                                                    <Link
                                                        style={{ background: '#d3a065' }}
                                                        href="/contact#contactAk"
                                                    >
                                                        {headerInfo.buttonTextEn}
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="offcanvas-social">
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

export default Drawer;
