import React from 'react';
import { useIntl } from 'react-intl';
import { scroller } from 'react-scroll';
import Slider from 'react-slick';
import ScrollAnimation from 'react-animate-on-scroll';
import styles from './mediabuyerpage.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero = ({ className }) => {
  const { formatMessage } = useIntl();

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      smooth: true,
      spy: true,
      duration: 250,
    });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    rtl: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const icons = [
    'snapchat',
    'x',
    'gads',
    'meta',
    'tiktok',
    'instagram',
    'google-tag-manager',
    'google-merchant-center',
    'google',
    'google-analytics',
  ];

  return (
    <div className='hero_background'>
      <section className={`hero-area ${className || ''} container`} id='home'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-12'>
              <div className='hero-content center formpage-content'>
                <h1 className='title titlex display-1 fw-bolder'>
                  {formatMessage({ id: 'mediaBuyer.heroTitle', defaultMessage: 'إدارة اعلاناتك بالشكل الصحيح!' })}
                </h1>
                <div className={styles.pcontainer}>
                  <p className='text-center'>
                    {formatMessage({
                      id: 'mediaBuyer.heroDescription1',
                      defaultMessage: 'شركات كثير تغفل عن عنصر جدا مهم بالتسويق والي هو الmedia buying من الضروري يكون عندك مدير إعلانات قوي، فاهم الي يسويه وليش والاهم من هذا انه يقرأ البيانات بالشكل الصحيح ويقدملك نصايح على أساسها!',
                    })}
                  </p>
                  <p className={styles.psecond}>
                    {formatMessage({
                      id: 'mediaBuyer.heroDescription2',
                      defaultMessage: 'احنا في Aida نساعدك في إدارة اعلاناتك بشكل صحيح على جميع المنصات',
                    })}
                  </p>
                  <button
                    type='button'
                    className={styles.buttonHero}
                    onClick={() => scrollToSection('contactform')}
                  >
                    {formatMessage({ id: 'mediaBuyer.contactUsButton', defaultMessage: 'تواصل معنا الآن' })}
                  </button>
                </div>
              </div>
            </div>
            <div className='col-12'>
              <div className={styles.icons}>
                {icons.map((icon) => (
                  <img
                    key={icon}
                    width={49}
                    height={49}
                    src={`/icons/hero/${icon}.svg`}
                    className={styles.icon}
                    alt='icon'
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;