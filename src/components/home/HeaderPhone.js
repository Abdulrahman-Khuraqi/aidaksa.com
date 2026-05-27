import React from 'react';
import { Link as LinkScroll } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import contactInfo from '../../assets/data/contactInfo.json';
import headerInfo from '../../assets/data/header.json';

function HeaderPhone({ drawer, action, langUrl }) {

    return (
        <>
            <div onClick={(e) => action(e)} className={`off_canvars_overlay ${drawer ? 'active' : ''}`}></div>
            <div className="offcanvas_menu">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className={`offcanvas_menu_wrapper ${drawer ? 'active' : ''}`}>
                                <div className="canvas_close">
                                    <a href="#" onClick={(e) => action(e)}>
                                        <i width="12" height="18" className="far fa-times"></i>
                                    </a>
                                </div>
                                <div className="offcanvas-brand text-center">
                                    <img
                                        width="250"
                                        height="67"
                                        style={{ margin: '30px 0' }}
                                        src={`../../images/logo/logo.svg`}
                                        alt="logo"
                                    />
                                </div>
                                <div id="menu" className="text-center">
                                    <ul className="offcanvas_main_menu">
                                        {langUrl !=='en' ? (
                                            headerInfo.linksAr.map((link) => (
                                                <li key={link.to || link.url}>
                                                    {link.url ? (
                                                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                                                            {link.title}
                                                            {link.badge && <span className="badge badge ms-1 bg-primary ">{link.badge}</span>}
                                                        </a>
                                                    ) : (
                                                        <LinkScroll
                                                            to={link.to}
                                                            onClick={(e) => action(e)}
                                                            offset={link.offset}
                                                            spy
                                                            smooth
                                                            duration={250}
                                                        >
                                                            {link.title}
                                                            {link.badge && <span className="badge badge ms-1 bg-primary ">{link.badge}</span>}
                                                        </LinkScroll>
                                                    )}
                                                </li>
                                            ))
                                        ) : (
                                            headerInfo.linksEn.map((link) => (
                                                <li key={link.to || link.url}>
                                                    {link.url ? (
                                                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                                                            {link.title}
                                                            {link.badge && <span className="badge badge ms-1 bg-primary ">{link.badge}</span>}
                                                        </a>
                                                    ) : (
                                                        <LinkScroll
                                                            to={link.to}
                                                            onClick={(e) => action(e)}
                                                            offset={link.offset}
                                                            spy
                                                            smooth
                                                            duration={250}
                                                        >
                                                            {link.title}
                                                            {link.badge && <span className="badge badge ms-1 bg-primary ">{link.badge}</span>}
                                                        </LinkScroll>
                                                    )}
                                                </li>
                                            ))
                                        )}
                                        <li className="menu-item-has-children">
                                            <a href={contactInfo.whatsapplink} rel="noreferrer" target="_blank">
                                                {langUrl !=='en'  ? headerInfo.buttonTextAr : headerInfo.buttonTextEn}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="offcanvas-social">
                                    <ul className="text-center">
                                        <li>
                                            <a aria-label="phone" href={`tel:${contactInfo.phone}`}>
                                                <i className="fas fa-phone"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a aria-label="email" href={`mailto:${contactInfo.email}`}>
                                                <i className="fas fa-envelope"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a aria-label="instagram" href={`${contactInfo.instagram}`}>
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
    );
}

export default HeaderPhone;
