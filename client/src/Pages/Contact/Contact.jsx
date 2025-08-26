import React, { useState, useEffect } from "react";
import './contact.css';
import { SiLinkedin, SiWhatsapp } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { toast } from 'react-toastify';
import axios from "axios";
import contactImage from '../../assets/Images/ContactMe.png'
import BASE_URL from "../../utils/api"

function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [msg, setMsg] = useState("")

    // Handle Submit Button
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (!name || !email || !msg) {
                toast.error("Please provide all fields")
            }
            console.log("Handle submission details", name, email, msg);

            const res = await axios.post(`${BASE_URL}/api/v1/portfolio/sendEmail`, { name, email, msg })
            if (res.data.success) {
                toast.success(res.data.message)
                setName("")
                setEmail("")
                setMsg("")
            }
            else {
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: 0.3 }
            });
        }
    }, [inView, controls]);

    return (
        <>
            <div className='contact' id="Contact">
                <div className="card card0 border-0">
                    <div className="row">
                        {/* Left Image */}
                        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                            <div className="card1">
                                <motion.div
                                    className="row border-line"
                                    ref={ref}
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={controls}
                                >
                                    <img src={contactImage} alt="Contact" className='image' />
                                </motion.div>
                            </div>
                        </div>

                        {/* Right Form */}
                        <div className="col-md-6 col-lg-6">
                            <div className="card2 d-flex card border-0 px-4 py-5">
                                <motion.div
                                    ref={ref}
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={controls}
                                    className="row"
                                >
                                    {/* Social Links */}
                                    <div className="row">
                                        <h6>Contact With
                                            <motion.a
                                                href="https://api.whatsapp.com/send?phone=7356299848"
                                                target="_blank"
                                                rel="noreferrer"
                                                whileHover={{ scale: 1.2 }}
                                                className="ms-2"
                                            >
                                                <SiWhatsapp color='green' size='30px' />
                                            </motion.a>
                                            <motion.a
                                                href="https://www.linkedin.com/in/reshma-vijayan-sr/"
                                                target="_blank"
                                                rel="noreferrer"
                                                whileHover={{ scale: 1.2 }}
                                                className="ms-2"
                                            >
                                                <SiLinkedin color='blue' size='30px' />
                                            </motion.a>
                                            <motion.a
                                                href="https://github.com/Reshma-Sam"
                                                target="_blank"
                                                rel="noreferrer"
                                                whileHover={{ scale: 1.2 }}
                                                className="ms-2"
                                            >
                                                <FaGithub color="black" size='30px' />
                                            </motion.a>
                                        </h6>
                                    </div>

                                    {/* OR Divider */}
                                    <div className="or-divider my-4">
                                        <div className="line" />
                                        <span className="or">OR</span>
                                        <div className="line" />
                                    </div>


                                    {/* Form */}
                                    <div className="row px-3">
                                        <input type="text" name="name" placeholder='Write your Name...' className='mb-3' value={name} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className="row px-3">
                                        <input type="email" name="email" placeholder='Enter your Email Address...' className='mb-3' value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="row px-3">
                                        <textarea type="text" name="msg" placeholder='Write your Message...' className='mb-3' value={msg} onChange={(e) => setMsg(e.target.value)} />
                                    </div>
                                    <div className="row px-3">
                                        <button className='button' type='submit' onClick={handleSubmit}>SEND MESSAGE</button>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
