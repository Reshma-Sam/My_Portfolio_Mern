import Layout from "./Components/Layout/Layout"
import About from "./Pages/About/About"
import Certificates from "./Pages/Certificates/Certificates"
import Contact from "./Pages/Contact/Contact"
import Education from "./Pages/Education/Education"
import Projects from "./Pages/Projects/Projects"
import Techstack from "./Pages/TechStack/Techstack"
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./Context/ThemeContext"
import 'animate.css';
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import MobileNav from "./Components/MobileNav/MobileNav"
import { ToastContainer} from 'react-toastify';


function App() {
  const [theme] = useTheme()
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        scale: [1, 1.2, 0.9, 1.1, 1],
        rotate: [0, 3, -3, 3, 0],
        transition: { duration: 1 }
      });
    }
  }, [controls, inView]);

  return (
    <>
      <div id={theme}>
        <ToastContainer />
        <MobileNav />
        <Layout />
        <div className="container">
          <About />
          <Certificates />
          <Techstack />
          <Projects />
          <Education />
          <Contact />
          <motion.div
            ref={ref}
            animate={controls}
            initial={{ scale: 1 }}
            className="footer pb-3 ms-3"
          >
            <h4 className="text-center">
              Made By ✌️ Reshma Vijayan &copy; 2025
            </h4>
          </motion.div>
        </div>
      </div>
      <ScrollToTop
        smooth
        color='white'
        style={{ backgroundColor: ' #db3268', borderRadious: '160px' }} />
    </>
  )
}

export default App
