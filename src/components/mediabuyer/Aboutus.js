import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import numbersIno from '../../assets/data/numbers.json';
import styles from '../styles.module.css';

function Aboutus() {
    return (
        <div className="container mt-40" id="aboutus">
            <div className={styles.aboutus}>
                <ScrollAnimation animateIn="fadeIn" duration=".8" animateOnce>
                    <div className={styles.titleBox}>
                        <h2 className={styles.title}> من هـي أيـدا للتســــويـق؟</h2>
                        <div className={styles.titleBackgroundAbout} />
                    </div>{' '}
                </ScrollAnimation>
                <ScrollAnimation animateOnce animateIn="fadeInUp" duration=".8">
                    <div className={styles.aboutus__description}>
                        فـي عــام 2020 تــأسســت شــركــة أيـدا بفـكرة بســــيطـة كــانـــت
                        تــقديــــم حــلــــول تســويقيـــة مبتكـــرة لملائمـــة الســـوق
                        الســـعــودي ولأننا وجــــدنـا فجـــــوة كبيرة بهذا الســــوق وكانـــت لدينا
                        الخبرات الكافية والكادر القـــوي للعمل علـــى ســــــد هذه الفجوة التي تمنع
                        أصبحاب الاعمال من تســـويــق مشــــاريعهم بشــكل فعال قررنا الدخول وبشكل
                        مبتكر لأجل مساعدتكم.
                    </div>{' '}
                </ScrollAnimation>{' '}
                <div className={styles.aboutusNumbersBackground}>
                    {numbersIno.map((item) => (
                        <div className="col-12 col-sm-4">
                            <div className={styles.numberContent}>
                                <div className={styles.numbercontinar}>
                                    <CountUp redraw end={item.value} duration="3">
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <>
                                                    <div
                                                        className={styles.number}
                                                        ref={countUpRef}
                                                    />
                                                </>
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                    <div className={styles.number}>+</div>
                                </div>
                                <div className={styles.numberTitle}>{item.txt}</div>
                            </div>
                        </div>
                    ))}

                    {/* 
                    <div className="col-12 col-sm-4">
                        <div className={styles.numberContent}>
                            <div className={styles.number}>215+</div>
                            <div className={styles.numberTitle}>من العملاء</div>
                        </div>{' '}
                    </div>

                    <div className="col-12 col-sm-4">
                        <div className={styles.numberContent}>
                            <div className={styles.number}>905+</div>
                            <div className={styles.numberTitle}>مشروع مكتمل</div>
                        </div>{' '}
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Aboutus;
