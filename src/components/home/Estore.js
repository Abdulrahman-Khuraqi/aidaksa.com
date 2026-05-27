/* eslint-disable global-require */
import ScrollAnimation from 'react-animate-on-scroll';
import Link from 'next/link';
import styles from '../styles.module.css';
import Image from 'next/image';
import { useIntl } from 'react-intl';

function Estore({ langUrl, toggleLanguage }) {
  const { formatMessage } = useIntl();

  const estoreTitle = formatMessage({ id: 'estoreTitle' });
  const estoreDescription = formatMessage({ id: 'estoreDescription' });
  const estoreButtonText = formatMessage({ id: 'estoreButtonText' });

  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-md-5 col-12">
          <ScrollAnimation
            animateOnce
            animateIn="fadeInUp"
            animateOut="fadeInUp"
            delay="0"
            duration=".8"
          >
            <Image
              src={'/images/e2.webp'}
              width="457"
              height="407"
              style={{ height: 'auto' }}
              alt="estore"
              className="pl-50 estore__image"
            />
          </ScrollAnimation>
        </div>
        <div className="col-md-7 col-12 y-margin-auto">
          <div className={styles.TextContainer}>
            <ScrollAnimation
              animateOnce
              animateIn="fadeInUp"
              animateOut="fadeInUp"
              delay="200"
              duration=".8"
            >
              <h1 className={styles.title}>{estoreTitle}</h1>
            </ScrollAnimation>
            <ScrollAnimation
              animateOnce
              animateIn="fadeInUp"
              animateOut="fadeInUp"
              delay="300"
              duration=".8"
            >
              <p className="mt-3">{estoreDescription}</p>
            </ScrollAnimation>
            <ScrollAnimation
              animateOnce
              animateIn="fadeIn"
              animateOut="fadeIn"
              delay="300"
              duration="1"
            >
              <Link href={`/${langUrl}/boost-sales`} className="main-btn primary-color font-weight-bolder mt-4">
                <b>{estoreButtonText}</b>
              </Link>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Estore;
