import React, { useEffect, useState } from 'react';
import { Blurhash } from 'react-blurhash';
import { motion, AnimatePresence } from 'framer-motion';


const LazyImage = ({ ImageNext, src, blurhash, alt, className, width, height }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const imgElement = new Image();
    imgElement.src = src;
    imgElement.onload = () => setImageLoaded(true);
  }, [src]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      <AnimatePresence>
        {!imageLoaded && (
          <motion.div
            key="blurhash"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          >
            <Blurhash
              className={className}
              hash={blurhash}
              punch={1}
              width="100%"
              height="100%"
            />
          </motion.div>
        )}
      </AnimatePresence>
      <ImageNext
        className={className}
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{
          objectFit: 'cover',
          opacity: imageLoaded ? 1 : 0,
          transition: 'opacity 0.5s'
        }}
      />
    </div>
  );
};

export default LazyImage;
