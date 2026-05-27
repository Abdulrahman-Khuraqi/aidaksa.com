import styles from './blogPost.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';

const BlogPost = ({ post }) => {

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
  const opacityAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };
  const renderContent = (content) => {
    return content.map((item, subIndex) => {
      if (item.type === 'text') {
        //1- محتوى نصي
        if (item.text.includes('**')) {
          const parts = item.text.split('**');
          const formattedText = parts.map((part, index) => {
            if (index % 2 === 1) {
              return (
                <strong className='fw-bold' key={index}>
                  {part}
                </strong>
              );
            } else {
              return part;
            }
          });
          return (
            <p className='mb-3' key={subIndex}>
              {formattedText}
            </p>
          );
        } else {
          return (
            <p className='mb-3' key={subIndex}>
              {item.text}
            </p>
          );
        }
      } else if (item.type === 'list') {
        // قائمة
        const formattedItems = item.items.map((listItem, listIndex) => {
          if (listItem.includes('**')) {
            const parts = listItem.split('**');
            const formattedText = parts.map((part, index) => {
              if (index % 2 === 1) {
                return (
                  <strong className='fw-bold' key={index}>
                    {part}
                  </strong>
                );
              } else {
                return part;
              }
            });

            return (
              <li className='mb-2' key={listIndex}>
                {formattedText}
              </li>
            );
          } else {
            return (
              <li className='mb-2' key={listIndex}>
                {listItem}
              </li>
            );
          }
        });

        return <ul key={subIndex}>{formattedItems}</ul>;
      } else if (item.type === 'subheading') {
        //3- عنوان فرعي
        return (
          <h4 className='mb-2 mt-4' key={subIndex}>
            {item.text}
          </h4>
        );
      } else if (item.type === 'heading') {
        //3- عنوان فرعي
        return (
          <h3 className='mb-2 mt-4' key={subIndex}>
            {item.text}
          </h3>
        );
      }
    });
  };

  return (
    <div className={styles.container} key={post.id}>
      <motion.h1
        variants={titleAnimation}
        initial='hidden'
        animate='visible'
        className={styles.title}
      >
        {post.title}
      </motion.h1>
      <div className='d-flex flex-wrap'>
        <span className={styles.date}>
          <Image
            src={`/../../icons/date.svg`}
            width='17'
            className='me-1'
            height='17'
            alt='date icon'
          />
          {post.createat}
        </span>
        {post.tags.map((tag) => (
          <span className={styles.date}>{tag}</span>
        ))}
      </div>
      <motion.div
        variants={opacityAnimation}
        initial='hidden'
        animate='visible'
        className={styles.BlogCard__image_container}
      >
        <Image
          className={styles.BlogCard__image}
          src={`/../../images/blog/${post.image}.jpeg`}
          alt='blog'
          width={470}
          height={300}
        />
      </motion.div>
      <div className='d-block'>{renderContent(post.content)}</div>
    </div>
  );
};
export default BlogPost;
