import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";
import { Link } from "react-router-dom";
import logo from "../assets/favicon.png";
import { motion } from "framer-motion";

export default function Navbar() {
   const [home, setHome] = useState(true);
   const [about, setAbout] = useState(false);
   const [skills, setSkills] = useState(false);
   const [project, setProject] = useState(false);
   const [contact, setContact] = useState(false);

   const handleScroll = () => {
      let y = window.scrollY;
      if (y >= 0 && y < 500) {
         setHome(true);
         setAbout(false);
         setSkills(false);
         setProject(false);
         setContact(false);
      }
      if (y >= 500 && y < 880) {
         setHome(false);
         setAbout(true);
         setSkills(false);
         setProject(false);
         setContact(false);
      }
      if (y >= 880 && y < 1450) {
         setHome(false);
         setAbout(false);
         setSkills(true);
         setProject(false);
         setContact(false);
      }
      if (y >= 1450 && y < 2267) {
         setHome(false);
         setAbout(false);
         setSkills(false);
         setProject(true);
         setContact(false);
      }
      if (y >= 2267) {
         setHome(false);
         setAbout(false);
         setSkills(false);
         setProject(false);
         setContact(true);
      }
   };
   window.addEventListener("scroll", handleScroll);
   return (
      <div className={styles.Nav_parent}>
         <div className={styles.Nav_right}>
            <div>
               <motion.img
                  src={logo}
                  alt=''
                  initial={{ opacity: 0, translateX: -50 }}
                  animate={{ opacity: 1, translateX: 0 }}
                  transition={{ duration: 0.4, delay: 1}}
               />
            </div>
            <ul className={styles.Nav_listWrapper}>
               <motion.li
                  className={styles.Nav_list}
                  id='home'
                  initial={{ opacity: 0, translateX: -50 }}
                  animate={{ opacity: 1, translateX: 0 }}
                  transition={{ duration: 0.4, delay: 1.25 }}
                  style={{
                     borderBottom: home ? "2px solid #E9D5DA" : undefined,
                  }}
                  onClick={() => {
                     window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                     });
                  }}
               >
                  <Link to='/#home'>Home</Link>
               </motion.li>
               <motion.li
                  className={styles.Nav_list}
                  id='about'
                  initial={{ opacity: 0, translateX: -50 }}
                  animate={{ opacity: 1, translateX: 0 }}
                  transition={{ duration: 0.4, delay: 1.50 }}
                  style={{
                     borderBottom: about ? "2px solid #E9D5DA" : undefined,
                  }}
                  onClick={() => {
                     window.scrollTo({
                        top: 500,
                        behavior: "smooth",
                     });
                  }}
               >
                  <Link to='/#about'>About</Link>
               </motion.li>
               <motion.li
                  className={styles.Nav_list}
                  id='skills'
                  initial={{ opacity: 0, translateX: -50 }}
                  animate={{ opacity: 1, translateX: 0 }}
                  transition={{ duration: 0.4, delay: 1.75 }}
                  style={{
                     borderBottom: skills ? "2px solid #E9D5DA" : undefined,
                  }}
                  onClick={() => {
                     window.scrollTo({
                        top: 880,
                        behavior: "smooth",
                     });
                  }}
               >
                  <Link to='/#skills'>Skills</Link>
               </motion.li>
               <motion.li
                  className={styles.Nav_list}
                  id='projects'
                  initial={{ opacity: 0, translateX: -50 }}
                  animate={{ opacity: 1, translateX: 0 }}
                  transition={{ duration: 0.4, delay: 2 }}
                  style={{
                     borderBottom: project ? "2px solid #E9D5DA" : undefined,
                  }}
                  onClick={() => {
                     window.scrollTo({
                        top: 1450,
                        behavior: "smooth",
                     });
                  }}
               >
                  <Link to='/#projects'>Projects</Link>
               </motion.li>
               <motion.li
                  className={styles.Nav_list}
                  id='contact'
                  initial={{ opacity: 0, translateX: -50 }}
                  animate={{ opacity: 1, translateX: 0 }}
                  transition={{ duration: 0.4, delay: 2.25 }}
                  style={{
                     borderBottom: contact ? "2px solid #E9D5DA" : undefined,
                  }}
                  onClick={() => {
                     window.scrollTo({
                        top: 3000,
                        behavior: "smooth",
                     });
                  }}
               >
                  <Link to='/#contact'>Contact</Link>
               </motion.li>
            </ul>
         </div>
      </div>
   );
}
