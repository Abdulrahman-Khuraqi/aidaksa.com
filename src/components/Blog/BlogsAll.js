/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import { useIntl } from 'react-intl';
import BlogCardSecond from '@/components/Blog/BlogCardSecond.js';
import styles from './blog.module.css';
import Image from 'next/image';
import { useState } from 'react';

const BlogsAll = ({ langUrl }) => {
  const { formatMessage } = useIntl();
  const [searchValue, setSearchValue] = useState('');
  const BlogsData = require(`../../../public/assets/data/posts-${langUrl === 'en' ? 'en' : 'ar'}.json`);
  const filteredBlogs = BlogsData.posts.filter((blog) =>
    blog.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <div id='posts' className='container'>
      <div className={styles.postsContainer}>
        <div className='row  mt-5 mb-4'>
          <div className='  blog__search mb-3'>
            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              type='text'
              className='form-control form-control-blog'
              placeholder={formatMessage({ id: 'searchPlaceholder', defaultMessage: 'البحث عن مقال' })}
              aria-label="Recipient's username"
              aria-describedby='basic-addon2'
            />
            <div className='input-group-append'>
              <span className='input-group-text blog__icon' id='basic-addon2'>
                <Image
                  alt='search'
                  src='/icons/search.svg'
                  width='26'
                  height='26'
                />
              </span>
            </div>
          </div>
        </div>
        <div className='row'>
          {filteredBlogs.map((post) => (
            <div className='col-md-6 mb-4' key={post.id}>
              <BlogCardSecond
                langUrl={langUrl}
                title={post.title}
                image={post.image}
                content={post.content}
                description={post.description}
                slug={post.slug}
                id={post.id}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default BlogsAll;
