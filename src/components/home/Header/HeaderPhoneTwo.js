import React from 'react';
import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import contactInfo from '../../../assets/data/contactInfo.json';
import headerInfo from '../../../assets/data/headerTwo.json';

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
                                                <i
                                                    width="12"
                                                    height="18"
                                                    className="far fa-times"
                                                ></i>
                                            </a>
                                        </div>
                                        <div className="offcanvas-brand text-center ">
                                            <img
                                                width="250"
                                                height="67"
                                                style={{ margin: '50px 0' }}
                                                src="/aida--logoh.svg"
                                                alt="logo"
                                            />
                                        </div>
                                        <div id="menu" className="text-center ">
                                            <ul className="offcanvas_main_menu">
                                                {headerInfo.linksAr.map((link) => (
                                                    <li>
                                                        <Link to={link.to}>{link.title}</Link>
                                                    </li>
                                                ))}
                                                <li className="menu-item-has-children ">
                                                    <LinkScroll
                                                        to="contactform"
                                                        onClick={(e) => action(e)}
                                                        spy
                                                        smooth
                                                        duration={250}
                                                    >
                                                        {headerInfo.buttonTextAr}
                                                    </LinkScroll>
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
                                                <i className="fa fa-times"></i>
                                            </a>
                                        </div>
                                        <div className="offcanvas-brand text-center mb-40">
                                            <img
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
                                                        to="/contact#contact"
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
