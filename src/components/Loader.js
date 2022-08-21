import React from 'react';
import { motion } from 'framer-motion';
import Bewakoof from '../assets/Bewakoof.webp';
import Cart from '../assets/Cart.webp';
import JCrew from '../assets/JCrew.webp';
import upGrad from '../assets/upGrad.webp';
import Revv from '../assets/Revv.webp';
import Image from './Image';

const container = {
   show: {
      transition: {
         staggerChildren: 0.45,
      },
   },
};

const item = {
   hidden: { opacity: 0, y: 200 },
   show: {
      opacity: 1,
      y: 0,
      transition: {
         ease: [0.6, 0.01, -0.05, 0.95],
         duration: 1.6,
      },
   },
   exit: {
      opacity: 0,
      y: -100,
      transition: {
         ease: 'easeInOut',
         duration: 0.6,
      },
   },
};

const Loader = ({ setLoading }) => {
   return (
      <motion.div className='loader'>
         <motion.div
            variants={container}
            onAnimationComplete={() => setLoading(false)}
            initial='hidden'
            animate='show'
            exit='exit'
            className='loader-inner'
         >
            <ImageBlock variants={item} id='image-1' src={Revv} />
            <motion.div variants={item} className='transition-image'>
               <motion.img className='main-image' src={Bewakoof} alt='' />
            </motion.div>
            <ImageBlock variants={item} id='image-3' src={upGrad} />
            <ImageBlock variants={item} id='image-4' src={Cart} />
            <ImageBlock variants={item} id='image-5' src={JCrew} />
         </motion.div>
      </motion.div>
   );
};

export const ImageBlock = ({ posX, posY, variants, id, src }) => {
   return (
      <motion.div
         variants={variants}
         className={`image-block ${id}`}
         style={{
            top: `${posY}vh`,
            left: `${posX}vw `,
         }}
      >
         <Image src={src} alt='Image Break' />
      </motion.div>
   );
};
export default Loader;
