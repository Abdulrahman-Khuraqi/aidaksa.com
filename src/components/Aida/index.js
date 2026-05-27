import { useState, useEffect } from 'react';
import { useIntl } from 'react-intl';
import styles from './styles.module.css';

const Aida = () => {
  const { formatMessage } = useIntl();
  const [activeLetter, setActiveLetter] = useState('A');
  const [isVisible, setIsVisible] = useState(true);

  const handleLetterClick = (letter) => {
    setActiveLetter(letter);
    setIsVisible(false);

    setTimeout(() => {
      setIsVisible(true);
    }, 300); // This should match the transition duration in the CSS
  };

  const getTitle = () => {
    switch (activeLetter) {
      case 'A':
        return formatMessage({ id: 'attention' });
      case 'I':
        return formatMessage({ id: 'interest' });
      case 'D':
        return formatMessage({ id: 'desire' });
      case 'A2':
        return formatMessage({ id: 'action' });
      default:
        return formatMessage({ id: 'aida' });
    }
  };

  const getDescription = () => {
    switch (activeLetter) {
      case 'A':
        return formatMessage({ id: 'attentionDescription' });
      case 'I':
        return formatMessage({ id: 'interestDescription' });
      case 'D':
        return formatMessage({ id: 'desireDescription' });
      case 'A2':
        return formatMessage({ id: 'actionDescription' });
      default:
        return formatMessage({ id: 'aidaDescription' });
  }
  };

  return (
    <div id='aida' className='container'>
      <div className={`${styles.container}`}>
        <div className={styles.header}>
          <img
            src='/images/aida/AL.svg'
            alt='A2'
            className={`${styles.letter} ${activeLetter === 'A2' ? styles.active : ''}`}
            onClick={() => handleLetterClick('A2')}
          />
          <img
            src='/images/aida/d.svg'
            alt='D'
            className={`${styles.letter} ${activeLetter === 'D' ? styles.active : ''}`}
            onClick={() => handleLetterClick('D')}
          />
          <img
            src='/images/aida/i.svg'
            alt='I'
            className={`${styles.letter} ${activeLetter === 'I' ? styles.active : ''}`}
            onClick={() => handleLetterClick('I')}
          />
          <img
            src='/images/aida/a.svg'
            alt='A'
            className={`${styles.letter} ${activeLetter === 'A' ? styles.active : ''}`}
            onClick={() => handleLetterClick('A')}
          />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.titleBox}>
            <h2 className={`${styles.displayText} ${isVisible ? styles.visible : styles.hidden}`}>
              {getTitle()}
            </h2>
            <div className={styles.titleBackgroundAbout} />
          </div>
          <p className={`${styles.description} ${isVisible ? styles.visible : styles.hidden}`}>
            {getDescription()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aida;
