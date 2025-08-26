import React, { useState } from 'react';
import './projects.css';
import { motion } from 'framer-motion';
import lawLinker from "../../assets/Images/Project_1.png";
import MyPortfolio from "../../assets/Images/PorfolioProject.png";
import Ecommerce from "../../assets/Images/EcommerceProject.png"
import EcommerceDemo from "../../assets/Video/EcommerceVideo.mp4";

function Projects() {
    const [showVideo, setShowVideo] = useState(false);

    return (
        <>
            <div className="projects" id="Projects">
                <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>
                    Top Recent Projects
                </h2>
                <hr />
                <p className='pb-3 text-center'>
                    Here are my projects with live link and source code which I completed during my Full Stack course from Entri-Elevate.
                </p>

                <div className="row justify-content-center" id="ads">

                    {/* Project 1 */}
                    <div className="col-md-6 mb-4 project-card">
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
                                <a className="ad-btn text-center" href="https://law-linker-client.vercel.app/" target="_blank" rel="noreferrer">View</a>
                                <a className="ad-btn2 text-center" href="https://github.com/Reshma-Sam/Law-Linker" target="_blank" rel="noreferrer">GitHub</a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Project 2 */}
                    <div className="col-md-6 mb-4 project-card">
                        <motion.div
                            className="card card-project rounded"
                            initial={{ rotateY: 0 }}
                            whileInView={{ rotateY: 360 }}
                            transition={{ duration: 1 }}
                        >
                            <div className="card-image m-auto">
                                <span className="card-notify-badge">Frontend</span>
                                <img src={MyPortfolio} alt="Project2" />
                            </div>
                            <div className="card-image-overlay m-auto mt-3 mb-3">
                                <span className="card-details-bagde">React</span>
                                <span className="card-details-bagde">CSS</span>
                                <span className="card-details-bagde">Bootstrap</span>
                            </div>
                            <div className="card-body text-center">
                                <div className="ad-title">
                                    <h5 className="text-uppercase m-auto ">Portfolio Website</h5>
                                </div>
                                <a className="ad-btn text-center" href="https://my-portfolio-mern-e30v.onrender.com/" target="_blank" rel="noreferrer">View</a>
                                <a className="ad-btn2 text-center" href="https://github.com/Reshma-Sam/My_Portfolio_Mern" target="_blank" rel="noreferrer">GitHub</a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Project 3 - E-Commerce */}
                    <div className="col-md-6 mb-4 project-card">
                        <motion.div
                            className="card card-project rounded"
                            initial={{ rotateY: 0 }}
                            whileInView={{ rotateY: 360 }}
                            transition={{ duration: 1 }}
                        >
                            <div className="card-image m-auto">
                                <span className="card-notify-badge">Full Stack</span>
                                <img src={Ecommerce} alt="EcommerceProject" />
                            </div>
                            <div className="card-image-overlay m-auto mt-3 mb-3">
                                <span className="card-details-bagde">React</span>
                                <span className="card-details-bagde">Redux</span>
                                <span className="card-details-bagde">Node</span>
                                <span className="card-details-bagde">MongoDB</span>
                            </div>
                            <div className="card-body text-center">
                                <div className="ad-title">
                                    <h5 className="text-uppercase m-auto ">E-Commerce Website</h5>
                                </div>
                                {/* Instead of link, open modal */}
                                <button 
                                    className="ad-btn text-center" 
                                    onClick={() => setShowVideo(true)}>
                                    View
                                </button>
                                <a className="ad-btn2 text-center" href="https://github.com/yourusername/ecommerce" target="_blank" rel="noreferrer">GitHub</a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* ---------- Video Modal ---------- */}
            {showVideo && (
                <div className="video-modal">
                    <div className="video-content">
                        <span className="close-btn" onClick={() => setShowVideo(false)}>&times;</span>
                        
                        {/*Local Video Player */}
                        <video width="100%" height="auto" controls autoPlay>
                            <source src={EcommerceDemo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            )}
        </>
    )
}

export default Projects;
