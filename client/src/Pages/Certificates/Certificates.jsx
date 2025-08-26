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
                scale: [1, 1.25, 0.75, 1.15, 0.95, 1],
                transition: { duration: 0.6 },
            });
        }
    }, [controls, inView]);

    return (
        <>
            <div className="certificates" id="Certificates">
                <motion.div ref={ref} animate={controls} initial={{ scale: 1 }}>
                    <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>
                        MERN Certifications
                    </h2>
                    <hr />
                </motion.div>

                <motion.div
                    className='d-flex flex-column align-items-center gap-4'
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {/* Card 1 */}
                    <motion.div
                        className="card card-custom"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, amount: 0.3 }}
                        onClick={() => toggleExpand(1)}
                    >
                        <img
                            src={Certificate1}
                            className={`card-img-top ${expandedCard === 1 ? 'expanded' : ''}`}
                            alt="Certificate 1"
                        />
                        <div className="card-body text-center">
                            <h5 className="card-title">NSDC - MERN Stack Development</h5>
                        </div>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        className="card card-custom"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, amount: 0.3 }}
                        onClick={() => toggleExpand(2)}
                    >
                        <img
                            src={Certificate2}
                            className={`card-img-top ${expandedCard === 2 ? 'expanded' : ''}`}
                            alt="Certificate 2"
                        />
                        <div className="card-body text-center">
                            <h5 className="card-title">ILLINOIS - MERN Stack Development</h5>
                        </div>
                    </motion.div>

                    {/* Card 3 (NEW) */}
                    <motion.div
                        className="card card-custom"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, amount: 0.3 }}
                        onClick={() => toggleExpand(3)}
                    >
                        <img
                            src={Certificate3}
                            className={`card-img-top ${expandedCard === 3 ? 'expanded' : ''}`}
                            alt="Certificate 3"
                        />
                        <div className="card-body text-center">
                            <h5 className="card-title">Entri-Elevate - MERN Full Stack</h5>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
}

export default Certificates;
