import React from 'react';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import styles from './postsSuggestion.module.css';

const PostsSuggestion = ({langUrl}) => {
  const { formatMessage } = useIntl();
  const postsData = require(`../../../public/assets/data/posts-${langUrl==='en'?'en':'ar'}.json`);

  return (
    <div>
      <span className={styles.subtitle}>
        {formatMessage({ id: 'latestPosts', defaultMessage: 'آخر المقالات' })}
      </span>
      {postsData.posts.map((post) => (
        <div key={post.id} className={styles.suggestionContainer}>
          <Link className='mt-1' href={`/${langUrl}/post/${post.id}/${post.slug}`}>
            <div className='row align-items-center'>
              <div className='col-4'>
                <Image
                  src={`/../../images/blog/${post.image}.jpeg`}
                  className={styles.postimage}
                  width='90'
                  height='90'
                  alt={post.imageDescription}
                />
              </div>
              <div className='col'>
                <h5 className={styles.title}>{post.title}</h5>
                <span className={styles.button__more} href={`/${langUrl}/post/${post.id}/${post.slug}`}>
                  {formatMessage({ id: 'readArticle', defaultMessage: 'قراءة المقال' })} <span>&raquo;</span>
                </span>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PostsSuggestion;
