import React from 'react';
import { useIntl } from 'react-intl';
import styles from './ContentPromotion.module.css';

const ContentPromotion = () => {
    const { formatMessage } = useIntl();

    return (
        <div className={`${styles.promotionContainer} `}>
            <div className='hero_background '>
                <section className={`hero-area container `}>
                    <div className='row align-items-center'>
                        <div className='col-12'>
                            <div className='hero-content formpage-content'>
                                <h1 className='title display-1 fw-bolder'>
                                    {formatMessage({ id: 'contentPromotion.title', defaultMessage: 'حاب تشتغل على فرصة كبيرة وبراندات رهيبة مع تيم شغفه انه يطورك ؟' })}
                                </h1>
                                <p>
                                    <a href="#contactform" className={styles.heroLink}>
                                        <strong className={styles.heroSubtitle}>
                                            {formatMessage({ id: 'contentPromotion.joinNow', defaultMessage: 'انضم لصانعي محتوى UGC معنا الآن' })}
                                            <span className={styles.arrow}>←</span>
                                        </strong>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className={`container ${styles.whycontainer}`}>
                <h2 className='mb-3'>{formatMessage({ id: 'contentPromotion.whyWorkWithUs', defaultMessage: 'ليه تشتغل معنا؟' })}</h2>
                <ul>
                    <li className={styles.whyWorkWithUsItem}>
                        <strong>{formatMessage({ id: 'contentPromotion.opportunityTitle', defaultMessage: 'فرص عمل رهيبة:' })}</strong> {' '}
                        {formatMessage({ id: 'contentPromotion.opportunityDescription', defaultMessage: 'اعمل مع علامات تجارية رائدة وشارك في مشاريع مبتكرة.' })}
                    </li>
                    <li className={styles.whyWorkWithUsItem}>
                        <strong>{formatMessage({ id: 'contentPromotion.skillsTitle', defaultMessage: 'عزز مهاراتك:' })}</strong> {' '}
                        {formatMessage({ id: 'contentPromotion.skillsDescription', defaultMessage: 'فرينا يهمه انه يطلع اقوى النتايج، وبيعطونك اقوى النصائح عشان تطور من شغلك معنا.' })}
                    </li>
                    <li className={styles.whyWorkWithUsItem}>
                        <strong>{formatMessage({ id: 'contentPromotion.rewardsTitle', defaultMessage: 'مكافآت مالية:' })}</strong> {' '}
                        {formatMessage({ id: 'contentPromotion.rewardsDescription', defaultMessage: 'استمتع بمكافآت مالية مجزية مقابل عملك الإبداعي.' })}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ContentPromotion;
