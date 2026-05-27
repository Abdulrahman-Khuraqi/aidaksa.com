import styles from './titlesection.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';

const TitleSection = ({ title, breadcrumb }) => {
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
  const paragraphAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };
  return (
    <>
      <div className={styles.container}>
        <div className='center'>
          <motion.h1
            variants={titleAnimation}
            initial='hidden'
            animate='visible'
            className={styles.title}

          >
            {title}
          </motion.h1>
          <nav aria-label='breadcrumb'>
            <motion.ol
              variants={paragraphAnimation}
              initial='hidden'
              animate='visible'
              class='breadcrumb'
            >
              {breadcrumb.map((breadcrumb) => (
                <li class='breadcrumb-item'>
                  <Link href={breadcrumb.slug}>{breadcrumb.title}</Link>
                </li>
              ))}
            </motion.ol>
          </nav>
        </div>
      </div>
    </>
  );
};
export default TitleSection;
