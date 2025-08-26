import React from "react";
import { useTheme } from "../../Context/ThemeContext";
import TypeWriter from 'typewriter-effect';
import Resume from '../../assets/Docs/Resume.pdf';
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoIosSunny } from "react-icons/io";
import "./home.css";
import { motion } from 'framer-motion';

function Home() {
  const [theme, setTheme] = useTheme();

  const handleTheme = () => {
    setTheme((prevState) => (prevState === 'light' ? 'dark' : 'light'))
  };

  return (
    <>
      <div className="home-container" id="Home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === 'light'
            ? (<BsFillMoonStarsFill size={26} color="black" style={{ backgroundColor: '#db3268', padding: '4px' }} />)
            : (<IoIosSunny size={30} color="gold" style={{ backgroundColor: '#db3268', padding: '4px' }} />)}
        </div>

        <div className="home-content">
          <motion.div
            initial={{ opacity: 0, x: 700 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h2>Hi 👋 I'm </h2>
            <h1>
              <TypeWriter
                options={{
                  strings: [
                    'Reshma Vijayan...',
                    "MERN Stack Developer!!!",
                    "React Native Developer!!!",
                    "Node Backend Developer!!!"
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </motion.div>

          <div className="home-buttons">
            <motion.a
              href={Resume}
              download="Reshma_Vijayan.pdf"
              className="btn btn-resume"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              My Resume
            </motion.a>

            <motion.a
              className="btn btn-hire"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              href="https://api.whatsapp.com/send?phone=7356299848"
              rel="noreferrer"
              target="_blank"
            >
              Hire Me
            </motion.a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
