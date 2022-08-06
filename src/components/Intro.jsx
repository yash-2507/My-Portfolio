import React from "react";
import styles from "../styles/Intro.module.css";
import MyPic from "../assets/intro.png";
import "../styles/Intro.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Intro() {
   const animation = useAnimation();
   const { ref, inView } = useInView();

   useEffect(() => {
      if (inView) {
         animation.start({
            opacity: 1,
            x: 0,
            transition: { duration: 1.5, type: "spring", bounce: 0.2, ease: "easeIn" },
         });
      } else {
         animation.start({
            opacity: 0,
            x: -100,
         });
      }
   }, [inView]);
   return (
      <div className={styles.Intro_parent} ref={ref}>
         <div className={styles.Intro_children}>
            <div className={styles.Intro_left}>
               <motion.div animate={animation} className={styles.Intro_main}>
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
               </motion.div>
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
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.5,
                        delay: 1.75,
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
                        bounce: 0.2,
                        duration: 0.5,
                        delay: 2,
                     }}
                  >
                     <i className='fa-brands fa-telegram'></i>
                  </motion.a>
               </div>
            </div>
            <div className={styles.Intro_right}>
               <div className={styles.IntroPic_Wrapper}>
                  <motion.img
                     src={MyPic}
                     alt=''
                     initial={{ opacity: 0, scale: 0 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{
                        duration: 0.8,
                        ease: "easeIn",
                        type: "slide",
                     }}
                  />
                  <div className={styles.imageBack}></div>
                  <div className={styles.imageBack}></div>
               </div>
               {/* <img src={Decorate1} className="Decorate1" alt="" /> */}
            </div>
         </div>
      </div>
   );
}
