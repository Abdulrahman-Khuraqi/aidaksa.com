/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import ScrollAnimation from 'react-animate-on-scroll';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import { useIntl } from 'react-intl';
import ClientsInfo from '../../assets/data/clients.json';
import contactInfo from '../../assets/data/contactInfo.json';
import styles from '../styles.module.css';
import Image from 'next/image';

function Clients() {
  const { formatMessage } = useIntl();

  return (
    <div id="clients" className="container">
      <div className={styles.clients}>
        <div className=" ">
          <ScrollAnimation
            animateOnce
            animateIn="fadeInUp"
            animateOut="fadeInUp"
            delay={300}
            duration={0.8}
          >
            <div className={styles.titleBox}>
              <h2 className={styles.clients__title}>{formatMessage({ id: 'clientsTitle' })}</h2>
              <div className={styles.clients__titleBackground} />
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce
            animateIn="fadeIn"
            duration="0.2"
            animateOut="fadeInUp"
          >
            <Swiper
              dir="rtl"
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              spaceBetween={0}
              slidesPerView={4}
              modules={[Autoplay]}
              breakpoints={{
                200: {
                  slidesPerView: 1,
                },
                700: {
                  slidesPerView: 3,
                },
                1100: {
                  slidesPerView: 4,
                },
              }}
            >
              {ClientsInfo.map((item) => (
                <SwiperSlide key={item.id}>
                  <div key={item.id} className={styles.clientsInner}>
                    <Image
                      className={styles.groupChild2}
                      alt="logo"
                      width={item.width}
                      height={item.height}
                      src={`/images/clients/${item.id}.svg`}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </ScrollAnimation>
        </div>
        <ScrollAnimation animateOnce animateIn="zoomIn" duration={1.2}>
          <a className="btn-line  mt-50" href={contactInfo.whatsapplink}>
            {formatMessage({ id: 'clientsButtonText' })}
          </a>
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default Clients;
