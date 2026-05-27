import React from 'react';
import { useIntl } from 'react-intl';
import contactInfo from '../../assets/data/contactInfo.json';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = ({ className }) => {
  const { formatMessage } = useIntl();

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
  const opacityAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };
  const buttonAnimation = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9],
        opacity: {
          delay: 0.5,
          duration: 0.8,
          ease: [0.6, 0.05, 0.01, 0.9],
        },
      },
    },
  };

  return (
    <div className='hero_background' id='home'>
      <div id='home'>
        <section className={`hero-area ${className || ''} container`}>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-lg-6'>
                <div className='hero-content'>
                  <motion.h1
                    variants={titleAnimation}
                    initial='hidden'
                    animate='visible'
                    className='title display-1 fw-bolder'
                  >
                    {formatMessage({ id: 'heroTitle' })}
                    <span className='color-primary'>{formatMessage({ id: 'heroSubtitle' })}</span>
                  </motion.h1>
                  <motion.p
                    variants={opacityAnimation}
                    initial='hidden'
                    animate='visible'
                  >
                    {formatMessage({ id: 'heroDescription' })}
                  </motion.p>
                  <motion.a
                    rel='noreferrer'
                    target='_blank'
                    href={contactInfo.whatsapplink}
                    variants={buttonAnimation}
                    initial='hidden'
                    animate='visible'
                    className='main-btn btn-hero mt-5'
                  >
                    {formatMessage({ id: 'heroButtonText' })} <span className="arrow">{'>>'}</span>
                  </motion.a>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='hero-thumb'>
                  <motion.div
                    variants={titleAnimation}
                    initial='hidden'
                    animate='visible'
                    className='thumb'
                  >
                    <Image
                      className='hero__image'
                      width='400'
                      height='463'
                      src={`/images/hero/webp/hero-2.webp`}
                      alt='rocket'
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
