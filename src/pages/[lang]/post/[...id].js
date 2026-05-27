// pages/[lang]/post/[...id].js
import React from 'react';
import { useIntl } from 'react-intl';
import Head from 'next/head';
import { useRouter } from 'next/router';
import HeaderTheme2 from '@/components/Header/HeaderTheme2.js';
import useToggle from '@/Hooks/useToggle';
import CallToAction from '@/components/home/CallToAction';
import FooterInfo from '@/components/FooterInfo/FooterInfoBlog.js';
import Footer from '@/components/Footer/FooterBlog.js';
import BlogPost from '@/components/Blog/BlogPost.js';
import PostsSuggestion from '@/components/Blog/PostsSuggestion.js';
import HeaderPhoneTwo from '@/components/Header/HeaderPhoneTwo.js';

const Post = ({ post, langUrl }) => {
  const { formatMessage } = useIntl();
  const [drawer, drawerAction] = useToggle(false);

  return (
    <div>
      <Head>
        <title>
          {post ? post.title : formatMessage({ id: 'defaultTitle', defaultMessage: 'مقالات' })} - ايدا - وكالة تسويق
        </title>
        <meta name="description" content={formatMessage({ id: 'metaDescription', defaultMessage: 'مقالات ايدا للتسويق الرقمي' })} />
      </Head>
      <HeaderTheme2
        langUrl={langUrl}
        langEnabled='true'
        action={drawerAction}
        className={langUrl === 'en' ? 'header-area-ltr' : 'header-area-rtl'}
      />
      <HeaderPhoneTwo langUrl={langUrl} drawer={drawer} action={drawerAction} />
      <div className='container mt-200'>
        <div className='row'>
          <div className='col-md-8 col-12'>
            {post && <BlogPost post={post} />}
          </div>
          <div className='col-md-4 col-12'>
            <PostsSuggestion langUrl={langUrl}/>
          </div>
        </div>
      </div>
      <CallToAction />
      <FooterInfo langUrl={langUrl}/>
      <Footer />
    </div>
  );
};

export default Post;

export async function getStaticProps({ params }) {
  // طباعة قيمة params للتأكد من القيم المستلمة
  console.log('Received params:', params);

  // افترضنا أن langUrl تم تمريره كـ param في المسار
  const lang = params.lang === 'en' ? 'en' : 'ar'; // استخدم اللغة الافتراضية إذا لم تكن محددة
  const data = await import(`@/../public/assets/data/posts-${lang}.json`);
  const post = data.posts.find((post) => post.id.toString() === params.id[0]);
  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post,
    },
  };
}


export async function getStaticPaths() {
  const dataAr = await import('@/../public/assets/data/posts-ar.json');
  const dataEn = await import('@/../public/assets/data/posts-en.json');

  const pathsAr = dataAr.posts.map((post) => ({
    params: { lang: 'ar', id: [post.id.toString(), post.slug] },
  }));

  const pathsEn = dataEn.posts.map((post) => ({
    params: { lang: 'en', id: [post.id.toString(), post.slug] },
  }));

  return {
    paths: [...pathsAr, ...pathsEn],
    fallback: false,
  };
}
