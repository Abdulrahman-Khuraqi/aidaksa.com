import React from 'react';
import { useIntl } from 'react-intl';
import ScrollAnimation from 'react-animate-on-scroll';
import Image from 'next/image';
import Head from 'next/head';
import { motion } from 'framer-motion';
import HeaderTheme2 from '@/components/Header/HeaderTheme2.js';
import BlogsAll from '@/components/Blog/BlogsAll.js';
import useToggle from '@/Hooks/useToggle.js';
import CallToAction from '@/components/home/CallToAction';
import FooterInfo from '@/components/FooterInfo/FooterInfoTwo.js';
import Footer from '@/components/Footer';
import HeaderPhoneTwo from '@/components/Header/HeaderPhoneTwo.js';
import styles from '@/components/Blog/blog.module.css';

const Blog = ({langUrl}) => {
  const { formatMessage } = useIntl();
  const [drawer, drawerAction] = useToggle(false);

  const titleAnimation = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  return (
    <div>
      <Head>
        <title>{`${formatMessage({ id: 'defaultTitle' })} - ${formatMessage({ id: 'agencyName' })}`}</title>
        <meta name='description' content={formatMessage({ id: 'metaDescription' })} />
      </Head>
      <HeaderTheme2
        langUrl={langUrl}
        langEnabled='true'
        action={drawerAction}
        className='header-area-rtl'
      />
      <HeaderPhoneTwo lang drawer={drawer} action={drawerAction} />
      <div>
        <motion.div
          variants={titleAnimation}
          initial='hidden'
          animate='visible'
          className={styles.titleBox}
        >
          <Image
            src='/icons/blog.svg'
            alt={formatMessage({ id: 'blogIconAlt' })}
            width='40'
            height='37'
          />
          <h1 className={styles.title}>{formatMessage({ id: 'allArticles' })}</h1>
          <div className={styles.titleBackground}></div>
        </motion.div>
      </div>
      <BlogsAll langUrl={langUrl} />
    <CallToAction />
      <FooterInfo langUrl={langUrl} />
      <Footer />
    </div>
  );
};

export default Blog;
