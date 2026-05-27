// pages/index.js
import React from "react";
import Head from "next/head";
import { useIntl } from "react-intl";
import useToggle from "@/Hooks/useToggle";

import Aboutus from "@/components/home/Aboutus";
import CallToAction from "@/components/home/CallToAction";
import Estore from "@/components/home/Estore";
import Footer from "@/components/Footer";
import FooterInfo from "@/components/home/FooterInfo";
import Header from "@/components/home/Header";
import HeaderPhone from "@/components/home/HeaderPhone";
import Whatsapp from "@/components/home/Whatsapp";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Clients from "@/components/home/Clients";
import Reviews from "@/components/Reviews";
import Blog from "@/components/Blog";
import Aida from "@/components/Aida";

const Home = ({ langUrl, toggleLanguage }) => {
  const { formatMessage } = useIntl();
  const [drawer, toggleMenu] = useToggle(false);

  return (
    <>
      <Head>
        <title>{formatMessage({ id: "HeadTitle" })}</title>
        <meta
          name="description"
          content={formatMessage({ id: "HeadDescription" })}
        />
      </Head>
      <HeaderPhone
        drawer={drawer}
        action={toggleMenu}
        langUrl={langUrl}
        toggleLanguage={toggleLanguage}
      />
      <Header
        action={toggleMenu}
        langUrl={langUrl}
        toggleLanguage={toggleLanguage}
      />
      <Hero />
      <Aida />
      <Aboutus />
      <Services langUrl={langUrl} />
      {/* <Estore langUrl={langUrl} toggleLanguage={toggleLanguage} /> */}
      <Clients />
      <Reviews />
      <CallToAction />
      <Blog langUrl={langUrl} />
      <FooterInfo />
      <Footer />
      <Whatsapp />
    </>
  );
};

export default Home;
