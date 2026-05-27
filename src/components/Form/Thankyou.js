/* eslint-disable react/button-has-type */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ThankYou.module.css';
import ThankYouSvg from './thank-you.svg';

function ThankYou() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <img src={ThankYouSvg} alt="Thank You" className={styles.image} />
                <h2 className={styles.title}>شكرًا لتقديمك المعلومات!</h2>
            </div>
            <p className={styles.text}>نحن نقدر تعاونك وسنعود إليك في أقرب وقت ممكن.</p>
            <Link className="btn-submit main-btn primary-color font-weight-bolder" to="/">
                العودة إلى الصفحة الرئيسية
            </Link>
        </div>
    );
}

export default ThankYou;
