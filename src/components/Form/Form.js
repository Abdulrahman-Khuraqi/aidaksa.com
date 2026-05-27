import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import styles from '../styles.module.css';
import Image from 'next/image';

function Required() {
    return (
        <div className="container mt-40" id="aboutus">
            <div className={styles.required}>
                <ScrollAnimation animateIn="fadeIn" duration=".8" animateOnce>
                    <div className={styles.required__titleBox}>
                        <h2 className={styles.required__title}>متطلبات الانضمام</h2>
                    </div>{' '}
                </ScrollAnimation>
                <ScrollAnimation animateOnce animateIn="fadeInUp" duration=".8">
                    <div className={styles.required__description}>
                        <ul>
                            <li className={styles.required__listitem}>
                                <Image
                                    className={styles.required__icon}
                                    src='../../images/icons/check.svg'
                                    width="30"
                                    height="30"
                                    alt="Check"
                                />
                                مبيعات المتجر لا تقل عن 60 الف ريال شهرياً
                            </li>
                            <li className={styles.required__listitem}>
                                <Image
                                    className={styles.required__icon}
                                    src='../../images/icons/check.svg'
                                    width="30"
                                    height="30"
                                    alt="right"
                                />
                                ان لا يكون المتجر يعمل بنظام دروب شوبينق{' '}
                            </li>

                            <li className={styles.required__listitem}>
                                <Image
                                    className={styles.required__icon}
                                    src='../../images/icons/check.svg'
                                    width="30"
                                    height="30"
                                    alt="right"
                                />
                                تخصيص ميزانية إعلانية لا تقل عن 10000 ريال
                            </li>
                            <li className="pt-2">
                                في حال كنتم موافقين للشروط أعلاه فالرجاء ملئ البيانات المطلوبة وسيتم
                                التواصل معكم بأقرب وقت ممكن.
                            </li>
                        </ul>
                    </div>{' '}
                </ScrollAnimation>{' '}
            </div>
        </div>
    );
}

export default Required;
