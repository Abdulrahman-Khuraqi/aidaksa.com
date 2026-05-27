/* eslint-disable global-require */
import React from 'react';
import contactInfo from '../../../public/assets/data/contactInfo.json';
import styles from './footer.module.css';

function Footer() {
    return (
        <div className={styles.footer} id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className={styles.copyright2021}>
                            {' '}
                            جميع الحقوق محفوظة © 2023  شركة أعراب المشاريع للمقاولات
                        </div>
                    </div>
                    {/* <div className="col-md-4 col-12">
                        <div className={styles.footer__icons}>
                            <a rel="noreferrer" target="_blank" href={contactInfo.instagram}>
                                <img
                                    className={styles.footer__icon}
                                    alt=""
                                    src={require('../../assets/images/icons/instagram.svg').default}
                                />
                            </a>
                            <a rel="noreferrer" target="_blank">
                                <img
                                    className={styles.footer__icon}
                                    alt=""
                                    src={require('../../assets/images/icons/twitter.svg').default}
                                />
                            </a>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Footer;
