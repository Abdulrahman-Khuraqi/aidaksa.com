/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import { useIntl } from 'react-intl';
import styles from './blog.module.css';
import BlogCard from './BlogCard';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Blog = ({ langUrl }) => {
  const { formatMessage } = useIntl();
  const BlogsData = require(`../../../public/assets/data/posts-${langUrl === 'en' ? 'en' : 'ar'}.json`);

  const titleAnimation = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  return (
    <div id="blog" className="container">
      <div className={styles.clients}>
        <div className="">
          <div className={styles.titleconatiner}>
            <motion.h2
              initial="hidden"
              animate="visible"
              variants={titleAnimation}
              className={styles.titlewhite}
            >
              {formatMessage({ id: 'latestArticles', defaultMessage: 'أحدث المقالات' })}
            </motion.h2>
            <div className={styles.titleBackgroundLight} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <BlogCard
              langUrl={langUrl}
              title={BlogsData.posts[0].title}
              image={BlogsData.posts[0].image}
              description={BlogsData.posts[0].description}
              id={BlogsData.posts[0].id}
              slug={BlogsData.posts[0].slug}
            />
          </div>
          <div className="col-md-6">
            <BlogCard
              langUrl={langUrl}
              title={BlogsData.posts[1].title}
              image={BlogsData.posts[1].image}
              description={BlogsData.posts[1].description}
              id={BlogsData.posts[1].id}
              slug={BlogsData.posts[1].slug}
            />
          </div>
        </div>
        <Link className="btn-line mt-30" href={`${langUrl}/blog`}>
          {formatMessage({ id: 'moreArticles', defaultMessage: 'المزيد من المقالات' })}
        </Link>
      </div>
    </div>
  );
};

export default Blog;
