import { React, useState } from 'react'
import './mobilenav.css'
import { CgMenu } from "react-icons/cg";
import {
  FcHome,
  FcAbout,
  FcBiotech,
  FcReadingEbook,
  FcVideoProjector,
  FcContacts,
} from "react-icons/fc";
import { LiaCertificateSolid } from "react-icons/lia";
import { AiOutlineMenuFold } from "react-icons/ai";
import { Link } from 'react-scroll';
import { motion } from "framer-motion";

function MobileNav() {
  const [open, setOpen] = useState(false)

  //Handle Open
  //-----------
  const handleOpen = () => {
    setOpen(!open);
  }

  //Handle Menu Click
  //-----------------
  const handleMenuClick = () => {
    setOpen(false)
  }
  return (
    <>
      <div className='mobile-nav'>
        <div className='mobile-nav-header'>
          {open ? (<AiOutlineMenuFold size={30} className='mobile-nav-icon' onClick={handleOpen} />
          ) : (
            <CgMenu size={30} className='mobile-nav-icon' onClick={handleOpen} />)}

          <span className='mobile-nav-title'> My Portfolio App</span>
        </div>
        {open && (
          <div className="mobile-nav-menu">
          <div className="nav-items">
            <motion.div
              className="nav-item"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="nav-link" href="#home">
                <Link to="Home" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                  <FcHome /> Home
                </Link>
              </div>
              <div className="nav-link" href="#about">
                <Link to="About" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                  <FcAbout /> About
                </Link>
              </div>
              <div className="nav-link" href="#certificates">
                <Link to="Certificates" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                  <LiaCertificateSolid /> Certificates
                </Link>
              </div>
              <div className="nav-link" href="#techstack">
                <Link to="TechStack" spy={true} smooth={true} offset={-100} duration={100}  onClick={handleMenuClick}>
                  <FcBiotech /> Tech Stack
                </Link>
              </div>
              <div className="nav-link" href="#projects">
                <Link to="Projects" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                  <FcVideoProjector /> Projects
                </Link>
              </div>
              <div className="nav-link" href="#education">
                <Link to="Education" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                  <FcReadingEbook /> Education
                </Link>
              </div>
              <div className="nav-link" href="#contacts">
                <Link to="Contact" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                  <FcContacts /> Contacts
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        )}
      </div>
    </>
  )
}

export default MobileNav