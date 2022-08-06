import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";
import styles from "./styles/App.module.css";

function App() {
   const [loading, setLoading] = useState(true);
   useEffect(() => {
      setTimeout(() => {
         setLoading(false);
      }, 2500);
   }, []);

   return (
      <div className={styles.App}>
         {loading ? (
            <Loading />
         ) : (
            <>
               <Navbar />
               <Intro />
               <About />
               <Skills />
               <Project />
               <Contact />
            </>
         )}
      </div>
   );
}

export default App;
