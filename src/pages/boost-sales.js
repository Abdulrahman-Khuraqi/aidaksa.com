/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Head from 'next/head';
import { useIntl } from 'react-intl';
import useToggle from '@/Hooks/useToggle.js';
import Footer from '@/components/Footer/index.js';
import FormInfo from '@/components/Form/FormInfo.js';
import HeaderPhoneTwo from '@/components/Header/HeaderPhoneTwo.js';
import HeaderTwo from '@/components/Header/HeaderTwo.js';
import Hero from '@/components/Form/Hero.js';

const BoostSales = ({langUrl}) => {
  const { formatMessage } = useIntl();
  const [drawer, drawerAction] = useToggle(false);

  return (
    <div className=''>
      <Head>
        <title>{formatMessage({ id: 'BoostSalesTitle' })}</title>
        <meta
          name='description'
          content={formatMessage({ id: 'BoostSalesDescription' })}
        />
      </Head>
      <HeaderTwo
       langUrl={langUrl} 
       action={drawerAction}
       className='header-area-rtl'
      />
      <HeaderPhoneTwo  langUrl={langUrl}  drawer={drawer} action={drawerAction} />
      <Hero />
      <FormInfo />
      <Footer />
    </div>
  );
};

export default BoostSales;
