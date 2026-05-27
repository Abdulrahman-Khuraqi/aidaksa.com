import styles from './website.module.css';
import { useEffect, useState} from 'react';
import Projects from '../../../public/assets/data/projects.json';
import { motion } from 'framer-motion';
import Image from 'next/image';
import LazyImage from '../Lazyimage';

const Website = () => {
  const [isPhoneSize, setIsPhoneSize] = useState(false);
  const moveAnimation = {
    hidden: { opacity: 0, y: +50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  useEffect(() => {
    setIsPhoneSize(window.innerWidth < 767);
  }, [isPhoneSize]);

  return (
      <div className=''>
          
          {Projects.map((item, index) => {  return (
              <motion.div
                key={index}
                viewport={{ once: true, amount: 0.8, margin: '500px' }}
            variants={moveAnimation}
            initial='hidden'
            whileInView='visible'
              >
                  <div className={styles.sectionContainer}>
                    <div
                      className={
                        item.id % 2 === 0
                          ? 
                           'flex-row-reverse row flex-column-reverse flex-md-row' :'flex-md-row-reverse row flex-column-reverse'
                      }
                    >
                      <div className='col-12 col-md-6'>
                        <div className={styles.content}>
                          <strong>{item.categoriear}</strong>
                          <h2>{item.titlear}</h2>
                          <p className='mt-15'>{item.descriptionar}</p>
                          <div>
                            <a
                              target='_blank'
                              rel='noopener noreferrer'
                              href={item.link}
                              className='btn__outline mt-50'
                            >
                              <img
                                className='ml-5'
                                src='/icons/view.svg'
                                width='19'
                                height='14'
                                alt='eye'
                              />
                              عرض المشروع 
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-md-6 '>
                        <LazyImage
                          height='598'
                          ImageNext={Image}
                          blurhash={item.blurhash}
                          width='620'
                          alt='website'
                          className={styles.image}
                          src={isPhoneSize ? `${item.imagephone}1.webp` : item.image}
                        />
                        {/* <Image
                      className={styles.image}
                      height='598'
                      width='620'
                      loading="lazy"
                      alt='website'
                      src={isPhoneSize ? item.imagephone : item.image}
                    /> */}
                      </div>
                    </div>
                  </div>
              </motion.div>
            )})}
      </div>
  );
};

export default Website;
