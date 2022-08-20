import React, { useEffect } from 'react';
import styles from '../styles/Skills.module.css';
import { SiRedux, SiTypescript, SiExpress, SiMysql, SiMongodb } from 'react-icons/si';
import { BiTimer } from 'react-icons/bi';
import { FaNodeJs, FaRunning } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Skills() {
    const animation = useAnimation();
    const { ref, inView } = useInView({
        threshold: 0.15,
    });
    useEffect(() => {
        console.log('UseEffect inView', inView);
        if (inView) {
            animation.start({
                scale: 1,
                y: 0,
                transition: { duration: 1.5 },
            });
        } else {
            animation.start({
                scale: 0,
                y: -100,
            });
        }
    }, [inView]);
    return (
        <div className={styles.parent} ref={ref}>
            <div className={styles.subParent}>
                <h2 className={styles.header}>Skills</h2>
                <hr className={styles.hr}></hr>
                <div className={styles.main}>
                    <div className={styles.frontEnd}>
                        <h2>Front-end Skills</h2>
                        <motion.div className={styles.skillsWrap} animate={animation}>
                            <div>
                                <i className='fa-brands fa-html5'></i>HTML5
                            </div>
                            <div>
                                <i className='fa-brands fa-css3-alt'></i>CSS3
                            </div>
                            <div>
                                <i className='fa-brands fa-js'></i>JavaScript
                            </div>
                            <div>
                                <i className='fa-brands fa-react'></i>React
                            </div>
                            <div>
                                <SiRedux />
                                Redux
                            </div>
                            <div>
                                <SiTypescript />
                                TypeScript
                            </div>
                        </motion.div>
                    </div>
                    <div className={styles.backEnd}>
                        <h2>Back-end Skills</h2>
                        <motion.div className={styles.skillsWrap} animate={animation}>
                            <div>
                                <SiExpress />
                                Express.js
                            </div>
                            <div>
                                <FaNodeJs />
                                Node.js
                            </div>
                            <div>
                                <SiMysql />
                                MySQL
                            </div>
                            <div>
                                <SiMongodb />
                                MongoDB
                            </div>
                        </motion.div>
                    </div>
                    <div className={styles.softSkills}>
                        <h2>Soft Skills</h2>
                        <motion.div className={styles.skillsWrap} animate={animation}>
                            <div>
                                <FaRunning />
                                Quick Learner
                            </div>
                            <div>
                                <i className='fa-solid fa-people-group'></i>Team Collaboration
                            </div>
                            <div>
                                <i className='fa-solid fa-laptop-file'></i>
                                Remote Work
                            </div>
                            <div>
                                <BiTimer />
                                Time Management
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
