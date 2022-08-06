import React from "react";
import styles from "../styles/Intro.module.css";
import MyPic from "../assets/intro.png";
import "../styles/Intro.css";
import { motion } from "framer-motion";

export default function Intro() {
   return (
      <div className={styles.Intro_parent}>
         <div className={styles.Intro_children}>
            <div className={styles.Intro_left}>
               <div>
                  <motion.p
                     className={styles.Intro_desc}
                     initial={{ opacity: 0, translateY: -50 }}
                     animate={{ opacity: 1, translateY: 0 }}
                     transition={{ duration: 0.5, delay: 0.4 }}
                  >
                     Hi there<span class='wave'>👋</span>, I'm
                  </motion.p>
                  <p className={styles.Intro_desc}>
                     <span className={styles.Intro_myName}>Yashasvi Srivastava</span>
                  </p>
                  <div className='introDescWrap'>
                     <motion.span
                        className='staticText'
                        initial={{ opacity: 0, translateY: -50 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                     >
                        I'm a Full Stack Web Developer with specialization in
                     </motion.span>
                     <ul className='dynamicText'>
                        <li>MongoDB</li>
                        <li>ExpressJs</li>
                        <li>ReactJs</li>
                        <li>NodeJs</li>
                     </ul>
                     <motion.div
                        className='staticText lastPhase'
                        initial={{ opacity: 0, translateY: -50 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                     >
                        Tech Stacks.
                     </motion.div>
                  </div>
               </div>
               <button
                  className={styles.Intro_Resume}
                  onClick={() =>
                     window.open(
                        "https://drive.google.com/file/d/1DwAvC0xTozToU8curA9uJH8gv2bmY0Di/view?usp=sharing"
                     )
                  }
               >
                  Resume<i className='fa-solid fa-download'></i>
               </button>
               <div className={styles.Intro_socialLinks}>
                  <motion.a
                     href='https://www.linkedin.com/in/yashasvi-srivastava-13aba5236'
                     initial={{ opacity: 0, translateX: -50 }}
                     animate={{ opacity: 1, translateX: 0 }}
                     transition={{
                        type: "spring",
                        mass: 0.4,
                        damping: 8,
                        duration: 0.5,
                        delay: 0.3 * 1,
                     }}
                  >
                     <i className='fa-brands fa-linkedin-in'></i>
                  </motion.a>
                  <motion.a
                     href='https://www.github.com/yash-2507'
                     initial={{ opacity: 0, translateX: -50 }}
                     animate={{ opacity: 1, translateX: 0 }}
                     transition={{
                        type: "spring",
                        mass: 0.4,
                        damping: 8,
                        duration: 0.5,
                        delay: 0.3 * 2,
                     }}
                  >
                     <i className='fa-brands fa-github'></i>
                  </motion.a>
                  <motion.a
                     href='https://t.me/iAM/YSH'
                     initial={{ opacity: 0, translateX: -50 }}
                     animate={{ opacity: 1, translateX: 0 }}
                     transition={{
                        type: "spring",
                        mass: 0.4,
                        damping: 8,
                        duration: 0.5,
                        delay: 0.3 * 3,
                     }}
                  >
                     <i className='fa-brands fa-telegram'></i>
                  </motion.a>
               </div>
            </div>
            <div className={styles.Intro_right}>
               <div className={styles.IntroPic_Wrapper}>
                  <img src={MyPic} alt='' />
                  <div className={styles.imageBack}></div>
                  <div className={styles.imageBack}></div>
               </div>
               {/* <img src={Decorate1} className="Decorate1" alt="" /> */}
            </div>
         </div>
      </div>
   );
}
