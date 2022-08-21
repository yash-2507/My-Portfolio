import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { useEffect, useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import Intro from './components/Intro';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Skills from './components/Skills';
import styles from './styles/App.module.css';
import './sass/main.scss';
import Animated from './components/Post-About/Animated';
import MoveTop from './components/MoveTop/MoveTop';

function App() {
    const [loading, setLoading] = useState(true);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        loading
            ? document.querySelector('body').classList.add('loading')
            : document.querySelector('body').classList.remove('loading');
    }, [loading]);

    const handleScroll = () => {
        let Y = window.scrollY;
        if (Y > 1220) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };
    window.addEventListener('scroll', handleScroll);

    return (
        <div className={styles.App}>
            <AnimateSharedLayout type='crossfade'>
                <AnimatePresence>
                    {loading ? (
                        <motion.div key='loader'>
                            <Loader setLoading={setLoading} />
                        </motion.div>
                    ) : (
                        <>
                            {visible && <MoveTop />}
                            <CustomCursor />
                            <Navbar />
                            <Intro />
                            <Animated />
                            <About />
                            <Skills />
                            <Project />
                            <Contact />
                        </>
                    )}
                </AnimatePresence>
            </AnimateSharedLayout>
        </div>
    );
}

export default App;
