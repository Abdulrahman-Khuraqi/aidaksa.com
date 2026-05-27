import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { useIntl } from 'react-intl';
import contactInfo from '../../assets/data/contactInfo.json';
import styles from '../styles.module.css';

function CallToAction() {
  const { formatMessage } = useIntl();

  return (
    <div className="container">
      <div className={styles.callToAction} id="calltoaction">
        <div className={styles.contactUsParent}>
          <ScrollAnimation
            animateOnce
            animateIn="fadeIn"
            animateOut="fadeIn"
            delay="300"
            duration=".8"
          >
            <div className={styles.contactUs}>
              {formatMessage({ id: 'callToActionQuestion' })}
            </div>
          </ScrollAnimation>

          <ScrollAnimation animateOnce animateIn="fadeIn" animateOut="fadeIn" duration=".8">
            <b className={styles.letsSolveYourContainer}>
              <p className={styles.callToAction__title}>{formatMessage({ id: 'callToActionTitle1' })}</p>
              <p className={styles.callToAction__title}>{formatMessage({ id: 'callToActionTitle2' })}</p>
            </b>
          </ScrollAnimation>
        </div>
        <ScrollAnimation
          animateOnce
          animateIn="fadeInUp"
          animateOut="fadeInUp"
          delay="300"
          duration="1"
        >
          <div className={styles.stacksIsA}>
            {formatMessage({ id: 'callToActionDescription' })}
          </div>
        </ScrollAnimation>
        <div>
          <ScrollAnimation animateOnce animateIn="zoomIn" delay="400" duration="1.2">
            <a
              rel="noreferrer"
              target="_blank"
              className="main-btn primary-color font-weight-bolder mt-50"
              href={contactInfo.whatsapplink}
            >
              {formatMessage({ id: 'callToActionButtonText' })}
            </a>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
