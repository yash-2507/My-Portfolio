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

function App() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        loading
            ? document.querySelector('body').classList.add('loading')
            : document.querySelector('body').classList.remove('loading');
    }, [loading]);

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
                            <CustomCursor />
                            <Navbar />
                            <Intro />
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
