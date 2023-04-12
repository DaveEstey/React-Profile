import React, { useState } from "react";
import "../styles/Navbar.css";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isChecked, setIsChecked] = useState(false);

  const handleLinkClick = () => {
    
    setIsChecked(false);

  
  };

  const switchCheck = () => {
    setIsChecked(!isChecked)
  }


    return (
      <>
        <input
          className="menu-icon"
          type="checkbox"
          id="menu-icon"
          name="menu-icon"
          onChange={switchCheck}
          checked={isChecked}
        />
        <label htmlFor="menu-icon"></label>
        <nav className="nav">
          <ul className="pt-5">
            <li onClick={handleLinkClick}>
              <NavLink to="/">
                About Me{" "}
              </NavLink>
            </li>
            <li >
              <NavLink to="/portfolio" onClick={handleLinkClick}>Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={handleLinkClick}>Contact Me</NavLink>
            </li>
            <li>
              <Link to="/resume" onClick={handleLinkClick}>Resume</Link>
            </li>
          </ul>
        </nav>
      </>
    );
  };


export default Navbar;
