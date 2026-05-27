import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import useToggle from '@/Hooks/useToggle';
import Header from '@/components/home/Header';
import HeaderPhone from '@/components/home/HeaderPhone';
import FooterInfo from '@/components/home/FooterInfo';
import Footer from '@/components/home/Footer';
import Whatsapp from '@/components/home/Whatsapp';
import styles from '@/styles/BrandGuide.module.css';
import { useLanguage } from '@/contexts/LanguageContext';

import logoBlack from '@/assets/images/logo/logo.svg';
import logoWhite from '@/assets/images/logo/logo-white.svg';
import heroBg from '@/assets/images/bg/hero-background.svg';
import heroBgAlt from '@/assets/images/bg/hero-background2.svg';

function cssVar(name, fallback) {
  return `var(${name}, ${fallback})`;
}

function assetUrl(asset) {
  return typeof asset === 'string' ? asset : asset?.src || '';
}

export default function BrandGuide({ langUrl, toggleLanguage }) {
  const { isArabic } = useLanguage();
  const [drawer, toggleMenu] = useToggle(false);

  const title = isArabic ? 'دليل الهوية البصرية' : 'Brand Guidelines';
  const subtitle = isArabic
    ? 'صفحة داخلية لمراجعة ألوان وخطوط وخلفيات وهوية البراند بسرعة.'
    : 'Internal page to quickly review brand colors, type, backgrounds, and logo usage.';

  const swatches = [
    {
      name: isArabic ? 'اللون الأساسي' : 'Primary',
      value: '--primary-color',
      fallback: '#51be9b',
    },
    {
      name: isArabic ? 'الأساسي (غامق)' : 'Primary (Dark)',
      value: '--color-primary-dark',
      fallback: '#4ca789',
    },
    {
      name: isArabic ? 'الخلفية الأساسية' : 'Background',
      value: '--primary-background',
      fallback: '#F6FCFA',
    },
    {
      name: isArabic ? 'اللون الداكن' : 'Dark',
      value: '--secondary-color',
      fallback: '#121212',
    },
    {
      name: isArabic ? 'نص ثانوي' : 'Muted Text',
      value: '--color-slategray',
      fallback: '#777e90',
    },
    {
      name: isArabic ? 'حدود / فواصل' : 'Borders',
      value: '--color-gainsboro',
      fallback: '#e6e8ec',
    },
  ];

  const fontBody = cssVar('--font-body', "'Tajawal', sans-serif");
  const fontHero = cssVar('--font-hero', "'Tajawal', sans-serif");

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="robots" content="noindex,nofollow" />
      </Head>

      <HeaderPhone
        drawer={drawer}
        action={toggleMenu}
        langUrl={langUrl}
        toggleLanguage={toggleLanguage}
      />
      <Header action={toggleMenu} langUrl={langUrl} toggleLanguage={toggleLanguage} />

      <main className={styles.page}>
        <div className="container">
          <div className={styles.titleRow}>
            <div>
              <h1 className={styles.title}>{title}</h1>
              <p className={styles.subtitle}>{subtitle}</p>
            </div>
            <div className={styles.pillRow}>
              <span className={styles.pill}>
                <span>{isArabic ? 'الاتجاه' : 'Direction'}</span>
                <strong>{isArabic ? 'RTL' : 'LTR'}</strong>
              </span>
              <span className={styles.pill}>
                <span>{isArabic ? 'الخط' : 'Font'}</span>
                <strong style={{ fontFamily: fontBody }}>{isArabic ? 'Tajawal' : 'Tajawal'}</strong>
              </span>
            </div>
          </div>

          <div className={styles.grid}>
            <section className={`${styles.card} ${styles.cardHalf}`}>
              <h2 className={styles.cardTitle}>{isArabic ? 'اللوجو' : 'Logo'}</h2>
              <div className={styles.logoRow}>
                <div className={styles.logoBox} aria-label="logo on light">
                  <Image src={logoBlack} alt="Aida logo" width={160} height={60} />
                </div>
                <div className={`${styles.logoBox} ${styles.logoBoxDark}`} aria-label="logo on dark">
                  <Image src={logoWhite} alt="Aida logo white" width={160} height={60} />
                </div>
              </div>
            </section>

            <section className={`${styles.card} ${styles.cardHalf}`}>
              <h2 className={styles.cardTitle}>{isArabic ? 'معلومات البراند' : 'Brand info'}</h2>
              <div className={styles.typeRow}>
                <div className={styles.fontSample}>
                  <div className={styles.sampleLabel}>{isArabic ? 'اسم البراند' : 'Brand name'}</div>
                  <p className={styles.sampleText} style={{ fontFamily: fontHero }}>
                    {isArabic ? 'وكالة آيدا للتسويق' : 'Aida Marketing'}
                  </p>
                </div>
                <div className={styles.fontSample}>
                  <div className={styles.sampleLabel}>{isArabic ? 'جملة تعريفية قصيرة' : 'Tagline'}</div>
                  <p className={styles.sampleText} style={{ fontFamily: fontBody, fontSize: 16 }}>
                    {isArabic
                      ? 'تسويق رقمي يركز على النمو ونتائج قابلة للقياس.'
                      : 'Digital marketing focused on growth and measurable results.'}
                  </p>
                </div>
              </div>
            </section>

            <section className={`${styles.card} ${styles.cardThird}`}>
              <h2 className={styles.cardTitle}>{isArabic ? 'الألوان' : 'Colors'}</h2>
              <div className={styles.swatches}>
                {swatches.map((s) => (
                  <div className={styles.swatch} key={s.value}>
                    <div
                      className={styles.swatchColor}
                      style={{ background: cssVar(s.value, s.fallback) }}
                    />
                    <div className={styles.swatchMeta}>
                      <div className={styles.metaName}>{s.name}</div>
                      <div className={styles.metaValue}>{`var(${s.value})`}</div>
                      <div className={styles.metaValue}>{s.fallback}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className={`${styles.card} ${styles.cardThird}`}>
              <h2 className={styles.cardTitle}>{isArabic ? 'الخطوط' : 'Fonts'}</h2>
              <div className={styles.typeRow}>
                <div className={styles.fontSample}>
                  <div className={styles.sampleLabel}>
                    {isArabic ? 'النص الأساسي' : 'Body'}
                    <span className={styles.metaValue} style={{ marginInlineStart: 8 }}>
                      {`var(--font-body)`}
                    </span>
                  </div>
                  <p className={styles.sampleText} style={{ fontFamily: fontBody }}>
                    {isArabic
                      ? 'هذا مثال لنص عربي باستخدام الخط الأساسي.'
                      : 'This is a sample sentence using the body font.'}
                  </p>
                </div>

                <div className={styles.fontSample}>
                  <div className={styles.sampleLabel}>
                    {isArabic ? 'الهيرو / العناوين' : 'Hero / Headings'}
                    <span className={styles.metaValue} style={{ marginInlineStart: 8 }}>
                      {`var(--font-hero)`}
                    </span>
                  </div>
                  <p className={styles.sampleText} style={{ fontFamily: fontHero, fontSize: 24 }}>
                    {isArabic ? 'عنوان تجريبي' : 'Sample Heading'}
                  </p>
                </div>
              </div>
            </section>

            <section className={`${styles.card} ${styles.cardThird}`}>
              <h2 className={styles.cardTitle}>{isArabic ? 'الخلفيات' : 'Backgrounds'}</h2>
              <div className={styles.bgRow}>
                <div className={styles.bgCard}>
                  <div
                    className={styles.bgPreview}
                    style={{
                      backgroundImage: `url(${assetUrl(heroBg)})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <span className={styles.pill}>{isArabic ? 'خلفية هيرو' : 'Hero bg'}</span>
                  </div>
                  <div className={styles.bgMeta}>
                    <div className={styles.metaName}>{isArabic ? 'ملف' : 'File'}</div>
                    <div className={styles.metaValue}>`src/assets/images/bg/hero-background.svg`</div>
                  </div>
                </div>

                <div className={styles.bgCard}>
                  <div
                    className={styles.bgPreview}
                    style={{
                      backgroundImage: `url(${assetUrl(heroBgAlt)})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <span className={styles.pill}>{isArabic ? 'خلفية بديلة' : 'Alt bg'}</span>
                  </div>
                  <div className={styles.bgMeta}>
                    <div className={styles.metaName}>{isArabic ? 'ملف' : 'File'}</div>
                    <div className={styles.metaValue}>`src/assets/images/bg/hero-background2.svg`</div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <FooterInfo />
      <Footer />
      <Whatsapp />
    </>
  );
}

