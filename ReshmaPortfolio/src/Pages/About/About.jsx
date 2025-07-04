import React, { useEffect } from 'react';
import './about.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function About() {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                y: 0,
                transition: { duration: 1 }
            });
        }
    }, [inView, controls]);

    return (
        <>
            <motion.div
                className="about"
                id="About"
                ref={ref}
                animate={controls}
                initial={{ opacity: 0, y: 100 }}
            >
                <div className="row">
                    <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-image">
                        <img src="src/assets/Images/Reshma 2.jpg" alt="profile_pic" />
                    </div>
                    <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
                        <h1>About Me</h1>
                        <p>
                            A highly motivated Full Stack Web Developer (MERN) with expertise in Front-End and Back-End
                            development. Successfully completed the Entri-Elevate Full Stack Development course, gaining hands-on
                            experience in building dynamic, scalable, and efficient web applications. Passionate about continuous
                            learning, problem-solving, and innovation, with a strong ability to adapt and grow in a fast-paced tech
                            environment. Eager to leverage my skills in React, Node.js, Express.js, and MongoDB to contribute to
                            impactful projects and collaborate with forward-thinking teams.
                        </p>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default About;
