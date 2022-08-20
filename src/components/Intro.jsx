import React from 'react';
import styles from '../styles/Intro.module.css';
import MyPic from '../assets/intro.webp';
import '../styles/Intro.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function Intro() {
    const imgAnimation = useAnimation();
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
            imgAnimation.start({
                opacity: 1,
                width: 'auto',
                transition: {
                    duration: 0.8,
                    ease: 'easeOut',
                    delay: 0.6,
                },
            });
        } else {
            imgAnimation.start({
                opacity: 0,
                width: 0,
            });
        }
    }, [inView]);
    return (
        <motion.div
            className={styles.Intro_parent}
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
        >
            <div className={styles.Intro_children}>
                <div className={styles.Intro_left}>
                    <div className={styles.Intro_main}>
                        <p className={styles.Intro_desc}>
                            Hi there<span class='wave'>👋</span>, I'm
                        </p>
                        <p className={styles.Intro_desc}>
                            <span className={styles.Intro_myName}>Yashasvi Srivastava</span>
                        </p>
                        <div className='introDescWrap'>
                            <span className='staticText'>
                                I'm a Full Stack Web Developer with specialization in
                            </span>
                            <ul className='dynamicText'>
                                <li>MongoDB</li>
                                <li>ExpressJs</li>
                                <li>ReactJs</li>
                                <li>NodeJs</li>
                            </ul>
                            <div className='staticText lastPhase'>Tech Stacks.</div>
                        </div>
                    </div>
                    <button
                        className={styles.Intro_Resume}
                        onClick={() =>
                            window.open(
                                'https://drive.google.com/file/d/1BSp6nhD3ONowDHybPePzw_ND_MdRG-60/view?usp=sharing',
                            )
                        }
                    >
                        Resume<i className='fa-solid fa-download'></i>
                    </button>
                    <div className={styles.Intro_socialLinks}>
                        <motion.a
                            href='https://www.linkedin.com/in/yash2507'
                            initial={{ opacity: 0, translateX: -50 }}
                            animate={{ opacity: 1, translateX: 0 }}
                            transition={{
                                type: 'spring',
                                bounce: 0.2,
                                duration: 0.5,
                                delay: 1.5 * 1,
                            }}
                        >
                            <i className='fa-brands fa-linkedin-in'></i>
                        </motion.a>
                        <motion.a
                            href='https://www.github.com/yash-2507'
                            initial={{ opacity: 0, translateX: -50 }}
                            animate={{ opacity: 1, translateX: 0 }}
                            transition={{
                                type: 'spring',
                                bounce: 0.2,
                                duration: 0.5,
                                delay: 1.75,
                            }}
                        >
                            <i className='fa-brands fa-github'></i>
                        </motion.a>
                        <motion.a
                            href='mailto:imyash.654@gmail.com?subject=Hello Yash!'
                            initial={{ opacity: 0, translateX: -50 }}
                            animate={{ opacity: 1, translateX: 0 }}
                            transition={{
                                type: 'spring',
                                bounce: 0.2,
                                duration: 0.5,
                                delay: 2,
                            }}
                        >
                            <i className='fa-solid fa-envelope'></i>
                        </motion.a>
                    </div>
                </div>
                <div className={styles.Intro_right}>
                    <div className={styles.IntroPic_Wrapper}>
                        <motion.img src={MyPic} alt='' animate={imgAnimation} />
                        <div className={styles.imageBack}></div>
                        <div className={styles.imageBack}></div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
