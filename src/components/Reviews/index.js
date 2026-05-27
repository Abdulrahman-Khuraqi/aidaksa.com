/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from "react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { useIntl } from "react-intl";
import Image from "next/image";
import style from "./reviews.module.css";

const Reviews = () => {
  const { formatMessage, locale } = useIntl();

  // Import reviews data based on the current locale
  const reviewsData = require(`../../assets/data/reviews-${locale}.json`);

  return (
    <div className="section-gab-top container" id="reviews">
      <div className={style.reviews}>
        <div className={style.titleBox}>
          <h2 className={style.reviewsTitle}>
            {formatMessage({ id: "reviewsTitle" })}
          </h2>
          <div className={style.titleBackground} />
        </div>
        <div className="row justify-content-center">
          <Swiper
            dir={locale === "ar" ? "rtl" : "ltr"}
            className="swiper-padding"
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            spaceBetween={20}
            slidesPerView={2}
            modules={[Pagination, Autoplay]}
            breakpoints={{
              200: {
                slidesPerView: 1,
              },
              700: {
                slidesPerView: 1,
              },
              1100: {
                slidesPerView: 2,
              },
            }}
          >
            {reviewsData.map((review) => (
              <SwiperSlide key={review.id}>
                <div className={style.review__container}>
                  <Image
                    className={style.quoteimage}
                    src={"/images/icons/quote.svg"}
                    width="41"
                    height="29"
                    alt="quote"
                  />
                  <p className={style.review__paragraph}>
                    {review.description}
                  </p>
                  <div>
                    <div className={style.review__reviewcontainer}>
                      <div className={style.review__imagecontainer}>
                        <Image
                          className="img-fluid h-100"
                          src={`/images/reviews/${review.logourl}`}
                          width={review.width}
                          height={review.height}
                          alt={review.name}
                        />
                      </div>
                      <div className={style.review__nameContainer}>
                        <span className={style.review__name}>
                          {review.name}
                        </span>
                        <span className={style.review__position}>
                          {review.position}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
