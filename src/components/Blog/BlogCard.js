/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import { useIntl } from 'react-intl';
import styles from './blogcard.module.css';
import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({ title, description, image, id, slug,langUrl }) => {
  const { formatMessage } = useIntl();
  const truncatedContent = description.length > 140 ? `${description.slice(0, 140)}...` : description;

  return (
    <div className={styles.BlogCard__container}>
      <Link href={`${langUrl}/post/${id}/${slug}`}>
        <div className={styles.BlogCard__image_container}>
          <Image
            className={styles.BlogCard__image}
            src={`/images/blog/${image}.jpeg`}
            alt='blog'
            width={470}
            height={300}
          />
        </div>
        <div className={styles.BlogCard__containerSec}>
          <h5 className={styles.BlogCard__title}>{title}</h5>
          <p className={styles.BlogCard__p}>{truncatedContent}</p>
          <span className='btn'>
            {formatMessage({ id: 'readArticle', defaultMessage: 'قراءة المقال' })} »
          </span>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;

