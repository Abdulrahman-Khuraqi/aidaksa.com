import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import headerInfo from '../../../assets/data/header.json';

import Navigation from './Navigation';
import StickyMenu from './StickyMenu';

const Header = ({ action, className, lang, changeModeLan }) => {
    const handleLanguageChange = (e) => {
        changeModeLan(e);
    };
    // const [imageLogo, setImageLogo] = useState(logoBlack);

    // const scrollLogo = () => {
    //     document.addEventListener('scroll', () => {
    //         if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    //             setImageLogo(logoBlack);
    //         } else {
    //             setImageLogo(logoBlack);
    //         }
    //     });
    // };
    useEffect(() => {
        StickyMenu();
    });
    return (
        <header className={`header-area ak-sticky ${className || ''}`}>
            <div className="container">
                <div className="header-nav-box">
                    <div className="row align-items-center">
                        <div className="col-lg-2 col-md-4 col-sm-5 col-9 order-1 order-sm-1 text-right">
                            <div className="logo-box">
                                <Link to="/">
                                    <img height="45" width="130" src="/img/logo.svg" alt="logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-1 col-sm-1 order-3 order-sm-2">
                            <div className="header-main-menu">
                                <Navigation lang={lang} headerInfo={headerInfo} />
                            </div>
                        </div>
                        <div className="col-lg-4  col-md-7 col-sm-6 col-3 order-2 order-sm-3">
                            <div className="btn-box white">
                                {lang ? (
                                    <>
                                        {/* 
                                        <span
                                            className="align-content-center white cursor-hover"
                                            onClick={handleLanguageChange}
                                        >
                                            EN
                                        </span> */}
                                        <Link className="main-btn main-btn-lm " to="/contact">
                                            {headerInfo.buttonTextAr}
                                        </Link>

                                        <div
                                            onClick={(e) => action(e)}
                                            className="toggle-btn toggle-ar mr-30 canvas_open d-lg-none d-block"
                                        >
                                            <img
                                                src="/icons/bar.svg"
                                                alt="logo"
                                                width="32"
                                                height="18"
                                            />
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <span
                                            className="align-content-center white cursor-hover"
                                            onClick={handleLanguageChange}
                                        >
                                            عربي
                                        </span>
                                        <Link className="main-btn" href="/contact/en">
                                            {headerInfo.buttonTextEn}
                                        </Link>

                                        <div
                                            onClick={(e) => action(e)}
                                            className="toggle-btn ml-30 canvas_open d-lg-none d-block"
                                        >
                                            <img
                                                src="/icons/bar.svg"
                                                alt="logo"
                                                width="32"
                                                height="18"
                                            />
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
