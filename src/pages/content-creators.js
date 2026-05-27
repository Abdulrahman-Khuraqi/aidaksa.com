/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import { useIntl } from 'react-intl';
import Head from 'next/head';
import useToggle from '@/Hooks/useToggle.js';
import Footer from '@/components/Footer/index.js';
import FormToSheet from '@/components/FormToSheet/ai.js';
import HeaderPhoneTwo from '@/components/Header/HeaderPhoneTwo.js';
import HeaderTwo from '@/components/Header/HeaderTwo.js';
import ContentPromotion from '@/components/ContentPromotion/index.js';
import { useLanguage } from '@/contexts/LanguageContext';

const ContentCreators = ({langUrl}) => {
    const { formatMessage } = useIntl();
    const { isArabic, handleLanguageChange } = useLanguage();
    const [drawer, drawerAction] = useToggle(false);

    return (
        <div>
            <Head>
                <title>{formatMessage({ id: 'pageTitle', defaultMessage: 'ايدا | فريق صانعي المحتوى' })}</title>
                <meta name="description" content={formatMessage({ id: 'pageDescription', defaultMessage: 'تواصل معنا' })} />
            </Head>
            <HeaderTwo
            langUrl={langUrl}
                langEnabled="true"
                action={drawerAction}
                className={isArabic ? "header-area-rtl" : ""}
            />
            {/* <HeaderPhoneTwo drawer={drawer} action={drawerAction.toggle} /> */}
            <ContentPromotion />
            <FormToSheet />
            <Footer />
        </div>
    );
};

export default ContentCreators;
