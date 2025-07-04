import React from "react";
import "./menu.css";
import {
  FcHome,
  FcAbout,
  FcBiotech,
  FcReadingEbook,
  FcVideoProjector,
  FcContacts,
} from "react-icons/fc";
import { LiaCertificateSolid } from "react-icons/lia";
import { Link } from 'react-scroll';
import { motion } from "framer-motion";


function Menu({ toggle }) {
  return (
    <>
      {toggle ? (
        <>
          {/* Profile Image with Framer Motion animation */}
          {/* ------------------------------------------ */}
          <motion.div
            className="navbar-profile-pic"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src="src/assets/Images/Reshma.jpg"
              alt="Profile pic"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          </motion.div>

          {/* Navigation Links */}
          {/* ------------------- */}
          <div className="nav-items">
            <motion.div
              className="nav-item"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="nav-link" href="#home">
                <Link to="Home" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcHome /> Home
                </Link>
              </div>
              <div className="nav-link" href="#about">
                <Link to="About" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcAbout /> About
                </Link>
              </div>
              <div className="nav-link" href="#certificates">
                <Link to="Certificates" spy={true} smooth={true} offset={-100} duration={100}>
                  <LiaCertificateSolid /> Certificates
                </Link>
              </div>
              <div className="nav-link" href="#techstack">
                <Link to="TechStack" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcBiotech /> Tech Stack
                </Link>
              </div>
              <div className="nav-link" href="#projects">
                <Link to="Projects" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcVideoProjector /> Projects
                </Link>
              </div>
              <div className="nav-link" href="#education">
                <Link to="Education" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcReadingEbook /> Education
                </Link>
              </div>
              <div className="nav-link" href="#contacts">
                <Link to="Contact" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcContacts /> Contacts
                </Link>
              </div>
            </motion.div>
          </div>
        </>
      ) : (
        <>
          <div className="nav-item">
            <div className="nav-link">
              <Link to="Home" spy={true} smooth={true} offset={-100} duration={100}>
                <FcHome />
              </Link>
            </div>
            <div className="nav-link">
              <Link to="About" spy={true} smooth={true} offset={-100} duration={100}>
                <FcAbout />
              </Link>
            </div>
            <div className="nav-link">
              <Link to="Certificates" spy={true} smooth={true} offset={-100} duration={100}>
                <LiaCertificateSolid />
              </Link>
            </div>
            <div className="nav-link">
              <Link to="TechStack" spy={true} smooth={true} offset={-100} duration={100}>
                <FcBiotech />
              </Link>
            </div>
            <div className="nav-link">
              <Link to="Projects" spy={true} smooth={true} offset={-100} duration={100}>
                <FcVideoProjector />
              </Link>
            </div>
            <div className="nav-link">
              <Link to="Education" spy={true} smooth={true} offset={-100} duration={100}>
                <FcReadingEbook />
              </Link>
            </div>

            <div className="nav-link">
              <Link to="Contact" spy={true} smooth={true} offset={-100} duration={100}>
                <FcContacts />
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Menu;

