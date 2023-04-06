import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'





function Navbar() {
  return (
    <>

  	<input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon"/>
  	<label for="menu-icon"></label>
  	<nav class="nav"> 		
  		<ul class="pt-5">
  			<li><NavLink to="/">About Me </NavLink></li>
  			<li><NavLink to="/projects">Projects</NavLink></li>
  			<li><NavLink to="/contact">Contact Me</NavLink></li>
  			<li><Link to="/resume">Resume</Link></li>
  		</ul>
  	</nav>
    </>
    )
}

export default Navbar
