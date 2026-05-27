import ScrollAnimation from 'react-animate-on-scroll';
import styles from './mediabuyerpage.module.css';
import React, { useState, useCallback } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import Image from 'next/image';
import { useIntl } from 'react-intl';

function Campaign() {
  const { formatMessage } = useIntl();
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  
  const images = [
    '/images/result-2.png',
    '/images/result-3.png',
    '/images/result-4.png',
    '/images/result-5.png',
    '/images/result-6.png',
    '/images/result-7.png',
    '/images/result-8.png',
    '/images/result-9.png',
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);
  
  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div className={styles.CampaignContainer}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 col-12 y-margin-auto'>
            <div className={styles.TextContainer}>
              <ScrollAnimation
                animateOnce
                animateIn='fadeInUp'
                animateOut='fadeInUp'
                delay='200'
                duration='.8'
              >
                <h1 className={styles.title}>
                  {formatMessage({ id: 'mediaBuyer.campaignTitle', defaultMessage: 'نتائج حملاتنا' })}
                </h1>
              </ScrollAnimation>
              <ScrollAnimation
                animateOnce
                animateIn='fadeInUp'
                animateOut='fadeInUp'
                delay='300'
                duration='.8'
              >
                <p className='mt-3'>
                  {formatMessage({
                    id: 'mediaBuyer.campaignDescription',
                    defaultMessage: 'أطلقنا عدة حملات إعلانية على مختلف وسائل التواصل الاجتماعي والقنوات الإعلانية لزيادة وعي الجمهور بعدة علامات تجارية وتعزيز مبيعات المنتجات. ونحن فخورون بالنتائج التي حققناها.',
                  })}
                </p>
              </ScrollAnimation>
              <a
                className={styles.buttonHero}
                rel='noopener noreferrer'
                target='_blank'
                href={`/assets/pdf/marketing.pdf`}
              >
                <img
                  className='me-2'
                  src='/icons/view.svg'
                  width='19'
                  height='14'
                  alt='eye'
                />
                {formatMessage({ id: 'mediaBuyer.viewResultsButton', defaultMessage: 'عرض النتائج' })}
              </a>
            </div>
          </div>
          <div className='col-md-6 col-12'>
            <ScrollAnimation
              animateOnce
              animateIn='fadeInUp'
              animateOut='fadeInUp'
              delay='0'
              duration='.8'
            >
              <div className={styles.imageContainer}>
                <Image
                  src={`/images/result-01.png`}
                  width='457'
                  height='407'
                  style={{ height: 'auto' }}
                  alt='estore'
                  className={styles.imageResult}
                />
                <div className={styles.backgroundImage}></div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Campaign;