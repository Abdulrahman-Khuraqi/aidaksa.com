/* eslint-disable global-require */
import React from 'react';
import { Link } from 'react-router-dom';
import contactInfo from '../../../assets/data/contactInfo.json';
import styles from './footerInfo.module.css';

function FooterInfo() {
    return (
        <div className={styles.footerInfo} id="footerinfo">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-12">
                        <img
                            className={styles.aidaLogoHIcon}
                            alt="aida logo"
                            src="/aida--logoh.svg"
                        />
                        <div className={styles.footerInfo_description}>
                            أيدا للتسويق Aida marketing وكالة تسويق سعودية متخصصة فــي تقـــــديم
                            الخدمات والاسـتـشــــارات في مجالات التسويق الرقمي بأنواعه المختلفة.
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <div className={styles.importantLinks_content}>
                            <div className={styles.importantLinks}>روابط مهمة</div>

                            <div className={styles.importantLink}>
                                <Link offset={0} spy smooth duration={250} to="/#aboutus">
                                    من نحن؟
                                </Link>
                            </div>
                            <div className={styles.importantLink}>
                                <Link offset={0} spy smooth duration={250} to="/#services">
                                    ماذا نقدم؟
                                </Link>
                            </div>
                            <div className={styles.importantLink}>
                                <Link offset={0} spy smooth duration={250} to="/#clients">
                                    عملاءنا
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <b className={styles.importantLinks}>معلومات التواصل</b>

                        <a href={`tel:${contactInfo.phone}`} className={styles.linkBox}>
                            <img
                                width="15"
                                height="15"
                                className={styles.footerinfoicon}
                                alt="phone icon"
                                src={require('../../../assets/images/icons/phone.svg').default}
                            />
                            <div className={styles.contactLink}>{contactInfo.phone}</div>
                        </a>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={contactInfo.whatsapplink}
                            className={styles.linkBox}
                        >
                            <img
                                width="15"
                                height="15"
                                className={styles.footerinfoicon}
                                alt="whatsapp icon"
                                src={require('../../../assets/images/icons/whatsapp.svg').default}
                            />
                            <div className={styles.contactLink}>{contactInfo.whatsapp}+</div>
                        </a>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={`mailto:${contactInfo.email}`}
                            className={styles.linkBox}
                        >
                            <img
                                className={styles.footerinfoicon}
                                alt="email icon"
                                width="15"
                                height="15"
                                src={require('../../../assets/images/icons/email.svg').default}
                            />
                            <div className={styles.contactLink}>{contactInfo.email}</div>
                        </a>
                    </div>{' '}
                </div>
            </div>{' '}
        </div>
    );
}

export default FooterInfo;
