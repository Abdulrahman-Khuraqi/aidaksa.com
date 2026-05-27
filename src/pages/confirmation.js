/* eslint-disable react/button-has-type */
import React from 'react';
import Link from 'next/link';
import styles from '../styles/ThankYou.module.css';
import Head from 'next/head';

function ThankYou() {
    return (
        <>
        <Head>
        <title>شكرا لك | ايدا وكالة تسويق</title>
        <meta name="description" content="شكرا لك لتقديم المعلومات ايدا لخدمات التسويق الإلكتروني" />
        </Head>
        <div className={styles.container}>
            <div className={styles.header}>
                <img src='../../thank-you.svg' alt="Thank You" className={styles.image} />
                <h2 className={styles.title}>شكرًا لتقديمك المعلومات!</h2>
            </div>
            <p className={styles.text}>نحن نقدر تعاونك وسنعود إليك في أقرب وقت ممكن.</p>
            <Link className="btn-submit main-btn primary-color font-weight-bolder" href="/">
                العودة إلى الصفحة الرئيسية
            </Link>
        </div></>
    );
}

export default ThankYou;
