import React from 'react';
import styles from '../styles/Contact.module.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function Contact() {
    const animation = useAnimation();
    const { ref, inView } = useInView({ threshold: 0.7 });

    useEffect(() => {
        console.log('Contact section' + inView);
        if (inView) {
            animation.start({
                y: 0,
                opacity: 1,
                transition: {
                    duration: 0.6,
                    ease: 'easeOut',
                },
            });
        } else {
            animation.start({
                y: 20,
                opacity: 0,
            });
        }
    }, [inView]);
    return (
        <div className={styles.Contact_parent} ref={ref}>
            <div className={styles.Contact_subParent}>
                <div>
                    <p className={styles.Contact_header}>Let's Connect ...</p>
                    <hr className={styles.Contact_hr}></hr>
                </div>
                <p className={styles.Contact_name}>Yashasvi Srivastava</p>
                <motion.div className={styles.Contact_socialWrapper} animate={animation}>
                    <div className={styles.Contact_social}>
                        <a href='https://www.linkedin.com/in/yash2507'>
                            <i className='fa-brands fa-linkedin-in'></i>
                        </a>
                    </div>
                    <div className={styles.Contact_social}>
                        <a href='mailto:imyash.654@gmail.com'>
                            <i className='fa-solid fa-envelope'></i>
                        </a>
                    </div>
                    <div className={styles.Contact_social}>
                        <a href='tel:+916387353140'>
                            <i className='fa-solid fa-phone'></i>
                        </a>
                    </div>
                    <div className={styles.Contact_social}>
                        <a href='https://t.me/iAM_YSH'>
                            <i className='fa-brands fa-telegram'></i>
                        </a>
                    </div>
                </motion.div>
                <p className={styles.Contact_copyright}>© 2022 copyright all right reserved</p>
            </div>
        </div>
    );
}
