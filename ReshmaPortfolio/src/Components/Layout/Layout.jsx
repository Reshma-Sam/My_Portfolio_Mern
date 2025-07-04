import React, { useState } from "react";
import Home from "../../Pages/Home/Home";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import "./layout.css";
import Menu from "../Menus/Menu";

function Layout() {
  const [toggle, setToggle] = useState(true);

  // Change toggle
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
          <div className="sidebar-toggle-icons">
            <p onClick={handleToggle}>
              {toggle ? (
                <MdOutlineKeyboardDoubleArrowLeft size={30} />
              ) : (
                <MdKeyboardDoubleArrowRight size={30} />
              )}
            </p>
          </div>
          <Menu toggle={toggle} />
        </div>
        <div className="container">
          <Home />
        </div>
      </div>
    </>
  );
}

export default Layout;
