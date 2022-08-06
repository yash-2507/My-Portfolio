import React from "react";
import "../styles/Loading.css";
import { motion } from "framer-motion";

export default function Loading() {
   return (
      <div className='loading-container'>
         <div className='loading-parent'>
            {/* <div className="loading-ring"></div>
                <div className="loading-ring"></div>
                <div className="loading-ring"></div>
                <p>Loading...</p> */}
            <motion.div
               className='loading-left'
               initial={{ translateY: "100vh" }}
               animate={{ translateY: 0 }}
               transition={{ duration: 1.5,  ease: "easeOut", }}
            ></motion.div>
            <motion.div
               className='loading-right'
               initial={{ translateY: "-100vh" }}
               animate={{ translateY: 0 }}
               transition={{ duration: 1.5,  ease: "easeOut", }}
            ></motion.div>
         </div>
      </div>
   );
}
