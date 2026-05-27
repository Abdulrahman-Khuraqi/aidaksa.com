import React from 'react';
import { useIntl } from 'react-intl';

function Hero({ className }) {
  const { formatMessage } = useIntl();

  return (
    <div className='hero_background '>
      <section className={`hero-area ${className || ''} container`} id='home'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-12'>
              <div className='hero-content formpage-content'>
                <h1 className='title display-1 fw-bolder'>
                  {formatMessage({ id: 'BoostSalesHeroTitle' })}
                </h1>

                <p>
                  {formatMessage({ id: 'BoostSalesHeroParagraph1' })}
                </p>
                <p className='mt-2'>
                  {formatMessage({ id: 'BoostSalesHeroParagraph2' })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
