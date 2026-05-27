/* eslint-disable global-require */
import contactInfo from '../../assets/data/contactInfo.json';
import styles from './footer.module.css';
import Image from 'next/image';
import { useIntl } from 'react-intl'; // استيراد useIntl

function Footer() {
  const { formatMessage } = useIntl(); // استخدام useIntl
  const pdf = "commercial-register";

  return (
    <div className={styles.footer} id='footer'>
      <div className='container text-center'>
        <div className='row'>
          <div className='col-12'>
            <div className={styles.footer__icons}>
              <a
                rel='noreferrer'
                target='_blank'
                aria-label='instagram'
                href={contactInfo.instagram}
              >
                <Image
                  width='20'
                  height={20}
                  className={styles.footer__icon}
                  alt='instagram'
                  src={'/../images/icons/instagram.svg'}
                />
              </a>
              <a
                rel='noreferrer'
                aria-label='x'
                target='_blank'
                href={contactInfo.twitter}
              >
                <Image
                  width='20'
                  height={20}
                  className={styles.footer__icon}
                  alt='x'
                  src={'/../images/icons/x.svg'}
                />
              </a>

              <a
                rel='noreferrer'
                target='_blank'
                aria-label='facebook'
                href={contactInfo.facebook}
              >
                <Image
                  width='20'
                  height={20}
                  className={styles.footer__icon}
                  alt='facebook'
                  src={'/../images/icons/facebook.svg'}
                />
              </a>
              <a
                rel='noreferrer'
                aria-label='linkedin'
                target='_blank'
                href={contactInfo.linkedin}
              >
                <Image
                  width='20'
                  height={20}
                  className={styles.footer__icon}
                  alt='linkedin'
                  style={{ marginBottom: '3px' }}
                  src={'/../images/icons/linkedin.svg'}
                />
              </a>
            </div>
          </div>
          <div className='col-12'>
            <a
              rel='noopener noreferrer'
              target='_blank'
              href={`/assets/pdf/${pdf}.pdf`}
              className={styles.copyright}
            >
              {' '}
              {formatMessage({ id: 'commercial_register' })}
            </a>
          </div>
          <div className='col-12'>
            <div className={styles.copyright}>
              {' '}
              {formatMessage({ id: 'all_rights_reserved' }, { year: 2023, company: 'شركة رواد التواصل للتجارة والتسويق' })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
