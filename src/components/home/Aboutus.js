import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { useIntl } from 'react-intl';
import styles from '../styles.module.css';

const Aboutus = () => {
  const { formatMessage } = useIntl();

  const numbersInfo = [
    { id: 1, txtId: 'yearsOfExperience', value: 20 },
    { id: 2, txtId: 'trustedPartners', value: 650 },
    { id: 3, txtId: 'completedProjects', value: 1256 }
  ];

  return (
    <div id='aboutus'>
      <div className='container pt-40'>
        <div className={styles.aboutus}>
          <ScrollAnimation animateIn='fadeIn' duration={0.8} animateOnce>
            <div className={styles.titleBox}>
              <h2 className={styles.title}>
                {formatMessage({ id: 'aboutUsTitle' })}
              </h2>
              <div className={styles.titleBackgroundAbout} />
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateOnce animateIn='fadeIn' duration={0.8}>
            <div className={styles.aboutus__description}>
              {formatMessage({ id: 'aboutUsDescription' })}
            </div>
          </ScrollAnimation>
          <div className={styles.aboutusNumbersBackground}>
            {numbersInfo.map((item) => (
              <div className='col-12 col-sm-4' key={item.id}>
                <div className={styles.numberContent}>
                  <div className={styles.numbercontinar}>
                    <CountUp redraw end={item.value} duration='3'>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <>
                            <div className={styles.number} ref={countUpRef} />
                          </>
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    <div className={styles.number}>+</div>
                  </div>
                  <div className={styles.numberTitle}>
                    {formatMessage({ id: item.txtId })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
