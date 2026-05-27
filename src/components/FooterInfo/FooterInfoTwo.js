/* eslint-disable global-require */
import React from 'react';
import Link from 'next/link';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import contactInfo from '@/assets/data/contactInfo.json';
import styles from './footerInfo.module.css';
import Image from 'next/image';

function FooterInfoTwo({langUrl}) {
    const { formatMessage } = useIntl();
    const router = useRouter();

    const scrollToSection = (section) => {
        if (router.pathname === '/') {
            scroller.scrollTo(section, {
                smooth: true,
                spy: true,
                duration: 250,
            });
        } else {
            router.push(`{langUrl}/#${section}`);
        }
    };

    return (
        <div className={styles.footerInfo} id="footerinfo">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-12">
                        <Image
                            className={styles.aidaLogoHIcon}
                            alt="aida logo"
                            width="125"
                            height={49}
                            src="/images/logo/logo.svg"
                        />
                        <div className={styles.footerInfo_description}>
                            {formatMessage({ id: 'agencyDescription', defaultMessage: 'Aida marketing وكالة تسويق سعودية متخصصة فــي تقـــــديم الخدمات والاسـتـشــــارات في مجالات التسويق الرقمي بأنواعه المختلفة.' })}
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <div className={styles.importantLinks_content}>
                            <div className={styles.importantLinks}>
                                {formatMessage({ id: 'importantLinks', defaultMessage: 'روابط مهمة' })}
                            </div>

                            <div className={styles.importantLink}>
                                <button type="button" onClick={() => scrollToSection('aboutus')}>
                                    {formatMessage({ id: 'aboutUs', defaultMessage: 'من نحن؟' })}
                                </button>
                            </div>
                            <div className={styles.importantLink}>
                                <button type="button" onClick={() => scrollToSection('services')}>
                                    {formatMessage({ id: 'services', defaultMessage: 'ماذا نقدم؟' })}
                                </button>
                            </div>
                            <div className={styles.importantLink}>
                                <button type="button" onClick={() => scrollToSection('clients')}>
                                    {formatMessage({ id: 'clients', defaultMessage: 'عملاءنا' })}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <b className={styles.importantLinks}>
                            {formatMessage({ id: 'contactInfo', defaultMessage: 'معلومات التواصل' })}
                        </b>
                        <div className={styles.linkBox}>
                            <img
                                width="15"
                                height="15"
                                className={styles.footerinfoicon}
                                alt="phone icon"
                                src={'/images/icons/phone.svg'}
                            />
                            <a
                                aria-label={`${contactInfo.phone}`}
                                href={`tel:${contactInfo.phone}`}
                            >
                                <div className={styles.contactLink}>{contactInfo.phone}</div>
                            </a>
                        </div>
                        <div className={styles.linkBox}>
                            <img
                                width="15"
                                height="15"
                                className={styles.footerinfoicon}
                                alt="whatsapp"
                                src={'/images/icons/whatsapp.svg'}
                            />
                            <a
                                aria-label={`${contactInfo.whatsapp}+`}
                                rel="noreferrer"
                                target="_blank"
                                href={contactInfo.whatsapplink}
                            >
                                <div className={styles.contactLink}>{contactInfo.whatsapp}+</div>
                            </a>
                        </div>
                        <div className={styles.linkBox}>
                            <img
                                className={styles.footerinfoicon}
                                alt="email"
                                width="15"
                                height="15"
                                src={'/images/icons/email.svg'}
                            />
                            <a
                                aria-label={`${contactInfo.email}`}
                                rel="noreferrer"
                                target="_blank"
                                href={`mailto:${contactInfo.email}`}
                            >
                                <div className={styles.contactLink}>{contactInfo.email}</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterInfoTwo;
