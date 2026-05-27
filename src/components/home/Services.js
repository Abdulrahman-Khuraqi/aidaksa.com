/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import { useEffect, useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { useIntl } from 'react-intl';
import styles from '../styles.module.css';
import Image from 'next/image';
import Link from 'next/link';
import serviceInfoAr from '../../locales/ar/services.json'; // Import Arabic services data
import serviceInfoEn from '../../locales/en/services.json'; // Import English services data

const Services = ({langUrl}) => {
  const { formatMessage, locale } = useIntl();
  const [deviceWidth, setDeviceWidth] = useState(0);
  useEffect(() => {
    setDeviceWidth(window.innerWidth);
  }, [deviceWidth]);

  const serviceInfo = locale === 'ar' ? serviceInfoAr : serviceInfoEn; // Select the appropriate language data

  return (
    <div id='services'>
      <div className='container pt-40'>
        <div className={styles.services}>
          <ScrollAnimation animateOnce animateIn='fadeIn' duration='.8'>
            <div className={styles.titleBox}>
              <h2 className={styles.services_title}>{serviceInfo.title}</h2>
              <div className={styles.titleBackgroundLight} />
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateOnce animateIn='fadeInUp' duration='.8'>
            <div className={styles.services_description}>
              {serviceInfo.description}
            </div>
          </ScrollAnimation>
          <div className='row justify-content-center'>
            {serviceInfo.services.map((item) => (
              <div className='col-lg-4 col-md-4 col-12 p-sm-x-5' key={item.id}>
                <div className={styles.service_item}>
                  <ScrollAnimation animateOnce animateIn='zoomIn' duration='.8'>
                    <Image
                      className={styles.service_icon}
                      alt='service'
                      width={item.width}
                      height={item.height}
                      src={`/images/services/webp/service-${item.icon}.webp`}
                    />
                  </ScrollAnimation>
                  <ScrollAnimation
                    animateOnce
                    animateIn='fadeInUp'
                    duration='.8'
                  >
                    <h3 className={styles.service_title}>{item.title}</h3>
                  </ScrollAnimation>
                  <ScrollAnimation
                    animateOnce
                    animateIn='fadeInUp'
                    duration='.8'
                  >
                    {deviceWidth < 370 && (
                      <div className={styles.service_description}>
                        {item.descriptionAll}
                      </div>
                    )}
                    {deviceWidth > 1199 && (
                      <div className={styles.service_description}>
                        {item.description}
                      </div>
                    )}
                    {deviceWidth < 1199 && deviceWidth > 370 && (
                      <div className={styles.service_description}>
                        {item.descriptionPhone}
                      </div>
                    )}
                  </ScrollAnimation>
                  <ScrollAnimation
                    animateOnce
                    animateIn='fadeInUp'
                    duration='.8'
                    className={styles.button__containr}
                  >
                    {item.pdf !== '' && (
                      <a
                        rel='noopener noreferrer'
                        target='_blank'
                        className={styles.button__more}
                        href={`assets/pdf/${item.pdf}.pdf`}
                      >
                        {formatMessage({ id: 'learnMore' })} <span>&raquo;</span>
                      </a>
                    )}
                    {item.link !== '' && (
                      <Link className={styles.button__more} href={`${langUrl}${item.link}`}>
                        {formatMessage({ id: 'learnMore' })} <span>&raquo;</span>
                      </Link>
                    )}
                  </ScrollAnimation>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
