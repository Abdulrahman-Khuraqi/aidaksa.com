import Header from '@/components/Header/HeaderTwo';
import useToggle from '@/components/Header/useToggle';
import TitleSection from '@/components/TitleSection';
import Website from '@/components/portfolio/Website';
import CallToAction from '@/components/home/CallToAction';
import FooterInfo from '@/components/FooterInfo/FooterInfoBlog.js';
import Footer from '@/components/Footer/FooterBlog.js';
import HeaderPhoneTwo from '@/components/Header/HeaderPhoneTwo.js';
import Head from 'next/head';
import Whatsapp from '@/components/home/Whatsapp';

const Portfolio = () => {
  const [lang, setLang] = useToggle(true);
  const [phone, phoneAction] = useToggle(false);
  return (
    <>
      <Head>
        <title> مواقع إلكترونية  | أيدا </title>
        <meta name='description' content='مواقع إلكترونية | أيدا ' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='container mt-100'>
        <Header
          changeModeLan={setLang.toggle}
          action={phoneAction.toggle}
          lang={lang}
          className='header-area-rtl'
        />
        <HeaderPhoneTwo lang drawer={phone} action={phoneAction.toggle} />

        <TitleSection
          title='مواقع إلكترونية'
          breadcrumb={[
            { title: 'الرئيسية', slug: '/' },
            { title: 'مواقع إلكترونية', slug: '/websites' },
          ]}
        />
        <Website />
      </div>
      <CallToAction />
      <FooterInfo />
      <Footer />
      <Whatsapp />
    </>
  );
};
export default Portfolio;
