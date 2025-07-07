import React from 'react'
import './projects.css'
import { motion } from 'framer-motion';
import lawLinker from "../../assets/Images/Project_1.png"

function Projects() {
    return (
        <>
            <div className="projects" id="Projects">
                <h2 className='col-12 col-md-12 col-lg-12 mt-3 mb-1 text-center text-uppercase'>Top Recent Projects</h2>
                <hr />
                <p className='pb-3 text-center'>
                    Here is my project with live link and source code which i done during the full stack course from Entri-Elevate.
                </p>
                <div className=" row flex-column align-items-center" id="ads">
                    <div className="col-md-6 mb-4 project-card ">
                        <motion.div 
                        className="card card-project rounded"
                        initial={{ rotateY: 0 }}
                        whileInView={{ rotateY: 360 }}
                        transition={{ duration: 1 }}
                        >
                            <div className="card-image m-auto">
                                <span className="card-notify-badge">Full Stack</span>
                                <img src={lawLinker} alt="Project1" />
                            </div>
                            <div className="card-image-overlay m-auto mt-3 mb-3">
                                <span className="card-details-bagde">Node</span>
                                <span className="card-details-bagde">Express</span>
                                <span className="card-details-bagde">React</span>
                                <span className="card-details-bagde">MongoDB</span>
                            </div>
                            <div className="card-body text-center">
                                <div className="ad-title">
                                    <h5 className="text-uppercase m-auto ">Law Linker</h5>
                                </div>
                                <a className="ad-btn text-center" href="https://law-linker-client.vercel.app/">View</a>
                                <a className="ad-btn2 text-center" href="#">Description</a>
                            </div>
                        </motion.div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Projects