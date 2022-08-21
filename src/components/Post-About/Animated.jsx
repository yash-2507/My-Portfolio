import React, { useRef } from 'react';
import styles from './Animated.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

export default function Animated() {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);
    useEffect(() => {
        const element = ref.current;
        gsap.fromTo(
            element.querySelector('#first-paragraph'),
            {
                x: 0,
            },
            {
                x: 500,
                scrollTrigger: {
                    trigger: element,
                    start: 'top top+=100',
                    scrub: true,
                },
            },
        );
        gsap.fromTo(
            element.querySelector('#second-paragraph'),
            {
                x: 0,
            },
            {
                x: -500,
                scrollTrigger: {
                    trigger: element,
                    start: 'top top+=100',
                    scrub: true,
                },
            },
        );
    }, []);
    return (
        <div className={styles.container} id='animated_container' ref={ref}>
            <div className={styles.parent}>
                <div className={styles.upperLine} id='first-paragraph'>
                    TURNING IDEAS INTO
                </div>
                <div className={styles.lowerLine} id='second-paragraph'>
                    DIGITAL EXPERIENCES
                </div>
            </div>
        </div>
    );
}
