import About from "./components/About";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";
import styles from "./styles/App.module.css";

function App() {
    return (
        <div className={styles.App}>
            <Navbar />
            <Intro />
            <About />
            <Skills />
            <Project />
            <Contact />
        </div>
    );
}

export default App;
