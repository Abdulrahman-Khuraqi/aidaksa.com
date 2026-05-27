/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import { useIntl } from 'react-intl';
import useToggle from '@/Hooks/useToggle';
import Footer from '@/components/Footer';
import FormInfo from '@/components/mediabuyer/FormInfo';
import HeaderPhoneTwo from '@/components/Header/HeaderPhoneTwo';
import HeaderTwo from '@/components/Header/HeaderTwo';
import Hero from '@/components/mediabuyer/Hero';
import Campaign from '@/components/mediabuyer/Campaign';

import Head from 'next/head';

const MediaBuying = ({langUrl}) => {
  const { formatMessage } = useIntl();
  const [drawer, drawerAction] = useToggle(false);

  return (
    <div className=''>
      <Head>
        <title>{formatMessage({ id: 'mediaBuyer.pageTitle', defaultMessage: 'ايدا | Media Buying' })}</title>
        <meta
          name='description'
          content={formatMessage({ id: 'mediaBuyer.pageDescription', defaultMessage: 'Media Buying - إدارة اعلاناتك بالشكل الصحيح' })}
        />
      </Head>
      <HeaderTwo
        langUrl={langUrl}
        langEnabled='true'
        action={drawerAction}
        className='header-area-rtl'
      />
      <HeaderPhoneTwo langUrl={langUrl} drawer={drawer} action={drawerAction} />
      <Hero />
      <Campaign />
      <FormInfo />
      <Footer />
    </div>
  );
};

export default MediaBuying;