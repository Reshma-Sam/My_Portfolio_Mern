import React from 'react'
import './techstack.css'
import { TechstackList } from '../../utils/TechstackList'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';    //Rubber-band effect
import { useEffect } from 'react';   //Rubber-band effect

function Techstack() {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inView) {
            controls.start({
                scale: [1, 1.25, 0.75, 1.15, 0.95, 1], // rubber band sequence
                transition: { duration: 0.6 },
            });
        }
    }, [controls, inView]);
    return (
        <>
            <div className="techstack" id="TechStack" >
                <motion.div ref={ref} animate={controls} initial={{ scale: 1 }}>
                    <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>
                        Technologies Stack
                    </h2>
                    <hr />
                    <p className='pb-3 text-center'>
                        👉Including programming languages, frameworks, databases, front-end and back-end tools and APIs.
                    </p>
                </motion.div>
                <div className="row justify-content-center">
                    {TechstackList.map(tech => (
                        <motion.div key={tech._id}
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="col-md-4"
                        >
                            <div className="card m-2">
                                <div className="card-content">
                                    <div className="card-body">
                                        <div className="media d-flex justify-content-center">
                                            <div className="alig-self-center">
                                                <tech.icon className='tech-icon' />
                                            </div>
                                            <div className="media-body">
                                                <h5>{tech.name}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Techstack