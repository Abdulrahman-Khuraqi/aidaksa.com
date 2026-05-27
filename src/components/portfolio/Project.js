import imagesData from '../../../public/assets/data/portfolio.json';
import styles from './project.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Project = ({ project }) => {
  const moveAnimation = {
    hidden: { opacity: 0, y: +50 },
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
    <div className='container'>
      <div className='row'>
        {project.images.map((image, index) => (
          <div className=' col-md-6 col-xs-12' key={index}>
            <motion.div
              viewport={{ once: true, amount: 0.8,margin:'500px' }}
              variants={moveAnimation}
              initial='hidden'
              whileInView='visible'
              className={styles.portfolioItem}
            >
              <div className={styles.ImageContainer}>
                <Image
                  className='img-fluid '
                  src={`${image.url}`}
                  alt={image.alt}
                  height={1080}
                  width={1080}
                />
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
