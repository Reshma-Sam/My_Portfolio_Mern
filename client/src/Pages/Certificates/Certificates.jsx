import React, { useState, useEffect } from 'react';
import './certificates.css';
import Certificate1 from '../../assets/Images/certificate1.jpg';
import Certificate2 from '../../assets/Images/certificate2.jpg';
import Certificate3 from '../../assets/Images/certificate3.jpg'; 
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Certificates() {
    const [expandedCard, setExpandedCard] = useState(null);
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true });

    const toggleExpand = (index) => {
        setExpandedCard(expandedCard === index ? null : index);
    };

    useEffect(() => {
        if (inView) {
            controls.start({
                scale: [1, 1.05, 1],
                transition: { duration: 0.6 },
            });
        }
    }, [controls, inView]);

    return (
        <div className="certificates" id="Certificates">
            <motion.div ref={ref} animate={controls} initial={{ scale: 1 }}>
                <h2 className='text-center text-uppercase'>
                    MERN Certifications
                </h2>
                <hr />
            </motion.div>

            <motion.div
                className='certificates-container'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                {[Certificate1, Certificate2, Certificate3].map((cert, index) => (
                    <motion.div
                        key={index}
                        className="card card-custom"
                        onClick={() => toggleExpand(index)}
                        whileHover={{ scale: 1.03 }}
                    >
                        <img
                            src={cert}
                            className={`card-img-top ${expandedCard === index ? 'expanded' : ''}`}
                            alt={`Certificate ${index + 1}`}
                        />
                        <div className="card-body text-center">
                            <h5 className="card-title">
                                {index === 0 && "NSDC - MERN Stack Development"}
                                {index === 1 && "ILLINOIS - MERN Stack Development"}
                                {index === 2 && "Entri-Elevate - MERN Full Stack"}
                            </h5>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

export default Certificates;
